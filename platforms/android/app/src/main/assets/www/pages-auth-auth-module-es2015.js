(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-auth-auth-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/auth/auth.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/auth/auth.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"ion-padding\" scrollX=\"false\" scrollY=\"false\">\r\n  <!-- <img src=\"../../../../assets/images/new/Background1.jpg\" id=\"bg\" alt=\"\"> -->\r\n\r\n  <div class=\"content-wrapper\">\r\n    <ion-button class=\"mb15\" shape=\"round\" (click)=\"goto(routes.login)\"> {{ 'auth-component.login-button' | translate }}</ion-button>\r\n    <ion-button class=\"mb15\" shape=\"round\" fill=\"outline\" (click)=\"goto(routes.register)\">\r\n      {{ 'auth-component.signup-button' | translate }}</ion-button\r\n    >\r\n<!--  -->\r\n    <p class=\"text-line-through-background\">\r\n      <span>{{ 'auth-component.alt-login' | translate }}</span>\r\n    </p>\r\n    <div class=\"social\">\r\n      <ion-button shape=\"round\" color=\"google\" [btnStatus]=\"gplusLoading\" (click)=\"socialLogin(provider.google)\">\r\n        {{ 'auth-component.google' | translate }}\r\n      </ion-button>\r\n      <ion-button shape=\"round\" color=\"facebook\" [btnStatus]=\"fbLoading\" (click)=\"socialLogin(provider.facebook)\">\r\n        {{ 'auth-component.facebook' | translate }}\r\n      </ion-button>\r\n    </div>\r\n    <div class=\"forgot mt15\" (click)=\"goto(routes.forgot)\">\r\n      {{ 'auth-component.forgot-text-1' | translate }}\r\n      <a class=\"reset\">{{ 'auth-component.forgot-text-2' | translate }} </a>\r\n    </div>\r\n\r\n    <div class=\"terms\">\r\n      {{ 'auth-component.i-read' | translate\r\n      }}<a (click)=\"openTermsAndConditions()\" class=\"strong\">{{ 'auth-component.tandc' | translate }}</a>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/deactivated-account/deactivated-account.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/deactivated-account/deactivated-account.component.html ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button fill=\"clear\"\r\n      size=\"small\"\r\n      color=\"medium\"\r\n      (click)=\"goto(routes.login)\">\r\n      <ion-icon mode=\"md\"\r\n        src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\"\r\n  scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{'deactivated-account-component.title' | translate}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\"\r\n        *ngIf=\"currentUser\">\r\n        <div class=\"user-wrapper\">\r\n\r\n          <p class=\"subtitle\">{{'deactivated-account-component.subtitle' | translate}}\r\n            <br>{{currentUser.displayName}}\r\n          </p>\r\n          <div class=\"img\"\r\n            [image-loader]=\"currentUser.photoURL\"></div>\r\n        </div>\r\n        <p class=\"info\"> {{'deactivated-account-component.info' | translate}} </p>\r\n\r\n        <ion-button expand=\"block\"\r\n          shape=\"round\"\r\n          color=\"secondary\"\r\n          (click)=\"reactivate()\">\r\n          {{'deactivated-account-component.reactivate-button' | translate}}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/forgot/forgot.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/forgot/forgot.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\" class=\"ion-padding\">\r\n  <div class=\"content-wrapper center\">\r\n    <div class=\"title\">{{ 'forgot-component.title' | translate }}</div>\r\n\r\n    <!-- start email form -->\r\n    <ng-container *ngIf=\"!isPasswordReset\">\r\n      <form class=\"form\" *ngIf=\"!hasRequested\" #emailForm=\"ngForm\">\r\n        <div class=\"subtitle\">{{ 'forgot-component.subtitle-email' | translate }}</div>\r\n\r\n        <form-field fill=\"true\" color=\"medium\">\r\n          <ion-icon prefix src=\"assets/icons/mail.svg\"></ion-icon>\r\n          <ion-input\r\n            inputRef\r\n            email\r\n            placeholder=\"{{ 'forgot-component.email-label' | translate }}\"\r\n            name=\"email\"\r\n            [(ngModel)]=\"model.email\"\r\n            #email=\"ngModel\"\r\n            required\r\n          ></ion-input>\r\n          <div errors *ngIf=\"email.touched && email.invalid\">\r\n            <span *ngIf=\"email?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\r\n            <span *ngIf=\"email?.errors?.email\">{{ 'form-validation-messages.email' | translate }}</span>\r\n          </div>\r\n        </form-field>\r\n\r\n        <ion-button\r\n          class=\"no-shrink\"\r\n          expand=\"full\"\r\n          shape=\"round\"\r\n          (click)=\"requestReset()\"\r\n          [btnStatus]=\"loading\"\r\n          slot=\"end\"\r\n        >\r\n          {{ 'forgot-component.request-button' | translate }}\r\n          <ion-icon src=\"assets/icons/chevron-right.svg\"></ion-icon>\r\n        </ion-button>\r\n      </form>\r\n      <div class=\"info\" *ngIf=\"hasRequested\">{{ 'forgot-component.password-reset-info' | translate }}</div>\r\n    </ng-container>\r\n\r\n    <!-- end email form -->\r\n\r\n    <!-- start password form -->\r\n    <form class=\"form\" *ngIf=\"isPasswordReset\" #passwordForm=\"ngForm\">\r\n      <div class=\"subtitle\">{{ 'forgot-component.subtitle-password' | translate }}</div>\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/lock.svg\"></ion-icon>\r\n        <ion-input\r\n          inputRef\r\n          name=\"password\"\r\n          type=\"password\"\r\n          placeholder=\"{{ 'forgot-component.password-label' | translate }}\"\r\n          [(ngModel)]=\"model.password\"\r\n          #password=\"ngModel\"\r\n          (secure)=\"passwordStrength = $event\"\r\n          required\r\n        ></ion-input>\r\n        <small\r\n          class=\"pass-strength\"\r\n          suffix\r\n          [ngStyle]=\"{ background: 'var(--ion-color-' + passwordStrength + ')' }\"\r\n        ></small>\r\n        <div errors *ngIf=\"password.touched && password.invalid\">\r\n          <span *ngIf=\"password?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\r\n          <span *ngIf=\"password?.errors?.secure\">{{ 'form-validation-messages.password-no-secure' | translate }}</span>\r\n        </div>\r\n      </form-field>\r\n\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/key.svg\"></ion-icon>\r\n        <ion-input\r\n          inputRef\r\n          name=\"rpassword\"\r\n          type=\"password\"\r\n          placeholder=\"{{ 'forgot-component.retype-password-label' | translate }}\"\r\n          [(ngModel)]=\"model.rpassword\"\r\n          [compare-password]=\"password\"\r\n          #rpassword=\"ngModel\"\r\n          required\r\n        ></ion-input>\r\n\r\n        <div errors *ngIf=\"rpassword.touched && rpassword.invalid\">\r\n          <span *ngIf=\"rpassword?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\r\n          <span *ngIf=\"rpassword?.errors?.compareTo\">{{\r\n            'form-validation-messages.password-no-match' | translate\r\n          }}</span>\r\n        </div>\r\n      </form-field>\r\n\r\n      <ion-button\r\n        class=\"no-shrink\"\r\n        expand=\"full\"\r\n        shape=\"round\"\r\n        (click)=\"resetPassword()\"\r\n        [btnStatus]=\"loading\"\r\n        slot=\"end\"\r\n      >\r\n        {{ 'forgot-component.reset-button' | translate }}\r\n        <ion-icon src=\"assets/icons/chevron-right.svg\"></ion-icon>\r\n      </ion-button>\r\n    </form>\r\n    <!-- end password form -->\r\n\r\n    <!-- start login option -->\r\n    <div class=\"terms\">\r\n      {{ 'auth-component.login-text-1' | translate }}\r\n      <a (click)=\"goto(routes.login)\" class=\"strong\">\r\n        {{ 'auth-component.login-text-2' | translate }}\r\n      </a>\r\n    </div>\r\n    <!-- end login option -->\r\n\r\n    <p class=\"text-line-through-background\"><span>or</span></p>\r\n\r\n    <!-- start get an account -->\r\n    <div class=\"terms\">\r\n      {{ 'login-component.dont-have-account' | translate }}\r\n      <a (click)=\"goto(routes.register)\" class=\"strong\">{{ 'login-component.register' | translate }}</a>\r\n    </div>\r\n    <!-- end get an account -->\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/login/login.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\" class=\"ion-padding\">\r\n  <!-- <img src=\"../../../../assets/images/new/Background1.jpg\" id=\"bg\" alt=\"\"> -->\r\n  <div class=\"content-wrapper center\">\r\n    <!-- info section when user has verified their account -->\r\n    <div class=\"info\" *ngIf=\"emailVerified\">\r\n      <ion-icon src=\"assets/icons/info.svg\"></ion-icon><span>{{ 'login-component.email-verified' | translate }}</span>\r\n    </div>\r\n\r\n    <div class=\"title\">{{ 'login-component.title' | translate }}</div>\r\n    <!-- start form -->\r\n    <form class=\"form\" #form=\"ngForm\">\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/user.svg\"></ion-icon>\r\n        <ion-input inputRef name=\"email\" placeholder=\"Email\" [(ngModel)]=\"model.email\" required email></ion-input>\r\n      </form-field>\r\n\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/lock.svg\"></ion-icon>\r\n        <ion-input type=\"password\" name=\"password\" required inputRef placeholder=\"Password\" [(ngModel)]=\"model.password\"></ion-input>\r\n      </form-field>\r\n    </form>\r\n\r\n    <div class=\"remember-me\">\r\n      <ion-checkbox name=\"rememberMe\" [(ngModel)]=\"rememberMe\"></ion-checkbox>\r\n      <div class=\"remember-me-text\">{{ 'login-component.remember-label' | translate }}</div>\r\n    </div>\r\n    <!-- end form -->\r\n\r\n    <!-- signin button -->\r\n    <ion-button class=\"no-shrink\" expand=\"full\" shape=\"round\" (click)=\"login()\" [btnStatus]=\"loading\" slot=\"end\">\r\n      {{ 'auth-component.login-button' | translate }}\r\n      <ion-icon src=\"assets/icons/chevron-right.svg\"></ion-icon>\r\n    </ion-button>\r\n    <!-- end sign in button -->\r\n\r\n    <!-- start forgot password -->\r\n    <div class=\"terms\">\r\n      {{ 'auth-component.forgot-text-1' | translate }}\r\n      <a (click)=\"goto(routes.forgot)\" class=\"strong\">\r\n        {{ 'auth-component.forgot-text-2' | translate }}\r\n      </a>\r\n    </div>\r\n    <!-- end forgot password -->\r\n\r\n    <p class=\"text-line-through-background\"><span>or</span></p>\r\n\r\n    <!-- start social buttons -->\r\n    <div class=\"social-buttons\">\r\n      <ion-button shape=\"round\" color=\"google\" [btnStatus]=\"gplusLoading\" (click)=\"socialLoginIn(provider.google)\">\r\n        {{ 'auth-component.google' | translate }}</ion-button\r\n      >\r\n      <ion-button shape=\"round\" color=\"facebook\" [btnStatus]=\"fbLoading\" (click)=\"socialLoginIn(provider.facebook)\">\r\n        {{ 'auth-component.facebook' | translate }}</ion-button\r\n      >\r\n    </div>\r\n    <!-- end social buttons -->\r\n\r\n    <!-- start get an account -->\r\n    <div class=\"terms\">\r\n      {{ 'login-component.dont-have-account' | translate }}\r\n      <a (click)=\"goto(routes.register)\" class=\"strong\">{{ 'login-component.register' | translate }}</a>\r\n    </div>\r\n    <!-- end get an account -->\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/register/register.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/register/register.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\" class=\"ion-padding\">\r\n  <div class=\"content-wrapper center\">\r\n    <!-- title -->\r\n    <div class=\"subtitle\">{{ 'signup-component.title' | translate }}</div>\r\n\r\n    <!-- start form -->\r\n    <form class=\"form\" #form=\"ngForm\">\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/user.svg\"></ion-icon>\r\n        <ion-input\r\n          inputRef\r\n          name=\"displayName\"\r\n          placeholder=\"Display Name\"\r\n          [(ngModel)]=\"model.displayName\"\r\n          #displayName=\"ngModel\"\r\n          required\r\n        >\r\n        </ion-input>\r\n        <div errors *ngIf=\"displayName.touched && displayName.invalid\">\r\n          <span *ngIf=\"displayName?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\r\n        </div>\r\n      </form-field>\r\n\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/mail.svg\"></ion-icon>\r\n        <ion-input\r\n          inputRef\r\n          name=\"email\"\r\n          placeholder=\"Email\"\r\n          [(ngModel)]=\"model.email\"\r\n          #email=\"ngModel\"\r\n          required\r\n        ></ion-input>\r\n        <div errors *ngIf=\"email.touched && email.invalid\">\r\n          <span *ngIf=\"email?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\r\n        </div>\r\n      </form-field>\r\n\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/lock.svg\"></ion-icon>\r\n        <ion-input\r\n          inputRef\r\n          type=\"password\"\r\n          name=\"password\"\r\n          placeholder=\"Password\"\r\n          [(ngModel)]=\"model.password\"\r\n          #password=\"ngModel\"\r\n          (secure)=\"passwordStrength = $event\"\r\n          required\r\n        ></ion-input>\r\n        <small\r\n          class=\"pass-strength\"\r\n          suffix\r\n          [ngStyle]=\"{ background: 'var(--ion-color-' + passwordStrength + ')' }\"\r\n        ></small>\r\n        <div errors *ngIf=\"password.touched && password.invalid\">\r\n          <span *ngIf=\"password?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\r\n          <span *ngIf=\"password?.errors?.secure\">{{ 'form-validation-messages.password-no-secure' | translate }}</span>\r\n        </div>\r\n      </form-field>\r\n\r\n      <form-field fill=\"true\" color=\"medium\">\r\n        <ion-icon prefix src=\"assets/icons/key.svg\"></ion-icon>\r\n        <ion-input\r\n          inputRef\r\n          name=\"rpassword\"\r\n          type=\"password\"\r\n          placeholder=\"Retype Password\"\r\n          [(ngModel)]=\"model.rpassword\"\r\n          [compare-password]=\"password\"\r\n          #rpassword=\"ngModel\"\r\n          required\r\n        ></ion-input>\r\n\r\n        <div errors *ngIf=\"rpassword.touched && rpassword.invalid\">\r\n          <span *ngIf=\"rpassword?.errors?.required\">{{ 'form-validation-messages.required' | translate }}</span>\r\n          <span *ngIf=\"rpassword?.errors?.compareTo\">{{\r\n            'form-validation-messages.password-no-match' | translate\r\n          }}</span>\r\n        </div>\r\n      </form-field>\r\n    </form>\r\n    <!-- end form -->\r\n\r\n    <!-- start sign up button -->\r\n    <ion-button class=\"no-shrink\" expand=\"full\" shape=\"round\" (click)=\"signup()\" [btnStatus]=\"loading\" slot=\"end\">\r\n      {{ 'auth-component.signup-button' | translate }}\r\n      <ion-icon src=\"assets/icons/chevron-right.svg\"></ion-icon>\r\n    </ion-button>\r\n    <!-- end sign up button -->\r\n\r\n    <!-- get an account -->\r\n    <div class=\"terms\">\r\n      {{ 'auth-component.login-text-1' | translate }}\r\n      <a (click)=\"goto(routes.login)\" class=\"strong\">{{ 'auth-component.login-button' | translate }}</a>\r\n    </div>\r\n    <!-- end get an account -->\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/auth/components/verify-email/verify-email.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/auth/components/verify-email/verify-email.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"back()\">\r\n      <ion-icon mode=\"md\" src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'verify-email-component.title' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\" *ngIf=\"currentUser\">\r\n        <div class=\"user-wrapper\">\r\n          <p class=\"subtitle\" [translate]=\"'verify-email-component.subtitle'\" [translateParams]=\"{ name: currentUser.displayName }\"></p>\r\n        </div>\r\n        <p class=\"info\" [innerHTML]=\"'verify-email-component.info' | translate: { email: currentUser.email }\"></p>\r\n\r\n        <ion-button class=\"resend-btn\" expand=\"block\" shape=\"round\" color=\"secondary\" (click)=\"resendVerificationEmail()\">\r\n          {{ 'verify-email-component.resend-button' | translate }}\r\n        </ion-button>\r\n\r\n        <ion-button expand=\"block\" shape=\"round\" color=\"danger\" (click)=\"back()\">\r\n          {{ 'verify-email-component.login-button' | translate }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/pages/auth/auth.module.ts":
/*!***************************************!*\
  !*** ./src/pages/auth/auth.module.ts ***!
  \***************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/auth/auth.component */ "./src/pages/auth/components/auth/auth.component.ts");
