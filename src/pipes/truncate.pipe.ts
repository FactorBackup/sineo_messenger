/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/


import { Pipe, PipeTransform } from '@angular/core';


// truncate the page if , page maxlimit
@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let limit = args.length > 0 ? parseInt(args[0], 10) : 10
    let trail = args.length > 1 ? args[1] : "......"
    return value.length > limit ? value.substring(0, limit) + trail : value;
  }

}
