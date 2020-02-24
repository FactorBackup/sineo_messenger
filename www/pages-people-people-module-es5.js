(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-people-people-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/people/components/people/people.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/people/components/people/people.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  \r\n\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'people-component.title' | translate }}\r\n      </div>\r\n      <div class=\"options\">\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"openSearch = !openSearch\">\r\n          <ion-icon mode=\"md\" name=\"search\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"gotoinvitechatuser()\">\r\n          <ion-icon mode=\"md\" name=\"chatboxes\"></ion-icon>\r\n        </ion-button>\r\n        </div>\r\n    </div>\r\n    <app-tab-menu [tabs]=\"views\" (event)=\"showList($event)\"></app-tab-menu>\r\n    <app-search-bar *ngIf=\"openSearch\" (event)=\"onSearch($event)\"></app-search-bar>\r\n\r\n    <div class=\"wrapper\" *ngIf=\"groupedPeople.length > 0\">\r\n      <div class=\"content-scroll\" #content>\r\n        <div class=\"group\" *ngFor=\"let group of groupedPeople\">\r\n          <!-- <div class=\"title\" [id]=\"group.letter\">{{ group.letter }}</div> --> <!--kjm-->\r\n          <div class=\"contact\" *ngFor=\"let contact of group.people; let i = index\">\r\n            <div class=\"image\" [image-loader]=\"contact.photoURL\" (click)=\"open(contact.uid)\"></div>\r\n            <div class=\"detail\" (click)=\"open(contact.uid)\">\r\n              <div class=\"name\">{{ contact.displayName }}</div>\r\n              <div class=\"city\" *ngIf=\"contact.town\">{{ contact.town }}</div>\r\n              <div class=\"country\" *ngIf=\"contact.country\">{{ contact.country }}</div>\r\n            </div>\r\n\r\n            <div class=\"more\">\r\n              <ion-button *ngIf=\"isFriend(contact.uid)\" size=\"small\" fill=\"clear\" shape=\"round\" (click)=\"openMore(contact)\">\r\n                <ion-icon name=\"more\"></ion-icon>\r\n              </ion-button>\r\n              <ion-button *ngIf=\"!isFriend(contact.uid)\" class=\"follow-btn\" size=\"small\" shape=\"round\" (click)=\"manage(contact)\">\r\n                {{ 'people-component.follow' | translate }}\r\n              </ion-button>\r\n            </div>\r\n\r\n            <a hidden #callNumber href=\"tel:+{{ contact.mobile || contact.phone }}\"></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"link-alpha\">\r\n        <li class=\"alpha-link-item\" *ngFor=\"let item of alpha\" (click)=\"scrollTo(item)\">{{ item }}</li>\r\n      </div>\r\n    </div>\r\n    <app-no-data *ngIf=\"groupedPeople.length === 0\"> </app-no-data>\r\n  </div>\r\n</ion-content>\r\n\r\n<app-spinner *ngIf=\"loading\"></app-spinner>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/people/components/person/person.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/people/components/person/person.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\" *ngIf=\"user\">\r\n        <!-- profile image -->\r\n        <div class=\"profile-image\" [image-loader]=\"user.photoURL\">\r\n          <!-- show if following -->\r\n          <ion-fab slot=\"fixed\" *ngIf=\"isFriend\">\r\n            <ion-fab-button>\r\n              <ion-icon name=\"add\"></ion-icon>\r\n            </ion-fab-button>\r\n            <ion-fab-list side=\"bottom\">\r\n              <ion-fab-button>\r\n                <ion-icon (click)=\"call()\" src=\"assets/icons/phone-call.svg\"></ion-icon>\r\n              </ion-fab-button>\r\n              <ion-fab-button>\r\n                <ion-icon (click)=\"chat()\" src=\"assets/icons/message-square.svg\"></ion-icon>\r\n              </ion-fab-button>\r\n              <ion-fab-button>\r\n                <ion-icon (click)=\"share()\" src=\"assets/icons/share-2.svg\"></ion-icon>\r\n              </ion-fab-button>\r\n            </ion-fab-list>\r\n          </ion-fab>\r\n\r\n          <!-- show if not following -->\r\n          <ion-button *ngIf=\"!isFriend\" class=\"follow\" (click)=\"manage()\">{{ 'person-component.follow' | translate }}</ion-button>\r\n        </div>\r\n\r\n        <!-- profile details -->\r\n        <div class=\"profile-detail\">\r\n          <div class=\"name\">{{ user.displayName }}</div>\r\n\r\n          <div class=\"country\">{{ user.country }}</div>\r\n\r\n          <div class=\"status\">\r\n            {{\r\n              user.statusMessage ||\r\n                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis maximus ligula, quis luctus neque. Integer eu efficitur urna. Quisque rhoncus non est eu tristique.'\r\n            }}\r\n          </div>\r\n          <div class=\"email\"><ion-icon src=\"assets/icons/mail.svg\"></ion-icon>{{ user.email }}</div>\r\n          <div class=\"phone\">\r\n            <ion-icon src=\"assets/icons/phone.svg\"></ion-icon>{{ user.mobile || user.phone || 'misc.no-data' | translate }}\r\n          </div>\r\n          <div class=\"town\"><ion-icon src=\"assets/icons/map-pin.svg\"></ion-icon>{{ user.town || 'misc.no-data' | translate }}</div>\r\n        </div>\r\n\r\n        <!-- call user with hidden a tag -->\r\n        <a hidden #callNumber href=\"tel:+{{ user.mobile || user.phone }}\"></a>\r\n      </div>\r\n\r\n      <ion-button fill=\"clear\" (click)=\"closeModal()\">\r\n        <ion-icon src=\"assets/icons/x.svg\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/pages/people/components/people/people.component.scss":
/*!******************************************************************!*\
  !*** ./src/pages/people/components/people/people.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .content-wrapper .header .title {\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .content-wrapper .header .title small {\n  font-size: 50%;\n  margin-left: 10px;\n}\n:host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: 100% !important;\n  width: 100%;\n  overflow: auto;\n}\n:host .content-wrapper .wrapper .content-scroll .group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .content-wrapper .wrapper .content-scroll .group .title {\n  font-size: 22px;\n  font-weight: 600;\n  padding: 10px 0 5px 30px;\n  text-transform: uppercase;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact {\n  margin: 5px 20px 5px 0;\n  display: -webkit-box;\n  display: flex;\n  padding: 5px 10px 5px 15px;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .image {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-size: cover !important;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail {\n  padding: 0 10px 0 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .name {\n  font-size: 16px;\n  font-weight: 500;\n  padding: 0 0 4px 0;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .job {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n  margin-bottom: 2px;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .city,\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .country {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .country {\n  color: var(--ion-color-primary-shade);\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .more .follow-btn {\n  width: 55px;\n  font-size: 10px;\n}\n:host .content-wrapper .wrapper .link-alpha {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-right: 15px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .content-wrapper .wrapper .link-alpha .alpha-link-item {\n  list-style-type: none;\n  font-size: 11px;\n  margin: 0 0 1px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvcGFnZXMvcGVvcGxlL2NvbXBvbmVudHMvcGVvcGxlL3Blb3BsZS5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9wZW9wbGUvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNBSjtBREVNO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtBQ0FSO0FERVE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNBVjtBREtJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDSE47QURJTTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNGUjtBRElRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDRlY7QURJVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUNGWjtBREtVO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwwQkFBQTtBQ0haO0FES1k7RUFDRSxXQUFBO0VBQ1AsWUFBQTtFQUNBLGtCQUFBO0VBQ08saUNBQUE7QUNIZDtBRE1ZO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNKZDtBRE1jO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNKaEI7QURRYztFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUNOaEI7QURTYzs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ1BoQjtBRFVjO0VBQ0UscUNBQUE7QUNSaEI7QURhYztFQUNFLFdBQUE7RUFDQSxlQUFBO0FDWGhCO0FEa0JNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ2hCUjtBRGlCUTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDZlYiLCJmaWxlIjoic3JjL3BhZ2VzL3Blb3BsZS9jb21wb25lbnRzL3Blb3BsZS9wZW9wbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDUwJTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAuY29udGVudC1zY3JvbGwge1xyXG4gICAgICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5ncm91cCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgICAudGl0bGUgeyBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgNXB4IDMwcHg7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvbnRhY3Qge1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAyMHB4IDVweCAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTVweDtcclxuXHJcbiAgICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OiA0MHB4O1xyXG5cdFx0XHRcdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweCAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDAgNHB4IDA7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgLmpvYiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmNpdHksXHJcbiAgICAgICAgICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5jb3VudHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubW9yZSB7XHJcbiAgICAgICAgICAgICAgLmZvbGxvdy1idG4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubGluay1hbHBoYSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIC5hbHBoYS1saW5rLWl0ZW0ge1xyXG4gICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuaGVhZGVyIC50aXRsZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5oZWFkZXIgLnRpdGxlIHNtYWxsIHtcbiAgZm9udC1zaXplOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiAxMHB4IDAgNXB4IDMwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLmNvbnRhY3Qge1xuICBtYXJnaW46IDVweCAyMHB4IDVweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTVweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCAuY29udGFjdCAuaW1hZ2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCAuY29udGFjdCAuZGV0YWlsIHtcbiAgcGFkZGluZzogMCAxMHB4IDAgMTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCAuY29udGFjdCAuZGV0YWlsIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiAwIDAgNHB4IDA7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLmNvbnRhY3QgLmRldGFpbCAuam9iIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCAuY29udGFjdCAuZGV0YWlsIC5jaXR5LFxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmdyb3VwIC5jb250YWN0IC5kZXRhaWwgLmNvdW50cnkge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCAuY29udGFjdCAuZGV0YWlsIC5jb3VudHJ5IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCAuY29udGFjdCAubW9yZSAuZm9sbG93LWJ0biB7XG4gIHdpZHRoOiA1NXB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5saW5rLWFscGhhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmxpbmstYWxwaGEgLmFscGhhLWxpbmstaXRlbSB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBtYXJnaW46IDAgMCAxcHggMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/people/components/people/people.component.ts":
/*!****************************************************************!*\
  !*** ./src/pages/people/components/people/people.component.ts ***!
  \****************************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/messages/services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/people/people.service */ "./src/pages/people/services/people/people.service.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../person/person.component */ "./src/pages/people/components/person/person.component.ts");