/* harmony import */ var _components_deactivated_account_deactivated_account_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/deactivated-account/deactivated-account.component */ "./src/pages/auth/components/deactivated-account/deactivated-account.component.ts");
/* harmony import */ var _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/forgot/forgot.component */ "./src/pages/auth/components/forgot/forgot.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/pages/auth/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/pages/auth/components/register/register.component.ts");
/* harmony import */ var _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/verify-email/verify-email.component */ "./src/pages/auth/components/verify-email/verify-email.component.ts");
/* harmony import */ var _guards_verify_email_verify_email_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./guards/verify-email/verify-email.guard */ "./src/pages/auth/guards/verify-email/verify-email.guard.ts");












let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"], _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__["ForgotComponent"], _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__["VerifyEmailComponent"], _components_deactivated_account_deactivated_account_component__WEBPACK_IMPORTED_MODULE_6__["DeactivatedAccountComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _components_auth_auth_component__WEBPACK_IMPORTED_MODULE_5__["AuthComponent"]
                },
                {
                    path: 'login',
                    component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
                },
                {
                    path: 'register',
                    component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
                },
                {
                    path: 'forgot',
                    component: _components_forgot_forgot_component__WEBPACK_IMPORTED_MODULE_7__["ForgotComponent"]
                },
                {
                    path: 'deactivated',
                    component: _components_deactivated_account_deactivated_account_component__WEBPACK_IMPORTED_MODULE_6__["DeactivatedAccountComponent"]
                },
                {
                    canActivate: [_guards_verify_email_verify_email_guard__WEBPACK_IMPORTED_MODULE_11__["VerifyEmailGuard"]],
                    path: 'verify-email',
                    component: _components_verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_10__["VerifyEmailComponent"]
                }
            ])
        ]
    })
], AuthModule);



