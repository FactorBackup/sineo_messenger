(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/profile/components/profile/profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/profile/components/profile/profile.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <!-- <img src=\"../../../../assets/images/new/Background1.jpg\" id=\"bg\" alt=\"\"> -->\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'profile-component.title' | translate }}\r\n      </div>\r\n      <div class=\"options\">\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"more()\">\r\n          <ion-icon mode=\"md\" name=\"more\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"user\">\r\n      <div class=\"profile-header\">\r\n        <div class=\"image\" [image-loader]=\"user.photoURL\" preview=\"true\"></div>\r\n        <div class=\"detail\">\r\n          <div class=\"title\">{{ user.displayName }}</div>\r\n          <div class=\"status-msg\">{{ (user.statusMessage | slice: 0:50) || 'I am available on full starter app' }}</div>\r\n          <div class=\"country\" *ngIf=\"user.country\">{{ user.country }}</div>\r\n        </div>\r\n      </div>\r\n      <div class=\"profile-menu\">\r\n        <div class=\"menu-item\" [ngClass]=\"{ active: selectedView === item.id }\" *ngFor=\"let item of views\" (click)=\"selectedView = item.id\">\r\n          <strong>{{ item.value }}</strong>\r\n          <span>{{ item.name }}</span>\r\n        </div>\r\n        <ion-button size=\"small\" shape=\"round\">Logout</ion-button>\r\n      </div>\r\n      <div class=\"profile-content\">\r\n        <ng-container [ngSwitch]=\"selectedView\">\r\n          <ng-container *ngSwitchCase=\"1\">\r\n            <app-user-people></app-user-people>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"2\">\r\n            <app-user-people following=\"true\"></app-user-people>\r\n          </ng-container>\r\n          <ng-container *ngSwitchDefault>\r\n            <app-user-posts></app-user-posts>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  \r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"schedule\" (click)=\"goto(routes.dashboard)\">\r\n      <ion-icon src=\"../../../../assets/icons/calendar.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.dashboard' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n    \r\n    <ion-tab-button tab=\"news\" (click)=\"goto(routes.feed)\">\r\n      <ion-icon src=\"../../../../assets/icons/rss.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.news' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"people\" (click)=\"goto(routes.people)\">\r\n      <ion-icon src=\"../../../../assets/icons/users.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.people' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\" (click)=\"goto(routes.messages)\">\r\n      <ion-icon src=\"../../../../assets/icons/message-square.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.chat' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\" (click)=\"goto(routes.setting)\">\r\n      <ion-icon src=\"../../../../assets/icons/settings.svg\" ></ion-icon>\r\n      <ion-label>{{ 'page-title.setting' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/profile/components/user-people/user-people.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/profile/components/user-people/user-people.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-simple-item *ngFor=\"let item of friends\">\r\n  <div class=\"img\" prefix [image-loader]=\"item.photoURL\"></div>\r\n  <div class=\"detail\">\r\n    <div class=\"name\">{{ item.displayName }}</div>\r\n    <div class=\"city\" *ngIf=\"item.town\">{{ item.town }}</div>\r\n    <div class=\"country\" *ngIf=\"item.country\">{{ item.country }}</div>\r\n  </div>\r\n\r\n  <!-- show if not following -->\r\n  <ion-button suffix size=\"small\" *ngIf=\"following && !isFriend(item.uid)\" class=\"follow\" (click)=\"manage()\">{{\r\n    'person-component.follow' | translate\r\n  }}</ion-button>\r\n\r\n  <!-- call user with hidden a tag -->\r\n  <a hidden #callNumber href=\"tel:+{{ item.mobile || item.phone }}\"></a>\r\n</app-simple-item>\r\n<app-spinner *ngIf=\"loading\"></app-spinner>\r\n<app-no-data *ngIf=\"friends.length === 0\"></app-no-data>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/profile/components/user-posts/user-posts.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/profile/components/user-posts/user-posts.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"image\" [image-loader]=\"post\" *ngFor=\"let post of posts\" (click)=\"open(post)\"></div>\r\n</div>\r\n<app-spinner *ngIf=\"loading\"></app-spinner>\r\n<app-no-data *ngIf=\"posts.length === 0\"></app-no-data>\r\n"

/***/ }),

