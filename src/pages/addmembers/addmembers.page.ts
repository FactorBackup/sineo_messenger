
/*
* Social chat in Ionic 4 chat application (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/

import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { LoadingService } from '../../services/loading.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, AlertController, NavController } from '@ionic/angular';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-addmembers',
  templateUrl: './addmembers.page.html',
  styleUrls: ['./addmembers.page.scss'],
})
export class AddmembersPage implements OnInit {

  private groupId: any;
  private group: any;
  private groupMembers: any;
  public friends: any;
  private searchFriend: any;
  public toAdd: any;
  private alert: any;
  private user: any;
  // AddMemberPage
  // This is the page where the user can add their friends to an existing group.
  // The user can only add their friends to the group.

  constructor(
    private modalCtrl: ModalController,
    private navParam: NavParams,
    public loading: LoadingService,
    public dataService: DataService,
    private alertCtrl: AlertController,
    public angularDb: AngularFireDatabase,
    private router: Router,
    private navCtrl: NavController,

  ) {
    this.groupId = this.navParam.get('groupId')
  }

  public ngOnInit() {
    this.toAdd = [];
    this.loading.show();
    //get the current user database
    this.dataService.getCurrentUser(firebase.auth().currentUser.uid).valueChanges().subscribe((user) => {
      this.user = user;
    })
    // Get group information
    this.dataService.groups(this.groupId).valueChanges().subscribe((group) => {
      this.group = group;
      this.groupMembers = null;
      if (group.members) {
        group.members.forEach((memberId) => {
          this.dataService.getUser(memberId).valueChanges().subscribe((member) => {
            this.addOrUpdateMember(member);
          });
        });

        //Get User's friend to add
        this.dataService.getCurrentUser(firebase.auth().currentUser.uid).valueChanges().subscribe((account) => {
          if (account.friends) {
            for (let i = 0; i < account.friends.length; i++) {
              this.dataService.getUser(account.friends[i]).valueChanges().subscribe((friend) => {
                //Only friend that are not yet memebr of this group can add
                if (!this.isMember(friend))
                  this.addOrUpdateFriend(friend);
              });
            }
            if (!this.friends) {
              this.friends = [];
            }
          } else {
            this.friends = []
          }
        });
      }
      this.loading.hide();
    })

  }
  // Check if friend is already on the list of members to be added.
  public isAdded(friend) {
    if (this.toAdd) {
      for (var i = 0; i < this.toAdd.length; i++) {
        if (this.toAdd[i].userId == friend.userId) {
          return true;
        }
      }
    }
    return false;
  }
  // Toggle for adding/removing friend on the list of members to be added.
  public addOrRemove(friend) {
    if (this.isAdded(friend)) {
      this.remove(friend);
    } else {
      this.add(friend);
    }
  }


  // Get names of the members to be added to the group.
  public getNames() {
    var names = '';
    this.toAdd.forEach((friend) => {
      names += friend.name + ', ';
    });
    return names.substring(0, names.length - 2);
  }
  // Add friend to the list of to be added.
  public add(friend) {
    this.toAdd.push(friend);
  }
  // Remove friend from the list of to be added.
  public remove(friend) {
    this.toAdd.splice(this.toAdd.indexOf(friend), 1);
  }
  // Check if friend is a member of the group or not.
  public isMember(friend) {
    if (this.groupMembers) {
      for (var i = 0; i < this.groupMembers.length; i++) {
        if (this.groupMembers[i].userId == friend.userId) {
          return true;
        }
      }
    }
    return false;
  }

  public close() {
    this.modalCtrl.dismiss()
  }
  // Add or update friend information for real-time sync.
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

  // Add or update member information for real-time sync.
  public addOrUpdateMember(member) {
    if (!this.groupMembers) {
      this.groupMembers = [member];
    } else {
      var index = -1;
      for (var i = 0; i < this.groupMembers.length; i++) {
        if (this.groupMembers[i].userId == member.userId) {
          index = i;
        }
      }
      if (index > -1) {
        this.groupMembers[index] = member;
      } else {
        this.groupMembers.push(member);
      }
    }
  }

  public async addSeved() {
    const alert = await this.alertCtrl.create({
      header: 'Add Members',
      message: 'Are you sure you want to add <b>' + this.getNames() + '</b> to the group?',
      buttons: [
        {
          text: 'Cancel',
          handler() { }
        },
        {
          text: 'Add',
          handler: (data) => {
            this.loading.show();
            this.toAdd.forEach((friend) => {
              // Add groupInfo to each friend added to the group.
              this.angularDb.object('/accounts/' + friend.userId + '/groups/' + this.groupId)
              this.group.members.push(friend.userId);
              // Add system message that the members are added to the group.
              this.group.messages.push({
                date: new Date().toString(),
                userId: firebase.auth().currentUser.uid,
                type: 'system',
                message: this.user.name + 'has added ' + this.getNames() + ' to the group.',
                icon: 'contacts'
              });
            });
            // Update group data on the database.
            this.dataService.groups(this.groupId).update({
              members: this.group.members,
              messages: this.group.messages
            }).then(() => {
              // Back.
              this.loading.hide();
              this.modalCtrl.dismiss()
            });
          }
        }
      ]
    })
    alert.present();
  }


  public searchPeople() {
    this.router.navigateByUrl('/search')
  }
}
