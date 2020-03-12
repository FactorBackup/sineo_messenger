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

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n<!-- <img src=\"../../../../assets/images/new/Background1.jpg\" id=\"bg\" alt=\"\"> -->\r\n\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'feed-component.title' | translate }}\r\n      </div>\r\n      <div class=\"options\">\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"openSearch = !openSearch\">\r\n          <ion-icon mode=\"md\" name=\"search\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"addPost()\">\r\n          <ion-icon mode=\"md\" name=\"add\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <app-tab-menu [tabs]=\"views\" (event)=\"view = $event\"></app-tab-menu>\r\n    <app-search-bar *ngIf=\"openSearch\" (event)=\"onSearch($event)\"></app-search-bar>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\" #content>\r\n        <ng-container [ngSwitch]=\"view\">\r\n          <ng-container *ngSwitchCase=\"1\">\r\n            <feed-minimal *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-minimal>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"2\">\r\n            <feed-timeline *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-timeline>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"3\">\r\n            <feed-showcase *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-showcase>\r\n          </ng-container>\r\n          <ng-container *ngSwitchCase=\"4\">\r\n            <feed-modern *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-modern>\r\n          </ng-container>\r\n          <ng-container *ngSwitchDefault>\r\n            <feed-minimal *ngFor=\"let item of feed\" [feed]=\"item\" (event)=\"manage($event)\"> </feed-minimal>\r\n          </ng-container>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<ion-footer>\r\n  \r\n  <ion-tab-bar slot=\"bottom\">\r\n    <ion-tab-button tab=\"schedule\" (click)=\"goto(routes.dashboard)\">\r\n      <ion-icon src=\"../../../../assets/icons/calendar.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.dashboard' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n    \r\n    <ion-tab-button tab=\"news\" (click)=\"goto(routes.feed)\">\r\n      <ion-icon src=\"../../../../assets/icons/rss.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.news' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"people\" (click)=\"goto(routes.people)\">\r\n      <ion-icon src=\"../../../../assets/icons/users.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.people' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\" (click)=\"goto(routes.messages)\">\r\n      <ion-icon src=\"../../../../assets/icons/message-square.svg\"></ion-icon>\r\n      <ion-label>{{ 'page-title.chat' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"about\" (click)=\"goto(routes.setting)\">\r\n      <ion-icon src=\"../../../../assets/icons/settings.svg\" ></ion-icon>\r\n      <ion-label>{{ 'page-title.setting' | translate }}</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-footer>"

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

