/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/



import { LoadingService } from './loading.service';
import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import * as firebase from "firebase";
import { finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';
import { AlertController } from '@ionic/angular';
import { customAlertEnter } from '../animation/alert/alert.module';
import { AngularFireDatabase } from '@angular/fire/database';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  //Image Service
  //This is the Service Take the image processing including uploading image to firebase
  //set encodingType before uplaoding the image on firebase

  private groupPhotoOption: CameraOptions;

  constructor(
    private camera: Camera,
    private afstorage: AngularFireStorage,
    private loading: LoadingService,
    private alertCtrl: AlertController,
    public angularDb: AngularFireDatabase,
  ) {
    this.groupPhotoOption = {
      quality: 100,
      targetHeight: 530,
      targetWidth: 530,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
      allowEdit: true
    }
  }


  //for update the profile picture 
  async profilePictureCamera(user) {
    const option: CameraOptions = {
      quality: 100,
      targetHeight: 530,
      targetWidth: 530,
      sourceType: this.camera.PictureSourceType.CAMERA,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
      allowEdit: true
    }
    try {
      this.camera.getPicture(option).then((imageData) => {
        this.loading.show()
        let url = "data:image/jpeg;base64," + imageData;
        let imgBlob = this.imgURItoBlob(url);
        let metadata = {
          'contentType': imgBlob.type
        };
        const ref = this.afstorage.ref('/myProfile/' + user.userId + '/' + this.generateFilename())
        const task = ref.put(imgBlob, metadata)
        //this will be delete for ther existing one
        this.deleteImageFile(user.userId);
        task.snapshotChanges().pipe(
          finalize(async () => {
            ref.getDownloadURL().subscribe((image) => {
              this.angularDb.object('/accounts/' + user.userId).update({
                img: image
              }).then(() => {
                this.loading.hide();
                this.showAlert('Profile', 'Your profile picture has been updated')
              })
            });

          })
        ).subscribe()
      })
    } catch (error) {

    }
  }

  async profilePictureGallery(user) {
    const option: CameraOptions = {
      quality: 100,
      targetHeight: 530,
      targetWidth: 530,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      correctOrientation: true,
      allowEdit: true
    }
    try {
      this.camera.getPicture(option).then((imageData) => {
        this.loading.show()
        let url = "data:image/jpeg;base64," + imageData;
        let imgBlob = this.imgURItoBlob(url);
        let metadata = {
          'contentType': imgBlob.type
        };

        const ref = this.afstorage.ref('/myProfile/' + user.userId + '/' + this.generateFilename())
        const task = ref.put(imgBlob, metadata)
        //this will be delete for ther existing one
        this.deleteImageFile(user.userId);
        task.snapshotChanges().pipe(
          finalize(async () => {
            ref.getDownloadURL().subscribe((image) => {
              this.angularDb.object('/accounts/' + user.userId).update({
                img: image
              }).then(() => {
                this.loading.hide();
                this.showAlert('Profile', 'Your profile picture has been updated')
              })
            });

          })
        ).subscribe()
      })
    } catch (error) {

    }
  }

  imgURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var array = [];
    for (var i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
      type: mimeString
    });
  }

  generateFilename() {
    var length = 8;
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text + ".jpg";
  }

  //Delete the image given the url.
  deleteImageFile(user) {
    //var fileName = path.substring(path.lastIndexOf('%2F') + 3, path.lastIndexOf('?'));
    firebase.storage().ref().child('/myProfile/' + user.userId + '/').delete().then(() => { }).catch((error) => { });
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ["OK"],
      enterAnimation: customAlertEnter
    })
    await alert.present();
  }


  uploadPostImageCamera(url) {
    return new Promise((resolve, reject) => {
      let imgBlob = this.imgURItoBlob(url);
      let metadata = {
        'contentType': imgBlob.type
      };
      const ref = this.afstorage.ref('image/post/' + this.generateFilename())
      const task = ref.put(imgBlob, metadata)
      task.snapshotChanges().pipe(
        finalize(async () => {
          let url = ref.getDownloadURL().toPromise();
          resolve(url);
        })
      ).subscribe()
    })
  }


  uploadGroupPhotoMessage(groupId, sourceType) {
    return new Promise((resolve, reject) => {
      this.groupPhotoOption.sourceType = sourceType;
      this.loading.show();
      this.camera.getPicture(this.groupPhotoOption).then((imageData) => {
        let url = "data:image/jpeg;base64," + imageData;
        let imgBlob = this.imgURItoBlob(url);
        let metadata = {
          'contentType': imgBlob.type
        };
        const ref = this.afstorage.ref('/groupsMessage/' + groupId + this.generateFilename())
        const task = ref.put(imgBlob, metadata)
        task.snapshotChanges().pipe(
          finalize(async () => {
            ref.getDownloadURL().subscribe((url) => {
              resolve(url);
              this.loading.hide();
            })

          })
        ).subscribe()
      })

    })
  }

  uploadPhotoMessage(sourceType) {
    return new Promise((resolve, reject) => {
      this.groupPhotoOption.sourceType = sourceType;
      this.loading.show();
      this.camera.getPicture(this.groupPhotoOption).then((imageData) => {
        let url = "data:image/jpeg;base64," + imageData;
        let imgBlob = this.imgURItoBlob(url);
        let metadata = {
          'contentType': imgBlob.type
        };
        const ref = this.afstorage.ref('/Messaging/' + this.generateFilename())
        const task = ref.put(imgBlob, metadata)
        task.snapshotChanges().pipe(
          finalize(async () => {
            ref.getDownloadURL().subscribe((url) => {
              resolve(url);
              this.loading.hide();
            })

          })
        ).subscribe()
      })

    })
  }

  setGroupPhotoProfile(group, sourceType) {
    return new Promise((resolve, reject) => {
      this.groupPhotoOption.sourceType = sourceType;
      this.loading.show();
      this.camera.getPicture(this.groupPhotoOption).then((imageData) => {
        let url = "data:image/jpeg;base64," + imageData;
        let imgBlob = this.imgURItoBlob(url);
        let metadata = {
          'contentType': imgBlob.type
        };
        const ref = this.afstorage.ref('/groupsMessage/' + group + this.generateFilename())
        const task = ref.put(imgBlob, metadata)
        task.snapshotChanges().pipe(
          finalize(async () => {
            ref.getDownloadURL().subscribe((url) => {
              resolve(url);
              this.loading.hide();
            });

          })
        ).subscribe()
      })

    })
  }
  setGroupPhoto(group, sourceType) {
    this.groupPhotoOption.sourceType = sourceType;
    this.loading.show();
    this.camera.getPicture(this.groupPhotoOption).then((imageData) => {
      let url = "data:image/jpeg;base64," + imageData;
      let imgBlob = this.imgURItoBlob(url);
      let metadata = {
        'contentType': imgBlob.type
      };
      const ref = this.afstorage.ref('/groups/' + this.generateFilename())
      const task = ref.put(imgBlob, metadata)
      task.snapshotChanges().pipe(
        finalize(async () => {
          ref.getDownloadURL().subscribe((url) => {
            group.img = url;
            this.loading.hide();
            this.showAlert('Photo', 'Your profile groups has been updated')
          })
        })
      ).subscribe()

    })

    // })
  }

}
