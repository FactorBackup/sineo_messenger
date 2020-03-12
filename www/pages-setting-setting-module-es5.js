(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-setting-setting-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/setting/components/setting/setting.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/setting/components/setting/setting.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button size=\"small\"\r\n      autoHide=\"true\"></ion-menu-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\"\r\n  scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{'setting-component.title' | translate}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\"\r\n      *ngIf=\"currentUser\">\r\n      <div class=\"content-scroll\">\r\n\r\n        <app-accordion #accordion>\r\n          <app-panel *ngFor=\"let settingOption of settingOptions\"\r\n            [open]=\"settingOption.open\"\r\n            title=\"{{ settingOption.title }}\"\r\n            color=\"dark\">\r\n            <app-simple-item *ngFor=\"let item of settingOption.items\"\r\n              (click)=\"!item.checkbox ? item.event(setting) : null\">\r\n              <div class=\"img\"\r\n                prefix\r\n                [image-loader]=\"item.icon\"></div>\r\n              <strong>{{ item.text }}</strong>\r\n              <p>{{item.description}}</p>\r\n\r\n              <ion-icon *ngIf=\"item.checkbox\"\r\n                suffix\r\n                [src]=\"item.selected ? 'assets/icons/check-square.svg' : 'assets/icons/square.svg'\"\r\n                color=\"primary\"\r\n                (click)=\"item.selected = !item.selected; item.event(item.selected)\">\r\n              </ion-icon>\r\n            </app-simple-item>\r\n          </app-panel>\r\n        </app-accordion>\r\n\r\n        <ion-button expand=\"block\"\r\n          shape=\"round\"\r\n          (click)=\"save()\">\r\n          {{'setting-component.save-button' | translate}}\r\n        </ion-button>\r\n\r\n        <ion-button expand=\"block\"\r\n          shape=\"round\"\r\n          color=\"danger\"\r\n          (click)=\"signOut()\">\r\n          {{'setting-component.logout-button' | translate}}\r\n        </ion-button>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  \r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"schedule\" (click)=\"goto(routes.dashboard)\">\r\n      <ion-icon src=\"../../../../assets/icons/calendar.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.dashboard' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n    \r\n    <ion-tab-button tab=\"news\" (click)=\"goto(routes.feed)\">\r\n      <ion-icon src=\"../../../../assets/icons/rss.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.news' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"people\" (click)=\"goto(routes.people)\">\r\n      <ion-icon src=\"../../../../assets/icons/users.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.people' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\" (click)=\"goto(routes.messages)\">\r\n      <ion-icon src=\"../../../../assets/icons/message-square.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.chat' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\" (click)=\"goto(routes.setting)\">\r\n      <ion-icon src=\"../../../../assets/icons/settings.svg\" ></ion-icon>\r\n      <ion-label>{{ 'page-title.setting' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-footer>"

/***/ }),

/***/ "./src/pages/setting/components/setting/setting.component.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/setting/components/setting/setting.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%; }\n  :host .content-wrapper .wrapper .content-scroll {\n    height: calc(100% - 0px) !important;\n    width: 100%;\n    padding: 0 15px; }\n  :host .content-wrapper .wrapper .content-scroll app-panel ::ng-deep .title {\n      padding: 10px 0;\n      font-size: 18px;\n      font-weight: 500; }\n  :host .content-wrapper .wrapper .content-scroll app-panel app-simple-item {\n      -webkit-box-align: center;\n              align-items: center;\n      margin: 10px 0; }\n  :host .content-wrapper .wrapper .content-scroll app-panel app-simple-item .img {\n        width: 20px;\n        max-width: 20px;\n        margin: 0 10px;\n        height: 20px; }\n  :host .content-wrapper .wrapper .content-scroll app-panel app-simple-item ion-icon {\n        padding: 0 10px; }\n  :host .content-wrapper .wrapper .content-scroll app-panel app-simple-item strong {\n        font-size: 14px; }\n  :host .content-wrapper .wrapper .content-scroll app-panel app-simple-item p {\n        margin: 0;\n        font-size: 11px;\n        color: var(--ion-color-medium); }\n  :host .content-wrapper .wrapper .content-scroll ion-button {\n      margin: 10px 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvc2V0dGluZy9jb21wb25lbnRzL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdNLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFlBQVksRUFBQTtFQUpsQjtJQVFRLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsZUFBZSxFQUFBO0VBVnZCO01BY2MsZUFBZTtNQUNmLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQWhCOUI7TUFxQlkseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQixjQUFjLEVBQUE7RUF0QjFCO1FBeUJjLFdBQVc7UUFDWCxlQUFlO1FBQ2YsY0FBYztRQUNkLFlBQVksRUFBQTtFQTVCMUI7UUFnQ2MsZUFBZSxFQUFBO0VBaEM3QjtRQW9DYyxlQUFlLEVBQUE7RUFwQzdCO1FBdUNjLFNBQVM7UUFDVCxlQUFlO1FBQ2YsOEJBQThCLEVBQUE7RUF6QzVDO01BOENVLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvcGFnZXMvc2V0dGluZy9jb21wb25lbnRzL3NldHRpbmcvc2V0dGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuY29udGVudC13cmFwcGVyIHtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgLmNvbnRlbnQtc2Nyb2xsIHtcclxuICAgICAgICAvL2hlaWdodDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDBweCkgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgYXBwLXBhbmVsIHtcclxuICAgICAgICAgIDo6bmctZGVlcCB7XHJcbiAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYXBwLXNpbXBsZS1pdGVtIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcblxyXG4gICAgICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9uIHtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/setting/setting.service */ "./src/pages/setting/services/setting/setting.service.ts");





/**
 * manage users preferences
 */
var SettingComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SettingComponent, _super);
    function SettingComponent(injector, authService, settingService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.settingService = settingService;
        return _this;
    }
    /** get settings and setting options from settings service. set uid to current user id.
     *  this is necessary if no settings has been saved previously
     */
    SettingComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        this.subscriptions.push(this.settingService.getUserSettings(this.currentUser.uid).subscribe(function (data) {
                            _this.setting = data;
                            _this.setting.uid = _this.currentUser.uid;
                        }));
                        this.subscriptions.push(this.settingService.settingsOptions.subscribe(function (data) { return (_this.settingOptions = data); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    /** save or update user preferences  */
    SettingComponent.prototype.save = function () {
        this.settingService.upsertPreferences(this.settingService.setting);
    };
    /** logout and return to welcome or auth screen */
    SettingComponent.prototype.signOut = function () {
        var _this = this;
        var hideWalkthrough = this.setting.hideWalkthrough;
        this.authService.signOut().then(function () {
            if (hideWalkthrough) {
                _this.goto(_this.routes.auth);
            }
            else {
                _this.goto(_this.routes.welcome);
            }
        });
    };
    SettingComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] }
    ]; };
    SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! raw-loader!./setting.component.html */ "./node_modules/raw-loader/index.js!./src/pages/setting/components/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.scss */ "./src/pages/setting/components/setting/setting.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"]])
    ], SettingComponent);
    return SettingComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_setting_setting_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/setting/setting.component */ "./src/pages/setting/components/setting/setting.component.ts");






var SettingModule = /** @class */ (function () {
    function SettingModule() {
    }
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
    return SettingModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-setting-setting-module-es5.js.map