module.exports = ":host ion-content {\n  --background: transparent; }\n  :host ion-content .content-wrapper {\n    width: 95%;\n    height: auto;\n    margin: 20% auto;\n    background: var(--ion-color-light);\n    border-radius: 12px;\n    box-shadow: 1px 2px 12px var(--ion-color-dark); }\n  :host ion-content .content-wrapper .wrapper {\n      padding: 0 20px 15px; }\n  :host .author {\n  display: -webkit-box;\n  display: flex;\n  padding: 20px; }\n  :host .author .image {\n    width: 40px;\n    height: 40px;\n    border-radius: 6px; }\n  :host .author .details {\n    padding: 0 10px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n            flex: 1; }\n  :host .author .details .name {\n      font-size: 15px;\n      font-weight: 500;\n      color: var(--ion-color-primary); }\n  :host .author .details .publish-date {\n      font-size: 12px;\n      font-weight: 400;\n      color: var(--ion-color-medium-shade); }\n  :host .input-wrapper {\n  border-bottom: 0.5px solid var(--ion-color-light-shade); }\n  :host .input-wrapper .row {\n    -webkit-box-align: start;\n            align-items: flex-start; }\n  :host .input-wrapper .row .prefix {\n      color: var(--ion-color-medium);\n      width: unset;\n      margin-top: 3px; }\n  :host .input-wrapper:last-of-type {\n    border: 0 !important; }\n  :host .input-wrapper textarea {\n    width: 100%;\n    resize: none;\n    outline: none;\n    border: none; }\n  :host .image-content {\n  display: -webkit-box;\n  display: flex;\n  height: 80px;\n  width: 100%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  margin: 10px 0; }\n  :host .image-content .images {\n    display: -webkit-box;\n    display: flex; }\n  :host .image-content .images .image-item {\n      width: 75px;\n      height: 99%;\n      margin: 1px;\n      height: 75px;\n      margin: 1px 2px;\n      border-radius: 6px;\n      border: 1px solid var(--ion-color-light-shade); }\n  :host .image-content .images .delete-btn {\n      width: 75px;\n      height: 99%; }\n  :host .actions {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n  :host .actions small {\n    padding-left: 5px; }\n  :host .actions .start {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-flex: 1;\n            flex: 1;\n    margin-left: -15px; }\n  :host .actions .start button {\n      background: transparent;\n      outline: none;\n      padding: 10px 0;\n      margin: 0 10px; }\n  :host .actions .start button .lnr {\n        font-size: 18px; }\n  :host .actions .end {\n    display: -webkit-box;\n    display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQtYWRkL2ZlZWQtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUkseUJBQWEsRUFBQTtFQUZqQjtJQUtNLFVBQVU7SUFDVixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtDQUFrQztJQUNsQyxtQkFBbUI7SUFDbkIsOENBQThDLEVBQUE7RUFWcEQ7TUFhUSxvQkFBb0IsRUFBQTtFQWI1QjtFQW1CSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixhQUFhLEVBQUE7RUFwQmpCO0lBdUJNLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7RUF6QnhCO0lBNkJNLGVBQWU7SUFDZixvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixtQkFBTztZQUFQLE9BQU8sRUFBQTtFQWhDYjtNQW1DUSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLCtCQUErQixFQUFBO0VBckN2QztNQXlDUSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG9DQUFvQyxFQUFBO0VBM0M1QztFQWlESSx1REFBdUQsRUFBQTtFQWpEM0Q7SUFvRE0sd0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0VBcEQ3QjtNQXVEUSw4QkFBOEI7TUFDOUIsWUFBWTtNQUNaLGVBQWUsRUFBQTtFQXpEdkI7SUE4RE0sb0JBQW9CLEVBQUE7RUE5RDFCO0lBa0VNLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVksRUFBQTtFQXJFbEI7RUEwRUksb0JBQWE7RUFBYixhQUFhO0VBQ2IsWUFBWTtFQUNaLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtFQS9FbEI7SUFpRk0sb0JBQWE7SUFBYixhQUFhLEVBQUE7RUFqRm5CO01Bb0ZRLFdBQVc7TUFDWCxXQUFXO01BQ1gsV0FBVztNQUNYLFlBQVk7TUFDWixlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLDhDQUE4QyxFQUFBO0VBMUZ0RDtNQTZGUSxXQUFXO01BQ1gsV0FBVyxFQUFBO0VBOUZuQjtFQW9HSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7RUFyR3ZCO0lBd0dNLGlCQUFpQixFQUFBO0VBeEd2QjtJQTRHTSxvQkFBYTtJQUFiLGFBQWE7SUFDYixtQkFBTztZQUFQLE9BQU87SUFDUCxrQkFBa0IsRUFBQTtFQTlHeEI7TUFpSFEsdUJBQXVCO01BQ3ZCLGFBQWE7TUFDYixlQUFlO01BQ2YsY0FBYyxFQUFBO0VBcEh0QjtRQXVIVSxlQUFlLEVBQUE7RUF2SHpCO0lBNkhNLG9CQUFhO0lBQWIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC1hZGQvZmVlZC1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW46IDIwJSBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMnB4IDEycHggdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG5cclxuICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAxNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYXV0aG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlscyB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucHVibGlzaC1kYXRlIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5pbnB1dC13cmFwcGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDAuNXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcblxyXG4gICAgLnJvdyB7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgLnByZWZpeCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgIHdpZHRoOiB1bnNldDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHJlc2l6ZTogbm9uZTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmltYWdlLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgLmltYWdlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAuaW1hZ2UtaXRlbSB7XHJcbiAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5OSU7XHJcbiAgICAgICAgbWFyZ2luOiAxcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICAgIG1hcmdpbjogMXB4IDJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgICAgfVxyXG4gICAgICAuZGVsZXRlLWJ0biB7XHJcbiAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA5OSU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIHNtYWxsIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXJ0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG5cclxuICAgICAgYnV0dG9uIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuXHJcbiAgICAgICAgLmxuciB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmVuZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
let FeedAddComponent = class FeedAddComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"] {
    constructor(injector, navParams, authService, commonService, feedService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.authService = authService;
        this.commonService = commonService;
        this.feedService = feedService;
        this.firestoreService = firestoreService;
        this.images = [];
        this.tempImages = [];
        this.feedOptions = [
            {
                icon: 'camera',
                click: () => {
                    this.openImageOptions();
                }
            },
            {
                icon: 'check-square',
                click: () => {
                    this.more = !this.more;
                }
            }
        ];
        this.failPromise = (err) => {
            this.loading = false;
            this.toast(err);
        };
    }
    /** get current user, get id from navParam, if id present get data for feed, if no id set default data */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
            const id = this.navParams.get('data');
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
                this.subscriptions.push(this.feedService.getPost(id, this.currentUser.uid).subscribe((feed) => {
                    this.feed = feed;
                    this.images = this.feed.images;
                }));
            }
        });
    }
    /** open options for image upload */
    openImageOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheetCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('feed-add-component.image-option-header'),
                buttons: [
                    {
                        text: this.translate.instant('feed-add-component.image-option-library'),
                        handler: () => {
                            this.getPictures(0, true);
                        }
                    },
                    {
                        text: this.translate.instant('feed-add-component.image-option-camera'),
                        handler: () => {
                            this.getPictures(1);
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
    /** open options on image selection, present actionsheet to delete or open image */
    doMoreOnImage(image, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheetCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('other.options'),
                buttons: [
                    {
                        text: this.translate.instant('other.open-label'),
                        handler: () => {
                            this.openImage(image);
                        }
                    },
                    {
                        text: this.translate.instant('other.delete-label'),
                        handler: () => {
                            this.removeImage(index);
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
    /** used for browser image uploads, hooked up to input file type on change event */
    detectFiles(event) {
        this.commonService.getImagesFromFiles(event).then((images) => {
            this.checkAndSaveImages(images);
        });
    }
    /** remove uploaded images */
    removeImage(index) {
        this.firestoreService.deleteUpload(this.images[index]);
        this.images.splice(index, 1);
    }
    /** preview image in modal */
    openImage(image) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(src_shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_5__["ImagePreviewComponent"], image, 'custom-modal');
            modal.present();
        });
    }
    /** save feed and feed images */
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            if (!this.feed.images || (!this.feed.images && !Object(util__WEBPACK_IMPORTED_MODULE_8__["isArray"])(this.feed.images))) {
                this.feed.images = [];
            }
            this.uploadImage(this.tempImages).then((images) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.feed.images = this.feed.images.concat(images);
                yield this.feedService.upsertPost(this.feed).then((_data) => {
                    this.loading = false;
                    this.closeModal();
                }, (error) => this.toast(error));
            }));
        });
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
                yield this.checkAndSaveImages(imageData);
            }
            else {
                // if on device use browser file upload
                this.fileInputButton.nativeElement.click();
            }
        });
    }
    /** remove images from input file for browser only
     * store images or send a toast id no image found
     */
    checkAndSaveImages(imageData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = false;
            this.fileInputButton.nativeElement.value = null;
            if (imageData.length > 0) {
                this.tempImages = imageData;
                this.images = this.images.concat(this.tempImages);
            }
            else {
                this.toast(this.translate.instant('message.component.no-images-selected'));
            }
        });
    }
    /**
     * append base 64 string to image data, upload image data to firebase storage.
     * the upload function returns a download data which is then saved to images
     */
    uploadImage(imageData) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.images = imageData;
            const read$ = [];
            this.images.forEach((i) => {
                read$.push(this.firestoreService.uploadImage(i, `${Date.now()}-${this.currentUser.uid}`, `feed-images-${this.feed.id}`));
            });
            try {
                const res = yield Promise.all(read$);
                this.loading = false;
                return res;
            }
            catch (err) {
                return this.failPromise(err);
            }
        });
    }
};
FeedAddComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_9__["FeedService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] }
];
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



/***/ }),

