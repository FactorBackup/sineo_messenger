/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/


import { StatusService } from './status.service';
import { Injectable } from '@angular/core';
import { LoadingService } from './loading.service';
import { DataService } from './data.service';
import * as firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook/ngx';


@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(
    public loading: LoadingService,
    public dataService: DataService,
    private fb : Facebook,
    public statusService: StatusService
  ) { }

  logOut(){
    var promise = new Promise((resolve, reject) =>{
      this.loading.show();
        // Sign the user out on Firebase
        firebase.auth().signOut().then((success) =>{
          this.fb.logout()
          this.loading.hide()
          this.statusService.offlineStatusLog();
          // Clear navigation stacks
          resolve(true);
        }).catch((err) =>{
          reject(err)

        })
    })
    return promise

  }
}
