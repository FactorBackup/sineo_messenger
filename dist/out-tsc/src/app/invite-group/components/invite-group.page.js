import * as tslib_1 from "tslib";
import { Component, ElementRef, Injector, ViewChild } from '@angular/core';
import { AuthService } from 'src/pages/auth/services/auth/auth.service';
import { MessagesService } from 'src/pages/messages/services/messages/messages.service';
import { Extender } from 'src/shared/helpers/extender';
import { CommonService } from 'src/shared/services/common/common.service';
import { isArray } from 'util';
import { InviteGroupService } from '../services/invite-group/invite-group.service';
let InviteGroupPage = class InviteGroupPage extends Extender {
    constructor(injector, authService, messageService, peopleService, commonService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.messageService = messageService;
        this.peopleService = peopleService;
        this.commonService = commonService;
        this.getSelection = false;
        /** group contacts by first letter of their first names */
        this.groupedPeople = [];
        /** stores string array of alphabets */
        this.alpha = [];
        /** stores tabbed views properties */
        this.views = [];
        /** toggles search bar in template */
        this.openSearch = false;
        this.selectedIndex = 0;
        this.alpha = this.peopleService.alpha;
        this.views = this.peopleService.views;
    }
    ngOnInit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.loading = true;
            this.openProfileFromUrl();
            this.currentUser = yield this.authService.getUser();
            this.subscriptions.push(this.peopleService.getFriendIds(this.currentUser.uid).subscribe((ids) => (this.friends = ids)));
            this.subscriptions.push(this.peopleService.getPeople(this.currentUser.uid).subscribe((users) => {
                this.list = users;
                this.loading = false;
                this.showList(this.selectedIndex);
            }, (err) => {
                this.loading = false;
                this.toast(err);
            }));
        });
    }
    /** if you navigate to this page with query params, open person modal and use id in query param to find user details */
    openProfileFromUrl() {
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe((param) => {
            if (param && param.id) {
                this.open(param.id);
            }
        }));
    }
    /** search list of users by name and regroup into alphabet categories */
    onSearch(val) {
        let people;
        if (val && val.trim() !== '') {
            people = this.list.filter((item) => {
                return item.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
        else {
            people = [...this.list];
        }
        this.groupedPeople = this.peopleService.groupPeople(people);
    }
    /** show either friends or all people based on tab selection */
    showList(index) {
        this.selectedIndex = index;
        if (index === 0) {
            this.groupedPeople = this.peopleService.groupPeople(this.list);
        }
        else {
            const friends = this.list.filter((user) => (this.friends && this.friends.length > 0 ? this.friends.includes(user.uid) : null));
            this.groupedPeople = this.peopleService.groupPeople(friends);
        }
    }
    /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
    manage(friend) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (isArray(this.friends) && this.friends.includes(friend.uid)) {
                yield this.peopleService.unfollow(friend.uid);
            }
            else {
                yield this.peopleService.follow(friend.uid);
            }
            this.showList(this.selectedIndex);
        });
    }
    isFriend(fid) {
        return isArray(this.friends) && this.friends.includes(fid);
    }
    /** scroll user to user group category */
    scrollTo(item) {
        const element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    }
};
tslib_1.__decorate([
    ViewChild('content', null),
    tslib_1.__metadata("design:type", ElementRef)
], InviteGroupPage.prototype, "content", void 0);
tslib_1.__decorate([
    ViewChild('callNumber', null),
    tslib_1.__metadata("design:type", ElementRef)
], InviteGroupPage.prototype, "callNumber", void 0);
InviteGroupPage = tslib_1.__decorate([
    Component({
        selector: 'app-invite-group',
        templateUrl: './invite-group.page.html',
        styleUrls: ['./invite-group.page.scss'],
    }),
    tslib_1.__metadata("design:paramtypes", [Injector,
        AuthService,
        MessagesService,
        InviteGroupService,
        CommonService])
], InviteGroupPage);
export { InviteGroupPage };
//# sourceMappingURL=invite-group.page.js.map