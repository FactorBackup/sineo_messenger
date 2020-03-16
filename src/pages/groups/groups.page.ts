/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2019-present. All right reserved.
* Author By Abubakar Pagas
*/


import { GroupsChatPage } from '../groups-chat/groups-chat.page';
import { DataService } from '../../services/data.service';
import { LoadingService } from '../../services/loading.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { ModalController } from '@ionic/angular';
import { myLeaveAnimation } from '../../animation/modal-animation/modal-leave.module';
import { myEnterAnimation } from '../../animation/modal-animation/modal-enter.module';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss'],
})
export class GroupsPage implements OnInit {

  private account: any;
  groups: any;

  img = 'assets/profile.png';
  group
  constructor(
    private router: Router,
    public loading: LoadingService,
    public dataServices: DataService,
    private modelCtrl: ModalController,
  ) { }

  public async ngOnInit() {
    // Get user data on database and get list of group.\
    await this.dataServices.keyGroups(firebase.auth().currentUser.uid).valueChanges().subscribe((groupIds) => {
      if (groupIds.length > 0) {
        if(this.groups && this.groups.length > groupIds.length) {
          this.groups = [];
        }
        groupIds.forEach((groupId) => {
        this.dataServices.groups(groupId.key).valueChanges().subscribe((group) => {
          // console.log('groups', group);
          this.dataServices.listUnread(groupId.key).valueChanges().subscribe((unread) =>{
            group.unreadMessagesCount = unread.length
          //  console.log("unread", group.unreadMessagesCount )
          })
          this.addOrUpdateFriend(group);
        })
      })
    } else {
      this.groups = [];
    }
  });
  }

  public newGroups() {
    this.router.navigateByUrl("/new-groups");
  }

  //Add or update friend data fro real-time sync.
  public addOrUpdateFriend(group) {
    if (!this.groups) {
      this.groups = [group];
    } else {
      var index = -1;
      for (var i = 0; i < this.groups.length; i++) {
        if (this.groups[i].key == group.key) {
          index = i;
        }
      }
      if (index > -1) {
        this.groups[index] = group;
      } else {
        this.groups.push(group);
      }
    }
  }

    // Return class based if group has unreadMessages or not.
    public hasUnreadMessages(group) {
      if (group.unreadMessagesCount > 0) {
        return 'group bold';
      } else
        return 'group';
    }

  public async groupChat(key) {
    const model = await this.modelCtrl.create({
      component: GroupsChatPage,
      leaveAnimation: myLeaveAnimation,
      enterAnimation: myEnterAnimation,
      componentProps: {
        key: key
      }
    })
    model.present()
  }

}
