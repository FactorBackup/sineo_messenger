/*
* Social chat Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeAgoPipe } from '../pipes/time-ago.pipe';

@NgModule({
  declarations: [TimeAgoPipe],
  imports: [
    CommonModule
  ],
  exports: [
    TimeAgoPipe
  ]
})
export class TimeAgoModule { }