/**
 * get list of people fro users collection, group them by first letter of their display names.
 * using a href to scroll to category by letter in the user list.
 * you can follow and unfollow users, call and start message
 */
var PeopleComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PeopleComponent, _super);
    function PeopleComponent(injector, authService, messageService, peopleService, commonService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.messageService = messageService;
        _this.peopleService = peopleService;
        _this.commonService = commonService;
        /** group contacts by first letter of their first names */
        _this.groupedPeople = [];
        /** stores string array of alphabets */
        _this.alpha = [];
        /** stores tabbed views properties */
        _this.views = [];
        /** toggles search bar in template */
        _this.openSearch = false;
        _this.selectedIndex = 0;
        _this.alpha = _this.peopleService.alpha;
        _this.views = _this.peopleService.views;
        return _this;
    }
    /** get currentUser, get users friends ids and get all users from user collection */
    PeopleComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loading = true;
                        this.openProfileFromUrl();
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        this.subscriptions.push(this.peopleService.getFriendIds(this.currentUser.uid).subscribe(function (ids) { return (_this.friends = ids); }));
                        this.subscriptions.push(this.peopleService.getPeople(this.currentUser.uid).subscribe(function (users) {
                            _this.list = users;
                            _this.loading = false;
                            _this.showList(_this.selectedIndex);
                        }, function (err) {
                            _this.loading = false;
                            _this.toast(err);
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    /** if you navigate to this page with query params, open person modal and use id in query param to find user details */
    PeopleComponent.prototype.openProfileFromUrl = function () {
        var _this = this;
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe(function (param) {
            if (param && param.id) {
                _this.open(param.id);
            }
        }));
    };
    PeopleComponent.prototype.gotoinvitechatuser = function () {
        this.router.navigateByUrl('/invite-group');
    };
    /** search list of users by name and regroup into alphabet categories */
    PeopleComponent.prototype.onSearch = function (val) {
        var people;
        if (val && val.trim() !== '') {
            people = this.list.filter(function (item) {
                return item.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
        else {
            people = this.list.slice();
        }
        this.groupedPeople = this.peopleService.groupPeople(people);
    };
    /** show either friends or all people based on tab selection */
    PeopleComponent.prototype.showList = function (index) {
        var _this = this;
        this.selectedIndex = index;
        if (index === 0) {
            this.groupedPeople = this.peopleService.groupPeople(this.list);
        }
        else {
            var friends = this.list.filter(function (user) { return (_this.friends && _this.friends.length > 0 ? _this.friends.includes(user.uid) : null); });
            this.groupedPeople = this.peopleService.groupPeople(friends);
        }
    };
    /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
    PeopleComponent.prototype.manage = function (friend) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(Object(util__WEBPACK_IMPORTED_MODULE_6__["isArray"])(this.friends) && this.friends.includes(friend.uid))) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.peopleService.unfollow(friend.uid)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.peopleService.follow(friend.uid)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        this.showList(this.selectedIndex);
                        return [2 /*return*/];
                }
            });
        });
    };
    PeopleComponent.prototype.isFriend = function (fid) {
        return Object(util__WEBPACK_IMPORTED_MODULE_6__["isArray"])(this.friends) && this.friends.includes(fid);
    };
    /** open a persons profile */
    PeopleComponent.prototype.open = function (uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(_person_person_component__WEBPACK_IMPORTED_MODULE_8__["PersonComponent"], uid, 'custom-modal')];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open action sheet with options for a person selection */
    PeopleComponent.prototype.openMore = function (contact) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheetCtrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant('other.options'),
                            buttons: [
                                {
                                    text: this.translate.instant('people-component.unfollow'),
                                    handler: function () {
                                        _this.manage(contact);
                                    }
                                },
                                {
                                    text: this.translate.instant('people-component.open'),
                                    handler: function () {
                                        _this.open(contact.uid);
                                    }
                                },
                                {
                                    text: this.translate.instant('people-component.call'),
                                    handler: function () {
                                        _this.commonService.callUser(contact.mobile || contact.phone, _this.callNumber);
                                    }
                                },
                                {
                                    text: this.translate.instant('people-component.chat'),
                                    handler: function () {
                                        _this.messageService.startChat(contact);
                                    }
                                },
                                {
                                    text: this.translate.instant('other.cancel'),
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
    /** scroll user to user group category */
    PeopleComponent.prototype.scrollTo = function (item) {
        var element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };
    PeopleComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] },
        { type: _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__["PeopleService"] },
        { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PeopleComponent.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('callNumber', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PeopleComponent.prototype, "callNumber", void 0);
    PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-people',
            template: __webpack_require__(/*! raw-loader!./people.component.html */ "./node_modules/raw-loader/index.js!./src/pages/people/components/people/people.component.html"),
            styles: [__webpack_require__(/*! ./people.component.scss */ "./src/pages/people/components/people/people.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"],
            _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__["PeopleService"],
            src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], PeopleComponent);
    return PeopleComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"]));



