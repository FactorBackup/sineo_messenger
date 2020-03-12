(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-groups-groups-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/groups/groups.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/groups/groups.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)\n* Copyright  @2020-present. All right reserved.\n* Author By Abubakar Pagas\n*/ -->\n\n\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title class=\"ion-text-center\">Groups</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div>\n    <div *ngFor=\"let group of groups\" (click)=\"groupChat(group.key)\" >\n      <ion-col size=\"6\">\n        <div [ngClass]=hasUnreadMessages(group) class=\"group\">\n          <img src=\"{{group.img || img}}\">\n          <ion-badge color=\"danger\" mode=\"ios\" *ngIf=\"group.unreadMessagesCount > 0\">{{group.unreadMessagesCount}}</ion-badge>\n          <p>{{group.name}}<br />\n            <span>{{group.dateCreated | timeAgo}}</span>\n          </p>\n        </div>\n      </ion-col>\n    </div>\n  </div>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ng-container>\n      <ion-fab-button (click)=\"newGroups()\">\n        <ion-icon name=\"add\" expand=\"icon-only\"></ion-icon>\n      </ion-fab-button>\n    </ng-container>\n  </ion-fab>\n</ion-content>"

/***/ }),

/***/ "./src/pages/groups/groups.module.ts":
/*!*******************************************!*\
  !*** ./src/pages/groups/groups.module.ts ***!
  \*******************************************/
/*! exports provided: GroupsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPageModule", function() { return GroupsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./groups.page */ "./src/pages/groups/groups.page.ts");
/* harmony import */ var _timeDecleration_time_ago_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../timeDecleration/time-ago.module */ "./src/timeDecleration/time-ago.module.ts");
/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/








var routes = [
    {
        path: '',
        component: _groups_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPage"]
    }
];
var GroupsPageModule = /** @class */ (function () {
    function GroupsPageModule() {
    }
    GroupsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _timeDecleration_time_ago_module__WEBPACK_IMPORTED_MODULE_7__["TimeAgoModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_groups_page__WEBPACK_IMPORTED_MODULE_6__["GroupsPage"]]
        })
    ], GroupsPageModule);
    return GroupsPageModule;
}());



/***/ }),

