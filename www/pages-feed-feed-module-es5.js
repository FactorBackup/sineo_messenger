(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-feed-feed-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed-add/feed-add.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/feed/components/feed-add/feed-add.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"content-wrapper\" *ngIf=\"currentUser && feed\">\r\n    <div class=\"author\">\r\n      <div class=\"image\" [image-loader]=\"currentUser.photoURL\"></div>\r\n      <div class=\"details\">\r\n        <div class=\"name\">{{ currentUser.displayName }}</div>\r\n        <div class=\"publish-date\">{{ currentUser.email }}</div>\r\n      </div>\r\n      <div class=\"option\">\r\n        <ion-button fill=\"clear\" color=\"medium\" size=\"small\" (click)=\"closeModal()\">\r\n          <ion-icon name=\"close\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"input-wrapper light fill\" *ngIf=\"more\">\r\n        <textarea\r\n          placeholder=\"{{ 'feed-add-component.title-label' | translate }}\"\r\n          autosize\r\n          maxRows=\"3\"\r\n          name=\"title\"\r\n          #title=\"ngModel\"\r\n          [(ngModel)]=\"feed.title\"\r\n        ></textarea>\r\n      </div>\r\n\r\n      <div class=\"input-wrapper light fill\" *ngIf=\"more\">\r\n        <textarea\r\n          placeholder=\"{{ 'feed-add-component.subtitle-label' | translate }}\"\r\n          autosize\r\n          maxRows=\"3\"\r\n          name=\"subtitle\"\r\n          #subtitle=\"ngModel\"\r\n          [(ngModel)]=\"feed.subtitle\"\r\n        ></textarea>\r\n      </div>\r\n\r\n      <div class=\"input-wrapper light fill\">\r\n        <div class=\"row\">\r\n          <div class=\"prefix\"><span class=\"lnr lnr-bubble\"></span></div>\r\n          <textarea\r\n            placeholder=\"{{ 'feed-add-component.content-label' | translate }}\"\r\n            autosize\r\n            maxRows=\"3\"\r\n            name=\"content\"\r\n            #content=\"ngModel\"\r\n            [(ngModel)]=\"feed.content\"\r\n          ></textarea>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- image section -->\r\n      <div class=\"image-content\" *ngIf=\"images.length > 1\">\r\n        <div class=\"images\">\r\n          <div\r\n            class=\"image-item\"\r\n            *ngFor=\"let item of images; let i = index\"\r\n            [image-loader]=\"item\"\r\n            (click)=\"doMoreOnImage(item, i)\"\r\n          ></div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- action section -->\r\n      <div class=\"actions mt10\">\r\n        <div class=\"start\">\r\n          <ion-button fill=\"clear\" *ngFor=\"let item of feedOptions\" (click)=\"item.click()\">\r\n            <ion-icon src=\"assets/icons/{{ item.icon }}.svg\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n        <div class=\"end\">\r\n          <ion-button size=\"small\" shape=\"round\" (click)=\"save()\">\r\n            {{ 'feed-add-component.post-button' | translate }}\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<app-spinner *ngIf=\"loading\"></app-spinner>\r\n\r\n<!-- required for browser file upload -->\r\n<input hidden #fileInputButton type=\"file\" (change)=\"detectFiles($event)\" multiple />\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed-comment/feed-comment.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/feed/components/feed-comment/feed-comment.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-buttons>\r\n      <ion-button (click)=\"closeModal()\">\r\n        <ion-icon src=\"assets/icons/x.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'feed-comment-component.title' | translate }}\r\n      </div>\r\n      <div class=\"options\">\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"openSearch = !openSearch\">\r\n          <ion-icon mode=\"md\" name=\"search\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\">\r\n          <ion-icon mode=\"md\" name=\"more\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <app-search-bar *ngIf=\"openSearch\" (event)=\"onSearch($event)\"></app-search-bar>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\" #content>\r\n        <ng-container *ngIf=\"comments.length > 0\">\r\n          <div class=\"comment\" *ngFor=\"let item of comments\">\r\n            <div class=\"image\" [image-loader]=\"item?.user?.photoURL\"></div>\r\n            <div class=\"detail\">\r\n              <div class=\"user\">\r\n                <div class=\"name\">{{ item?.user?.displayName }}</div>\r\n                <div class=\"date\">{{ item.updatedAt?.toDate() | amTimeAgo }}</div>\r\n              </div>\r\n              <div class=\"message\">{{ item.text || 'feed-comment-component.no-comment' | translate }}</div>\r\n            </div>\r\n            <div class=\"options\" *ngIf=\"item?.user?.uid === user.uid\">\r\n              <ion-icon color=\"medium\" name=\"more\" (click)=\"openOptions(item)\"></ion-icon>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <app-no-data *ngIf=\"comments.length === 0\"></app-no-data>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar class=\"custom-form\">\r\n    <textarea\r\n      elastic-textarea=\"50\"\r\n      name=\"message\"\r\n      placeholder=\"{{ 'feed-comment-component.placeholder' | translate }}\"\r\n      [(ngModel)]=\"commentMsg\"\r\n    ></textarea>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button class=\"circle\" fill=\"clear\" color=\"primary\" (click)=\"save(commentMsg)\">\r\n        <ion-icon src=\"assets/icons/send.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed-detail/feed-detail.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/feed/components/feed-detail/feed-detail.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\r\n  <div class=\"content-wrapper\" *ngIf=\"feed && user\">\r\n    <div class=\"wrapper no-padding\">\r\n      <!-- image -->\r\n      <div class=\"image-content\" *ngIf=\"feed.images && feed.images.length === 0\">\r\n        <div class=\"menu-toolbar\">\r\n          <ion-icon name=\"close\" color=\"light\" (click)=\"closeModal()\"></ion-icon>\r\n        </div>\r\n        <div class=\"image-nav-wrapper\">\r\n          <div class=\"center\">\r\n            <img src=\"assets/images/other/no-data.png\" alt=\"empty\" width=\"200px\" />\r\n            <p>{{ 'feed-component.no-post-image' | translate }}</p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"image-content\" *ngIf=\"feed.images && feed.images.length > 0\" [image-loader]=\"feed.images[currentIndex]\">\r\n        <div class=\"menu-toolbar\">\r\n          <ion-icon name=\"close\" color=\"light\" (click)=\"closeModal()\"></ion-icon>\r\n        </div>\r\n        <div class=\"image-nav-wrapper\">\r\n          <div class=\"left\" *ngIf=\"feed.images && feed.images.length > 1\">\r\n            <ion-icon mode=\"ios\" name=\"arrow-back\" (click)=\"back()\"></ion-icon>\r\n          </div>\r\n          <div class=\"center\"></div>\r\n          <div class=\"right\" *ngIf=\"feed.images && feed.images.length > 1\">\r\n            <ion-icon mode=\"ios\" name=\"arrow-forward\" (click)=\"forward()\"></ion-icon>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- content -->\r\n      <div class=\"content\">\r\n        <div class=\"title\">{{ feed.title || 'feed-component.no-post-title' | translate }}</div>\r\n        <div class=\"subtitle\">{{ feed.subtitle || 'feed-component.no-post-subtitle' | translate }}</div>\r\n\r\n        <div class=\"author\">\r\n          <div class=\"image\" [image-loader]=\"feed.user.photoURL\"></div>\r\n          <div class=\"details\">\r\n            <div class=\"name\">{{ feed.user.displayName }}</div>\r\n            <div class=\"publish-date\">{{ feed?.createdAt?.toDate() | amTimeAgo }}</div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"paragraph\">{{ feed.content || 'feed-component.no-post-image' | translate }}</div>\r\n      </div>\r\n\r\n      <!-- actions -->\r\n      <div class=\"actions\">\r\n        <div class=\"start\">\r\n          <ion-button color=\"medium\" fill=\"clear\" (click)=\"like()\">\r\n            <ion-icon [name]=\"feed.userLiked ? 'heart' : 'heart-empty'\" [color]=\"feed.userLiked ? 'tertiary' : 'medium'\"> </ion-icon>\r\n            <small>{{ feed.likes.length > 0 ? feed.likes.length : '' }}</small>\r\n          </ion-button>\r\n\r\n          <ion-button color=\"medium\" fill=\"clear\" (click)=\"comment(feed)\">\r\n            <ion-icon name=\"chatboxes\"></ion-icon>\r\n            <small>{{ feed.comments.length ? feed.comments.length : '' }}</small>\r\n          </ion-button>\r\n          <ion-button color=\"medium\" fill=\"clear\" (click)=\"share(feed)\">\r\n            <ion-icon name=\"share-alt\"></ion-icon>\r\n            <small>{{ 'feed-component.share-button' | translate }}</small>\r\n          </ion-button>\r\n        </div>\r\n        <div class=\"end\" *ngIf=\"feed.uid === user.uid\">\r\n          <ion-button color=\"secondary\" fill=\"clear\" (click)=\"edit(feed)\">\r\n            <ion-icon name=\"create\"></ion-icon>\r\n            <small>{{ 'feed-component.edit-button' | translate }}</small>\r\n          </ion-button>\r\n\r\n          <ion-button color=\"danger\" fill=\"clear\" (click)=\"delete(feed)\">\r\n            <ion-icon name=\"trash\"></ion-icon>\r\n          </ion-button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed/feed.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/feed/components/feed/feed.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n<!-- <img src=\"../../../../assets/images/new/Background1.jpg\" id=\"bg\" alt=\"\"> -->\r\n\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'feed-component.title' | translate }}\r\n      </div>\r\n      <div class=\"options\">\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"openSearch = !openSearch\">\r\n          <ion-icon mode=\"md\" name=\"search\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"addPost()\">\r\n          <ion-icon mode=\"md\" name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <app-tab-menu [tabs]=\"views\" (event)=\"view = $event\"></app-tab-menu>\r\n    <app-search-bar *ngIf=\"openSearch\" (event)=\"onSearch($event)\"></app-search-bar>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\" #content>\r\n        <ng-container [ngSwitch]=\"view\">\r\n          <ng-container *ngSwitchCase=\"1\">\r\n            <feed-minimal *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-minimal>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"2\">\r\n            <feed-timeline *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-timeline>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"3\">\r\n            <feed-showcase *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-showcase>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"4\">\r\n            <feed-modern *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-modern>\r\n          </ng-container>\r\n          <ng-container *ngSwitchDefault>\r\n            <feed-minimal *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-minimal>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/card-views/minimal/minimal.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/card-views/minimal/minimal.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"feed && me\">\r\n  <!-- author section -->\r\n  <div class=\"author\">\r\n    <div class=\"image\" [image-loader]=\"feed.user?.photoURL\" (click)=\"clicked('profile')\"></div>\r\n    <div class=\"details\">\r\n      <div class=\"name\">{{ feed.user?.displayName }}</div>\r\n      <div class=\"publish-date\">{{ feed?.createdAt?.toDate() | amTimeAgo }}</div>\r\n    </div>\r\n    <div class=\"option\" *ngIf=\"feed.user?.uid === me.uid\">\r\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('more')\">\r\n        <ion-icon name=\"more\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- image section -->\r\n  <div class=\"image-content\" (click)=\"clicked('detail')\">\r\n    <div class=\"image-item\" [image-loader]=\"item\" *ngFor=\"let item of feed.images | slice: 0:4\"></div>\r\n  </div>\r\n\r\n  <div class=\"content\" (click)=\"clicked('detail')\">\r\n    <div class=\"title\">{{ feed.title || 'feed-component.no-post-title' | translate }}</div>\r\n    <div class=\"subtitle\">{{ (feed.content | slice: 0:70) || ('feed-component.no-post-content' | translate) }}</div>\r\n  </div>\r\n\r\n  <div class=\"actions mt10\">\r\n    <div class=\"start\">\r\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('like')\">\r\n        <ion-icon [name]=\"feed.userLiked ? 'heart' : 'heart-empty'\" [color]=\"feed.userLiked ? 'tertiary' : 'primary'\">\r\n        </ion-icon>\r\n        <small>{{ feed?.likes?.length > 0 ? feed.likes.length : '' }}</small>\r\n      </ion-button>\r\n\r\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('comment')\">\r\n        <ion-icon name=\"chatboxes\"></ion-icon>\r\n        <small>{{ feed?.comments?.length ? feed.comments.length : '' }}</small>\r\n      </ion-button>\r\n    </div>\r\n    <div class=\"end\">\r\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('share')\">\r\n        <ion-icon name=\"share-alt\"></ion-icon>\r\n        <small>{{ 'feed-component.share-button' | translate }}</small>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/card-views/modern/modern.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/card-views/modern/modern.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"feed && me\">\r\n  <div class=\"start\">\r\n    <div class=\"title\" (click)=\"clicked('detail')\">\r\n      {{ feed.title | slice: 0:50 || 'feed-component.no-post-title' | translate }}\r\n    </div>\r\n    <div class=\"content\" (click)=\"clicked('detail')\">\r\n      {{ feed.content | slice: 0:150 || 'feed-component.no-post-content' | translate }}\r\n    </div>\r\n\r\n    <div class=\"author\" (click)=\"clicked('profile')\">\r\n      <div class=\"name\">{{ feed.user.displayName }}</div>\r\n      <div class=\"publish-date\">{{ feed?.createdAt?.toDate() | amTimeAgo }}</div>\r\n    </div>\r\n\r\n    <div class=\"actions\">\r\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('like')\">\r\n        <ion-icon [name]=\"feed.userLiked ? 'heart' : 'heart-empty'\" [color]=\"feed.userLiked ? 'tertiary' : 'medium'\">\r\n        </ion-icon>\r\n        <small>{{ feed?.likes?.length > 0 ? feed.likes.length : '' }}</small>\r\n      </ion-button>\r\n\r\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('comment')\">\r\n        <ion-icon name=\"chatboxes\"></ion-icon>\r\n        <small>{{ feed?.comments?.length ? feed.comments.length : '' }}</small>\r\n      </ion-button>\r\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('share')\">\r\n        <ion-icon name=\"share-alt\"></ion-icon>\r\n        <small>{{ 'feed-component.share-button' | translate }}</small>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"end\">\r\n    <div class=\"image\" [image-loader]=\"feed.images[currentIndex]\">\r\n      <div class=\"left\" *ngIf=\"feed.images && feed.images.length > 1\">\r\n        <ion-icon mode=\"ios\" name=\"arrow-up\" (click)=\"back()\"></ion-icon>\r\n      </div>\r\n      <div class=\"center\" (click)=\"clicked('detail')\"></div>\r\n      <div class=\"right\" *ngIf=\"feed.images && feed.images.length > 1\">\r\n        <ion-icon mode=\"ios\" name=\"arrow-down\" (click)=\"forward()\"></ion-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/card-views/showcase/showcase.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/card-views/showcase/showcase.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"feed && me\">\r\n  <div class=\"image-content\" *ngIf=\"feed.images && feed.images.length > 0\" [image-loader]=\"feed.images[currentIndex]\">\r\n    <div class=\"left\" *ngIf=\"feed.images && feed.images.length > 1\">\r\n      <ion-icon mode=\"ios\" name=\"arrow-back\" (click)=\"back()\"></ion-icon>\r\n    </div>\r\n    <div class=\"center\" (click)=\"clicked('detail')\"></div>\r\n    <div class=\"right\" *ngIf=\"feed.images && feed.images.length > 1\">\r\n      <ion-icon mode=\"ios\" name=\"arrow-forward\" (click)=\"forward()\"></ion-icon>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"content\">\r\n    <div class=\"content-header\">\r\n      <div class=\"feed-info\">\r\n        <div class=\"subtitle\">{{ (feed.content | slice: 0:60) || ('feed-component.no-post-content' | translate) }}</div>\r\n      </div>\r\n      <div class=\"option\" *ngIf=\"feed.user.uid === me.uid\">\r\n        <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('more')\">\r\n          <ion-icon name=\"more\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"author\">\r\n      <div class=\"image\" [image-loader]=\"feed.user.photoURL\" (click)=\"clicked('profile')\"></div>\r\n      <div class=\"details\">\r\n        <div class=\"name\">{{ feed.user.displayName }}</div>\r\n        <div class=\"publish-date\">{{ feed?.createdAt?.toDate() | amTimeAgo }}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"actions\">\r\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('like')\">\r\n        <ion-icon [name]=\"feed.userLiked ? 'heart' : 'heart-empty'\" [color]=\"feed.userLiked ? 'tertiary' : 'medium'\">\r\n        </ion-icon>\r\n        <small>{{ feed?.likes?.length > 0 ? feed.likes.length : '' }}</small>\r\n      </ion-button>\r\n\r\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('comment')\">\r\n        <ion-icon name=\"chatboxes\"></ion-icon>\r\n        <small>{{ feed?.comments?.length ? feed.comments.length : '' }}</small>\r\n      </ion-button>\r\n      <ion-button color=\"medium\" fill=\"clear\" size=\"small\" (click)=\"clicked('share')\">\r\n        <ion-icon name=\"share-alt\"></ion-icon>\r\n        <small>{{ 'feed-component.share-button' | translate }}</small>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/card-views/timeline/timeline.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/card-views/timeline/timeline.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"feed && me\">\r\n  <!-- author section -->\r\n  <div class=\"author\">\r\n    <div class=\"image\" [image-loader]=\"feed.user.photoURL\" (click)=\"clicked('profile')\"></div>\r\n    <div class=\"details\">\r\n      <div class=\"name\">{{ feed.user.displayName }}</div>\r\n      <div class=\"publish-date\">{{ feed?.updatedAt?.toDate() | amTimeAgo }}</div>\r\n    </div>\r\n    <div class=\"option\" *ngIf=\"feed.user.uid === me.uid\">\r\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('more')\">\r\n        <ion-icon name=\"more\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- content section -->\r\n  <div class=\"content\">\r\n    <div class=\"actions mt10\">\r\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('like')\">\r\n        <ion-icon [name]=\"feed.userLiked ? 'heart' : 'heart-empty'\" [color]=\"feed.userLiked ? 'tertiary' : 'primary'\">\r\n        </ion-icon>\r\n        <small>{{ feed.likes.length > 0 ? feed.likes.length : '' }}</small>\r\n      </ion-button>\r\n\r\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('comment')\">\r\n        <ion-icon name=\"chatboxes\"></ion-icon>\r\n        <small>{{ feed.comments.length ? feed.comments.length : '' }}</small>\r\n      </ion-button>\r\n\r\n      <ion-button fill=\"clear\" size=\"small\" (click)=\"clicked('share')\">\r\n        <ion-icon name=\"share-alt\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div class=\"info-content\" (click)=\"clicked('detail')\">\r\n      <div *ngIf=\"feed.images && feed.images > 0\" class=\"image-content\" (click)=\"clicked('detail')\">\r\n        <div class=\"image-item\" [image-loader]=\"feed.images[0]\"></div>\r\n      </div>\r\n      <div class=\"title\">{{ feed.title || 'feed-component.no-post-title' | translate }}</div>\r\n      <div class=\"subtitle\">{{ (feed.content | slice: 0:70) || ('feed-component.no-post-content' | translate) }}</div>\r\n    </div>\r\n  </div>\r\n</ng-container>\r\n"

/***/ }),