/***/ "./src/pages/feed/components/feed-comment/feed-comment.component.scss":
/*!****************************************************************************!*\
  !*** ./src/pages/feed/components/feed-comment/feed-comment.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content .content-wrapper .header .title {\n  -webkit-box-align: center;\n          align-items: center; }\n  :host ion-content .content-wrapper .header .title small {\n    font-size: 50%;\n    margin-left: 10px; }\n  :host ion-content .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%; }\n  :host ion-content .content-wrapper .wrapper .content-scroll {\n    height: calc(100% - 100px) !important;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 100%; }\n  :host ion-content .content-wrapper .wrapper .content-scroll .comment {\n      display: -webkit-box;\n      display: flex;\n      padding: 10px 15px;\n      margin: 10px 15px;\n      box-shadow: 1px 1px 12px var(--ion-color-light-shade); }\n  :host ion-content .content-wrapper .wrapper .content-scroll .comment .image {\n        width: 50px;\n        height: 50px;\n        border-radius: 100%; }\n  :host ion-content .content-wrapper .wrapper .content-scroll .comment .detail {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column;\n        -webkit-box-flex: 1;\n                flex: 1;\n        padding: 0 15px; }\n  :host ion-content .content-wrapper .wrapper .content-scroll .comment .detail .user {\n          display: -webkit-box;\n          display: flex;\n          -webkit-box-align: center;\n                  align-items: center;\n          -webkit-box-pack: justify;\n                  justify-content: space-between; }\n  :host ion-content .content-wrapper .wrapper .content-scroll .comment .detail .user .name {\n            font-size: 14px; }\n  :host ion-content .content-wrapper .wrapper .content-scroll .comment .detail .user .date {\n            font-size: 11px;\n            color: var(--ion-color-medium); }\n  :host ion-content .content-wrapper .wrapper .content-scroll .comment .detail .message {\n          font-size: 14px;\n          margin: 4px 0;\n          color: var(--ion-color-medium-shade); }\n  :host ion-content .content-wrapper .wrapper .content-scroll .comment .options {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center; }\n  :host ion-footer textarea {\n  padding: 5px 10px;\n  overflow: hidden;\n  height: 40px !important;\n  width: calc(100% - 20px);\n  border: 1px solid var(--ion-color-medium);\n  outline: none;\n  resize: none;\n  margin: 5px 10px 0px;\n  border-radius: 3px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQtY29tbWVudC9mZWVkLWNvbW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFLVSx5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7RUFMN0I7SUFRWSxjQUFjO0lBQ2QsaUJBQWlCLEVBQUE7RUFUN0I7RUFlUSxvQkFBYTtFQUFiLGFBQWE7RUFDYixZQUFZLEVBQUE7RUFoQnBCO0lBbUJVLHFDQUFxQztJQUNyQyxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixXQUFXLEVBQUE7RUF0QnJCO01BeUJZLG9CQUFhO01BQWIsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQixpQkFBaUI7TUFDakIscURBQXFELEVBQUE7RUE1QmpFO1FBK0JjLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CLEVBQUE7RUFqQ2pDO1FBcUNjLG9CQUFhO1FBQWIsYUFBYTtRQUNiLDRCQUFzQjtRQUF0Qiw2QkFBc0I7Z0JBQXRCLHNCQUFzQjtRQUN0QixtQkFBTztnQkFBUCxPQUFPO1FBQ1AsZUFBZSxFQUFBO0VBeEM3QjtVQTJDZ0Isb0JBQWE7VUFBYixhQUFhO1VBQ2IseUJBQW1CO2tCQUFuQixtQkFBbUI7VUFDbkIseUJBQThCO2tCQUE5Qiw4QkFBOEIsRUFBQTtFQTdDOUM7WUFnRGtCLGVBQWUsRUFBQTtFQWhEakM7WUFvRGtCLGVBQWU7WUFDZiw4QkFBOEIsRUFBQTtFQXJEaEQ7VUEwRGdCLGVBQWU7VUFDZixhQUFhO1VBQ2Isb0NBQW9DLEVBQUE7RUE1RHBEO1FBaUVjLG9CQUFhO1FBQWIsYUFBYTtRQUNiLHlCQUFtQjtnQkFBbkIsbUJBQW1CLEVBQUE7RUFsRWpDO0VBNEVNLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLHdCQUF3QjtFQUN4Qix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL3BhZ2VzL2ZlZWQvY29tcG9uZW50cy9mZWVkLWNvbW1lbnQvZmVlZC1jb21tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi1jb250ZW50IHtcclxuICAgIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICAuaGVhZGVyIHtcclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNTAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC53cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgLmNvbnRlbnQtc2Nyb2xsIHtcclxuICAgICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgIC5jb21tZW50IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTVweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAxMnB4IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcblxyXG4gICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuZGV0YWlsIHtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG4gICAgICAgICAgICAgIC51c2VyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAubWVzc2FnZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDRweCAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm9wdGlvbnMge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWZvb3RlciB7XHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICBtYXJnaW46IDVweCAxMHB4IDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/feed/feed.service */ "./src/pages/feed/services/feed/feed.service.ts");






/**
 * enable user to add comments to a post
 */
let FeedCommentComponent = class FeedCommentComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"] {
    constructor(injector, navParams, authService, feedService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.authService = authService;
        this.feedService = feedService;
        this.comments = [];
        this.openSearch = false;
    }
    /** get current user and post id from navParams and get comments for the post */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = yield this.authService.getUser();
            const fid = this.navParams.get('data');
            this.loading = true;
            this.subscriptions.push(this.feedService.getComments(fid, this.user.uid).subscribe((comments) => {
                this.loading = false;
                this.comments = comments;
            }, (err) => {
                this.loading = false;
                this.toast(err);
            }));
        });
    }
    /** search comments */
    onSearch(val) {
        this.comments = this.feedService.searchComments(val);
    }
    /** save or edit new or existing comment */
    save(text) {
        let comment;
        if (this.editComment) {
            comment = this.editComment;
            comment.text = text;
        }
        else {
            comment = {
                uid: this.user.uid,
                fid: this.navParams.get('data'),
                text
            };
        }
        this.feedService.upsertComment(comment).then(() => {
            comment = null;
            this.commentMsg = null;
            this.editComment = null;
        });
    }
    /** manage comment by opening actionsheet and displaying options edit or delete comment. */
    openOptions(comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: this.translate.instant('other.options'),
                buttons: [
                    {
                        text: this.translate.instant('other.edit-label'),
                        handler: () => {
                            this.editComment = comment;
                            this.commentMsg = comment.text;
                        }
                    },
                    {
                        text: this.translate.instant('other.delete-label'),
                        handler: () => {
                            this.feedService.deleteComment(comment);
                        }
                    },
                    {
                        text: this.translate.instant('other.cancel'),
                        role: 'cancel',
                        handler: () => { }
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
};
FeedCommentComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"] }
];
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



/***/ }),

