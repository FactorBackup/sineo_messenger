(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-groups-new-groups-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/new-groups/new-groups.page.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/new-groups/new-groups.page.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- /*\n* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)\n* Copyright  @2020-present. All right reserved.\n* Author By Abubakar Pagas\n*/ -->\n\n\n\n\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>New Gruops</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button class=\"done\" [disabled]=\"!groupForm.valid  || groupMembers.length <= 1\" (click)=\"done()\">\n        Done\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <!-- Set Group Image -->\n  <div class=\"profile\">\n    <img src=\"{{group.img}}\" *ngIf=\"group.img != ''\" (click)=\"setGroupPhoto()\" />\n    <img src=\"assets/profile.png\" *ngIf=\"group.img == ''\n    \" (click)=\"setGroupPhoto()\" />\n  </div>\n  <!-- Group Form -->\n\n  <div class=\"form\">\n    <form [formGroup]=\"groupForm\">\n      <ion-list>\n        <ion-item lines=\"none\">\n          <ion-label>Group *</ion-label>\n          <ion-input type=\"text\" formControlName=\"name\" placeholder=\"Name of Group\" name=\"name\">\n          </ion-input>\n        </ion-item>\n        <!-- for displaying the erroe massage -->\n        <div class=\"error-messages\">\n          <ng-container *ngFor=\"let error of error_messages.name\">\n            <div class=\"error-message\"\n              *ngIf=\"groupForm.get('name').hasError(error.type) && (groupForm.get('name').dirty || groupForm.get('name').touched)\">\n              {{ error.message }}\n            </div>\n          </ng-container>\n        </div>\n        <ion-item lines=\"none\">\n          <ion-label>Description *</ion-label>\n          <ion-textarea row=\"2\" name=\"description\" formControlName=\"description\" placeholder=\"Describe this Group\">\n          </ion-textarea>\n        </ion-item>\n        <!-- for displaying the erroe massage -->\n        <div class=\"error-messages\">\n          <ng-container *ngFor=\"let error of error_messages.description\">\n            <div class=\"error-message\"\n              *ngIf=\"groupForm.get('description').hasError(error.type) && (groupForm.get('description').dirty || groupForm.get('description').touched)\">\n              {{ error.message }}\n            </div>\n          </ng-container>\n        </div>\n        <!-- Members -->\n        <ion-item lines=\"none\" *ngIf=\"groupMembers\">\n          <ion-label class=\"ion-text-center\">Group Members ({{groupMembers.length}})</ion-label>\n        </ion-item>\n        <div class=\"thumnails\" *ngIf=\"groupMembers\">\n          <div class=\"list-thumbnail\">\n            <div class=\"img-thumb\" *ngFor=\"let member of groupMembers\" (click)=\"removeFromGroup(member)\">\n              <ion-avatar>\n                <img [src]=\"member.img\" />\n              </ion-avatar>\n            </div>\n          </div>\n        </div>\n      </ion-list>\n    </form>\n    <!-- No friends to create a group. -->\n    <div class=\"empty\" *ngIf=\"friends && friends.length == 0\">\n      <p>You have no friends right now to start a group conversation.</p>\n      <ion-button (click)=\"searchPeople()\"> Search people\n        <ion-icon slot=\"start\" name=\"search\"></ion-icon>\n      </ion-button>\n    </div>\n    <!-- Show friends to add/remove to group. -->\n    <ion-list no-line class=\"avatar-list\">\n      <div *ngIf=\"friends && friends.length > 0\">\n        <ion-item *ngFor=\"let friend of friends\">\n          <ion-avatar slot=\"start\">\n            <img src=\"{{friend.img}}\">\n            <div class=\"online\" *ngIf=\"friend.status == 'Online'\"></div>\n          </ion-avatar>\n          <ion-col>\n            <ion-label class=\"ion-text-wrap\">\n              <ion-text>\n                <h2>{{friend.username}} </h2>\n                <ion-label class=\"p\">{{friend.description}}</ion-label>\n              </ion-text>\n            </ion-label>\n          </ion-col>\n          <ion-button size=\"small\" fill=\"outline\" slot=\"end\" (click)=\"addToGroup(friend); $event.stopPropagation();\"\n            *ngIf=\"!inGroup(friend)\">\n            add\n          </ion-button>\n          <ion-button size=\"small\" fill=\"outline\" slot=\"end\"\n            (click)=\"removeFromGroup(friend); $event.stopPropagation();\" *ngIf=\"inGroup(friend)\">\n            cancel\n          </ion-button>\n        </ion-item>\n      </div>\n    </ion-list>\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/pages/new-groups/new-groups.module.ts":
/*!***************************************************!*\
  !*** ./src/pages/new-groups/new-groups.module.ts ***!
  \***************************************************/
/*! exports provided: NewGroupsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGroupsPageModule", function() { return NewGroupsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _new_groups_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-groups.page */ "./src/pages/new-groups/new-groups.page.ts");
/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/







