/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/


import { LoadingService } from './loading.service';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { take } from 'rxjs/operators';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {

  constructor(
    private dataService: DataService,
    private loading: LoadingService,
    public angularDb: AngularFireDatabase,

  ) { }
  //=== like postBy ===//
  likePost(key) {
    return new Promise((resolve, reject) => {
      this.dataService.postLike(key).valueChanges().pipe(take(1)).subscribe((like) => {
        var likes = like;
        if (!likes) {
          likes = [firebase.auth().currentUser.uid];
        } else {
          likes.push(firebase.auth().currentUser.uid);
        }

        this.dataService.postLike(key).set(likes).then((success) => {
          resolve(true)
        }).catch((error) => {
          reject(false)
        })
      })
    })
  }
  //=== delike post item
  delikePost(key) {
    return new Promise((resolve, reject) => {
      this.dataService.postLike(key).valueChanges().pipe(take(1)).subscribe((likes) => {
        likes.splice(likes.indexOf(firebase.auth().currentUser.uid), 1);
        if (likes.length) {
          this.angularDb.object('likes' + key).remove();

          this.dataService.postLike(key).set(likes).then(() => {
            resolve(true)
          }).catch((err) => {
            reject(false)
          });
        } else {
          this.angularDb.object('likes/' + key).remove()
        }
      })
    })
  }
  commentPost(key, comment) {
    return new Promise((resolve, reject) => {
      this.dataService.getComments(key).valueChanges().pipe(take(1)).subscribe((comments) => {
        var comments = comments;
        if (!comments) {
          comments = [comment];
        } else {
          comments.push(comment);
        }
        //add both the user as friend
        firebase.database().ref('/comments/').child(key).push(comment).then((res) => {
          let key = res.key;
          res.update({
            Id: key
          })
          resolve(true)
        }).catch((error) => {
          reject(false)
        })
      })
    })
  }

  // TimeLine
  timeline(timelineId) {
    let loggedInUserId = firebase.auth().currentUser.uid;
    this.dataService.getUser(loggedInUserId).valueChanges().pipe(take(1)).subscribe((account) => {
      var timeline = account.timeline;
      if (!timeline) {
        timeline = [timelineId];
      } else {
        timeline.push(timelineId);
      }
      //Add both users as friends.
      //add the to timeline data 
      //update the data 
      this.dataService.getUser(loggedInUserId).update({
        timeline: timeline
      }).then((success) => {

      }).catch((error) => {
        this.loading.hide();
      });
    });
  }

}