/***/ "./src/pages/feed/components/feed-add/feed-add.component.scss":
/*!********************************************************************!*\
  !*** ./src/pages/feed/components/feed-add/feed-add.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: transparent;\n}\n:host ion-content .content-wrapper {\n  width: 95%;\n  height: auto;\n  margin: 20% auto;\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  box-shadow: 1px 2px 12px var(--ion-color-dark);\n}\n:host ion-content .content-wrapper .wrapper {\n  padding: 0 20px 15px;\n}\n:host .author {\n  display: -webkit-box;\n  display: flex;\n  padding: 20px;\n}\n:host .author .image {\n  width: 40px;\n  height: 40px;\n  border-radius: 6px;\n}\n:host .author .details {\n  padding: 0 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .author .details .name {\n  font-size: 15px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n:host .author .details .publish-date {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .input-wrapper {\n  border-bottom: 0.5px solid var(--ion-color-light-shade);\n}\n:host .input-wrapper .row {\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n:host .input-wrapper .row .prefix {\n  color: var(--ion-color-medium);\n  width: unset;\n  margin-top: 3px;\n}\n:host .input-wrapper:last-of-type {\n  border: 0 !important;\n}\n:host .input-wrapper textarea {\n  width: 100%;\n  resize: none;\n  outline: none;\n  border: none;\n}\n:host .image-content {\n  display: -webkit-box;\n  display: flex;\n  height: 80px;\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  margin: 10px 0;\n}\n:host .image-content .images {\n  display: -webkit-box;\n  display: flex;\n}\n:host .image-content .images .image-item {\n  width: 75px;\n  height: 99%;\n  margin: 1px;\n  height: 75px;\n  margin: 1px 2px;\n  border-radius: 6px;\n  border: 1px solid var(--ion-color-light-shade);\n}\n:host .image-content .images .delete-btn {\n  width: 75px;\n  height: 99%;\n}\n:host .actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .actions small {\n  padding-left: 5px;\n}\n:host .actions .start {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin-left: -15px;\n}\n:host .actions .start button {\n  background: transparent;\n  outline: none;\n  padding: 10px 0;\n  margin: 0 10px;\n}\n:host .actions .start button .lnr {\n  font-size: 18px;\n}\n:host .actions .end {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvcGFnZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQtYWRkL2ZlZWQtYWRkLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL2ZlZWQvY29tcG9uZW50cy9mZWVkLWFkZC9mZWVkLWFkZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlCQUFBO0FDQUo7QURFSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUNBTjtBREVNO0VBQ0Usb0JBQUE7QUNBUjtBREtFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsYUFBQTtBQ0hKO0FES0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDSE47QURNSTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNKTjtBRE1NO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUNKUjtBRE9NO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUNMUjtBRFVFO0VBQ0UsdURBQUE7QUNSSjtBRFVJO0VBQ0Usd0JBQUE7VUFBQSx1QkFBQTtBQ1JOO0FEVU07RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDUlI7QURZSTtFQUNFLG9CQUFBO0FDVk47QURhSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNYTjtBRGVFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ2JKO0FEY0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNaTjtBRGNNO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0FDWlI7QURjTTtFQUNFLFdBQUE7RUFDQSxXQUFBO0FDWlI7QURpQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDZko7QURpQkk7RUFDRSxpQkFBQTtBQ2ZOO0FEa0JJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esa0JBQUE7QUNoQk47QURrQk07RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ2hCUjtBRGtCUTtFQUNFLGVBQUE7QUNoQlY7QURxQkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNuQk4iLCJmaWxlIjoic3JjL3BhZ2VzL2ZlZWQvY29tcG9uZW50cy9mZWVkLWFkZC9mZWVkLWFkZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbjogMjAlIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMTJweCB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcblxyXG4gICAgICAud3JhcHBlciB7XHJcbiAgICAgICAgcGFkZGluZzogMCAyMHB4IDE1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hdXRob3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWxzIHtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wdWJsaXNoLWRhdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmlucHV0LXdyYXBwZXIge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuXHJcbiAgICAucm93IHtcclxuICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAucHJlZml4IHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDNweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGV4dGFyZWEge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW1hZ2UtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAuaW1hZ2VzIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgIC5pbWFnZS1pdGVtIHtcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICBoZWlnaHQ6IDk5JTtcclxuICAgICAgICBtYXJnaW46IDFweDtcclxuICAgICAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxcHggMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gICAgICB9XHJcbiAgICAgIC5kZWxldGUtYnRuIHtcclxuICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICBoZWlnaHQ6IDk5JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgc21hbGwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhcnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XHJcblxyXG4gICAgICBidXR0b24ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG5cclxuICAgICAgICAubG5yIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZW5kIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiA5NSU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyMCUgYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxMnB4IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIge1xuICBwYWRkaW5nOiAwIDIwcHggMTVweDtcbn1cbjpob3N0IC5hdXRob3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuOmhvc3QgLmF1dGhvciAuaW1hZ2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG46aG9zdCAuYXV0aG9yIC5kZXRhaWxzIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmF1dGhvciAuZGV0YWlscyAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IC5hdXRob3IgLmRldGFpbHMgLnB1Ymxpc2gtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIge1xuICBib3JkZXItYm90dG9tOiAwLjVweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIgLnJvdyB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIgLnJvdyAucHJlZml4IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICB3aWR0aDogdW5zZXQ7XG4gIG1hcmdpbi10b3A6IDNweDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIgdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgcmVzaXplOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59XG46aG9zdCAuaW1hZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG46aG9zdCAuaW1hZ2UtY29udGVudCAuaW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IC5pbWFnZS1jb250ZW50IC5pbWFnZXMgLmltYWdlLWl0ZW0ge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA5OSU7XG4gIG1hcmdpbjogMXB4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIG1hcmdpbjogMXB4IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuOmhvc3QgLmltYWdlLWNvbnRlbnQgLmltYWdlcyAuZGVsZXRlLWJ0biB7XG4gIHdpZHRoOiA3NXB4O1xuICBoZWlnaHQ6IDk5JTtcbn1cbjpob3N0IC5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5hY3Rpb25zIHNtYWxsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG46aG9zdCAuYWN0aW9ucyAuc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG46aG9zdCAuYWN0aW9ucyAuc3RhcnQgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgbWFyZ2luOiAwIDEwcHg7XG59XG46aG9zdCAuYWN0aW9ucyAuc3RhcnQgYnV0dG9uIC5sbnIge1xuICBmb250LXNpemU6IDE4cHg7XG59XG46aG9zdCAuYWN0aW9ucyAuZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/feed/components/feed-add/feed-add.component.ts":
/*!******************************************************************!*\
  !*** ./src/pages/feed/components/feed-add/feed-add.component.ts ***!
  \******************************************************************/