var routes = [
    {
        path: '',
        component: _new_groups_page__WEBPACK_IMPORTED_MODULE_6__["NewGroupsPage"]
    }
];
var NewGroupsPageModule = /** @class */ (function () {
    function NewGroupsPageModule() {
    }
    NewGroupsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_new_groups_page__WEBPACK_IMPORTED_MODULE_6__["NewGroupsPage"]]
        })
    ], NewGroupsPageModule);
    return NewGroupsPageModule;
}());



/***/ }),

/***/ "./src/pages/new-groups/new-groups.page.scss":
/*!***************************************************!*\
  !*** ./src/pages/new-groups/new-groups.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\r\n* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)\r\n* Copyright  @2020-present. All right reserved.\r\n* Author By Abubakar Pagas\r\n*/\nion-title {\n  font-size: medium;\n  font-family: Georgia, \"Times New Roman\", Times, serif;\n  text-align: center; }\nion-button {\n  text-transform: capitalize; }\nion-button.done {\n  font-size: small; }\n.profile {\n  position: relative;\n  overflow: hidden;\n  height: 150px;\n  width: auto; }\n.profile img {\n    height: 100%;\n    border-radius: 100%;\n    position: absolute;\n    width: 150px;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    border: 2px solid #969696; }\n.form ion-list {\n  padding: 0;\n  margin: 0 0 0.75em; }\n.form ion-list ion-item {\n    background: transparent;\n    color: var(--ion-color-primary); }\nimg {\n  border: 2px solid #c4c9d2; }\n.error-messages {\n  font-size: 0.7em;\n  color: #dd4b39;\n  text-align: center; }\n.p {\n  color: #afa1a1;\n  font-family: auto; }\n.camera {\n  position: absolute;\n  left: 210px;\n  top: 76%;\n  width: 55px;\n  size: -2px;\n  font-size: 28px; }\n.online {\n  position: absolute;\n  left: 48px;\n  top: 58%;\n  width: 10px;\n  background: #92ff92;\n  height: 10px;\n  border-radius: 50%; }\n.thumnails {\n  overflow-x: scroll;\n  overflow-y: hidden; }\n.thumnails .list-thumbnail {\n    height: 100%;\n    white-space: nowrap; }\n.thumnails .list-thumbnail .img-thumb {\n      display: inline-block;\n      border-radius: 4px;\n      width: 50px;\n      margin: 0 2px 0 0;\n      line-height: 60px; }\n::-webkit-scrollbar {\n  display: none; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvbmV3LWdyb3Vwcy9uZXctZ3JvdXBzLnBhZ2Uuc2NzcyIsInNyYy9wYWdlcy9uZXctZ3JvdXBzL25ldy1ncm91cHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0NDSUM7QURJRDtFQUNFLGlCQUFpQjtFQUNqQixxREFBcUQ7RUFDckQsa0JBQWtCLEVBQUE7QUFFcEI7RUFDRSwwQkFBMEIsRUFBQTtBQUU1QjtFQUNFLGdCQUFnQixFQUFBO0FBR2xCO0VBQ0Usa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsV0FBVyxFQUFBO0FBSmI7SUFNSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWix5QkFBeUIsRUFBQTtBQUk3QjtFQUNFLFVBQVU7RUFDVixrQkFBa0IsRUFBQTtBQUZwQjtJQUtJLHVCQUF1QjtJQUN2QiwrQkFBK0IsRUFBQTtBQUduQztFQUNFLHlCQUF5QixFQUFBO0FBRTNCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTtBQUVwQjtFQUNFLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTtBQUVuQjtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsUUFBUTtFQUNSLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZSxFQUFBO0FBRWpCO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixRQUFRO0VBQ1IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCLEVBQUE7QUFFcEI7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7QUFGcEI7SUFJSSxZQUFZO0lBQ1osbUJBQW1CLEVBQUE7QUFMdkI7TUFPTSxxQkFBcUI7TUFDckIsa0JBQWtCO01BQ2xCLFdBQVc7TUFDWCxpQkFBaUI7TUFDakIsaUJBQWlCLEVBQUE7QUFJdkI7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL3BhZ2VzL25ldy1ncm91cHMvbmV3LWdyb3Vwcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4qIFNvY2lhbCBjaGF0IGluIElvbmljIDQgY2hhdCBhcHBsaWNhdGlvbiAgKGh0dHBzOi8vZ2l0aHViLmNvbS9oYWJ1cGFnYXMvZmFjZWJvb2stY2xvbmUtaW9uaWM0KVxyXG4qIENvcHlyaWdodCAgQDIwMjAtcHJlc2VudC4gQWxsIHJpZ2h0IHJlc2VydmVkLlxyXG4qIEF1dGhvciBCeSBBYnViYWthciBQYWdhc1xyXG4qL1xyXG5cclxuXHJcblxyXG5pb24tdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gIGZvbnQtZmFtaWx5OiBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBUaW1lcywgc2VyaWY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbmlvbi1idXR0b24uZG9uZSB7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxufVxyXG5cclxuLnByb2ZpbGUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGhlaWdodDogMTUwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjOTY5Njk2O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0gaW9uLWxpc3Qge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMC43NWVtO1xyXG5cclxuICBpb24taXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgfVxyXG59XHJcbmltZyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2M0YzlkMjtcclxufVxyXG4uZXJyb3ItbWVzc2FnZXMge1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgY29sb3I6ICNkZDRiMzk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wIHtcclxuICBjb2xvcjogI2FmYTFhMTtcclxuICBmb250LWZhbWlseTogYXV0bztcclxufVxyXG4uY2FtZXJhIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjEwcHg7XHJcbiAgdG9wOiA3NiU7XHJcbiAgd2lkdGg6IDU1cHg7XHJcbiAgc2l6ZTogLTJweDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbn1cclxuLm9ubGluZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDQ4cHg7XHJcbiAgdG9wOiA1OCU7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogIzkyZmY5MjtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi50aHVtbmFpbHMge1xyXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgLmxpc3QtdGh1bWJuYWlsIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAuaW1nLXRodW1iIHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBtYXJnaW46IDAgMnB4IDAgMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuIiwiLypcclxuKiBTb2NpYWwgY2hhdCBpbiBJb25pYyA0IGNoYXQgYXBwbGljYXRpb24gIChodHRwczovL2dpdGh1Yi5jb20vaGFidXBhZ2FzL2ZhY2Vib29rLWNsb25lLWlvbmljNClcclxuKiBDb3B5cmlnaHQgIEAyMDIwLXByZXNlbnQuIEFsbCByaWdodCByZXNlcnZlZC5cclxuKiBBdXRob3IgQnkgQWJ1YmFrYXIgUGFnYXNcclxuKi9cbmlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogbWVkaXVtO1xuICBmb250LWZhbWlseTogR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiwgVGltZXMsIHNlcmlmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuaW9uLWJ1dHRvbiB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplOyB9XG5cbmlvbi1idXR0b24uZG9uZSB7XG4gIGZvbnQtc2l6ZTogc21hbGw7IH1cblxuLnByb2ZpbGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiBhdXRvOyB9XG4gIC5wcm9maWxlIGltZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM5Njk2OTY7IH1cblxuLmZvcm0gaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDAgMCAwLjc1ZW07IH1cbiAgLmZvcm0gaW9uLWxpc3QgaW9uLWl0ZW0ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7IH1cblxuaW1nIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2M0YzlkMjsgfVxuXG4uZXJyb3ItbWVzc2FnZXMge1xuICBmb250LXNpemU6IDAuN2VtO1xuICBjb2xvcjogI2RkNGIzOTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5wIHtcbiAgY29sb3I6ICNhZmExYTE7XG4gIGZvbnQtZmFtaWx5OiBhdXRvOyB9XG5cbi5jYW1lcmEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDIxMHB4O1xuICB0b3A6IDc2JTtcbiAgd2lkdGg6IDU1cHg7XG4gIHNpemU6IC0ycHg7XG4gIGZvbnQtc2l6ZTogMjhweDsgfVxuXG4ub25saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0OHB4O1xuICB0b3A6IDU4JTtcbiAgd2lkdGg6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM5MmZmOTI7XG4gIGhlaWdodDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlOyB9XG5cbi50aHVtbmFpbHMge1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxuICAudGh1bW5haWxzIC5saXN0LXRodW1ibmFpbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAudGh1bW5haWxzIC5saXN0LXRodW1ibmFpbCAuaW1nLXRodW1iIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgbWFyZ2luOiAwIDJweCAwIDA7XG4gICAgICBsaW5lLWhlaWdodDogNjBweDsgfVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTsgfVxuIl19 */"

/***/ }),