/***/ }),

/***/ "./src/pages/people/components/person/person.component.scss":
/*!******************************************************************!*\
  !*** ./src/pages/people/components/person/person.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: transparent;\n}\n:host ion-content .content-wrapper {\n  width: 80%;\n  height: 80%;\n  margin: 20% auto;\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  box-shadow: 1px 2px 12px var(--ion-color-dark);\n  overflow: hidden;\n}\n:host ion-content .content-wrapper .wrapper {\n  height: 100%;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 45px);\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-image {\n  height: 260px;\n  width: 100%;\n  margin: auto;\n  position: relative;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-image ion-fab {\n  position: absolute;\n  right: 10px;\n  bottom: -28px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-image .follow {\n  position: absolute;\n  right: 10px;\n  bottom: -20px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background: var(--ion-color-light);\n  padding: 20px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .name {\n  font-size: 20px;\n  font-weight: 600;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .status {\n  color: var(--ion-color-medium);\n  font-size: 12px;\n  margin: 5px 0;\n  padding: 0 0 15px;\n  border-bottom: 1px solid rgba(var(--ion-color-medium-rgb), 0.4);\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .email,\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .phone,\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .town {\n  font-size: 13px;\n  margin: 2px 0;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .email ion-icon,\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .phone ion-icon,\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .town ion-icon {\n  margin-right: 10px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .country {\n  color: var(--ion-color-medium);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvcGFnZXMvcGVvcGxlL2NvbXBvbmVudHMvcGVyc29uL3BlcnNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9wZW9wbGUvY29tcG9uZW50cy9wZXJzb24vcGVyc29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7QUNBSjtBREVJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0FDQU47QURDTTtFQUNFLFlBQUE7QUNDUjtBREFRO0VBQ0UseUJBQUE7QUNFVjtBREFVO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFWjtBRERZO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0dkO0FERFk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDR2Q7QURDVTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQ0NaO0FEQVk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNFZDtBREFZO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0RBQUE7QUNFZDtBREFZOzs7RUFHRSxlQUFBO0VBQ0EsYUFBQTtBQ0VkO0FERGM7OztFQUNFLGtCQUFBO0FDS2hCO0FERlk7RUFDRSw4QkFBQTtFQUNBLGVBQUE7QUNJZCIsImZpbGUiOiJzcmMvcGFnZXMvcGVvcGxlL2NvbXBvbmVudHMvcGVyc29uL3BlcnNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgbWFyZ2luOiAyMCUgYXV0bztcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAxMnB4IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAuY29udGVudC1zY3JvbGwge1xyXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NXB4KTtcclxuXHJcbiAgICAgICAgICAucHJvZmlsZS1pbWFnZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgaW9uLWZhYiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTI4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvbGxvdyB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucHJvZmlsZS1kZXRhaWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC40KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZW1haWwsXHJcbiAgICAgICAgICAgIC5waG9uZSxcclxuICAgICAgICAgICAgLnRvd24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBtYXJnaW46IDIwJSBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDEycHggdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NXB4KTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWltYWdlIHtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnByb2ZpbGUtaW1hZ2UgaW9uLWZhYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogLTI4cHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1pbWFnZSAuZm9sbG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAtMjBweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1kZXRhaWwgLm5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1kZXRhaWwgLnN0YXR1cyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDVweCAwO1xuICBwYWRkaW5nOiAwIDAgMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjQpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnByb2ZpbGUtZGV0YWlsIC5lbWFpbCxcbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWRldGFpbCAucGhvbmUsXG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1kZXRhaWwgLnRvd24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMnB4IDA7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1kZXRhaWwgLmVtYWlsIGlvbi1pY29uLFxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnByb2ZpbGUtZGV0YWlsIC5waG9uZSBpb24taWNvbixcbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWRldGFpbCAudG93biBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWRldGFpbCAuY291bnRyeSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/pages/people/components/person/person.component.ts":
/*!****************************************************************!*\
  !*** ./src/pages/people/components/person/person.component.ts ***!
  \****************************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/messages/services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/people/people.service */ "./src/pages/people/services/people/people.service.ts");