/*! exports provided: FeedAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedAddComponent", function() { return FeedAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/modals/image-preview/image-preview.component */ "./src/shared/modals/image-preview/image-preview.component.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");










/**
 * allows the user to edit or add new post, browse, select and store images to firebase storage
 */
var FeedAddComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FeedAddComponent, _super);
    function FeedAddComponent(injector, navParams, authService, commonService, feedService, firestoreService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.navParams = navParams;
        _this.authService = authService;
        _this.commonService = commonService;
        _this.feedService = feedService;
        _this.firestoreService = firestoreService;
        _this.images = [];
        _this.tempImages = [];
        _this.feedOptions = [
            {
                icon: 'camera',
                click: function () {
                    _this.openImageOptions();
                }
            },
            {
                icon: 'check-square',
                click: function () {
                    _this.more = !_this.more;
                }
            }
        ];
        _this.failPromise = function (err) {
            _this.loading = false;
            _this.toast(err);
        };
        return _this;
    }
    /** get current user, get id from navParam, if id present get data for feed, if no id set default data */
    FeedAddComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.currentUser = _b.sent();
                        id = this.navParams.get('data');
                        if (!id) {
                            this.feed = {
                                id: this.firestoreService.createId(),
                                content: '',
                                images: [],
                                subtitle: '',
                                title: '',
                                uid: this.currentUser.uid
                            };
                        }
                        else {
                            this.subscriptions.push(this.feedService.getPost(id, this.currentUser.uid).subscribe(function (feed) {
                                _this.feed = feed;
                                _this.images = _this.feed.images;
                            }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open options for image upload */
    FeedAddComponent.prototype.openImageOptions = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheetCtrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant('feed-add-component.image-option-header'),
                            buttons: [
                                {
                                    text: this.translate.instant('feed-add-component.image-option-library'),
                                    handler: function () {
                                        _this.getPictures(0, true);
                                    }
                                },
                                {
                                    text: this.translate.instant('feed-add-component.image-option-camera'),
                                    handler: function () {
                                        _this.getPictures(1);
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
    /** open options on image selection, present actionsheet to delete or open image */
    FeedAddComponent.prototype.doMoreOnImage = function (image, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheetCtrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant('other.options'),
                            buttons: [
                                {
                                    text: this.translate.instant('other.open-label'),
                                    handler: function () {
                                        _this.openImage(image);
                                    }
                                },
                                {
                                    text: this.translate.instant('other.delete-label'),
                                    handler: function () {
                                        _this.removeImage(index);
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
    /** used for browser image uploads, hooked up to input file type on change event */
    FeedAddComponent.prototype.detectFiles = function (event) {
        var _this = this;
        this.commonService.getImagesFromFiles(event).then(function (images) {
            _this.checkAndSaveImages(images);
        });
    };
    /** remove uploaded images */
    FeedAddComponent.prototype.removeImage = function (index) {
        this.firestoreService.deleteUpload(this.images[index]);
        this.images.splice(index, 1);
    };
    /** preview image in modal */
    FeedAddComponent.prototype.openImage = function (image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(src_shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_5__["ImagePreviewComponent"], image, 'custom-modal')];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** save feed and feed images */
    FeedAddComponent.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loading = true;
                if (!this.feed.images || (!this.feed.images && !Object(util__WEBPACK_IMPORTED_MODULE_8__["isArray"])(this.feed.images))) {
                    this.feed.images = [];
                }
                this.uploadImage(this.tempImages).then(function (images) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var _this = this;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                this.feed.images = this.feed.images.concat(images);
                                return [4 /*yield*/, this.feedService.upsertPost(this.feed).then(function (_data) {
                                        _this.loading = false;
                                        _this.closeModal();
                                    }, function (error) { return _this.toast(error); })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    /**
     * get image using native camera plugin to retrieve from either camera or library of device
     * param type is a number that specifies whether to get from camera or from library
     * one image retrieved, upload to firebase storage. if error, display a toast with error message
     */
    FeedAddComponent.prototype.getPictures = function (type, multiple) {
        if (multiple === void 0) { multiple = false; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var imageData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        imageData = [];
                        this.loading = true;
                        if (!window.cordova) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.commonService.getPictures(type, multiple)];
                    case 1:
                        // if on device use native plugins
                        imageData = _a.sent();
                        return [4 /*yield*/, this.checkAndSaveImages(imageData)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        // if on device use browser file upload
                        this.fileInputButton.nativeElement.click();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /** remove images from input file for browser only
     * store images or send a toast id no image found
     */
    FeedAddComponent.prototype.checkAndSaveImages = function (imageData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.loading = false;
                this.fileInputButton.nativeElement.value = null;
                if (imageData.length > 0) {
                    this.tempImages = imageData;
                    this.images = this.images.concat(this.tempImages);
                }
                else {
                    this.toast(this.translate.instant('message.component.no-images-selected'));
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * append base 64 string to image data, upload image data to firebase storage.
     * the upload function returns a download data which is then saved to images
     */
    FeedAddComponent.prototype.uploadImage = function (imageData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var read$, res, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.images = imageData;
                        read$ = [];
                        this.images.forEach(function (i) {
                            read$.push(_this.firestoreService.uploadImage(i, Date.now() + "-" + _this.currentUser.uid, "feed-images-" + _this.feed.id));
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Promise.all(read$)];
                    case 2:
                        res = _a.sent();
                        this.loading = false;
                        return [2 /*return*/, res];
                    case 3:
                        err_1 = _a.sent();
                        return [2 /*return*/, this.failPromise(err_1)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    FeedAddComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
        { type: _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_9__["FeedService"] },
        { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInputButton', null),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FeedAddComponent.prototype, "fileInputButton", void 0);
    FeedAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed-add',
            template: __webpack_require__(/*! raw-loader!./feed-add.component.html */ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed-add/feed-add.component.html"),
            styles: [__webpack_require__(/*! ./feed-add.component.scss */ "./src/pages/feed/components/feed-add/feed-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
            _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_9__["FeedService"],
            src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"]])
    ], FeedAddComponent);
    return FeedAddComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"]));



/***/ }),

/***/ "./src/pages/feed/components/feed-comment/feed-comment.component.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/feed/components/feed-comment/feed-comment.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content .content-wrapper .header .title {\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host ion-content .content-wrapper .header .title small {\n  font-size: 50%;\n  margin-left: 10px;\n}\n:host ion-content .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 100px) !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 15px;\n  margin: 10px 15px;\n  box-shadow: 1px 1px 12px var(--ion-color-light-shade);\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment .image {\n  width: 50px;\n  height: 50px;\n  border-radius: 100%;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment .detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 0 15px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment .detail .user {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment .detail .user .name {\n  font-size: 14px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment .detail .user .date {\n  font-size: 11px;\n  color: var(--ion-color-medium);\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment .detail .message {\n  font-size: 14px;\n  margin: 4px 0;\n  color: var(--ion-color-medium-shade);\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .comment .options {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host ion-footer textarea {\n  padding: 5px 10px;\n  overflow: hidden;\n  height: 40px !important;\n  width: calc(100% - 20px);\n  border: 1px solid var(--ion-color-medium);\n  outline: none;\n  resize: none;\n  margin: 5px 10px 0px;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvcGFnZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQtY29tbWVudC9mZWVkLWNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvcGFnZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQtY29tbWVudC9mZWVkLWNvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVE7RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0FDSFY7QURLVTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0haO0FEUU07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0FDTlI7QURRUTtFQUNFLHFDQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsV0FBQTtBQ05WO0FEUVU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EscURBQUE7QUNOWjtBRFFZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ05kO0FEU1k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxlQUFBO0FDUGQ7QURTYztFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDUGhCO0FEU2dCO0VBQ0UsZUFBQTtBQ1BsQjtBRFVnQjtFQUNFLGVBQUE7RUFDQSw4QkFBQTtBQ1JsQjtBRFljO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtBQ1ZoQjtBRGNZO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ1pkO0FEcUJJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ25CTiIsImZpbGUiOiJzcmMvcGFnZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQtY29tbWVudC9mZWVkLWNvbW1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiA1MCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgICAuY29udGVudC1zY3JvbGwge1xyXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCkgIWltcG9ydGFudDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgICAgICAgLmNvbW1lbnQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxNXB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuXHJcbiAgICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuXHJcbiAgICAgICAgICAgICAgLnVzZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC5tZXNzYWdlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4IDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAub3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpb24tZm9vdGVyIHtcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgIG1hcmdpbjogNXB4IDEwcHggMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmhlYWRlciAudGl0bGUge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuaGVhZGVyIC50aXRsZSBzbWFsbCB7XG4gIGZvbnQtc2l6ZTogNTAlO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmNvbW1lbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIG1hcmdpbjogMTBweCAxNXB4O1xuICBib3gtc2hhZG93OiAxcHggMXB4IDEycHggdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5jb21tZW50IC5pbWFnZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuY29tbWVudCAuZGV0YWlsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmNvbW1lbnQgLmRldGFpbCAudXNlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5jb21tZW50IC5kZXRhaWwgLnVzZXIgLm5hbWUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuY29tbWVudCAuZGV0YWlsIC51c2VyIC5kYXRlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuY29tbWVudCAuZGV0YWlsIC5tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW46IDRweCAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuY29tbWVudCAub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCBpb24tZm9vdGVyIHRleHRhcmVhIHtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBvdXRsaW5lOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIG1hcmdpbjogNXB4IDEwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59Il19 */"

/***/ }),

/***/ "./src/pages/feed/components/feed-comment/feed-comment.component.ts":
/*!**************************************************************************!*\
  !*** ./src/pages/feed/components/feed-comment/feed-comment.component.ts ***!
  \**************************************************************************/
/*! exports provided: FeedCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedCommentComponent", function() { return FeedCommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");






/**
 * enable user to add comments to a post
 */
var FeedCommentComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FeedCommentComponent, _super);
    function FeedCommentComponent(injector, navParams, authService, feedService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.navParams = navParams;
        _this.authService = authService;
        _this.feedService = feedService;
        _this.comments = [];
        _this.openSearch = false;
        return _this;
    }
    /** get current user and post id from navParams and get comments for the post */
    FeedCommentComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, fid;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.user = _b.sent();
                        fid = this.navParams.get('data');
                        this.loading = true;
                        this.subscriptions.push(this.feedService.getComments(fid, this.user.uid).subscribe(function (comments) {
                            _this.loading = false;
                            _this.comments = comments;
                        }, function (err) {
                            _this.loading = false;
                            _this.toast(err);
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    /** search comments */
    FeedCommentComponent.prototype.onSearch = function (val) {
        this.comments = this.feedService.searchComments(val);
    };
    /** save or edit new or existing comment */
    FeedCommentComponent.prototype.save = function (text) {
        var _this = this;
        var comment;
        if (this.editComment) {
            comment = this.editComment;
            comment.text = text;
        }
        else {
            comment = {
                uid: this.user.uid,
                fid: this.navParams.get('data'),
                text: text
            };
        }
        this.feedService.upsertComment(comment).then(function () {
            comment = null;
            _this.commentMsg = null;
            _this.editComment = null;
        });
    };
    /** manage comment by opening actionsheet and displaying options edit or delete comment. */
    FeedCommentComponent.prototype.openOptions = function (comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant('other.options'),
                            buttons: [
                                {
                                    text: this.translate.instant('other.edit-label'),
                                    handler: function () {
                                        _this.editComment = comment;
                                        _this.commentMsg = comment.text;
                                    }
                                },
                                {
                                    text: this.translate.instant('other.delete-label'),
                                    handler: function () {
                                        _this.feedService.deleteComment(comment);
                                    }
                                },
                                {
                                    text: this.translate.instant('other.cancel'),
                                    role: 'cancel',
                                    handler: function () { }
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
    FeedCommentComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"] }
    ]; };
    FeedCommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed-comment',
            template: __webpack_require__(/*! raw-loader!./feed-comment.component.html */ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed-comment/feed-comment.component.html"),
            styles: [__webpack_require__(/*! ./feed-comment.component.scss */ "./src/pages/feed/components/feed-comment/feed-comment.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"]])
    ], FeedCommentComponent);
    return FeedCommentComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"]));



/***/ }),

/***/ "./src/pages/feed/components/feed-detail/feed-detail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/pages/feed/components/feed-detail/feed-detail.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .wrapper {\n  height: calc(100% - 70px);\n}\n:host .image-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  height: 340px;\n  width: 100%;\n  position: relative;\n  background-color: var(--ion-color-light);\n}\n:host .image-content:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background-image: -webkit-gradient(linear, left top, right top, color-stop(0, rgba(var(--ion-color-dark-rgb), 0.8)), color-stop(20%, rgba(var(--ion-color-light-rgb), 0)), color-stop(80%, rgba(var(--ion-color-light-rgb), 0)), to(rgba(var(--ion-color-dark-rgb), 0.8)));\n  background-image: linear-gradient(to right, rgba(var(--ion-color-dark-rgb), 0.8) 0, rgba(var(--ion-color-light-rgb), 0) 20%, rgba(var(--ion-color-light-rgb), 0) 80%, rgba(var(--ion-color-dark-rgb), 0.8) 100%);\n}\n:host .image-content .menu-toolbar {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  padding: 20px 20px 0;\n  z-index: 10;\n}\n:host .image-content .menu-toolbar ion-icon {\n  font-size: 22px;\n}\n:host .image-content .image-nav-wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .image-content .image-nav-wrapper .left,\n:host .image-content .image-nav-wrapper .right {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 15px;\n  color: var(--ion-color-light);\n}\n:host .image-content .image-nav-wrapper .center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .image-content .image-nav-wrapper .right {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n:host .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 30px 20px 0px;\n  margin-top: -50px;\n  border-radius: 30px;\n  background: var(--ion-color-light);\n  height: calc(100% - 260px);\n  z-index: 10;\n  position: relative;\n  overflow-y: auto;\n}\n:host .content .title {\n  font-size: 20px;\n  font-weight: 600;\n  color: var(--ion-color-dark);\n}\n:host .content .subtitle {\n  padding: 5px 0;\n  font-size: 16px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .content .paragraph {\n  padding: 10px 0;\n  font-weight: 400;\n}\n:host .content .author {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 0;\n}\n:host .content .author .image {\n  width: 50px;\n  height: 50px;\n  border-radius: 6px;\n}\n:host .content .author .details {\n  padding: 0 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content .author .details .name {\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n:host .content .author .details .publish-date {\n  font-size: 12px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-top: 1px solid var(--ion-color-light-shade);\n}\n:host .actions small {\n  padding-left: 5px;\n}\n:host .actions .start {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .actions .end {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvcGFnZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQtZGV0YWlsL2ZlZWQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL3BhZ2VzL2ZlZWQvY29tcG9uZW50cy9mZWVkLWRldGFpbC9mZWVkLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0NGO0FEQ0U7RUFDRSx5QkFBQTtBQ0NKO0FERUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNBSjtBREVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLDBRQUFBO0VBQUEsZ05BQUE7QUNBTjtBRFNJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EscUJBQUE7VUFBQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtBQ1BOO0FEU007RUFDRSxlQUFBO0FDUFI7QURXSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7QUNUTjtBRFdNOztFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNUUjtBRFlNO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNWUjtBRGFNO0VBQ0UscUJBQUE7VUFBQSx5QkFBQTtBQ1hSO0FEZ0JFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDZEo7QURnQkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtBQ2ROO0FEaUJJO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FDZk47QURrQkk7RUFDRSxlQUFBO0VBRUEsZ0JBQUE7QUNqQk47QURvQkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0FDbEJOO0FEb0JNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ2xCUjtBRHFCTTtFQUNFLGVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNuQlI7QURxQlE7RUFFRSxnQkFBQTtFQUNBLCtCQUFBO0FDcEJWO0FEdUJRO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUNyQlY7QUQyQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0RBQUE7QUN6Qko7QUQyQkk7RUFDRSxpQkFBQTtBQ3pCTjtBRDRCSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQzFCTjtBRDZCSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtBQzNCTiIsImZpbGUiOiJzcmMvcGFnZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQtZGV0YWlsL2ZlZWQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgLndyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA3MHB4KTtcclxuICB9XHJcblxyXG4gIC5pbWFnZS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAzNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgIHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC44KSAwLFxyXG4gICAgICAgIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDApIDIwJSxcclxuICAgICAgICByZ2JhKHZhcigtLWlvbi1jb2xvci1saWdodC1yZ2IpLCAwKSA4MCUsXHJcbiAgICAgICAgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjgpIDEwMCVcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAubWVudS10b29sYmFyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgcGFkZGluZzogMjBweCAyMHB4IDA7XHJcbiAgICAgIHotaW5kZXg6IDEwO1xyXG5cclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbWFnZS1uYXYtd3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgIC5sZWZ0LFxyXG4gICAgICAucmlnaHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5yaWdodCB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiAzMHB4IDIwcHggMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMjYwcHgpO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgIH1cclxuXHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhcmFncmFwaCB7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgLy8gZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5hdXRob3Ige1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcblxyXG4gICAgICAuaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgIC8vIGZvbnQtc2l6ZTogMXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHVibGlzaC1kYXRlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG5cclxuICAgIHNtYWxsIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXJ0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAuZW5kIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLndyYXBwZXIge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xufVxuOmhvc3QgLmltYWdlLWNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDM0MHB4O1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgLmltYWdlLWNvbnRlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjgpIDAsIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDApIDIwJSwgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMCkgODAlLCByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuOCkgMTAwJSk7XG59XG46aG9zdCAuaW1hZ2UtY29udGVudCAubWVudS10b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgcGFkZGluZzogMjBweCAyMHB4IDA7XG4gIHotaW5kZXg6IDEwO1xufVxuOmhvc3QgLmltYWdlLWNvbnRlbnQgLm1lbnUtdG9vbGJhciBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cbjpob3N0IC5pbWFnZS1jb250ZW50IC5pbWFnZS1uYXYtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5pbWFnZS1jb250ZW50IC5pbWFnZS1uYXYtd3JhcHBlciAubGVmdCxcbjpob3N0IC5pbWFnZS1jb250ZW50IC5pbWFnZS1uYXYtd3JhcHBlciAucmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgLmltYWdlLWNvbnRlbnQgLmltYWdlLW5hdi13cmFwcGVyIC5jZW50ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5pbWFnZS1jb250ZW50IC5pbWFnZS1uYXYtd3JhcHBlciAucmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuOmhvc3QgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAzMHB4IDIwcHggMHB4O1xuICBtYXJnaW4tdG9wOiAtNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNjBweCk7XG4gIHotaW5kZXg6IDEwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG46aG9zdCAuY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG46aG9zdCAuY29udGVudCAuc3VidGl0bGUge1xuICBwYWRkaW5nOiA1cHggMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudCAucGFyYWdyYXBoIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgLmNvbnRlbnQgLmF1dGhvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjpob3N0IC5jb250ZW50IC5hdXRob3IgLmltYWdlIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuOmhvc3QgLmNvbnRlbnQgLmF1dGhvciAuZGV0YWlscyB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbn1cbjpob3N0IC5jb250ZW50IC5hdXRob3IgLmRldGFpbHMgLm5hbWUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuOmhvc3QgLmNvbnRlbnQgLmF1dGhvciAuZGV0YWlscyAucHVibGlzaC1kYXRlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xufVxuOmhvc3QgLmFjdGlvbnMgc21hbGwge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbjpob3N0IC5hY3Rpb25zIC5zdGFydCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuYWN0aW9ucyAuZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbn0iXX0= */"

/***/ }),

/***/ "./src/pages/feed/components/feed-detail/feed-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/pages/feed/components/feed-detail/feed-detail.component.ts ***!
  \************************************************************************/
/*! exports provided: FeedDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedDetailComponent", function() { return FeedDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");
/* harmony import */ var _feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../feed-add/feed-add.component */ "./src/pages/feed/components/feed-add/feed-add.component.ts");
/* harmony import */ var _feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../feed-comment/feed-comment.component */ "./src/pages/feed/components/feed-comment/feed-comment.component.ts");









/**
 * view post details
 */
var FeedDetailComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FeedDetailComponent, _super);
    function FeedDetailComponent(injector, navParams, commonService, authService, feedService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.navParams = navParams;
        _this.commonService = commonService;
        _this.authService = authService;
        _this.feedService = feedService;
        _this.feed = null;
        _this.currentIndex = 0;
        return _this;
    }
    /** get user and get post */
    FeedDetailComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a, id;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.user = _b.sent();
                        id = this.navParams.get('data');
                        this.subscriptions.push(this.feedService.getPost(id, this.user.uid).subscribe(function (feed) { return (_this.feed = feed); }));
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open action sheet with options to edit, delete, access comments, like or share post */
    FeedDetailComponent.prototype.openOptions = function (feed) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheet;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant('other.options'),
                            buttons: [
                                {
                                    text: this.translate.instant('other.edit-label'),
                                    handler: function () {
                                        _this.edit(feed);
                                    }
                                },
                                {
                                    text: this.translate.instant('other.delete-label'),
                                    role: 'destructive',
                                    handler: function () {
                                        _this.delete(feed);
                                    }
                                },
                                {
                                    text: this.translate.instant('feed-detail-component.open-comments'),
                                    handler: function () {
                                        _this.comment(feed);
                                    }
                                },
                                {
                                    text: this.translate.instant('feed-detail-component.like'),
                                    handler: function () {
                                        _this.like();
                                    }
                                },
                                {
                                    text: this.translate.instant('feed-detail-component.share-button'),
                                    handler: function () {
                                        _this.share(feed);
                                    }
                                },
                                {
                                    text: this.translate.instant('other.cancel'),
                                    role: 'cancel',
                                    handler: function () { }
                                }
                            ]
                        })];
                    case 1:
                        actionSheet = _a.sent();
                        actionSheet.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open edit modal with post id */
    FeedDetailComponent.prototype.edit = function (post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(post.user.uid === this.user.uid)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.openModal(_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_7__["FeedAddComponent"], post.id, 'custom-modal')];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.toast(this.translate.instant('feed-detail-component.cannot-edit'));
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /** like feed */
    FeedDetailComponent.prototype.like = function () {
        this.feedService.like(this.feed);
    };
    /** open comments */
    FeedDetailComponent.prototype.comment = function (post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_8__["FeedCommentComponent"], post)];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** get post url and share post */
    FeedDetailComponent.prototype.share = function (post) {
        var url = "feed?id=" + post.id;
        this.commonService.share(post.content, post.title, post.images, url);
    };
    /** show prompt and delete post */
    FeedDetailComponent.prototype.delete = function (post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var prompt_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(post.uid === this.user.uid)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertCtrl.create({
                                header: this.translate.instant('feed-detail-component.delete-alert-title'),
                                message: this.translate.instant('feed-detail-component.delete-alert-message'),
                                buttons: [
                                    {
                                        text: this.translate.instant('other.cancel'),
                                        role: 'cancel'
                                    },
                                    {
                                        text: this.translate.instant('other.delete-label'),
                                        handler: function () {
                                            _this.feedService.delete(post).then(function () {
                                                _this.modalCtrl.dismiss();
                                                _this.toast(_this.translate.instant('feed-detail-component.confirm-delete'));
                                            });
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        prompt_1 = _a.sent();
                        return [4 /*yield*/, prompt_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.toast(this.translate.instant('feed-detail-component.cannot-delete'));
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /** navigate to the next image */
    FeedDetailComponent.prototype.forward = function () {
        if (this.currentIndex < this.feed.images.length - 1) {
            this.currentIndex += 1;
        }
        else {
            this.currentIndex = 0;
        }
    };
    /** navigate to the previous image */
    FeedDetailComponent.prototype.back = function () {
        if (this.currentIndex < 1) {
            this.currentIndex = this.feed.images.length - 1;
        }
        else {
            this.currentIndex -= 1;
        }
    };
    FeedDetailComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
        { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
        { type: _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_6__["FeedService"] }
    ]; };
    FeedDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed-detail',
            template: __webpack_require__(/*! raw-loader!./feed-detail.component.html */ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed-detail/feed-detail.component.html"),
            styles: [__webpack_require__(/*! ./feed-detail.component.scss */ "./src/pages/feed/components/feed-detail/feed-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
            src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_6__["FeedService"]])
    ], FeedDetailComponent);
    return FeedDetailComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"]));



/***/ }),

/***/ "./src/pages/feed/components/feed/feed.component.scss":
/*!************************************************************!*\
  !*** ./src/pages/feed/components/feed/feed.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .header .title {\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .content-wrapper .header .title small {\n  font-size: 50%;\n  margin-left: 10px;\n}\n:host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 100px) !important;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvcGFnZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdNO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtBQ0ZSO0FESVE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNGVjtBRE9JO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0xOO0FET007RUFDRSxxQ0FBQTtFQUNBLFdBQUE7QUNMUiIsImZpbGUiOiJzcmMvcGFnZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuY29udGVudC13cmFwcGVyIHtcclxuICAgIC5oZWFkZXIge1xyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAuY29udGVudC1zY3JvbGwge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAuaGVhZGVyIC50aXRsZSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5oZWFkZXIgLnRpdGxlIHNtYWxsIHtcbiAgZm9udC1zaXplOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "./src/pages/feed/components/feed/feed.component.ts":
/*!**********************************************************!*\
  !*** ./src/pages/feed/components/feed/feed.component.ts ***!
  \**********************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");
/* harmony import */ var _feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../feed-add/feed-add.component */ "./src/pages/feed/components/feed-add/feed-add.component.ts");
/* harmony import */ var _feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../feed-comment/feed-comment.component */ "./src/pages/feed/components/feed-comment/feed-comment.component.ts");
/* harmony import */ var _feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../feed-detail/feed-detail.component */ "./src/pages/feed/components/feed-detail/feed-detail.component.ts");









/**
 * get feed from the app, displays 4 design versions, search feed, like and open comment for feed.
 * open feed detail and add new feed can all be accessed from feed component
 */
var FeedComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](FeedComponent, _super);
    function FeedComponent(injector, authService, feedService, commonService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        _this.feedService = feedService;
        _this.commonService = commonService;
        _this.openSearch = false;
        _this.views = _this.feedService.views;
        return _this;
    }
    /** get current user, get feed
     * handle openPostFromUrl method
     */
    FeedComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loading = true;
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.user = _b.sent();
                        this.openPostFromUrl();
                        this.subscriptions.push(this.feedService.getFeed(this.user.uid).subscribe(function (feed) {
                            _this.feed = feed.slice();
                            _this.loading = false;
                        }, function (err) {
                            _this.loading = false;
                            _this.toast(err);
                        }));
                        return [2 /*return*/];
                }
            });
        });
    };
    /** if url has query param, navigate to view and id in param (used for share links when you click the share button) */
    FeedComponent.prototype.openPostFromUrl = function () {
        var _this = this;
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe(function (param) {
            if (param && param.id) {
                _this.viewPost({ id: param.id });
            }
        }));
    };
    /** search friends feed */
    FeedComponent.prototype.onSearch = function (val) {
        this.feed = this.feedService.searchFeed(val);
    };
    /** manage feed actions such as likes, comments etc */
    FeedComponent.prototype.manage = function (_event) {
        if (_event.type === 'like') {
            this.feedService.like(_event.data);
        }
        else if (_event.type === 'comment') {
            this.comment(_event.data);
        }
        else if (_event.type === 'profile') {
            this.profile(_event.data);
        }
        else if (_event.type === 'share') {
            this.share(_event.data);
        }
        else if (_event.type === 'detail') {
            this.viewPost(_event.data);
        }
        else if (_event.type === 'more') {
            this.more(_event.data);
        }
    };
    /** delete a post */
    FeedComponent.prototype.delete = function (post) {
        this.feedService.delete(post);
    };
    /** go to post author's profile page */
    FeedComponent.prototype.profile = function (post) {
        this.goto(this.routes.people + '/' + post.user.uid);
    };
    /** open add post modal, add to array of feed after completed */
    FeedComponent.prototype.addPost = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_6__["FeedAddComponent"], null, 'custom-modal')];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open post details modal, update array of feed if any change is made */
    FeedComponent.prototype.viewPost = function (post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_8__["FeedDetailComponent"], post.id)];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open feed's comments */
    FeedComponent.prototype.comment = function (post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.openModal(_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_7__["FeedCommentComponent"], post.id)];
                    case 1:
                        modal = _a.sent();
                        modal.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** open actionsheet for more options */
    FeedComponent.prototype.more = function (data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var actionSheetCtrl;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.actionSheetCtrl.create({
                            header: this.translate.instant('feed-component.more-header'),
                            buttons: [
                                {
                                    text: this.translate.instant('feed-component.more-option-open'),
                                    handler: function () {
                                        _this.viewPost(data);
                                    }
                                },
                                {
                                    text: this.translate.instant('feed-component.more-option-delete'),
                                    handler: function () {
                                        _this.delete(data);
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
    /** share feed to other apps */
    FeedComponent.prototype.share = function (post) {
        var url = "feed?id=" + post.id;
        this.commonService.share(post.content, post.title, post.images, url);
    };
    FeedComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"] },
        { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
    ]; };
    FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! raw-loader!./feed.component.html */ "./node_modules/raw-loader/index.js!./src/pages/feed/components/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.scss */ "./src/pages/feed/components/feed/feed.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
            src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"],
            src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]])
    ], FeedComponent);
    return FeedComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ }),

