(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invite-group-invite-group-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/invite-group/components/invite-group.page.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/invite-group/components/invite-group.page.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\n  <ion-buttons slot=\"start\">\n    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>\n  </ion-buttons>\n</ion-toolbar>\n\n<ion-content scrollX=\"false\" scrollY=\"false\">\n  \n<!-- <img src=\"../../../../assets/images/new/Background1.jpg\" id=\"bg\" alt=\"\"> -->\n\n  <div class=\"content-wrapper\">\n    <div class=\"header no-border has-toolbar\">\n      <div class=\"title\">\n        Invite Chat\n      </div>\n      <div class=\"options\">\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"openSearch = !openSearch\">\n          <ion-icon mode=\"md\" name=\"search\"></ion-icon>\n        </ion-button>\n        </div>\n    </div>\n\n    <div class=\"wrapper\" *ngIf=\"groupedPeople.length > 0\">\n      <div class=\"content-scroll\" #content>\n        <div class=\"group\" *ngFor=\"let group of groupedPeople\">\n          \n          <div class=\"contact\" *ngFor=\"let contact of group.people; let i = index\">\n            <div class=\"image\" [image-loader]=\"contact.photoURL\"></div>\n            <div class=\"detail\">\n              <div class=\"name\">{{ contact.displayName }}</div>\n            </div>\n\n            <div class=\"more\">\n              <ion-button *ngIf=\"isFriend(contact.uid)\" size=\"small\" fill=\"clear\" shape=\"round\" (click)=\"addgroup\">\n                <ion-checkbox></ion-checkbox>\n              </ion-button>\n              <ion-button *ngIf=\"!isFriend(contact.uid)\" class=\"follow-btn\" size=\"small\" shape=\"round\" (click)=\"manage(contact)\">\n                {{ 'people-component.follow' | translate }}\n              </ion-button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"link-alpha\">\n        <li class=\"alpha-link-item\" *ngFor=\"let item of alpha\" (click)=\"scrollTo(item)\">{{ item }}</li>\n      </div>\n    </div>\n    <app-no-data *ngIf=\"groupedPeople.length === 0\"> </app-no-data>\n  </div>\n</ion-content>\n\n<app-spinner *ngIf=\"loading\"></app-spinner>\n"

/***/ }),

