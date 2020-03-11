/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/




import { Router } from '@angular/router';
import { LoadingService } from '../../services/loading.service';
import { ActionSheetController, NavController, ToastController } from '@ionic/angular';
import { ImageService } from '../../services/image.service';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { toastEnter } from '../../animation/toast/toast.module';

@Component({
  selector: 'app-new-groups',
  templateUrl: './new-groups.page.html',
  styleUrls: ['./new-groups.page.scss'],
})
export class NewGroupsPage implements OnInit {
  public group: any;
  public groupForm: FormGroup;
  public friends: any;
  private searchFriend: any;
  public groupMembers: any;
  private alert: any;

  groupPhotoOptionCamera: CameraOptions;
  groupPhotoOptionGallery: CameraOptions;
  error_messages = {
    'name': [
      { type: 'required', message: ' Group name is required.' },
      { type: 'minLength', message: ' Group name length must be longer or equal to 3 character.' },
      { type: 'maxLength', message: 'Group name length must be lower or equal to 50 character.' },
      { type: 'pattern', message: 'Please enter a valid group name' }
    ],
    'description': [
      { type: 'required', message: 'description is required.' },
      { type: 'minLength', message: 'description length must be longer or equal to 6 character.' },
      { type: 'maxLength', message: 'description length must be lower or equal to 30 character.' },
      { type: 'pattern', message: 'Please enter a valid description' }
    ],
  }

  constructor(
    public dataServices: DataService,
    private formBuilder: FormBuilder,
    private camera: Camera, 
    private router: Router,
    private toast: ToastController,
    private navCtrl: NavController,
    public imageService: ImageService,
    public angularDb: AngularFireDatabase,
    private loading: LoadingService,
    private actionSheetController: ActionSheetController,
  ) {
    this.groupPhotoOptionCamera = {
      quality: 100,
      targetHeight: 530,
      targetWidth: 530,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
      // allowEdit: true
    }
    this.groupPhotoOptionGallery = {
      quality: 100,
      targetHeight: 530,
      targetWidth: 530,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
      // allowEdit: true
    }
    // for ali erroe side 
    this.groupForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30),

      ])),
      description: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(30),

      ])),

    });

  }

  public ngOnInit() {
    // Initialize
    this.group = {
      img: ''
    };
    this.searchFriend = '';
    // Get the user's friend to add to the group
    this.dataServices.getCurrentUser(firebase.auth().currentUser.uid).valueChanges().subscribe((account) => {
      if (!this.groupMembers) {
        this.groupMembers = [account]
      }
      if (account.friends) {
        for (let i = 0; i < account.friends.length; i++) {
          this.dataServices.getUser(account.friends[i]).valueChanges().subscribe((friend) => {
            this.addOrUpdateFriend(friend)
          })
        }
      } else {
        this.friends = [];
      }
    })
  }

  //Process with group creation
  public done() {
    this.loading.show();
    var messages = []
    //add system message that group is created
    messages.push({
      date: new Date().toString(),
      userId: firebase.auth().currentUser.uid,
      type: 'system',
      message: 'This group has been created.',
      icon: 'chatbubbles'
    });
    // Add members of the group
    var members = [];
    for (let i = 0; i < this.groupMembers.length; i++) {
      members.push(this.groupMembers[i].userId);
    }
    //Add group information and date
    this.group.dateCreated = new Date().toString(),
      this.group.messages = messages;
    this.group.members = members;
    this.group.name = this.groupForm.value["name"];
    this.group.description = this.groupForm.value["description"];
    this.group.admin = [firebase.auth().currentUser.uid];

    // Lets add to firebase database
    this.angularDb.list('/groups/').push(this.group).then((success) => {
      var groupId = success.key;
      //update the key
      success.update({
        key: groupId
      });
      //add group referenceuser to user;
      this.angularDb.object('/accounts/' + this.groupMembers[0].userId + '/groups/' + groupId).update({
        messagesRead: 1,
        key: groupId
      })
      for (let i = 0; i < this.groupMembers.length; i++) {
        this.angularDb.object('/accounts/' + this.groupMembers[i].userId + '/groups/' + groupId).update({
          messagesRead: 0,
          key: groupId
        })

      }
    }).then(() => {
      this.showToast('Your groups has been created')
      this.navCtrl.pop();
    })

  }
  // Check if friend is already added to the group or not.
  public inGroup(friend) {
    for (var i = 0; i < this.groupMembers.length; i++) {
      if (this.groupMembers[i].userId == friend.userId) {
        return true;
      }
    }
    return false;
  }

  //Add or update friend data fro real-time sync.
  public addOrUpdateFriend(friend) {
    if (!this.friends) {
      this.friends = [friend];
    } else {
      var index = -1;
      for (var i = 0; i < this.friends.length; i++) {
        if (this.friends[i].userId == friend.userId) {
          index = i;
        }
      }
      if (index > -1) {
        this.friends[index] = friend;
      } else {
        this.friends.push(friend);
      }
    }
  }

  //Add friend to member of groups
  public addToGroup(friend) {
    this.groupMembers.push(friend)
  }
  // Remove friend from members of group.
  public removeFromGroup(friend) {
    var index = -1;
    for (var i = 1; i < this.groupMembers.length; i++) {
      if (this.groupMembers[i].userId == friend.userId) {
        index = i;
      }
    }
    if (index > -1) {
      this.groupMembers.splice(index, 1);
    }
  }


  // action sheet for setPhoto image
  public async setGroupPhoto() {
    const actionSheet = await this.actionSheetController.create({

      header: 'Select Profile Picture',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.imageService.setGroupPhoto(this.group, this.camera.PictureSourceType.CAMERA);
          }
        },
        {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            this.imageService.setGroupPhoto(this.group, this.camera.PictureSourceType.PHOTOLIBRARY);
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {

          }
        }]
    });
    await actionSheet.present();
  }
  // set the image to group photo 
  public setImageCamera() {
    return new Promise((resolve, reject) => {
      this.camera.getPicture(this.groupPhotoOptionCamera).then((url) => {
        this.group = "data:image/jpeg;base64," + url;
        resolve(true)
      })
    })
  }
  public setImageGallery() {
    return new Promise((resolve, reject) => {
      this.camera.getPicture(this.groupPhotoOptionGallery).then((url) => {
        this.group = "data:image/jpeg;base64," + url;
        resolve(true)
      })
    })
  }

  public async showToast(message: string) {
    const toastPresent = await this.toast.create({
      message: message,
      duration: 300,
      enterAnimation: toastEnter,
      showCloseButton: true,
      position: 'top'
    })
    toastPresent.present();
  }


  public searchPeople(){
    this.router.navigateByUrl('/search')
  }

}