/***/ "./src/pages/feed/feed.module.ts":
/*!***************************************!*\
  !*** ./src/pages/feed/feed.module.ts ***!
  \***************************************/
/*! exports provided: FeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedModule", function() { return FeedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_shared_card_views_card_views_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/card-views/card-views.module */ "./src/shared/card-views/card-views.module.ts");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/feed-add/feed-add.component */ "./src/pages/feed/components/feed-add/feed-add.component.ts");
/* harmony import */ var _components_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/feed-comment/feed-comment.component */ "./src/pages/feed/components/feed-comment/feed-comment.component.ts");
/* harmony import */ var _components_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/feed-detail/feed-detail.component */ "./src/pages/feed/components/feed-detail/feed-detail.component.ts");
/* harmony import */ var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/feed/feed.component */ "./src/pages/feed/components/feed/feed.component.ts");










var FeedModule = /** @class */ (function () {
    function FeedModule() {
    }
    FeedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_feed_feed_component__WEBPACK_IMPORTED_MODULE_9__["FeedComponent"], _components_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_8__["FeedDetailComponent"], _components_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_6__["FeedAddComponent"], _components_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_7__["FeedCommentComponent"]],
            entryComponents: [_components_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_6__["FeedAddComponent"], _components_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_8__["FeedDetailComponent"], _components_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_7__["FeedCommentComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                src_shared_card_views_card_views_module__WEBPACK_IMPORTED_MODULE_4__["CardViewsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_9__["FeedComponent"] }]),
            ],
        })
    ], FeedModule);
    return FeedModule;
}());



