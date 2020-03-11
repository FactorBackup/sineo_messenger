/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/


import { GroupInfoPage } from '../group-info/group-info.page';
import { ImageService } from '../../services/image.service';
import { DataService } from '../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, ModalController, IonContent, AlertController, ActionSheetController } from '@ionic/angular';
import * as firebase from 'firebase';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as _ from 'lodash';
import { AngularFireDatabase } from '@angular/fire/database';
import { EnlargeImagePage } from '../enlarge-image/enlarge-image.page';
import { myEnterAnimation } from '../../animation/modal-animation/modal-enter.module';
import { myLeaveAnimation } from '../../animation/modal-animation/modal-leave.module';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-groups-chat',
  templateUrl: './groups-chat.page.html',
  styleUrls: ['./groups-chat.page.scss'],
})
export class GroupsChatPage implements OnInit {
  public title: any;
  private groupId: any;
  public message: any;
  private messages: any;
  group: any;
  groups: any;
  private alert: any;

  private updateDateTime: any;
  private subscription: any;
  messagesToShow = [];
  private startIndex: any = -1;
  // Set number of messages to show.
  private numberOfMessages = 10;
  isAdmin: any;
  myTracks: any;
  allTracks: any;
  selectedTrack: any;
  userId;
  image
  keyMessage


  @ViewChild('IonContent', { static: true }) IonContent: IonContent

  constructor(
    private navParam: NavParams,
    private modalCtrl: ModalController,
    public dataServices: DataService,
    public angularDb: AngularFireDatabase,
    private actionSheet: ActionSheetController,
    public imageService: ImageService,
    private camera: Camera,
  ) {
    this.groupId = this.navParam.get('key')

  }

  public ngOnInit() {
    // to  clear the message when enter to the chat
    this.setMessagesRead();
    this.userId = firebase.auth().currentUser.uid;
    this.subscription = this.dataServices.groups(this.groupId).valueChanges().subscribe((group) => {
      this.group = group;
      if (group.admin) {
        let index = _.indexOf(group.admin, firebase.auth().currentUser.uid);
        if (index > - 1) {
          this.isAdmin = true;
        }
      }
      //for the title
      this.title = group.name;
      this.image = group.img;
      //get the message from the group
      this.dataServices.getGroupMessage(this.groupId).valueChanges().subscribe((messages) => {
        this.messagesToShow = []
        messages.forEach((message) => {
          let tempMessage = message;
          let tempData = <any>{}
          tempData = tempMessage;
          this.dataServices.getUser(tempMessage.userId).valueChanges().subscribe((user) => {
            tempData.name = user.username;
            tempData.avatar = user.img;
          });
          this.messagesToShow.push(tempData);
        })

      })
    })
  }

  public async sendPhoto() {
    const alert = await this.actionSheet.create({
      header: "Send Photo  Message",
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            //Upload the image and retunr pormise
            this.imageService.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then((url) => {
              //process photo massge on the database
              this.sendMessagePhoto(url);
            })
          },
        },
        {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            //Upload the image and retunr pormise
            this.imageService.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.PHOTOLIBRARY).then((url) => {
              //process photo massge on the database
              this.sendMessagePhoto(url);
            })
          },
        },
        {
          text: 'Cancel',
          icon: 'help-circle',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    })
    alert.present();
  }
  // Check if currentPage is active, then update user's messagesRead.
  public setMessagesRead() {
    this.angularDb.object('/accounts/' + firebase.auth().currentUser.uid + '/groups/' + this.groupId + '/messagesRead/').remove()
  }

  public ionViewDidEnter() {
    this.setMessagesRead();
    setTimeout(() => {
      this.scrollToBottom()
    }, 500)
  }
  public scroll() {
    setTimeout(() => {
      this.scrollToBottom()
    }, 10)
  }
  // Update messagesRead when user lefts this page.
  public ionViewWillLeave() {
    this.setMessagesRead();
  }
  public close() {
    this.modalCtrl.dismiss();
  }
  public scrollToBottom() {
    this.IonContent.scrollToBottom(100)
  }
  // Send text message to the group.
  public sendMessage() {
    let messages = this.messages;
    messages = {
      date: new Date().toString(),
      userId: firebase.auth().currentUser.uid,
      type: 'text',
      message: this.message
    }
    //update group message
    firebase.database().ref('groups').child(this.groupId).child('messages').push(messages).then((sucess) => {
      this.keyMessage = sucess.key;
      this.message = '';
      setTimeout(() => {
        this.scrollToBottom()
      }, 10)
    }).then(() => {
      for (let i = 0; i < this.group.members.length; i++) {
        firebase.database().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
          key: this.keyMessage
        })

      }
    })
  }
  
  public sendMessagePhoto(url) {
    let messages = {
      date: new Date().toString(),
      userId: firebase.auth().currentUser.uid,
      type: 'image',
      url: url
    }
    //update group message
    firebase.database().ref('groups').child(this.groupId).child('messages').push(messages).then(() => {
      this.message = '';
      setTimeout(() => {
        this.scrollToBottom()
      }, 10)
    })


  }


  public async groupInfo() {
    const model = await this.modalCtrl.create({
      component: GroupInfoPage,
      componentProps: {
        groupId: this.groupId
      }
    })
    model.present()
  }

  public async enlargeImage(image) {
    const imageModal = await this.modalCtrl.create({
      component: EnlargeImagePage,
      enterAnimation: myEnterAnimation,
      leaveAnimation: myLeaveAnimation,
      componentProps: {
        image: image
      }
    });
    imageModal.present()
  }


}
