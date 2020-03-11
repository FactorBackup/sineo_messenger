/*
* Social chat in Ionic 4 chat application (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EnlargeImagePage } from './enlarge-image.page';

const routes: Routes = [
  {
    path: '',
    component: EnlargeImagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EnlargeImagePage]
})
export class EnlargeImagePageModule {}