/***/ }),

/***/ "./src/shared/card-views/card-views.module.ts":
/*!****************************************************!*\
  !*** ./src/shared/card-views/card-views.module.ts ***!
  \****************************************************/
/*! exports provided: CardViewsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardViewsModule", function() { return CardViewsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _minimal_minimal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minimal/minimal.component */ "./src/shared/card-views/minimal/minimal.component.ts");
/* harmony import */ var _modern_modern_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modern/modern.component */ "./src/shared/card-views/modern/modern.component.ts");
/* harmony import */ var _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showcase/showcase.component */ "./src/shared/card-views/showcase/showcase.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/shared/card-views/timeline/timeline.component.ts");








var CardViewsModule = /** @class */ (function () {
    function CardViewsModule() {
    }
    CardViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_minimal_minimal_component__WEBPACK_IMPORTED_MODULE_4__["MinimalComponent"], _modern_modern_component__WEBPACK_IMPORTED_MODULE_5__["ModernComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_6__["ShowcaseComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
            exports: [_minimal_minimal_component__WEBPACK_IMPORTED_MODULE_4__["MinimalComponent"], _modern_modern_component__WEBPACK_IMPORTED_MODULE_5__["ModernComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_6__["ShowcaseComponent"]],
            providers: [],
        })
    ], CardViewsModule);
    return CardViewsModule;
}());



