/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/

import { Pipe, PipeTransform } from '@angular/core';

import { differenceInDays, format, getHours, getTime, isMonday, isYesterday } from 'date-fns';
// distanceInWordsToNow

// get the time base current send count
@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

  transform(value: any): string {
    if (isYesterday(value)) {
      return 'yesterday ' + format(value, 'H:mm');
    }
    return format(value, 'MMM D, YYYY, H:mm');
    /*
    return differenceInDays(Date.now(), value) > 1 ?
      format(value, 'MMM D, YYYY, H:mm') : distanceInWordsToNow(value, { addSuffix: true });
      */
  }

}