/***/ }),

/***/ "./src/pages/auth/components/auth/auth.component.scss":
/*!************************************************************!*\
  !*** ./src/pages/auth/components/auth/auth.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .content-wrapper .social {\n  -webkit-box-pack: center;\n          justify-content: center;\n  display: -webkit-box;\n  display: flex;\n}\n:host .content-wrapper .social ion-button {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content-wrapper .forgot,\n:host .content-wrapper .terms {\n  text-align: center;\n  margin: 15px 0;\n}\n:host .content-wrapper .forgot {\n  font-size: 14px;\n}\n:host .content-wrapper .terms {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9Eb2N1bWVudHMvc2luZW8zL3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQUo7QURFSTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNBTjtBREVNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDQVI7QURHSTs7RUFFRyxrQkFBQTtFQUNDLGNBQUE7QUNEUjtBRElJO0VBQ0UsZUFBQTtBQ0ZOO0FES0k7RUFDRSxlQUFBO0FDSE4iLCJmaWxlIjoic3JjL3BhZ2VzL2F1dGgvY29tcG9uZW50cy9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgLnNvY2lhbCB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuZm9yZ290LFxyXG4gICAgLnRlcm1zIHtcclxuICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9yZ290IHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXJtcyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QgLmNvbnRlbnQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuc29jaWFsIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5zb2NpYWwgaW9uLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mb3Jnb3QsXG46aG9zdCAuY29udGVudC13cmFwcGVyIC50ZXJtcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxNXB4IDA7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5mb3Jnb3Qge1xuICBmb250LXNpemU6IDE0cHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC50ZXJtcyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/auth/components/auth/auth.component.ts":
/*!**********************************************************!*\
  !*** ./src/pages/auth/components/auth/auth.component.ts ***!
  \**********************************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_modals_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/modals/terms-and-conditions/terms-and-conditions.component */ "./src/shared/modals/terms-and-conditions/terms-and-conditions.component.ts");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/constants */ "./src/pages/auth/helpers/constants.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");






