import { AfterContentChecked, Component, ElementRef, Injector, OnInit, ViewChild } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { messages } from 'src/assets/data/message';
import { IUser } from 'src/pages/auth/helpers/model';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { SettingService } from 'src/pages/setting/services/setting/setting.service';
import { INoData } from 'src/shared/components/no-data/no-data.component';
import { Extender } from 'src/shared/helpers/extender';
import { GalleryPickerComponent } from 'src/shared/modals/gallery-picker/gallery-picker.component';
import { ImagePreviewComponent } from 'src/shared/modals/image-preview/image-preview.component';
import { CommonService } from 'src/shared/services/common/common.service';
import { FirestoreService } from 'src/shared/services/firestore/firestore.service';
import { CHAT_TYPES, IChat, IMessage } from '../../models/message';
import { MessagesService } from '../../services/messages/messages.service';
//import translate, { setCORS } from "google-translate-api-browser";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Button } from 'protractor';
import { GroupmodalPage } from '../../../../app/groupmodal/components/groupmodal.page'
//import { safeEval } from 'safe-eval';
import { ModalController } from '@ionic/angular'
import { CallsService } from '../../../messages/services/calls/calls.service';
/**
 * send messages between users. as a user, you can deactivate autoreply in setting page.
 * or remove autoreply method and all calls to it.
 * sending a message updates messages.message property with the latest message.
 * a function in firebase cloud functions checks every message update and sends a push notification to the device
 * check readme for info on cloud functions
 */
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent extends Extender implements OnInit, AfterContentChecked {
  public sendAt: number = Date.now();
  public message: IMessage;
  public currentUser: IUser;
  public chat: IChat[] = [];
  public chatType = CHAT_TYPES;
  public textMsg: string = '';
  public images: string[] = [];
  public sendLoading: boolean;
  public translated: string = '';
  public score: string = '100';
  public noDataconfig: INoData = {
    content: { title: 'Its quite here', description: 'start a conversation' }
  };
  @ViewChild('content', null) public content: ElementRef;
  @ViewChild('callNumber', null) public callNumber: ElementRef;
  @ViewChild('fileInputButton', null) private fileInputButton: ElementRef;


  constructor(
    protected injector: Injector,
    private http: HttpClient,
    private navParams: NavParams,
    private authService: AuthService,
    private commonService: CommonService,
    private firestoreService: FirestoreService,
    private messageService: MessagesService,
    private settingService: SettingService,
    public modalController: ModalController,
    private callService: CallsService
  ) {
    super(injector);
  }


  public async ngOnInit() {
    this.loading = true;
    this.currentUser = await this.authService.getUser();
    this.subscriptions.push(
      this.messageService.getMessage(this.navParams.get('data')).subscribe(
        (msg) => {
          this.message = msg;
          this.chat = this.message.messages;
          this.loading = false;
        },
        (err) => {
          this.loading = false;
          this.toast(err);
        }
      )
    )
      }
/*
// or
import translate, { setCORS } from "google-translate-api-browser";
setCORS("http://cors-anywhere.herokuapp.com/");
*/


  /** scroll to bottom when view loads with messages */
  public ngAfterContentChecked() {
    this.scrollToBottom();
  }

  /**
   * used in template to retrieve details of receiving user for the message
   * if currentUser's id doesn't match another user in list, get the other users data as a recipient
   */
  public getSender(message: IMessage) {
    return message ? message.participants.find((user: IUser) => user.uid !== this.currentUser.uid) : null;
  }

  /**
   * used in template to retrieve details of receiving user for the message
   * if currentUser's id match another user in list, get the other users data as a recipient
   */
  public getRecipient(message: IMessage) {
    return message ? message.participants.find((user: IUser) => user.uid === this.currentUser.uid) : null;
  }

  /** call sender user */
  public call() {
    this.commonService.callUser(this.getSender(this.message).mobile || this.getSender(this.message).phone, this.callNumber);
  }

  /** on message press show options is action sheet */
  public async onMessageHold(data: IChat) {
    if (data.uid === this.currentUser.uid) {
      const actionSheet = await this.actionSheetCtrl.create({
        header: 'Chat Options',
        buttons: [
          {
            text: 'Delete',
            role: 'Destructive',
            handler: () => {
              this.messageService
                .deleteChat(this.message, data)
                .then(() => this.scrollToBottom())
                .catch((err) => this.failPromise(err));
            }
          },
          {
            text: 'Close',
            role: 'cancel',
            handler: () => {}
          }
        ]
      });
      await actionSheet.present();
    }
  }

  public async group (){
    const modal = await this.modalController.create({
      component: GroupmodalPage,
      animated:true,
    });
    return await modal.present();
  }
  public async openMore(contact: IUser): Promise<any> {
    const actionSheetCtrl = await this.actionSheetCtrl.create({
      header: this.translate.instant('other.options'),
      buttons: [
        
        
        {
          text: this.translate.instant('people-component.call'),
          handler: () => {


            const sessionToken = this.random();
            let videocall = false;
            this.callService.startCall(contact, sessionToken, videocall);
            this.router.navigate(['/voice-room/' + sessionToken + '/voice']);
            this.closeModal();

//            this.commonService.callUser(contact.mobile || contact.phone, this.callNumber);
          }
        },
        {
          text: this.translate.instant('people-component.videocall'),
          handler: () => {

            const sessionToken = this.random();
            let videocall = true;
            this.callService.startCall(contact, sessionToken, videocall);
            this.router.navigate(['/video-room/' + sessionToken + '/video']);
            this.closeModal();

//            this.commonService.callUser(contact.mobile || contact.phone, this.callNumber);
          }
        },

        {
          text: 'Translator Option',
          handler: () => {
            this.translatorOptions();
          }
        },
        {
          text: this.translate.instant('other.cancel'),
          role: 'cancel'
        }
      ]
    });
    await actionSheetCtrl.present();
  }
  random(): string {
		//	let rand = Math.floor(Math.random()*20.0)+1.0;
		//	return rand;
		return (
			Math.random()
				.toString(36)
				.substring(2, 15) +
			Math.random()
				.toString(36)
				.substring(2, 15)
		);
  }
  /** send message, update uid property of message, this is needed to find the sender id and send notifications to recipients via firebase cloud functions */
  public send(text: any, images = null) {
    
    const data: IChat = {
      images,
      value: text,
      type: this.chatType.TEXT,
      sendAt: Date.now(),
      uid: this.currentUser.uid
    };
    this.sendLoading = true;
    if (text) {
      this.messageService
        .send({ ...this.message }, data)
        .then(() => {
          this.textMsg = '';
          this.sendLoading = false;
         // this.autoReply(messages[this.getRandomInt(1, 50)]);
        })
        .catch((err) => this.failPromise(err));
    }

    //https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + this.sl + "&tl=" + this.targetlan + "&hl=" + this.targetlan + "&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated

    this.translated = text;
    switch (this.score) {
     case '0':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ko&hl=ko&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '1':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=fr&hl=en&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '2':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-CH&hl=zh-CH&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '3':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-TW&hl=zh-TW&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '4':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ja&hl=ja&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '5':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=el&hl=el&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '6':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=cs&hl=cs&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '7':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=sv&hl=sv&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '8':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=pt&hl=pt&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '9':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=it&hl=it&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '10':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=de&hl=de&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '11':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=mn&hl=mn&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '12':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=nl&hl=nl&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '13':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=id&hl=id&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '14':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=uk&hl=uk&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '15':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=fi&hl=fi&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '16':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ar&hl=ar&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '17':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=vi&hl=vi&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '18':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ru&hl=ru&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '19':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=th&hl=th&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '20':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=gl&hl=gl&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '21':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=mg&hl=mg&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '22':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=sn&hl=sn&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '23':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=am&hl=am&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '24':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ps&hl=ps&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '25':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=gu&hl=gu&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      case '26':
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ml&hl=ml&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
      default:
        this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&hl=en&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
        .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error) );
      break;
    }
    var tempsetinterval = setInterval(() => {
      if (this.translated !== text) {
        const data2: IChat = {
          images,
          value: this.translated,
          type: this.chatType.TEXT,
          sendAt: Date.now(),
          uid: this.currentUser.uid
        };
        this.sendLoading = true;
        if (text) {
          this.messageService
            .send({ ...this.message }, data2)
            .then(() => {
              this.textMsg = '';
              this.sendLoading = false;
             // this.autoReply(messages[this.getRandomInt(1, 50)]);
            })
            .catch((err) => this.failPromise(err));
        }
        this.translated = '';
        clearInterval(tempsetinterval);

      };
    }, 1);


   
  }

  public async translatorOptions(){

    const asCtrl = await this.actionSheetCtrl.create({
    
        header: 'language',
        buttons: [
          {
            text: 'English',
            handler: () => {
              this.score = '100';      
            }
          },
          {
            text: 'France',
            handler: () => {
              this.score = '1';
              
            }
          },
          {
            text: 'China (Simplified)',
            handler: () => {
              this.score = '2';
              
            }
          }, 
          {
            text: 'China (Traditional)',
            handler: () => {
              this.score = '3';
              
            }
          },
          {
            text: 'Korean',
            handler: () => {
              this.score = '0';
              
            }
          },

          {
            text: 'Japenese',
            handler: () => {
              this.score = '4';
              
            }
          },
          
          {
            text: 'Greek',
            handler: () => {
              this.score = '5';
              
            }
          }, 
          {
            text: 'Czech',
            handler: () => {
              this.score = '6';
              
            }
          },{
            text: 'Swedish',
            handler: () => {
              this.score = '7';
              
            }
          },
          {
            text: 'Portuguese',
            handler: () => {
              this.score = '8';
              
            }
          },
          {
            text: 'Italian',
            handler: () => {
              this.score = '9';
              
            }
          }, 
          {
            text: 'German',
            handler: () => {
              this.score = '10';
              
            }
          },
          {
            text: 'Mongolia',
            handler: () => {
              this.score = '11';
              
            }
          },
          {
            text: 'Dutch',
            handler: () => {
              this.score = '12';
              
            }
          },
          
          {
            text: 'Indonesia',
            handler: () => {
              this.score = '13';
              
            }
          }, 
          {
            text: 'Ukrainian',
            handler: () => {
              this.score = '14';
              
            }
          },{
            text: 'Finland',
            handler: () => {
              this.score = '15';
              
            }
          },
          {
            text: 'Arabic',
            handler: () => {
              this.score = '16';
              
            }
          },
          {
            text: 'Vietnamese',
            handler: () => {
              this.score = '17';
              
            }
          }, 
          {
            text: 'Russian',
            handler: () => {
              this.score = '18';
              
            }
          },
          {
            text: 'Thai',
            handler: () => {
              this.score = '19';
              
            }
          },
          {
            text: 'Galicia',
            handler: () => {
              this.score = '20';
              
            }
          },
          {
            text: 'Malagasy',
            handler: () => {
              this.score = '21';
              
            }
          },
          {
            text: 'Shona',
            handler: () => {
              this.score = '22';
              
            }
          }, 
          {
            text: 'Amharic',
            handler: () => {
              this.score = '23';
              
            }
          },
          {
            text: 'Pashto',
            handler: () => {
              this.score = '24';
              
            }
          },
          {
            text: 'Gujarat',
            handler: () => {
              this.score = '25';
              
            }
          }, 
          {
            text: 'Malayalam',
            handler: () => {
              this.score = '26';
              
            }
          }
          
        ]
      });
      
      asCtrl.present();
      
    }
    
  /** for browser input file on change, run this method to get base64 string of files
   * and open gallery modal with the images
   */
  public detectFiles(event: any) {
    this.commonService.getImagesFromFiles(event).then((images) => {
      this.openGallery(images);
    });
  }

  /**
   * open action sheet with photo upload options, either from camera or library
   * and run getPictures method
   */
  public async sendPhoto() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Send Images',
      buttons: [
        {
          text: 'Use Camera',
          handler: () => {
            this.getPictures(1);
          }
        },
        {
          text: 'Use Library',
          handler: () => {
            this.getPictures(0, true);
          }
        },
        {
          text: 'Close',
          role: 'cancel',
          handler: () => {}
        }
      ]
    });
    await actionSheet.present();
  }
  

  /** auto reply to message */
 /* public autoReply(text: any, images = null) {
    if (this.settingService.setting.autoReply === true) {
      setTimeout(() => {
        const data: IChat = {
          images,
          value: text,
          type: this.chatType.TEXT,
          sendAt: Date.now(),
          uid: this.getSender(this.message).uid
        };
        this.loading = true;
        this.messageService
          .send({ ...this.message }, data)
          .then(() => (this.loading = false))
          .catch((err) => this.failPromise(err));
      }, 6000);
    }
  }*/

  /**
   * scroll to bottom of chat
   */
  public scrollToBottom(): void {
    const element = document.getElementById('last-item');
    if (element) {
      element.scrollIntoView({
        behavior: 'auto',
        block: 'end',
        inline: 'nearest'
      });
    }
  }

  /**
   * get image using native camera plugin to retrieve from either camera or library of device
   * param type is a number that specifies whether to get from camera or from library
   * one image retrieved, upload to firebase storage. if error, display a toast with error message
   */
  private async getPictures(type: number, multiple = false) {
    let imageData = [];
    this.loading = true;

    if ((window as any).cordova) {
      // if on device use native plugins
      imageData = await this.commonService.getPictures(type, multiple);
      await this.openGallery(imageData);
    } else {
      // if on device use browser file upload
      (this.fileInputButton.nativeElement as HTMLInputElement).click();
    }
  }

  /** open gallery with image files, on dismiss modal, get images and upload them */
  private async openGallery(imageData: any[]) {
    if (imageData.length > 0) {
      const modal = await this.openModal(GalleryPickerComponent, imageData, 'custom-modal');
      await modal.present();
      const { data } = await modal.onDidDismiss();
      if (data.images && data.images.length > 0) {
        this.uploadImage(data.text, data.images);
      } else {
        this.toast(this.translate.instant('message.component.no-images-selected'));
      }
    }
    (this.fileInputButton.nativeElement as HTMLInputElement).value = null;
  }

  /**
   * append base 64 string to image data, upload image data to firebase storage.
   * the upload function returns a download data which is then saved to images
   */
  private uploadImage(text: string, imageData: string[]) {
    this.images = imageData;
    const read$ = [];
    this.images.forEach((i) => {
      read$.push(this.firestoreService.uploadImage(i, `${Date.now()}-${this.currentUser.uid}`, 'chat-images'));
    });

    Promise.all(read$)
      .then((res) => {
        this.images = res;
        this.send(text, this.images);
        this.loading = false;
      })
      .catch((err) => this.failPromise(err));
  }

  private failPromise = (err: any) => {
    this.loading = false;
    this.sendLoading = false;
    this.toast(err);
  };
  goBack(){
		this.closeModal();
	}
}
