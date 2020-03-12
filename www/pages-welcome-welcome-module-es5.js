(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-welcome-welcome-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/welcome/components/welcome/welcome.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/welcome/components/welcome/welcome.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\" class=\"ion-padding\">\r\n  <!-- <img src=\"../../../../images/new/Background1.jpg\" id=\"bg\" alt=\"\"> -->\r\n  <div class=\"content-wrapper\">\r\n    <!-- start language selection-->\r\n    <div class=\"language\" *ngIf=\"language\">\r\n      <ion-icon name=\"globe\"></ion-icon>\r\n      <span class=\"pl5\">{{ 'welcome-component.change-language' | translate }}</span>\r\n      <div class=\"flag-icon\" (click)=\"openLanguage()\">\r\n        <div class=\"flag-img\" [image-loader]=\"language.icon\"></div>\r\n        {{ language.text | translate }}\r\n      </div>\r\n    </div>\r\n    <!-- end language selection -->\r\n\r\n    <!-- start slides -->\r\n    <div class=\"slides-content\">\r\n      <ion-slides (ionSlideDidChange)=\"slideChanged()\">\r\n        <ion-slide *ngFor=\"let item of slides\">\r\n          <div class=\"slide-wrapper\">\r\n            <div class=\"image\"></div>\r\n            <div class=\"detail\">\r\n              <div class=\"title\">SinEo</div>\r\n              <div class=\"paragraph\">{{ item.paragraph | translate }}</div> \r\n            </div>\r\n          </div>\r\n        </ion-slide>\r\n      </ion-slides>\r\n    </div>\r\n    <!-- end slides -->\r\n\r\n    <!-- start navigation -->\r\n    <div class=\"navigation\">\r\n      <ion-button shape=\"round\" color=\"primary\" (click)=\"goto(routes.auth)\">\r\n        {{ 'welcome-component.get-started' | translate }}</ion-button\r\n      >\r\n      <div class=\"swiper-bullets\">\r\n        \r\n        <span\r\n          class=\"bullet\"\r\n          *ngFor=\"let item of slides; let i = index\"\r\n          [ngClass]=\"{ active: i === currentIndex }\"\r\n        ></span>\r\n        \r\n      </div>\r\n    </div>\r\n    <!-- end navigation -->\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/pages/welcome/components/welcome/welcome.component.scss":
/*!*********************************************************************!*\
  !*** ./src/pages/welcome/components/welcome/welcome.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content .content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  padding: 0 10px; }\n  :host ion-content .content-wrapper .slides-content {\n    -webkit-box-flex: 1;\n            flex: 1;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n  :host ion-content .content-wrapper .slides-content ion-slides {\n      background: var(--ion-color-light);\n      width: 100%;\n      height: 95%;\n      border-radius: 12px;\n      overflow: hidden; }\n  :host ion-content .content-wrapper .slides-content ion-slides ion-slide {\n        -webkit-box-align: start;\n                align-items: flex-start; }\n  :host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper {\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-orient: vertical;\n          -webkit-box-direction: normal;\n                  flex-direction: column; }\n  :host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .image {\n            background-image: url('symbol.png');\n            background-size: auto;\n            background-repeat: no-repeat;\n            background-position: center;\n            height: 300px;\n            width: -35%;\n            height: -35%;\n            border-radius: 8px; }\n  :host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .image:before {\n              content: '';\n              position: absolute;\n              top: 0;\n              right: 0;\n              bottom: 0;\n              left: 0;\n              background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(var(--ion-color-light-rgb), 0)), color-stop(55%, rgba(var(--ion-color-light-rgb), 0.7)), color-stop(65%, var(--ion-color-light)));\n              background-image: linear-gradient(to bottom, rgba(var(--ion-color-light-rgb), 0) 0, rgba(var(--ion-color-light-rgb), 0.7) 55%, var(--ion-color-light) 65%); }\n  :host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .detail {\n            z-index: 2;\n            display: -webkit-box;\n            display: flex;\n            -webkit-box-orient: vertical;\n            -webkit-box-direction: normal;\n                    flex-direction: column;\n            -webkit-box-align: start;\n                    align-items: flex-start;\n            padding: 0 20px;\n            text-align: left; }\n  :host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .detail .title {\n              margin-top: 20px;\n              font-size: 24px;\n              font-weight: 600;\n              color: var(--ion-color-primary); }\n  :host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .detail .paragraph {\n              font-size: 15px;\n              padding: 10px 0;\n              color: var(--ion-color-medium); }\n  :host ion-content .content-wrapper .language {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n    -webkit-box-align: center;\n            align-items: center;\n    font-size: 12px;\n    color: var(--ion-color-medium);\n    padding-top: 10px;\n    margin: 10px; }\n  :host ion-content .content-wrapper .language .flag-icon {\n      color: var(--ion-color-primary);\n      padding-left: 10px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center; }\n  :host ion-content .content-wrapper .language .flag-icon .flag-img {\n        width: 15px;\n        height: 15px;\n        margin-right: 10px; }\n  :host ion-content .content-wrapper .navigation {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center; }\n  :host ion-content .content-wrapper .navigation .swiper-bullets {\n      margin: 30px 0;\n      display: -webkit-box;\n      display: flex; }\n  :host ion-content .content-wrapper .navigation .swiper-bullets span {\n        margin: 0 6px;\n        width: 7px;\n        height: 7px;\n        border-radius: 100%;\n        background: var(--ion-color-medium);\n        -webkit-transition: all 200ms ease-in-out;\n        transition: all 200ms ease-in-out; }\n  :host ion-content .content-wrapper .navigation .swiper-bullets span.active {\n          background: var(--ion-color-primary);\n          width: 14px;\n          border-radius: 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvd2VsY29tZS9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUdNLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixlQUFlLEVBQUE7RUFOckI7SUFTUSxtQkFBTztZQUFQLE9BQU87SUFDUCxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CLEVBQUE7RUFYM0I7TUFjVSxrQ0FBa0M7TUFDbEMsV0FBVztNQUNYLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsZ0JBQWdCLEVBQUE7RUFsQjFCO1FBcUJZLHdCQUF1QjtnQkFBdkIsdUJBQXVCLEVBQUE7RUFyQm5DO1VBdUJjLG9CQUFhO1VBQWIsYUFBYTtVQUNiLDRCQUFzQjtVQUF0Qiw2QkFBc0I7a0JBQXRCLHNCQUFzQixFQUFBO0VBeEJwQztZQTBCZ0IsbUNBQXFFO1lBQ3JFLHFCQUFxQjtZQUNyQiw0QkFBNEI7WUFDNUIsMkJBQTJCO1lBQzNCLGFBQWE7WUFDYixXQUFXO1lBQ1gsWUFBWTtZQUNaLGtCQUFrQixFQUFBO0VBakNsQztjQW9Da0IsV0FBVztjQUNYLGtCQUFrQjtjQUNsQixNQUFNO2NBQ04sUUFBUTtjQUNSLFNBQVM7Y0FDVCxPQUFPO2NBRVAsc05BS0M7Y0FMRCwwSkFLQyxFQUFBO0VBaERuQjtZQXNEZ0IsVUFBVTtZQUNWLG9CQUFhO1lBQWIsYUFBYTtZQUNiLDRCQUFzQjtZQUF0Qiw2QkFBc0I7b0JBQXRCLHNCQUFzQjtZQUN0Qix3QkFBdUI7b0JBQXZCLHVCQUF1QjtZQUN2QixlQUFlO1lBQ2YsZ0JBQWdCLEVBQUE7RUEzRGhDO2NBOERrQixnQkFBZ0I7Y0FFaEIsZUFBZTtjQUNmLGdCQUFnQjtjQUNoQiwrQkFBK0IsRUFBQTtFQWxFakQ7Y0FzRWtCLGVBQWU7Y0FDZixlQUFlO2NBQ2YsOEJBQThCLEVBQUE7RUF4RWhEO0lBaUZRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHFCQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7RUF2RnBCO01BeUZVLCtCQUErQjtNQUMvQixrQkFBa0I7TUFDbEIsb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQW1CO2NBQW5CLG1CQUFtQixFQUFBO0VBNUY3QjtRQThGWSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQixFQUFBO0VBaEc5QjtJQXNHUSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtFQXpHM0I7TUE0R1UsY0FBYztNQUNkLG9CQUFhO01BQWIsYUFBYSxFQUFBO0VBN0d2QjtRQWdIWSxhQUFhO1FBQ2IsVUFBVTtRQUNWLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsbUNBQW1DO1FBQ25DLHlDQUFpQztRQUFqQyxpQ0FBaUMsRUFBQTtFQXJIN0M7VUF3SGMsb0NBQW9DO1VBQ3BDLFdBQVc7VUFDWCxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvcGFnZXMvd2VsY29tZS9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcblxyXG4gICAgICAuc2xpZGVzLWNvbnRlbnQge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICBpb24tc2xpZGVzIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogOTUlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgICAgICAgaW9uLXNsaWRlIHtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIC5zbGlkZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgLmltYWdlIHsvL2tqbVxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3dlbGNvbWUvc3ltYm9sLnBuZycpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogLTM1JTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogLTM1JTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgICAgICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgLy/qt7jrnbzrjbDsnbTshZhcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgICAgICAgICAgICAgIHRvIGJvdHRvbSxcclxuICAgICAgICAgICAgICAgICAgICByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwKSAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuNykgNTUlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhcigtLWlvbi1jb2xvci1saWdodCkgNjUlXHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnBhcmFncmFwaCB7XHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubGFuZ3VhZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIC5mbGFnLWljb24ge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgLmZsYWctaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hdmlnYXRpb24ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAuc3dpcGVyLWJ1bGxldHMge1xyXG4gICAgICAgICAgbWFyZ2luOiAzMHB4IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgNnB4O1xyXG4gICAgICAgICAgICB3aWR0aDogN3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDdweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcclxuXHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/pages/welcome/components/welcome/welcome.component.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/welcome/components/welcome/welcome.component.ts ***!
  \*******************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_welcome_welcome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/welcome/welcome.service */ "./src/pages/welcome/services/welcome/welcome.service.ts");