/**
 * navigate to login or use social login, access to terms and conditions modal
 */
let AuthComponent = class AuthComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"] {
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        /** stores enum of social providers */
        this.provider = _helpers_constants__WEBPACK_IMPORTED_MODULE_4__["SocialAuthProvider"];
        /** loader for facebook button in template */
        this.fbLoading = false;
        /** loader for facebook button in template */
        this.gplusLoading = false;
        /** common success promise callback */
        this.successPromise = () => {
            this.loading = false;
            this.fbLoading = false;
            this.gplusLoading = false;
            // this.goto(this.routes.dashboard);
            this.goto(this.routes.messages); //kjm
        };
        /** common failed promise callback */
        this.failPromise = (err) => {
            this.fbLoading = false;
            this.gplusLoading = false;
            this.loading = false;
            this.toast(err);
        };
    }
    /** users facebook or google social to login based on provider type
     * on success, navigate to dashboard page
     */
    socialLogin(provider) {
        if (provider === this.provider.google) {
            this.gplusLoading = true;
        }
        else {
            this.fbLoading = true;
        }
        this.authService
            .socialogin(provider)
            .then(this.successPromise)
            .catch((err) => this.failPromise(err));
    }
    /** open terms and conditions modal */
    openTermsAndConditions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(src_shared_modals_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_3__["TermsAndConditionsComponent"]);
            modal.present();
        });
    }
};
AuthComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }
];
AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth',
        template: __webpack_require__(/*! raw-loader!./auth.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/auth/auth.component.html"),
        styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/pages/auth/components/auth/auth.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
], AuthComponent);



/***/ }),