/***/ "./src/pages/new-groups/new-groups.page.ts":
/*!*************************************************!*\
  !*** ./src/pages/new-groups/new-groups.page.ts ***!
  \*************************************************/
/*! exports provided: NewGroupsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewGroupsPage", function() { return NewGroupsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/loading.service */ "./src/services/loading.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/image.service */ "./src/services/image.service.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data.service */ "./src/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _animation_toast_toast_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../animation/toast/toast.module */ "./src/animation/toast/toast.module.ts");
/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/












var NewGroupsPage = /** @class */ (function () {
    function NewGroupsPage(dataServices, formBuilder, camera, router, toast, navCtrl, imageService, angularDb, loading, actionSheetController) {
        this.dataServices = dataServices;
        this.formBuilder = formBuilder;
        this.camera = camera;
        this.router = router;
        this.toast = toast;
        this.navCtrl = navCtrl;
        this.imageService = imageService;
        this.angularDb = angularDb;
        this.loading = loading;
        this.actionSheetController = actionSheetController;
        this.error_messages = {
            'name': [
                { type: 'required', message: ' Group name is required.' },
                { type: 'minLength', message: ' Group name length must be longer or equal to 3 character.' },
                { type: 'maxLength', message: 'Group name length must be lower or equal to 50 character.' },
                { type: 'pattern', message: 'Please enter a valid group name' }
            ],
            'description': [
                { type: 'required', message: 'description is required.' },
                { type: 'minLength', message: 'description length must be longer or equal to 6 character.' },
                { type: 'maxLength', message: 'description length must be lower or equal to 30 character.' },
                { type: 'pattern', message: 'Please enter a valid description' }
            ],
        };
        this.groupPhotoOptionCamera = {
            quality: 100,
            targetHeight: 530,
            targetWidth: 530,
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
        };
        this.groupPhotoOptionGallery = {
            quality: 100,
            targetHeight: 530,
            targetWidth: 530,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
        };
        // for ali erroe side 
        this.groupForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(3),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(30),
            ])),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(1),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(30),
            ])),
        });
    }
    NewGroupsPage.prototype.ngOnInit = function () {
        var _this = this;
        // Initialize
        this.group = {
            img: ''
        };
        this.searchFriend = '';
        // Get the user's friend to add to the group
        this.dataServices.getCurrentUser(firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid).valueChanges().subscribe(function (account) {
            if (!_this.groupMembers) {
                _this.groupMembers = [account];
            }
            if (account.friends) {
                for (var i = 0; i < account.friends.length; i++) {
                    _this.dataServices.getUser(account.friends[i]).valueChanges().subscribe(function (friend) {
                        _this.addOrUpdateFriend(friend);
                    });
                }
            }
            else {
                _this.friends = [];
            }
        });
    };
    //Process with group creation
    NewGroupsPage.prototype.done = function () {
        var _this = this;
        this.loading.show();
        var messages = [];
        //add system message that group is created
        messages.push({
            date: new Date().toString(),
            userId: firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid,
            type: 'system',
            message: 'This group has been created.',
            icon: 'chatbubbles'
        });
        // Add members of the group
        var members = [];
        for (var i = 0; i < this.groupMembers.length; i++) {
            members.push(this.groupMembers[i].userId);
        }
        //Add group information and date
        this.group.dateCreated = new Date().toString(),
            this.group.messages = messages;
        this.group.members = members;
        this.group.name = this.groupForm.value["name"];
        this.group.description = this.groupForm.value["description"];
        this.group.admin = [firebase__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.uid];
        // Lets add to firebase database
        this.angularDb.list('/groups/').push(this.group).then(function (success) {
            var groupId = success.key;
            //update the key
            success.update({
                key: groupId
            });
            //add group referenceuser to user;
            _this.angularDb.object('/accounts/' + _this.groupMembers[0].userId + '/groups/' + groupId).update({
                messagesRead: 1,
                key: groupId
            });
            for (var i = 0; i < _this.groupMembers.length; i++) {
                _this.angularDb.object('/accounts/' + _this.groupMembers[i].userId + '/groups/' + groupId).update({
                    messagesRead: 0,
                    key: groupId
                });
            }
        }).then(function () {
            _this.showToast('Your groups has been created');
            _this.navCtrl.pop();
        });
    };
    // Check if friend is already added to the group or not.
    NewGroupsPage.prototype.inGroup = function (friend) {
        for (var i = 0; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].userId == friend.userId) {
                return true;
            }
        }
        return false;
    };
    //Add or update friend data fro real-time sync.
    NewGroupsPage.prototype.addOrUpdateFriend = function (friend) {
        if (!this.friends) {
            this.friends = [friend];
        }
        else {
            var index = -1;
            for (var i = 0; i < this.friends.length; i++) {
                if (this.friends[i].userId == friend.userId) {
                    index = i;
                }
            }
            if (index > -1) {
                this.friends[index] = friend;
            }
            else {
                this.friends.push(friend);
            }
        }
    };
    //Add friend to member of groups
    NewGroupsPage.prototype.addToGroup = function (friend) {
        this.groupMembers.push(friend);
    };
    // Remove friend from members of group.
    NewGroupsPage.prototype.removeFromGroup = function (friend) {
        var index = -1;
        for (var i = 1; i < this.groupMembers.length; i++) {
            if (this.groupMembers[i].userId == friend.userId) {
                index = i;
            }
        }
        if (index > -1) {
            this.groupMembers.splice(index, 1);
        }
    };
    // action sheet for setPhoto image
    NewGroupsPage.prototype.setGroupPhoto = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetController.create({
                            header: 'Select Profile Picture',
                            buttons: [
                                {
                                    text: 'Camera',
                                    icon: 'camera',
                                    handler: function () {
                                        _this.imageService.setGroupPhoto(_this.group, _this.camera.PictureSourceType.CAMERA);
                                    }
                                },
                                {
                                    text: 'Gallery',
                                    icon: 'images',
                                    handler: function () {
                                        _this.imageService.setGroupPhoto(_this.group, _this.camera.PictureSourceType.PHOTOLIBRARY);
                                    }
                                }, {
                                    text: 'Cancel',
                                    icon: 'close',
                                    role: 'cancel',
                                    handler: function () {
                                    }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        return [4 /*yield*/, actionSheet.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // set the image to group photo 
    NewGroupsPage.prototype.setImageCamera = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.camera.getPicture(_this.groupPhotoOptionCamera).then(function (url) {
                _this.group = "data:image/jpeg;base64," + url;
                resolve(true);
            });
        });
    };
    NewGroupsPage.prototype.setImageGallery = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.camera.getPicture(_this.groupPhotoOptionGallery).then(function (url) {
                _this.group = "data:image/jpeg;base64," + url;
                resolve(true);
            });
        });
    };
    NewGroupsPage.prototype.showToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toastPresent;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: message,
                            duration: 300,
                            enterAnimation: _animation_toast_toast_module__WEBPACK_IMPORTED_MODULE_11__["toastEnter"],
                            showCloseButton: true,
                            position: 'top'
                        })];
                    case 1:
                        toastPresent = _a.sent();
                        toastPresent.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewGroupsPage.prototype.searchPeople = function () {
        this.router.navigateByUrl('/search');
    };
    NewGroupsPage.ctorParameters = function () { return [
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
        { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
        { type: _services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"] },
        { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"] },
        { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] }
    ]; };
    NewGroupsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["Component"])({
            selector: 'app-new-groups',
            template: __webpack_require__(/*! raw-loader!./new-groups.page.html */ "./node_modules/raw-loader/index.js!./src/pages/new-groups/new-groups.page.html"),
            styles: [__webpack_require__(/*! ./new-groups.page.scss */ "./src/pages/new-groups/new-groups.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_7__["Camera"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"],
            _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabase"],
            _services_loading_service__WEBPACK_IMPORTED_MODULE_2__["LoadingService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"]])
    ], NewGroupsPage);
    return NewGroupsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-new-groups-new-groups-module-es5.js.map