/***/ }),

/***/ "./src/shared/card-views/minimal/minimal.component.scss":
/*!**************************************************************!*\
  !*** ./src/shared/card-views/minimal/minimal.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 10px;\n  padding: 10px 15px;\n  border-radius: 12px;\n  box-shadow: 1px 2px 5px var(--ion-color-medium-tint);\n  background: var(--ion-color-light);\n}\n:host .author {\n  display: -webkit-box;\n  display: flex;\n}\n:host .author .image {\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n}\n:host .author .details {\n  padding: 0 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .author .details .name {\n  font-size: 14px;\n  font-weight: 500;\n}\n:host .author .details .publish-date {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .image-content {\n  display: -webkit-box;\n  display: flex;\n}\n:host .image-content .image-item {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  height: 80px;\n  border-radius: 6px;\n  margin: 10px 2px;\n}\n:host .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .content .title {\n  font-size: 14px;\n  font-weight: 600;\n}\n:host .content .subtitle {\n  font-size: 13px;\n  font-weight: 400;\n}\n:host .actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-top: 5px;\n  margin-top: 10px;\n}\n:host .actions small {\n  padding-left: 5px;\n}\n:host .actions .start {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .actions .end {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL2NhcmQtdmlld3MvbWluaW1hbC9taW5pbWFsLmNvbXBvbmVudC5zY3NzIiwic3JjL3NoYXJlZC9jYXJkLXZpZXdzL21pbmltYWwvbWluaW1hbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0Esa0NBQUE7QUNDRjtBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDQ0o7QURDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDTjtBREVJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0FOO0FERU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREdNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUNEUjtBRE1FO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDSko7QURNSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0pOO0FEUUU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNOSjtBRFFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDTk47QURTSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ1BOO0FEV0U7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ1RKO0FEVUk7RUFDRSxpQkFBQTtBQ1JOO0FEVUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNSTjtBRFdJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDVE4iLCJmaWxlIjoic3JjL3NoYXJlZC9jYXJkLXZpZXdzL21pbmltYWwvbWluaW1hbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cclxuICAuYXV0aG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlscyB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnB1Ymxpc2gtZGF0ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW1hZ2UtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5pbWFnZS1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBtYXJnaW46IDEwcHggMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBzbWFsbCB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgfVxyXG4gICAgLnN0YXJ0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAuZW5kIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCAuYXV0aG9yIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IC5hdXRob3IgLmltYWdlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbjpob3N0IC5hdXRob3IgLmRldGFpbHMge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuYXV0aG9yIC5kZXRhaWxzIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuOmhvc3QgLmF1dGhvciAuZGV0YWlscyAucHVibGlzaC1kYXRlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCAuaW1hZ2UtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuaW1hZ2UtY29udGVudCAuaW1hZ2UtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWFyZ2luOiAxMHB4IDJweDtcbn1cbjpob3N0IC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5jb250ZW50IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbjpob3N0IC5jb250ZW50IC5zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbjpob3N0IC5hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbjpob3N0IC5hY3Rpb25zIHNtYWxsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59XG46aG9zdCAuYWN0aW9ucyAuc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmFjdGlvbnMgLmVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"

/***/ }),