/***/ "./src/pages/auth/components/deactivated-account/deactivated-account.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/pages/auth/components/deactivated-account/deactivated-account.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper {\n  background-image: url('Background1.jpg');\n  background-size: cover no-repeat fixed;\n}\n:host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 90px) !important;\n  width: 100%;\n  padding: 0 20px;\n}\n:host .content-wrapper .wrapper .content-scroll .user-wrapper {\n  display: -webkit-box;\n  display: flex;\n  margin: 10px 0 30px;\n}\n:host .content-wrapper .wrapper .content-scroll .user-wrapper .img {\n  width: 80px;\n  height: 80px;\n  border-radius: 4px;\n  box-shadow: 1px 2px 2px var(--ion-color-medium);\n}\n:host .content-wrapper .wrapper .content-scroll .user-wrapper .subtitle {\n  margin-top: 0;\n  font-size: 18px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content-wrapper .wrapper .content-scroll .info {\n  margin-top: 0;\n  color: var(--ion-color-medium);\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9Eb2N1bWVudHMvc2luZW8zL3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL2RlYWN0aXZhdGVkLWFjY291bnQvZGVhY3RpdmF0ZWQtYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvZGVhY3RpdmF0ZWQtYWNjb3VudC9kZWFjdGl2YXRlZC1hY2NvdW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0Usd0NBQUE7RUFDQSxzQ0FBQTtBQ0RKO0FERUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0FDQU47QURFTTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNBUjtBREVRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7QUNBVjtBRENVO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtDQUFBO0FDQ1o7QURDVTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDQ1o7QURHUTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGVBQUE7QUNEViIsImZpbGUiOiJzcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL2RlYWN0aXZhdGVkLWFjY291bnQvZGVhY3RpdmF0ZWQtYWNjb3VudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuIFxyXG4gIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL25ldy9CYWNrZ3JvdW5kMS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgbm8tcmVwZWF0IGZpeGVkO1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIFxyXG4gICAgICAuY29udGVudC1zY3JvbGwge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcblxyXG4gICAgICAgIC51c2VyLXdyYXBwZXIge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1hcmdpbjogMTBweCAwIDMwcHg7XHJcbiAgICAgICAgICAuaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMnB4IDJweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL25ldy9CYWNrZ3JvdW5kMS5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgbm8tcmVwZWF0IGZpeGVkO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5MHB4KSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnVzZXItd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweCAwIDMwcHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAudXNlci13cmFwcGVyIC5pbWcge1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDFweCAycHggMnB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnVzZXItd3JhcHBlciAuc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuaW5mbyB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAxM3B4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/pages/auth/components/deactivated-account/deactivated-account.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/pages/auth/components/deactivated-account/deactivated-account.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DeactivatedAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeactivatedAccountComponent", function() { return DeactivatedAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");





/**
 * this page is shown when a user deactivate their account.
 * user account deactivation is just a boolean in user document that can be toggled in settings
 * every time a user logs in the user is redirected to this page using the auth guard
 * if they have deactivated their account
 */
let DeactivatedAccountComponent = class DeactivatedAccountComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"] {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
    }
    /** get current user */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
        });
    }
    /** reactivate a user account, sign out user and navigate to login page */
    reactivate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.authService.getUser();
            this.loading = true;
            user.deactivated = false;
            this.firestoreService
                .update(`users/${user.uid}`, user)
                .then(() => {
                this.loading = false;
                this.authService.signOut();
                this.goto(this.routes.login);
                this.toast(this.translate.instant('deactivated-account-component.reactivated-success-message'));
            })
                .catch((err) => this.toast(err));
        });
    }
};
DeactivatedAccountComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }
];
DeactivatedAccountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-deactivated-account',
        template: __webpack_require__(/*! raw-loader!./deactivated-account.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/deactivated-account/deactivated-account.component.html"),
        styles: [__webpack_require__(/*! ./deactivated-account.component.scss */ "./src/pages/auth/components/deactivated-account/deactivated-account.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
], DeactivatedAccountComponent);



/***/ }),

