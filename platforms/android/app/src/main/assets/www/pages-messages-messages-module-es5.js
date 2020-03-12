(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-messages-messages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/messages/components/messages/messages.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/messages/components/messages/messages.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <!-- <img src=\"../../../../assets/images/new/Background1.jpg\" id=\"bg\" alt=\"\"> -->\r\n  <div class=\"content-wrapper\">\r\n    <!-- start header -->\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'messages-component.title' | translate }}\r\n      </div>\r\n      <div class=\"options\">\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"openSearch = !openSearch\">\r\n          <ion-icon mode=\"md\" name=\"search\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"group()\">          \r\n          <ion-icon color=\"medium\" src=\"../../../../assets/icons/plus.svg\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"messagesOptions()\">\r\n          <ion-icon mode=\"md\" name=\"more\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n    <!-- end header -->\r\n\r\n    <app-tab-menu [tabs]=\"views\"></app-tab-menu>\r\n    <app-search-bar *ngIf=\"openSearch\" (event)=\"onSearch($event)\"></app-search-bar>\r\n\r\n    <!-- show messages -->\r\n    <div class=\"content-scroll\" *ngIf=\"messages.length > 0\">\r\n      <div class=\"messages\" *ngFor=\"let item of messages\">\r\n        <!-- selected icon toggle -->\r\n        <div class=\"action\" *ngIf=\"getSelection\">\r\n          <ion-icon\r\n            color=\"secondary\"\r\n            (click)=\"item.selected = !item.selected\"\r\n            [src]=\"item.selected ? 'assets/icons/check-square.svg' : 'assets/icons/square.svg'\"\r\n          ></ion-icon>\r\n        </div>\r\n\r\n        <!-- image of receipeint -->\r\n        <div\r\n          class=\"image\"\r\n          [image-loader]=\"getSender(item).photoURL\"\r\n          (click)=\"goto(routes.people, { queryParams: { id: getSender(item).uid } })\"\r\n        ></div>\r\n\r\n        <!-- details of chat -->\r\n        <div class=\"detail\" (click)=\"openChat(item.id)\">\r\n          <div class=\"name\">{{ getSender(item).displayName }}</div>\r\n          <div class=\"msg\">{{ getLastMessage(item)?.value || 'messages-component.start-chatting' | translate }}</div>\r\n        </div>\r\n\r\n        <!--  date and actions button -->\r\n        <div class=\"date\">\r\n          <span>{{ item?.updatedAt?.toDate() | amTimeAgo }}</span>\r\n          <ion-button fill=\"clear\" *ngIf=\"!getSelection\" (click)=\"options(item)\" color=\"medium\" size=\"small\">\r\n            <ion-icon name=\"more\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <app-no-data *ngIf=\"messages.length === 0\"></app-no-data>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<ion-footer *ngIf=\"!getSelection\">\r\n  \r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"schedule\" (click)=\"goto(routes.dashboard)\">\r\n      <ion-icon src=\"../../../../assets/icons/calendar.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.dashboard' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n    \r\n    <ion-tab-button tab=\"news\" (click)=\"goto(routes.feed)\">\r\n      <ion-icon src=\"../../../../assets/icons/rss.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.news' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"people\" (click)=\"goto(routes.people)\">\r\n      <ion-icon src=\"../../../../assets/icons/users.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.people' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\" (click)=\"goto(routes.messages)\">\r\n      <ion-icon src=\"../../../../assets/icons/message-square.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.chat' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\" (click)=\"goto(routes.setting)\">\r\n      <ion-icon src=\"../../../../assets/icons/settings.svg\" ></ion-icon>\r\n      <ion-label>{{ 'page-title.setting' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-footer>\r\n\r\n<!-- footer with buttons when you select more than one item -->\r\n<ion-footer *ngIf=\"getSelection\">\r\n  <div class=\"buttons\">\r\n    <ion-button size=\"small\" (click)=\"markAsRead()\">Mark as Read</ion-button>\r\n    <ion-button size=\"small\" (click)=\"archieve()\" color=\"secondary\">Archieve</ion-button>\r\n    <ion-button size=\"small\" (click)=\"deleteSelected()\" color=\"danger\">Delete</ion-button>\r\n    <ion-button (click)=\"getSelection = false\" color=\"dark\" fill=\"clear\">\r\n      <ion-icon src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/pages/messages/components/messages/messages.component.scss":
/*!************************************************************************!*\
  !*** ./src/pages/messages/components/messages/messages.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content .content-wrapper .content-scroll {\n  padding: 0 20px; }\n  :host ion-content .content-wrapper .content-scroll .messages {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    margin: 20px 0; }\n  :host ion-content .content-wrapper .content-scroll .messages .image {\n      height: 60px;\n      width: 60px;\n      border-radius: 3px;\n      box-shadow: 1px 1px 12px var(--ion-color-light-shade); }\n  :host ion-content .content-wrapper .content-scroll .messages .detail {\n      margin-left: 15px;\n      -webkit-box-flex: 1;\n              flex: 1; }\n  :host ion-content .content-wrapper .content-scroll .messages .detail .name {\n        font-weight: 500;\n        font-size: 16px; }\n  :host ion-content .content-wrapper .content-scroll .messages .detail .msg {\n        font-size: 14px;\n        color: var(--ion-color-medium-shade);\n        white-space: nowrap;\n        width: 150px;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n  :host ion-content .content-wrapper .content-scroll .messages .date {\n      width: 63px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      font-size: 10px;\n      color: var(--ion-color-medium-shade);\n      overflow: hidden;\n      white-space: nowrap; }\n  :host ion-content .content-wrapper .content-scroll .messages .action {\n      margin-right: 15px; }\n  :host ion-footer .buttons {\n  margin: 5px 0 5px 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n  :host ion-footer .buttons ion-button {\n    width: 100%; }\n  :host ion-footer .buttons ion-button.right {\n      float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvbWVzc2FnZXMvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlRLGVBQWUsRUFBQTtFQUp2QjtJQU9VLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsY0FBYyxFQUFBO0VBVHhCO01BWVksWUFBWTtNQUNaLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIscURBQXFELEVBQUE7RUFmakU7TUFtQlksaUJBQWlCO01BQ2pCLG1CQUFPO2NBQVAsT0FBTyxFQUFBO0VBcEJuQjtRQXVCYyxnQkFBZ0I7UUFDaEIsZUFBZSxFQUFBO0VBeEI3QjtRQTRCYyxlQUFlO1FBQ2Ysb0NBQW9DO1FBQ3BDLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLGdCQUFnQixFQUFBO0VBakM5QjtNQXNDWSxXQUFXO01BQ1gsb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLG9DQUFvQztNQUNwQyxnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUE7RUE1Qy9CO01BK0NZLGtCQUFrQixFQUFBO0VBL0M5QjtFQXVETSxzQkFBc0I7RUFDdEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBO0VBekR6QjtJQTJEUSxXQUFXLEVBQUE7RUEzRG5CO01BNkRVLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvcGFnZXMvbWVzc2FnZXMvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgLmNvbnRlbnQtc2Nyb2xsIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcblxyXG4gICAgICAgIC5tZXNzYWdlcyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG5cclxuICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRldGFpbCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubXNnIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2M3B4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5hY3Rpb24ge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlvbi1mb290ZXIge1xyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICBtYXJnaW46IDVweCAwIDVweCAxNXB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAmLnJpZ2h0IHtcclxuICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/pages/messages/components/messages/messages.component.ts":
/*!**********************************************************************!*\
  !*** ./src/pages/messages/components/messages/messages.component.ts ***!
  \**********************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators/switchMap */ "./node_modules/rxjs/internal/operators/switchMap.js");