/***/ "./src/pages/profile/components/profile/profile.component.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/profile/components/profile/profile.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .profile-header {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 20px; }\n  :host .content-wrapper .profile-header .image {\n    width: 80px;\n    height: 80px;\n    border-radius: 4px;\n    box-shadow: 1px 2px 12px 2px var(--ion-color-light-shade); }\n  :host .content-wrapper .profile-header .detail {\n    margin-left: 15px;\n    -webkit-box-flex: 1;\n            flex: 1; }\n  :host .content-wrapper .profile-header .detail .title {\n      font-size: 16px;\n      margin: 5px 0; }\n  :host .content-wrapper .profile-header .detail .status-msg,\n    :host .content-wrapper .profile-header .detail .country {\n      font-size: 13px;\n      color: var(--ion-color-medium);\n      margin: 5px 0; }\n  :host .content-wrapper .profile-menu {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 10px 20px;\n  margin: 5px 0;\n  border-top: 1px solid var(--ion-color-light-shade);\n  border-bottom: 1px solid var(--ion-color-light-shade); }\n  :host .content-wrapper .profile-menu .menu-item {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n  :host .content-wrapper .profile-menu .menu-item.active {\n      color: var(--ion-color-primary); }\n  :host .content-wrapper .profile-menu .menu-item.active span {\n        color: var(--ion-color-primary); }\n  :host .content-wrapper .profile-menu .menu-item strong {\n      font-size: 16px; }\n  :host .content-wrapper .profile-menu .menu-item span {\n      color: var(--ion-color-medium);\n      font-size: 12px; }\n  :host .content-wrapper .profile-content {\n  padding: 5px 15px;\n  overflow: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: calc(60% - 0px); }\n  :host .content-wrapper .profile-content .title {\n    font-size: 16px;\n    font-weight: 700; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdNLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0VBSnhCO0lBTVEsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseURBQXlELEVBQUE7RUFUakU7SUFZUSxpQkFBaUI7SUFDakIsbUJBQU87WUFBUCxPQUFPLEVBQUE7RUFiZjtNQWVVLGVBQWU7TUFDZixhQUFhLEVBQUE7RUFoQnZCOztNQW9CVSxlQUFlO01BQ2YsOEJBQThCO01BQzlCLGFBQWEsRUFBQTtFQXRCdkI7RUEyQk0sb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGtEQUFrRDtFQUNsRCxxREFBcUQsRUFBQTtFQWhDM0Q7SUFrQ1Esb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0IsRUFBQTtFQW5DOUI7TUFxQ1UsK0JBQStCLEVBQUE7RUFyQ3pDO1FBdUNZLCtCQUErQixFQUFBO0VBdkMzQztNQTJDVSxlQUFlLEVBQUE7RUEzQ3pCO01BOENVLDhCQUE4QjtNQUM5QixlQUFlLEVBQUE7RUEvQ3pCO0VBb0RNLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsdUJBQXVCLEVBQUE7RUF4RDdCO0lBMERRLGVBQWU7SUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuY29udGVudC13cmFwcGVyIHtcclxuICAgIC5wcm9maWxlLWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgICAgLmltYWdlIHtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMTJweCAycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgfVxyXG4gICAgICAuZGV0YWlsIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3RhdHVzLW1zZyxcclxuICAgICAgICAuY291bnRyeSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2ZpbGUtbWVudSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgICAgIC5tZW51LWl0ZW0ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb2ZpbGUtY29udGVudCB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDYwJSAtIDBweCk7XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/pages/profile/components/profile/profile.component.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/profile/components/profile/profile.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/feed/services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");
/* harmony import */ var src_pages_people_services_people_people_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/people/services/people/people.service */ "./src/pages/people/services/people/people.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_modals_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/modals/edit-profile/edit-profile.component */ "./src/shared/modals/edit-profile/edit-profile.component.ts");