/***/ "./src/shared/card-views/minimal/minimal.component.ts":
/*!************************************************************!*\
  !*** ./src/shared/card-views/minimal/minimal.component.ts ***!
  \************************************************************/
/*! exports provided: MinimalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinimalComponent", function() { return MinimalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");




var MinimalComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](MinimalComponent, _super);
    function MinimalComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        /** emits event with type and feed */
        _this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    /** get user on component init */
    MinimalComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.me = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /** onclick emit event with event name and data */
    MinimalComponent.prototype.clicked = function (name) {
        this.event.emit({ type: name, data: this.feed });
    };
    MinimalComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], MinimalComponent.prototype, "feed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], MinimalComponent.prototype, "event", void 0);
    MinimalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'feed-minimal',
            template: __webpack_require__(/*! raw-loader!./minimal.component.html */ "./node_modules/raw-loader/index.js!./src/shared/card-views/minimal/minimal.component.html"),
            styles: [__webpack_require__(/*! ./minimal.component.scss */ "./src/shared/card-views/minimal/minimal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MinimalComponent);
    return MinimalComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ }),

/***/ "./src/shared/card-views/modern/modern.component.scss":
/*!************************************************************!*\
  !*** ./src/shared/card-views/modern/modern.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  margin: 10px;\n  padding: 15px;\n  border-radius: 12px;\n  box-shadow: 1px 2px 5px var(--ion-color-medium-tint);\n  background: var(--ion-color-light);\n}\n:host .start,\n:host .end {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .start {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding-right: 10px;\n}\n:host .start .title {\n  font-size: 16px;\n  font-weight: 600;\n}\n:host .start .content {\n  font-size: 12px;\n  padding: 10px 0;\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n:host .start .author {\n  display: -webkit-box;\n  display: flex;\n  margin: 10px 0;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .start .author .name {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n:host .start .author .publish-date {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .start .actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .start .actions ion-button {\n  --padding-start: 0;\n  --padding-end: 0;\n}\n:host .start .actions small {\n  padding-left: 5px;\n}\n:host .end .image {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 100%;\n  border-radius: 6px;\n  overflow: hidden;\n  box-shadow: 1px 2px 5px var(--ion-color-medium-tint);\n}\n:host .end .image .left,\n:host .end .image .right {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background: rgba(var(--ion-color-medium-rgb), 0.4);\n  padding: 2px 0;\n  color: var(--ion-color-light);\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .end .image .center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL2NhcmQtdmlld3MvbW9kZXJuL21vZGVybi5jb21wb25lbnQuc2NzcyIsInNyYy9zaGFyZWQvY2FyZC12aWV3cy9tb2Rlcm4vbW9kZXJuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9EQUFBO0VBQ0Esa0NBQUE7QUNDRjtBRENFOztFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0NKO0FERUU7RUFDRSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EsbUJBQUE7QUNBSjtBREVJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDQU47QURHSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EscURBQUE7QUNETjtBRElJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ0ZOO0FESU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0ZSO0FES007RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBQ0hSO0FET0k7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDTE47QURPTTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNMUjtBRFFNO0VBQ0UsaUJBQUE7QUNOUjtBRFlJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtBQ1ZOO0FEV007O0VBRUUsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ1RSO0FEWU07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNWUiIsImZpbGUiOiJzcmMvc2hhcmVkL2NhcmQtdmlld3MvbW9kZXJuL21vZGVybi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cclxuICAuc3RhcnQsXHJcbiAgLmVuZCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC5zdGFydCB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmF1dGhvciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wdWJsaXNoLWRhdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMDtcclxuICAgICAgICAtLXBhZGRpbmctZW5kOiAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzbWFsbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lbmQge1xyXG4gICAgLmltYWdlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICAgICAgLmxlZnQsXHJcbiAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjQpO1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2VudGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDEwcHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCAuc3RhcnQsXG46aG9zdCAuZW5kIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn1cbjpob3N0IC5zdGFydCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cbjpob3N0IC5zdGFydCAudGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCAuc3RhcnQgLmNvbnRlbnQge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG59XG46aG9zdCAuc3RhcnQgLmF1dGhvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuOmhvc3QgLnN0YXJ0IC5hdXRob3IgLm5hbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdCAuc3RhcnQgLmF1dGhvciAucHVibGlzaC1kYXRlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCAuc3RhcnQgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuOmhvc3QgLnN0YXJ0IC5hY3Rpb25zIGlvbi1idXR0b24ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDA7XG4gIC0tcGFkZGluZy1lbmQ6IDA7XG59XG46aG9zdCAuc3RhcnQgLmFjdGlvbnMgc21hbGwge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbn1cbjpob3N0IC5lbmQgLmltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbn1cbjpob3N0IC5lbmQgLmltYWdlIC5sZWZ0LFxuOmhvc3QgLmVuZCAuaW1hZ2UgLnJpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuNCk7XG4gIHBhZGRpbmc6IDJweCAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAuZW5kIC5pbWFnZSAuY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/shared/card-views/modern/modern.component.ts":
/*!**********************************************************!*\
  !*** ./src/shared/card-views/modern/modern.component.ts ***!
  \**********************************************************/
/*! exports provided: ModernComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModernComponent", function() { return ModernComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");




var ModernComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ModernComponent, _super);
    /**
     * @constructor
     * @param injector {Injector}
     */
    function ModernComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        /**
         * @description holds current index of image
         * @property currentIndex
         * @type number
         * @public
         * @default 0
         */
        _this.currentIndex = 0;
        /**
         * @description emits event with type and feed
         * @example clicking like button will emit {type: 'like', data: feed}
         * @property cardEvent
         * @type EventEmitter<{type: string, data: Feed}>
         * @public
         */
        _this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    /**
     * @description get user on component init
     * @method ngOnInit
     * @public
     * @returns void
     */
    ModernComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.me = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description onclick emit event with event name and data
     * @method clicked
     * @param {string} name
     * @public
     * @returns void
     */
    ModernComponent.prototype.clicked = function (name) {
        this.event.emit({ type: name, data: this.feed });
    };
    /**
     * @description navigate to the next image
     * @method forward
     * @public
     * @returns void
     */
    ModernComponent.prototype.forward = function () {
        if (this.currentIndex < this.feed.images.length - 1) {
            this.currentIndex += 1;
        }
        else {
            this.currentIndex = 0;
        }
    };
    /**
     * @description navigate to the previous image
     * @method back
     * @public
     * @returns void
     */
    ModernComponent.prototype.back = function () {
        if (this.currentIndex < 1) {
            this.currentIndex = this.feed.images.length - 1;
        }
        else {
            this.currentIndex -= 1;
        }
    };
    ModernComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ModernComponent.prototype, "feed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ModernComponent.prototype, "event", void 0);
    ModernComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'feed-modern',
            template: __webpack_require__(/*! raw-loader!./modern.component.html */ "./node_modules/raw-loader/index.js!./src/shared/card-views/modern/modern.component.html"),
            styles: [__webpack_require__(/*! ./modern.component.scss */ "./src/shared/card-views/modern/modern.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ModernComponent);
    return ModernComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ }),