/***/ "./src/pages/feed/components/feed-detail/feed-detail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/pages/feed/components/feed-detail/feed-detail.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n  :host .wrapper {\n    height: calc(100% - 70px); }\n  :host .image-content {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    height: 340px;\n    width: 100%;\n    position: relative;\n    background-color: var(--ion-color-light); }\n  :host .image-content:before {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-image: -webkit-gradient(linear, left top, right top, color-stop(0, rgba(var(--ion-color-dark-rgb), 0.8)), color-stop(20%, rgba(var(--ion-color-light-rgb), 0)), color-stop(80%, rgba(var(--ion-color-light-rgb), 0)), to(rgba(var(--ion-color-dark-rgb), 0.8)));\n      background-image: linear-gradient(to right, rgba(var(--ion-color-dark-rgb), 0.8) 0, rgba(var(--ion-color-light-rgb), 0) 20%, rgba(var(--ion-color-light-rgb), 0) 80%, rgba(var(--ion-color-dark-rgb), 0.8) 100%); }\n  :host .image-content .menu-toolbar {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-pack: end;\n              justify-content: flex-end;\n      padding: 20px 20px 0;\n      z-index: 10; }\n  :host .image-content .menu-toolbar ion-icon {\n        font-size: 22px; }\n  :host .image-content .image-nav-wrapper {\n      display: -webkit-box;\n      display: flex;\n      height: 100%; }\n  :host .image-content .image-nav-wrapper .left,\n      :host .image-content .image-nav-wrapper .right {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        padding: 0 15px;\n        color: var(--ion-color-light); }\n  :host .image-content .image-nav-wrapper .center {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-flex: 1;\n                flex: 1;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column;\n        -webkit-box-pack: center;\n                justify-content: center;\n        -webkit-box-align: center;\n                align-items: center; }\n  :host .image-content .image-nav-wrapper .right {\n        -webkit-box-pack: end;\n                justify-content: flex-end; }\n  :host .content {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 30px 20px 0px;\n    margin-top: -50px;\n    border-radius: 30px;\n    background: var(--ion-color-light);\n    height: calc(100% - 260px);\n    z-index: 10;\n    position: relative;\n    overflow-y: auto; }\n  :host .content .title {\n      font-size: 20px;\n      font-weight: 600;\n      color: var(--ion-color-dark); }\n  :host .content .subtitle {\n      padding: 5px 0;\n      font-size: 16px;\n      font-weight: 400;\n      color: var(--ion-color-medium-shade); }\n  :host .content .paragraph {\n      padding: 10px 0;\n      font-weight: 400; }\n  :host .content .author {\n      display: -webkit-box;\n      display: flex;\n      padding: 10px 0; }\n  :host .content .author .image {\n        width: 50px;\n        height: 50px;\n        border-radius: 6px; }\n  :host .content .author .details {\n        padding: 0 10px;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column;\n        -webkit-box-flex: 1;\n                flex: 1; }\n  :host .content .author .details .name {\n          font-weight: 500;\n          color: var(--ion-color-primary); }\n  :host .content .author .details .publish-date {\n          font-size: 12px;\n          font-weight: 400;\n          color: var(--ion-color-medium-shade); }\n  :host .actions {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    border-top: 1px solid var(--ion-color-light-shade); }\n  :host .actions small {\n      padding-left: 5px; }\n  :host .actions .start {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-flex: 1;\n              flex: 1; }\n  :host .actions .end {\n      display: -webkit-box;\n      display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQtZGV0YWlsL2ZlZWQtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtFQUZ4QjtJQUtJLHlCQUF5QixFQUFBO0VBTDdCO0lBU0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsd0NBQXdDLEVBQUE7RUFkNUM7TUFpQk0sV0FBVztNQUNYLGtCQUFrQjtNQUNsQixNQUFNO01BQ04sUUFBUTtNQUNSLFNBQVM7TUFDVCxPQUFPO01BQ1AsMFFBTUM7TUFORCxnTkFNQyxFQUFBO0VBN0JQO01BaUNNLG9CQUFhO01BQWIsYUFBYTtNQUNiLHFCQUF5QjtjQUF6Qix5QkFBeUI7TUFDekIsb0JBQW9CO01BQ3BCLFdBQVcsRUFBQTtFQXBDakI7UUF1Q1EsZUFBZSxFQUFBO0VBdkN2QjtNQTRDTSxvQkFBYTtNQUFiLGFBQWE7TUFDYixZQUFZLEVBQUE7RUE3Q2xCOztRQWlEUSxvQkFBYTtRQUFiLGFBQWE7UUFDYix5QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsNkJBQTZCLEVBQUE7RUFwRHJDO1FBd0RRLG9CQUFhO1FBQWIsYUFBYTtRQUNiLG1CQUFPO2dCQUFQLE9BQU87UUFDUCw0QkFBc0I7UUFBdEIsNkJBQXNCO2dCQUF0QixzQkFBc0I7UUFDdEIsd0JBQXVCO2dCQUF2Qix1QkFBdUI7UUFDdkIseUJBQW1CO2dCQUFuQixtQkFBbUIsRUFBQTtFQTVEM0I7UUFnRVEscUJBQXlCO2dCQUF6Qix5QkFBeUIsRUFBQTtFQWhFakM7SUFzRUksb0JBQWE7SUFBYixhQUFhO0lBQ2IsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsa0NBQWtDO0lBQ2xDLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGdCQUFnQixFQUFBO0VBL0VwQjtNQWtGTSxlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLDRCQUE0QixFQUFBO0VBcEZsQztNQXdGTSxjQUFjO01BQ2QsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixvQ0FBb0MsRUFBQTtFQTNGMUM7TUErRk0sZUFBZTtNQUVmLGdCQUFnQixFQUFBO0VBakd0QjtNQXFHTSxvQkFBYTtNQUFiLGFBQWE7TUFDYixlQUFlLEVBQUE7RUF0R3JCO1FBeUdRLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCLEVBQUE7RUEzRzFCO1FBK0dRLGVBQWU7UUFDZixvQkFBYTtRQUFiLGFBQWE7UUFDYiw0QkFBc0I7UUFBdEIsNkJBQXNCO2dCQUF0QixzQkFBc0I7UUFDdEIsbUJBQU87Z0JBQVAsT0FBTyxFQUFBO0VBbEhmO1VBc0hVLGdCQUFnQjtVQUNoQiwrQkFBK0IsRUFBQTtFQXZIekM7VUEySFUsZUFBZTtVQUNmLGdCQUFnQjtVQUNoQixvQ0FBb0MsRUFBQTtFQTdIOUM7SUFvSUksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixrREFBa0QsRUFBQTtFQXRJdEQ7TUF5SU0saUJBQWlCLEVBQUE7RUF6SXZCO01BNklNLG9CQUFhO01BQWIsYUFBYTtNQUNiLG1CQUFPO2NBQVAsT0FBTyxFQUFBO0VBOUliO01Ba0pNLG9CQUFhO01BQWIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC1kZXRhaWwvZmVlZC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAud3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDcwcHgpO1xyXG4gIH1cclxuXHJcbiAgLmltYWdlLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDM0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgcmdiYSh2YXIoLS1pb24tY29sb3ItZGFyay1yZ2IpLCAwLjgpIDAsXHJcbiAgICAgICAgcmdiYSh2YXIoLS1pb24tY29sb3ItbGlnaHQtcmdiKSwgMCkgMjAlLFxyXG4gICAgICAgIHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDApIDgwJSxcclxuICAgICAgICByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuOCkgMTAwJVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LXRvb2xiYXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMDtcclxuICAgICAgei1pbmRleDogMTA7XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlLW5hdi13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgLmxlZnQsXHJcbiAgICAgIC5yaWdodCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmNlbnRlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnJpZ2h0IHtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDMwcHggMjBweCAwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyNjBweCk7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgIH1cclxuXHJcbiAgICAucGFyYWdyYXBoIHtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAvLyBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmF1dGhvciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRldGFpbHMge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgLy8gZm9udC1zaXplOiAxcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wdWJsaXNoLWRhdGUge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcblxyXG4gICAgc21hbGwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhcnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
let FeedDetailComponent = class FeedDetailComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"] {
    constructor(injector, navParams, commonService, authService, feedService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.commonService = commonService;
        this.authService = authService;
        this.feedService = feedService;
        this.feed = null;
        this.currentIndex = 0;
    }
    /** get user and get post */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = yield this.authService.getUser();
            const id = this.navParams.get('data');
            this.subscriptions.push(this.feedService.getPost(id, this.user.uid).subscribe((feed) => (this.feed = feed)));
        });
    }
    /** open action sheet with options to edit, delete, access comments, like or share post */
    openOptions(feed) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: this.translate.instant('other.options'),
                buttons: [
                    {
                        text: this.translate.instant('other.edit-label'),
                        handler: () => {
                            this.edit(feed);
                        }
                    },
                    {
                        text: this.translate.instant('other.delete-label'),
                        role: 'destructive',
                        handler: () => {
                            this.delete(feed);
                        }
                    },
                    {
                        text: this.translate.instant('feed-detail-component.open-comments'),
                        handler: () => {
                            this.comment(feed);
                        }
                    },
                    {
                        text: this.translate.instant('feed-detail-component.like'),
                        handler: () => {
                            this.like();
                        }
                    },
                    {
                        text: this.translate.instant('feed-detail-component.share-button'),
                        handler: () => {
                            this.share(feed);
                        }
                    },
                    {
                        text: this.translate.instant('other.cancel'),
                        role: 'cancel',
                        handler: () => { }
                    }
                ]
            });
            actionSheet.present();
        });
    }
    /** open edit modal with post id */
    edit(post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (post.user.uid === this.user.uid) {
                const modal = yield this.openModal(_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_7__["FeedAddComponent"], post.id, 'custom-modal');
                yield modal.present();
            }
            else {
                this.toast(this.translate.instant('feed-detail-component.cannot-edit'));
            }
        });
    }
    /** like feed */
    like() {
        this.feedService.like(this.feed);
    }
    /** open comments */
    comment(post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_8__["FeedCommentComponent"], post);
            modal.present();
        });
    }
    /** get post url and share post */
    share(post) {
        const url = `feed?id=${post.id}`;
        this.commonService.share(post.content, post.title, post.images, url);
    }
    /** show prompt and delete post */
    delete(post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (post.uid === this.user.uid) {
                const prompt = yield this.alertCtrl.create({
                    header: this.translate.instant('feed-detail-component.delete-alert-title'),
                    message: this.translate.instant('feed-detail-component.delete-alert-message'),
                    buttons: [
                        {
                            text: this.translate.instant('other.cancel'),
                            role: 'cancel'
                        },
                        {
                            text: this.translate.instant('other.delete-label'),
                            handler: () => {
                                this.feedService.delete(post).then(() => {
                                    this.modalCtrl.dismiss();
                                    this.toast(this.translate.instant('feed-detail-component.confirm-delete'));
                                });
                            }
                        }
                    ]
                });
                yield prompt.present();
            }
            else {
                this.toast(this.translate.instant('feed-detail-component.cannot-delete'));
            }
        });
    }
    /** navigate to the next image */
    forward() {
        if (this.currentIndex < this.feed.images.length - 1) {
            this.currentIndex += 1;
        }
        else {
            this.currentIndex = 0;
        }
    }
    /** navigate to the previous image */
    back() {
        if (this.currentIndex < 1) {
            this.currentIndex = this.feed.images.length - 1;
        }
        else {
            this.currentIndex -= 1;
        }
    }
};
FeedDetailComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_6__["FeedService"] }
];
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