/***/ "./src/pages/groups/groups.page.scss":
/*!*******************************************!*\
  !*** ./src/pages/groups/groups.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)\r\n* Copyright  @2020-present. All right reserved.\r\n* Author By Abubakar Pagas\r\n*/\nion-title {\n  font-size: medium;\n  font-family: Georgia, \"Times New Roman\", Times, serif; }\nion-fab-button {\n  width: 47px !important;\n  height: 47px !important; }\nion-fab {\n  padding-right: 6px; }\nion-col {\n  float: left !important; }\n.bold {\n  font-weight: bold; }\ndiv.group {\n  text-align: center;\n  background: #e0dfdf;\n  position: relative;\n  border-radius: 1em;\n  border: 2px solid #9aa7c5; }\ndiv.group img {\n    margin-top: 1.25em;\n    border-radius: 100%;\n    width: 5em;\n    height: 5em;\n    -o-object-fit: cover;\n       object-fit: cover; }\ndiv.group ion-badge {\n    position: absolute;\n    top: 1em;\n    right: 3.5em; }\ndiv.group p,\n  div.group span {\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    padding: 0;\n    margin: 0;\n    padding-left: 0.75em;\n    padding-right: 0.75em; }\ndiv.group p {\n    margin-top: 0.5em;\n    margin-bottom: 0.2em;\n    color: #101010;\n    font-size: 100%;\n    display: block; }\ndiv.group span {\n    color: var(--ion-color-primary);\n    font-size: 90%;\n    display: block;\n    padding-bottom: 1.25em; }\ndiv.group div.group.activated,\n  div.group div.group:active {\n    opacity: 0.5; }\ndiv.group img.activated,\n  div.group img:active {\n    opacity: 0.5; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvZ3JvdXBzL2dyb3Vwcy5wYWdlLnNjc3MiLCJzcmMvcGFnZXMvZ3JvdXBzL2dyb3Vwcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0NJQztBREdEO0VBQ0UsaUJBQWlCO0VBQ2pCLHFEQUFxRCxFQUFBO0FBR3ZEO0VBQ0Usc0JBQXNCO0VBQ3RCLHVCQUF1QixFQUFBO0FBRXpCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxzQkFBc0IsRUFBQTtBQUd4QjtFQUNFLGlCQUFpQixFQUFBO0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLHlCQUF5QixFQUFBO0FBTDNCO0lBUUksa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsV0FBVztJQUNYLG9CQUFpQjtPQUFqQixpQkFBaUIsRUFBQTtBQVpyQjtJQWdCSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVksRUFBQTtBQWxCaEI7O0lBdUJJLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixTQUFTO0lBQ1Qsb0JBQW9CO0lBQ3BCLHFCQUFxQixFQUFBO0FBN0J6QjtJQWlDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYyxFQUFBO0FBckNsQjtJQXlDSSwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLGNBQWM7SUFDZCxzQkFBc0IsRUFBQTtBQTVDMUI7O0lBZ0RJLFlBQVksRUFBQTtBQWhEaEI7O0lBcURJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvcGFnZXMvZ3JvdXBzL2dyb3Vwcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIFNvY2lhbCBjaGF0IGluIElvbmljIDQgY2hhdCBhcHBsaWNhdGlvbiAgKGh0dHBzOi8vZ2l0aHViLmNvbS9oYWJ1cGFnYXMvZmFjZWJvb2stY2xvbmUtaW9uaWM0KVxyXG4qIENvcHlyaWdodCAgQDIwMjAtcHJlc2VudC4gQWxsIHJpZ2h0IHJlc2VydmVkLlxyXG4qIEF1dGhvciBCeSBBYnViYWthciBQYWdhc1xyXG4qL1xyXG5cclxuXHJcbmlvbi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiBtZWRpdW07XHJcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjtcclxufVxyXG5cclxuaW9uLWZhYi1idXR0b24ge1xyXG4gIHdpZHRoOiA0N3B4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0N3B4ICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWZhYiB7XHJcbiAgcGFkZGluZy1yaWdodDogNnB4O1xyXG59XHJcblxyXG5pb24tY29sIHtcclxuICBmbG9hdDogbGVmdCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYm9sZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbmRpdi5ncm91cCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMjQsIDIyMywgMjIzKTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5YWE3YzU7XHJcblxyXG4gIGltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjI1ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgd2lkdGg6IDVlbTtcclxuICAgIGhlaWdodDogNWVtO1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICBpb24tYmFkZ2Uge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxZW07XHJcbiAgICByaWdodDogMy41ZW07XHJcbiAgfVxyXG5cclxuICBwLFxyXG4gIHNwYW4ge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLXRvcDogMC41ZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjJlbTtcclxuICAgIGNvbG9yOiAjMTAxMDEwO1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG5cclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBmb250LXNpemU6IDkwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEuMjVlbTtcclxuICB9XHJcbiAgZGl2Lmdyb3VwLmFjdGl2YXRlZCxcclxuICBkaXYuZ3JvdXA6YWN0aXZlIHtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcblxyXG4gIGltZy5hY3RpdmF0ZWQsXHJcbiAgaW1nOmFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG59XHJcbiIsIi8qXHJcbiogU29jaWFsIGNoYXQgaW4gSW9uaWMgNCBjaGF0IGFwcGxpY2F0aW9uICAoaHR0cHM6Ly9naXRodWIuY29tL2hhYnVwYWdhcy9mYWNlYm9vay1jbG9uZS1pb25pYzQpXHJcbiogQ29weXJpZ2h0ICBAMjAyMC1wcmVzZW50LiBBbGwgcmlnaHQgcmVzZXJ2ZWQuXHJcbiogQXV0aG9yIEJ5IEFidWJha2FyIFBhZ2FzXHJcbiovXG5pb24tdGl0bGUge1xuICBmb250LXNpemU6IG1lZGl1bTtcbiAgZm9udC1mYW1pbHk6IEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIFRpbWVzLCBzZXJpZjsgfVxuXG5pb24tZmFiLWJ1dHRvbiB7XG4gIHdpZHRoOiA0N3B4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDdweCAhaW1wb3J0YW50OyB9XG5cbmlvbi1mYWIge1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7IH1cblxuaW9uLWNvbCB7XG4gIGZsb2F0OiBsZWZ0ICFpbXBvcnRhbnQ7IH1cblxuLmJvbGQge1xuICBmb250LXdlaWdodDogYm9sZDsgfVxuXG5kaXYuZ3JvdXAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNlMGRmZGY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xuICBib3JkZXI6IDJweCBzb2xpZCAjOWFhN2M1OyB9XG4gIGRpdi5ncm91cCBpbWcge1xuICAgIG1hcmdpbi10b3A6IDEuMjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIHdpZHRoOiA1ZW07XG4gICAgaGVpZ2h0OiA1ZW07XG4gICAgb2JqZWN0LWZpdDogY292ZXI7IH1cbiAgZGl2Lmdyb3VwIGlvbi1iYWRnZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMWVtO1xuICAgIHJpZ2h0OiAzLjVlbTsgfVxuICBkaXYuZ3JvdXAgcCxcbiAgZGl2Lmdyb3VwIHNwYW4ge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07IH1cbiAgZGl2Lmdyb3VwIHAge1xuICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDAuMmVtO1xuICAgIGNvbG9yOiAjMTAxMDEwO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICBkaXYuZ3JvdXAgc3BhbiB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDkwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4yNWVtOyB9XG4gIGRpdi5ncm91cCBkaXYuZ3JvdXAuYWN0aXZhdGVkLFxuICBkaXYuZ3JvdXAgZGl2Lmdyb3VwOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC41OyB9XG4gIGRpdi5ncm91cCBpbWcuYWN0aXZhdGVkLFxuICBkaXYuZ3JvdXAgaW1nOmFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMC41OyB9XG4iXX0= */"

/***/ }),

