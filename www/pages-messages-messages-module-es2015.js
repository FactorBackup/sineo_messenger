(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-messages-messages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/messages/components/message/message.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/messages/components/message/message.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button size=\"small\" color=\"dark\" (click)=\"closeModal(null, routes.messages)\">\r\n        <ion-icon src=\"assets/icons/arrow-left.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"circle\" fill=\"clear\" color=\"dark\" (click)=\"translatorOptions()\">\r\n        <ion-icon name=\"flag\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button color=\"dark\" (click)=\"call()\">\r\n        <ion-icon src=\"assets/icons/phone.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title\r\n      ><span>\r\n        <div class=\"title-img\" [image-loader]=\"getSender(message)?.photoURL\"></div>\r\n        {{ getSender(message)?.displayName }}\r\n      </span></ion-title\r\n    >\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  <div class=\"content-wrapper\" *ngIf=\"currentUser\">\r\n    <ng-container *ngIf=\"message && message.messages && message.messages.length\">\r\n      <div\r\n        [id]=\"last ? 'last-item' : 'item' + i\"\r\n        *ngFor=\"let item of message.messages; let i = index; let last = last\"\r\n        (press)=\"onMessageHold(item)\"\r\n      >\r\n        <div [ngClass]=\"item.uid === currentUser.uid ? 'from-me' : 'from-them'\">\r\n          <!-- message image -->\r\n          <div\r\n            class=\"image\"\r\n            (click)=\"preview(item.images[0])\"\r\n            *ngIf=\"item.images && item.images.length === 1\"\r\n            [image-loader]=\"item.images[0]\"\r\n          ></div>\r\n\r\n          <!-- message image group -->\r\n          <div class=\"image-group\" *ngIf=\"item.images && item.images.length > 1\">\r\n            <div class=\"image-group-image\" (click)=\"preview(image)\" *ngFor=\"let image of item.images\" [image-loader]=\"image\"></div>\r\n          </div>\r\n\r\n          <!-- message content -->\r\n          <div\r\n            *ngIf=\"item.value\"\r\n            class=\"text\"\r\n            [innerHTML]=\"item.value.length > 100 && !item.readMore ? (item.value | slice: 0:100) : (item.value | markdown)\"\r\n          >\r\n            <!-- read more anchor link -->\r\n            <small>\r\n              <a *ngIf=\"item.value && item.value.length > 100\" (click)=\"item.readMore = !item.readMore\">\r\n                {{ 'message-component.read-more' | translate }}\r\n              </a>\r\n            </small>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"clear\"></div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <app-no-data [config]=\"noDataconfig\" *ngIf=\"message && message.messages && message.messages.length === 0\"> </app-no-data>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar class=\"custom-form\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"circle\" fill=\"clear\" color=\"primary\" (click)=\"sendPhoto()\">\r\n        <ion-icon src=\"assets/icons/camera.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <textarea\r\n      autosize\r\n      maxrow=\"4\"\r\n      useImportant=\"true\"\r\n      name=\"message\"\r\n      placeholder=\"{{ 'message-component.placeholder' | translate }}\"\r\n      [(ngModel)]=\"textMsg\"\r\n    ></textarea>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"circle\" fill=\"clear\" color=\"primary\" (click)=\"send(textMsg)\">\r\n        <ion-icon src=\"assets/icons/send.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n\r\n<!-- <app-spinner *ngIf=\"loading\"></app-spinner> -->\r\n\r\n<!-- required for browser file upload -->\r\n<input hidden #fileInputButton type=\"file\" (change)=\"detectFiles($event)\" multiple />\r\n\r\n<!-- call user with hidden a tag -->\r\n<a hidden #callNumber href=\"tel:+{{ getSender(message)?.mobile || getSender(message)?.phone }}\"></a>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/messages/components/messages/messages.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/messages/components/messages/messages.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <!-- <img src=\"../../../../assets/images/new/Background1.jpg\" id=\"bg\" alt=\"\"> -->\r\n  <div class=\"content-wrapper\">\r\n    <!-- start header -->\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'messages-component.title' | translate }}\r\n      </div>\r\n      <div class=\"options\">\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"openSearch = !openSearch\">\r\n          <ion-icon mode=\"md\" name=\"search\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"messagesOptions()\">\r\n          <ion-icon mode=\"md\" name=\"more\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n    <!-- end header -->\r\n\r\n    <app-tab-menu [tabs]=\"views\"></app-tab-menu>\r\n    <app-search-bar *ngIf=\"openSearch\" (event)=\"onSearch($event)\"></app-search-bar>\r\n\r\n    <!-- show messages -->\r\n    <div class=\"content-scroll\" *ngIf=\"messages.length > 0\">\r\n      <div class=\"messages\" *ngFor=\"let item of messages\">\r\n        <!-- selected icon toggle -->\r\n        <div class=\"action\" *ngIf=\"getSelection\">\r\n          <ion-icon\r\n            color=\"secondary\"\r\n            (click)=\"item.selected = !item.selected\"\r\n            [src]=\"item.selected ? 'assets/icons/check-square.svg' : 'assets/icons/square.svg'\"\r\n          ></ion-icon>\r\n        </div>\r\n\r\n        <!-- image of receipeint -->\r\n        <div\r\n          class=\"image\"\r\n          [image-loader]=\"getSender(item).photoURL\"\r\n          (click)=\"goto(routes.people, { queryParams: { id: getSender(item).uid } })\"\r\n        ></div>\r\n\r\n        <!-- details of chat -->\r\n        <div class=\"detail\" (click)=\"openChat(item.id)\">\r\n          <div class=\"name\">{{ getSender(item).displayName }}</div>\r\n          <div class=\"msg\">{{ getLastMessage(item)?.value || 'messages-component.start-chatting' | translate }}</div>\r\n        </div>\r\n\r\n        <!--  date and actions button -->\r\n        <div class=\"date\">\r\n          <span>{{ item?.updatedAt?.toDate() | amTimeAgo }}</span>\r\n          <ion-button fill=\"clear\" *ngIf=\"!getSelection\" (click)=\"options(item)\" color=\"medium\" size=\"small\">\r\n            <ion-icon name=\"more\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <app-no-data *ngIf=\"messages.length === 0\"></app-no-data>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- footer with buttons when you select more than one item -->\r\n<ion-footer *ngIf=\"getSelection\">\r\n  <div class=\"buttons\">\r\n    <ion-button size=\"small\" (click)=\"markAsRead()\">Mark as Read</ion-button>\r\n    <ion-button size=\"small\" (click)=\"archieve()\" color=\"secondary\">Archieve</ion-button>\r\n    <ion-button size=\"small\" (click)=\"deleteSelected()\" color=\"danger\">Delete</ion-button>\r\n    <ion-button (click)=\"getSelection = false\" color=\"dark\" fill=\"clear\">\r\n      <ion-icon src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </div>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./src/pages/messages/components/message/message.component.scss":
/*!**********************************************************************!*\
  !*** ./src/pages/messages/components/message/message.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .title-img {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-size: contain !important;\n  background-color: var(--ion-color-light-shade);\n  margin-right: 10px;\n  border: 1px solid var(--ion-color-light-shade);\n}\n:host .clear {\n  clear: both;\n}\n:host .content-wrapper {\n  height: 100%;\n}\n:host .content-wrapper .from-me,\n:host .content-wrapper .from-them {\n  position: relative;\n  border-radius: 1em;\n  margin: 10px 0;\n  overflow: hidden;\n}\n:host .content-wrapper .from-me .image,\n:host .content-wrapper .from-them .image {\n  width: 200px;\n  height: 200px;\n}\n:host .content-wrapper .from-me .image-group,\n:host .content-wrapper .from-them .image-group {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-auto-rows: auto;\n  grid-gap: 0.5rem;\n  padding: 10px 10px 5px;\n  border-top-left-radius: 1em;\n}\n:host .content-wrapper .from-me .image-group .image-group-image,\n:host .content-wrapper .from-them .image-group .image-group-image {\n  height: 100px;\n  width: 100px;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 1em;\n}\n:host .content-wrapper .from-me .text,\n:host .content-wrapper .from-them .text {\n  padding: 10px 20px;\n  margin: 0;\n}\n:host .content-wrapper .from-me .text ::ng-deep p,\n:host .content-wrapper .from-them .text ::ng-deep p {\n  margin: 0;\n}\n:host .content-wrapper .from-me .text ::ng-deep a,\n:host .content-wrapper .from-them .text ::ng-deep a {\n  color: var(--ion-color-primary);\n}\n:host .content-wrapper .from-me {\n  color: var(--ion-color-dark);\n  background: var(--ion-color-light-shade);\n  border-top-right-radius: 0px;\n  float: right;\n}\n:host .content-wrapper .from-them {\n  background: var(--ion-color-gradient);\n  border-top-left-radius: 0px;\n  color: var(--ion-color-light);\n  float: left;\n}\n:host ion-footer textarea {\n  padding: 5px 10px;\n  overflow: hidden;\n  height: 40px !important;\n  width: calc(100% - 20px);\n  border: 1px solid var(--ion-color-medium);\n  outline: none;\n  resize: none;\n  margin: 5px 10px 0px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9Eb2N1bWVudHMvc2luZW8yL3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvbWVzc2FnZXMvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvcGFnZXMvbWVzc2FnZXMvY29tcG9uZW50cy9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUNBQUE7RUFDQSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsOENBQUE7QUNBSjtBREVFO0VBQ0UsV0FBQTtBQ0FKO0FER0U7RUFDRSxZQUFBO0FDREo7QURHSTs7RUFFRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDRE47QURHTTs7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0FSO0FER007O0VBQ0UsYUFBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUNBUjtBREVROztFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7RUFDQSxrQkFBQTtBQ0NWO0FER007O0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDQVI7QURHVTs7RUFDRSxTQUFBO0FDQVo7QURHVTs7RUFDRSwrQkFBQTtBQ0FaO0FETUk7RUFDRSw0QkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0FDSk47QURPSTtFQUNFLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7QUNMTjtBRFVJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ1JOIiwiZmlsZSI6InNyYy9wYWdlcy9tZXNzYWdlcy9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAudGl0bGUtaW1nIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICB9XHJcbiAgLmNsZWFyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgLmZyb20tbWUsXHJcbiAgICAuZnJvbS10aGVtIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxZW07XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgLmltYWdlIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmltYWdlLWdyb3VwIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XHJcbiAgICAgICAgZ3JpZC1nYXA6IDAuNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFlbTtcclxuXHJcbiAgICAgICAgLmltYWdlLWdyb3VwLWltYWdlIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDFlbTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXh0IHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICA6Om5nLWRlZXAge1xyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZnJvbS1tZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XHJcbiAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAuZnJvbS10aGVtIHtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWdyYWRpZW50KTtcclxuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tZm9vdGVyIHtcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogNXB4IDEwcHggMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC50aXRsZS1pbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG46aG9zdCAuY2xlYXIge1xuICBjbGVhcjogYm90aDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLW1lLFxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS10aGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxZW07XG4gIG1hcmdpbjogMTBweCAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSAuaW1hZ2UsXG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLXRoZW0gLmltYWdlIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSAuaW1hZ2UtZ3JvdXAsXG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLXRoZW0gLmltYWdlLWdyb3VwIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gIGdyaWQtZ2FwOiAwLjVyZW07XG4gIHBhZGRpbmc6IDEwcHggMTBweCA1cHg7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDFlbTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tbWUgLmltYWdlLWdyb3VwIC5pbWFnZS1ncm91cC1pbWFnZSxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSAuaW1hZ2UtZ3JvdXAgLmltYWdlLWdyb3VwLWltYWdlIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgYm9yZGVyLXJhZGl1czogMWVtO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSAudGV4dCxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSAudGV4dCB7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgbWFyZ2luOiAwO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSAudGV4dCA6Om5nLWRlZXAgcCxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSAudGV4dCA6Om5nLWRlZXAgcCB7XG4gIG1hcmdpbjogMDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tbWUgLnRleHQgOjpuZy1kZWVwIGEsXG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mcm9tLXRoZW0gLnRleHQgOjpuZy1kZWVwIGEge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuZnJvbS1tZSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwcHg7XG4gIGZsb2F0OiByaWdodDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmZyb20tdGhlbSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1ncmFkaWVudCk7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGZsb2F0OiBsZWZ0O1xufVxuOmhvc3QgaW9uLWZvb3RlciB0ZXh0YXJlYSB7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgb3V0bGluZTogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICBtYXJnaW46IDVweCAxMHB4IDBweDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/pages/messages/components/message/message.component.ts":
/*!********************************************************************!*\
  !*** ./src/pages/messages/components/message/message.component.ts ***!
  \********************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_setting_services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/setting/services/setting/setting.service */ "./src/pages/setting/services/setting/setting.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_modals_gallery_picker_gallery_picker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/modals/gallery-picker/gallery-picker.component */ "./src/shared/modals/gallery-picker/gallery-picker.component.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var _models_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../models/message */ "./src/pages/messages/models/message.ts");