/***/ "./src/app/invite-group/components/invite-group.page.scss":
/*!****************************************************************!*\
  !*** ./src/app/invite-group/components/invite-group.page.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .content-wrapper .header .title {\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .content-wrapper .header .title small {\n  font-size: 50%;\n  margin-left: 10px;\n}\n:host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: 100% !important;\n  width: 100%;\n  overflow: auto;\n}\n:host .content-wrapper .wrapper .content-scroll .group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .content-wrapper .wrapper .content-scroll .group .title {\n  font-size: 22px;\n  font-weight: 600;\n  padding: 10px 0 5px 30px;\n  text-transform: uppercase;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact {\n  margin: 5px 20px 5px 0;\n  display: -webkit-box;\n  display: flex;\n  padding: 5px 10px 5px 15px;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .image {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-size: cover !important;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail {\n  padding: 0 10px 0 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .name {\n  font-size: 16px;\n  font-weight: 500;\n  padding: 0 0 4px 0;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .job {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n  margin-bottom: 2px;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .city,\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .country {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .country {\n  color: var(--ion-color-primary-shade);\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .more .follow-btn {\n  width: 55px;\n  font-size: 10px;\n}\n:host .content-wrapper .wrapper .link-alpha {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-right: 15px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .content-wrapper .wrapper .link-alpha .alpha-link-item {\n  list-style-type: none;\n  font-size: 11px;\n  margin: 0 0 1px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9Eb2N1bWVudHMvc2luZW8yL3NpbmVvX21lc3Nlbmdlci9zcmMvYXBwL2ludml0ZS1ncm91cC9jb21wb25lbnRzL2ludml0ZS1ncm91cC5wYWdlLnNjc3MiLCJzcmMvYXBwL2ludml0ZS1ncm91cC9jb21wb25lbnRzL2ludml0ZS1ncm91cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxnQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0FOO0FERVE7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0FDQVY7QURFVTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0FaO0FES007RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNIUjtBRElRO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0ZWO0FESVU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNGWjtBRElZO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtBQ0ZkO0FES1k7RUFDRSxzQkFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDBCQUFBO0FDSGQ7QURLYztFQUNFLFdBQUE7RUFDYyxZQUFBO0VBQ0Esa0JBQUE7RUFDZCxpQ0FBQTtBQ0hoQjtBRE1jO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNKaEI7QURNZ0I7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0psQjtBRFFnQjtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUNObEI7QURTZ0I7O0VBRUUsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUNQbEI7QURVZ0I7RUFDRSxxQ0FBQTtBQ1JsQjtBRGFnQjtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDWGxCO0FEa0JRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ2hCVjtBRGlCVTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDZloiLCJmaWxlIjoic3JjL2FwcC9pbnZpdGUtZ3JvdXAvY29tcG9uZW50cy9pbnZpdGUtZ3JvdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLmhlYWRlciB7XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG4gICAgICAgICAgc21hbGwge1xuICAgICAgICAgICAgZm9udC1zaXplOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgXG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICBcbiAgICAgICAgICAuZ3JvdXAge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIFxuICAgICAgICAgICAgLnRpdGxlIHsgXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDVweCAzMHB4O1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMjBweCA1cHggMDtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDE1cHg7XG4gIFxuICAgICAgICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgLmRldGFpbCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTVweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgZmxleDogMTtcbiAgXG4gICAgICAgICAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA0cHggMDtcbiAgICAgICAgICAgICAgICB9XG4gIFxuICBcbiAgICAgICAgICAgICAgICAuam9iIHtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgICAgICAgICAgfVxuICBcbiAgICAgICAgICAgICAgICAuY2l0eSxcbiAgICAgICAgICAgICAgICAuY291bnRyeSB7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgICAgLmNvdW50cnkge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgXG4gICAgICAgICAgICAgIC5tb3JlIHtcbiAgICAgICAgICAgICAgICAuZm9sbG93LWJ0biB7XG4gICAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcbiAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgXG4gICAgICAgIC5saW5rLWFscGhhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgLmFscGhhLWxpbmstaXRlbSB7XG4gICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxcHggMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgIiwiOmhvc3QgLmNvbnRlbnQtd3JhcHBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5oZWFkZXIgLnRpdGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmhlYWRlciAudGl0bGUgc21hbGwge1xuICBmb250LXNpemU6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCAudGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHggMCA1cHggMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCAuY29udGFjdCB7XG4gIG1hcmdpbjogNXB4IDIwcHggNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxNXB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmdyb3VwIC5jb250YWN0IC5pbWFnZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmdyb3VwIC5jb250YWN0IC5kZXRhaWwge1xuICBwYWRkaW5nOiAwIDEwcHggMCAxNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmdyb3VwIC5jb250YWN0IC5kZXRhaWwgLm5hbWUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDAgMCA0cHggMDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCAuY29udGFjdCAuZGV0YWlsIC5qb2Ige1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmdyb3VwIC5jb250YWN0IC5kZXRhaWwgLmNpdHksXG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLmNvbnRhY3QgLmRldGFpbCAuY291bnRyeSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmdyb3VwIC5jb250YWN0IC5kZXRhaWwgLmNvdW50cnkge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktc2hhZGUpO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmdyb3VwIC5jb250YWN0IC5tb3JlIC5mb2xsb3ctYnRuIHtcbiAgd2lkdGg6IDU1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmxpbmstYWxwaGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAubGluay1hbHBoYSAuYWxwaGEtbGluay1pdGVtIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBmb250LXNpemU6IDExcHg7XG4gIG1hcmdpbjogMCAwIDFweCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/invite-group/components/invite-group.page.ts":
/*!**************************************************************!*\
  !*** ./src/app/invite-group/components/invite-group.page.ts ***!
  \**************************************************************/