/**
 * view users details and their posts, followers and friends
 */
var ProfileComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ProfileComponent, _super);
    function ProfileComponent(injector, authService, feedService, peopleService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.feedService = feedService;
        _this.peopleService = peopleService;
        _this.friends = [];
        _this.followers = [];
        _this.selectedView = 0;
        _this.posts = [];
        return _this;
    }
    Object.defineProperty(ProfileComponent.prototype, "views", {
        /** set tab data  */
        get: function () {
            return [
                {
                    id: 0,
                    name: this.translate.instant('profile-component.post'),
                    value: this.posts.length
                },
                {
                    id: 1,
                    name: this.translate.instant('profile-component.following'),
                    value: this.friends ? this.friends.length : 0
                },
                {
                    id: 2,
                    name: this.translate.instant('profile-component.followers'),
                    value: this.followers.length
                }
            ];
        },
        enumerable: true,
        configurable: true
    });
    /** get current user */
    ProfileComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.user = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** get user and user details such as feed, friends and followers */
    ProfileComponent.prototype.ionViewDidEnter = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.subscriptions.push(this.authService.user.subscribe(function (user) {
                    if (user) {
                        _this.user = user;
                        _this.subscriptions.push(_this.feedService.getUserFeed(_this.user.uid).subscribe(function (posts) { return (_this.posts = posts); }));
                        _this.subscriptions.push(_this.peopleService.getFriendIds(_this.user.uid).subscribe(function (friends) { return (_this.friends = friends); }));
                        _this.subscriptions.push(_this.peopleService.getFollowersIds(_this.user.uid).subscribe(function (friends) { return (_this.followers = friends); }));
                    }
                }));
                return [2 /*return*/];
            });
        });
    };
    /** open more options in action sheet with options to edit, logout or close action sheet */
    ProfileComponent.prototype.more = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheetCtrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant('other.options'),
                            buttons: [
                                {
                                    text: this.translate.instant('setting-component.edit-account'),
                                    handler: function () { return _this.edit(); }
                                },
                                {
                                    text: this.translate.instant('setting-component.logout-button'),
                                    handler: function () {
                                        _this.authService.signOut().then(function () { return _this.goto(_this.routes.auth); });
                                    }
                                },
                                {
                                    text: this.translate.instant('other.close'),
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        actionSheetCtrl = _a.sent();
                        return [4 /*yield*/, actionSheetCtrl.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open profile edit modal */
    ProfileComponent.prototype.edit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(src_shared_modals_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_6__["EditProfileComponent"], this.user)];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_pages_feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"] },
        { type: src_pages_people_services_people_people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"] }
    ]; };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/index.js!./src/pages/profile/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/pages/profile/components/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_pages_feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"],
            src_pages_people_services_people_people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"]])
    ], ProfileComponent);
    return ProfileComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"]));



/***/ }),