/* harmony import */ var _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");











//import translate, { setCORS } from "google-translate-api-browser";

//import { safeEval } from 'safe-eval';
/**
 * send messages between users. as a user, you can deactivate autoreply in setting page.
 * or remove autoreply method and all calls to it.
 * sending a message updates messages.message property with the latest message.
 * a function in firebase cloud functions checks every message update and sends a push notification to the device
 * check readme for info on cloud functions
 */
let MessageComponent = class MessageComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"] {
    constructor(injector, http, navParams, authService, commonService, firestoreService, messageService, settingService) {
        super(injector);
        this.injector = injector;
        this.http = http;
        this.navParams = navParams;
        this.authService = authService;
        this.commonService = commonService;
        this.firestoreService = firestoreService;
        this.messageService = messageService;
        this.settingService = settingService;
        this.chat = [];
        this.chatType = _models_message__WEBPACK_IMPORTED_MODULE_9__["CHAT_TYPES"];
        this.textMsg = '';
        this.images = [];
        this.translated = '';
        this.score = '4';
        this.noDataconfig = {
            content: { title: 'Its quite here', description: 'start a conversation' }
        };
        this.failPromise = (err) => {
            this.loading = false;
            this.sendLoading = false;
            this.toast(err);
        };
    }
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            this.currentUser = yield this.authService.getUser();
            this.subscriptions.push(this.messageService.getMessage(this.navParams.get('data')).subscribe((msg) => {
                this.message = msg;
                this.chat = this.message.messages;
                this.loading = false;
            }, (err) => {
                this.loading = false;
                this.toast(err);
            }));
        });
    }
    /*
    // or
    import translate, { setCORS } from "google-translate-api-browser";
    setCORS("http://cors-anywhere.herokuapp.com/");
    */
    /** scroll to bottom when view loads with messages */
    ngAfterContentChecked() {
        this.scrollToBottom();
    }
    /**
     * used in template to retrieve details of receiving user for the message
     * if currentUser's id doesn't match another user in list, get the other users data as a recipient
     */
    getSender(message) {
        return message ? message.participants.find((user) => user.uid !== this.currentUser.uid) : null;
    }
    /**
     * used in template to retrieve details of receiving user for the message
     * if currentUser's id match another user in list, get the other users data as a recipient
     */
    getRecipient(message) {
        return message ? message.participants.find((user) => user.uid === this.currentUser.uid) : null;
    }
    /** call sender user */
    call() {
        this.commonService.callUser(this.getSender(this.message).mobile || this.getSender(this.message).phone, this.callNumber);
    }
    /** on message press show options is action sheet */
    onMessageHold(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (data.uid === this.currentUser.uid) {
                const actionSheet = yield this.actionSheetCtrl.create({
                    header: 'Chat Options',
                    buttons: [
                        {
                            text: 'Delete',
                            role: 'Destructive',
                            handler: () => {
                                this.messageService
                                    .deleteChat(this.message, data)
                                    .then(() => this.scrollToBottom())
                                    .catch((err) => this.failPromise(err));
                            }
                        },
                        {
                            text: 'Close',
                            role: 'cancel',
                            handler: () => { }
                        }
                    ]
                });
                yield actionSheet.present();
            }
        });
    }
    /** send message, update uid property of message, this is needed to find the sender id and send notifications to recipients via firebase cloud functions */
    send(text, images = null) {
        const data = {
            images,
            value: text,
            type: this.chatType.TEXT,
            sendAt: Date.now(),
            uid: this.currentUser.uid
        };
        this.sendLoading = true;
        if (text) {
            this.messageService
                .send(Object.assign({}, this.message), data)
                .then(() => {
                this.textMsg = '';
                this.sendLoading = false;
                // this.autoReply(messages[this.getRandomInt(1, 50)]);
            })
                .catch((err) => this.failPromise(err));
        }
        //https://translate.googleapis.com/translate_a/single?client=gtx&sl=" + this.sl + "&tl=" + this.targetlan + "&hl=" + this.targetlan + "&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated
        this.translated = text;
        switch (this.score) {
            case '0':
                this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&hl=en&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
                    .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error));
                break;
            case '1':
                this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=fr&hl=en&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
                    .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error));
                break;
            case '2':
                this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=zh-CH&hl=zh-CH&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
                    .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error));
                break;
            default:
                this.http.get("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=fr&hl=fr&dt=at&dt=bd&dt=ex&dt=ld&dt=md&dt=qca&dt=rw&dt=rm&dt=ss&dt=t&ie=UTF-8&oe=UTF-8&otf=1&ssel=0&tsel=0&kc=7&q=" + this.translated)
                    .toPromise().then((tempval) => { this.translated = JSON.stringify(tempval[0][0][0]); }).catch((error) => console.log(error));
                break;
        }
        var tempsetinterval = setInterval(() => {
            if (this.translated !== text) {
                const data2 = {
                    images,
                    value: this.translated,
                    type: this.chatType.TEXT,
                    sendAt: Date.now(),
                    uid: this.currentUser.uid
                };
                this.sendLoading = true;
                if (text) {
                    this.messageService
                        .send(Object.assign({}, this.message), data2)
                        .then(() => {
                        this.textMsg = '';
                        this.sendLoading = false;
                        // this.autoReply(messages[this.getRandomInt(1, 50)]);
                    })
                        .catch((err) => this.failPromise(err));
                }
                this.translated = '';
                clearInterval(tempsetinterval);
            }
            ;
        }, 1);
    }
    translatorOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const asCtrl = yield this.actionSheetCtrl.create({
                header: 'language',
                buttons: [
                    {
                        text: 'English',
                        handler: () => {
                            this.score = '0';
                        }
                    },
                    {
                        text: 'French',
                        handler: () => {
                            this.score = '1';
                        }
                    },
                    {
                        text: '중국어',
                        handler: () => {
                            this.score = '2';
                        }
                    }
                ]
            });
            asCtrl.present();
        });
    }
    /** for browser input file on change, run this method to get base64 string of files
     * and open gallery modal with the images
     */
    detectFiles(event) {
        this.commonService.getImagesFromFiles(event).then((images) => {
            this.openGallery(images);
        });
    }
    /**
     * open action sheet with photo upload options, either from camera or library
     * and run getPictures method
     */
    sendPhoto() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Send Images',
                buttons: [
                    {
                        text: 'Use Camera',
                        handler: () => {
                            this.getPictures(1);
                        }
                    },
                    {
                        text: 'Use Library',
                        handler: () => {
                            this.getPictures(0, true);
                        }
                    },
                    {
                        text: 'Close',
                        role: 'cancel',
                        handler: () => { }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    /** auto reply to message */
    /* public autoReply(text: any, images = null) {
       if (this.settingService.setting.autoReply === true) {
         setTimeout(() => {
           const data: IChat = {
             images,
             value: text,
             type: this.chatType.TEXT,
             sendAt: Date.now(),
             uid: this.getSender(this.message).uid
           };
           this.loading = true;
           this.messageService
             .send({ ...this.message }, data)
             .then(() => (this.loading = false))
             .catch((err) => this.failPromise(err));
         }, 6000);
       }
     }*/
    /**
     * scroll to bottom of chat
     */
    scrollToBottom() {
        const element = document.getElementById('last-item');
        if (element) {
            element.scrollIntoView({
                behavior: 'auto',
                block: 'end',
                inline: 'nearest'
            });
        }
    }
    /**
     * get image using native camera plugin to retrieve from either camera or library of device
     * param type is a number that specifies whether to get from camera or from library
     * one image retrieved, upload to firebase storage. if error, display a toast with error message
     */
    getPictures(type, multiple = false) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let imageData = [];
            this.loading = true;
            if (window.cordova) {
                // if on device use native plugins
                imageData = yield this.commonService.getPictures(type, multiple);
                yield this.openGallery(imageData);
            }
            else {
                // if on device use browser file upload
                this.fileInputButton.nativeElement.click();
            }
        });
    }
    /** open gallery with image files, on dismiss modal, get images and upload them */
    openGallery(imageData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (imageData.length > 0) {
                const modal = yield this.openModal(src_shared_modals_gallery_picker_gallery_picker_component__WEBPACK_IMPORTED_MODULE_6__["GalleryPickerComponent"], imageData, 'custom-modal');
                yield modal.present();
                const { data } = yield modal.onDidDismiss();
                if (data.images && data.images.length > 0) {
                    this.uploadImage(data.text, data.images);
                }
                else {
                    this.toast(this.translate.instant('message.component.no-images-selected'));
                }
            }
            this.fileInputButton.nativeElement.value = null;
        });
    }
    /**
     * append base 64 string to image data, upload image data to firebase storage.
     * the upload function returns a download data which is then saved to images
     */
    uploadImage(text, imageData) {
        this.images = imageData;
        const read$ = [];
        this.images.forEach((i) => {
            read$.push(this.firestoreService.uploadImage(i, `${Date.now()}-${this.currentUser.uid}`, 'chat-images'));
        });
        Promise.all(read$)
            .then((res) => {
            this.images = res;
            this.send(text, this.images);
            this.loading = false;
        })
            .catch((err) => this.failPromise(err));
    }
};
MessageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"] },
    { type: _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_10__["MessagesService"] },
    { type: src_pages_setting_services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MessageComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('callNumber', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MessageComponent.prototype, "callNumber", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInputButton', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], MessageComponent.prototype, "fileInputButton", void 0);
MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: __webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/index.js!./src/pages/messages/components/message/message.component.html"),
        styles: [__webpack_require__(/*! ./message.component.scss */ "./src/pages/messages/components/message/message.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_7__["CommonService"],
        src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"],
        _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_10__["MessagesService"],
        src_pages_setting_services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"]])
], MessageComponent);



/***/ }),

