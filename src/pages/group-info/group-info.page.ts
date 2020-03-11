/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/


import { take } from 'rxjs/operators';
import { AddmembersPage } from '../addmembers/addmembers.page';
import { ImageService } from '../../services/image.service';
import { AlertService } from '../../services/alert.service';
import { LoadingService } from '../../services/loading.service';
import { DataService } from '../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController, ActionSheetController, NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import * as _ from 'lodash';
import { Camera } from '@ionic-native/camera/ngx';
import { EnlargeImagePage } from '../enlarge-image/enlarge-image.page';
import { myEnterAnimation } from '../../animation/modal-animation/modal-enter.module';
import { myLeaveAnimation } from '../../animation/modal-animation/modal-leave.module';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-info',
  templateUrl: './group-info.page.html',
  styleUrls: ['./group-info.page.scss'],
})
export class GroupInfoPage implements OnInit {

  private groupId: any;
  group: any;
  public groupMembers: any;
  private alert: any;
  private user: any;
  private subscription: any;
  isAdmin: any;
  // GroupInfoPage
  // This is the page where the user can view group information, change group information, add members, and leave/delete group.

  constructor(
    private modalCtrl: ModalController,
    private navParam: NavParams,
    public dataService: DataService,
    private actionCtrl: AlertController,
    public loading: LoadingService,
    private camera: Camera,
    private router: Router,
    public angularDb: AngularFireDatabase,
    private navCtrl: NavController,
    public alertService: AlertService,
    private actionSheetController: ActionSheetController,
    public imageService: ImageService,
  ) {
    this.groupId = this.navParam.get('groupId')
  }

  public ngOnInit() {
    this.dataService.groups(this.groupId).valueChanges().subscribe((group) => {
      this.loading.show();
      this.group = group;
      if (group.admin) {
        let index = _.indexOf(group.admin, firebase.auth().currentUser.uid);
        if (index > - 1) {
          this.isAdmin = true;
        }
      }
      if (group.members) {
        group.members.forEach((memberId) => {
          this.dataService.getUser(memberId).valueChanges().subscribe((member) => {
            console.log('members', member)
            this.addUpdateOrRemoveMember(member);
          });
        });
      }
      this.loading.hide();
    });
    //let get the user details
    this.dataService.getCurrentUser(firebase.auth().currentUser.uid).valueChanges().subscribe((user) => {
      this.user = user;
    })

  }

  public isAdminOrNotAdmin(member) {
    let index = _.indexOf(this.group.admin, member.userId);
    if (index > -1) {
      return true;
    } else {
      return false;
    }
  }