/*! exports provided: InviteGroupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteGroupPage", function() { return InviteGroupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/messages/services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services_invite_group_invite_group_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/invite-group/invite-group.service */ "./src/app/invite-group/services/invite-group/invite-group.service.ts");








var InviteGroupPage = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InviteGroupPage, _super);
    function InviteGroupPage(injector, authService, messageService, peopleService, commonService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.messageService = messageService;
        _this.peopleService = peopleService;
        _this.commonService = commonService;
        _this.getSelection = false;
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
    InviteGroupPage.prototype.ngOnInit = function () {
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
    InviteGroupPage.prototype.openProfileFromUrl = function () {
        var _this = this;
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe(function (param) {
            if (param && param.id) {
                _this.open(param.id);
            }
        }));
    };
    /** search list of users by name and regroup into alphabet categories */
    InviteGroupPage.prototype.onSearch = function (val) {
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
    InviteGroupPage.prototype.showList = function (index) {
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
    InviteGroupPage.prototype.manage = function (friend) {
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
    InviteGroupPage.prototype.isFriend = function (fid) {
        return Object(util__WEBPACK_IMPORTED_MODULE_6__["isArray"])(this.friends) && this.friends.includes(fid);
    };
    /** scroll user to user group category */
    InviteGroupPage.prototype.scrollTo = function (item) {
        var element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    };
    InviteGroupPage.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"] },
        { type: _services_invite_group_invite_group_service__WEBPACK_IMPORTED_MODULE_7__["InviteGroupService"] },
        { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InviteGroupPage.prototype, "content", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('callNumber', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], InviteGroupPage.prototype, "callNumber", void 0);
    InviteGroupPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invite-group',
            template: __webpack_require__(/*! raw-loader!./invite-group.page.html */ "./node_modules/raw-loader/index.js!./src/app/invite-group/components/invite-group.page.html"),
            styles: [__webpack_require__(/*! ./invite-group.page.scss */ "./src/app/invite-group/components/invite-group.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_3__["MessagesService"],
            _services_invite_group_invite_group_service__WEBPACK_IMPORTED_MODULE_7__["InviteGroupService"],
            src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]])
    ], InviteGroupPage);
    return InviteGroupPage;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"]));



/***/ }),

/***/ "./src/app/invite-group/invite-group.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/invite-group/invite-group.module.ts ***!
  \*****************************************************/
/*! exports provided: InviteGroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteGroupPageModule", function() { return InviteGroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_invite_group_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/invite-group.page */ "./src/app/invite-group/components/invite-group.page.ts");








var routes = [
    {
        path: '',
        component: _components_invite_group_page__WEBPACK_IMPORTED_MODULE_7__["InviteGroupPage"]
    }
];
var InviteGroupPageModule = /** @class */ (function () {
    function InviteGroupPageModule() {
    }
    InviteGroupPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ],
            declarations: [_components_invite_group_page__WEBPACK_IMPORTED_MODULE_7__["InviteGroupPage"]]
        })
    ], InviteGroupPageModule);
    return InviteGroupPageModule;
}());



/***/ }),

/***/ "./src/app/invite-group/services/invite-group/invite-group.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/invite-group/services/invite-group/invite-group.service.ts ***!
  \****************************************************************************/
/*! exports provided: InviteGroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteGroupService", function() { return InviteGroupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");









/**
 * crud methods to interact with firebase cloud store regarding users
 */
