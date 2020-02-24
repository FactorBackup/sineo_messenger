(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setting-setting-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/setting/components/setting/setting.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/setting/components/setting/setting.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button size=\"small\"\r\n      autoHide=\"true\"></ion-menu-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\"\r\n  scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{'setting-component.title' | translate}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\"\r\n      *ngIf=\"currentUser\">\r\n      <div class=\"content-scroll\">\r\n\r\n        <app-accordion #accordion>\r\n          <app-panel *ngFor=\"let settingOption of settingOptions\"\r\n            [open]=\"settingOption.open\"\r\n            title=\"{{ settingOption.title }}\"\r\n            color=\"dark\">\r\n            <app-simple-item *ngFor=\"let item of settingOption.items\"\r\n              (click)=\"!item.checkbox ? item.event(setting) : null\">\r\n              <div class=\"img\"\r\n                prefix\r\n                [image-loader]=\"item.icon\"></div>\r\n              <strong>{{ item.text }}</strong>\r\n              <p>{{item.description}}</p>\r\n\r\n              <ion-icon *ngIf=\"item.checkbox\"\r\n                suffix\r\n                [src]=\"item.selected ? 'assets/icons/check-square.svg' : 'assets/icons/square.svg'\"\r\n                color=\"primary\"\r\n                (click)=\"item.selected = !item.selected; item.event(item.selected)\">\r\n              </ion-icon>\r\n            </app-simple-item>\r\n          </app-panel>\r\n        </app-accordion>\r\n\r\n        <ion-button expand=\"block\"\r\n          shape=\"round\"\r\n          (click)=\"save()\">\r\n          {{'setting-component.save-button' | translate}}\r\n        </ion-button>\r\n\r\n        <ion-button expand=\"block\"\r\n          shape=\"round\"\r\n          color=\"danger\"\r\n          (click)=\"signOut()\">\r\n          {{'setting-component.logout-button' | translate}}\r\n        </ion-button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/pages/setting/components/setting/setting.component.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/setting/components/setting/setting.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 90px) !important;\n  width: 100%;\n  padding: 0 15px;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel ::ng-deep .title {\n  padding: 10px 0;\n  font-size: 18px;\n  font-weight: 500;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item {\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 10px 0;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item .img {\n  width: 20px;\n  max-width: 20px;\n  margin: 0 10px;\n  height: 20px;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item ion-icon {\n  padding: 0 10px;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item strong {\n  font-size: 14px;\n}\n:host .content-wrapper .wrapper .content-scroll app-panel app-simple-item p {\n  margin: 0;\n  font-size: 11px;\n  color: var(--ion-color-medium);\n}\n:host .content-wrapper .wrapper .content-scroll ion-button {\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvcGFnZXMvc2V0dGluZy9jb21wb25lbnRzL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9zZXR0aW5nL2NvbXBvbmVudHMvc2V0dGluZy9zZXR0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0ROO0FER007RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRFI7QURJWTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNGZDtBRE1VO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGNBQUE7QUNKWjtBRE1ZO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0pkO0FET1k7RUFDRSxlQUFBO0FDTGQ7QURRWTtFQUNFLGVBQUE7QUNOZDtBRFFZO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtBQ05kO0FEVVE7RUFDRSxjQUFBO0FDUlYiLCJmaWxlIjoic3JjL3BhZ2VzL3NldHRpbmcvY29tcG9uZW50cy9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgIC5jb250ZW50LXNjcm9sbCB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5MHB4KSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICBhcHAtcGFuZWwge1xyXG4gICAgICAgICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhcHAtc2ltcGxlLWl0ZW0ge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuXHJcbiAgICAgICAgICAgIC5pbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIGFwcC1wYW5lbCA6Om5nLWRlZXAgLnRpdGxlIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCBhcHAtcGFuZWwgYXBwLXNpbXBsZS1pdGVtIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCBhcHAtcGFuZWwgYXBwLXNpbXBsZS1pdGVtIC5pbWcge1xuICB3aWR0aDogMjBweDtcbiAgbWF4LXdpZHRoOiAyMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgYXBwLXBhbmVsIGFwcC1zaW1wbGUtaXRlbSBpb24taWNvbiB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIGFwcC1wYW5lbCBhcHAtc2ltcGxlLWl0ZW0gc3Ryb25nIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgYXBwLXBhbmVsIGFwcC1zaW1wbGUtaXRlbSBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIGlvbi1idXR0b24ge1xuICBtYXJnaW46IDEwcHggMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/setting/components/setting/setting.component.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/setting/components/setting/setting.component.ts ***!
  \*******************************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/setting/setting.service */ "./src/pages/setting/services/setting/setting.service.ts");





/**
 * manage users preferences
 */
let SettingComponent = class SettingComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, authService, settingService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.settingService = settingService;
    }
    /** get settings and setting options from settings service. set uid to current user id.
     *  this is necessary if no settings has been saved previously
     */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
            this.subscriptions.push(this.settingService.getUserSettings(this.currentUser.uid).subscribe((data) => {
                this.setting = data;
                this.setting.uid = this.currentUser.uid;
            }));
            this.subscriptions.push(this.settingService.settingsOptions.subscribe((data) => (this.settingOptions = data)));
        });
    }
    /** save or update user preferences  */
    save() {
        this.settingService.upsertPreferences(this.settingService.setting);
    }
    /** logout and return to welcome or auth screen */
    signOut() {
        const { hideWalkthrough } = this.setting;
        this.authService.signOut().then(() => {
            if (hideWalkthrough) {
                this.goto(this.routes.auth);
            }
            else {
                this.goto(this.routes.welcome);
            }
        });
    }
};
SettingComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] }
];
SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-setting',
        template: __webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/index.js!./src/pages/setting/components/setting/setting.component.html"),
        styles: [__webpack_require__(/*! ./setting.component.scss */ "./src/pages/setting/components/setting/setting.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"]])
], SettingComponent);



/***/ }),

/***/ "./src/pages/setting/setting.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/setting/setting.module.ts ***!
  \*********************************************/
/*! exports provided: SettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/setting/setting.component */ "./src/pages/setting/components/setting/setting.component.ts");






let SettingModule = class SettingModule {
};
SettingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__["SettingComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__["SettingComponent"]
                }
            ])
        ]
    })
], SettingModule);



/***/ })

}]);
//# sourceMappingURL=pages-setting-setting-module-es2015.js.map