/***/ "./src/pages/profile/components/user-people/user-people.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/pages/profile/components/user-people/user-people.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n  :host app-simple-item {\n    padding: 5px 10px;\n    margin: 10px 0;\n    -webkit-box-align: center;\n            align-items: center; }\n  :host app-simple-item .img {\n      width: 60px;\n      height: 60px;\n      border-radius: 4px;\n      box-shadow: 1px 2px 12px var(--ion-color-light-shade); }\n  :host app-simple-item .detail .name {\n      font-size: 14px;\n      font-weight: 500;\n      padding: 0 0 4px 0; }\n  :host app-simple-item .detail .job {\n      font-size: 11px;\n      font-weight: 400;\n      color: var(--ion-color-medium-shade);\n      margin-bottom: 2px; }\n  :host app-simple-item .detail .city,\n    :host app-simple-item .detail .country {\n      font-size: 11px;\n      font-weight: 400;\n      color: var(--ion-color-medium-shade); }\n  :host app-simple-item .detail .country {\n      color: var(--ion-color-primary-shade); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3VzZXItcGVvcGxlL3VzZXItcGVvcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWSxFQUFBO0VBRGQ7SUFHSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQUx2QjtNQU9NLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLHFEQUFxRCxFQUFBO0VBVjNEO01BY1EsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixrQkFBa0IsRUFBQTtFQWhCMUI7TUFvQlEsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixvQ0FBb0M7TUFDcEMsa0JBQWtCLEVBQUE7RUF2QjFCOztNQTRCUSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG9DQUFvQyxFQUFBO0VBOUI1QztNQWtDUSxxQ0FBcUMsRUFBQSIsImZpbGUiOiJzcmMvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3VzZXItcGVvcGxlL3VzZXItcGVvcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBhcHAtc2ltcGxlLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAuaW1nIHtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMnB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgIH1cclxuICAgIC5kZXRhaWwge1xyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgcGFkZGluZzogMCAwIDRweCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuam9iIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2l0eSxcclxuICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/pages/profile/components/user-people/user-people.component.ts":
/*!***************************************************************************!*\
  !*** ./src/pages/profile/components/user-people/user-people.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserPeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPeopleComponent", function() { return UserPeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/messages/services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var src_pages_people_services_people_people_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/people/services/people/people.service */ "./src/pages/people/services/people/people.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);








/**
 * toggle to get either users followers or friends by toggling following input property
 * list users
 */
var UserPeopleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserPeopleComponent, _super);
    function UserPeopleComponent(injector, authService, commonService, messageService, peopleService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.commonService = commonService;
        _this.messageService = messageService;
        _this.peopleService = peopleService;
        _this.friends = [];
        _this.following = false;
        return _this;
    }
    /** get current user, if following input property is true, get current users followers
     * if false, get current users friends
     */
    UserPeopleComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.user = _b.sent();
                        this.loading = true;
                        if (!this.following) {
                            this.subscriptions.push(this.peopleService.getFriends(this.user.uid).subscribe(function (friends) {
                                _this.loading = false;
                                _this.friends = friends;
                            }));
                        }
                        else {
                            this.subscriptions.push(this.peopleService.getFollowers(this.user.uid).subscribe(function (friends) {
                                _this.loading = false;
                                _this.friends = friends;
                            }));
                        }
                        this.subscriptions.push(this.peopleService.getFriendIds(this.user.uid).subscribe(function (data) { return (_this.friendsIds = data); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    /** call user */
    UserPeopleComponent.prototype.call = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commonService.callUser(this.user.mobile || this.user.phone, this.callNumber)];
                    case 1:
                        _a.sent();
                        this.closeModal();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** start chat with user */
    UserPeopleComponent.prototype.chat = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.messageService.startChat(this.user);
                this.closeModal();
                return [2 /*return*/];
            });
        });
    };
    /** share user */
    UserPeopleComponent.prototype.share = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var url;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = "people?id=" + this.user.uid;
                        return [4 /*yield*/, this.commonService.share(this.user.displayName, this.user.email, this.user.photoURL, url)];
                    case 1:
                        _a.sent();
                        this.closeModal();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** check if user is a friends  */
    UserPeopleComponent.prototype.isFriend = function (fid) {
        return Object(util__WEBPACK_IMPORTED_MODULE_7__["isArray"])(this.friends) && this.friendsIds.includes(fid);
    };
    /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
    UserPeopleComponent.prototype.manage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.peopleService.friends.includes(this.user.uid)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.peopleService.unfollow(this.user.uid)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.peopleService.follow(this.user.uid)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserPeopleComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] },
        { type: src_pages_people_services_people_people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], UserPeopleComponent.prototype, "following", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('callNumber', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UserPeopleComponent.prototype, "callNumber", void 0);
    UserPeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-people',
            template: __webpack_require__(/*! raw-loader!./user-people.component.html */ "./node_modules/raw-loader/index.js!./src/pages/profile/components/user-people/user-people.component.html"),
            styles: [__webpack_require__(/*! ./user-people.component.scss */ "./src/pages/profile/components/user-people/user-people.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"],
            src_pages_people_services_people_people_service__WEBPACK_IMPORTED_MODULE_4__["PeopleService"]])
    ], UserPeopleComponent);
    return UserPeopleComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"]));