/***/ "./src/pages/auth/components/forgot/forgot.component.scss":
/*!****************************************************************!*\
  !*** ./src/pages/auth/components/forgot/forgot.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-content .content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 0 -40px;\n  padding-top: 50px;\n}\n:host ion-content .content-wrapper.center {\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-self: center;\n}\n:host ion-content .content-wrapper .title {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n:host ion-content .content-wrapper .subtitle {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n}\n:host ion-content .content-wrapper .info {\n  text-align: center;\n  margin: 10px;\n  border-top: 1px solid var(--ion-color-primary-tint);\n  border-bottom: 1px solid var(--ion-color-primary-tint);\n  font-size: 15px;\n  padding: 20px;\n}\n:host ion-content .content-wrapper .terms {\n  text-align: center;\n  margin: 10px 0 0;\n  font-size: 13px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9Eb2N1bWVudHMvc2luZW8zL3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LnNjc3MiLCJzcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL2ZvcmdvdC9mb3Jnb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxvQ0FBQTtBQ0FKO0FERUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQ0EsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FDQU47QURFTTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtBQ0FSO0FER007RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNEUjtBREdNO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FDRFI7QURHTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1EQUFBO0VBQ0Esc0RBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ0RSO0FESU07RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZSIiwiZmlsZSI6InNyYy9wYWdlcy9hdXRoL2NvbXBvbmVudHMvZm9yZ290L2ZvcmdvdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblxyXG4gICAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNDBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDUwcHg7XHJcblxyXG4gICAgICAmLmNlbnRlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgfVxyXG4gICAgICAuaW5mbyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGVybXMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTQwcHg7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlci5jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAudGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuaW5mbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktdGludCk7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAudGVybXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/auth/components/forgot/forgot.component.ts":
/*!**************************************************************!*\
  !*** ./src/pages/auth/components/forgot/forgot.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");





/**
 * allows user to update their password
 * send a one time token to users email so that they can reset their password using firebase auth,
 * when user clicks the link in their email, they are redirected to this component with code in query params
 * check query-params and send code as well as new user password to change user password
 */
let ForgotComponent = class ForgotComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.isPasswordReset = false;
        this.hasRequested = false;
        this.model = { code: null, email: null, password: null, rpassword: null };
        this.failPromise = (err) => {
            this.loading = false;
            this.toast(err);
        };
    }
    /** subscribe to query param changes,
     * if the param oobCode, provided by firebase is included set isPassword reset property to true
     * store oobCode value in model property. the email route configurations are done in
     * https://console.firebase.google.com/u/1/project/complete-fire-starter/authentication/emails
     */
    ngOnInit() {
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe((param) => {
            if (param && param.mode === 'resetPassword' && param.oobCode) {
                this.model.code = param.oobCode;
                this.isPasswordReset = true;
            }
        }));
    }
    /** allow firebase to send a password reset token to the users provided email */
    requestReset() {
        this.loading = true;
        if (this.emailForm.valid) {
            this.authService
                .sendPasswordReset(this.model.email)
                .then(() => {
                this.loading = false;
                this.hasRequested = true;
            })
                .catch((err) => this.failPromise(err));
        }
    }
    /** allow firebase to handle password change by providing new and retype new password */
    resetPassword() {
        this.loading = true;
        if (this.passwordForm.valid) {
            this.authService
                .confirmPasswordReset(this.model.code, this.model.password)
                .then(() => {
                this.loading = false;
                this.toast(this.translate.instant('forgot-component.reset-success'));
                this.goto(this.routes.login);
            })
                .catch((err) => this.failPromise(err));
        }
    }
};
ForgotComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('emailForm', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], ForgotComponent.prototype, "emailForm", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('passwordForm', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], ForgotComponent.prototype, "passwordForm", void 0);
ForgotComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot',
        template: __webpack_require__(/*! raw-loader!./forgot.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/forgot/forgot.component.html"),
        styles: [__webpack_require__(/*! ./forgot.component.scss */ "./src/pages/auth/components/forgot/forgot.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], ForgotComponent);



/***/ }),

/***/ "./src/pages/auth/components/login/login.component.scss":
/*!**************************************************************!*\
  !*** ./src/pages/auth/components/login/login.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content .content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 0 -40px;\n}\n:host ion-content .content-wrapper.center {\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-self: center;\n}\n:host ion-content .content-wrapper .title {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n:host ion-content .content-wrapper .info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 10px 0;\n  font-size: 13px;\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n:host ion-content .content-wrapper .info ion-icon {\n  font-size: 45px;\n  margin-right: 10px;\n}\n:host ion-content .content-wrapper .social-buttons {\n  display: -webkit-box;\n  display: flex;\n}\n:host ion-content .content-wrapper .social-buttons ion-button {\n  width: 100%;\n}\n:host ion-content .content-wrapper .terms {\n  text-align: center;\n  margin: 10px 0 0;\n  font-size: 13px;\n}\n:host ion-content .content-wrapper .remember-me {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 15px;\n  font-size: 13px;\n}\n:host ion-content .content-wrapper .remember-me .remember-me-text {\n  margin-left: 10px;\n}\n#bg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  /* Preserve aspet ratio */\n  min-width: 100%;\n  min-height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9Eb2N1bWVudHMvc2luZW8zL3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0FDTk47QURTTTtFQUNFLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSxrQkFBQTtBQ1BSO0FEVU07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUNSUjtBRFdNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQ1RSO0FEVVE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUNSVjtBRFlNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDVlI7QURZUTtFQUNFLFdBQUE7QUNWVjtBRGNNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNaUjtBRGVNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ2JSO0FEY1E7RUFDRSxpQkFBQTtBQ1pWO0FEbUJBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNqQkYiLCJmaWxlIjoic3JjL3BhZ2VzL2F1dGgvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAvLyAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9uZXcvQmFja2dyb3VuZDEuanBnJyk7XHJcbiBcclxuICBpb24tY29udGVudCB7XHJcbiAgICAvLyAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1jb250cmFzdCk7XHJcbiAgICBcclxuICBcclxuICAgIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTQwcHg7XHJcbiAgICAgXHJcblxyXG4gICAgICAmLmNlbnRlciB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDVweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zb2NpYWwtYnV0dG9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50ZXJtcyB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucmVtZW1iZXItbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAucmVtZW1iZXItbWUtdGV4dCB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNiZyB7XHJcbiAgcG9zaXRpb246IGZpeGVkOyBcclxuICB0b3A6IDA7IFxyXG4gIGxlZnQ6IDA7IFxyXG5cdFxyXG4gIC8qIFByZXNlcnZlIGFzcGV0IHJhdGlvICovXHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbn0iLCI6aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00MHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlci5jZW50ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAudGl0bGUge1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5pbmZvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5pbmZvIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA0NXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zb2NpYWwtYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zb2NpYWwtYnV0dG9ucyBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC50ZXJtcyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAucmVtZW1iZXItbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5yZW1lbWJlci1tZSAucmVtZW1iZXItbWUtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4jYmcge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgLyogUHJlc2VydmUgYXNwZXQgcmF0aW8gKi9cbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/pages/auth/components/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/pages/auth/components/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers/constants */ "./src/pages/auth/helpers/constants.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");







