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

module.exports = ":host ion-content .content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 100%;\n  padding: 0 10px;\n}\n:host ion-content .content-wrapper .slides-content {\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host ion-content .content-wrapper .slides-content ion-slides {\n  background: var(--ion-color-light);\n  width: 100%;\n  height: 95%;\n  border-radius: 12px;\n  overflow: hidden;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .image {\n  background-image: url('symbol.png');\n  background-size: auto;\n  background-repeat: no-repeat;\n  background-position: center;\n  height: 300px;\n  width: -35%;\n  height: -35%;\n  border-radius: 8px;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .image:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: -webkit-gradient(linear, left top, left bottom, color-stop(0, rgba(var(--ion-color-light-rgb), 0)), color-stop(55%, rgba(var(--ion-color-light-rgb), 0.7)), color-stop(65%, var(--ion-color-light)));\n  background-image: linear-gradient(to bottom, rgba(var(--ion-color-light-rgb), 0) 0, rgba(var(--ion-color-light-rgb), 0.7) 55%, var(--ion-color-light) 65%);\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .detail {\n  z-index: 2;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  padding: 0 20px;\n  text-align: left;\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .detail .title {\n  margin-top: 20px;\n  font-size: 24px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n:host ion-content .content-wrapper .slides-content ion-slides ion-slide .slide-wrapper .detail .paragraph {\n  font-size: 15px;\n  padding: 10px 0;\n  color: var(--ion-color-medium);\n}\n:host ion-content .content-wrapper .language {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 12px;\n  color: var(--ion-color-medium);\n  padding-top: 10px;\n  margin: 10px;\n}\n:host ion-content .content-wrapper .language .flag-icon {\n  color: var(--ion-color-primary);\n  padding-left: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host ion-content .content-wrapper .language .flag-icon .flag-img {\n  width: 15px;\n  height: 15px;\n  margin-right: 10px;\n}\n:host ion-content .content-wrapper .navigation {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host ion-content .content-wrapper .navigation .swiper-bullets {\n  margin: 30px 0;\n  display: -webkit-box;\n  display: flex;\n}\n:host ion-content .content-wrapper .navigation .swiper-bullets span {\n  margin: 0 6px;\n  width: 7px;\n  height: 7px;\n  border-radius: 100%;\n  background: var(--ion-color-medium);\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n:host ion-content .content-wrapper .navigation .swiper-bullets span.active {\n  background: var(--ion-color-primary);\n  width: 14px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9Eb2N1bWVudHMvc2luZW8zL3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvd2VsY29tZS9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy93ZWxjb21lL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNETjtBREdNO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RSO0FER1E7RUFDRSxrQ0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0RWO0FER1U7RUFDRSx3QkFBQTtVQUFBLHVCQUFBO0FDRFo7QURFWTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FkO0FEQ2M7RUFDRSxtQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDQ2hCO0FEQ2dCO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLHNOQUFBO0VBQUEsMEpBQUE7QUNBbEI7QURVYztFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUmhCO0FEVWdCO0VBQ0UsZ0JBQUE7RUFFQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ1RsQjtBRFlnQjtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNWbEI7QURrQk07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQ2hCUjtBRGlCUTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDZlY7QURnQlU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDZFo7QURtQk07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ2pCUjtBRG1CUTtFQUNFLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNqQlY7QURtQlU7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtBQ2pCWjtBRG1CWTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDakJkIiwiZmlsZSI6InNyYy9wYWdlcy93ZWxjb21lL2NvbXBvbmVudHMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuXHJcbiAgICAgIC5zbGlkZXMtY29udGVudCB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGlvbi1zbGlkZXMge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA5NSU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICBpb24tc2xpZGUge1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgLnNsaWRlLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAuaW1hZ2Ugey8va2ptXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvd2VsY29tZS9zeW1ib2wucG5nJyk7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAtMzUlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAtMzUlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG5cclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAvL+q3uOudvOuNsOydtOyFmFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgICAgICAgICAgICAgdG8gYm90dG9tLFxyXG4gICAgICAgICAgICAgICAgICAgIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDApIDAsXHJcbiAgICAgICAgICAgICAgICAgICAgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC43KSA1NSUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KSA2NSVcclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmRldGFpbCB7XHJcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucGFyYWdyYXBoIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5sYW5ndWFnZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgLmZsYWctaWNvbiB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAuZmxhZy1pbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAubmF2aWdhdGlvbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5zd2lwZXItYnVsbGV0cyB7XHJcbiAgICAgICAgICBtYXJnaW46IDMwcHggMDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA2cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogN3B4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuc2xpZGVzLWNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuc2xpZGVzLWNvbnRlbnQgaW9uLXNsaWRlcyB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDk1JTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLnNsaWRlcy1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zbGlkZXMtY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuc2xpZGUtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zbGlkZXMtY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuc2xpZGUtd3JhcHBlciAuaW1hZ2Uge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3dlbGNvbWUvc3ltYm9sLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAtMzUlO1xuICBoZWlnaHQ6IC0zNSU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLnNsaWRlcy1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5zbGlkZS13cmFwcGVyIC5pbWFnZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMCkgMCwgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMC43KSA1NSUsIHZhcigtLWlvbi1jb2xvci1saWdodCkgNjUlKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLnNsaWRlcy1jb250ZW50IGlvbi1zbGlkZXMgaW9uLXNsaWRlIC5zbGlkZS13cmFwcGVyIC5kZXRhaWwge1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgcGFkZGluZzogMCAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuc2xpZGVzLWNvbnRlbnQgaW9uLXNsaWRlcyBpb24tc2xpZGUgLnNsaWRlLXdyYXBwZXIgLmRldGFpbCAudGl0bGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5zbGlkZXMtY29udGVudCBpb24tc2xpZGVzIGlvbi1zbGlkZSAuc2xpZGUtd3JhcHBlciAuZGV0YWlsIC5wYXJhZ3JhcGgge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAubGFuZ3VhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmxhbmd1YWdlIC5mbGFnLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5sYW5ndWFnZSAuZmxhZy1pY29uIC5mbGFnLWltZyB7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLm5hdmlnYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLm5hdmlnYXRpb24gLnN3aXBlci1idWxsZXRzIHtcbiAgbWFyZ2luOiAzMHB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5uYXZpZ2F0aW9uIC5zd2lwZXItYnVsbGV0cyBzcGFuIHtcbiAgbWFyZ2luOiAwIDZweDtcbiAgd2lkdGg6IDdweDtcbiAgaGVpZ2h0OiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC5uYXZpZ2F0aW9uIC5zd2lwZXItYnVsbGV0cyBzcGFuLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgd2lkdGg6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_welcome_welcome_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/welcome/welcome.service */ "./src/pages/welcome/services/welcome/welcome.service.ts");







