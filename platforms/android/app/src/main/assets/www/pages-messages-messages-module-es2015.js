(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-messages-messages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/messages/components/messages/messages.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/messages/components/messages/messages.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <!-- <img src=\"../../../../assets/images/new/Background1.jpg\" id=\"bg\" alt=\"\"> -->\r\n  <div class=\"content-wrapper\">\r\n    <!-- start header -->\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'messages-component.title' | translate }}\r\n      </div>\r\n      <div class=\"options\">\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"openSearch = !openSearch\">\r\n          <ion-icon mode=\"md\" name=\"search\"></ion-icon>\r\n        </ion-button>\r\n        <!--<ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"group()\">          \r\n          <ion-icon color=\"medium\" src=\"../../../../assets/icons/plus.svg\"></ion-icon>\r\n        </ion-button>-->\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"messagesOptions()\">\r\n          <ion-icon mode=\"md\" name=\"more\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n    <!-- end header -->\r\n\r\n    <app-tab-menu [tabs]=\"views\"></app-tab-menu>\r\n    <app-search-bar *ngIf=\"openSearch\" (event)=\"onSearch($event)\"></app-search-bar>\r\n\r\n    <!-- show messages -->\r\n    <div class=\"content-scroll\" *ngIf=\"messages.length > 0\">\r\n      <div class=\"messages\" *ngFor=\"let item of messages\">\r\n        <!-- selected icon toggle -->\r\n        <div class=\"action\" *ngIf=\"getSelection\">\r\n          <ion-icon\r\n            color=\"secondary\"\r\n            (click)=\"item.selected = !item.selected\"\r\n            [src]=\"item.selected ? 'assets/icons/check-square.svg' : 'assets/icons/square.svg'\"\r\n          ></ion-icon>\r\n        </div>\r\n\r\n        <!-- image of receipeint -->\r\n        <div\r\n          class=\"image\"\r\n          [image-loader]=\"getSender(item).photoURL\"\r\n          (click)=\"goto(routes.people, { queryParams: { id: getSender(item).uid } })\"\r\n        ></div>\r\n\r\n        <!-- details of chat -->\r\n        <div class=\"detail\" (click)=\"openChat(item.id)\">\r\n          <div class=\"name\">{{ getSender(item).displayName }}</div>\r\n          <div class=\"msg\">{{ getLastMessage(item)?.value || 'messages-component.start-chatting' | translate }}</div>\r\n        </div>\r\n\r\n        <!--  date and actions button -->\r\n        <div class=\"date\">\r\n          <span>{{ item?.updatedAt?.toDate() | amTimeAgo }}</span>\r\n          <ion-button fill=\"clear\" *ngIf=\"!getSelection\" (click)=\"options(item)\" color=\"medium\" size=\"small\">\r\n            <ion-icon name=\"more\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <app-no-data *ngIf=\"messages.length === 0\"></app-no-data>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<ion-footer *ngIf=\"!getSelection\">\r\n  \r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"schedule\" (click)=\"goto(routes.dashboard)\">\r\n      <ion-icon src=\"../../../../assets/icons/calendar.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.dashboard' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n    \r\n    <ion-tab-button tab=\"news\" (click)=\"goto(routes.feed)\">\r\n      <ion-icon src=\"../../../../assets/icons/rss.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.news' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"people\" (click)=\"goto(routes.people)\">\r\n      <ion-icon src=\"../../../../assets/icons/users.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.people' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\" (click)=\"goto(routes.messages)\">\r\n      <ion-icon src=\"../../../../assets/icons/message-square.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.chat' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\" (click)=\"goto(routes.setting)\">\r\n      <ion-icon src=\"../../../../assets/icons/settings.svg\" ></ion-icon>\r\n      <ion-label>{{ 'page-title.setting' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-footer>\r\n\r\n<!-- footer with buttons when you select more than one item -->\r\n<ion-footer *ngIf=\"getSelection\">\r\n  <div class=\"buttons\">\r\n    <ion-button size=\"small\" (click)=\"markAsRead()\">Mark as Read</ion-button>\r\n    <ion-button size=\"small\" (click)=\"archieve()\" color=\"secondary\">Archieve</ion-button>\r\n    <ion-button size=\"small\" (click)=\"deleteSelected()\" color=\"danger\">Delete</ion-button>\r\n    <ion-button (click)=\"getSelection = false\" color=\"dark\" fill=\"clear\">\r\n      <ion-icon src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/pages/messages/components/messages/messages.component.scss":
/*!************************************************************************!*\
  !*** ./src/pages/messages/components/messages/messages.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content .content-wrapper .content-scroll {\n  padding: 0 20px; }\n  :host ion-content .content-wrapper .content-scroll .messages {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    margin: 20px 0; }\n  :host ion-content .content-wrapper .content-scroll .messages .image {\n      width: 40px;\n      height: 40px;\n      border-radius: 50%;\n      background-size: cover !important; }\n  :host ion-content .content-wrapper .content-scroll .messages .detail {\n      margin-left: 15px;\n      -webkit-box-flex: 1;\n              flex: 1; }\n  :host ion-content .content-wrapper .content-scroll .messages .detail .name {\n        font-weight: 500;\n        font-size: 16px; }\n  :host ion-content .content-wrapper .content-scroll .messages .detail .msg {\n        font-size: 14px;\n        color: var(--ion-color-medium-shade);\n        white-space: nowrap;\n        width: 150px;\n        text-overflow: ellipsis;\n        overflow: hidden; }\n  :host ion-content .content-wrapper .content-scroll .messages .date {\n      width: 63px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      font-size: 10px;\n      color: var(--ion-color-medium-shade);\n      overflow: hidden;\n      white-space: nowrap; }\n  :host ion-content .content-wrapper .content-scroll .messages .action {\n      margin-right: 15px; }\n  :host ion-footer .buttons {\n  margin: 5px 0 5px 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n  :host ion-footer .buttons ion-button {\n    width: 100%; }\n  :host ion-footer .buttons ion-button.right {\n      float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvbWVzc2FnZXMvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlRLGVBQWUsRUFBQTtFQUp2QjtJQU9VLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsY0FBYyxFQUFBO0VBVHhCO01BWVksV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsaUNBQWlDLEVBQUE7RUFmN0M7TUFtQlksaUJBQWlCO01BQ2pCLG1CQUFPO2NBQVAsT0FBTyxFQUFBO0VBcEJuQjtRQXVCYyxnQkFBZ0I7UUFDaEIsZUFBZSxFQUFBO0VBeEI3QjtRQTRCYyxlQUFlO1FBQ2Ysb0NBQW9DO1FBQ3BDLG1CQUFtQjtRQUNuQixZQUFZO1FBQ1osdUJBQXVCO1FBQ3ZCLGdCQUFnQixFQUFBO0VBakM5QjtNQXNDWSxXQUFXO01BQ1gsb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsZUFBZTtNQUNmLG9DQUFvQztNQUNwQyxnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUE7RUE1Qy9CO01BK0NZLGtCQUFrQixFQUFBO0VBL0M5QjtFQXVETSxzQkFBc0I7RUFDdEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBO0VBekR6QjtJQTJEUSxXQUFXLEVBQUE7RUEzRG5CO01BNkRVLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvcGFnZXMvbWVzc2FnZXMvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgLmNvbnRlbnQtc2Nyb2xsIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcblxyXG4gICAgICAgIC5tZXNzYWdlcyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG5cclxuICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm1zZyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICB3aWR0aDogNjNweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuYWN0aW9uIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpb24tZm9vdGVyIHtcclxuICAgIC5idXR0b25zIHtcclxuICAgICAgbWFyZ2luOiA1cHggMCA1cHggMTVweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgJi5yaWdodCB7XHJcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
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
let MessagesComponent = class MessagesComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"] {
    constructor(injector, platform, nativeToast, authService, messageService, modalController) {
        super(injector);
        this.injector = injector;
        this.platform = platform;
        this.nativeToast = nativeToast;
        this.authService = authService;
        this.messageService = messageService;
        this.modalController = modalController;
        this.back_clicked = 0;
        this.allMessages = [];
        this.messages = [];
        this.getSelection = false;
        this.openSearch = false;
        this.view$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** get tab data to use as input for app-tab-menu component */
        this.views = [
            {
                id: 0,
                active: true,
                name: this.translate.instant('messages-component.tab-all'),
                event: () => {
                    this.view$.next(false);
                }
            },
            {
                id: 2,
                name: this.translate.instant('messages-component.tab-archived'),
                event: () => {
                    this.view$.next(true);
                }
            }
        ];
    }
    /**
     * subscribe to view change events from tab component changes,
     * create a switch map to get data based on view change
     * if isArchieved view is clicked show archieved messages
     * emit event for no archieved messages on initialization
     */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.appExitConfig();
            this.currentUser = yield this.authService.getUser();
            const queryObservable = this.view$.pipe(Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((view) => this.messageService.getMessages(this.currentUser.uid, view)));
            this.subscriptions.push(queryObservable.subscribe((queryItems) => {
                this.messages = this.allMessages = queryItems;
            }));
            this.view$.next(false);
        });
    }
    appExitConfig() {
        this.platform.backButton.subscribe(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.back_clicked === 0) {
                this.back_clicked++;
                const toast = yield this.toastCtrl.create({
                    message: '뒤로가기 버튼을 한번 더 누르시면 앱이 종료됩니다.',
                    duration: 2000
                });
                toast.present();
                setTimeout(() => {
                    this.back_clicked = 0;
                }, 2000);
            }
            else {
                navigator['app'].exitApp();
            }
        }));
    }
    group() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _app_groupmodal_components_groupmodal_page__WEBPACK_IMPORTED_MODULE_8__["GroupmodalPage"],
                animated: true,
            });
            return yield modal.present();
        });
    }
    /** on view enter, if route contains an id, open chat belonging to that id in a modal straight away */
    ionViewDidEnter() {
        const messageId = this.activatedRoute.snapshot.params && this.activatedRoute.snapshot.params.id;
        if (messageId) {
            this.openChat(messageId);
        }
    }
    /** search messages by participant name */
    onSearch(val) {
        if (val && val.trim() !== '') {
            this.messages = this.allMessages.filter((item) => {
                return item.participants.find((user) => user.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.messages = this.allMessages;
        }
    }
    /** used in template to retrieve details of receiving user for the message
     * if currentUser's id doesn't match another user in list, get the other users data as a recipient
     */
    getSender(message) {
        return message.participants.find((user) => user.uid !== this.currentUser.uid);
    }
    /** get last message sent in conversation or default to start chatting */
    getLastMessage(message) {
        return message.messages && message.messages.length > 0 ? message.messages[message.messages.length - 1] : null;
    }
    /** open chat in a model */
    openChat(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(_message_message_component__WEBPACK_IMPORTED_MODULE_7__["MessageComponent"], message);
            modal.present();
        });
    }
    /** action sheet with options for a single chat,
     * allow user to mark message as read, archive chat and delete a chat
     */
    options(chat) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const asCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('messages-component.manage-chat'),
                buttons: [
                    {
                        text: this.translate.instant('messages-component.mark-as-read'),
                        handler: () => {
                            chat.isRead = true;
                            this.messageService.updateMessage(chat);
                        }
                    },
                    {
                        text: this.translate.instant('messages-component.archieved'),
                        handler: () => {
                            chat.isArchieved = true;
                            this.messageService.updateMessage(chat);
                        }
                    },
                    {
                        text: this.translate.instant('messages-component.delete'),
                        handler: () => {
                            this.messageService.deleteMessage(chat);
                        }
                    },
                    {
                        text: this.translate.instant('other.close'),
                        role: 'cancel'
                    }
                ]
            });
            asCtrl.present();
        });
    }
    /** action sheet with options for selected chat,
     * allow user to mark message as read, archive chat and delete a chat
     */
    messagesOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const asCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('messages-component.manage-messages'),
                buttons: [
                    {
                        text: this.translate.instant('messages-component.select'),
                        handler: () => {
                            this.getSelection = true;
                        }
                    },
                    {
                        text: this.translate.instant('messages-component.select-all'),
                        handler: () => {
                            this.selectAll();
                        }
                    },
                    {
                        text: this.translate.instant('messages-component.delete-all'),
                        handler: () => {
                            this.messageService.deleteAllMessages(this.messages.length);
                        }
                    },
                    {
                        text: this.translate.instant('other.close'),
                        role: 'cancel'
                    }
                ]
            });
            asCtrl.present();
        });
    }
    /** mark multiple selected messages as read */
    markAsRead() {
        const selected = this.messages.filter((msg) => msg.selected === true);
        selected.forEach((item) => {
            item.isRead = true;
            this.messageService.updateMessage(item);
        });
        this.getSelection = false;
    }
    /** archive multiple messages */
    archieve() {
        const selected = this.messages.filter((msg) => msg.selected === true);
        selected.forEach((item) => {
            item.isArchieved = true;
            this.messageService.updateMessage(item);
        });
        this.getSelection = false;
    }
    /** delete selected messages */
    deleteSelected() {
        const selected = this.messages.filter((msg) => msg.selected === true);
        selected.forEach((item) => {
            this.messageService.deleteMessage(item);
        });
        this.getSelection = false;
    }
    /** select all messages */
    selectAll() {
        this.getSelection = true;
        this.messages.map((message) => {
            message.selected = true;
            return message;
        });
    }
};
MessagesComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["Platform"] },
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_10__["Toast"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ModalController"] }
];
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/message/message.component */ "./src/pages/messages/components/message/message.component.ts");
/* harmony import */ var _components_messages_messages_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/messages/messages.component */ "./src/pages/messages/components/messages/messages.component.ts");







let MessagesModule = class MessagesModule {
};
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



/***/ })

}]);
//# sourceMappingURL=pages-messages-messages-module-es2015.js.map