/**
 * welcome screen with walkthrough on using the app and access to auth module
 */
var WelcomeComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WelcomeComponent, _super);
    function WelcomeComponent(injector, storage, appService, welcomeService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.storage = storage;
        _this.appService = appService;
        _this.welcomeService = welcomeService;
        /** stores slides array from service */
        _this.slides = [];
        /** save active index of slides */
        _this.currentIndex = 0;
        /** stores language data */
        _this.language = null;
        return _this;
    }
    /** get slides and languages data from services
     * set selected language from device local storage or default to gb
     */
    WelcomeComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var lang;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.slides = this.welcomeService.slides;
                        this.languages = this.welcomeService.languages;
                        return [4 /*yield*/, this.storage.get('language')];
                    case 1:
                        lang = _a.sent();
                        if (lang) {
                            this.language = this.languages.find(function (item) { return item.code === lang; });
                        }
                        else {
                            this.language = this.languages[0];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** on slide changes, update currentIndex property, this will update our custom navigation bullets */
    WelcomeComponent.prototype.slideChanged = function () {
        var _this = this;
        this.slider.getActiveIndex().then(function (index) {
            _this.currentIndex = index;
        });
    };
    /** open an action sheet with language options */
    WelcomeComponent.prototype.openLanguage = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheetCtrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant('welcome-component.select-lang'),
                            buttons: [
                                {
                                    text: this.translate.instant('welcome-component.english'),
                                    handler: function () {
                                        _this.changeLanguage('gb');
                                    }
                                },
                                {
                                    text: this.translate.instant('welcome-component.spanish'),
                                    handler: function () {
                                        _this.changeLanguage('es');
                                    }
                                },
                                {
                                    text: this.translate.instant('welcome-component.french'),
                                    handler: function () {
                                        _this.changeLanguage('fr');
                                    }
                                },
                                {
                                    text: this.translate.instant('other.close'),
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
    /**
     * change language based on actionsheet selection
     */
    WelcomeComponent.prototype.changeLanguage = function (lang) {
        this.appService.langConfig(lang);
        this.language = this.languages.find(function (data) { return data.code === lang; });
    };
    WelcomeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
        { type: src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
        { type: _services_welcome_welcome_service__WEBPACK_IMPORTED_MODULE_6__["WelcomeService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"], null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonSlides"])
    ], WelcomeComponent.prototype, "slider", void 0);
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/pages/welcome/components/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.scss */ "./src/pages/welcome/components/welcome/welcome.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"],
            src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"],
            _services_welcome_welcome_service__WEBPACK_IMPORTED_MODULE_6__["WelcomeService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"]));



