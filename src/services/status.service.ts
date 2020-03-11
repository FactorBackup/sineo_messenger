/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/



import { Injectable } from '@angular/core';
import { Events } from '@ionic/angular';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(
     public events: Events,
     public afDB: AngularFireDatabase) { }
  // for the offline method
  offlineStatus(){
    var promise = new Promise((resolve, reject) =>{
      var ref = this.afDB.database.ref('accounts').child( firebase.auth().currentUser.uid )
      ref.onDisconnect().update({
        status:new Date().toString()
      }).then(() =>{
        resolve(true);
      }).catch((err) =>{
        reject(err);
      })
    })
    return promise;
  }

  offlineStatusLog(){
    var promise = new Promise((resolve, reject) =>{
      this.afDB.database.ref('accounts').child( firebase.auth().currentUser.uid ).update({
       status: new Date().toString()
     }).then(() =>{
       resolve(true);
     }).catch((err) =>{
       reject(err);
     })
   })
   return promise;
  }
  onlineStatus(){
    var promise = new Promise((resolve, reject) =>{
       this.afDB.database.ref('accounts').child( firebase.auth().currentUser.uid ).update({
        status: 'Online'
      }).then(() =>{
        resolve(true);
      }).catch((err) =>{
        reject(err);
      })
    })
    return promise;
  }

}
