/*
* Social chat in Ionic 4 chat application (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  // searching the user data
  transform(accounts: any[], data: [[any], any]): any {
    let excludedIds = data[0];
    var term: string = data[1]
    if (!accounts) {
      return;
    } else if (!excludedIds) {
      return accounts;
    } else if (excludedIds && !term) {
      return accounts.filter((account) => excludedIds.indexOf(account.userId) == -1);
    } else {
      term = term.toLowerCase();
      return accounts.filter((account) => excludedIds.indexOf(account.userId) == -1 && (account.username.toLowerCase().indexOf(term) > -1 || account.username.toLowerCase().indexOf(term) > -1));
    }
  }
}