/***/ }),

/***/ "./src/pages/welcome/services/welcome/welcome.service.ts":
/*!***************************************************************!*\
  !*** ./src/pages/welcome/services/welcome/welcome.service.ts ***!
  \***************************************************************/
/*! exports provided: WelcomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeService", function() { return WelcomeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");



/**
 * set data for languages and slides in welcome component
 */
var WelcomeService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](WelcomeService, _super);
    function WelcomeService(injector) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        /** set app language options this property is used by component to set language dropdown */
        _this._languages = [
            {
                icon: 'assets/images/flags/gb.svg',
                text: _this.translate.instant('welcome-component.english'),
                code: 'gb'
            },
            {
                icon: 'assets/images/flags/es.svg',
                text: _this.translate.instant('welcome-component.spanish'),
                code: 'es'
            },
            {
                icon: 'assets/images/flags/fr.svg',
                text: _this.translate.instant('welcome-component.french'),
                code: 'fr'
            }
        ];
        /** set welcome slides data */
        _this._slides = [
            {
                image: '../assets/images/logo.png',
                title: 'welcome-component.slide-1-title',
                paragraph: 'welcome-component.slide-1-paragraph'
            },
            {
                image: '../assets/images/welcome/profile.jpg',
                title: 'welcome-component.slide-2-title',
                paragraph: 'welcome-component.slide-2-paragraph'
            },
            {
                image: '../assets/images/welcome/feed.jpeg',
                title: 'welcome-component.slide-3-title',
                paragraph: 'welcome-component.slide-3-paragraph'
            },
            {
                image: '../assets/images/welcome/friends.jpg',
                title: 'welcome-component.slide-4-title',
                paragraph: 'welcome-component.slide-4-paragraph'
            },
            {
                image: '../assets/images/welcome/chat.jpg',
                title: 'welcome-component.slide-5-title',
                paragraph: 'welcome-component.slide-5-paragraph'
            }
        ];
        return _this;
    }
    Object.defineProperty(WelcomeService.prototype, "languages", {
        /** public getter to make language property accessible */
        get: function () {
            return this._languages;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WelcomeService.prototype, "slides", {
        /** public getter to make slides property accessible */
        get: function () {
            return this._slides;
        },
        enumerable: true,
        configurable: true
    });
    WelcomeService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
    ]; };
    WelcomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
    ], WelcomeService);
    return WelcomeService;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"]));



/***/ }),

/***/ "./src/pages/welcome/welcome.module.ts":
/*!*********************************************!*\
  !*** ./src/pages/welcome/welcome.module.ts ***!
  \*********************************************/
/*! exports provided: WelcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeModule", function() { return WelcomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/pages/welcome/components/welcome/welcome.component.ts");






var WelcomeModule = /** @class */ (function () {
    function WelcomeModule() {
    }
    WelcomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
                    },
                ]),
            ],
        })
    ], WelcomeModule);
    return WelcomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module-es5.js.map