/**
 * view users profile and call, follow, unfollow share or chat to user
 */
var PersonComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PersonComponent, _super);
    function PersonComponent(injector, navParams, authService, peopleService, messageService, commonService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.navParams = navParams;
        _this.authService = authService;
        _this.peopleService = peopleService;
        _this.messageService = messageService;
        _this.commonService = commonService;
        return _this;
    }
    /** get current user, get user to view by getting id from nav param */
    PersonComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, uid, _b;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _c.sent();
                        uid = this.navParams.get('data');
                        _b = this;
                        return [4 /*yield*/, this.peopleService.getPerson(uid)];
                    case 2:
                        _b.user = _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** call user */
    PersonComponent.prototype.call = function () {
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
    /** chat to user */
    PersonComponent.prototype.chat = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.messageService.startChat(this.user);
                this.closeModal();
                return [2 /*return*/];
            });
        });
    };
    /** share user */
    PersonComponent.prototype.share = function () {
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
    Object.defineProperty(PersonComponent.prototype, "isFriend", {
        /** getter to check if user is a friend */
        get: function () {
            return this.peopleService.friends.includes(this.user.uid);
        },
        enumerable: true,
        configurable: true
    });
    /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
    PersonComponent.prototype.manage = function () {
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
    PersonComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__["PeopleService"] },
        { type: src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] },
        { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('callNumber', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], PersonComponent.prototype, "callNumber", void 0);
    PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-person',
            template: __webpack_require__(/*! raw-loader!./person.component.html */ "./node_modules/raw-loader/index.js!./src/pages/people/components/person/person.component.html"),
            styles: [__webpack_require__(/*! ./person.component.scss */ "./src/pages/people/components/person/person.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__["PeopleService"],
            src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"],
            src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
    ], PersonComponent);
    return PersonComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"]));



/***/ }),

/***/ "./src/pages/people/people.module.ts":
/*!*******************************************!*\
  !*** ./src/pages/people/people.module.ts ***!
  \*******************************************/
/*! exports provided: PeopleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleModule", function() { return PeopleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_people_people_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/people/people.component */ "./src/pages/people/components/people/people.component.ts");
/* harmony import */ var _components_person_person_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/person/person.component */ "./src/pages/people/components/person/person.component.ts");







var PeopleModule = /** @class */ (function () {
    function PeopleModule() {
    }
    PeopleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_people_people_component__WEBPACK_IMPORTED_MODULE_5__["PeopleComponent"], _components_person_person_component__WEBPACK_IMPORTED_MODULE_6__["PersonComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_people_people_component__WEBPACK_IMPORTED_MODULE_5__["PeopleComponent"],
                    },
                    {
                        path: ':id',
                        component: _components_person_person_component__WEBPACK_IMPORTED_MODULE_6__["PersonComponent"],
                    },
                ]),
            ],
        })
    ], PeopleModule);
    return PeopleModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-people-people-module-es5.js.map