/***/ "./src/pages/messages/components/messages/messages.component.scss":
/*!************************************************************************!*\
  !*** ./src/pages/messages/components/messages/messages.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content .content-wrapper .content-scroll {\n  padding: 0 20px;\n}\n:host ion-content .content-wrapper .content-scroll .messages {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 20px 0;\n}\n:host ion-content .content-wrapper .content-scroll .messages .image {\n  height: 60px;\n  width: 60px;\n  border-radius: 3px;\n  box-shadow: 1px 1px 12px var(--ion-color-light-shade);\n}\n:host ion-content .content-wrapper .content-scroll .messages .detail {\n  margin-left: 15px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host ion-content .content-wrapper .content-scroll .messages .detail .name {\n  font-weight: 500;\n  font-size: 16px;\n}\n:host ion-content .content-wrapper .content-scroll .messages .detail .msg {\n  font-size: 14px;\n  color: var(--ion-color-medium-shade);\n  white-space: nowrap;\n  width: 150px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n}\n:host ion-content .content-wrapper .content-scroll .messages .date {\n  width: 63px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  font-size: 10px;\n  color: var(--ion-color-medium-shade);\n  overflow: hidden;\n  white-space: nowrap;\n}\n:host ion-content .content-wrapper .content-scroll .messages .action {\n  margin-right: 15px;\n}\n:host ion-footer .buttons {\n  margin: 5px 0 5px 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host ion-footer .buttons ion-button {\n  width: 100%;\n}\n:host ion-footer .buttons ion-button.right {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9Eb2N1bWVudHMvc2luZW8yL3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvbWVzc2FnZXMvY29tcG9uZW50cy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9tZXNzYWdlcy9jb21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNO0VBQ0UsZUFBQTtBQ0ZSO0FESVE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsY0FBQTtBQ0ZWO0FESVU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7QUNGWjtBREtVO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNIWjtBREtZO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDSGQ7QURNWTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUNKZDtBRFFVO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNOWjtBRFFVO0VBQ0Usa0JBQUE7QUNOWjtBRGFJO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDWE47QURZTTtFQUNFLFdBQUE7QUNWUjtBRFdRO0VBQ0UsWUFBQTtBQ1RWIiwiZmlsZSI6InNyYy9wYWdlcy9tZXNzYWdlcy9jb21wb25lbnRzL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAuY29udGVudC1zY3JvbGwge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuXHJcbiAgICAgICAgLm1lc3NhZ2VzIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcblxyXG4gICAgICAgICAgLmltYWdlIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZGV0YWlsIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tc2cge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgd2lkdGg6IDYzcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmFjdGlvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgaW9uLWZvb3RlciB7XHJcbiAgICAuYnV0dG9ucyB7XHJcbiAgICAgIG1hcmdpbjogNXB4IDAgNXB4IDE1cHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICYucmlnaHQge1xyXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCB7XG4gIHBhZGRpbmc6IDAgMjBweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5tZXNzYWdlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuY29udGVudC1zY3JvbGwgLm1lc3NhZ2VzIC5pbWFnZSB7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCAubWVzc2FnZXMgLmRldGFpbCB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBmbGV4OiAxO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuY29udGVudC1zY3JvbGwgLm1lc3NhZ2VzIC5kZXRhaWwgLm5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE2cHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCAubWVzc2FnZXMgLmRldGFpbCAubXNnIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHdpZHRoOiAxNTBweDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCAubWVzc2FnZXMgLmRhdGUge1xuICB3aWR0aDogNjNweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCAubWVzc2FnZXMgLmFjdGlvbiB7XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbn1cbjpob3N0IGlvbi1mb290ZXIgLmJ1dHRvbnMge1xuICBtYXJnaW46IDVweCAwIDVweCAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgaW9uLWZvb3RlciAuYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBpb24tZm9vdGVyIC5idXR0b25zIGlvbi1idXR0b24ucmlnaHQge1xuICBmbG9hdDogcmlnaHQ7XG59Il19 */"

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








