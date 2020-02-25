(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["translator-translator-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/translator/translator.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/translator/translator.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n\t\r\n\t<ion-toolbar>\r\n\t\t<ion-title>translator</ion-title>\r\n\t\t<ion-buttons slot=\"start\">\r\n\t\t  <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>\r\n\t\t</ion-buttons>\r\n\t</ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\t<div class=\"translatorclass\">\r\n\t\t<iframe\r\n\t\t\tsrc=\"https://translate.kakao.com/\"\r\n\t\t\tclass=\"iframe\"\r\n\t\t\tscrolling=\"yes\"\r\n\t\t></iframe>\r\n\t</div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/translator/translator.module.ts":
/*!*************************************************!*\
  !*** ./src/app/translator/translator.module.ts ***!
  \*************************************************/
/*! exports provided: TranslatorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatorPageModule", function() { return TranslatorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _translator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./translator.page */ "./src/app/translator/translator.page.ts");







const routes = [
    {
        path: '',
        component: _translator_page__WEBPACK_IMPORTED_MODULE_6__["TranslatorPage"]
    }
];
let TranslatorPageModule = class TranslatorPageModule {
};
TranslatorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_translator_page__WEBPACK_IMPORTED_MODULE_6__["TranslatorPage"]]
    })
], TranslatorPageModule);



/***/ }),

/***/ "./src/app/translator/translator.page.scss":
/*!*************************************************!*\
  !*** ./src/app/translator/translator.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "iframe {\n  height: 100%;\n  width: 100%;\n}\n\n.headerclass {\n  width: 100%;\n  height: auto;\n}\n\n.translatorclass {\n  height: 110%;\n  width: 100%;\n  margin-top: -65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9Eb2N1bWVudHMvc2luZW8yL3NpbmVvX21lc3Nlbmdlci9zcmMvYXBwL3RyYW5zbGF0b3IvdHJhbnNsYXRvci5wYWdlLnNjc3MiLCJzcmMvYXBwL3RyYW5zbGF0b3IvdHJhbnNsYXRvci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3RyYW5zbGF0b3IvdHJhbnNsYXRvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpZnJhbWUge1xyXG5cdGhlaWdodDogMTAwJTtcclxuXHR3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmhlYWRlcmNsYXNzIHtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi50cmFuc2xhdG9yY2xhc3Mge1xyXG5cdGhlaWdodDogMTEwJTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRtYXJnaW4tdG9wOiAtNjVweDtcclxufSIsImlmcmFtZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkZXJjbGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi50cmFuc2xhdG9yY2xhc3Mge1xuICBoZWlnaHQ6IDExMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAtNjVweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/translator/translator.page.ts":
/*!***********************************************!*\
  !*** ./src/app/translator/translator.page.ts ***!
  \***********************************************/
/*! exports provided: TranslatorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslatorPage", function() { return TranslatorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TranslatorPage = class TranslatorPage {
    constructor() { }
    ngOnInit() {
    }
};
TranslatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-translator',
        template: __webpack_require__(/*! raw-loader!./translator.page.html */ "./node_modules/raw-loader/index.js!./src/app/translator/translator.page.html"),
        styles: [__webpack_require__(/*! ./translator.page.scss */ "./src/app/translator/translator.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TranslatorPage);



/***/ })

}]);
//# sourceMappingURL=translator-translator-module-es2015.js.map