/***/ }),

/***/ "./src/pages/feed/components/feed/feed.component.scss":
/*!************************************************************!*\
  !*** ./src/pages/feed/components/feed/feed.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .header .title {\n  -webkit-box-align: center;\n          align-items: center; }\n  :host .content-wrapper .header .title small {\n    font-size: 50%;\n    margin-left: 10px; }\n  :host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%; }\n  :host .content-wrapper .wrapper .content-scroll {\n    height: calc(100% - 100px) !important;\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvZmVlZC9jb21wb25lbnRzL2ZlZWQvZmVlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlRLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTtFQUozQjtJQU9VLGNBQWM7SUFDZCxpQkFBaUIsRUFBQTtFQVIzQjtFQWNNLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFlBQVksRUFBQTtFQWZsQjtJQWtCUSxxQ0FBcUM7SUFDckMsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9wYWdlcy9mZWVkL2NvbXBvbmVudHMvZmVlZC9mZWVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgIC5jb250ZW50LXNjcm9sbCB7XHJcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCkgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
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
let FeedComponent = class FeedComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, authService, feedService, commonService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.feedService = feedService;
        this.commonService = commonService;
        this.openSearch = false;
        this.views = this.feedService.views;
    }
    /** get current user, get feed
     * handle openPostFromUrl method
     */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            this.user = yield this.authService.getUser();
            this.openPostFromUrl();
            this.subscriptions.push(this.feedService.getFeed(this.user.uid).subscribe((feed) => {
                this.feed = [...feed];
                this.loading = false;
            }, (err) => {
                this.loading = false;
                this.toast(err);
            }));
        });
    }
    /** if url has query param, navigate to view and id in param (used for share links when you click the share button) */
    openPostFromUrl() {
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe((param) => {
            if (param && param.id) {
                this.viewPost({ id: param.id });
            }
        }));
    }
    /** search friends feed */
    onSearch(val) {
        this.feed = this.feedService.searchFeed(val);
    }
    /** manage feed actions such as likes, comments etc */
    manage(_event) {
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
    }
    /** delete a post */
    delete(post) {
        this.feedService.delete(post);
    }
    /** go to post author's profile page */
    profile(post) {
        this.goto(this.routes.people + '/' + post.user.uid);
    }
    /** open add post modal, add to array of feed after completed */
    addPost() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_6__["FeedAddComponent"], null, 'custom-modal');
            modal.present();
        });
    }
    /** open post details modal, update array of feed if any change is made */
    viewPost(post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_8__["FeedDetailComponent"], post.id);
            modal.present();
        });
    }
    /** open feed's comments */
    comment(post) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_7__["FeedCommentComponent"], post.id);
            modal.present();
        });
    }
    /** open actionsheet for more options */
    more(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheetCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('feed-component.more-header'),
                buttons: [
                    {
                        text: this.translate.instant('feed-component.more-option-open'),
                        handler: () => {
                            this.viewPost(data);
                        }
                    },
                    {
                        text: this.translate.instant('feed-component.more-option-delete'),
                        handler: () => {
                            this.delete(data);
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
    /** share feed to other apps */
    share(post) {
        const url = `feed?id=${post.id}`;
        this.commonService.share(post.content, post.title, post.images, url);
    }
};
FeedComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _services_feed_feed_service__WEBPACK_IMPORTED_MODULE_5__["FeedService"] },
    { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] }
];
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_card_views_card_views_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/card-views/card-views.module */ "./src/shared/card-views/card-views.module.ts");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_feed_add_feed_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/feed-add/feed-add.component */ "./src/pages/feed/components/feed-add/feed-add.component.ts");
/* harmony import */ var _components_feed_comment_feed_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/feed-comment/feed-comment.component */ "./src/pages/feed/components/feed-comment/feed-comment.component.ts");
/* harmony import */ var _components_feed_detail_feed_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/feed-detail/feed-detail.component */ "./src/pages/feed/components/feed-detail/feed-detail.component.ts");
/* harmony import */ var _components_feed_feed_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/feed/feed.component */ "./src/pages/feed/components/feed/feed.component.ts");










let FeedModule = class FeedModule {
};
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _minimal_minimal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./minimal/minimal.component */ "./src/shared/card-views/minimal/minimal.component.ts");
/* harmony import */ var _modern_modern_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modern/modern.component */ "./src/shared/card-views/modern/modern.component.ts");
/* harmony import */ var _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showcase/showcase.component */ "./src/shared/card-views/showcase/showcase.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/shared/card-views/timeline/timeline.component.ts");








let CardViewsModule = class CardViewsModule {
};
CardViewsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_minimal_minimal_component__WEBPACK_IMPORTED_MODULE_4__["MinimalComponent"], _modern_modern_component__WEBPACK_IMPORTED_MODULE_5__["ModernComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_6__["ShowcaseComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]],
        exports: [_minimal_minimal_component__WEBPACK_IMPORTED_MODULE_4__["MinimalComponent"], _modern_modern_component__WEBPACK_IMPORTED_MODULE_5__["ModernComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_7__["TimelineComponent"], _showcase_showcase_component__WEBPACK_IMPORTED_MODULE_6__["ShowcaseComponent"]],
        providers: [],
    })
], CardViewsModule);



/***/ }),