  // let create  a assign the admin member
  public async  assignAdmin(member) {
    if (this.isAdmin && this.user.userId !== member.userId) {
      if (this.isAdminOrNotAdmin(member)) {
        const actionSheet = await this.actionCtrl.create({
          header: 'Remove Admin',
          buttons: [
            {
              text: 'Remove Admin',
              handler: () => {
                this.loading.show();
                let index = _.indexOf(this.group.admin, member.userId);
                if (index >= 0) {
                  this.group.admin.splice(index, 1);
                  this.dataService.groups(this.groupId).update({
                    admin: this.group.admin,
                  }).then(() => {
                    firebase.database().ref('groups').child(this.groupId).child('messages').push({
                      date: new Date().toString(),
                      sender: this.user.userId,
                      type: 'system',
                      message: this.user.username + ' has removed ' + member.username + ' as admin.',
                      icon: 'md-contacts'
                    }).then((sucess) => {
                      let key = sucess.key
                      for (let i = 0; i < this.group.members.length; i++) {
                        firebase.database().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                          key: key
                        })
                      }
                    }).then(() => {
                      // Back.
                      this.loading.hide();
                      this.modalCtrl.dismiss();
                    })
                  });
                } else {
                  this.loading.hide();
                  this.alertService.showAlert('Failed', "Member not admin.")
                }
              },
            },
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => { }
            }
          ]
        })
        actionSheet.present();
      } else {
        const actionSheet = await this.actionCtrl.create({
          header: 'Assign New Admin',
          buttons: [
            {
              text: 'Make Admin',
              role: 'share',
              handler: () => {
                this.loading.show();
                let index = _.indexOf(this.group.admin, member.userId);
                if (index < 0) {
                  let _tempAdmin = this.group.admin;
                  _tempAdmin.push(member.userId)
                  this.dataService.groups(this.groupId).update({
                    admin: _tempAdmin,
                  }).then(() => {
                    firebase.database().ref('groups').child(this.groupId).child('messages').push({
                      date: new Date().toString(),
                      sender: this.user.userId,
                      type: 'system',
                      message: this.user.username + ' has make ' + member.username + ' as admin.',
                      icon: 'md-contacts'
                    }).then((sucess) => {
                      let key = sucess.key
                      for (let i = 0; i < this.group.members.length; i++) {
                        firebase.database().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                          key: key
                        })
                      }
                    }).then(() => {
                      // Back.
                      this.loading.hide();
                      this.modalCtrl.dismiss();
                    })

                  });
                } else {
                  this.loading.hide();
                  this.alertService.showAlert('Failed', "Member alerday admin.")
                }

              }
            },
            {
              text: 'Cancel',
              role: 'cancel',
              handler: () => { }
            }
          ]
        })
        actionSheet.present();
      }

    }

  }

  //set the name 
  public async setName() {
    const alert = await this.actionCtrl.create({
      header: 'Change group Name',
      message: ' Please enter a new group name',
      inputs: [
        {
          name: 'name',
          placeholder: 'Group Name',
          value: this.group.name,
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => { }
        },
        {
          text: 'Save',
          handler: (data) => {
            let name = data["name"];
            if (this.group.name != name) {
              this.loading.show();
              this.dataService.groups(this.groupId).update({
                name: name,
              }).then(() => {
                firebase.database().ref('groups').child(this.groupId).child('messages').push({
                  date: new Date().toString(),
                  userId: firebase.auth().currentUser.uid,
                  type: 'system',
                  message: this.user.username + ' has change the group name to: ' + name + '.',
                  icon: 'create'
                }).then((sucess) => {
                  let key = sucess.key
                  for (let i = 0; i < this.group.members.length; i++) {
                    firebase.database().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                      key: key
                    })
                  }
                  this.loading.hide();
                  this.alertService.showGroupUpdatedMessage();
                }).catch((error) => {
                  this.loading.hide();
                  this.alertService.showErrorMessage('group/error-update-group');
                })
              })

            }
          }
        }
      ]
    })
    alert.present();

  }

  //Set the photo 
  public async setPhoto() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Group Picture',
      buttons: [
        {
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            this.loading.show();
            this.imageService.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.CAMERA).then((group) => {
              this.dataService.groups(this.groupId).update({
                img: group,
              }).then(() => {
                // then let add to systme massage can any one see in the group
                firebase.database().ref('groups').child(this.groupId).child('messages').push({
                  date: new Date().toString(),
                  userId: firebase.auth().currentUser.uid,
                  type: 'system',
                  message: this.user.username + ' has changed the group photo.',
                  icon: 'camera'
                }).then((sucess) => {
                  let key = sucess.key
                  for (let i = 0; i < this.group.members.length; i++) {
                    firebase.database().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                      key: key
                    })
                  }
                  this.loading.hide();
                  this.alertService.showGroupUpdatedMessage();
                }).catch((error) => {
                  this.loading.hide();
                  this.alertService.showErrorMessage('group/error-update-group');
                })
              })
            })
          }
        },
        {
          text: 'Gallery',
          icon: 'images',
          handler: () => {
            this.loading.show();
            this.imageService.uploadGroupPhotoMessage(this.groupId, this.camera.PictureSourceType.PHOTOLIBRARY).then((group) => {
              this.dataService.groups(this.groupId).update({
                img: group,
              }).then(() => {
                // then let add to systme massage can any one see in the group
                firebase.database().ref('groups').child(this.groupId).child('messages').push({
                  date: new Date().toString(),
                  userId: firebase.auth().currentUser.uid,
                  type: 'system',
                  message: this.user.username + ' has changed the group photo.',
                  icon: 'camera'
                }).then((sucess) => {
                  let key = sucess.key;
                  for (let i = 0; i < this.group.members.length; i++) {
                    firebase.database().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                      key: key
                    })
                  }
                  this.loading.hide();
                  this.alertService.showGroupUpdatedMessage();
                }).catch((error) => {
                  this.loading.hide();
                  this.alertService.showErrorMessage('group/error-update-group');
                })
              })
            })

          }
        }, {
          text: 'Cancel',
          icon: 'help-circle',
          role: 'cancel',
          handler: () => {

          }
        }]
    });
    await actionSheet.present();
  }

  //set description
  public async setDescription() {
    const alert = await this.actionCtrl.create({
      header: 'Change Group Description',
      message: "Please enter a new group description",
      inputs: [
        {
          name: 'description',
          placeholder: 'Group Description',
          value: this.group.description
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => { }
        },
        {
          text: 'Save',
          handler: (data) => {
            let description = data["description"];
            if (this.group.description != description) {
              this.loading.show();
              //let update to firebase database
              this.dataService.groups(this.groupId).update({
                description: description,
              }).then(() => {
                // then let add to systme massage can any one see in the group
                firebase.database().ref('groups').child(this.groupId).child('messages').push({
                  date: new Date().toString(),
                  sender: firebase.auth().currentUser.uid,
                  type: 'system',
                  message: this.user.username + ' has changed the group description.',
                  icon: 'md-clipboard'
                }).then((sucess) => {
                  let key = sucess.key;
                  for (let i = 0; i < this.group.members.length; i++) {
                    firebase.database().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                      key: key
                    })
                  }
                  this.loading.hide();
                  this.alertService.showGroupUpdatedMessage();
                }).catch((error) => {
                  this.loading.hide();
                  this.alertService.showErrorMessage('group/error-update-group');
                })
              })
            }

          }

        }
      ]
    })
    alert.present();

  }
  //handel the leave the gr\oups
  public async leaveGroup() {
    const alert = await this.actionCtrl.create({
      header: 'Confirm Leave',
      message: 'Are you sure you want to leave this group?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => { }
        },
        {
          text: 'Leave',
          handler: () => {
            this.loading.show();
            // Remove member from group.
            this.group.members.splice(this.group.members.indexOf(this.user.userId), 1);
            this.dataService.groups(this.groupId).update({
              members: this.group.members,
            }).then(() => {
              // Add system message.
              firebase.database().ref('groups').child(this.groupId).child('messages').push({
                date: new Date().toString(),
                sender: firebase.auth().currentUser.uid,
                type: 'system',
                message: this.user.username + ' has left this group.',
                icon: 'md-log-out'
              }).then((sucess) => {
                let key = sucess.key
                for (let i = 0; i < this.group.members.length; i++) {
                  firebase.database().ref('accounts').child(this.group.members[i]).child('groups').child(this.groupId).child('messagesRead').push({
                    key: key
                  })
                }
                // Remove group from user's group list.
                this.dataService.accountsGroups(this.user.userId).valueChanges().pipe(take(1)).subscribe((groups) => {
                  groups.splice(groups.indexOf(this.groupId), 1);
                  setTimeout(() => {
                    this.loading.hide();
                    this.modalCtrl.dismiss();
                  }, 300);

                })
              }).catch((error) => {
                this.loading.hide();
                this.alertService.showErrorMessage('group/error-leave-group');
              })
            })
          }
        }
      ]
    })
    alert.present()
  }

  //handel ot delete the groups
  public async deleteGroup() {
    const alert = await this.actionCtrl.create({
      header: ' Confirm Delete',
      message: "Are you sure you want delete this group",
      buttons: [
        {
          text: 'Cancel',
        },
        {
          text: 'Delete',
          handler: data => {
            // Delete group image.
            this.angularDb.object('/accounts/' + firebase.auth().currentUser.uid + '/groups/' + this.groupId).remove().then(() => {
              this.dataService.groups(this.groupId).remove();
            });
          }
        }
      ]
    })
    alert.present();

  }


  public close() {
    this.modalCtrl.dismiss();
  }
  async enlargeImage(image) {
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
  // Get names of the members to be added to the group.
  // Check if user exists in the group then add/update user.
  // If the user has already left the group, remove user from the list.
  public addUpdateOrRemoveMember(member) {
    if (this.group) {
      if (this.group.members.indexOf(member.userId) > -1) {
        // User exists in the group.
        if (!this.groupMembers) {
          this.groupMembers = [member];
        } else {
          var index = -1;
          for (var i = 0; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].userId == member.userId) {
              index = i;
            }
          }
          // Add/Update User.
          if (index > -1) {
            this.groupMembers[index] = member;
          } else {
            this.groupMembers.push(member);
          }
        }
      } else {
        // User already left the group, remove member from list.
        var index = -1;
        for (var i = 0; i < this.groupMembers.length; i++) {
          if (this.groupMembers[i].userId == member.userId) {
            index = i;
          }
        }
        if (index > -1) {
          this.groupMembers.splice(index, 1);
        }
      }
    }
  }

  //add members
  public async addMembers() {
    const imageModal = await this.modalCtrl.create({
      component: AddmembersPage,
      componentProps: {
        groupId: this.groupId
      }
    });
    imageModal.present()
  }


}