/***/ "./src/shared/card-views/showcase/showcase.component.scss":
/*!****************************************************************!*\
  !*** ./src/shared/card-views/showcase/showcase.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 1px 2px 5px var(--ion-color-medium-tint);\n  background: var(--ion-color-light);\n}\n:host .image-content {\n  display: -webkit-box;\n  display: flex;\n  height: 200px;\n  width: 100%;\n}\n:host .image-content .left,\n:host .image-content .right {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background: rgba(var(--ion-color-medium-rgb), 0.6);\n  padding: 0 15px;\n  color: var(--ion-color-light);\n}\n:host .image-content .center {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .image-content .right {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n:host .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  padding: 10px 15px;\n}\n:host .content .content-header {\n  display: -webkit-box;\n  display: flex;\n}\n:host .content .content-header .feed-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content .content-header .feed-info .title {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n:host .content .content-header .feed-info .subtitle {\n  padding: 10px 0;\n  font-size: 13px;\n  font-weight: 400;\n}\n:host .content .author {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 0;\n}\n:host .content .author .image {\n  width: 30px;\n  height: 30px;\n  border-radius: 6px;\n}\n:host .content .author .details {\n  padding: 0 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content .author .details .name {\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--ion-color-primary);\n}\n:host .content .author .details .publish-date {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .content .actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-top: 1px solid var(--ion-color-light-shade);\n}\n:host .content .actions small {\n  padding-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL2NhcmQtdmlld3Mvc2hvd2Nhc2Uvc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvc2hhcmVkL2NhcmQtdmlld3Mvc2hvd2Nhc2Uvc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvREFBQTtFQUNBLGtDQUFBO0FDQ0Y7QURDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDQ0o7QURDSTs7RUFFRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNDTjtBREVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDQU47QURHSTtFQUNFLHFCQUFBO1VBQUEseUJBQUE7QUNETjtBREtFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0JBQUE7QUNISjtBREtJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDSE47QURLTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0hSO0FES1E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtBQ0hWO0FETVE7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDSlY7QURTSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUNQTjtBRFNNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ1BSO0FEVU07RUFDRSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDUlI7QURVUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDUlY7QURXUTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0FDVFY7QURjSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrREFBQTtBQ1pOO0FEY007RUFDRSxpQkFBQTtBQ1pSIiwiZmlsZSI6InNyYy9zaGFyZWQvY2FyZC12aWV3cy9zaG93Y2FzZS9zaG93Y2FzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cclxuICAuaW1hZ2UtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIC5sZWZ0LFxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuNik7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmNlbnRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLnJpZ2h0IHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG5cclxuICAgIC5jb250ZW50LWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAuZmVlZC1pbmZvIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnN1YnRpdGxlIHtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmF1dGhvciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHVibGlzaC1kYXRlIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuXHJcbiAgICAgIHNtYWxsIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMXB4IDJweCA1cHggdmFyKC0taW9uLWNvbG9yLW1lZGl1bS10aW50KTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbjpob3N0IC5pbWFnZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuaW1hZ2UtY29udGVudCAubGVmdCxcbjpob3N0IC5pbWFnZS1jb250ZW50IC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjYpO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgLmltYWdlLWNvbnRlbnQgLmNlbnRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuaW1hZ2UtY29udGVudCAucmlnaHQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuOmhvc3QgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxMHB4IDE1cHg7XG59XG46aG9zdCAuY29udGVudCAuY29udGVudC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLmNvbnRlbnQgLmNvbnRlbnQtaGVhZGVyIC5mZWVkLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmNvbnRlbnQgLmNvbnRlbnQtaGVhZGVyIC5mZWVkLWluZm8gLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuOmhvc3QgLmNvbnRlbnQgLmNvbnRlbnQtaGVhZGVyIC5mZWVkLWluZm8gLnN1YnRpdGxlIHtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG46aG9zdCAuY29udGVudCAuYXV0aG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuOmhvc3QgLmNvbnRlbnQgLmF1dGhvciAuaW1hZ2Uge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG59XG46aG9zdCAuY29udGVudCAuYXV0aG9yIC5kZXRhaWxzIHtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmNvbnRlbnQgLmF1dGhvciAuZGV0YWlscyAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IC5jb250ZW50IC5hdXRob3IgLmRldGFpbHMgLnB1Ymxpc2gtZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuOmhvc3QgLmNvbnRlbnQgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbjpob3N0IC5jb250ZW50IC5hY3Rpb25zIHNtYWxsIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/shared/card-views/showcase/showcase.component.ts":
/*!**************************************************************!*\
  !*** ./src/shared/card-views/showcase/showcase.component.ts ***!
  \**************************************************************/
/*! exports provided: ShowcaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowcaseComponent", function() { return ShowcaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");




var ShowcaseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShowcaseComponent, _super);
    /**
     * @constructor
     * @param injector {Injector}
     */
    function ShowcaseComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        /**
         * @description holds current index of image
         * @property currentIndex
         * @type number
         * @public
         * @default 0
         */
        _this.currentIndex = 0;
        /**
         * @description emits event with type and feed
         * @example clicking like button will emit {type: 'like', data: feed}
         * @property cardEvent
         * @type EventEmitter<{type: string, data: Feed}>
         * @public
         */
        _this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    /**
     * @description get user on component init
     * @method ngOnInit
     * @public
     * @returns void
     */
    ShowcaseComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.me = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description onclick emit event with event name and data
     * @method clicked
     * @param {string} name
     * @public
     * @returns void
     */
    ShowcaseComponent.prototype.clicked = function (name) {
        this.event.emit({ type: name, data: this.feed });
    };
    /**
     * @description navigate to the next image
     * @method forward
     * @public
     * @returns void
     */
    ShowcaseComponent.prototype.forward = function () {
        if (this.currentIndex < this.feed.images.length - 1) {
            this.currentIndex += 1;
        }
        else {
            this.currentIndex = 0;
        }
    };
    /**
     * @description navigate to the previous image
     * @method back
     * @public
     * @returns void
     */
    ShowcaseComponent.prototype.back = function () {
        if (this.currentIndex < 1) {
            this.currentIndex = this.feed.images.length - 1;
        }
        else {
            this.currentIndex -= 1;
        }
    };
    ShowcaseComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ShowcaseComponent.prototype, "feed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ShowcaseComponent.prototype, "event", void 0);
    ShowcaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'feed-showcase',
            template: __webpack_require__(/*! raw-loader!./showcase.component.html */ "./node_modules/raw-loader/index.js!./src/shared/card-views/showcase/showcase.component.html"),
            styles: [__webpack_require__(/*! ./showcase.component.scss */ "./src/shared/card-views/showcase/showcase.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ShowcaseComponent);
    return ShowcaseComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ }),

/***/ "./src/shared/card-views/timeline/timeline.component.scss":
/*!****************************************************************!*\
  !*** ./src/shared/card-views/timeline/timeline.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 25px 20px;\n}\n:host .author {\n  display: -webkit-box;\n  display: flex;\n}\n:host .author .image {\n  width: 40px;\n  height: 40px;\n  border-radius: 100%;\n}\n:host .author .details {\n  padding: 0 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .author .details .name {\n  font-size: 14px;\n  font-weight: 500;\n}\n:host .author .details .publish-date {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .content {\n  display: -webkit-box;\n  display: flex;\n}\n:host .content .info-content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n  background: var(--ion-color-light);\n  margin-left: 10px;\n  padding: 10px;\n}\n:host .content .info-content .image-content {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n:host .content .info-content .image-content .image-item {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n  height: 80px;\n  border-radius: 6px;\n  margin: 10px 2px;\n}\n:host .content .info-content .title {\n  font-size: 14px;\n  font-weight: 600;\n  padding: 10px 0;\n}\n:host .content .info-content .subtitle {\n  font-size: 13px;\n  font-weight: 400;\n}\n:host .actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-left: -5px;\n}\n:host .actions small {\n  padding-left: 3px;\n}\n:host .actions .start {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .actions .end {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL2NhcmQtdmlld3MvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvc2hhcmVkL2NhcmQtdmlld3MvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNDRjtBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDQ0o7QURDSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDTjtBREVJO0VBQ0UsZUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0FOO0FERU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBUjtBREdNO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7QUNEUjtBRE1FO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDSko7QURNSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FDSk47QURLTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFdBQUE7QUNIUjtBRElRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDRlY7QURNTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNKUjtBRE9NO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDTFI7QURVRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtBQ1JKO0FEU0k7RUFDRSxpQkFBQTtBQ1BOO0FEVUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QUNSTjtBRFdJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDVE4iLCJmaWxlIjoic3JjL3NoYXJlZC9jYXJkLXZpZXdzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogMjVweCAyMHB4O1xyXG5cclxuICAuYXV0aG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlscyB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnB1Ymxpc2gtZGF0ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5pbmZvLWNvbnRlbnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgLmltYWdlLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgLmltYWdlLWl0ZW0ge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDJweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDogLTVweDtcclxuICAgIHNtYWxsIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXJ0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleDogMTtcclxuICAgIH1cclxuXHJcbiAgICAuZW5kIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiAyNXB4IDIwcHg7XG59XG46aG9zdCAuYXV0aG9yIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IC5hdXRob3IgLmltYWdlIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cbjpob3N0IC5hdXRob3IgLmRldGFpbHMge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuYXV0aG9yIC5kZXRhaWxzIC5uYW1lIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuOmhvc3QgLmF1dGhvciAuZGV0YWlscyAucHVibGlzaC1kYXRlIHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuY29udGVudCAuaW5mby1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMTtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG46aG9zdCAuY29udGVudCAuaW5mby1jb250ZW50IC5pbWFnZS1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCAuY29udGVudCAuaW5mby1jb250ZW50IC5pbWFnZS1jb250ZW50IC5pbWFnZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW46IDEwcHggMnB4O1xufVxuOmhvc3QgLmNvbnRlbnQgLmluZm8tY29udGVudCAudGl0bGUge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbjpob3N0IC5jb250ZW50IC5pbmZvLWNvbnRlbnQgLnN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xufVxuOmhvc3QgLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTVweDtcbn1cbjpob3N0IC5hY3Rpb25zIHNtYWxsIHtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG46aG9zdCAuYWN0aW9ucyAuc3RhcnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xufVxuOmhvc3QgLmFjdGlvbnMgLmVuZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */"

/***/ }),

/***/ "./src/shared/card-views/timeline/timeline.component.ts":
/*!**************************************************************!*\
  !*** ./src/shared/card-views/timeline/timeline.component.ts ***!
  \**************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");




var TimelineComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](TimelineComponent, _super);
    /**
     * @constructor
     * @param injector {Injector}
     */
    function TimelineComponent(injector, authService) {
        var _this = _super.call(this, injector) || this;
        _this.injector = injector;
        _this.authService = authService;
        /**
         * @description emits event with type and feed
         * @example clicking like button will emit {type: 'like', data: feed}
         * @property cardEvent
         * @type EventEmitter<{type: string, data: Feed}>
         * @public
         */
        _this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        return _this;
    }
    /**
     * @description get user on component init
     * @method ngOnInit
     * @public
     * @returns void
     */
    TimelineComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _a;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.authService.getUser()];
                    case 1:
                        _a.me = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @description onclick emit event with event name and data
     * @method clicked
     * @param {string} name
     * @public
     * @returns void
     */
    TimelineComponent.prototype.clicked = function (name) {
        this.event.emit({ type: name, data: this.feed });
    };
    TimelineComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
        { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimelineComponent.prototype, "feed", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimelineComponent.prototype, "event", void 0);
    TimelineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'feed-timeline',
            template: __webpack_require__(/*! raw-loader!./timeline.component.html */ "./node_modules/raw-loader/index.js!./src/shared/card-views/timeline/timeline.component.html"),
            styles: [__webpack_require__(/*! ./timeline.component.scss */ "./src/shared/card-views/timeline/timeline.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], TimelineComponent);
    return TimelineComponent;
}(src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"]));



/***/ })

}]);
//# sourceMappingURL=pages-feed-feed-module-es5.js.map