/***/ "./src/shared/card-views/minimal/minimal.component.scss":
/*!**************************************************************!*\
  !*** ./src/shared/card-views/minimal/minimal.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 10px;\n  padding: 10px 15px;\n  border-radius: 12px;\n  box-shadow: 1px 2px 5px var(--ion-color-medium-tint);\n  background: var(--ion-color-light); }\n  :host .author {\n    display: -webkit-box;\n    display: flex; }\n  :host .author .image {\n      width: 40px;\n      height: 40px;\n      border-radius: 100%; }\n  :host .author .details {\n      padding: 0 10px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      -webkit-box-flex: 1;\n              flex: 1; }\n  :host .author .details .name {\n        font-size: 14px;\n        font-weight: 500; }\n  :host .author .details .publish-date {\n        font-size: 11px;\n        font-weight: 400;\n        color: var(--ion-color-medium-shade); }\n  :host .image-content {\n    display: -webkit-box;\n    display: flex; }\n  :host .image-content .image-item {\n      display: -webkit-box;\n      display: flex;\n      width: 100%;\n      height: 80px;\n      border-radius: 6px;\n      margin: 10px 2px; }\n  :host .content {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n  :host .content .title {\n      font-size: 14px;\n      font-weight: 600; }\n  :host .content .subtitle {\n      font-size: 13px;\n      font-weight: 400; }\n  :host .actions {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    padding-top: 5px;\n    margin-top: 10px; }\n  :host .actions small {\n      padding-left: 5px; }\n  :host .actions .start {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-flex: 1;\n              flex: 1; }\n  :host .actions .end {\n      display: -webkit-box;\n      display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvc2hhcmVkL2NhcmQtdmlld3MvbWluaW1hbC9taW5pbWFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9EQUFvRDtFQUNwRCxrQ0FBa0MsRUFBQTtFQU5wQztJQVNJLG9CQUFhO0lBQWIsYUFBYSxFQUFBO0VBVGpCO01BWU0sV0FBVztNQUNYLFlBQVk7TUFDWixtQkFBbUIsRUFBQTtFQWR6QjtNQWtCTSxlQUFlO01BQ2Ysb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsbUJBQU87Y0FBUCxPQUFPLEVBQUE7RUFyQmI7UUF3QlEsZUFBZTtRQUNmLGdCQUFnQixFQUFBO0VBekJ4QjtRQTZCUSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLG9DQUFvQyxFQUFBO0VBL0I1QztJQXFDSSxvQkFBYTtJQUFiLGFBQWEsRUFBQTtFQXJDakI7TUF3Q00sb0JBQWE7TUFBYixhQUFhO01BQ2IsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIsZ0JBQWdCLEVBQUE7RUE1Q3RCO0lBaURJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCLEVBQUE7RUFsRDFCO01BcURNLGVBQWU7TUFDZixnQkFBZ0IsRUFBQTtFQXREdEI7TUEwRE0sZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBM0R0QjtJQWdFSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtFQW5FcEI7TUFxRU0saUJBQWlCLEVBQUE7RUFyRXZCO01Bd0VNLG9CQUFhO01BQWIsYUFBYTtNQUNiLG1CQUFPO2NBQVAsT0FBTyxFQUFBO0VBekViO01BNkVNLG9CQUFhO01BQWIsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9zaGFyZWQvY2FyZC12aWV3cy9taW5pbWFsL21pbmltYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHJcbiAgLmF1dGhvciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbHMge1xyXG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wdWJsaXNoLWRhdGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmltYWdlLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuaW1hZ2UtaXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgbWFyZ2luOiAxMHB4IDJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAuc3VidGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWN0aW9ucyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgc21hbGwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIH1cclxuICAgIC5zdGFydCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLmVuZCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");




let MinimalComponent = class MinimalComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        /** emits event with type and feed */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /** get user on component init */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.me = yield this.authService.getUser();
        });
    }
    /** onclick emit event with event name and data */
    clicked(name) {
        this.event.emit({ type: name, data: this.feed });
    }
};
MinimalComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
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



/***/ }),

/***/ "./src/shared/card-views/modern/modern.component.scss":
/*!************************************************************!*\
  !*** ./src/shared/card-views/modern/modern.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  margin: 10px;\n  padding: 15px;\n  border-radius: 12px;\n  box-shadow: 1px 2px 5px var(--ion-color-medium-tint);\n  background: var(--ion-color-light); }\n  :host .start,\n  :host .end {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-flex: 1;\n            flex: 1; }\n  :host .start {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n    padding-right: 10px; }\n  :host .start .title {\n      font-size: 16px;\n      font-weight: 600; }\n  :host .start .content {\n      font-size: 12px;\n      padding: 10px 0;\n      border-bottom: 1px solid var(--ion-color-light-shade); }\n  :host .start .author {\n      display: -webkit-box;\n      display: flex;\n      margin: 10px 0;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column; }\n  :host .start .author .name {\n        font-size: 12px;\n        font-weight: 600;\n        color: var(--ion-color-primary); }\n  :host .start .author .publish-date {\n        font-size: 11px;\n        font-weight: 400;\n        color: var(--ion-color-medium-shade); }\n  :host .start .actions {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center; }\n  :host .start .actions ion-button {\n        --padding-start: 0;\n        --padding-end: 0; }\n  :host .start .actions small {\n        padding-left: 5px; }\n  :host .end .image {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n            flex: 1;\n    width: 100%;\n    border-radius: 6px;\n    overflow: hidden;\n    box-shadow: 1px 2px 5px var(--ion-color-medium-tint); }\n  :host .end .image .left,\n    :host .end .image .right {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      background: rgba(var(--ion-color-medium-rgb), 0.4);\n      padding: 2px 0;\n      color: var(--ion-color-light);\n      -webkit-box-pack: center;\n              justify-content: center; }\n  :host .end .image .center {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-flex: 1;\n              flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvc2hhcmVkL2NhcmQtdmlld3MvbW9kZXJuL21vZGVybi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG9EQUFvRDtFQUNwRCxrQ0FBa0MsRUFBQTtFQU5wQzs7SUFVSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixtQkFBTztZQUFQLE9BQU8sRUFBQTtFQVhYO0lBZUksNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIseUJBQThCO1lBQTlCLDhCQUE4QjtJQUM5QixtQkFBbUIsRUFBQTtFQWpCdkI7TUFvQk0sZUFBZTtNQUNmLGdCQUFnQixFQUFBO0VBckJ0QjtNQXlCTSxlQUFlO01BQ2YsZUFBZTtNQUNmLHFEQUFxRCxFQUFBO0VBM0IzRDtNQStCTSxvQkFBYTtNQUFiLGFBQWE7TUFDYixjQUFjO01BQ2QsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0IsRUFBQTtFQWpDNUI7UUFvQ1EsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQiwrQkFBK0IsRUFBQTtFQXRDdkM7UUEwQ1EsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixvQ0FBb0MsRUFBQTtFQTVDNUM7TUFpRE0sb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQW1CO2NBQW5CLG1CQUFtQixFQUFBO0VBbER6QjtRQXFEUSxrQkFBZ0I7UUFDaEIsZ0JBQWMsRUFBQTtFQXREdEI7UUEwRFEsaUJBQWlCLEVBQUE7RUExRHpCO0lBaUVNLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLG1CQUFPO1lBQVAsT0FBTztJQUNQLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLG9EQUFvRCxFQUFBO0VBdkUxRDs7TUEwRVEsb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQixrREFBa0Q7TUFDbEQsY0FBYztNQUNkLDZCQUE2QjtNQUM3Qix3QkFBdUI7Y0FBdkIsdUJBQXVCLEVBQUE7RUEvRS9CO01BbUZRLG9CQUFhO01BQWIsYUFBYTtNQUNiLG1CQUFPO2NBQVAsT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9zaGFyZWQvY2FyZC12aWV3cy9tb2Rlcm4vbW9kZXJuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICBib3gtc2hhZG93OiAxcHggMnB4IDVweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcblxyXG4gIC5zdGFydCxcclxuICAuZW5kIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLnN0YXJ0IHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuICAgIH1cclxuXHJcbiAgICAuYXV0aG9yIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnB1Ymxpc2gtZGF0ZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGlvbnMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwO1xyXG4gICAgICAgIC0tcGFkZGluZy1lbmQ6IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNtYWxsIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVuZCB7XHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMnB4IDVweCB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xyXG4gICAgICAubGVmdCxcclxuICAgICAgLnJpZ2h0IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuNCk7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDA7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");




let ModernComponent = class ModernComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    /**
     * @constructor
     * @param injector {Injector}
     */
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        /**
         * @description holds current index of image
         * @property currentIndex
         * @type number
         * @public
         * @default 0
         */
        this.currentIndex = 0;
        /**
         * @description emits event with type and feed
         * @example clicking like button will emit {type: 'like', data: feed}
         * @property cardEvent
         * @type EventEmitter<{type: string, data: Feed}>
         * @public
         */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @description get user on component init
     * @method ngOnInit
     * @public
     * @returns void
     */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.me = yield this.authService.getUser();
        });
    }
    /**
     * @description onclick emit event with event name and data
     * @method clicked
     * @param {string} name
     * @public
     * @returns void
     */
    clicked(name) {
        this.event.emit({ type: name, data: this.feed });
    }
    /**
     * @description navigate to the next image
     * @method forward
     * @public
     * @returns void
     */
    forward() {
        if (this.currentIndex < this.feed.images.length - 1) {
            this.currentIndex += 1;
        }
        else {
            this.currentIndex = 0;
        }
    }
    /**
     * @description navigate to the previous image
     * @method back
     * @public
     * @returns void
     */
    back() {
        if (this.currentIndex < 1) {
            this.currentIndex = this.feed.images.length - 1;
        }
        else {
            this.currentIndex -= 1;
        }
    }
};
ModernComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
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



