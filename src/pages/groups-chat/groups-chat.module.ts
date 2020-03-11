/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GroupsChatPage } from './groups-chat.page';
import { AutosizeModule } from 'ngx-autosize';
import { TimeAgoModule } from '../../timeDecleration/time-ago.module';

const routes: Routes = [
  {
    path: '',
    component: GroupsChatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    TimeAgoModule,
    FormsModule,
    IonicModule,
    AutosizeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GroupsChatPage]
})
export class GroupsChatPageModule {}