/* harmony import */ var rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../message/message.component */ "./src/pages/messages/components/message/message.component.ts");
/* harmony import */ var _app_groupmodal_components_groupmodal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../app/groupmodal/components/groupmodal.page */ "./src/app/groupmodal/components/groupmodal.page.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");












/*
 * view users messages, manage messages.
 */
var MessagesComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessagesComponent, _super);
    function MessagesComponent(injector, platform, nativeToast, authService, messageService, modalController) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.platform = platform;
        _this.nativeToast = nativeToast;
        _this.authService = authService;
        _this.messageService = messageService;
        _this.modalController = modalController;
        _this.back_clicked = 0;
        _this.allMessages = [];
        _this.messages = [];
        _this.getSelection = false;
        _this.openSearch = false;
        _this.view$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** get tab data to use as input for app-tab-menu component */
        _this.views = [
            {
                id: 0,
                active: true,
                name: _this.translate.instant('messages-component.tab-all'),
                event: function () {
                    _this.view$.next(false);
                }
            },
            {
                id: 2,
                name: _this.translate.instant('messages-component.tab-archived'),
                event: function () {
                    _this.view$.next(true);
                }
            }
        ];
        return _this;
    }
    /**
     * subscribe to view change events from tab component changes,
     * create a switch map to get data based on view change
     * if isArchieved view is clicked show archieved messages
     * emit event for no archieved messages on initialization
     */
    MessagesComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, queryObservable;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.appExitConfig();
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        queryObservable = this.view$.pipe(Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (view) { return _this.messageService.getMessages(_this.currentUser.uid, view); }));
                        this.subscriptions.push(queryObservable.subscribe(function (queryItems) {
                            _this.messages = _this.allMessages = queryItems;
                        }));
                        this.view$.next(false);
                        return [2 /*return*/];
                }
            });
        });
    };
    MessagesComponent.prototype.appExitConfig = function () {
        var _this = this;
        this.platform.backButton.subscribe(function () { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
            var toast;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.back_clicked === 0)) return [3 /*break*/, 2];
                        this.back_clicked++;
                        return [4 /*yield*/, this.toastCtrl.create({
                                message: '뒤로가기 버튼을 한번 더 누르시면 앱이 종료됩니다.',
                                duration: 2000
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        setTimeout(function () {
                            _this.back_clicked = 0;
                        }, 2000);
                        return [3 /*break*/, 3];
                    case 2:
                        navigator['app'].exitApp();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); });
    };
    MessagesComponent.prototype.group = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _app_groupmodal_components_groupmodal_page__WEBPACK_IMPORTED_MODULE_8__["GroupmodalPage"],
                            animated: true,
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** on view enter, if route contains an id, open chat belonging to that id in a modal straight away */
    MessagesComponent.prototype.ionViewDidEnter = function () {
        var messageId = this.activatedRoute.snapshot.params && this.activatedRoute.snapshot.params.id;
        if (messageId) {
            this.openChat(messageId);
        }
    };
    /** search messages by participant name */
    MessagesComponent.prototype.onSearch = function (val) {
        if (val && val.trim() !== '') {
            this.messages = this.allMessages.filter(function (item) {
                return item.participants.find(function (user) { return user.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1; });
            });
        }
        else {
            this.messages = this.allMessages;
        }
    };
    /** used in template to retrieve details of receiving user for the message
     * if currentUser's id doesn't match another user in list, get the other users data as a recipient
     */
    MessagesComponent.prototype.getSender = function (message) {
        var _this = this;
        return message.participants.find(function (user) { return user.uid !== _this.currentUser.uid; });
    };
    /** get last message sent in conversation or default to start chatting */
    MessagesComponent.prototype.getLastMessage = function (message) {
        return message.messages && message.messages.length > 0 ? message.messages[message.messages.length - 1] : null;
    };
    /** open chat in a model */
    MessagesComponent.prototype.openChat = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(_message_message_component__WEBPACK_IMPORTED_MODULE_7__["MessageComponent"], message)];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** action sheet with options for a single chat,
     * allow user to mark message as read, archive chat and delete a chat
     */
    MessagesComponent.prototype.options = function (chat) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var asCtrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant('messages-component.manage-chat'),
                            buttons: [
                                {
                                    text: this.translate.instant('messages-component.mark-as-read'),
                                    handler: function () {
                                        chat.isRead = true;
                                        _this.messageService.updateMessage(chat);
                                    }
                                },
                                {
                                    text: this.translate.instant('messages-component.archieved'),
                                    handler: function () {
                                        chat.isArchieved = true;
                                        _this.messageService.updateMessage(chat);
                                    }
                                },
                                {
                                    text: this.translate.instant('messages-component.delete'),
                                    handler: function () {
                                        _this.messageService.deleteMessage(chat);
                                    }
                                },
                                {
                                    text: this.translate.instant('other.close'),
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        asCtrl = _a.sent();
                        asCtrl.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** action sheet with options for selected chat,
     * allow user to mark message as read, archive chat and delete a chat
     */
    MessagesComponent.prototype.messagesOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var asCtrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant('messages-component.manage-messages'),
                            buttons: [
                                {
                                    text: this.translate.instant('messages-component.select'),
                                    handler: function () {
                                        _this.getSelection = true;
                                    }
                                },
                                {
                                    text: this.translate.instant('messages-component.select-all'),
                                    handler: function () {
                                        _this.selectAll();
                                    }
                                },
                                {
                                    text: this.translate.instant('messages-component.delete-all'),
                                    handler: function () {
                                        _this.messageService.deleteAllMessages(_this.messages.length);
                                    }
                                },
                                {
                                    text: this.translate.instant('other.close'),
                                    role: 'cancel'
                                }
                            ]
                        })];
                    case 1:
                        asCtrl = _a.sent();
                        asCtrl.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** mark multiple selected messages as read */
    MessagesComponent.prototype.markAsRead = function () {
        var _this = this;
        var selected = this.messages.filter(function (msg) { return msg.selected === true; });
        selected.forEach(function (item) {
            item.isRead = true;
            _this.messageService.updateMessage(item);
        });
        this.getSelection = false;
    };
    /** archive multiple messages */
    MessagesComponent.prototype.archieve = function () {
        var _this = this;
        var selected = this.messages.filter(function (msg) { return msg.selected === true; });
        selected.forEach(function (item) {
            item.isArchieved = true;
            _this.messageService.updateMessage(item);
        });
        this.getSelection = false;
    };
    /** delete selected messages */
    MessagesComponent.prototype.deleteSelected = function () {
        var _this = this;
        var selected = this.messages.filter(function (msg) { return msg.selected === true; });
        selected.forEach(function (item) {
            _this.messageService.deleteMessage(item);
        });
        this.getSelection = false;
    };
    /** select all messages */
    MessagesComponent.prototype.selectAll = function () {
        this.getSelection = true;
        this.messages.map(function (message) {
            message.selected = true;
            return message;
        });
    };
    MessagesComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
        { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
        { type: _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] }
    ]; };
    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/pages/messages/components/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/pages/messages/components/messages/messages.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"],
            _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"]])
    ], MessagesComponent);
    return MessagesComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"]));



/***/ }),

/***/ "./src/pages/messages/messages.module.ts":
/*!***********************************************!*\
  !*** ./src/pages/messages/messages.module.ts ***!
  \***********************************************/
/*! exports provided: MessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return MessagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/message/message.component */ "./src/pages/messages/components/message/message.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/pages/messages/components/messages/messages.component.ts");







var MessagesModule = /** @class */ (function () {
    function MessagesModule() {
    }
    MessagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"], _components_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"]],
            entryComponents: [_components_message_message_component__WEBPACK_IMPORTED_MODULE_5__["MessageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"]
                    },
                    {
                        path: ':id',
                        component: _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__["MessagesComponent"]
                    }
                ])
            ]
        })
    ], MessagesModule);
    return MessagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-messages-messages-module-es5.js.map