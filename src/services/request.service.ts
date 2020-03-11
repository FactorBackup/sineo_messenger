/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/


import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { DataService } from './data.service'
import * as _ from 'lodash';
import { take } from 'rxjs/operators';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from "@angular/fire/database";
import { AlertService } from './alert.service'
import { LoadingService } from './loading.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    public dataService: DataService,
    public angularDb: AngularFireDatabase,
    public alertService: AlertService,
    public loading: LoadingService,
  ) { }


  // Send friend Requets to userId to friend
  sendFriendRequest(userId) {
    this.loading.show();
    this.dataService.getRequests(firebase.auth().currentUser.uid).valueChanges().pipe(take(1)).subscribe(requests => {
      var requestsSent = requests;
      if (!requestsSent) {
        requestsSent = [userId];
      } else {
        requestsSent.push(userId);
      }
      //add requestsSent information
      this.angularDb.object('requests/' + firebase.auth().currentUser.uid + '/requestsSent/')
        .update(requestsSent).then((success) => {
          var friendRequests;
          this.dataService.getRequestOther(userId).valueChanges().pipe(take(1)).subscribe(requests => {
            friendRequests = requests;
            if (!friendRequests) {
              friendRequests = [firebase.auth().currentUser.uid];
            } else {
              friendRequests.push(firebase.auth().currentUser.uid);
            }
            this.angularDb.object('requests/' + userId + '/friendRequests/')
              .update(friendRequests).then((success) => {
                this.loading.hide();
                this.alertService.showFriendRequestSent();
              }).catch((error) => {
                this.loading.hide();
              });

          });
        }).catch((error) => {
          this.loading.hide();
        });
    });
  }

  // Delete friend request
  deleteFriendRequest(userId) {
    let loggedInUserId = firebase.auth().currentUser.uid;
    this.loading.show();
    this.dataService.getRequests(loggedInUserId).valueChanges().pipe(take(1)).subscribe(requestsSent => {
      requestsSent.splice(requestsSent.indexOf(userId), 1);
      if (requestsSent.length) {
        this.angularDb.object("/requests/" + loggedInUserId + "/requestsSent/").remove();
        this.dataService.getRequests(loggedInUserId).set(requestsSent)
      } else {
        this.angularDb.object("/requests/" + loggedInUserId + "/requestsSent/").remove();
      }
      this.dataService.getRequestOther(userId).valueChanges().pipe(take(1)).subscribe(friendsRequest => {
        friendsRequest.splice(friendsRequest.indexOf(loggedInUserId), 1);
        if (friendsRequest.length) {
          this.angularDb.object("/requests/" + userId + "/friendRequests/").remove();
          this.dataService.getRequests(loggedInUserId).set(friendsRequest)
        } else {
          this.angularDb.object("/requests/" + userId + "/friendRequests/").remove();
        }
        this.alertService.showFriendRequestRemoved();
        this.loading.hide();
      })
    })
  }
  //accept friend request
  acceptFriendRequest(userId) {
    let loggedInUserId = firebase.auth().currentUser.uid;
    //Delete friend request if is accept will be deleted the request
    this.deleteFriendRequest(userId);
    this.loading.show();
    //goes to the current user
    this.dataService.getUser(loggedInUserId).valueChanges().pipe(take(1)).subscribe(account => {
      var friends = account.friends;
      if (!friends) {
        friends = [userId];
      } else {
        friends.push(userId);
      }
      // Add both user as friends
      //get the friend index user base current 
      this.dataService.getUser(loggedInUserId).update({
        friends: friends
      }).then(success => {
        this.dataService.getUser(userId).valueChanges().pipe(take(1)).subscribe(account => {
          var friends = account.friends;
          if (!friends) {
            friends = [loggedInUserId];
          } else {
            friends.push(loggedInUserId);
          }
          this.dataService.getUser(userId).update({
            friends: friends
          }).then(success => {
            this.loading.hide();
          }).catch(error => {
            this.loading.hide();
          });
        });
      }).catch(error => {
        this.loading.hide();
      });
    });
  }

  unFriend(userId) {
    //Lets Remove friend userId from your firebase account
    this.dataService.getUser(userId).valueChanges().pipe(take(1)).subscribe((account) => {
      var friends = account.friends;
      if (friends) {
        _.remove(friends, n => {
          return n == firebase.auth().currentUser.uid;
        });
        this.dataService.getUser(userId).update({
          freinds: friends
        }).then(() => { });
      }
    });
     //Lets Remove friend current user logged from your firebase account
    this.dataService.getUser(firebase.auth().currentUser.uid).valueChanges().pipe(take(1)).subscribe((account) => {
      var friends = account.friends;
      if (friends) {
        _.remove(friends, n => {
          return n == userId;
        });
        this.dataService.getUser(firebase.auth().currentUser.uid).update({
          freinds: friends
        }).then(() => { });
      }
    })
  }

}
