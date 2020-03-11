/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/


import { AlertService } from './alert.service';
import { Router } from '@angular/router';
import { LoadingService } from './loading.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { customAlertEnter } from '../animation/alert/alert.module';
import { AngularFireDatabase } from '@angular/fire/database';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username: string = ""
  password: string = ""

  constructor(
    private afAuth: AngularFireAuth,
    private loading: LoadingService,
    private alertService: AlertService,
    private router: Router,
    private alert: AlertController,
    private fb: Facebook,
    public angulaeDb: AngularFireDatabase,
  ) { }

  //facebook login page
  facebookLogin() {
    this.loading.show();
    this.fb.login(['email', 'public_profile']).then((res: FacebookLoginResponse) => {
      const credential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
      this.afAuth.auth.signInWithCredential(credential).then(() => {
        this.loading.hide();
        this.createUserDataGoogle();
      }).catch((error) => {
        this.loading.hide();
        let code = error['code'];
        this.alertService.showErrorMessage(code);
      })
    })
  }

  //Phone Number Login 
  PhoneNumber(email, password) {
    this.loading.show();
    firebase.auth().signInWithPhoneNumber(email, password).then(() => {
      this.createUserDataGoogle();
    }).catch((error) => {
      let code = error["code"];
      this.alertService.showErrorMessage(code);
    })
  }



  // Login Page
  async login(email, password) {
    this.loading.show()
    const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password).then((success) => {
      this.loading.hide();
      window.localStorage.setItem('userID', firebase.auth().currentUser.uid);
      this.router.navigateByUrl('/tabs');

    }).catch((error) => {
      let code = error["code"];
      this.loading.hide();
      this.alertService.showErrorMessage(code);
    });
  }

  // this method show the alert function for comfirm password 
  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"],
      enterAnimation: customAlertEnter
    })
    await alert.present();
  }
  // Register for new user 
  // this function for the register site, take the user infomartion push to the firebase 
  register(userDetails) {
    this.loading.show();
    if (userDetails.password !== userDetails.cpassword) {
      this.loading.hide()
      console.log('erroe password')
      this.showAlert("Error", "Password don't match")
    } else {
      try {
        this.afAuth.auth.createUserWithEmailAndPassword(userDetails.email, userDetails.password).then(() => {
          window.localStorage.setItem('userID', firebase.auth().currentUser.uid);
          this.createUserData(userDetails);
        }).catch((error) => {
          this.loading.hide()
          let code = error["code"];
          this.alertService.showErrorMessage(code);
        })
      } catch (error) {
        this.loading.hide()
      }
    }
  }
  createUserData(userDetails) {
    firebase.database()
      .ref("accounts/" + firebase.auth().currentUser.uid)
      .once("value")
      .then((accounts) => {
        // No database data yet, create user data on database
        if (!accounts.val()) {
          //  this.loading.show();
          let user = firebase.auth().currentUser;
          var userId, name, lastName, firstName,
            provider, img, email, phoneNumber;
          let providerData = user.providerData[0];
          userId = user.uid;
          // Set default username based on firstName an LastName
          // let username = firstName and lastName will be the username;
          let username = userDetails.firstName + " " + userDetails.lastName;
          // Get provider from Firebase user.
          if (providerData.providerId == "password") {
            provider = "Firebase";
          } else if (providerData.providerId == "facebook.com") {
            provider = "Facebook";
          } else if (providerData.providerId == "google.com") {
            provider = "Google";
          }
          if (user.photoURL || providerData.photoURL) {
            img = user.photoURL;
            img = providerData.photoURL;
          } else {
            img = "assets/profile.png";
          }
          // Get email from Firebase user.
          email = user.email;
          // Set default description.
          let description = "Hello! I am a new Communicaters user.";
          let uniqueId = Math.floor(Math.random() * 10000000000);
          // for my data store
          let tempData = {
            firstName: userDetails.firstName,
            lastName: userDetails.lastName,
            userId: userId,
            dateCreated: new Date().toString(),
            email: email,
            username: username,
            description: description,
            uniqueId: uniqueId,
            img: img,
            status: status
          };
          this.angulaeDb
            .object("accounts/" + firebase.auth().currentUser.uid)
            .set(tempData)
            .then(() => {
              this.loading.hide();
              this.router.navigateByUrl('/tabs');
            }).then(() => {
              this.angulaeDb
                .object("accounts/" + firebase.auth().currentUser.uid).update({
                  status: "Online"
                })
            });

        }

      })


  }

  createUserDataGoogle() {
    firebase.database()
      .ref("accounts/" + firebase.auth().currentUser.uid)
      .once("value")
      .then((accounts) => {
        // No database data yet, create user data on database
        if (!accounts.val()) {
          let user = firebase.auth().currentUser;
          var userId, name, provider, img, email, phoneNumber;
          let providerData = user.providerData[0];
          userId = user.uid;
          if (user.displayName || providerData.displayName) {
            name = user.displayName;
            name = providerData.displayName;
          }
          // Set default username based on name and userId.
          // let username = name.replace(/ /g, "") + userId.substring(0, -8);
          let username = name;

          // Get provider from Firebase user.
          if (providerData.providerId == "password") {
            provider = "Firebase";
          } else if (providerData.providerId == "facebook.com") {
            provider = "Facebook";
          } else if (providerData.providerId == "google.com") {
            provider = "Google";
          }

          if (user.photoURL || providerData.photoURL) {
            img = user.photoURL;
            img = providerData.photoURL;
          } else {
            img = "assets/profile.png";
          }
          // Get email from Firebase user.
          email = user.email;
          // Set default description.
          let description = "Hello! I am a new Communicaters user.";
          let uniqueId = Math.floor(Math.random() * 10000000000);
          // for my data store
          let tempData = {
            userId: userId,
            name: name,
            username: username,
            provider: provider,
            img: img,
            email: email,
            description: description,
            uniqueId: uniqueId,
            status: status,
            dateCreated: new Date().toString(),
          };
          this.angulaeDb
            .object("accounts/" + firebase.auth().currentUser.uid)
            .set(tempData)
            .then(() => {
              this.loading.hide();
              this.router.navigateByUrl('/tabs');
            }).then(() => {
              this.angulaeDb
                .object("accounts/" + firebase.auth().currentUser.uid).update({
                  status: "Online"
                })
            });

        }

      })


  }
}