/***/ "./src/pages/groups/groups.page.ts":
/*!*****************************************!*\
  !*** ./src/pages/groups/groups.page.ts ***!
  \*****************************************/
/*! exports provided: GroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsPage", function() { return GroupsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _groups_chat_groups_chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../groups-chat/groups-chat.page */ "./src/pages/groups-chat/groups-chat.page.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data.service */ "./src/services/data.service.ts");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/loading.service */ "./src/services/loading.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _animation_modal_animation_modal_leave_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animation/modal-animation/modal-leave.module */ "./src/animation/modal-animation/modal-leave.module.ts");
/* harmony import */ var _animation_modal_animation_modal_enter_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../animation/modal-animation/modal-enter.module */ "./src/animation/modal-animation/modal-enter.module.ts");
/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2019-present. All right reserved.
* Author By Abubakar Pagas
*/










var GroupsPage = /** @class */ (function () {
    function GroupsPage(router, loading, dataServices, modelCtrl) {
        this.router = router;
        this.loading = loading;
        this.dataServices = dataServices;
        this.modelCtrl = modelCtrl;
        this.img = 'assets/profile.png';
    }
    GroupsPage.prototype.ngOnInit = function () {
        var _this = this;
        // Get user data on database and get list of group.\
        this.dataServices.keyGroups(firebase__WEBPACK_IMPORTED_MODULE_6__["auth"]().currentUser.uid).valueChanges().subscribe(function (groupIds) {
            if (groupIds.length > 0) {
                if (_this.groups && _this.groups.length > groupIds.length) {
                    _this.groups = [];
                }
                groupIds.forEach(function (groupId) {
                    _this.dataServices.groups(groupId.key).valueChanges().subscribe(function (group) {
                        // console.log('groups', group);
                        _this.dataServices.listUnread(groupId.key).valueChanges().subscribe(function (unread) {
                            group.unreadMessagesCount = unread.length;
                            //  console.log("unread", group.unreadMessagesCount )
                        });
                        _this.addOrUpdateFriend(group);
                    });
                });
            }
            else {
                _this.groups = [];
            }
        });
    };
    GroupsPage.prototype.newGroups = function () {
        this.router.navigateByUrl("/new-groups");
    };
    //Add or update friend data fro real-time sync.
    GroupsPage.prototype.addOrUpdateFriend = function (group) {
        if (!this.groups) {
            this.groups = [group];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.groups.length; i++) {
                if (this.groups[i].key == group.key) {
                    index = i;
                }
            }
            if (index > -1) {
                this.groups[index] = group;
            }
            else {
                this.groups.push(group);
            }
        }
    };
    // Return class based if group has unreadMessages or not.
    GroupsPage.prototype.hasUnreadMessages = function (group) {
        if (group.unreadMessagesCount > 0) {
            return 'group bold';
        }
        else
            return 'group';
    };
    GroupsPage.prototype.groupChat = function (key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var model;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modelCtrl.create({
                            component: _groups_chat_groups_chat_page__WEBPACK_IMPORTED_MODULE_1__["GroupsChatPage"],
                            leaveAnimation: _animation_modal_animation_modal_leave_module__WEBPACK_IMPORTED_MODULE_8__["myLeaveAnimation"],
                            enterAnimation: _animation_modal_animation_modal_enter_module__WEBPACK_IMPORTED_MODULE_9__["myEnterAnimation"],
                            componentProps: {
                                key: key
                            }
                        })];
                    case 1:
                        model = _a.sent();
                        model.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    GroupsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] }
    ]; };
    GroupsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-groups',
            template: __webpack_require__(/*! raw-loader!./groups.page.html */ "./node_modules/raw-loader/index.js!./src/pages/groups/groups.page.html"),
            styles: [__webpack_require__(/*! ./groups.page.scss */ "./src/pages/groups/groups.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_3__["LoadingService"],
            _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]])
    ], GroupsPage);
    return GroupsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-groups-groups-module-es5.js.map