/**
 * welcome screen with walkthrough on using the app and access to auth module
 */
let WelcomeComponent = class WelcomeComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"] {
    constructor(injector, storage, appService, welcomeService) {
        super(injector);
        this.injector = injector;
        this.storage = storage;
        this.appService = appService;
        this.welcomeService = welcomeService;
        /** stores slides array from service */
        this.slides = [];
        /** save active index of slides */
        this.currentIndex = 0;
        /** stores language data */
        this.language = null;
    }
    /** get slides and languages data from services
     * set selected language from device local storage or default to gb
     */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.slides = this.welcomeService.slides;
            this.languages = this.welcomeService.languages;
            const lang = yield this.storage.get('language');
            if (lang) {
                this.language = this.languages.find((item) => item.code === lang);
            }
            else {
                this.language = this.languages[0];
            }
        });
    }
    /** on slide changes, update currentIndex property, this will update our custom navigation bullets */
    slideChanged() {
        this.slider.getActiveIndex().then((index) => {
            this.currentIndex = index;
        });
    }
    /** open an action sheet with language options */
    openLanguage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheetCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('welcome-component.select-lang'),
                buttons: [
                    {
                        text: this.translate.instant('welcome-component.english'),
                        handler: () => {
                            this.changeLanguage('gb');
                        }
                    },
                    {
                        text: this.translate.instant('welcome-component.spanish'),
                        handler: () => {
                            this.changeLanguage('es');
                        }
                    },
                    {
                        text: this.translate.instant('welcome-component.french'),
                        handler: () => {
                            this.changeLanguage('fr');
                        }
                    },
                    {
                        text: this.translate.instant('other.close'),
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheetCtrl.present();
        });
    }
    /**
     * change language based on actionsheet selection
     */
    changeLanguage(lang) {
        this.appService.langConfig(lang);
        this.language = this.languages.find((data) => data.code === lang);
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"] },
    { type: _services_welcome_welcome_service__WEBPACK_IMPORTED_MODULE_6__["WelcomeService"] }
];
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");



/**
 * set data for languages and slides in welcome component
 */
let WelcomeService = class WelcomeService extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        /** set app language options this property is used by component to set language dropdown */
        this._languages = [
            {
                icon: 'assets/images/flags/gb.svg',
                text: this.translate.instant('welcome-component.english'),
                code: 'gb'
            },
            {
                icon: 'assets/images/flags/es.svg',
                text: this.translate.instant('welcome-component.spanish'),
                code: 'es'
            },
            {
                icon: 'assets/images/flags/fr.svg',
                text: this.translate.instant('welcome-component.french'),
                code: 'fr'
            }
        ];
        /** set welcome slides data */
        this._slides = [
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
    }
    /** public getter to make language property accessible */
    get languages() {
        return this._languages;
    }
    /** public getter to make slides property accessible */
    get slides() {
        return this._slides;
    }
};
WelcomeService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
WelcomeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], WelcomeService);



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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/pages/welcome/components/welcome/welcome.component.ts");






let WelcomeModule = class WelcomeModule {
};
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



/***/ })

}]);
//# sourceMappingURL=pages-welcome-welcome-module-es2015.js.map