/***/ }),

/***/ "./src/shared/card-views/showcase/showcase.component.scss":
/*!****************************************************************!*\
  !*** ./src/shared/card-views/showcase/showcase.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 10px;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 1px 2px 5px var(--ion-color-medium-tint);\n  background: var(--ion-color-light); }\n  :host .image-content {\n    display: -webkit-box;\n    display: flex;\n    height: 200px;\n    width: 100%; }\n  :host .image-content .left,\n    :host .image-content .right {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      background: rgba(var(--ion-color-medium-rgb), 0.6);\n      padding: 0 15px;\n      color: var(--ion-color-light); }\n  :host .image-content .center {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-flex: 1;\n              flex: 1; }\n  :host .image-content .right {\n      -webkit-box-pack: end;\n              justify-content: flex-end; }\n  :host .content {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    padding: 10px 15px; }\n  :host .content .content-header {\n      display: -webkit-box;\n      display: flex; }\n  :host .content .content-header .feed-info {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column;\n        -webkit-box-flex: 1;\n                flex: 1; }\n  :host .content .content-header .feed-info .title {\n          font-size: 14px;\n          font-weight: 600;\n          color: var(--ion-color-primary); }\n  :host .content .content-header .feed-info .subtitle {\n          padding: 10px 0;\n          font-size: 13px;\n          font-weight: 400; }\n  :host .content .author {\n      display: -webkit-box;\n      display: flex;\n      padding: 10px 0; }\n  :host .content .author .image {\n        width: 30px;\n        height: 30px;\n        border-radius: 6px; }\n  :host .content .author .details {\n        padding: 0 10px;\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n                flex-direction: column;\n        -webkit-box-flex: 1;\n                flex: 1; }\n  :host .content .author .details .name {\n          font-size: 13px;\n          font-weight: 500;\n          color: var(--ion-color-primary); }\n  :host .content .author .details .publish-date {\n          font-size: 11px;\n          font-weight: 400;\n          color: var(--ion-color-medium-shade); }\n  :host .content .actions {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      border-top: 1px solid var(--ion-color-light-shade); }\n  :host .content .actions small {\n        padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvc2hhcmVkL2NhcmQtdmlld3Mvc2hvd2Nhc2Uvc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0RBQW9EO0VBQ3BELGtDQUFrQyxFQUFBO0VBTnBDO0lBU0ksb0JBQWE7SUFBYixhQUFhO0lBQ2IsYUFBYTtJQUNiLFdBQVcsRUFBQTtFQVhmOztNQWVNLG9CQUFhO01BQWIsYUFBYTtNQUNiLHlCQUFtQjtjQUFuQixtQkFBbUI7TUFDbkIsa0RBQWtEO01BQ2xELGVBQWU7TUFDZiw2QkFBNkIsRUFBQTtFQW5CbkM7TUF1Qk0sb0JBQWE7TUFBYixhQUFhO01BQ2IsbUJBQU87Y0FBUCxPQUFPLEVBQUE7RUF4QmI7TUE0Qk0scUJBQXlCO2NBQXpCLHlCQUF5QixFQUFBO0VBNUIvQjtJQWlDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0QixrQkFBa0IsRUFBQTtFQW5DdEI7TUFzQ00sb0JBQWE7TUFBYixhQUFhLEVBQUE7RUF0Q25CO1FBeUNRLG9CQUFhO1FBQWIsYUFBYTtRQUNiLDRCQUFzQjtRQUF0Qiw2QkFBc0I7Z0JBQXRCLHNCQUFzQjtRQUN0QixtQkFBTztnQkFBUCxPQUFPLEVBQUE7RUEzQ2Y7VUE4Q1UsZUFBZTtVQUNmLGdCQUFnQjtVQUNoQiwrQkFBK0IsRUFBQTtFQWhEekM7VUFvRFUsZUFBZTtVQUNmLGVBQWU7VUFDZixnQkFBZ0IsRUFBQTtFQXREMUI7TUE0RE0sb0JBQWE7TUFBYixhQUFhO01BQ2IsZUFBZSxFQUFBO0VBN0RyQjtRQWdFUSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQixFQUFBO0VBbEUxQjtRQXNFUSxlQUFlO1FBQ2Ysb0JBQWE7UUFBYixhQUFhO1FBQ2IsNEJBQXNCO1FBQXRCLDZCQUFzQjtnQkFBdEIsc0JBQXNCO1FBQ3RCLG1CQUFPO2dCQUFQLE9BQU8sRUFBQTtFQXpFZjtVQTRFVSxlQUFlO1VBQ2YsZ0JBQWdCO1VBQ2hCLCtCQUErQixFQUFBO0VBOUV6QztVQWtGVSxlQUFlO1VBQ2YsZ0JBQWdCO1VBQ2hCLG9DQUFvQyxFQUFBO0VBcEY5QztNQTBGTSxvQkFBYTtNQUFiLGFBQWE7TUFDYix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLGtEQUFrRCxFQUFBO0VBNUZ4RDtRQStGUSxpQkFBaUIsRUFBQSIsImZpbGUiOiJzcmMvc2hhcmVkL2NhcmQtdmlld3Mvc2hvd2Nhc2Uvc2hvd2Nhc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDFweCAycHggNXB4IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuXHJcbiAgLmltYWdlLWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAubGVmdCxcclxuICAgIC5yaWdodCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjYpO1xyXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jZW50ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5yaWdodCB7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuXHJcbiAgICAuY29udGVudC1oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgLmZlZWQtaW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hdXRob3Ige1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcblxyXG4gICAgICAuaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kZXRhaWxzIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnB1Ymxpc2gtZGF0ZSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hY3Rpb25zIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcblxyXG4gICAgICBzbWFsbCB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");




let ShowcaseComponent = class ShowcaseComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    /**
     * @constructor
     * @param injector {Injector}
     */
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        /**
         * @description holds current index of image
         * @property currentIndex
         * @type number
         * @public
         * @default 0
         */
        this.currentIndex = 0;
        /**
         * @description emits event with type and feed
         * @example clicking like button will emit {type: 'like', data: feed}
         * @property cardEvent
         * @type EventEmitter<{type: string, data: Feed}>
         * @public
         */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @description get user on component init
     * @method ngOnInit
     * @public
     * @returns void
     */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.me = yield this.authService.getUser();
        });
    }
    /**
     * @description onclick emit event with event name and data
     * @method clicked
     * @param {string} name
     * @public
     * @returns void
     */
    clicked(name) {
        this.event.emit({ type: name, data: this.feed });
    }
    /**
     * @description navigate to the next image
     * @method forward
     * @public
     * @returns void
     */
    forward() {
        if (this.currentIndex < this.feed.images.length - 1) {
            this.currentIndex += 1;
        }
        else {
            this.currentIndex = 0;
        }
    }
    /**
     * @description navigate to the previous image
     * @method back
     * @public
     * @returns void
     */
    back() {
        if (this.currentIndex < 1) {
            this.currentIndex = this.feed.images.length - 1;
        }
        else {
            this.currentIndex -= 1;
        }
    }
};
ShowcaseComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
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