var InviteGroupService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](InviteGroupService, _super);
    function InviteGroupService(injector, callNumber, authService, firestoreService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.callNumber = callNumber;
        _this.authService = authService;
        _this.firestoreService = firestoreService;
        _this.friends = [];
        return _this;
    }
    Object.defineProperty(InviteGroupService.prototype, "alpha", {
        /** get alphabets A to Z */
        get: function () {
            var a = [];
            var i = 'A'.charCodeAt(0);
            var j = 'Z'.charCodeAt(0);
            for (; i <= j; ++i) {
                a.push(String.fromCharCode(i));
            }
            return a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InviteGroupService.prototype, "views", {
        /** get tabbed views detail */
        get: function () {
            return [
                {
                    id: 0,
                    name: 'All',
                    active: true,
                    event: function () { }
                },
                {
                    id: 1,
                    name: 'Friends',
                    event: function () { }
                }
            ];
        },
        enumerable: true,
        configurable: true
    });
    /** sort and group people by first letter of their name and return an array of letter
     * and then array of users with that first letter of display name
     */
    InviteGroupService.prototype.groupPeople = function (people) {
        var sortedContacts = people.sort(function (a, b) {
            return a.displayName.toLowerCase() > b.displayName.toLowerCase()
                ? 1
                : b.displayName.toLowerCase() > a.displayName.toLowerCase()
                    ? -1
                    : 0;
        });
        var currentLetter = false;
        var currentContacts = [];
        var groupedPeople = [];
        sortedContacts.forEach(function (value) {
            if (value.displayName.charAt(0).toString() !== currentLetter) {
                currentLetter = value.displayName.charAt(0);
                var newGroup = {
                    letter: currentLetter,
                    people: []
                };
                currentContacts = newGroup.people;
                groupedPeople.push(newGroup);
            }
            currentContacts.push(value);
        });
        return groupedPeople;
    };
    /** get users from users collection, remove current user from list */
    InviteGroupService.prototype.getPeople = function (uid) {
        return this.firestoreService.colWithIds$("users").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (users) {
            return users.filter(function (user) { return user.uid !== uid; });
        }));
    };
    /** get a single user by id and return as promise */
    InviteGroupService.prototype.getPerson = function (uid) {
        return this.firestoreService
            .doc$("users/" + uid)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .toPromise();
    };
    /** get friends ids from friends collection */
    InviteGroupService.prototype.getFriendIds = function (uid) {
        var _this = this;
        return this.firestoreService.doc$("friends/" + uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (friends) {
            _this.friends = friends.friendIds;
            return friends.friendIds;
        }));
    };
    /** get friends data from friends collection. friends collection only stores id so get user object for each id using switch map */
    InviteGroupService.prototype.getFriends = function (uid) {
        var _this = this;
        return this.firestoreService.doc$("friends/" + uid).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_friend) {
            var reads = [];
            if (_friend.friendIds.length > 0) {
                _friend.friendIds.forEach(function (item) {
                    reads.push(_this.firestoreService.doc$("users/" + item));
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(reads);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (friends) {
            return friends;
        }));
    };
    /** get followers ids from friends where friendsIds array contains current users uid */
    InviteGroupService.prototype.getFollowersIds = function (uid) {
        return this.firestoreService
            .colWithIds$("friends", function (ref) { return ref.where('friendIds', 'array-contains', uid); })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (friends) {
            return friends;
        }));
    };
    /** get followers data from friends where friendsIds array contains current users uid
     * friends collection only stores id so get user object for each id using switch map
     */
    InviteGroupService.prototype.getFollowers = function (uid) {
        var _this = this;
        return this.firestoreService
            .colWithIds$("friends", function (ref) { return ref.where('friendIds', 'array-contains', uid); })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (_friend) {
            var reads = [];
            if (_friend.length > 0) {
                _friend.forEach(function (item) {
                    reads.push(_this.firestoreService.doc$("users/" + item.id));
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(reads);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([]);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (friends) {
            return friends;
        }));
    };
    /** follow user by creating/updating friendsIds in friends collection */
    InviteGroupService.prototype.follow = function (fid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uid;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        uid = (_a.sent()).uid;
                        return [4 /*yield*/, this.firestoreService.set("friends/" + uid, {
                                friendIds: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayUnion(fid)
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /** unfollow user by removing friendsIds in friends collection */
    InviteGroupService.prototype.unfollow = function (fid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uid;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        uid = (_a.sent()).uid;
                        return [4 /*yield*/, this.firestoreService.update("friends/" + uid, {
                                friendIds: firebase_app__WEBPACK_IMPORTED_MODULE_3__["firestore"].FieldValue.arrayRemove(fid)
                            })];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    InviteGroupService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"] }
    ]; };
    InviteGroupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_8__["FirestoreService"]])
    ], InviteGroupService);
    return InviteGroupService;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_7__["Extender"]));



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");








