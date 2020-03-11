/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/


import { TimeAgoModule } from '../../timeDecleration/time-ago.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupInfoPage } from './group-info.page';

const routes: Routes = [
  {
    path: '',
    component: GroupInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimeAgoModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroupInfoPage]
})
export class GroupInfoPageModule {}
