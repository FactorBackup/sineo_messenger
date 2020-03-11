/*
* Social chat in Ionic 4 chat application (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/


import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-enlarge-image',
  templateUrl: './enlarge-image.page.html',
  styleUrls: ['./enlarge-image.page.scss'],
})
export class EnlargeImagePage implements OnInit {

  public image;
  constructor(
    public navParams: NavParams,
    private modelCtrl: ModalController
  ) { }

  public ngOnInit() {
    this.image = this.navParams.get('image');
  }

  public close(){
    this.modelCtrl.dismiss();
  }

}