/**
 * handle user authentication via email and also social login
 * access forgot password and register pages
 */
let LoginComponent = class LoginComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"] {
    constructor(injector, authService, storage) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.storage = storage;
        this.provider = _helpers_constants__WEBPACK_IMPORTED_MODULE_5__["SocialAuthProvider"];
        this.fbLoading = false;
        this.gplusLoading = false;
        this.model = {
            email: 'sineo@sineo.com',
            password: 'password123'
        };
        this.rememberMe = false;
        this.successPromise = () => {
            this.loading = false;
            this.fbLoading = false;
            this.gplusLoading = false;
            // this.goto(this.routes.dashboard);
            this.goto(this.routes.messages); //kjm
        };
        this.failPromise = (err) => {
            this.fbLoading = false;
            this.gplusLoading = false;
            this.loading = false;
            this.toast(err);
        };
    }
    /** get username from storage if available,
     * set remember me property is user name available,
     * set email property with username
     */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const username = yield this.storage.get('username');
            this.rememberMe = username ? true : false;
            this.model.email = username ? username : this.model.email;
            this.activatedRoute.queryParams.subscribe((param) => {
                if (param && param.emailVerified) {
                    this.emailVerified = param.emailVerified;
                }
            });
        });
    }
    /** if remember me checkbox ticked, save username. if unticked, remove username */
    doRememberMe() {
        if (this.rememberMe && this.model.email) {
            this.storage.set('username', this.model.email);
            return;
        }
        this.storage.remove('username');
    }
    /** login user, handle remember me and route to dashboard when complete */
    login() {
        if (!this.model.email) {
            return;
        }
        if (this.form.valid) {
            this.loading = true;
            this.doRememberMe();
            this.authService
                .signIn(this.model)
                .then(this.successPromise)
                .catch((err) => this.failPromise(err));
        }
        else {
            this.toast(this.translate.instant('form-validation-messages.form-incomplete'));
        }
    }
    /** users facebook or google social to login based on provider type
     * on success, navigate to dashboard page
     */
    socialLoginIn(provider) {
        if (provider === this.provider.google) {
            this.gplusLoading = true;
        }
        else {
            this.fbLoading = true;
        }
        this.authService
            .socialogin(provider)
            .then(this.successPromise)
            .catch((err) => this.failPromise(err));
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], LoginComponent.prototype, "form", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.scss */ "./src/pages/auth/components/login/login.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]])
], LoginComponent);



/***/ }),

/***/ "./src/pages/auth/components/register/register.component.scss":
/*!********************************************************************!*\
  !*** ./src/pages/auth/components/register/register.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-light);\n}\n:host ion-content .content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 0 -40px;\n  -webkit-box-flex: 1;\n          flex: 1;\n  flex-shrink: 0;\n}\n:host ion-content .content-wrapper.center {\n  -webkit-box-pack: center;\n          justify-content: center;\n  align-self: center;\n}\n:host ion-content .content-wrapper .title {\n  font-size: 24px;\n  margin-bottom: 10px;\n}\n:host ion-content .content-wrapper .subtitle {\n  margin: 20px 0;\n  text-align: center;\n  color: var(--ion-color-medium-shade);\n}\n:host ion-content .content-wrapper .social-buttons {\n  display: -webkit-box;\n  display: flex;\n}\n:host ion-content .content-wrapper .social-buttons ion-button {\n  width: 100%;\n}\n:host ion-content .content-wrapper .terms {\n  text-align: center;\n  margin: 10px 0 0;\n  font-size: 13px;\n}\n:host ion-content .content-wrapper .remember-me {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 15px;\n  font-size: 13px;\n}\n:host ion-content .content-wrapper .remember-me .remember-me-text {\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9Eb2N1bWVudHMvc2luZW8zL3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL2F1dGgvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG9DQUFBO0FDQUo7QURFSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsY0FBQTtBQ0FOO0FEQ007RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7QUNDUjtBREVNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDQVI7QURHTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDRFI7QURJTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQ0ZSO0FESVE7RUFDRSxXQUFBO0FDRlY7QURNTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDSlI7QURPTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNMUjtBRE1RO0VBQ0UsaUJBQUE7QUNKViIsImZpbGUiOiJzcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIC00MHB4O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgJi5jZW50ZXIge1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnN1YnRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc29jaWFsLWJ1dHRvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGVybXMge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJlbWVtYmVyLW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgLnJlbWVtYmVyLW1lLXRleHQge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtNDBweDtcbiAgZmxleDogMTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyLmNlbnRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLnN1YnRpdGxlIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuc29jaWFsLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuc29jaWFsLWJ1dHRvbnMgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAudGVybXMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwIDA7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLnJlbWVtYmVyLW1lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAucmVtZW1iZXItbWUgLnJlbWVtYmVyLW1lLXRleHQge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/auth/components/register/register.component.ts":
/*!******************************************************************!*\
  !*** ./src/pages/auth/components/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");





/**
 * get user details from user and sign them up to firebase.
 * once signed up, send verification email to the users email.
 */