/*
 * view users messages, manage messages.
 */
let MessagesComponent = class MessagesComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"] {
    constructor(injector, authService, messageService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.messageService = messageService;
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
            this.currentUser = yield this.authService.getUser();
            const queryObservable = this.view$.pipe(Object(rxjs_internal_operators_switchMap__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((view) => this.messageService.getMessages(this.currentUser.uid, view)));
            this.subscriptions.push(queryObservable.subscribe((queryItems) => {
                this.messages = this.allMessages = queryItems;
            }));
            this.view$.next(false);
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
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"] }
];
MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-messages',
        template: __webpack_require__(/*! raw-loader!./messages.component.html */ "./node_modules/raw-loader/index.js!./src/pages/messages/components/messages/messages.component.html"),
        styles: [__webpack_require__(/*! ./messages.component.scss */ "./src/pages/messages/components/messages/messages.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_messages_messages_service__WEBPACK_IMPORTED_MODULE_6__["MessagesService"]])
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



/***/ }),

/***/ "./src/pages/messages/models/message.ts":
/*!**********************************************!*\
  !*** ./src/pages/messages/models/message.ts ***!
  \**********************************************/
/*! exports provided: CHAT_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHAT_TYPES", function() { return CHAT_TYPES; });
var CHAT_TYPES;
(function (CHAT_TYPES) {
    CHAT_TYPES[CHAT_TYPES["TEXT"] = 0] = "TEXT";
    CHAT_TYPES[CHAT_TYPES["AUDIO"] = 1] = "AUDIO";
    CHAT_TYPES[CHAT_TYPES["IMAGE"] = 2] = "IMAGE";
    CHAT_TYPES[CHAT_TYPES["IMAGE_GROUP"] = 3] = "IMAGE_GROUP";
})(CHAT_TYPES || (CHAT_TYPES = {}));


/***/ }),

