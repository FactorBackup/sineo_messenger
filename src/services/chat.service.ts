/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/


import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';
import { Events } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  buddymessages = [];
  boddyUser
  Conversations = [];

  constructor(
    public agAuth: AngularFireAuth,
    public events: Events,
    public afDB: AngularFireDatabase,
  ) { }

  getMessage(userId) {
    let res;
    this.afDB.database.ref('/messages').child(firebase.auth().currentUser.uid).child(userId).on('value', (snapshot) => {
      this.buddymessages = []
      res = snapshot.val()
      for (var i in res) {
        this.buddymessages.push(res[i])
      }
      this.events.publish('messages')
    })
  }

  groupsChat(userId) {
    let res;
    this.afDB.database.ref('/messages').child(firebase.auth().currentUser.uid).child(userId).on('value', (snapshot) => {
      this.buddymessages = []
      res = snapshot.val()
      for (var i in res) {
        this.buddymessages.push(res[i])
      }
      this.events.publish('messages')

    })
  }

  getConversations() {
    this.afDB.database.ref('/conversations/').child(firebase.auth().currentUser.uid).on('value', snap => {
      this.Conversations = []
      var array1 = []
      var res = snap.val()
      for (var i in res) {
        this.Conversations.push(res[i])
        array1.push(res[i].userId)
      }
      this.afDB.database.ref('/accounts/').on('value', snap => {
        this.boddyUser = []
        var res = snap.val();
        var array = []
        for (var i in res) {
          array.push(res[i])
        }
        for (var d in array1.reverse()) {
          for (var c in array.reverse()) {
            if (array[c].userId === array1[d]) {
              this.boddyUser.push(array[c])
            }
          }
        }
        this.events.publish('conversations');
      })

    })
  }

  // Get group Conversation
  GetGroupConversation(){
    
  }
}