/***/ }),

/***/ "./src/shared/card-views/timeline/timeline.component.scss":
/*!****************************************************************!*\
  !*** ./src/shared/card-views/timeline/timeline.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  margin: 25px 20px; }\n  :host .author {\n    display: -webkit-box;\n    display: flex; }\n  :host .author .image {\n      width: 40px;\n      height: 40px;\n      border-radius: 100%; }\n  :host .author .details {\n      padding: 0 10px;\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      -webkit-box-flex: 1;\n              flex: 1; }\n  :host .author .details .name {\n        font-size: 14px;\n        font-weight: 500; }\n  :host .author .details .publish-date {\n        font-size: 11px;\n        font-weight: 400;\n        color: var(--ion-color-medium-shade); }\n  :host .content {\n    display: -webkit-box;\n    display: flex; }\n  :host .content .info-content {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n              flex-direction: column;\n      -webkit-box-flex: 1;\n              flex: 1;\n      background: var(--ion-color-light);\n      margin-left: 10px;\n      padding: 10px; }\n  :host .content .info-content .image-content {\n        display: -webkit-box;\n        display: flex;\n        width: 100%; }\n  :host .content .info-content .image-content .image-item {\n          display: -webkit-box;\n          display: flex;\n          width: 100%;\n          height: 80px;\n          border-radius: 6px;\n          margin: 10px 2px; }\n  :host .content .info-content .title {\n        font-size: 14px;\n        font-weight: 600;\n        padding: 10px 0; }\n  :host .content .info-content .subtitle {\n        font-size: 13px;\n        font-weight: 400; }\n  :host .actions {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n    margin-left: -5px; }\n  :host .actions small {\n      padding-left: 3px; }\n  :host .actions .start {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-flex: 1;\n              flex: 1; }\n  :host .actions .end {\n      display: -webkit-box;\n      display: flex; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qaW5uL0Rlc2t0b3AvZGV2L3NpbmVvX21lc3Nlbmdlci9zcmMvc2hhcmVkL2NhcmQtdmlld3MvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7RUFGbkI7SUFLSSxvQkFBYTtJQUFiLGFBQWEsRUFBQTtFQUxqQjtNQVFNLFdBQVc7TUFDWCxZQUFZO01BQ1osbUJBQW1CLEVBQUE7RUFWekI7TUFjTSxlQUFlO01BQ2Ysb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsbUJBQU87Y0FBUCxPQUFPLEVBQUE7RUFqQmI7UUFvQlEsZUFBZTtRQUNmLGdCQUFnQixFQUFBO0VBckJ4QjtRQXlCUSxlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLG9DQUFvQyxFQUFBO0VBM0I1QztJQWlDSSxvQkFBYTtJQUFiLGFBQWEsRUFBQTtFQWpDakI7TUFvQ00sb0JBQWE7TUFBYixhQUFhO01BQ2IsNEJBQXNCO01BQXRCLDZCQUFzQjtjQUF0QixzQkFBc0I7TUFDdEIsbUJBQU87Y0FBUCxPQUFPO01BQ1Asa0NBQWtDO01BQ2xDLGlCQUFpQjtNQUNqQixhQUFhLEVBQUE7RUF6Q25CO1FBMkNRLG9CQUFhO1FBQWIsYUFBYTtRQUNiLFdBQVcsRUFBQTtFQTVDbkI7VUE4Q1Usb0JBQWE7VUFBYixhQUFhO1VBQ2IsV0FBVztVQUNYLFlBQVk7VUFDWixrQkFBa0I7VUFDbEIsZ0JBQWdCLEVBQUE7RUFsRDFCO1FBdURRLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZUFBZSxFQUFBO0VBekR2QjtRQTZEUSxlQUFlO1FBQ2YsZ0JBQWdCLEVBQUE7RUE5RHhCO0lBb0VJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsaUJBQWlCLEVBQUE7RUF2RXJCO01BeUVNLGlCQUFpQixFQUFBO0VBekV2QjtNQTZFTSxvQkFBYTtNQUFiLGFBQWE7TUFDYixtQkFBTztjQUFQLE9BQU8sRUFBQTtFQTlFYjtNQWtGTSxvQkFBYTtNQUFiLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvc2hhcmVkL2NhcmQtdmlld3MvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luOiAyNXB4IDIwcHg7XHJcblxyXG4gIC5hdXRob3Ige1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAuaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogNDBweDtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXRhaWxzIHtcclxuICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucHVibGlzaC1kYXRlIHtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLmluZm8tY29udGVudCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAuaW1hZ2UtY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAuaW1hZ2UtaXRlbSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEwcHggMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNXB4O1xyXG4gICAgc21hbGwge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhcnQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbmQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");




let TimelineComponent = class TimelineComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    /**
     * @constructor
     * @param injector {Injector}
     */
    constructor(injector, authService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        /**
         * @description emits event with type and feed
         * @example clicking like button will emit {type: 'like', data: feed}
         * @property cardEvent
         * @type EventEmitter<{type: string, data: Feed}>
         * @public
         */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @description get user on component init
     * @method ngOnInit
     * @public
     * @returns void
     */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.me = yield this.authService.getUser();
        });
    }
    /**
     * @description onclick emit event with event name and data
     * @method clicked
     * @param {string} name
     * @public
     * @returns void
     */
    clicked(name) {
        this.event.emit({ type: name, data: this.feed });
    }
};
TimelineComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
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



/***/ })

}]);
//# sourceMappingURL=pages-feed-feed-module-es2015.js.map