/***/ "./src/pages/messages/services/messages/messages.service.ts":
/*!******************************************************************!*\
  !*** ./src/pages/messages/services/messages/messages.service.ts ***!
  \******************************************************************/
/*! exports provided: MessagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesService", function() { return MessagesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");








/**
 * crud methods to interact with firebase cloud store regarding messaging
 */
let MessagesService = class MessagesService extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__["Extender"] {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
    }
    /** get messages that contain the users uid in participantsId property, check if message is flagged as archived
     * for each message get messages recipient and get their details from users collection. return data
     */
    getMessages(uid, archieved = false) {
        return this.firestoreService
            .colWithIds$('messages', (ref) => ref.where('participantsId', 'array-contains', uid).where('isArchieved', '==', archieved))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((data) => {
            const reads$ = [];
            if (data.length > 0) {
                data.forEach((msg) => {
                    reads$.push(this.getMessage(msg.id));
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(reads$);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
            return data;
        }));
    }
    /** get message and their participants information */
    getMessage(id) {
        let data;
        const reads$ = [];
        return this.firestoreService.doc$(`messages/${id}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((msg) => {
            data = msg;
            msg.participantsId.forEach((i) => {
                reads$.push(this.firestoreService.doc$(`users/${i}`));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(reads$);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((joins) => {
            return Object.assign({}, data, { participants: joins });
        }));
    }
    /** update message */
    updateMessage(message) {
        return this.firestoreService.update(`messages/${message.id}`, message);
    }
    /** delete message */
    deleteMessage(message) {
        return this.firestoreService.delete(`messages/${message.id}`);
    }
    /** delete collection of messages */
    deleteAllMessages(batch) {
        return this.firestoreService.deleteCollection(`messages`, batch);
    }
    /** start chat with a user by first checking if a message already exists with the users id,
     * if no message exists, create one,
     * if message exists, navigate to chat modal
     */
    startChat(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let myaccount = yield this.authService.getUser();
            this.firestoreService
                .colWithIds$('messages', (ref) => ref.where('participantsId', 'array-contains', user.uid))
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => {
                let temp = [];
                data.forEach((element) => {
                    element.participantsId.forEach((part) => {
                        if (part == myaccount.uid) {
                            temp.push(element);
                        }
                    });
                });
                return temp;
            }))
                .subscribe((data) => {
                const message = data[0];
                if (!!message) {
                    this.goto(`${this.routes.messages}/${message.id}`);
                }
                else {
                    this.createMessage(user);
                }
            });
        });
    }
    /** delete a message in chat */
    deleteChat(message, data) {
        return this.firestoreService.update(`messages/${message.id}`, {
            messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove(data)
        });
    }
    /** send a message */
    send(message, data) {
        delete message.participants;
        return this.firestoreService.update(`messages/${message.id}`, Object.assign({}, message, { messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(data) }));
    }
    /** create a message with participants and default messages property to empty array */
    createMessage(user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            this.firestoreService.add('messages', {
                participantsId: [user.uid, uid],
                messages: [],
                isArchieved: false
            });
        });
    }
};
MessagesService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] }
];
MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"]])
], MessagesService);



/***/ })

}]);
//# sourceMappingURL=pages-messages-messages-module-es2015.js.map