let RegisterComponent = class RegisterComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.model = {
            displayName: null,
            email: '',
            password: '',
            rpassword: null
        };
        /** send verification email to the users email and navigate to verify page */
        this.successPromise = () => {
            this.loading = false;
            this.authService.sendEmailVerification();
            this.goto(this.routes.verifyEmail);
        };
        this.failPromise = (err) => {
            this.loading = false;
            this.toast(err);
        };
    }
    /** collect user basic info and sign up user to app using firebase auth */
    signup() {
        if (this.form.valid) {
            this.loading = true;
            this.authService
                .signUp(this.model)
                .then(this.successPromise)
                .catch((err) => this.failPromise(err));
        }
        else {
            this.toast(this.translate.instant('form-validation-messages.form-incomplete'));
        }
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('form', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
], RegisterComponent.prototype, "form", void 0);
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/register/register.component.html"),
        styles: [__webpack_require__(/*! ./register.component.scss */ "./src/pages/auth/components/register/register.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], RegisterComponent);



/***/ }),

/***/ "./src/pages/auth/components/verify-email/verify-email.component.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/auth/components/verify-email/verify-email.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 90px) !important;\n  width: 100%;\n  padding: 0 20px;\n}\n:host .content-wrapper .wrapper .content-scroll .subtitle {\n  margin: 10px 0 0;\n  font-size: 18px;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content-wrapper .wrapper .content-scroll .info {\n  margin: 0 5px 30px;\n  color: var(--ion-color-medium-shade);\n  font-size: 14px;\n}\n:host .content-wrapper .wrapper .content-scroll .info a {\n  color: var(--ion-color-primary);\n}\n:host .content-wrapper .wrapper .content-scroll .resend-btn {\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9Eb2N1bWVudHMvc2luZW8zL3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LnNjc3MiLCJzcmMvcGFnZXMvYXV0aC9jb21wb25lbnRzL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0FDRE47QURHTTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNEUjtBREdRO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDRFY7QURJUTtFQUNFLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FDRlY7QURHVTtFQUNFLCtCQUFBO0FDRFo7QURJUTtFQUNFLG1CQUFBO0FDRlYiLCJmaWxlIjoic3JjL3BhZ2VzL2F1dGgvY29tcG9uZW50cy92ZXJpZnktZW1haWwvdmVyaWZ5LWVtYWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAuY29udGVudC1zY3JvbGwge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcblxyXG4gICAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMCAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgIG1hcmdpbjogMCA1cHggMzBweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucmVzZW5kLWJ0biB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDkwcHgpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuc3VidGl0bGUge1xuICBtYXJnaW46IDEwcHggMCAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuaW5mbyB7XG4gIG1hcmdpbjogMCA1cHggMzBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuaW5mbyBhIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5yZXNlbmQtYnRuIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/auth/components/verify-email/verify-email.component.ts":
/*!**************************************************************************!*\
  !*** ./src/pages/auth/components/verify-email/verify-email.component.ts ***!
  \**************************************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");




/**
 * users are redirected to verify page if they do not have their emails verified
 * here they can resend a verification code or go back to login page
 */
let VerifyEmailComponent = class VerifyEmailComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"] {
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
    }
    /** get current user on component init */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
        });
    }
    /** send verification email to users email address */
    resendVerificationEmail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.authService.sendEmailVerification();
            this.toast(this.translate.instant('verify-email-component.verification-email-sent'));
        });
    }
    /** go back to login page and sign out the user from the app */
    back() {
        this.authService.signOut().then(() => {
            this.goto(this.routes.login);
        });
    }
};
VerifyEmailComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-verify-email',
        template: __webpack_require__(/*! raw-loader!./verify-email.component.html */ "./node_modules/raw-loader/index.js!./src/pages/auth/components/verify-email/verify-email.component.html"),
        styles: [__webpack_require__(/*! ./verify-email.component.scss */ "./src/pages/auth/components/verify-email/verify-email.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
], VerifyEmailComponent);



/***/ }),

/***/ "./src/pages/auth/guards/verify-email/verify-email.guard.ts":
/*!******************************************************************!*\
  !*** ./src/pages/auth/guards/verify-email/verify-email.guard.ts ***!
  \******************************************************************/
/*! exports provided: VerifyEmailGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailGuard", function() { return VerifyEmailGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");





/**
 * check if user is verified, if they are verified, got to dashboard
 * else stay on verified page
 */
let VerifyEmailGuard = class VerifyEmailGuard extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, auth) {
        super(injector);
        this.injector = injector;
        this.auth = auth;
    }
    canActivate(next, state) {
        return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => {
            if (!!user && this.auth.emailVerified) {
                this.goto(this.routes.dashboard);
            }
            return true;
        }));
    }
};
VerifyEmailGuard.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
VerifyEmailGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], VerifyEmailGuard);



/***/ })

}]);
//# sourceMappingURL=pages-auth-auth-module-es2015.js.map