/***/ }),

/***/ "./src/pages/profile/components/user-posts/user-posts.component.scss":
/*!***************************************************************************!*\
  !*** ./src/pages/profile/components/user-posts/user-posts.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  height: 100%; }\n  :host .wrapper {\n    display: grid;\n    grid-template-columns: auto auto auto;\n    grid-gap: 10px; }\n  :host .image {\n    background-color: var(--ion-color-medium);\n    border-radius: 5px;\n    padding: 20px;\n    height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvcHJvZmlsZS9jb21wb25lbnRzL3VzZXItcG9zdHMvdXNlci1wb3N0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVksRUFBQTtFQURkO0lBR0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxjQUFjLEVBQUE7RUFMbEI7SUFTSSx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL3BhZ2VzL3Byb2ZpbGUvY29tcG9uZW50cy91c2VyLXBvc3RzL3VzZXItcG9zdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC53cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0byBhdXRvO1xyXG4gICAgZ3JpZC1nYXA6IDEwcHg7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/pages/profile/components/user-posts/user-posts.component.ts":
/*!*************************************************************************!*\
  !*** ./src/pages/profile/components/user-posts/user-posts.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserPostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPostsComponent", function() { return UserPostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/feed/services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/modals/image-preview/image-preview.component */ "./src/shared/modals/image-preview/image-preview.component.ts");






/**
 * get users posts images and list them in a gallery format
 */
var UserPostsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UserPostsComponent, _super);
    function UserPostsComponent(injector, authService, feedService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.feedService = feedService;
        _this.posts = [];
        return _this;
    }
    /** get user feed and extract images into one array */
    UserPostsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uid;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        uid = (_a.sent()).uid;
                        this.loading = true;
                        this.subscriptions.push(this.feedService.getUserFeed(uid).subscribe(function (feed) {
                            _this.loading = false;
                            _this.posts = [].concat.apply([], feed.map(function (post) { return post.images; }));
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open image preview */
    UserPostsComponent.prototype.open = function (image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(src_shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_5__["ImagePreviewComponent"], image, 'custom-modal')];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserPostsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_pages_feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"] }
    ]; };
    UserPostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-posts',
            template: __webpack_require__(/*! raw-loader!./user-posts.component.html */ "./node_modules/raw-loader/index.js!./src/pages/profile/components/user-posts/user-posts.component.html"),
            styles: [__webpack_require__(/*! ./user-posts.component.scss */ "./src/pages/profile/components/user-posts/user-posts.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_pages_feed_services_feed_feed_service__WEBPACK_IMPORTED_MODULE_3__["FeedService"]])
    ], UserPostsComponent);
    return UserPostsComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"]));



/***/ }),

/***/ "./src/pages/profile/profile.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/profile/profile.module.ts ***!
  \*********************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/pages/profile/components/profile/profile.component.ts");
/* harmony import */ var _components_user_people_user_people_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/user-people/user-people.component */ "./src/pages/profile/components/user-people/user-people.component.ts");
/* harmony import */ var _components_user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/user-posts/user-posts.component */ "./src/pages/profile/components/user-posts/user-posts.component.ts");








var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"], _components_user_posts_user_posts_component__WEBPACK_IMPORTED_MODULE_7__["UserPostsComponent"], _components_user_people_user_people_component__WEBPACK_IMPORTED_MODULE_6__["UserPeopleComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_5__["ProfileComponent"],
                    },
                ]),
            ],
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es5.js.map