/**
 * crud methods to interact with firebase cloud store regarding messaging
 */
var MessagesService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MessagesService, _super);
    function MessagesService(injector, authService, firestoreService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.firestoreService = firestoreService;
        return _this;
    }
    /** get messages that contain the users uid in participantsId property, check if message is flagged as archived
     * for each message get messages recipient and get their details from users collection. return data
     */
    MessagesService.prototype.getMessages = function (uid, archieved) {
        var _this = this;
        if (archieved === void 0) { archieved = false; }
        return this.firestoreService
            .colWithIds$('messages', function (ref) {
            return ref.where('participantsId', 'array-contains', uid).where('isArchieved', '==', archieved);
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (data) {
            var reads$ = [];
            if (data.length > 0) {
                data.forEach(function (msg) {
                    reads$.push(_this.getMessage(msg.id));
                });
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(reads$);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
            return data;
        }));
    };
    /** get message and their participants information */
    MessagesService.prototype.getMessage = function (id) {
        var _this = this;
        var data;
        var reads$ = [];
        return this.firestoreService.doc$("messages/" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (msg) {
            data = msg;
            msg.participantsId.forEach(function (i) {
                reads$.push(_this.firestoreService.doc$("users/" + i));
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(reads$);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (joins) {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, data, { participants: joins });
        }));
    };
    /** update message */
    MessagesService.prototype.updateMessage = function (message) {
        return this.firestoreService.update("messages/" + message.id, message);
    };
    /** delete message */
    MessagesService.prototype.deleteMessage = function (message) {
        return this.firestoreService.delete("messages/" + message.id);
    };
    /** delete collection of messages */
    MessagesService.prototype.deleteAllMessages = function (batch) {
        return this.firestoreService.deleteCollection("messages", batch);
    };
    /** start chat with a user by first checking if a message already exists with the users id,
     * if no message exists, create one,
     * if message exists, navigate to chat modal
     */
    MessagesService.prototype.startChat = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var myaccount;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        myaccount = _a.sent();
                        this.firestoreService
                            .colWithIds$('messages', function (ref) {
                            return ref.where('participantsId', 'array-contains', user.uid);
                        })
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (data) {
                            var temp = [];
                            data.forEach(function (element) {
                                element.participantsId.forEach(function (part) {
                                    if (part == myaccount.uid) {
                                        temp.push(element);
                                    }
                                });
                            });
                            return temp;
                        }))
                            .subscribe(function (data) {
                            var message = data[0];
                            if (!!message) {
                                _this.goto(_this.routes.messages + "/" + message.id);
                            }
                            else {
                                _this.createMessage(user);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /** delete a message in chat */
    MessagesService.prototype.deleteChat = function (message, data) {
        return this.firestoreService.update("messages/" + message.id, {
            messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayRemove(data)
        });
    };
    /** send a message */
    MessagesService.prototype.send = function (message, data) {
        delete message.participants;
        return this.firestoreService.update("messages/" + message.id, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, message, { messages: firebase_app__WEBPACK_IMPORTED_MODULE_2__["firestore"].FieldValue.arrayUnion(data) }));
    };
    /** create a message with participants and default messages property to empty array */
    MessagesService.prototype.createMessage = function (user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var uid;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        uid = (_a.sent()).uid;
                        this.firestoreService.add('messages', {
                            participantsId: [user.uid, uid],
                            messages: [],
                            isArchieved: false
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    MessagesService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] }
    ]; };
    MessagesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"]])
    ], MessagesService);
    return MessagesService;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__["Extender"]));



/***/ })

}]);
//# sourceMappingURL=invite-group-invite-group-module-es5.js.map