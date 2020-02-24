(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./invite-group/invite-group.module": [
		"./src/app/invite-group/invite-group.module.ts",
		"invite-group-invite-group-module"
	],
	"./translator/translator.module": [
		"./src/app/translator/translator.module.ts",
		"translator-translator-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet-controller_8.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-controller_8.entry.js",
		"common",
		0
	],
	"./ion-action-sheet-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js",
		"common",
		1
	],
	"./ion-action-sheet-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js",
		"common",
		2
	],
	"./ion-alert-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js",
		"common",
		3
	],
	"./ion-alert-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js",
		"common",
		4
	],
	"./ion-app_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js",
		"common",
		5
	],
	"./ion-app_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js",
		"common",
		6
	],
	"./ion-avatar_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js",
		"common",
		7
	],
	"./ion-avatar_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js",
		"common",
		8
	],
	"./ion-back-button-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js",
		"common",
		9
	],
	"./ion-back-button-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js",
		"common",
		10
	],
	"./ion-backdrop-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js",
		11
	],
	"./ion-backdrop-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js",
		12
	],
	"./ion-button_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js",
		"common",
		13
	],
	"./ion-button_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js",
		"common",
		14
	],
	"./ion-card_5-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js",
		"common",
		15
	],
	"./ion-card_5-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js",
		"common",
		16
	],
	"./ion-checkbox-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js",
		"common",
		17
	],
	"./ion-checkbox-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js",
		"common",
		18
	],
	"./ion-chip-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js",
		"common",
		19
	],
	"./ion-chip-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js",
		"common",
		20
	],
	"./ion-col_3.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		21
	],
	"./ion-datetime_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js",
		"common",
		22
	],
	"./ion-datetime_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js",
		"common",
		23
	],
	"./ion-fab_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js",
		"common",
		24
	],
	"./ion-fab_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js",
		"common",
		25
	],
	"./ion-img.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		26
	],
	"./ion-infinite-scroll_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js",
		"common",
		27
	],
	"./ion-infinite-scroll_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js",
		"common",
		28
	],
	"./ion-input-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js",
		"common",
		29
	],
	"./ion-input-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js",
		"common",
		30
	],
	"./ion-item-option_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js",
		"common",
		31
	],
	"./ion-item-option_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js",
		"common",
		32
	],
	"./ion-item_8-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js",
		"common",
		33
	],
	"./ion-item_8-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js",
		"common",
		34
	],
	"./ion-loading-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js",
		"common",
		35
	],
	"./ion-loading-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js",
		"common",
		36
	],
	"./ion-menu_4-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-ios.entry.js",
		"common",
		37
	],
	"./ion-menu_4-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-menu_4-md.entry.js",
		"common",
		38
	],
	"./ion-modal-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js",
		"common",
		39
	],
	"./ion-modal-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js",
		"common",
		40
	],
	"./ion-nav_5.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-nav_5.entry.js",
		"common",
		41
	],
	"./ion-popover-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js",
		"common",
		42
	],
	"./ion-popover-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js",
		"common",
		43
	],
	"./ion-progress-bar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js",
		"common",
		44
	],
	"./ion-progress-bar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js",
		"common",
		45
	],
	"./ion-radio_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js",
		"common",
		46
	],
	"./ion-radio_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js",
		"common",
		47
	],
	"./ion-range-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js",
		"common",
		48
	],
	"./ion-range-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js",
		"common",
		49
	],
	"./ion-refresher_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js",
		"common",
		50
	],
	"./ion-refresher_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js",
		"common",
		51
	],
	"./ion-reorder_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js",
		"common",
		52
	],
	"./ion-reorder_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js",
		"common",
		53
	],
	"./ion-ripple-effect.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		54
	],
	"./ion-route_4.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		55
	],
	"./ion-searchbar-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js",
		"common",
		56
	],
	"./ion-searchbar-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js",
		"common",
		57
	],
	"./ion-segment_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js",
		"common",
		58
	],
	"./ion-segment_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js",
		"common",
		59
	],
	"./ion-select_3-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js",
		"common",
		60
	],
	"./ion-select_3-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js",
		"common",
		61
	],
	"./ion-slide_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js",
		62
	],
	"./ion-slide_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js",
		63
	],
	"./ion-spinner.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		64
	],
	"./ion-split-pane-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js",
		65
	],
	"./ion-split-pane-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js",
		66
	],
	"./ion-tab-bar_2-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js",
		"common",
		67
	],
	"./ion-tab-bar_2-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js",
		"common",
		68
	],
	"./ion-tab_2.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		69
	],
	"./ion-text.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		70
	],
	"./ion-textarea-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js",
		"common",
		71
	],
	"./ion-textarea-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js",
		"common",
		72
	],
	"./ion-toast-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js",
		"common",
		73
	],
	"./ion-toast-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js",
		"common",
		74
	],
	"./ion-toggle-ios.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js",
		"common",
		75
	],
	"./ion-toggle-md.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js",
		"common",
		76
	],
	"./ion-virtual-scroll.entry.js": [
		"./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		77
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/app.component.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/app.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-app>\r\n  <ion-split-pane contentId=\"main-content\">\r\n    <ion-menu type=\"overlay\" contentId=\"main-content\">\r\n      <ion-header>\r\n        <ion-toolbar color=\"primary\">\r\n          <ion-title>{{ 'app-component.menu' | translate }}</ion-title>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <ion-content>\r\n        <ion-list\r\n          class=\"menu\"\r\n          [colorLuminance]=\"{\r\n            color: color,\r\n            percent: pages.indexOf(pages[pages.length - 1]) * 3,\r\n            rgbHex: true\r\n          }\"\r\n        >\r\n          <ion-menu-toggle auto-hide=\"false\">\r\n            <div\r\n              class=\"item\"\r\n              menuClose\r\n              *ngFor=\"let page of pages; let i = index\"\r\n              (click)=\"open(page)\"\r\n              [ngStyle]=\"{ height: 100 / pages.length + '%' }\"\r\n              [colorLuminance]=\"{ color: color, percent: i * 3, rgbHex: true }\"\r\n            >\r\n              <ion-icon *ngIf=\"!page.image\" src=\"../assets/icons/{{ page.icon }}.svg\"></ion-icon>\r\n              <div class=\"image\" *ngIf=\"page.image\" [image-loader]=\"page.icon\"></div>\r\n            </div>\r\n          </ion-menu-toggle>\r\n        </ion-list>\r\n      </ion-content>\r\n    </ion-menu>\r\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\r\n  </ion-split-pane>\r\n</ion-app>\r\n<!--  -->\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/components/accordion/components/accordion/accordion.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/components/accordion/components/accordion/accordion.component.html ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/components/accordion/components/panel/panel.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/components/accordion/components/panel/panel.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-header\"\r\n  (click)=\"onClick()\"\r\n  [ngClass]=\"{ open: isBodyVisible }\">\r\n  <div class=\"title\">{{title}}</div>\r\n  <ion-icon slot=\"start\"\r\n    name=\"arrow-forward\"\r\n    mode=\"ios\"\r\n    *ngIf=\"!isBodyVisible\"></ion-icon>\r\n  <ion-icon slot=\"start\"\r\n    mode=\"ios\"\r\n    name=\"arrow-down\"\r\n    *ngIf=\"isBodyVisible\"></ion-icon>\r\n</div>\r\n\r\n<div class=\"panel-body\"\r\n  [hidden]=\"!isBodyVisible\">\r\n  <ng-content></ng-content>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/components/no-data/no-data.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/components/no-data/no-data.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"image\" *ngIf=\"config?.image?.show\" [image-loader]=\"config?.image?.url\"></div>\r\n<div class=\"title\">{{ config?.content?.title | translate }}</div>\r\n<div class=\"description\">{{ config?.content?.description | translate }}</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/components/rating/rating.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/components/rating/rating.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span tabindex=\"0\" style=\"display: flex;\">\r\n  <div *ngFor=\"let item of range; let i = index\">\r\n    <ion-icon name=\"star\" [color]=\"color\" *ngIf=\"i < rate\" (click)=\"update(i + 1)\"></ion-icon>\r\n    <ion-icon name=\"star-outline\" *ngIf=\"i >= rate || rate===undefined\" (click)=\"update(i + 1)\"></ion-icon>\r\n  </div>\r\n</span>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/components/search-bar/search-bar.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/components/search-bar/search-bar.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search\">\r\n  <input\r\n    type=\"search\"\r\n    #searchInput\r\n    placeholder=\"{{ 'other.search-placeholder' | translate }}\"\r\n    (keyup)=\"search.next($event.target.value)\"\r\n  />\r\n  <ion-icon *ngIf=\"hasValue\" color=\"medium\" name=\"close\" (click)=\"clearSearch(searchInput)\"></ion-icon>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/components/simple-item/simple-item.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/components/simple-item/simple-item.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"prefix\">\r\n  <ng-content select=\"[prefix]\"></ng-content>\r\n</div>\r\n<div class=\"content\">\r\n  <ng-content></ng-content>\r\n</div>\r\n<div class=\"suffix\">\r\n  <ng-content select=\"[suffix]\"></ng-content>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/components/spinner/spinner.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/components/spinner/spinner.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"contain\">\r\n    <div class=\"loading\">Please wait...</div>\r\n    <div class=\"svg-animation\">\r\n      <div class=\"spinner-bar\" image-loader=\"assets/images/other/loading.gif\"></div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/components/tab-menu/tab-menu.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/components/tab-menu/tab-menu.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-row class=\"tab-menu\">\r\n  <ion-col\r\n    class=\"ion-text-center\"\r\n    *ngFor=\"let view of tabs; let i = index\"\r\n    [ngClass]=\"{ active: view.active }\"\r\n    (click)=\"onViewSelect(i); view.event ? view.event() : null\"\r\n  >\r\n    <ion-icon *ngIf=\"view.icon\" color=\"medium\" [name]=\"view.icon\"></ion-icon>\r\n    <p *ngIf=\"view.name\" class=\"ion-no-margin\" [innerText]=\"view.name | translate\"></p>\r\n  </ion-col>\r\n</ion-row>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/form-field/components/form-field/form-field.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/form-field/components/form-field/form-field.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\r\n  class=\"input-wrapper {{ color }} {{ expand }}\"\r\n  [ngClass]=\"{\r\n    fill: fill,\r\n    border: border,\r\n    round: shape,\r\n    outline: outline,\r\n    error: getInvalidState && (getDirtyState || getTouchedState)\r\n  }\"\r\n>\r\n  <div class=\"prefix\">\r\n    <ng-content select=\"[prefix]\" #prefix></ng-content>\r\n  </div>\r\n  <div class=\"input\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n  <div class=\"suffix\">\r\n    <ng-content select=\"[suffix]\" #suffix></ng-content>\r\n  </div>\r\n</div>\r\n<div class=\"error-section\">\r\n  <ng-content select=\"[errors]\"></ng-content>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/modals/calendar-event-list/calendar-event-list.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/modals/calendar-event-list/calendar-event-list.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button fill=\"clear\"\r\n      size=\"small\"\r\n      color=\"medium\"\r\n      (click)=\"closeModal()\">\r\n      <ion-icon mode=\"md\"\r\n        src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollY=\"false\"\r\n  scrollX=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{'calendar-event-list-component.title' | translate}}\r\n      </div>\r\n      <div class=\"options\">\r\n        <ion-button fill=\"clear\"\r\n          size=\"small\"\r\n          color=\"medium\"\r\n          (click)=\"open(day.data)\">\r\n          <ion-icon mode=\"md\"\r\n            src=\"assets/icons/plus.svg\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n    <div class=\"date-title\">{{ day.data.date | date: 'longDate' }}</div>\r\n    <div class=\"content-scroll\">\r\n      <app-simple-item *ngFor=\"let item of events; let i = index\"\r\n        class=\"event\">\r\n        <ion-icon prefix\r\n          [name]=\"!item.isComplete ? 'square-outline': 'checkbox'\"\r\n          [color]=\"!item.isComplete ? 'dark': 'primary'\"\r\n          (click)=\"item.isComplete = !item.isComplete; updateAsCompleted(item, i)\"></ion-icon>\r\n        <div class=\"detail\"\r\n          (click)=\"open(day.data, item, i)\">\r\n          <div class=\"title\">{{ item.title }}</div>\r\n          <div class=\"time\">{{item.start | date: 'shortTime'}}\r\n            {{item.end !== item.start ? (item.end | date: 'shortTime'): ''}}</div>\r\n        </div>\r\n\r\n        <ion-icon suffix\r\n          (click)=\"delete(item, i)\"\r\n          src=\"assets/icons/trash.svg\"></ion-icon>\r\n      </app-simple-item>\r\n      <app-no-data *ngIf=\"events.length === 0\"> </app-no-data>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/modals/calendar-event-manage/calendar-event-manage.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/modals/calendar-event-manage/calendar-event-manage.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"closeModal()\">\r\n      <ion-icon mode=\"md\" src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n<ion-content>\r\n  <div class=\"content-wrapper\" *ngIf=\"event\">\r\n    <div class=\"header has-toolbar\">\r\n      <div class=\"title\">\r\n        {{\r\n          event.id\r\n            ? ('calendar-event-manage-component.edit-title' | translate)\r\n            : ('calendar-event-manage-component.add-title' | translate)\r\n        }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"scroll-content\">\r\n      <div class=\"title-section form-item\">\r\n        <div class=\"left\">\r\n          <div class=\"label\">{{ 'calendar-event-manage-component.title-label' | translate }}</div>\r\n          <textarea autosize maxRows=\"3\" placeholder=\"Enter title here...\" [(ngModel)]=\"event.title\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"date-section form-item\">\r\n        <div class=\"left\">\r\n          <div class=\"label small\">{{ 'calendar-event-manage-component.start-date-label' | translate }}</div>\r\n          <ion-datetime displayFormat=\"DD MMM YYYY\" pickerFormat=\"DD MMM YYYY\" [(ngModel)]=\"event.start\">\r\n          </ion-datetime>\r\n        </div>\r\n        <div class=\"right\">\r\n          <div class=\"label small\">{{ 'calendar-event-manage-component.end-date-label' | translate }}</div>\r\n          <ion-datetime displayFormat=\"DD MMM YYYY\" pickerFormat=\"DD MMM YYYY\" [(ngModel)]=\"event.end\"></ion-datetime>\r\n        </div>\r\n      </div>\r\n      <div class=\"all-day-section form-item\">\r\n        <ion-label>{{ 'calendar-event-manage-component.all-day-label' | translate }}</ion-label>\r\n        <ion-toggle></ion-toggle>\r\n      </div>\r\n      <div class=\"time-section form-item\">\r\n        <div class=\"left\">\r\n          <div class=\"label small\">{{ 'calendar-event-manage-component.start-time-label' | translate }}</div>\r\n          <ion-datetime displayFormat=\"HH:mm:ss a\" pickerFormat=\"HH:mm:ss a\" [(ngModel)]=\"event.start\"></ion-datetime>\r\n        </div>\r\n        <div class=\"right\">\r\n          <div class=\"label small\">{{ 'calendar-event-manage-component.end-time-label' | translate }}</div>\r\n          <ion-datetime displayFormat=\"HH:mm:ss a\" pickerFormat=\"HH:mm:ss a\" [(ngModel)]=\"event.end\"></ion-datetime>\r\n        </div>\r\n      </div>\r\n      <div class=\"remind-section form-item\">\r\n        <ion-label>{{ 'calendar-event-manage-component.remind-me-label' | translate }}</ion-label>\r\n        <ion-toggle color=\"secondary\" [(ngModel)]=\"showRemind\"></ion-toggle>\r\n      </div>\r\n      <div class=\"remind-detail form-item\" [hidden]=\"!showRemind\">\r\n        <div\r\n          class=\"content\"\r\n          *ngFor=\"let reminder of event.recurrence; let i = index; let first = first; let last = last\"\r\n        >\r\n          <div class=\"left\">\r\n            <ion-select [(ngModel)]=\"event.recurrence[i]\" placeholder=\"Set Reminder\">\r\n              <ion-select-option [value]=\"time\" *ngFor=\"let time of remindTimes\"\r\n                >{{ getHumanize(time) }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n          <div class=\"right\">\r\n            <ion-button *ngIf=\"!last\" size=\"small\" fill=\"outline\" color=\"danger\" (click)=\"removeReminder(i)\">\r\n              <ion-icon name=\"remove\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button fill=\"outline\" size=\"small\" color=\"secondary\" (click)=\"addReminder()\">\r\n              <ion-icon name=\"add\"></ion-icon>\r\n            </ion-button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"notes-section form-item\">\r\n        <ion-label>{{ 'calendar-event-manage-component.add-notes-label' | translate }}</ion-label>\r\n        <ion-toggle color=\"secondary\" [(ngModel)]=\"showNotes\"></ion-toggle>\r\n      </div>\r\n      <div class=\"notes-detail form-item\" *ngIf=\"showNotes\">\r\n        <textarea autosize maxRows=\"3\" [(ngModel)]=\"event.description\" placeholder=\"Enter note\"></textarea>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-button expand=\"full\" (click)=\"save()\">\r\n    {{\r\n      event.id\r\n        ? ('calendar-event-manage-component.edit-title' | translate)\r\n        : ('calendar-event-manage-component.add-title' | translate)\r\n    }}\r\n  </ion-button>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/modals/change-password/change-password.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/modals/change-password/change-password.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button fill=\"clear\"\r\n      size=\"small\"\r\n      color=\"medium\"\r\n      (click)=\"closeModal()\">\r\n      <ion-icon mode=\"md\"\r\n        src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\"\r\n  scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{'change-password-component.title' | translate}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\">\r\n\r\n        <!-- old password -->\r\n        <div class=\"form-label\">{{ 'change-password-component.old-password-label' | translate }}</div>\r\n        <form-field fill=\"true\"\r\n          color=\"medium\">\r\n          <ion-icon prefix\r\n            src=\"assets/icons/unlock.svg\"></ion-icon>\r\n          <ion-input inputRef\r\n            type=\"password\"\r\n            [(ngModel)]=\"model.oldPassword\"\r\n            #opassword=\"ngModel\"\r\n            required></ion-input>\r\n\r\n          <div errors\r\n            *ngIf=\"opassword.touched && opassword.invalid\">\r\n            <span *ngIf=\"opassword?.errors?.required\">{{\r\n                  'form-validation-messages.required' | translate\r\n                }}</span>\r\n          </div>\r\n        </form-field>\r\n\r\n        <!-- new password -->\r\n        <div class=\"form-label\">{{ 'change-password-component.new-password-label' | translate }}</div>\r\n        <form-field fill=\"true\"\r\n          color=\"medium\">\r\n          <ion-icon prefix\r\n            src=\"assets/icons/lock.svg\"></ion-icon>\r\n          <ion-input inputRef\r\n            type=\"password\"\r\n            [(ngModel)]=\"model.password\"\r\n            #password=\"ngModel\"\r\n            (secure)=\"passwordStrength = $event\"\r\n            required></ion-input>\r\n          <small class=\"pass-strength\"\r\n            suffix\r\n            [ngStyle]=\"{ background: 'var(--ion-color-' + passwordStrength + ')' }\"></small>\r\n          <div errors\r\n            *ngIf=\"password.touched && password.invalid\">\r\n            <span *ngIf=\"password?.errors?.required\">{{\r\n                'form-validation-messages.required' | translate\r\n              }}</span>\r\n            <span *ngIf=\"password?.errors?.secure\">{{\r\n                'form-validation-messages.password-no-secure' | translate\r\n              }}</span>\r\n          </div>\r\n        </form-field>\r\n\r\n        <!-- retype password -->\r\n        <div class=\"form-label\">{{ 'change-password-component.retype-password-label' | translate }}</div>\r\n        <form-field fill=\"true\"\r\n          color=\"medium\">\r\n          <ion-icon prefix\r\n            src=\"assets/icons/key.svg\"></ion-icon>\r\n          <ion-input inputRef\r\n            type=\"password\"\r\n            [(ngModel)]=\"model.rpassword\"\r\n            [compare-password]=\"password\"\r\n            #rpassword=\"ngModel\"\r\n            required></ion-input>\r\n\r\n          <div errors\r\n            *ngIf=\"rpassword.touched && rpassword.invalid\">\r\n            <span *ngIf=\"rpassword?.errors?.required\">{{\r\n                'form-validation-messages.required' | translate\r\n              }}</span>\r\n            <span *ngIf=\"rpassword?.errors?.compareTo\">{{\r\n                'form-validation-messages.password-no-match' | translate\r\n              }}</span>\r\n          </div>\r\n        </form-field>\r\n\r\n        <ion-button expand=\"full\"\r\n          shape=\"round\"\r\n          [btnStatus]=\"loading\"\r\n          (click)=\"changePassword()\">\r\n          {{ 'change-password-component.change-password' | translate }}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/modals/edit-profile/edit-profile.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/modals/edit-profile/edit-profile.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"closeModal()\">\r\n      <ion-icon mode=\"md\" src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'edit-profile-component.title' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\" *ngIf=\"currentUser\">\r\n        <!-- profile image -->\r\n        <div class=\"profile-image\" [image-loader]=\"currentUser.photoURL\">\r\n          <ion-icon size=\"large\" color=\"light\" prefix src=\"assets/icons/camera.svg\" (click)=\"changePhoto()\"></ion-icon>\r\n        </div>\r\n        <div class=\"profile-detail\">\r\n          <!-- display name -->\r\n          <div class=\"form-label\">{{ 'edit-profile-component.display-name-label' | translate }}</div>\r\n          <form-field fill=\"true\" color=\"medium\">\r\n            <ion-icon prefix src=\"assets/icons/user.svg\"></ion-icon>\r\n            <ion-input inputRef required [(ngModel)]=\"currentUser.displayName\"></ion-input>\r\n          </form-field>\r\n\r\n          <!-- email -->\r\n          <div class=\"form-label\">{{ 'edit-profile-component.email-label' | translate }}</div>\r\n          <form-field fill=\"true\" color=\"medium\">\r\n            <ion-icon prefix src=\"assets/icons/mail.svg\"></ion-icon>\r\n            <ion-input inputRef email required [(ngModel)]=\"currentUser.email\"></ion-input>\r\n          </form-field>\r\n\r\n          <!-- status message -->\r\n          <div class=\"form-label\">{{ 'edit-profile-component.status-message-label' | translate }}</div>\r\n          <form-field fill=\"true\" color=\"medium\" class=\"textarea\">\r\n            <ion-icon prefix src=\"assets/icons/copy.svg\"></ion-icon>\r\n            <textarea\r\n              inputRef\r\n              autosize\r\n              maxRows=\"3\"\r\n              placeholder=\"Status Message\"\r\n              [(ngModel)]=\"currentUser.statusMessage\"\r\n            ></textarea>\r\n          </form-field>\r\n\r\n          <!-- country selection -->\r\n          <div class=\"form-label\">{{ 'edit-profile-component.country-label' | translate }}</div>\r\n          <form-field fill=\"true\" color=\"medium\">\r\n            <ion-icon prefix src=\"assets/icons/map-pin.svg\"></ion-icon>\r\n            <ion-select inputRef required [(ngModel)]=\"currentUser.country\" [interfaceOptions]=\"countrySelectOptions\">\r\n              <ion-select-option [value]=\"item.alpha2Code\" *ngFor=\"let item of countrySelectOptions.data | async\">\r\n                {{ item.name }}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </form-field>\r\n\r\n          <!-- phone -->\r\n          <div class=\"form-label\">{{ 'edit-profile-component.mobile-label' | translate }}</div>\r\n          <form-field fill=\"true\" color=\"medium\">\r\n            <ion-icon prefix src=\"assets/icons/phone-call.svg\"></ion-icon>\r\n            <ion-input\r\n              inputRef\r\n              [phone]=\"currentUser.country\"\r\n              [disabled]=\"!currentUser.country\"\r\n              [(ngModel)]=\"currentUser.mobile\"\r\n            ></ion-input>\r\n            <div\r\n              *ngIf=\"currentUser.country\"\r\n              class=\"flag-img\"\r\n              suffix\r\n              image-loader=\"assets/images/flags/{{ currentUser.country.toLowerCase() }}.svg\"\r\n            ></div>\r\n          </form-field>\r\n        </div>\r\n\r\n        <ion-button expand=\"full\" (click)=\"save()\">{{ 'edit-profile-component.update-button' | translate }}</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<app-spinner *ngIf=\"loading\"></app-spinner>\r\n\r\n<!-- required for browser file upload -->\r\n<input hidden #fileInputButton type=\"file\" (change)=\"detectFiles($event)\" multiple=\"false\" />\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/modals/feedback/feedback.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/modals/feedback/feedback.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"closeModal()\">\r\n      <ion-icon mode=\"md\" src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'feedback-component.title' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\">\r\n        <p class=\"info\">{{ 'feedback-component.info' | translate }}</p>\r\n\r\n        <div class=\"form-label\">{{ 'feedback-component.feedback-label' | translate }}</div>\r\n        <form-field fill=\"true\" color=\"medium\" class=\"textarea\">\r\n          <ion-icon prefix src=\"assets/icons/copy.svg\"></ion-icon>\r\n          <textarea\r\n            inputRef\r\n            autosize\r\n            maxRows=\"3\"\r\n            placeholder=\"{{ 'feedback-component.feedback-placeholder' | translate }}\"\r\n            [(ngModel)]=\"model.comment\"\r\n          ></textarea>\r\n        </form-field>\r\n\r\n        <ion-button expand=\"full\" (click)=\"save()\">{{ 'feedback-component.send-button' | translate }}</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/modals/gallery-picker/gallery-picker.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/modals/gallery-picker/gallery-picker.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar mode=\"md\" color=\"dark\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button size=\"small\" color=\"light\" (click)=\"closeModal()\">\r\n        <ion-icon src=\"assets/icons/x.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button size=\"small\" color=\"light\" (click)=\"remove()\" *ngIf=\"images.length > 1\">\r\n        <ion-icon src=\"assets/icons/trash.svg\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button size=\"small\" color=\"light\" (click)=\"save()\">\r\n        <ion-icon src=\"assets/icons/save.svg\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button size=\"small\" color=\"light\" (click)=\"share()\">\r\n        <ion-icon src=\"assets/icons/share.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"image-options\" *ngIf=\"images.length > 1\">\r\n      <div class=\"images\">\r\n        <div\r\n          class=\"image\"\r\n          [ngClass]=\"{ active: selectedImageIndex === i }\"\r\n          *ngFor=\"let item of images; let i = index\"\r\n          [image-loader]=\"item\"\r\n          (click)=\"mainImage = item; selectedImageIndex = i\"\r\n        ></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"main-image\" [image-loader]=\"mainImage\"></div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar class=\"custom-form\" color=\"dark\">\r\n    <textarea autosize maxRows=\"3\" name=\"message\" placeholder=\"Type message here...\" [(ngModel)]=\"textMsg\"></textarea>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button shape=\"round\" color=\"primary\" fill=\"solid\" (click)=\"send(textMsg, images)\">\r\n        <ion-icon src=\"assets/icons/send.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/modals/image-preview/image-preview.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/modals/image-preview/image-preview.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <div class=\"content-wrapper\" [image-loader]=\"image\"></div>\r\n</ion-content>\r\n\r\n<ion-footer>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button class=\"circle\" fill=\"clear\" color=\"secondary\" (click)=\"save(image)\">\r\n        <ion-icon src=\"assets/icons/save.svg\"></ion-icon>\r\n      </ion-button>\r\n      <ion-button [btnStatus]=\"loading\" class=\"circle\" fill=\"clear\" color=\"primary\" (click)=\"share(image)\">\r\n        <ion-icon src=\"assets/icons/share.svg\"></ion-icon>\r\n      </ion-button>\r\n\r\n      <!-- <ion-button [btnStatus]=\"loading\" class=\"circle\" fill=\"clear\" color=\"danger\" (click)=\"delete(image)\">\r\n        <ion-icon src=\"assets/icons/trash.svg\"></ion-icon>\r\n      </ion-button> -->\r\n    </ion-buttons>\r\n\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button [btnStatus]=\"loading\" class=\"circle\" fill=\"clear\" color=\"primary\" (click)=\"closeModal()\">\r\n        <ion-icon src=\"assets/icons/x.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-footer>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/modals/lang-select/lang-select.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/modals/lang-select/lang-select.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"closeModal()\">\r\n      <ion-icon mode=\"md\" src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'lang-select-component.title' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\">\r\n        <app-simple-item *ngFor=\"let item of countries\">\r\n          <div class=\"img\" prefix image-loader=\"assets/images/flags/{{ item.alpha2Code.toLowerCase() }}.svg\"></div>\r\n          <strong>{{ item.name }}</strong>\r\n          <p>{{ item.subregion }}</p>\r\n\r\n          <ion-button\r\n            size=\"small\"\r\n            suffix\r\n            *ngIf=\"item.alpha2Code.toLowerCase() !== setting.language\"\r\n            (click)=\"select(item.alpha2Code.toLowerCase())\"\r\n            >{{ 'lang-select-component.select' | translate }}</ion-button\r\n          >\r\n        </app-simple-item>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/modals/map-filter/map-filter.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/modals/map-filter/map-filter.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\"\r\n  scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border\">\r\n      <div class=\"title\">\r\n        {{'map-filter-component.title' | translate}}\r\n      </div>\r\n      <div class=\"options\">\r\n\r\n        <ion-button fill=\"clear\"\r\n          size=\"small\"\r\n          color=\"medium\"\r\n          (click)=\"closeModal()\">\r\n          <ion-icon mode=\"md\"\r\n            src=\"assets/icons/x.svg\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\">\r\n        <ion-item>\r\n          <ion-label>{{'map-filter-component.radius-label'| translate}}</ion-label>\r\n          <ion-range min=\"0\"\r\n            max=\"5000\"\r\n            step=\"100\"\r\n            value=\"{{filter.radius}}\"\r\n            color=\"secondary\"\r\n            [(ngModel)]=\"filter.radius\">\r\n            <ion-label slot=\"start\">{{filter.radius}}</ion-label>\r\n            <ion-label slot=\"end\">5000</ion-label>\r\n          </ion-range>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>{{'map-filter-component.zoom-label'| translate}}</ion-label>\r\n          <ion-range min=\"0\"\r\n            max=\"20\"\r\n            step=\"1\"\r\n            value=\"{{filter.zoom}}\"\r\n            color=\"secondary\"\r\n            [(ngModel)]=\"filter.zoom\">\r\n            <ion-label slot=\"start\">{{filter.zoom}}</ion-label>\r\n            <ion-label slot=\"end\">20</ion-label>\r\n          </ion-range>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>{{'map-filter-component.open-label'| translate}}</ion-label>\r\n          <ion-toggle [(ngModel)]=\"filter.openNow\"></ion-toggle>\r\n        </ion-item>\r\n\r\n        <ion-item>\r\n          <ion-label>{{'map-filter-component.establishment-label'| translate}}</ion-label>\r\n          <ion-select inputRef\r\n            name=\"type\"\r\n            [interfaceOptions]=\"typeSelectOptions\"\r\n            [(ngModel)]=\"filter.type\"\r\n            required>\r\n            <ion-select-option [value]=\"item\"\r\n              *ngFor=\"let item of typeSelectOptions.data\">\r\n              {{item}}\r\n            </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n\r\n        <ion-button expand=\"block\"\r\n          color=\"primary\"\r\n          shape=\"round\"\r\n          (click)=\"save()\">\r\n          {{'map-filter-component.save-button'| translate}}\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n<app-spinner *ngIf=\"loading\">\r\n</app-spinner>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/modals/notification-settings/notification-settings.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/modals/notification-settings/notification-settings.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"savePreference(model); closeModal()\">\r\n      <ion-icon mode=\"md\" src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'notification-setting-component.title' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\" *ngIf=\"model\">\r\n      <div class=\"content-scroll\">\r\n        <p class=\"info\">\r\n          {{ 'notification-setting-component.info' | translate }}\r\n        </p>\r\n\r\n        <p class=\"text-line-through-background\">\r\n          <span> {{ 'notification-setting-component.app-notifications' | translate }}</span>\r\n        </p>\r\n\r\n        <div class=\"notification-item\">\r\n          <div class=\"detail\">\r\n            <h2>{{ 'notification-setting-component.msg-preview-title' | translate }}</h2>\r\n            <p>{{ 'notification-setting-component.msg-preview-description' | translate }}</p>\r\n          </div>\r\n          <ion-toggle [(ngModel)]=\"model.messagePreview\"></ion-toggle>\r\n        </div>\r\n\r\n        <div class=\"notification-item\">\r\n          <div class=\"detail\">\r\n            <h2>{{ 'notification-setting-component.in-app-notifications-title' | translate }}</h2>\r\n            <p>{{ 'notification-setting-component.in-app-notifications-description' | translate }}</p>\r\n          </div>\r\n          <ion-toggle [(ngModel)]=\"model.inAppNotifications\"></ion-toggle>\r\n        </div>\r\n\r\n        <div class=\"notification-item\">\r\n          <div class=\"detail\">\r\n            <h2>{{ 'notification-setting-component.in-app-vibration-title' | translate }}</h2>\r\n            <p>{{ 'notification-setting-component.in-app-vibration-description' | translate }}</p>\r\n          </div>\r\n          <ion-toggle [(ngModel)]=\"model.vibration\"></ion-toggle>\r\n        </div>\r\n\r\n        <div class=\"notification-item\">\r\n          <div class=\"detail\">\r\n            <h2>{{ 'notification-setting-component.app-banner-title' | translate }}</h2>\r\n            <p>{{ 'notification-setting-component.app-banner-description' | translate }}</p>\r\n          </div>\r\n          <ion-toggle [(ngModel)]=\"model.showBanner\"></ion-toggle>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/modals/privacy/privacy.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/modals/privacy/privacy.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button fill=\"clear\"\r\n      size=\"small\"\r\n      color=\"medium\"\r\n      (click)=\"closeModal()\">\r\n      <ion-icon mode=\"md\"\r\n        src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\"\r\n  scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{'privacy-component.title' | translate}}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\">\r\n\r\n        <strong> What information do we collect?</strong>\r\n        <p> We collect information from you when you respond to a survey.</p>\r\n\r\n        <p>Google, as a third party vendor, uses cookies to serve ads on your site. Google's use of the DART cookie\r\n          enables\r\n          it to serve ads to your users based on their visit to your sites and other sites on the Internet. Users may\r\n          opt\r\n          out of the use of the DART cookie by visiting the Google ad and content network privacy policy..</p>\r\n\r\n        <strong> What do we use your information for?</strong>\r\n        <p>Any of the information we collect from you may be used in one of the following ways:<p>\r\n\r\n            <strong> To improve our website</strong>\r\n\r\n            <p>(we continually strive to improve our website offerings based on the information and feedback we receive\r\n              from\r\n              you)</p>\r\n\r\n            <strong> Do we use cookies?</strong>\r\n            <p>Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive\r\n              through\r\n              your Web browser (if you allow) that enables the sites or service providers systems to recognize your\r\n              browser\r\n              and capture and remember certain information</p>\r\n\r\n            <p>We use cookies to compile aggregate data about site traffic and site interaction so that we can offer\r\n              better\r\n              site experiences and tools in the future. We may contract with third-party service providers to assist us\r\n              in\r\n              better understanding our site visitors. These service providers are not permitted to use the information\r\n              collected on our behalf except to help us conduct and improve our business.</p>\r\n\r\n            <strong> Do we disclose any information to outside parties?</strong>\r\n            <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.\r\n              This\r\n              does not include trusted third parties who assist us in operating our website, conducting our business, or\r\n              servicing you, so long as those parties agree to keep this information confidential. We may also release\r\n              your\r\n              information when we believe release is appropriate to comply with the law, enforce our site policies, or\r\n              protect ours or others rights, property, or safety. However, non-personally identifiable visitor\r\n              information\r\n              may be provided to other parties for marketing, advertising, or other uses.</p>\r\n\r\n            <strong> Third party links</strong>\r\n            <p>Occasionally, at our discretion, we may include or offer third party products or services on our website.\r\n              These third party sites have separate and independent privacy policies. We therefore have no\r\n              responsibility or\r\n              liability for the content and activities of these linked sites. Nonetheless, we seek to protect the\r\n              integrity\r\n              of our site and welcome any feedback about these sites.</p>\r\n\r\n            <strong> California Online Privacy Protection Act Compliance</strong>\r\n            <p>Because we value your privacy we have taken the necessary precautions to be in compliance with the\r\n              California\r\n              Online Privacy Protection Act. We therefore will not distribute your personal information to outside\r\n              parties\r\n              without your consent.</p>\r\n\r\n            <strong> Childrens Online Privacy Protection Act Compliance</strong>\r\n            <p>We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), we do not\r\n              collect any information from anyone under 13 years of age. Our website, products and services are all\r\n              directed\r\n              to people who are at least 13 years old or older.</p>\r\n\r\n            <strong> Online Privacy Policy Only</strong>\r\n            <p>This online privacy policy applies only to information collected through our website and not to\r\n              information\r\n              collected offline.</p>\r\n\r\n            <strong> Terms and Conditions</strong>\r\n            <p>Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of\r\n              liability governing the use of our website at terms and conditions.</p>\r\n\r\n            <strong> Your Consent</strong>\r\n            <p>By using our site, you consent to our privacy policy.</p>\r\n\r\n            <strong> Changes to our Privacy Policy</strong>\r\n            <p>If we decide to change our privacy policy, we will post those changes on this page, and/or update the\r\n              Privacy\r\n              Policy modification date below.</p>\r\n\r\n            This policy was last modified on 2013-12-16\r\n            <br>\r\n            <strong> Contacting Us</strong>\r\n            <p>If there are any questions regarding this privacy policy you may contact us using the information below.\r\n            </p>\r\n            <p><a href=\"https://ezyapps.co.uk\"></a>ezyapps.co.uk</p>\r\n            <p>ezy.apps.uk@gmail.com</p>\r\n            <p>London, United Kingdom</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/modals/review/review.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/modals/review/review.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"closeModal()\">\r\n      <ion-icon mode=\"md\" src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'review-component.title' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\">\r\n        <p class=\"info\">{{ 'review-component.info' | translate }}</p>\r\n\r\n        <app-rating [rate]=\"model.rating\" (updateRate)=\"update($event)\"></app-rating>\r\n\r\n        <div class=\"form-label\">{{ 'review-component.comment-label' | translate }}</div>\r\n        <form-field fill=\"true\" color=\"medium\" class=\"textarea\">\r\n          <ion-icon prefix src=\"assets/icons/copy.svg\"></ion-icon>\r\n          <textarea\r\n            inputRef\r\n            autosize\r\n            maxRows=\"3\"\r\n            placeholder=\" {{ 'review-component.comment-placeholder' | translate }}\"\r\n            [(ngModel)]=\"model.comment\"\r\n          ></textarea>\r\n        </form-field>\r\n\r\n        <ion-button expand=\"full\" (click)=\"save()\"> {{ 'review-component.send-button' | translate }}</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/modals/social-share/social-share.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/modals/social-share/social-share.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border\">\r\n      <div class=\"title\">\r\n        {{ 'social-share-component.title' | translate }}\r\n      </div>\r\n      <div class=\"options\">\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"closeModal()\">\r\n          <ion-icon mode=\"md\" src=\"assets/icons/x.svg\"></ion-icon>\r\n        </ion-button>\r\n      </div>\r\n    </div>\r\n    <div class=\"content-scroll\">\r\n      <ion-button\r\n        fill=\"outline\"\r\n        expand=\"block\"\r\n        [color]=\"item.color ? item.color : item.type\"\r\n        *ngFor=\"let item of socialButtons\"\r\n        [shareButton]=\"item.type\"\r\n        (click)=\"closeModal()\"\r\n      >\r\n        <ion-icon slot=\"start\" src=\"assets/icons/{{ item.icon ? item.icon : item.type }}.svg\"></ion-icon\r\n        >{{ item.text }}</ion-button\r\n      >\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/shared/modals/terms-and-conditions/terms-and-conditions.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/shared/modals/terms-and-conditions/terms-and-conditions.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"closeModal()\">\r\n      <ion-icon mode=\"md\" src=\"assets/icons/x.svg\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'terms-and-conditions-component.title' | translate }}\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\">\r\n        <strong> What information do we collect?</strong>\r\n        <p>We collect information from you when you respond to a survey.</p>\r\n\r\n        <p>\r\n          Google, as a third party vendor, uses cookies to serve ads on your site. Google's use of the DART cookie enables it to serve ads\r\n          to your users based on their visit to your sites and other sites on the Internet. Users may opt out of the use of the DART cookie\r\n          by visiting the Google ad and content network privacy policy..\r\n        </p>\r\n\r\n        <strong> What do we use your information for?</strong>\r\n        <p>Any of the information we collect from you may be used in one of the following ways:</p>\r\n        <p>\r\n          <strong> To improve our website</strong>\r\n        </p>\r\n\r\n        <p>(we continually strive to improve our website offerings based on the information and feedback we receive from you)</p>\r\n\r\n        <strong> Do we use cookies?</strong>\r\n        <p>\r\n          Yes (Cookies are small files that a site or its service provider transfers to your computers hard drive through your Web browser\r\n          (if you allow) that enables the sites or service providers systems to recognize your browser and capture and remember certain\r\n          information\r\n        </p>\r\n\r\n        <p>\r\n          We use cookies to compile aggregate data about site traffic and site interaction so that we can offer better site experiences and\r\n          tools in the future. We may contract with third-party service providers to assist us in better understanding our site visitors.\r\n          These service providers are not permitted to use the information collected on our behalf except to help us conduct and improve our\r\n          business.\r\n        </p>\r\n\r\n        <strong> Do we disclose any information to outside parties?</strong>\r\n        <p>\r\n          We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information. This does not include\r\n          trusted third parties who assist us in operating our website, conducting our business, or servicing you, so long as those parties\r\n          agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply\r\n          with the law, enforce our site policies, or protect ours or others rights, property, or safety. However, non-personally\r\n          identifiable visitor information may be provided to other parties for marketing, advertising, or other uses.\r\n        </p>\r\n\r\n        <strong> Third party links</strong>\r\n        <p>\r\n          Occasionally, at our discretion, we may include or offer third party products or services on our website. These third party sites\r\n          have separate and independent privacy policies. We therefore have no responsibility or liability for the content and activities of\r\n          these linked sites. Nonetheless, we seek to protect the integrity of our site and welcome any feedback about these sites.\r\n        </p>\r\n\r\n        <strong> California Online Privacy Protection Act Compliance</strong>\r\n        <p>\r\n          Because we value your privacy we have taken the necessary precautions to be in compliance with the California Online Privacy\r\n          Protection Act. We therefore will not distribute your personal information to outside parties without your consent.\r\n        </p>\r\n\r\n        <strong> Childrens Online Privacy Protection Act Compliance</strong>\r\n        <p>\r\n          We are in compliance with the requirements of COPPA (Childrens Online Privacy Protection Act), we do not collect any information\r\n          from anyone under 13 years of age. Our website, products and services are all directed to people who are at least 13 years old or\r\n          older.\r\n        </p>\r\n\r\n        <strong> Online Privacy Policy Only</strong>\r\n        <p>\r\n          This online privacy policy applies only to information collected through our website and not to information collected offline.\r\n        </p>\r\n\r\n        <strong> Terms and Conditions</strong>\r\n        <p>\r\n          Please also visit our Terms and Conditions section establishing the use, disclaimers, and limitations of liability governing the\r\n          use of our website at terms and conditions.\r\n        </p>\r\n\r\n        <strong> Your Consent</strong>\r\n        <p>By using our site, you consent to our privacy policy.</p>\r\n\r\n        <strong> Changes to our Privacy Policy</strong>\r\n        <p>\r\n          If we decide to change our privacy policy, we will post those changes on this page, and/or update the Privacy Policy modification\r\n          date below.\r\n        </p>\r\n\r\n        This policy was last modified on 2013-12-16\r\n        <br />\r\n        <strong> Contacting Us</strong>\r\n        <p>If there are any questions regarding this privacy policy you may contact us using the information below.</p>\r\n        <p><a href=\"https://ezyapps.co.uk\"></a>ezyapps.co.uk</p>\r\n        <p>ezy.apps.uk@gmail.com</p>\r\n        <p>London, United Kingdom</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_pages_auth_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/guards/auth/auth.guard */ "./src/pages/auth/guards/auth/auth.guard.ts");
/* harmony import */ var src_pages_welcome_guards_welcome_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/welcome/guards/welcome.guard */ "./src/pages/welcome/guards/welcome.guard.ts");





/**
 * base route forRoot of application.
 * The app defaults to welcome page when it is opened but there is a guard to check if user is login in.
 * if user us logged in, we redirect to dashboard page.
 * Auth guard will redirect user to authentication pages if user is logged out, or allow access to a page is user is logged in
 * The app uses lazy loading to load modules
 * but { preloadingStrategy: PreloadAllModules } is used to make sure all modules are preloaded to begin with for performance reasons
 */
const routes = [
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        canActivate: [src_pages_welcome_guards_welcome_guard__WEBPACK_IMPORTED_MODULE_4__["WelcomeGuard"]],
        path: 'welcome',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-welcome-welcome-module */ "pages-welcome-welcome-module").then(__webpack_require__.bind(null, /*! ../pages/welcome/welcome.module */ "./src/pages/welcome/welcome.module.ts")).then((m) => m.WelcomeModule)
    },
    {
        path: 'auth',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-auth-auth-module */ "pages-auth-auth-module").then(__webpack_require__.bind(null, /*! ../pages/auth/auth.module */ "./src/pages/auth/auth.module.ts")).then((m) => m.AuthModule)
    },
    {
        canActivate: [src_pages_auth_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-dashboard-dashboard-module */ "pages-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ../pages/dashboard/dashboard.module */ "./src/pages/dashboard/dashboard.module.ts")).then((m) => m.DashboardModule)
    },
    {
        canActivate: [src_pages_auth_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        path: 'people',
        loadChildren: () => Promise.all(/*! import() | pages-people-people-module */[__webpack_require__.e("default~pages-people-people-module~pages-profile-profile-module"), __webpack_require__.e("pages-people-people-module")]).then(__webpack_require__.bind(null, /*! ../pages/people/people.module */ "./src/pages/people/people.module.ts")).then((m) => m.PeopleModule)
    },
    {
        canActivate: [src_pages_auth_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        path: 'feed',
        loadChildren: () => Promise.all(/*! import() | pages-feed-feed-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-feed-feed-module")]).then(__webpack_require__.bind(null, /*! ../pages/feed/feed.module */ "./src/pages/feed/feed.module.ts")).then((m) => m.FeedModule)
    },
    {
        canActivate: [src_pages_auth_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | pages-profile-profile-module */[__webpack_require__.e("default~pages-people-people-module~pages-profile-profile-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-profile-profile-module")]).then(__webpack_require__.bind(null, /*! ../pages/profile/profile.module */ "./src/pages/profile/profile.module.ts")).then((m) => m.ProfileModule)
    },
    {
        canActivate: [src_pages_auth_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        path: 'messages',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-messages-messages-module */ "pages-messages-messages-module").then(__webpack_require__.bind(null, /*! ../pages/messages/messages.module */ "./src/pages/messages/messages.module.ts")).then((m) => m.MessagesModule)
    },
    {
        canActivate: [src_pages_auth_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        path: 'setting',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-setting-setting-module */ "pages-setting-setting-module").then(__webpack_require__.bind(null, /*! ../pages/setting/setting.module */ "./src/pages/setting/setting.module.ts")).then((m) => m.SettingModule)
    },
    { path: 'translator', loadChildren: './translator/translator.module#TranslatorPageModule' },
    { path: 'invite-group', loadChildren: './invite-group/invite-group.module#InviteGroupPageModule' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_shared_helpers_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/shared/helpers/config */ "./src/shared/helpers/config.ts");
/* harmony import */ var src_shared_helpers_native__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/shared/helpers/native */ "./src/shared/helpers/native.ts");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");




















/**
 * bootstrap app component and add all the modules required in this app
 * HttpClientModule to allow making http calls
 * IonicModule sets mode to md to default styles to material design across devices and ripple effect for material design is disabled
 * Ionic storage is used to store device specific settings in localstorage
 * Angular Firebase modules are also imported her at the root and we initialize firebase settings
 * shared module is a custom module that exports all shared components, directives, modules and pipes.
 *
 * NativeImports is a neat way to handle all cordova plugins in a separate file
 * configure hammer gesture for more touch effects like long press, pinch, span etc
 */
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicModule"].forRoot({
                rippleEffect: false,
                mode: 'md'
            }),
            _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__["TranslateLoader"],
                    useFactory: src_shared_helpers_config__WEBPACK_IMPORTED_MODULE_14__["createTranslateLoader"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]]
                }
            }),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_17__["AppRoutingModule"],
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_16__["SharedModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_3__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuthModule"],
            _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_6__["AngularFireMessagingModule"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_7__["AngularFireStorageModule"]
        ],
        providers: [
            src_shared_helpers_native__WEBPACK_IMPORTED_MODULE_15__["NativeImports"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["IonicRouteStrategy"] },
            {
                provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"],
                useClass: src_shared_helpers_config__WEBPACK_IMPORTED_MODULE_14__["IonicGestureConfig"]
            },
            _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_19__["Toast"]
        ],
        bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_18__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/app.component.scss":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-menu {\n  --width: 100px;\n}\nion-menu ion-list {\n  padding: 0 !important;\n}\n.menu {\n  text-align: center;\n  height: 100%;\n}\n.menu .item {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px;\n  width: 100%;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.menu .item ion-icon {\n  display: table-cell;\n  vertical-align: middle;\n  font-size: 2.5rem;\n  color: var(--ion-color-light);\n}\n.menu .item .image {\n  display: table-cell;\n  vertical-align: middle;\n  border: 3px solid var(--ion-color-light);\n  border-radius: 100%;\n  width: 60px;\n  height: 60px;\n  margin: 0% auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7QUNDRjtBRENFO0VBQ0UscUJBQUE7QUNDSjtBRElBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FDREY7QURJRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNGSjtBREtJO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNITjtBRE1JO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUNKTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUge1xyXG4gIC0td2lkdGg6IDEwMHB4O1xyXG4gIC8vIGNvbG9yOiByZWQ7Ly9cclxuICBpb24tbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBjb2xvcjogcmVkICFpbXBvcnRhbnQ7Ly9cclxuICB9XHJcbn1cclxuXHJcbi5tZW51IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC8vIGNvbG9yOiByZWQ7Ly9cclxuXHJcbiAgLml0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIC8vIGNvbG9yOiBibHVlOy8vXHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlIHtcclxuICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgbWFyZ2luOiAwJSBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpb24tbWVudSB7XG4gIC0td2lkdGg6IDEwMHB4O1xufVxuaW9uLW1lbnUgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWVudSAuaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tZW51IC5pdGVtIGlvbi1pY29uIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuLm1lbnUgLml0ZW0gLmltYWdlIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luOiAwJSBhdXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_setting_services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/setting/services/setting/setting.service */ "./src/pages/setting/services/setting/setting.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/fcm/fcm.service */ "./src/shared/services/fcm/fcm.service.ts");
/* harmony import */ var _services_app_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/toast/ngx */ "./node_modules/@ionic-native/toast/ngx/index.js");










/**
 * @class AppComponent
 * @extends Extender
 * @implements OnInit
 * sets pages for side-menu when user is logged in. default color used here to style side-menu buttons in a gradient.
 * here we set and store default language to english until user can make changes either in welcome page or from user settings.
 * we also register fire cloud messaging and token and listen for notifications in-app.
 */
let AppComponent = class AppComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"] {
    constructor(platform, nativeToast, injector, appService, authService, fcmService, settingService, storage) {
        super(injector);
        this.platform = platform;
        this.nativeToast = nativeToast;
        this.injector = injector;
        this.appService = appService;
        this.authService = authService;
        this.fcmService = fcmService;
        this.settingService = settingService;
        this.storage = storage;
        this.pages = [];
        this.color = '#3232FF';
        this.count = 0;
    }
    /**
     * run initializeApp from appServices
     * get language from localstorage, if language is set, use to configure translations
     * otherwise default to english (gb)
     * if user is logged in, get firebase cloud messaging token and listen for notifications
     * setup app pages
     * get user preferences to setup lang
     */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.appService.initializeApp();
            const lang = yield this.storage.get('language');
            this.appService.langConfig(lang);
            this.subscriptions.push(this.authService.user.subscribe((user) => {
                if (user) {
                    this.fcmService.getToken().then(() => {
                        this.listen4Notifications();
                    });
                    this.subscriptions.push(this.settingService.getUserSettings(user.uid).subscribe((setting) => this.appService.langConfig(setting.language)));
                    this.pages = this.appService.setUpPages(user);
                }
            }));
        });
    }
    /**
     * open component pages except for when component property is logout
     * then logout user from app and route to login page
     * @param page
     */
    open(page) {
        if (page.component === 'logout') {
            this.authService.signOut().then(() => this.goto(this.routes.login));
        }
        else {
            this.goto(page.component);
        }
    }
    /* Listen to incoming messages */
    listen4Notifications() {
        this.subscriptions.push(this.fcmService.listenToNotifications().subscribe());
    }
    exitFromApp() {
        this.platform.backButton.subscribe(() => {
            this.count++;
            if (this.count === 1) {
                this.nativeToast
                    .show('뒤로 가기 버튼을 한번 더 누르면 종료됩니다', '5000', 'bottom')
                    .subscribe((toast) => {
                    console.log(toast);
                });
            }
            else if (this.count === 2) {
                navigator['app'].exitApp();
                setTimeout(function () {
                    this.count = 0;
                }, 800);
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"] },
    { type: _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_app_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_shared_services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_6__["FcmService"] },
    { type: src_pages_setting_services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__["Platform"],
        _ionic_native_toast_ngx__WEBPACK_IMPORTED_MODULE_9__["Toast"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _services_app_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_shared_services_fcm_fcm_service__WEBPACK_IMPORTED_MODULE_6__["FcmService"],
        src_pages_setting_services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
], AppComponent);



/***/ }),

/***/ "./src/app/services/app/app.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/app/app.service.ts ***!
  \*********************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm2015/ionic-storage.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");








/**
 * @class AppService
 * @extends Extender
 * initialize status bar and splash screen (used at start up in app.components)
 * set language and/or get default language
 * page setup array when user is logged in
 */
let AppService = class AppService extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__["Extender"] {
    constructor(injector, platform, splashScreen, statusBar, storage, firestoreService) {
        super(injector);
        this.injector = injector;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.firestoreService = firestoreService;
    }
    /**
     * set up pages with use details when use is logged in. Profile page button has an image of user.
     * define component routes, icons and title for each side-menu button
     * @param user
     */
    setUpPages(user) {
        return [
            {
                title: this.translate.instant('page-title.profile'),
                component: this.routes.profile,
                icon: user.photoURL || null,
                image: true
            },
            {
                title: this.translate.instant('page-title.dashboard'),
                component: this.routes.dashboard,
                icon: 'calendar',
                image: false
            },
            {
                title: this.translate.instant('page-title.news'),
                component: this.routes.feed,
                icon: 'rss',
                image: false
            },
            {
                title: this.translate.instant('page-title.people'),
                component: this.routes.people,
                icon: 'users',
                image: false
            },
            {
                title: this.translate.instant('page-title.chat'),
                component: this.routes.messages,
                icon: 'message-square',
                image: false
            },
            {
                title: this.translate.instant('page-title.setting'),
                component: this.routes.setting,
                icon: 'settings',
                image: false
            },
            {
                title: this.translate.instant('page-title.logout'),
                component: 'logout',
                icon: 'lock',
                image: false
            },
            {
                title: this.translate.instant('page-title.translator'),
                component: 'translator',
                icon: 'text',
                image: false
            }
        ];
    }
    /** setup splash screen and status bar */
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
    /** set or default language for translations
     * @param lang
     */
    langConfig(lang) {
        if (lang) {
            this.storage.set('language', lang);
            this.translate.setDefaultLang(lang);
            this.translate.use(lang);
        }
        else {
            this.translate.setDefaultLang('gb');
            this.translate.use('gb');
        }
    }
};
AppService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__["StatusBar"],
        _ionic_storage__WEBPACK_IMPORTED_MODULE_5__["Storage"],
        src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_7__["FirestoreService"]])
], AppService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
/**
 * environment settings info
 * the firebase.hosting param is not from firebase, it is custom for wherever your ionic app is hosted and used by share functionality within the app for browsers.
 */
const environment = {
    production: false,
    hosting: 'http://localhost:8100',
    googleClientId: '807755525390-6rq3nfl2o3emt2d0kp3se8aurh11u988.apps.googleusercontent.com',
    firebaseConfig: {
        apiKey: "AIzaSyCtK1hdOlykB2mMecbT3Rf7Vt7_HH0nvTY",
        authDomain: "messagerapp-37cb6.firebaseapp.com",
        databaseURL: "https://messagerapp-37cb6.firebaseio.com",
        projectId: "messagerapp-37cb6",
        storageBucket: "messagerapp-37cb6.appspot.com",
        messagingSenderId: "807755525390",
        appId: "1:807755525390:web:228bd650fc694b330d3b5f",
        measurementId: "G-TF24RZW3GX"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.log(err));


/***/ }),

/***/ "./src/pages/auth/guards/auth/auth.guard.ts":
/*!**************************************************!*\
  !*** ./src/pages/auth/guards/auth/auth.guard.ts ***!
  \**************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");





/**
 * check if user is logged in or not
 * if not, route to login page. if user is logged in but account deactivated, route to deactivated account page
 */
let AuthGuard = class AuthGuard extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, auth) {
        super(injector);
        this.injector = injector;
        this.auth = auth;
    }
    /** check if user is logged in or not if not, route to login page.
     * if user is logged in but account deactivated, route to deactivated account page
     */
    canActivate(next, state) {
        return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => {
            this.user = user;
            return !!user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((loggedIn) => {
            if (!loggedIn) {
                this.goto(this.routes.login);
            }
            if (this.user.deactivated) {
                this.goto(this.routes.deactivated);
            }
            if (!this.auth.emailVerified) {
                this.goto(this.routes.verifyEmail);
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], AuthGuard);



/***/ }),

/***/ "./src/pages/auth/helpers/constants.ts":
/*!*********************************************!*\
  !*** ./src/pages/auth/helpers/constants.ts ***!
  \*********************************************/
/*! exports provided: SocialAuthProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialAuthProvider", function() { return SocialAuthProvider; });
var SocialAuthProvider;
(function (SocialAuthProvider) {
    SocialAuthProvider[SocialAuthProvider["google"] = 0] = "google";
    SocialAuthProvider[SocialAuthProvider["facebook"] = 1] = "facebook";
})(SocialAuthProvider || (SocialAuthProvider = {}));


/***/ }),

/***/ "./src/pages/auth/services/auth/auth.service.ts":
/*!******************************************************!*\
  !*** ./src/pages/auth/services/auth/auth.service.ts ***!
  \******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/observable/of */ "./node_modules/rxjs/internal/observable/of.js");
/* harmony import */ var rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var _helpers_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../helpers/constants */ "./src/pages/auth/helpers/constants.ts");












/**
 * firebase authentication methods are handled by this service
 * email handlers https://firebase.google.com/docs/auth/custom-email-handler
 * authentication tutorial https://www.positronx.io/full-angular-7-firebase-authentication-system/
 */
let AuthService = class AuthService extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_9__["Extender"] {
    constructor(injector, afAuth, gplus, facebook, firestoreService) {
        super(injector);
        this.injector = injector;
        this.afAuth = afAuth;
        this.gplus = gplus;
        this.facebook = facebook;
        this.firestoreService = firestoreService;
        /** watch auth state if user is logged in, get user info from users list as observable else return observable null */
        this.user = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])((user) => {
            if (user) {
                return this.firestoreService.doc$(`users/${user.uid}`);
            }
            else {
                return Object(rxjs_internal_observable_of__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
            }
        }));
    }
    /** get user and return as a promise to access easily in components using async and await */
    getUser() {
        return this.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).toPromise();
    }
    /** sign in user with email and password using firebase library */
    signIn({ email, password }) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.afAuth.auth.signInWithEmailAndPassword(email, password);
        });
    }
    /** sign up user to firebase and update user details */
    signUp({ displayName, email, password }) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const credential = yield this.afAuth.auth.createUserWithEmailAndPassword(email, password);
            yield credential.user.updateProfile({ displayName, photoURL: null });
            return this.updateUserData(credential.user);
        });
    }
    /** send email verification to authenticated user */
    sendEmailVerification() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.afAuth.auth.currentUser.sendEmailVerification();
        });
    }
    /** use by email verification to apply verification code and set user emailVerified property to true */
    applyActionCode(code) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.afAuth.auth.applyActionCode(code);
        });
    }
    /** update user email in auth and in users list */
    updateEmail(email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.getUser();
            user.email = email;
            yield this.firestoreService.set(`users/${user.uid}`, user);
            return yield firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.updateEmail(email);
        });
    }
    /** update user password */
    updatePassword(oldPassword, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser;
            const credential = firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].EmailAuthProvider.credential(firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.email, oldPassword);
            return user.reauthenticateAndRetrieveDataWithCredential(credential).then(() => {
                return firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"]().currentUser.updatePassword(password);
            });
        });
    }
    /** send password reset email */
    sendPasswordReset(email) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.afAuth.auth.sendPasswordResetEmail(email);
        });
    }
    /** get user emailVerified property */
    get emailVerified() {
        return this.afAuth.auth.currentUser && this.afAuth.auth.currentUser.emailVerified;
    }
    /** confirm password reset with code from email verification and password */
    confirmPasswordReset(code, password) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.afAuth.auth.confirmPasswordReset(code, password);
        });
    }
    /** select type of social login, either facebook or google, use native login with cordova plugins if on device or web login
     * on browser. on complete update user details
     */
    socialogin(providerType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let credential;
            if (window.cordova) {
                credential = yield this.nativeLogin(providerType);
            }
            else {
                credential = yield this.webLogin(providerType);
            }
            return yield this.updateUserData(credential.user);
        });
    }
    /** sign out of the app and after sign out destroy all subscriptions to avoid missing permissions error */
    signOut() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.afAuth.auth.signOut().then(() => {
                // this.forceSubscriptionDestroy();
            });
        });
    }
    /** update user details in users list */
    updateUserData({ uid, email, displayName, photoURL }) {
        const data = {
            uid,
            email,
            displayName,
            photoURL
        };
        return this.firestoreService.set(`users/${uid}`, data);
    }
    /** do a native login with cordova plugins for google or facebook,
     * specify by providerType with is an enum of providers
     * get token from successful native login and use with firebase library to login with token.
     */
    nativeLogin(providerType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let cred;
            if (providerType === _helpers_constants__WEBPACK_IMPORTED_MODULE_11__["SocialAuthProvider"].google) {
                cred = yield this.gplus.login({
                    webClientId: src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].googleClientId,
                    offline: true,
                    scopes: 'profile email'
                });
                return this.afAuth.auth.signInWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider.credential(cred.idToken));
            }
            else {
                cred = yield this.facebook.login(['public_profile']);
                return this.afAuth.auth.signInWithCredential(firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider.credential(cred.authResponse.accessToken));
            }
        });
    }
    /** do web login for third party providers, specify providerType */
    webLogin(providerType) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let provider;
            if (providerType === _helpers_constants__WEBPACK_IMPORTED_MODULE_11__["SocialAuthProvider"].google) {
                provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider();
            }
            else {
                provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider();
            }
            return yield this.afAuth.auth.signInWithPopup(provider);
        });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__["GooglePlus"] },
    { type: _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__["Facebook"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_10__["FirestoreService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"],
        _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_4__["GooglePlus"],
        _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_3__["Facebook"],
        src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_10__["FirestoreService"]])
], AuthService);



/***/ }),

/***/ "./src/pages/dashboard/services/schedule/schedule.service.ts":
/*!*******************************************************************!*\
  !*** ./src/pages/dashboard/services/schedule/schedule.service.ts ***!
  \*******************************************************************/
/*! exports provided: ScheduleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleService", function() { return ScheduleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");




/**
 * crud methods to interact with firebase cloud store regarding calendar events
 */
let ScheduleService = class ScheduleService extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"] {
    constructor(injector, firestoreService) {
        super(injector);
        this.injector = injector;
        this.firestoreService = firestoreService;
    }
    /** get user events by querying for user id in collection item */
    getUserEvents(uid) {
        return this.firestoreService.colWithIds$('events', (ref) => ref.where('uid', '==', uid));
    }
    /** get all events */
    getEvent(id) {
        return this.firestoreService.doc$(`events/${id}`);
    }
    /** add new calendar event, format dates appropriately */
    addEvent(data) {
        data.start = Date.parse(data.start);
        data.end = Date.parse(data.end);
        return this.firestoreService.add('events', data);
    }
    /** update calendar event, format dates appropriately */
    updateEvent(data) {
        data.start = !Number(data.start) ? Date.parse(data.start) : data.start;
        data.end = !Number(data.end) ? Date.parse(data.end) : data.end;
        return this.firestoreService.update(`events/${data.id}`, data);
    }
    /** remove calendar event */
    removeEvent(id) {
        return this.firestoreService.delete(`events/${id}`);
    }
};
ScheduleService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"] }
];
ScheduleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_3__["FirestoreService"]])
], ScheduleService);



/***/ }),

/***/ "./src/pages/setting/services/setting/setting.service.ts":
/*!***************************************************************!*\
  !*** ./src/pages/setting/services/setting/setting.service.ts ***!
  \***************************************************************/
/*! exports provided: SettingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingService", function() { return SettingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_modals_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/modals/change-password/change-password.component */ "./src/shared/modals/change-password/change-password.component.ts");
/* harmony import */ var src_shared_modals_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/shared/modals/edit-profile/edit-profile.component */ "./src/shared/modals/edit-profile/edit-profile.component.ts");
/* harmony import */ var src_shared_modals_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/modals/feedback/feedback.component */ "./src/shared/modals/feedback/feedback.component.ts");
/* harmony import */ var src_shared_modals_lang_select_lang_select_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/shared/modals/lang-select/lang-select.component */ "./src/shared/modals/lang-select/lang-select.component.ts");
/* harmony import */ var src_shared_modals_notification_settings_notification_settings_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/shared/modals/notification-settings/notification-settings.component */ "./src/shared/modals/notification-settings/notification-settings.component.ts");
/* harmony import */ var src_shared_modals_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/shared/modals/privacy/privacy.component */ "./src/shared/modals/privacy/privacy.component.ts");
/* harmony import */ var src_shared_modals_review_review_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/shared/modals/review/review.component */ "./src/shared/modals/review/review.component.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");














/**
 * crud methods to interact with firebase cloud store regarding settings
 */
let SettingService = class SettingService extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"] {
    constructor(injector, authservice, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authservice = authservice;
        this.firestoreService = firestoreService;
        this.settingsOptions = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
    }
    getUserSettings(uid) {
        return this.firestoreService.doc$(`preferences/${uid}`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((data) => {
            if (!data.uid) {
                data = { autoReply: true, hideWalkthrough: false, uid, language: 'gb', inAppNotifications: true, messagePreview: true };
                this.upsertPreferences(data);
            }
            this.setting = data;
            this.getSettingOptions(this.setting);
            return data;
        }));
    }
    upsertPreferences(setting) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.firestoreService.upsert(`preferences/${setting.uid}`, setting);
        });
    }
    getSettingOptions(preference) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.settingsOptions.next([
                {
                    title: this.translate.instant('setting-component.option-general-title'),
                    open: true,
                    items: [
                        {
                            icon: 'assets/icons/eye-off.svg',
                            text: this.translate.instant('setting-component.option-general-1-text'),
                            description: this.translate.instant('setting-component.option-general-1-description'),
                            checkbox: true,
                            selected: this.setting.hideWalkthrough,
                            event: (data) => {
                                this.setting.hideWalkthrough = data;
                            }
                        },
                        {
                            icon: 'assets/icons/message-square.svg',
                            text: this.translate.instant('setting-component.option-general-2-text'),
                            description: this.translate.instant('setting-component.option-general-2-description'),
                            checkbox: true,
                            selected: this.setting.autoReply,
                            event: (data) => {
                                this.setting.autoReply = data;
                            }
                        },
                        {
                            icon: `assets/images/flags/${this.setting.language || 'gb'}.svg`,
                            text: this.translate.instant('setting-component.option-general-3-text'),
                            description: this.translate.instant('setting-component.option-general-3-description'),
                            event: (data) => {
                                this.openPage(src_shared_modals_lang_select_lang_select_component__WEBPACK_IMPORTED_MODULE_9__["LangSelectComponent"], data);
                            }
                        }
                    ]
                },
                {
                    title: this.translate.instant('setting-component.option-account-title'),
                    open: false,
                    items: [
                        {
                            icon: 'assets/icons/user.svg',
                            text: this.translate.instant('setting-component.option-account-1-text'),
                            description: this.translate.instant('setting-component.option-account-1-description'),
                            event: (data) => this.openPage(src_shared_modals_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__["EditProfileComponent"], data)
                        },
                        {
                            icon: 'assets/icons/lock.svg',
                            text: this.translate.instant('setting-component.option-account-2-text'),
                            description: this.translate.instant('setting-component.option-account-2-description'),
                            event: (data) => this.openPage(src_shared_modals_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordComponent"], data)
                        },
                        {
                            icon: 'assets/icons/alert-octagon.svg',
                            text: this.translate.instant('setting-component.option-account-3-text'),
                            description: this.translate.instant('setting-component.option-account-3-description'),
                            event: (data) => this.deactivateAccount()
                        }
                    ]
                },
                {
                    title: this.translate.instant('setting-component.option-notification-title'),
                    open: false,
                    items: [
                        {
                            icon: 'assets/icons/bell.svg',
                            text: this.translate.instant('setting-component.option-notification-1-text'),
                            description: this.translate.instant('setting-component.option-notification-1-description'),
                            event: (data) => this.openPage(src_shared_modals_notification_settings_notification_settings_component__WEBPACK_IMPORTED_MODULE_10__["NotificationSettingsComponent"], data)
                        }
                    ]
                },
                {
                    title: this.translate.instant('setting-component.option-more-title'),
                    open: false,
                    items: [
                        {
                            icon: 'assets/icons/heart.svg',
                            text: this.translate.instant('setting-component.option-more-1-text'),
                            description: this.translate.instant('setting-component.option-more-1-description'),
                            event: (data) => this.openPage(src_shared_modals_review_review_component__WEBPACK_IMPORTED_MODULE_12__["ReviewComponent"], data)
                        },
                        {
                            icon: 'assets/icons/mail.svg',
                            text: this.translate.instant('setting-component.option-more-2-text'),
                            description: this.translate.instant('setting-component.option-more-2-description'),
                            event: (data) => this.openPage(src_shared_modals_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_8__["FeedbackComponent"], data)
                        },
                        {
                            icon: 'assets/icons/eye-off.svg',
                            text: this.translate.instant('setting-component.option-more-3-text'),
                            description: this.translate.instant('setting-component.option-more-3-description'),
                            event: (data) => this.openPage(src_shared_modals_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyComponent"], data)
                        }
                    ]
                }
            ]);
        });
    }
    openPage(component, data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(component, data);
            modal.present();
        });
    }
    /**
     * deactivate user account by adding deactivate is true to user property,
     * navigate to account deactivated page
     */
    deactivateAccount() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const prompt = yield this.alertCtrl.create({
                header: this.translate.instant('setting-component.deactivated-account-alert-title'),
                message: this.translate.instant('setting-component.deactivated-account-alert-message'),
                buttons: [
                    {
                        text: this.translate.instant('other.no'),
                        role: 'cancel'
                    },
                    {
                        text: this.translate.instant('other.yes'),
                        handler: () => {
                            this.deactivate();
                        }
                    }
                ]
            });
            yield prompt.present();
        });
    }
    deactivate() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const user = yield this.authservice.getUser();
            this.loading = true;
            user.deactivated = true;
            this.firestoreService
                .update(`users/${user.uid}`, user)
                .then(() => {
                this.loading = false;
                this.authservice.signOut();
                this.goto(this.routes.deactivated);
                this.toast(this.translate.instant('setting-component.deactivate-account-success-message'));
            })
                .catch((err) => this.toast(err));
        });
    }
};
SettingService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_13__["FirestoreService"] }
];
SettingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_13__["FirestoreService"]])
], SettingService);



/***/ }),

/***/ "./src/pages/welcome/guards/welcome.guard.ts":
/*!***************************************************!*\
  !*** ./src/pages/welcome/guards/welcome.guard.ts ***!
  \***************************************************/
/*! exports provided: WelcomeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeGuard", function() { return WelcomeGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_setting_services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/setting/services/setting/setting.service */ "./src/pages/setting/services/setting/setting.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");






/**
 * @class WelcomeGuard
 * @extends Extender
 * @implements CanActivate
 * guard against access to welcome page if user is already logged in
 */
let WelcomeGuard = class WelcomeGuard extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"] {
    constructor(injector, authService, settingService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.settingService = settingService;
    }
    /** pipe into firebase authService state. if user logged in route to dashboard, otherwise open welcome page
     * if user has set hideWalkthrough settings, redirect to login.
     * is rout has query params, run manageRoutesFromFirebaseEmail with query param data
     */
    canActivate(next, state) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((user) => {
            this.manageRoutesFromFirebaseEmail(next);
            if (!!user) {
                this.goto(this.routes.dashboard);
            }
            if (this.settingService.setting && this.settingService.setting.hideWalkthrough) {
                this.goto(this.routes.login);
            }
            else {
                return true;
            }
        }));
    }
    /** manage where to redirect based query params. used in instances such as email verification.
     * where user verifies their email by clicking on an external like that routes to the site with verification code
     */
    manageRoutesFromFirebaseEmail(next) {
        const param = next.queryParams;
        switch (param.mode) {
            case 'resetPassword':
                this.goto(this.routes.forgot, { queryParams: param });
                break;
            case 'verifyEmail':
                this.authService.applyActionCode(param.oobCode).then(() => {
                    this.authService.signOut().then(() => {
                        this.goto(this.routes.login, { queryParams: { emailVerified: true } });
                    });
                });
                break;
        }
    }
};
WelcomeGuard.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_pages_setting_services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"] }
];
WelcomeGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_pages_setting_services_setting_setting_service__WEBPACK_IMPORTED_MODULE_4__["SettingService"]])
], WelcomeGuard);



/***/ }),

/***/ "./src/shared/components/accordion/accordion.module.ts":
/*!*************************************************************!*\
  !*** ./src/shared/components/accordion/accordion.module.ts ***!
  \*************************************************************/
/*! exports provided: AccordionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionModule", function() { return AccordionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/accordion/accordion.component */ "./src/shared/components/accordion/components/accordion/accordion.component.ts");
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/panel/panel.component */ "./src/shared/components/accordion/components/panel/panel.component.ts");






let AccordionModule = class AccordionModule {
};
AccordionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__["AccordionComponent"], _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_5__["PanelComponent"]],
        exports: [_components_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_4__["AccordionComponent"], _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_5__["PanelComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"]]
    })
], AccordionModule);



/***/ }),

/***/ "./src/shared/components/accordion/components/accordion/accordion.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/shared/components/accordion/components/accordion/accordion.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvc2hhcmVkL2NvbXBvbmVudHMvYWNjb3JkaW9uL2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/shared/components/accordion/components/accordion/accordion.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/shared/components/accordion/components/accordion/accordion.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AccordionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionComponent", function() { return AccordionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../panel/panel.component */ "./src/shared/components/accordion/components/panel/panel.component.ts");





let AccordionComponent = class AccordionComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor() {
        super(...arguments);
        this._subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"]();
    }
    /** for each panel add subscription to panel to listen for toggle events */
    ngAfterViewInit() {
        if (this.panels) {
            this.panels.forEach((panel) => {
                this._subscriptions.add(this._subscribeToPanel(panel));
            });
        }
    }
    /** unsubscribe from panel subscription */
    ngOnDestroy() {
        this._subscriptions.unsubscribe();
    }
    /** subscribe to panel toggle event and update isBodyVisible accordingly */
    _subscribeToPanel(currentPanel) {
        return currentPanel.toggle.subscribe((show) => {
            if (show) {
                this.panels.forEach((panel) => {
                    panel.isBodyVisible = false;
                });
                currentPanel.isBodyVisible = true;
            }
        });
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_panel_panel_component__WEBPACK_IMPORTED_MODULE_4__["PanelComponent"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])
], AccordionComponent.prototype, "panels", void 0);
AccordionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-accordion',
        template: __webpack_require__(/*! raw-loader!./accordion.component.html */ "./node_modules/raw-loader/index.js!./src/shared/components/accordion/components/accordion/accordion.component.html"),
        styles: [__webpack_require__(/*! ./accordion.component.scss */ "./src/shared/components/accordion/components/accordion/accordion.component.scss")]
    })
], AccordionComponent);



/***/ }),

/***/ "./src/shared/components/accordion/components/panel/panel.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/shared/components/accordion/components/panel/panel.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n:host.secondary .panel-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid var(--ion-color-light);\n  color: var(--ion-color-secondary);\n}\n:host.secondary .panel-header .title {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host.primary .panel-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid var(--ion-color-light);\n  color: var(--ion-color-primary);\n}\n:host.primary .panel-header .title {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host.dark .panel-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid var(--ion-color-light);\n  color: var(--ion-color-dark);\n}\n:host.dark .panel-header .title {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host.light .panel-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid var(--ion-color-light);\n  color: var(--ion-color-light);\n}\n:host.light .panel-header .title {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host.warning .panel-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid var(--ion-color-light);\n  color: var(--ion-color-warning);\n}\n:host.warning .panel-header .title {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host.medium .panel-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid var(--ion-color-light);\n  color: var(--ion-color-medium);\n}\n:host.medium .panel-header .title {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host.wite .panel-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border-bottom: 1px solid var(--ion-color-light);\n  color: var(--ion-color-wite);\n}\n:host.wite .panel-header .title {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvYWNjb3JkaW9uL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvc2hhcmVkL2NvbXBvbmVudHMvYWNjb3JkaW9uL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0JBO0VBRUUsY0FBQTtBQ3BCRjtBREFJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLCtDQUFBO0VBRUEsaUNBQUE7QUNDTjtBRENNO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0FDQ1I7QURUSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQ0FBQTtFQUVBLCtCQUFBO0FDVU47QURSTTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtBQ1VSO0FEbEJJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLCtDQUFBO0VBRUEsNEJBQUE7QUNtQk47QURqQk07RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUNtQlI7QUQzQkk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsK0NBQUE7RUFFQSw2QkFBQTtBQzRCTjtBRDFCTTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtBQzRCUjtBRHBDSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQ0FBQTtFQUVBLCtCQUFBO0FDcUNOO0FEbkNNO0VBQ0UsbUJBQUE7VUFBQSxPQUFBO0FDcUNSO0FEN0NJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLCtDQUFBO0VBRUEsOEJBQUE7QUM4Q047QUQ1Q007RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUM4Q1I7QUR0REk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsK0NBQUE7RUFFQSw0QkFBQTtBQ3VETjtBRHJETTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtBQ3VEUiIsImZpbGUiOiJzcmMvc2hhcmVkL2NvbXBvbmVudHMvYWNjb3JkaW9uL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWl4aW4gcGFuZWwoJG5hbWUpIHtcclxuICAmLiN7JG5hbWV9IHtcclxuICAgIC5wYW5lbC1oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgLy8gcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItI3skbmFtZX0pO1xyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBhbmVsLWJvZHkge1xyXG4gICAgICAvLyBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCB7XHJcbiAgLy8gbWFyZ2luOiAyMHB4IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgQGluY2x1ZGUgcGFuZWwoc2Vjb25kYXJ5KTtcclxuICBAaW5jbHVkZSBwYW5lbChwcmltYXJ5KTtcclxuICBAaW5jbHVkZSBwYW5lbChkYXJrKTtcclxuICBAaW5jbHVkZSBwYW5lbChsaWdodCk7XHJcbiAgQGluY2x1ZGUgcGFuZWwod2FybmluZyk7XHJcbiAgQGluY2x1ZGUgcGFuZWwobWVkaXVtKTtcclxuICBAaW5jbHVkZSBwYW5lbCh3aXRlKTtcclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuOmhvc3Quc2Vjb25kYXJ5IC5wYW5lbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuOmhvc3Quc2Vjb25kYXJ5IC5wYW5lbC1oZWFkZXIgLnRpdGxlIHtcbiAgZmxleDogMTtcbn1cbjpob3N0LnByaW1hcnkgLnBhbmVsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuOmhvc3QucHJpbWFyeSAucGFuZWwtaGVhZGVyIC50aXRsZSB7XG4gIGZsZXg6IDE7XG59XG46aG9zdC5kYXJrIC5wYW5lbC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbjpob3N0LmRhcmsgLnBhbmVsLWhlYWRlciAudGl0bGUge1xuICBmbGV4OiAxO1xufVxuOmhvc3QubGlnaHQgLnBhbmVsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbjpob3N0LmxpZ2h0IC5wYW5lbC1oZWFkZXIgLnRpdGxlIHtcbiAgZmxleDogMTtcbn1cbjpob3N0Lndhcm5pbmcgLnBhbmVsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuOmhvc3Qud2FybmluZyAucGFuZWwtaGVhZGVyIC50aXRsZSB7XG4gIGZsZXg6IDE7XG59XG46aG9zdC5tZWRpdW0gLnBhbmVsLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdC5tZWRpdW0gLnBhbmVsLWhlYWRlciAudGl0bGUge1xuICBmbGV4OiAxO1xufVxuOmhvc3Qud2l0ZSAucGFuZWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2l0ZSk7XG59XG46aG9zdC53aXRlIC5wYW5lbC1oZWFkZXIgLnRpdGxlIHtcbiAgZmxleDogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/shared/components/accordion/components/panel/panel.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/shared/components/accordion/components/panel/panel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let PanelComponent = class PanelComponent {
    constructor() {
        this.isBodyVisible = false;
        this.toggle = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.open = false;
        this.title = 'Panel';
        this.color = 'primary';
    }
    ngOnInit() {
        this.isBodyVisible = this.open;
    }
    onClick() {
        this.isBodyVisible = !this.isBodyVisible;
        this.toggle.next(this.isBodyVisible);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], PanelComponent.prototype, "open", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PanelComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class'), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PanelComponent.prototype, "color", void 0);
PanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-panel',
        template: __webpack_require__(/*! raw-loader!./panel.component.html */ "./node_modules/raw-loader/index.js!./src/shared/components/accordion/components/panel/panel.component.html"),
        styles: [__webpack_require__(/*! ./panel.component.scss */ "./src/shared/components/accordion/components/panel/panel.component.scss")]
    })
], PanelComponent);



/***/ }),

/***/ "./src/shared/components/no-data/no-data.component.scss":
/*!**************************************************************!*\
  !*** ./src/shared/components/no-data/no-data.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 90%;\n}\n:host .image {\n  height: 120px;\n  width: 150px;\n  background-size: contain !important;\n}\n:host .title {\n  font-size: 26px;\n}\n:host .description {\n  font-size: 14px;\n  color: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvbm8tZGF0YS9uby1kYXRhLmNvbXBvbmVudC5zY3NzIiwic3JjL3NoYXJlZC9jb21wb25lbnRzL25vLWRhdGEvbm8tZGF0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtBQ0NGO0FEQ0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0FDQ0o7QURFRTtFQUNFLGVBQUE7QUNBSjtBREdFO0VBQ0UsZUFBQTtFQUNBLDhCQUFBO0FDREoiLCJmaWxlIjoic3JjL3NoYXJlZC9jb21wb25lbnRzL25vLWRhdGEvbm8tZGF0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDkwJTtcclxuXHJcbiAgLmltYWdlIHtcclxuICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDkwJTtcbn1cbjpob3N0IC5pbWFnZSB7XG4gIGhlaWdodDogMTIwcHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XG59XG46aG9zdCAudGl0bGUge1xuICBmb250LXNpemU6IDI2cHg7XG59XG46aG9zdCAuZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/shared/components/no-data/no-data.component.ts":
/*!************************************************************!*\
  !*** ./src/shared/components/no-data/no-data.component.ts ***!
  \************************************************************/
/*! exports provided: NoDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoDataComponent", function() { return NoDataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");



let NoDataComponent = class NoDataComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        this.config = {};
    }
    /** defaults */
    ngOnInit() {
        this.config = Object.assign({
            image: { show: true, url: 'assets/images/other/no-data.png' },
            content: { title: this.translate.instant('misc.no-data'), description: null }
        }, this.config);
    }
};
NoDataComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], NoDataComponent.prototype, "config", void 0);
NoDataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-no-data',
        template: __webpack_require__(/*! raw-loader!./no-data.component.html */ "./node_modules/raw-loader/index.js!./src/shared/components/no-data/no-data.component.html"),
        styles: [__webpack_require__(/*! ./no-data.component.scss */ "./src/shared/components/no-data/no-data.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], NoDataComponent);



/***/ }),

/***/ "./src/shared/components/rating/rating.component.scss":
/*!************************************************************!*\
  !*** ./src/shared/components/rating/rating.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-icon {\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuc2NzcyIsInNyYy9zaGFyZWQvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9zaGFyZWQvY29tcG9uZW50cy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbn1cclxuIiwiOmhvc3QgaW9uLWljb24ge1xuICBmb250LXNpemU6IDIycHg7XG59Il19 */"

/***/ }),

/***/ "./src/shared/components/rating/rating.component.ts":
/*!**********************************************************!*\
  !*** ./src/shared/components/rating/rating.component.ts ***!
  \**********************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RatingComponent = class RatingComponent {
    constructor() {
        /** changes rating color */
        this.color = 'primary';
        /** emit change event */
        this.updateRate = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** stores range for rating */
        this.range = [1, 2, 3, 4, 5];
    }
    /** update rate and emit updated value */
    update(value) {
        this.rate = value;
        this.updateRate.emit(value);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RatingComponent.prototype, "rate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RatingComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], RatingComponent.prototype, "updateRate", void 0);
RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating',
        template: __webpack_require__(/*! raw-loader!./rating.component.html */ "./node_modules/raw-loader/index.js!./src/shared/components/rating/rating.component.html"),
        styles: [__webpack_require__(/*! ./rating.component.scss */ "./src/shared/components/rating/rating.component.scss")]
    })
], RatingComponent);



/***/ }),

/***/ "./src/shared/components/search-bar/search-bar.component.scss":
/*!********************************************************************!*\
  !*** ./src/shared/components/search-bar/search-bar.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100%;\n  border-bottom: 1px solid var(--ion-color-light-shade);\n}\n:host .search {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 10px 15px 10px 10px;\n}\n:host .search input {\n  width: 100%;\n  padding: 0 0 0 12px;\n  outline: none;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvc2VhcmNoLWJhci9zZWFyY2gtYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL3NoYXJlZC9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EscURBQUE7QUNDSjtBRENJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLDRCQUFBO0FDQ1I7QURDUTtFQUNJLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDQ1oiLCJmaWxlIjoic3JjL3NoYXJlZC9jb21wb25lbnRzL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcclxuXHJcbiAgICAuc2VhcmNoIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTBweDtcclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAwIDAgMTJweDtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbjpob3N0IC5zZWFyY2gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4IDE1cHggMTBweCAxMHB4O1xufVxuOmhvc3QgLnNlYXJjaCBpbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDAgMCAxMnB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/shared/components/search-bar/search-bar.component.ts":
/*!******************************************************************!*\
  !*** ./src/shared/components/search-bar/search-bar.component.ts ***!
  \******************************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Subject */ "./node_modules/rxjs/internal/Subject.js");
/* harmony import */ var rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");





let SearchBarComponent = class SearchBarComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
        /** capture user search data */
        this.search = new rxjs_internal_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /** emit event */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /** subscribe to search events */
    ngOnInit() {
        this._searchSubscription();
    }
    /** clear search input and send empty string */
    clearSearch(input) {
        this.search.next('');
        input.value = '';
    }
    /** subscribe to search input changes */
    _searchSubscription() {
        this.subscriptions.push(this.search
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((value) => value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(600), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe((searchPhrase) => {
            if (searchPhrase && searchPhrase.trim() !== '') {
                this.hasValue = true;
            }
            else {
                this.hasValue = false;
            }
            this.event.next(searchPhrase);
        }));
    }
};
SearchBarComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SearchBarComponent.prototype, "event", void 0);
SearchBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-bar',
        template: __webpack_require__(/*! raw-loader!./search-bar.component.html */ "./node_modules/raw-loader/index.js!./src/shared/components/search-bar/search-bar.component.html"),
        styles: [__webpack_require__(/*! ./search-bar.component.scss */ "./src/shared/components/search-bar/search-bar.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], SearchBarComponent);



/***/ }),

/***/ "./src/shared/components/simple-item/simple-item.component.scss":
/*!**********************************************************************!*\
  !*** ./src/shared/components/simple-item/simple-item.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: flex;\n  border-radius: 6px;\n  box-shadow: 1px 1px 15px 1px rgba(var(--ion-color-medium-rgb), 0.2);\n  padding: 0 10px;\n}\n:host .prefix,\n:host .suffix,\n:host .content {\n  display: -webkit-box;\n  display: flex;\n}\n:host .content {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvc2ltcGxlLWl0ZW0vc2ltcGxlLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvc2hhcmVkL2NvbXBvbmVudHMvc2ltcGxlLWl0ZW0vc2ltcGxlLWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1FQUFBO0VBQ0EsZUFBQTtBQ0NGO0FEQ0U7OztFQUdFLG9CQUFBO0VBQUEsYUFBQTtBQ0NKO0FETUU7RUFDRSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxhQUFBO0FDSkoiLCJmaWxlIjoic3JjL3NoYXJlZC9jb21wb25lbnRzL3NpbXBsZS1pdGVtL3NpbXBsZS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMTVweCAxcHggcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMik7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG5cclxuICAucHJlZml4LFxyXG4gIC5zdWZmaXgsXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcblxyXG4gIC5wcmVmaXgge1xyXG4gICAgLy8gYm9yZGVyLXJpZ2h0OlxyXG4gIH1cclxuXHJcbiAgLmNvbnRlbnQge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxNXB4IDFweCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yKTtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuOmhvc3QgLnByZWZpeCxcbjpob3N0IC5zdWZmaXgsXG46aG9zdCAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuY29udGVudCB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/shared/components/simple-item/simple-item.component.ts":
/*!********************************************************************!*\
  !*** ./src/shared/components/simple-item/simple-item.component.ts ***!
  \********************************************************************/
/*! exports provided: SimpleItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleItemComponent", function() { return SimpleItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SimpleItemComponent = class SimpleItemComponent {
    constructor() { }
    ngOnInit() { }
};
SimpleItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-simple-item',
        template: __webpack_require__(/*! raw-loader!./simple-item.component.html */ "./node_modules/raw-loader/index.js!./src/shared/components/simple-item/simple-item.component.html"),
        styles: [__webpack_require__(/*! ./simple-item.component.scss */ "./src/shared/components/simple-item/simple-item.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SimpleItemComponent);



/***/ }),

/***/ "./src/shared/components/spinner/spinner.component.scss":
/*!**************************************************************!*\
  !*** ./src/shared/components/spinner/spinner.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: flex;\n  position: fixed;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  background-color: rgba(var(--ion-color-dark-rgb), 0.5);\n  z-index: 999;\n}\n\n.contain {\n  width: 90%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 150px;\n  background: white;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n}\n\n.contain .loading {\n  display: -webkit-box;\n  display: flex;\n  margin: 40px 0 -10px 0;\n  z-index: 1;\n}\n\n.contain .svg-animation {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n\n.contain .svg-animation .spinner-bar {\n  height: 100%;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3NoYXJlZC9jb21wb25lbnRzL3NwaW5uZXIvc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLE1BQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7RUFDQSxzREFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURDRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ0NKOztBRENFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREFJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNFTiIsImZpbGUiOiJzcmMvc2hhcmVkL2NvbXBvbmVudHMvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYXJrLXJnYiksIDAuNSk7XHJcbiAgei1pbmRleDogOTk5O1xyXG59XHJcblxyXG4uY29udGFpbiB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEycHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XHJcblxyXG4gIC5sb2FkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDQwcHggMCAtMTBweCAwO1xyXG4gICAgei1pbmRleDogMTtcclxuICB9XHJcbiAgLnN2Zy1hbmltYXRpb24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC5zcGlubmVyLWJhciB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuY29udGFpbmVyIHtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC41KTtcbiAgei1pbmRleDogOTk5O1xufVxuXG4uY29udGFpbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTJweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEycHg7XG59XG4uY29udGFpbiAubG9hZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogNDBweCAwIC0xMHB4IDA7XG4gIHotaW5kZXg6IDE7XG59XG4uY29udGFpbiAuc3ZnLWFuaW1hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5jb250YWluIC5zdmctYW5pbWF0aW9uIC5zcGlubmVyLWJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDI1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/shared/components/spinner/spinner.component.ts":
/*!************************************************************!*\
  !*** ./src/shared/components/spinner/spinner.component.ts ***!
  \************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SpinnerComponent = class SpinnerComponent {
};
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: __webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/index.js!./src/shared/components/spinner/spinner.component.html"),
        styles: [__webpack_require__(/*! ./spinner.component.scss */ "./src/shared/components/spinner/spinner.component.scss")]
    })
], SpinnerComponent);



/***/ }),

/***/ "./src/shared/components/tab-menu/tab-menu.component.scss":
/*!****************************************************************!*\
  !*** ./src/shared/components/tab-menu/tab-menu.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-menu {\n  border-bottom: 1px solid var(--ion-color-light-shade);\n  padding: 5px 0 10px 0;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n}\n.tab-menu ion-col {\n  padding: 0;\n  text-transform: capitalize;\n  font-size: 13px;\n}\n.tab-menu ion-col p {\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  width: 90%;\n}\n.tab-menu ion-col.active ion-icon,\n.tab-menu ion-col.active p {\n  color: var(--ion-color-primary);\n  font-weight: 400 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvdGFiLW1lbnUvdGFiLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzcmMvc2hhcmVkL2NvbXBvbmVudHMvdGFiLW1lbnUvdGFiLW1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxREFBQTtFQUNBLHFCQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtBQ0NGO0FEQ0U7RUFDRSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDQ0o7QURDSTtFQUNFLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNDTjtBRElNOztFQUVFLCtCQUFBO0VBQ0EsMkJBQUE7QUNGUiIsImZpbGUiOiJzcmMvc2hhcmVkL2NvbXBvbmVudHMvdGFiLW1lbnUvdGFiLW1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFiLW1lbnUge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpO1xyXG4gIHBhZGRpbmc6IDVweCAwIDEwcHggMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gIGlvbi1jb2wge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG5cclxuICAgIHAge1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcblxyXG4gICAgICBpb24taWNvbixcclxuICAgICAgcCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiLnRhYi1tZW51IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XG4gIHBhZGRpbmc6IDVweCAwIDEwcHggMDtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xufVxuLnRhYi1tZW51IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnRhYi1tZW51IGlvbi1jb2wgcCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogOTAlO1xufVxuLnRhYi1tZW51IGlvbi1jb2wuYWN0aXZlIGlvbi1pY29uLFxuLnRhYi1tZW51IGlvbi1jb2wuYWN0aXZlIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogNDAwICFpbXBvcnRhbnQ7XG59Il19 */"

/***/ }),

/***/ "./src/shared/components/tab-menu/tab-menu.component.ts":
/*!**************************************************************!*\
  !*** ./src/shared/components/tab-menu/tab-menu.component.ts ***!
  \**************************************************************/
/*! exports provided: TabMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMenuComponent", function() { return TabMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TabMenuComponent = class TabMenuComponent {
    constructor() {
        /** stores tab data */
        this.tabs = [];
        /** emits event from tab selection */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngAfterViewInit() { }
    /** @description select tab and emit selection event */
    onViewSelect(index) {
        this.tabs.map((_view) => (_view.active = false));
        this.tabs[index].active = true;
        this.event.emit(this.tabs[index].id);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
], TabMenuComponent.prototype, "tabs", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], TabMenuComponent.prototype, "event", void 0);
TabMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab-menu',
        template: __webpack_require__(/*! raw-loader!./tab-menu.component.html */ "./node_modules/raw-loader/index.js!./src/shared/components/tab-menu/tab-menu.component.html"),
        styles: [__webpack_require__(/*! ./tab-menu.component.scss */ "./src/shared/components/tab-menu/tab-menu.component.scss")]
    })
], TabMenuComponent);



/***/ }),

/***/ "./src/shared/directives/color-luminance/color-luminance.directive.ts":
/*!****************************************************************************!*\
  !*** ./src/shared/directives/color-luminance/color-luminance.directive.ts ***!
  \****************************************************************************/
/*! exports provided: ColorLuminanceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorLuminanceDirective", function() { return ColorLuminanceDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ColorLuminanceDirective = class ColorLuminanceDirective {
    /** if options is not null, generate a color from options and save as background color */
    constructor(el) {
        this.el = el;
        if (this.option) {
            this.el.nativeElement.style.backgroundColor = this.colorLuminance(this.option.color, this.option.percent, this.option.rgbHex);
        }
    }
    /** after view is initialized, generate a color from options and save as background color */
    ngAfterViewInit() {
        this.el.nativeElement.style.backgroundColor = this.colorLuminance(this.option.color, this.option.percent, this.option.rgbHex);
    }
    /** calculate color hex code from provided data. */
    colorLuminance(hex, lum, type) {
        if (!type) {
            hex = String(hex).replace(/[^0-9a-f]/gi, '');
            if (hex.length < 6) {
                hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
            }
            lum = lum || 0;
            let rgb = '#';
            let c;
            let i;
            for (i = 0; i < 3; i++) {
                c = parseInt(hex.substr(i * 2, 2), 16);
                c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
                rgb += ('00' + c).substr(c.length);
            }
            return rgb;
        }
        else {
            const num = parseInt(hex.slice(1), 16);
            const amt = Math.round(2.55 * lum);
            const R = (num >> 16) + amt;
            const G = ((num >> 8) & 0x00ff) + amt;
            const B = (num & 0x0000ff) + amt;
            return ('#' +
                (0x1000000 +
                    (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
                    (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
                    (B < 255 ? (B < 1 ? 0 : B) : 255))
                    .toString(16)
                    .slice(1));
        }
    }
};
ColorLuminanceDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('colorLuminance'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ColorLuminanceDirective.prototype, "option", void 0);
ColorLuminanceDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[colorLuminance]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ColorLuminanceDirective);



/***/ }),

/***/ "./src/shared/directives/elastic/elastic.directive.ts":
/*!************************************************************!*\
  !*** ./src/shared/directives/elastic/elastic.directive.ts ***!
  \************************************************************/
/*! exports provided: ElasticDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElasticDirective", function() { return ElasticDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ElasticDirective = class ElasticDirective {
    constructor(el) {
        this.el = el;
        this.height = 44;
        this.target = el.nativeElement;
    }
    /** on input event, recalculate height of textarea */
    onInput(nativeElement) {
        nativeElement.style.overflow = 'hidden';
        nativeElement.style.height = nativeElement.scrollHeight > this.height ? nativeElement.scrollHeight + 'px' : this.height + 'px';
    }
    /** after view initializes, recalculate height of textarea */
    ngAfterViewInit() {
        this.onInput(this.target);
    }
};
ElasticDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('elastic-textarea'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], ElasticDirective.prototype, "height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event.target']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ElasticDirective.prototype, "onInput", null);
ElasticDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[elastic-textarea]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ElasticDirective);



/***/ }),

/***/ "./src/shared/directives/image-loader/image-loader.ts":
/*!************************************************************!*\
  !*** ./src/shared/directives/image-loader/image-loader.ts ***!
  \************************************************************/
/*! exports provided: ImageLoaderDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoaderDirective", function() { return ImageLoaderDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/modals/image-preview/image-preview.component */ "./src/shared/modals/image-preview/image-preview.component.ts");




let ImageLoaderDirective = class ImageLoaderDirective extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"] {
    /** gets image spinner from assets and assign to background image set css styles */
    constructor(injector, el, renderer) {
        super(injector);
        this.injector = injector;
        this.el = el;
        this.renderer = renderer;
        /** if image should have open preview modal on click */
        this.clickable = false;
        this.element = el.nativeElement;
        this.element.style.backgroundImage = 'url(./assets/images/other/placeholder.png)';
        this.renderer.setElementStyle(this.element, 'background-size', 'cover');
        this.renderer.setElementStyle(this.element, 'background-position', 'center');
        this.renderer.setElementStyle(this.element, 'background-repeat', 'no-repeat');
    }
    /** on changes call _loadImage method */
    ngOnChanges(changes) {
        if (changes.imageLoader) {
            this._loadImage();
        }
    }
    /** on click event, open preview modal */
    onClick(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.clickable) {
                const modal = yield this.openModal(src_shared_modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_3__["ImagePreviewComponent"], this.imageLoader, 'custom-modal');
                modal.present();
            }
        });
    }
    /** list on image event 'load' and append new image url to background image, if image is not defined use a placeholder */
    _loadImage() {
        const image = new Image();
        image.addEventListener('load', () => {
            this.element.style.backgroundImage = `url(${this.imageLoader ? this.imageLoader : '../assets/images/other/placeholder.png'})`;
            this.renderer.setElementStyle(this.element, 'background-size', 'cover');
            this.renderer.setElementStyle(this.element, 'background-color', 'none');
        });
        image.src = this.imageLoader ? this.imageLoader : '../assets/images/other/placeholder.png';
    }
};
ImageLoaderDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('image-loader'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ImageLoaderDirective.prototype, "imageLoader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('preview'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ImageLoaderDirective.prototype, "clickable", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Event]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", Promise)
], ImageLoaderDirective.prototype, "onClick", null);
ImageLoaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[image-loader]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer"]])
], ImageLoaderDirective);



/***/ }),

/***/ "./src/shared/form-field/components/form-field/form-field.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/shared/form-field/components/form-field/form-field.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  width: 100%;\n  margin: 10px 0;\n  text-align: left;\n}\n:host .input-wrapper.secondary {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 44px;\n  padding: 7px 12px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n  border: 1px solid var(--ion-color-secondary-tint);\n  overflow: hidden;\n}\n:host .input-wrapper.secondary .prefix,\n:host .input-wrapper.secondary .input .suffix {\n  display: -webkit-box;\n  display: flex;\n}\n:host .input-wrapper.secondary .prefix {\n  padding-right: 6px;\n  text-overflow: clip;\n  overflow-wrap: normal;\n  overflow: hidden;\n  color: var(--ion-color-secondary-contrast);\n}\n:host .input-wrapper.secondary .input {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 0;\n}\n:host .input-wrapper.secondary .suffix {\n  padding-left: 6px;\n}\n:host .input-wrapper.secondary.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.secondary.error .prefix {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.secondary.fill {\n  border: none;\n  background: rgba(var(--ion-color-secondary-rgb), 0.2);\n}\n:host .input-wrapper.secondary.fill.border {\n  border: 1px solid var(--ion-color-secondary);\n}\n:host .input-wrapper.secondary.fill.border.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.secondary.fill.border.error .prefix ion-input,\n:host .input-wrapper.secondary.fill.border.error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.secondary.fill:not(.border).error {\n  background: rgba(var(--ion-color-danger-rgb), 0.2);\n}\n:host .input-wrapper.secondary.fill:not(.border).error .prefix ion-input,\n:host .input-wrapper.secondary.fill:not(.border).error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.secondary.outline {\n  border: 1px solid var(--ion-color-secondary);\n  color: var(--ion-color-secondary);\n}\n:host .input-wrapper.secondary.outline .prefix,\n:host .input-wrapper.secondary.outline .suffix {\n  color: var(--ion-color-secondary);\n}\n:host .input-wrapper.secondary.outline ::ng-deep ion-input {\n  color: var(--ion-color-secondary);\n}\n:host .input-wrapper.secondary.outline.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.secondary.outline.error .prefix ion-input,\n:host .input-wrapper.secondary.outline.error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.secondary.round {\n  border-radius: 3px;\n}\n:host .input-wrapper.secondary.full {\n  border-radius: 0;\n}\n:host .input-wrapper.secondary ::ng-deep ion-input {\n  margin-left: 6px;\n  color: var(--ion-color-secondary-contrast);\n}\n:host .input-wrapper.secondary ::ng-deep ion-input input {\n  padding: 0;\n}\n:host .input-wrapper.primary {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 44px;\n  padding: 7px 12px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n  border: 1px solid var(--ion-color-primary-tint);\n  overflow: hidden;\n}\n:host .input-wrapper.primary .prefix,\n:host .input-wrapper.primary .input .suffix {\n  display: -webkit-box;\n  display: flex;\n}\n:host .input-wrapper.primary .prefix {\n  padding-right: 6px;\n  text-overflow: clip;\n  overflow-wrap: normal;\n  overflow: hidden;\n  color: var(--ion-color-primary-contrast);\n}\n:host .input-wrapper.primary .input {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 0;\n}\n:host .input-wrapper.primary .suffix {\n  padding-left: 6px;\n}\n:host .input-wrapper.primary.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.primary.error .prefix {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.primary.fill {\n  border: none;\n  background: rgba(var(--ion-color-primary-rgb), 0.2);\n}\n:host .input-wrapper.primary.fill.border {\n  border: 1px solid var(--ion-color-primary);\n}\n:host .input-wrapper.primary.fill.border.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.primary.fill.border.error .prefix ion-input,\n:host .input-wrapper.primary.fill.border.error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.primary.fill:not(.border).error {\n  background: rgba(var(--ion-color-danger-rgb), 0.2);\n}\n:host .input-wrapper.primary.fill:not(.border).error .prefix ion-input,\n:host .input-wrapper.primary.fill:not(.border).error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.primary.outline {\n  border: 1px solid var(--ion-color-primary);\n  color: var(--ion-color-primary);\n}\n:host .input-wrapper.primary.outline .prefix,\n:host .input-wrapper.primary.outline .suffix {\n  color: var(--ion-color-primary);\n}\n:host .input-wrapper.primary.outline ::ng-deep ion-input {\n  color: var(--ion-color-primary);\n}\n:host .input-wrapper.primary.outline.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.primary.outline.error .prefix ion-input,\n:host .input-wrapper.primary.outline.error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.primary.round {\n  border-radius: 3px;\n}\n:host .input-wrapper.primary.full {\n  border-radius: 0;\n}\n:host .input-wrapper.primary ::ng-deep ion-input {\n  margin-left: 6px;\n  color: var(--ion-color-primary-contrast);\n}\n:host .input-wrapper.primary ::ng-deep ion-input input {\n  padding: 0;\n}\n:host .input-wrapper.dark {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 44px;\n  padding: 7px 12px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n  border: 1px solid var(--ion-color-dark-tint);\n  overflow: hidden;\n}\n:host .input-wrapper.dark .prefix,\n:host .input-wrapper.dark .input .suffix {\n  display: -webkit-box;\n  display: flex;\n}\n:host .input-wrapper.dark .prefix {\n  padding-right: 6px;\n  text-overflow: clip;\n  overflow-wrap: normal;\n  overflow: hidden;\n  color: var(--ion-color-dark-contrast);\n}\n:host .input-wrapper.dark .input {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 0;\n}\n:host .input-wrapper.dark .suffix {\n  padding-left: 6px;\n}\n:host .input-wrapper.dark.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.dark.error .prefix {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.dark.fill {\n  border: none;\n  background: rgba(var(--ion-color-dark-rgb), 0.2);\n}\n:host .input-wrapper.dark.fill.border {\n  border: 1px solid var(--ion-color-dark);\n}\n:host .input-wrapper.dark.fill.border.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.dark.fill.border.error .prefix ion-input,\n:host .input-wrapper.dark.fill.border.error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.dark.fill:not(.border).error {\n  background: rgba(var(--ion-color-danger-rgb), 0.2);\n}\n:host .input-wrapper.dark.fill:not(.border).error .prefix ion-input,\n:host .input-wrapper.dark.fill:not(.border).error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.dark.outline {\n  border: 1px solid var(--ion-color-dark);\n  color: var(--ion-color-dark);\n}\n:host .input-wrapper.dark.outline .prefix,\n:host .input-wrapper.dark.outline .suffix {\n  color: var(--ion-color-dark);\n}\n:host .input-wrapper.dark.outline ::ng-deep ion-input {\n  color: var(--ion-color-dark);\n}\n:host .input-wrapper.dark.outline.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.dark.outline.error .prefix ion-input,\n:host .input-wrapper.dark.outline.error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.dark.round {\n  border-radius: 3px;\n}\n:host .input-wrapper.dark.full {\n  border-radius: 0;\n}\n:host .input-wrapper.dark ::ng-deep ion-input {\n  margin-left: 6px;\n  color: var(--ion-color-dark-contrast);\n}\n:host .input-wrapper.dark ::ng-deep ion-input input {\n  padding: 0;\n}\n:host .input-wrapper.light {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 44px;\n  padding: 7px 12px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n  border: 1px solid var(--ion-color-light-tint);\n  overflow: hidden;\n}\n:host .input-wrapper.light .prefix,\n:host .input-wrapper.light .input .suffix {\n  display: -webkit-box;\n  display: flex;\n}\n:host .input-wrapper.light .prefix {\n  padding-right: 6px;\n  text-overflow: clip;\n  overflow-wrap: normal;\n  overflow: hidden;\n  color: var(--ion-color-light-contrast);\n}\n:host .input-wrapper.light .input {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 0;\n}\n:host .input-wrapper.light .suffix {\n  padding-left: 6px;\n}\n:host .input-wrapper.light.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.light.error .prefix {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.light.fill {\n  border: none;\n  background: rgba(var(--ion-color-light-rgb), 0.2);\n}\n:host .input-wrapper.light.fill.border {\n  border: 1px solid var(--ion-color-light);\n}\n:host .input-wrapper.light.fill.border.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.light.fill.border.error .prefix ion-input,\n:host .input-wrapper.light.fill.border.error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.light.fill:not(.border).error {\n  background: rgba(var(--ion-color-danger-rgb), 0.2);\n}\n:host .input-wrapper.light.fill:not(.border).error .prefix ion-input,\n:host .input-wrapper.light.fill:not(.border).error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.light.outline {\n  border: 1px solid var(--ion-color-light);\n  color: var(--ion-color-light);\n}\n:host .input-wrapper.light.outline .prefix,\n:host .input-wrapper.light.outline .suffix {\n  color: var(--ion-color-light);\n}\n:host .input-wrapper.light.outline ::ng-deep ion-input {\n  color: var(--ion-color-light);\n}\n:host .input-wrapper.light.outline.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.light.outline.error .prefix ion-input,\n:host .input-wrapper.light.outline.error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.light.round {\n  border-radius: 3px;\n}\n:host .input-wrapper.light.full {\n  border-radius: 0;\n}\n:host .input-wrapper.light ::ng-deep ion-input {\n  margin-left: 6px;\n  color: var(--ion-color-light-contrast);\n}\n:host .input-wrapper.light ::ng-deep ion-input input {\n  padding: 0;\n}\n:host .input-wrapper.warning {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 44px;\n  padding: 7px 12px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n  border: 1px solid var(--ion-color-warning-tint);\n  overflow: hidden;\n}\n:host .input-wrapper.warning .prefix,\n:host .input-wrapper.warning .input .suffix {\n  display: -webkit-box;\n  display: flex;\n}\n:host .input-wrapper.warning .prefix {\n  padding-right: 6px;\n  text-overflow: clip;\n  overflow-wrap: normal;\n  overflow: hidden;\n  color: var(--ion-color-warning-contrast);\n}\n:host .input-wrapper.warning .input {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 0;\n}\n:host .input-wrapper.warning .suffix {\n  padding-left: 6px;\n}\n:host .input-wrapper.warning.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.warning.error .prefix {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.warning.fill {\n  border: none;\n  background: rgba(var(--ion-color-warning-rgb), 0.2);\n}\n:host .input-wrapper.warning.fill.border {\n  border: 1px solid var(--ion-color-warning);\n}\n:host .input-wrapper.warning.fill.border.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.warning.fill.border.error .prefix ion-input,\n:host .input-wrapper.warning.fill.border.error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.warning.fill:not(.border).error {\n  background: rgba(var(--ion-color-danger-rgb), 0.2);\n}\n:host .input-wrapper.warning.fill:not(.border).error .prefix ion-input,\n:host .input-wrapper.warning.fill:not(.border).error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.warning.outline {\n  border: 1px solid var(--ion-color-warning);\n  color: var(--ion-color-warning);\n}\n:host .input-wrapper.warning.outline .prefix,\n:host .input-wrapper.warning.outline .suffix {\n  color: var(--ion-color-warning);\n}\n:host .input-wrapper.warning.outline ::ng-deep ion-input {\n  color: var(--ion-color-warning);\n}\n:host .input-wrapper.warning.outline.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.warning.outline.error .prefix ion-input,\n:host .input-wrapper.warning.outline.error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.warning.round {\n  border-radius: 3px;\n}\n:host .input-wrapper.warning.full {\n  border-radius: 0;\n}\n:host .input-wrapper.warning ::ng-deep ion-input {\n  margin-left: 6px;\n  color: var(--ion-color-warning-contrast);\n}\n:host .input-wrapper.warning ::ng-deep ion-input input {\n  padding: 0;\n}\n:host .input-wrapper.medium {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 44px;\n  padding: 7px 12px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n  border: 1px solid var(--ion-color-medium-tint);\n  overflow: hidden;\n}\n:host .input-wrapper.medium .prefix,\n:host .input-wrapper.medium .input .suffix {\n  display: -webkit-box;\n  display: flex;\n}\n:host .input-wrapper.medium .prefix {\n  padding-right: 6px;\n  text-overflow: clip;\n  overflow-wrap: normal;\n  overflow: hidden;\n  color: var(--ion-color-medium-contrast);\n}\n:host .input-wrapper.medium .input {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 0;\n}\n:host .input-wrapper.medium .suffix {\n  padding-left: 6px;\n}\n:host .input-wrapper.medium.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.medium.error .prefix {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.medium.fill {\n  border: none;\n  background: rgba(var(--ion-color-medium-rgb), 0.2);\n}\n:host .input-wrapper.medium.fill.border {\n  border: 1px solid var(--ion-color-medium);\n}\n:host .input-wrapper.medium.fill.border.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.medium.fill.border.error .prefix ion-input,\n:host .input-wrapper.medium.fill.border.error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.medium.fill:not(.border).error {\n  background: rgba(var(--ion-color-danger-rgb), 0.2);\n}\n:host .input-wrapper.medium.fill:not(.border).error .prefix ion-input,\n:host .input-wrapper.medium.fill:not(.border).error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.medium.outline {\n  border: 1px solid var(--ion-color-medium);\n  color: var(--ion-color-medium);\n}\n:host .input-wrapper.medium.outline .prefix,\n:host .input-wrapper.medium.outline .suffix {\n  color: var(--ion-color-medium);\n}\n:host .input-wrapper.medium.outline ::ng-deep ion-input {\n  color: var(--ion-color-medium);\n}\n:host .input-wrapper.medium.outline.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.medium.outline.error .prefix ion-input,\n:host .input-wrapper.medium.outline.error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.medium.round {\n  border-radius: 3px;\n}\n:host .input-wrapper.medium.full {\n  border-radius: 0;\n}\n:host .input-wrapper.medium ::ng-deep ion-input {\n  margin-left: 6px;\n  color: var(--ion-color-medium-contrast);\n}\n:host .input-wrapper.medium ::ng-deep ion-input input {\n  padding: 0;\n}\n:host .input-wrapper.wite {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 44px;\n  padding: 7px 12px;\n  -webkit-transition: all 200ms ease-in-out;\n  transition: all 200ms ease-in-out;\n  border: 1px solid var(--ion-color-wite-tint);\n  overflow: hidden;\n}\n:host .input-wrapper.wite .prefix,\n:host .input-wrapper.wite .input .suffix {\n  display: -webkit-box;\n  display: flex;\n}\n:host .input-wrapper.wite .prefix {\n  padding-right: 6px;\n  text-overflow: clip;\n  overflow-wrap: normal;\n  overflow: hidden;\n  color: var(--ion-color-wite-contrast);\n}\n:host .input-wrapper.wite .input {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 0;\n}\n:host .input-wrapper.wite .suffix {\n  padding-left: 6px;\n}\n:host .input-wrapper.wite.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.wite.error .prefix {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.wite.fill {\n  border: none;\n  background: rgba(var(--ion-color-wite-rgb), 0.2);\n}\n:host .input-wrapper.wite.fill.border {\n  border: 1px solid var(--ion-color-wite);\n}\n:host .input-wrapper.wite.fill.border.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.wite.fill.border.error .prefix ion-input,\n:host .input-wrapper.wite.fill.border.error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.wite.fill:not(.border).error {\n  background: rgba(var(--ion-color-danger-rgb), 0.2);\n}\n:host .input-wrapper.wite.fill:not(.border).error .prefix ion-input,\n:host .input-wrapper.wite.fill:not(.border).error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.wite.outline {\n  border: 1px solid var(--ion-color-wite);\n  color: var(--ion-color-wite);\n}\n:host .input-wrapper.wite.outline .prefix,\n:host .input-wrapper.wite.outline .suffix {\n  color: var(--ion-color-wite);\n}\n:host .input-wrapper.wite.outline ::ng-deep ion-input {\n  color: var(--ion-color-wite);\n}\n:host .input-wrapper.wite.outline.error {\n  border: 1px solid var(--ion-color-danger);\n}\n:host .input-wrapper.wite.outline.error .prefix ion-input,\n:host .input-wrapper.wite.outline.error ::ng-deep ion-input {\n  color: var(--ion-color-danger);\n}\n:host .input-wrapper.wite.round {\n  border-radius: 3px;\n}\n:host .input-wrapper.wite.full {\n  border-radius: 0;\n}\n:host .input-wrapper.wite ::ng-deep ion-input {\n  margin-left: 6px;\n  color: var(--ion-color-wite-contrast);\n}\n:host .input-wrapper.wite ::ng-deep ion-input input {\n  padding: 0;\n}\n:host .error-section {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 100%;\n  padding: 2px 0 2px 12px;\n  align-content: flex-end;\n}\n:host .error-section ::ng-deep span {\n  font-size: 12px;\n  color: var(--ion-color-danger);\n}\n:host ::ng-deep p {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL2Zvcm0tZmllbGQvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQuY29tcG9uZW50LnNjc3MiLCJzcmMvc2hhcmVkL2Zvcm0tZmllbGQvY29tcG9uZW50cy9mb3JtLWZpZWxkL2Zvcm0tZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEhBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUN6SEY7QURKRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtFQUNBLGlEQUFBO0VBQ0EsZ0JBQUE7QUNNSjtBREpJOztFQUVFLG9CQUFBO0VBQUEsYUFBQTtBQ01OO0FESEk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0FDS047QURGSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLFFBQUE7QUNJTjtBRERJO0VBQ0UsaUJBQUE7QUNHTjtBREFJO0VBQ0UseUNBQUE7QUNFTjtBREFNO0VBQ0UsOEJBQUE7QUNFUjtBREVJO0VBQ0UsWUFBQTtFQUNBLHFEQUFBO0FDQU47QURFTTtFQUNFLDRDQUFBO0FDQVI7QURFUTtFQUNFLHlDQUFBO0FDQVY7QURJWTs7RUFDRSw4QkFBQTtBQ0RkO0FEUVE7RUFDRSxrREFBQTtBQ05WO0FEVVk7O0VBQ0UsOEJBQUE7QUNQZDtBRGNJO0VBQ0UsNENBQUE7RUFDQSxpQ0FBQTtBQ1pOO0FEY007O0VBRUUsaUNBQUE7QUNaUjtBRGdCUTtFQUNFLGlDQUFBO0FDZFY7QURrQk07RUFDRSx5Q0FBQTtBQ2hCUjtBRG9CVTs7RUFDRSw4QkFBQTtBQ2pCWjtBRHVCSTtFQUNFLGtCQUFBO0FDckJOO0FEd0JJO0VBQ0UsZ0JBQUE7QUN0Qk47QUQwQk07RUFDRSxnQkFBQTtFQUNBLDBDQUFBO0FDeEJSO0FEMEJRO0VBQ0UsVUFBQTtBQ3hCVjtBRDFGRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7QUM0Rko7QUQxRkk7O0VBRUUsb0JBQUE7RUFBQSxhQUFBO0FDNEZOO0FEekZJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBQzJGTjtBRHhGSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLFFBQUE7QUMwRk47QUR2Rkk7RUFDRSxpQkFBQTtBQ3lGTjtBRHRGSTtFQUNFLHlDQUFBO0FDd0ZOO0FEdEZNO0VBQ0UsOEJBQUE7QUN3RlI7QURwRkk7RUFDRSxZQUFBO0VBQ0EsbURBQUE7QUNzRk47QURwRk07RUFDRSwwQ0FBQTtBQ3NGUjtBRHBGUTtFQUNFLHlDQUFBO0FDc0ZWO0FEbEZZOztFQUNFLDhCQUFBO0FDcUZkO0FEOUVRO0VBQ0Usa0RBQUE7QUNnRlY7QUQ1RVk7O0VBQ0UsOEJBQUE7QUMrRWQ7QUR4RUk7RUFDRSwwQ0FBQTtFQUNBLCtCQUFBO0FDMEVOO0FEeEVNOztFQUVFLCtCQUFBO0FDMEVSO0FEdEVRO0VBQ0UsK0JBQUE7QUN3RVY7QURwRU07RUFDRSx5Q0FBQTtBQ3NFUjtBRGxFVTs7RUFDRSw4QkFBQTtBQ3FFWjtBRC9ESTtFQUNFLGtCQUFBO0FDaUVOO0FEOURJO0VBQ0UsZ0JBQUE7QUNnRU47QUQ1RE07RUFDRSxnQkFBQTtFQUNBLHdDQUFBO0FDOERSO0FENURRO0VBQ0UsVUFBQTtBQzhEVjtBRGhMRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsZ0JBQUE7QUNrTEo7QURoTEk7O0VBRUUsb0JBQUE7RUFBQSxhQUFBO0FDa0xOO0FEL0tJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQ2lMTjtBRDlLSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLFFBQUE7QUNnTE47QUQ3S0k7RUFDRSxpQkFBQTtBQytLTjtBRDVLSTtFQUNFLHlDQUFBO0FDOEtOO0FENUtNO0VBQ0UsOEJBQUE7QUM4S1I7QUQxS0k7RUFDRSxZQUFBO0VBQ0EsZ0RBQUE7QUM0S047QUQxS007RUFDRSx1Q0FBQTtBQzRLUjtBRDFLUTtFQUNFLHlDQUFBO0FDNEtWO0FEeEtZOztFQUNFLDhCQUFBO0FDMktkO0FEcEtRO0VBQ0Usa0RBQUE7QUNzS1Y7QURsS1k7O0VBQ0UsOEJBQUE7QUNxS2Q7QUQ5Skk7RUFDRSx1Q0FBQTtFQUNBLDRCQUFBO0FDZ0tOO0FEOUpNOztFQUVFLDRCQUFBO0FDZ0tSO0FENUpRO0VBQ0UsNEJBQUE7QUM4SlY7QUQxSk07RUFDRSx5Q0FBQTtBQzRKUjtBRHhKVTs7RUFDRSw4QkFBQTtBQzJKWjtBRHJKSTtFQUNFLGtCQUFBO0FDdUpOO0FEcEpJO0VBQ0UsZ0JBQUE7QUNzSk47QURsSk07RUFDRSxnQkFBQTtFQUNBLHFDQUFBO0FDb0pSO0FEbEpRO0VBQ0UsVUFBQTtBQ29KVjtBRHRRRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsZ0JBQUE7QUN3UUo7QUR0UUk7O0VBRUUsb0JBQUE7RUFBQSxhQUFBO0FDd1FOO0FEclFJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQ0FBQTtBQ3VRTjtBRHBRSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLFFBQUE7QUNzUU47QURuUUk7RUFDRSxpQkFBQTtBQ3FRTjtBRGxRSTtFQUNFLHlDQUFBO0FDb1FOO0FEbFFNO0VBQ0UsOEJBQUE7QUNvUVI7QURoUUk7RUFDRSxZQUFBO0VBQ0EsaURBQUE7QUNrUU47QURoUU07RUFDRSx3Q0FBQTtBQ2tRUjtBRGhRUTtFQUNFLHlDQUFBO0FDa1FWO0FEOVBZOztFQUNFLDhCQUFBO0FDaVFkO0FEMVBRO0VBQ0Usa0RBQUE7QUM0UFY7QUR4UFk7O0VBQ0UsOEJBQUE7QUMyUGQ7QURwUEk7RUFDRSx3Q0FBQTtFQUNBLDZCQUFBO0FDc1BOO0FEcFBNOztFQUVFLDZCQUFBO0FDc1BSO0FEbFBRO0VBQ0UsNkJBQUE7QUNvUFY7QURoUE07RUFDRSx5Q0FBQTtBQ2tQUjtBRDlPVTs7RUFDRSw4QkFBQTtBQ2lQWjtBRDNPSTtFQUNFLGtCQUFBO0FDNk9OO0FEMU9JO0VBQ0UsZ0JBQUE7QUM0T047QUR4T007RUFDRSxnQkFBQTtFQUNBLHNDQUFBO0FDME9SO0FEeE9RO0VBQ0UsVUFBQTtBQzBPVjtBRDVWRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtFQUNBLCtDQUFBO0VBQ0EsZ0JBQUE7QUM4Vko7QUQ1Vkk7O0VBRUUsb0JBQUE7RUFBQSxhQUFBO0FDOFZOO0FEM1ZJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3Q0FBQTtBQzZWTjtBRDFWSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLFFBQUE7QUM0Vk47QUR6Vkk7RUFDRSxpQkFBQTtBQzJWTjtBRHhWSTtFQUNFLHlDQUFBO0FDMFZOO0FEeFZNO0VBQ0UsOEJBQUE7QUMwVlI7QUR0Vkk7RUFDRSxZQUFBO0VBQ0EsbURBQUE7QUN3Vk47QUR0Vk07RUFDRSwwQ0FBQTtBQ3dWUjtBRHRWUTtFQUNFLHlDQUFBO0FDd1ZWO0FEcFZZOztFQUNFLDhCQUFBO0FDdVZkO0FEaFZRO0VBQ0Usa0RBQUE7QUNrVlY7QUQ5VVk7O0VBQ0UsOEJBQUE7QUNpVmQ7QUQxVUk7RUFDRSwwQ0FBQTtFQUNBLCtCQUFBO0FDNFVOO0FEMVVNOztFQUVFLCtCQUFBO0FDNFVSO0FEeFVRO0VBQ0UsK0JBQUE7QUMwVVY7QUR0VU07RUFDRSx5Q0FBQTtBQ3dVUjtBRHBVVTs7RUFDRSw4QkFBQTtBQ3VVWjtBRGpVSTtFQUNFLGtCQUFBO0FDbVVOO0FEaFVJO0VBQ0UsZ0JBQUE7QUNrVU47QUQ5VE07RUFDRSxnQkFBQTtFQUNBLHdDQUFBO0FDZ1VSO0FEOVRRO0VBQ0UsVUFBQTtBQ2dVVjtBRGxiRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EseUNBQUE7RUFBQSxpQ0FBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7QUNvYko7QURsYkk7O0VBRUUsb0JBQUE7RUFBQSxhQUFBO0FDb2JOO0FEamJJO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtBQ21iTjtBRGhiSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLFFBQUE7QUNrYk47QUQvYUk7RUFDRSxpQkFBQTtBQ2liTjtBRDlhSTtFQUNFLHlDQUFBO0FDZ2JOO0FEOWFNO0VBQ0UsOEJBQUE7QUNnYlI7QUQ1YUk7RUFDRSxZQUFBO0VBQ0Esa0RBQUE7QUM4YU47QUQ1YU07RUFDRSx5Q0FBQTtBQzhhUjtBRDVhUTtFQUNFLHlDQUFBO0FDOGFWO0FEMWFZOztFQUNFLDhCQUFBO0FDNmFkO0FEdGFRO0VBQ0Usa0RBQUE7QUN3YVY7QURwYVk7O0VBQ0UsOEJBQUE7QUN1YWQ7QURoYUk7RUFDRSx5Q0FBQTtFQUNBLDhCQUFBO0FDa2FOO0FEaGFNOztFQUVFLDhCQUFBO0FDa2FSO0FEOVpRO0VBQ0UsOEJBQUE7QUNnYVY7QUQ1Wk07RUFDRSx5Q0FBQTtBQzhaUjtBRDFaVTs7RUFDRSw4QkFBQTtBQzZaWjtBRHZaSTtFQUNFLGtCQUFBO0FDeVpOO0FEdFpJO0VBQ0UsZ0JBQUE7QUN3Wk47QURwWk07RUFDRSxnQkFBQTtFQUNBLHVDQUFBO0FDc1pSO0FEcFpRO0VBQ0UsVUFBQTtBQ3NaVjtBRHhnQkU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLHlDQUFBO0VBQUEsaUNBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0FDMGdCSjtBRHhnQkk7O0VBRUUsb0JBQUE7RUFBQSxhQUFBO0FDMGdCTjtBRHZnQkk7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0FDeWdCTjtBRHRnQkk7RUFDRSxtQkFBQTtVQUFBLE9BQUE7RUFDQSxRQUFBO0FDd2dCTjtBRHJnQkk7RUFDRSxpQkFBQTtBQ3VnQk47QURwZ0JJO0VBQ0UseUNBQUE7QUNzZ0JOO0FEcGdCTTtFQUNFLDhCQUFBO0FDc2dCUjtBRGxnQkk7RUFDRSxZQUFBO0VBQ0EsZ0RBQUE7QUNvZ0JOO0FEbGdCTTtFQUNFLHVDQUFBO0FDb2dCUjtBRGxnQlE7RUFDRSx5Q0FBQTtBQ29nQlY7QURoZ0JZOztFQUNFLDhCQUFBO0FDbWdCZDtBRDVmUTtFQUNFLGtEQUFBO0FDOGZWO0FEMWZZOztFQUNFLDhCQUFBO0FDNmZkO0FEdGZJO0VBQ0UsdUNBQUE7RUFDQSw0QkFBQTtBQ3dmTjtBRHRmTTs7RUFFRSw0QkFBQTtBQ3dmUjtBRHBmUTtFQUNFLDRCQUFBO0FDc2ZWO0FEbGZNO0VBQ0UseUNBQUE7QUNvZlI7QURoZlU7O0VBQ0UsOEJBQUE7QUNtZlo7QUQ3ZUk7RUFDRSxrQkFBQTtBQytlTjtBRDVlSTtFQUNFLGdCQUFBO0FDOGVOO0FEMWVNO0VBQ0UsZ0JBQUE7RUFDQSxxQ0FBQTtBQzRlUjtBRDFlUTtFQUNFLFVBQUE7QUM0ZVY7QURyZEU7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQ3VkSjtBRHBkTTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtBQ3NkUjtBRGhkSTtFQUNFLFNBQUE7QUNrZE4iLCJmaWxlIjoic3JjL3NoYXJlZC9mb3JtLWZpZWxkL2NvbXBvbmVudHMvZm9ybS1maWVsZC9mb3JtLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1peGluIGlucHV0LXdyYXBwZXIoJG5hbWUpIHtcclxuICAmLiN7JG5hbWV9IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBwYWRkaW5nOiA3cHggMTJweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci0jeyRuYW1lfS10aW50KTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICAgLnByZWZpeCxcclxuICAgIC5pbnB1dCAuc3VmZml4IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAucHJlZml4IHtcclxuICAgICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xyXG4gICAgICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItI3skbmFtZX0tY29udHJhc3QpO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnB1dCB7XHJcbiAgICAgIGZsZXg6IDE7XHJcbiAgICAgIHdpZHRoOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdWZmaXgge1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmVycm9yIHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcblxyXG4gICAgICAucHJlZml4IHtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLmZpbGwge1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLSN7JG5hbWV9LXJnYiksIDAuMik7XHJcblxyXG4gICAgICAmLmJvcmRlciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLSN7JG5hbWV9KTtcclxuXHJcbiAgICAgICAgJi5lcnJvciB7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuXHJcbiAgICAgICAgICAucHJlZml4LFxyXG4gICAgICAgICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6bm90KC5ib3JkZXIpIHtcclxuICAgICAgICAmLmVycm9yIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAwLjIpO1xyXG5cclxuICAgICAgICAgIC5wcmVmaXgsXHJcbiAgICAgICAgICA6Om5nLWRlZXAge1xyXG4gICAgICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICYub3V0bGluZSB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci0jeyRuYW1lfSk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItI3skbmFtZX0pO1xyXG5cclxuICAgICAgLnByZWZpeCxcclxuICAgICAgLnN1ZmZpeCB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci0jeyRuYW1lfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIDo6bmctZGVlcCB7XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItI3skbmFtZX0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJi5lcnJvciB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcblxyXG4gICAgICAgIC5wcmVmaXgsXHJcbiAgICAgICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmLnJvdW5kIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgfVxyXG5cclxuICAgICYuZnVsbCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgOjpuZy1kZWVwIHtcclxuICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItI3skbmFtZX0tY29udHJhc3QpO1xyXG5cclxuICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gIC5pbnB1dC13cmFwcGVyIHtcclxuICAgIEBpbmNsdWRlIGlucHV0LXdyYXBwZXIoc2Vjb25kYXJ5KTtcclxuICAgIEBpbmNsdWRlIGlucHV0LXdyYXBwZXIocHJpbWFyeSk7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC13cmFwcGVyKGRhcmspO1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtd3JhcHBlcihsaWdodCk7XHJcbiAgICBAaW5jbHVkZSBpbnB1dC13cmFwcGVyKHdhcm5pbmcpO1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtd3JhcHBlcihtZWRpdW0pO1xyXG4gICAgQGluY2x1ZGUgaW5wdXQtd3JhcHBlcih3aXRlKTtcclxuICB9XHJcblxyXG4gIC5lcnJvci1zZWN0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAycHggMCAycHggMTJweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgIDo6bmctZGVlcCB7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCB7XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5zZWNvbmRhcnkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBwYWRkaW5nOiA3cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXRpbnQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuc2Vjb25kYXJ5IC5wcmVmaXgsXG46aG9zdCAuaW5wdXQtd3JhcHBlci5zZWNvbmRhcnkgLmlucHV0IC5zdWZmaXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuc2Vjb25kYXJ5IC5wcmVmaXgge1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuc2Vjb25kYXJ5IC5pbnB1dCB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAwO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuc2Vjb25kYXJ5IC5zdWZmaXgge1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnNlY29uZGFyeS5lcnJvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuc2Vjb25kYXJ5LmVycm9yIC5wcmVmaXgge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5zZWNvbmRhcnkuZmlsbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LXJnYiksIDAuMik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5zZWNvbmRhcnkuZmlsbC5ib3JkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnNlY29uZGFyeS5maWxsLmJvcmRlci5lcnJvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuc2Vjb25kYXJ5LmZpbGwuYm9yZGVyLmVycm9yIC5wcmVmaXggaW9uLWlucHV0LFxuOmhvc3QgLmlucHV0LXdyYXBwZXIuc2Vjb25kYXJ5LmZpbGwuYm9yZGVyLmVycm9yIDo6bmctZGVlcCBpb24taW5wdXQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5zZWNvbmRhcnkuZmlsbDpub3QoLmJvcmRlcikuZXJyb3Ige1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgMC4yKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnNlY29uZGFyeS5maWxsOm5vdCguYm9yZGVyKS5lcnJvciAucHJlZml4IGlvbi1pbnB1dCxcbjpob3N0IC5pbnB1dC13cmFwcGVyLnNlY29uZGFyeS5maWxsOm5vdCguYm9yZGVyKS5lcnJvciA6Om5nLWRlZXAgaW9uLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuc2Vjb25kYXJ5Lm91dGxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuc2Vjb25kYXJ5Lm91dGxpbmUgLnByZWZpeCxcbjpob3N0IC5pbnB1dC13cmFwcGVyLnNlY29uZGFyeS5vdXRsaW5lIC5zdWZmaXgge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5zZWNvbmRhcnkub3V0bGluZSA6Om5nLWRlZXAgaW9uLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuc2Vjb25kYXJ5Lm91dGxpbmUuZXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnNlY29uZGFyeS5vdXRsaW5lLmVycm9yIC5wcmVmaXggaW9uLWlucHV0LFxuOmhvc3QgLmlucHV0LXdyYXBwZXIuc2Vjb25kYXJ5Lm91dGxpbmUuZXJyb3IgOjpuZy1kZWVwIGlvbi1pbnB1dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnNlY29uZGFyeS5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnNlY29uZGFyeS5mdWxsIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnNlY29uZGFyeSA6Om5nLWRlZXAgaW9uLWlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuc2Vjb25kYXJ5IDo6bmctZGVlcCBpb24taW5wdXQgaW5wdXQge1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIucHJpbWFyeSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDdweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXRpbnQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIucHJpbWFyeSAucHJlZml4LFxuOmhvc3QgLmlucHV0LXdyYXBwZXIucHJpbWFyeSAuaW5wdXQgLnN1ZmZpeCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5wcmltYXJ5IC5wcmVmaXgge1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnByaW1hcnkgLmlucHV0IHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDA7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5wcmltYXJ5IC5zdWZmaXgge1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnByaW1hcnkuZXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnByaW1hcnkuZXJyb3IgLnByZWZpeCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnByaW1hcnkuZmlsbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIucHJpbWFyeS5maWxsLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnByaW1hcnkuZmlsbC5ib3JkZXIuZXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnByaW1hcnkuZmlsbC5ib3JkZXIuZXJyb3IgLnByZWZpeCBpb24taW5wdXQsXG46aG9zdCAuaW5wdXQtd3JhcHBlci5wcmltYXJ5LmZpbGwuYm9yZGVyLmVycm9yIDo6bmctZGVlcCBpb24taW5wdXQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5wcmltYXJ5LmZpbGw6bm90KC5ib3JkZXIpLmVycm9yIHtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiksIDAuMik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5wcmltYXJ5LmZpbGw6bm90KC5ib3JkZXIpLmVycm9yIC5wcmVmaXggaW9uLWlucHV0LFxuOmhvc3QgLmlucHV0LXdyYXBwZXIucHJpbWFyeS5maWxsOm5vdCguYm9yZGVyKS5lcnJvciA6Om5nLWRlZXAgaW9uLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIucHJpbWFyeS5vdXRsaW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIucHJpbWFyeS5vdXRsaW5lIC5wcmVmaXgsXG46aG9zdCAuaW5wdXQtd3JhcHBlci5wcmltYXJ5Lm91dGxpbmUgLnN1ZmZpeCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5wcmltYXJ5Lm91dGxpbmUgOjpuZy1kZWVwIGlvbi1pbnB1dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5wcmltYXJ5Lm91dGxpbmUuZXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnByaW1hcnkub3V0bGluZS5lcnJvciAucHJlZml4IGlvbi1pbnB1dCxcbjpob3N0IC5pbnB1dC13cmFwcGVyLnByaW1hcnkub3V0bGluZS5lcnJvciA6Om5nLWRlZXAgaW9uLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIucHJpbWFyeS5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLnByaW1hcnkuZnVsbCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5wcmltYXJ5IDo6bmctZGVlcCBpb24taW5wdXQge1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIucHJpbWFyeSA6Om5nLWRlZXAgaW9uLWlucHV0IGlucHV0IHtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLmRhcmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0NHB4O1xuICBwYWRkaW5nOiA3cHggMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDIwMG1zIGVhc2UtaW4tb3V0O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLmRhcmsgLnByZWZpeCxcbjpob3N0IC5pbnB1dC13cmFwcGVyLmRhcmsgLmlucHV0IC5zdWZmaXgge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuZGFyayAucHJlZml4IHtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xuICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xuICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyay1jb250cmFzdCk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5kYXJrIC5pbnB1dCB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAwO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuZGFyayAuc3VmZml4IHtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5kYXJrLmVycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5kYXJrLmVycm9yIC5wcmVmaXgge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5kYXJrLmZpbGwge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhcmstcmdiKSwgMC4yKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLmRhcmsuZmlsbC5ib3JkZXIge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5kYXJrLmZpbGwuYm9yZGVyLmVycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5kYXJrLmZpbGwuYm9yZGVyLmVycm9yIC5wcmVmaXggaW9uLWlucHV0LFxuOmhvc3QgLmlucHV0LXdyYXBwZXIuZGFyay5maWxsLmJvcmRlci5lcnJvciA6Om5nLWRlZXAgaW9uLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuZGFyay5maWxsOm5vdCguYm9yZGVyKS5lcnJvciB7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAwLjIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuZGFyay5maWxsOm5vdCguYm9yZGVyKS5lcnJvciAucHJlZml4IGlvbi1pbnB1dCxcbjpob3N0IC5pbnB1dC13cmFwcGVyLmRhcmsuZmlsbDpub3QoLmJvcmRlcikuZXJyb3IgOjpuZy1kZWVwIGlvbi1pbnB1dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLmRhcmsub3V0bGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLmRhcmsub3V0bGluZSAucHJlZml4LFxuOmhvc3QgLmlucHV0LXdyYXBwZXIuZGFyay5vdXRsaW5lIC5zdWZmaXgge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuZGFyay5vdXRsaW5lIDo6bmctZGVlcCBpb24taW5wdXQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuZGFyay5vdXRsaW5lLmVycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5kYXJrLm91dGxpbmUuZXJyb3IgLnByZWZpeCBpb24taW5wdXQsXG46aG9zdCAuaW5wdXQtd3JhcHBlci5kYXJrLm91dGxpbmUuZXJyb3IgOjpuZy1kZWVwIGlvbi1pbnB1dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLmRhcmsucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5kYXJrLmZ1bGwge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIuZGFyayA6Om5nLWRlZXAgaW9uLWlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrLWNvbnRyYXN0KTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLmRhcmsgOjpuZy1kZWVwIGlvbi1pbnB1dCBpbnB1dCB7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5saWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDdweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodC10aW50KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLmxpZ2h0IC5wcmVmaXgsXG46aG9zdCAuaW5wdXQtd3JhcHBlci5saWdodCAuaW5wdXQgLnN1ZmZpeCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5saWdodCAucHJlZml4IHtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xuICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xuICBvdmVyZmxvdy13cmFwOiBub3JtYWw7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQtY29udHJhc3QpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIubGlnaHQgLmlucHV0IHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDA7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5saWdodCAuc3VmZml4IHtcbiAgcGFkZGluZy1sZWZ0OiA2cHg7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5saWdodC5lcnJvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIubGlnaHQuZXJyb3IgLnByZWZpeCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLmxpZ2h0LmZpbGwge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWxpZ2h0LXJnYiksIDAuMik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5saWdodC5maWxsLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5saWdodC5maWxsLmJvcmRlci5lcnJvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIubGlnaHQuZmlsbC5ib3JkZXIuZXJyb3IgLnByZWZpeCBpb24taW5wdXQsXG46aG9zdCAuaW5wdXQtd3JhcHBlci5saWdodC5maWxsLmJvcmRlci5lcnJvciA6Om5nLWRlZXAgaW9uLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIubGlnaHQuZmlsbDpub3QoLmJvcmRlcikuZXJyb3Ige1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgMC4yKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLmxpZ2h0LmZpbGw6bm90KC5ib3JkZXIpLmVycm9yIC5wcmVmaXggaW9uLWlucHV0LFxuOmhvc3QgLmlucHV0LXdyYXBwZXIubGlnaHQuZmlsbDpub3QoLmJvcmRlcikuZXJyb3IgOjpuZy1kZWVwIGlvbi1pbnB1dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLmxpZ2h0Lm91dGxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLmxpZ2h0Lm91dGxpbmUgLnByZWZpeCxcbjpob3N0IC5pbnB1dC13cmFwcGVyLmxpZ2h0Lm91dGxpbmUgLnN1ZmZpeCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIubGlnaHQub3V0bGluZSA6Om5nLWRlZXAgaW9uLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5saWdodC5vdXRsaW5lLmVycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5saWdodC5vdXRsaW5lLmVycm9yIC5wcmVmaXggaW9uLWlucHV0LFxuOmhvc3QgLmlucHV0LXdyYXBwZXIubGlnaHQub3V0bGluZS5lcnJvciA6Om5nLWRlZXAgaW9uLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIubGlnaHQucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5saWdodC5mdWxsIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLmxpZ2h0IDo6bmctZGVlcCBpb24taW5wdXQge1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWNvbnRyYXN0KTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLmxpZ2h0IDo6bmctZGVlcCBpb24taW5wdXQgaW5wdXQge1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2FybmluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDdweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13YXJuaW5nLXRpbnQpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2FybmluZyAucHJlZml4LFxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2FybmluZyAuaW5wdXQgLnN1ZmZpeCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci53YXJuaW5nIC5wcmVmaXgge1xuICBwYWRkaW5nLXJpZ2h0OiA2cHg7XG4gIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gIG92ZXJmbG93LXdyYXA6IG5vcm1hbDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13YXJuaW5nLWNvbnRyYXN0KTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndhcm5pbmcgLmlucHV0IHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDA7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci53YXJuaW5nIC5zdWZmaXgge1xuICBwYWRkaW5nLWxlZnQ6IDZweDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndhcm5pbmcuZXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndhcm5pbmcuZXJyb3IgLnByZWZpeCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndhcm5pbmcuZmlsbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3Itd2FybmluZy1yZ2IpLCAwLjIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2FybmluZy5maWxsLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndhcm5pbmcuZmlsbC5ib3JkZXIuZXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndhcm5pbmcuZmlsbC5ib3JkZXIuZXJyb3IgLnByZWZpeCBpb24taW5wdXQsXG46aG9zdCAuaW5wdXQtd3JhcHBlci53YXJuaW5nLmZpbGwuYm9yZGVyLmVycm9yIDo6bmctZGVlcCBpb24taW5wdXQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci53YXJuaW5nLmZpbGw6bm90KC5ib3JkZXIpLmVycm9yIHtcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItZGFuZ2VyLXJnYiksIDAuMik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci53YXJuaW5nLmZpbGw6bm90KC5ib3JkZXIpLmVycm9yIC5wcmVmaXggaW9uLWlucHV0LFxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2FybmluZy5maWxsOm5vdCguYm9yZGVyKS5lcnJvciA6Om5nLWRlZXAgaW9uLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2FybmluZy5vdXRsaW5lIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmcpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2FybmluZy5vdXRsaW5lIC5wcmVmaXgsXG46aG9zdCAuaW5wdXQtd3JhcHBlci53YXJuaW5nLm91dGxpbmUgLnN1ZmZpeCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci53YXJuaW5nLm91dGxpbmUgOjpuZy1kZWVwIGlvbi1pbnB1dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2FybmluZyk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci53YXJuaW5nLm91dGxpbmUuZXJyb3Ige1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndhcm5pbmcub3V0bGluZS5lcnJvciAucHJlZml4IGlvbi1pbnB1dCxcbjpob3N0IC5pbnB1dC13cmFwcGVyLndhcm5pbmcub3V0bGluZS5lcnJvciA6Om5nLWRlZXAgaW9uLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2FybmluZy5yb3VuZCB7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndhcm5pbmcuZnVsbCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci53YXJuaW5nIDo6bmctZGVlcCBpb24taW5wdXQge1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdhcm5pbmctY29udHJhc3QpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2FybmluZyA6Om5nLWRlZXAgaW9uLWlucHV0IGlucHV0IHtcbiAgcGFkZGluZzogMDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLm1lZGl1bSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDdweCAxMnB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMjAwbXMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5tZWRpdW0gLnByZWZpeCxcbjpob3N0IC5pbnB1dC13cmFwcGVyLm1lZGl1bSAuaW5wdXQgLnN1ZmZpeCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5tZWRpdW0gLnByZWZpeCB7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgdGV4dC1vdmVyZmxvdzogY2xpcDtcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5tZWRpdW0gLmlucHV0IHtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDA7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5tZWRpdW0gLnN1ZmZpeCB7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIubWVkaXVtLmVycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5tZWRpdW0uZXJyb3IgLnByZWZpeCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLm1lZGl1bS5maWxsIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC4yKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLm1lZGl1bS5maWxsLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIubWVkaXVtLmZpbGwuYm9yZGVyLmVycm9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5tZWRpdW0uZmlsbC5ib3JkZXIuZXJyb3IgLnByZWZpeCBpb24taW5wdXQsXG46aG9zdCAuaW5wdXQtd3JhcHBlci5tZWRpdW0uZmlsbC5ib3JkZXIuZXJyb3IgOjpuZy1kZWVwIGlvbi1pbnB1dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLm1lZGl1bS5maWxsOm5vdCguYm9yZGVyKS5lcnJvciB7XG4gIGJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLWRhbmdlci1yZ2IpLCAwLjIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIubWVkaXVtLmZpbGw6bm90KC5ib3JkZXIpLmVycm9yIC5wcmVmaXggaW9uLWlucHV0LFxuOmhvc3QgLmlucHV0LXdyYXBwZXIubWVkaXVtLmZpbGw6bm90KC5ib3JkZXIpLmVycm9yIDo6bmctZGVlcCBpb24taW5wdXQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5tZWRpdW0ub3V0bGluZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5tZWRpdW0ub3V0bGluZSAucHJlZml4LFxuOmhvc3QgLmlucHV0LXdyYXBwZXIubWVkaXVtLm91dGxpbmUgLnN1ZmZpeCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLm1lZGl1bS5vdXRsaW5lIDo6bmctZGVlcCBpb24taW5wdXQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5tZWRpdW0ub3V0bGluZS5lcnJvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIubWVkaXVtLm91dGxpbmUuZXJyb3IgLnByZWZpeCBpb24taW5wdXQsXG46aG9zdCAuaW5wdXQtd3JhcHBlci5tZWRpdW0ub3V0bGluZS5lcnJvciA6Om5nLWRlZXAgaW9uLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIubWVkaXVtLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIubWVkaXVtLmZ1bGwge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIubWVkaXVtIDo6bmctZGVlcCBpb24taW5wdXQge1xuICBtYXJnaW4tbGVmdDogNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1jb250cmFzdCk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci5tZWRpdW0gOjpuZy1kZWVwIGlvbi1pbnB1dCBpbnB1dCB7XG4gIHBhZGRpbmc6IDA7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci53aXRlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDRweDtcbiAgcGFkZGluZzogN3B4IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluLW91dDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdpdGUtdGludCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci53aXRlIC5wcmVmaXgsXG46aG9zdCAuaW5wdXQtd3JhcHBlci53aXRlIC5pbnB1dCAuc3VmZml4IHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndpdGUgLnByZWZpeCB7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDtcbiAgdGV4dC1vdmVyZmxvdzogY2xpcDtcbiAgb3ZlcmZsb3ctd3JhcDogbm9ybWFsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXdpdGUtY29udHJhc3QpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2l0ZSAuaW5wdXQge1xuICBmbGV4OiAxO1xuICB3aWR0aDogMDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndpdGUgLnN1ZmZpeCB7XG4gIHBhZGRpbmctbGVmdDogNnB4O1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2l0ZS5lcnJvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2l0ZS5lcnJvciAucHJlZml4IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2l0ZS5maWxsIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci13aXRlLXJnYiksIDAuMik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci53aXRlLmZpbGwuYm9yZGVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXdpdGUpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2l0ZS5maWxsLmJvcmRlci5lcnJvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2l0ZS5maWxsLmJvcmRlci5lcnJvciAucHJlZml4IGlvbi1pbnB1dCxcbjpob3N0IC5pbnB1dC13cmFwcGVyLndpdGUuZmlsbC5ib3JkZXIuZXJyb3IgOjpuZy1kZWVwIGlvbi1pbnB1dCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndpdGUuZmlsbDpub3QoLmJvcmRlcikuZXJyb3Ige1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1kYW5nZXItcmdiKSwgMC4yKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndpdGUuZmlsbDpub3QoLmJvcmRlcikuZXJyb3IgLnByZWZpeCBpb24taW5wdXQsXG46aG9zdCAuaW5wdXQtd3JhcHBlci53aXRlLmZpbGw6bm90KC5ib3JkZXIpLmVycm9yIDo6bmctZGVlcCBpb24taW5wdXQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci53aXRlLm91dGxpbmUge1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itd2l0ZSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2l0ZSk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci53aXRlLm91dGxpbmUgLnByZWZpeCxcbjpob3N0IC5pbnB1dC13cmFwcGVyLndpdGUub3V0bGluZSAuc3VmZml4IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aXRlKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndpdGUub3V0bGluZSA6Om5nLWRlZXAgaW9uLWlucHV0IHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci13aXRlKTtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndpdGUub3V0bGluZS5lcnJvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2l0ZS5vdXRsaW5lLmVycm9yIC5wcmVmaXggaW9uLWlucHV0LFxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2l0ZS5vdXRsaW5lLmVycm9yIDo6bmctZGVlcCBpb24taW5wdXQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci53aXRlLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuOmhvc3QgLmlucHV0LXdyYXBwZXIud2l0ZS5mdWxsIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbn1cbjpob3N0IC5pbnB1dC13cmFwcGVyLndpdGUgOjpuZy1kZWVwIGlvbi1pbnB1dCB7XG4gIG1hcmdpbi1sZWZ0OiA2cHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itd2l0ZS1jb250cmFzdCk7XG59XG46aG9zdCAuaW5wdXQtd3JhcHBlci53aXRlIDo6bmctZGVlcCBpb24taW5wdXQgaW5wdXQge1xuICBwYWRkaW5nOiAwO1xufVxuOmhvc3QgLmVycm9yLXNlY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMnB4IDAgMnB4IDEycHg7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuOmhvc3QgLmVycm9yLXNlY3Rpb24gOjpuZy1kZWVwIHNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbn1cbjpob3N0IDo6bmctZGVlcCBwIHtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/shared/form-field/components/form-field/form-field.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/shared/form-field/components/form-field/form-field.component.ts ***!
  \*****************************************************************************/
/*! exports provided: FormFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldComponent", function() { return FormFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives */ "./src/shared/form-field/directives/index.ts");



let FormFieldComponent = class FormFieldComponent {
    constructor() {
        this.color = 'primary';
        this.fill = false;
        this.outline = false;
        this.shape = true;
        this.border = false;
        this.prefix = false;
        this.suffix = false;
        this.label = '';
        this.size = '';
        this.expand = '';
    }
    /** add has-value class if input has value */
    get gethasValueState() {
        return this.input && this.input.element.value && this.input.element.value.trim() !== '' ? true : false;
    }
    /** add readonly class if input is in readonly state */
    get getReadOnlyState() {
        return this.input && this.readonly;
    }
    /** add is-dirty class if input is in dirty state */
    get getDirtyState() {
        return this.input ? this.input.control.dirty : false;
    }
    /** add is-pristine class if input is in pristine state */
    get getPristineState() {
        return this.input ? this.input.control.pristine : false;
    }
    /** add is-valid class if input is in valid state */
    get getValidState() {
        return this.input ? this.input.control.valid : false;
    }
    /** add is-invalid class if input is in invalid state */
    get getInvalidState() {
        const state = this.input ? this.input.control.invalid : false;
        state && this.input.control.touched
            ? this.input.element.classList.add('is-invalid')
            : this.input.element.classList.remove('is-invalid');
        return state;
    }
    /** add is-touched class if input has been touched */
    get getTouchedState() {
        return this.input ? this.input.control.touched : false;
    }
    /** add focus class if input is in focus is specified */
    get isInputFocus() {
        return this.input && !this.readonly ? this.input.focus : false;
    }
    /** add class if prefix is specified */
    get hasPrefix() {
        return this.prefix ? true : false;
    }
    /** add class if suffix is specified */
    get hasSuffix() {
        return this.suffix ? true : false;
    }
    /** if required add * to label */
    isRequired() {
        return this.input && this.input.element.required && this.label ? this.label + ' *' : this.label;
    }
    ngAfterContentInit() {
        if (!this.input) {
            console.error('form field needs an input element');
            return;
        }
        this.label = this.isRequired();
        this.readonly = this.input.element.readOnly;
        this.input.element.id = this.input.element.name;
        this.input.element.classList.add('form-control');
        this.input.element.classList.add(`form-control-${this.size}`);
    }
    focusInput() {
        this.input.element.focus();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FormFieldComponent.prototype, "color", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], FormFieldComponent.prototype, "fill", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], FormFieldComponent.prototype, "outline", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], FormFieldComponent.prototype, "shape", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], FormFieldComponent.prototype, "border", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], FormFieldComponent.prototype, "prefix", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], FormFieldComponent.prototype, "suffix", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FormFieldComponent.prototype, "label", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FormFieldComponent.prototype, "size", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], FormFieldComponent.prototype, "expand", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"])(_directives__WEBPACK_IMPORTED_MODULE_2__["InputRefDirective"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _directives__WEBPACK_IMPORTED_MODULE_2__["InputRefDirective"])
], FormFieldComponent.prototype, "input", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.has-value'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormFieldComponent.prototype, "gethasValueState", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.readonly'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormFieldComponent.prototype, "getReadOnlyState", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-dirty'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormFieldComponent.prototype, "getDirtyState", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-pristine'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormFieldComponent.prototype, "getPristineState", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-valid'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormFieldComponent.prototype, "getValidState", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-invalid'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormFieldComponent.prototype, "getInvalidState", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.is-touched'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormFieldComponent.prototype, "getTouchedState", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.has-focus'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormFieldComponent.prototype, "isInputFocus", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.has-prefix'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormFieldComponent.prototype, "hasPrefix", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.has-suffix'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FormFieldComponent.prototype, "hasSuffix", null);
FormFieldComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'form-field',
        template: __webpack_require__(/*! raw-loader!./form-field.component.html */ "./node_modules/raw-loader/index.js!./src/shared/form-field/components/form-field/form-field.component.html"),
        styles: [__webpack_require__(/*! ./form-field.component.scss */ "./src/shared/form-field/components/form-field/form-field.component.scss")]
    })
], FormFieldComponent);



/***/ }),

/***/ "./src/shared/form-field/directives/button-status/button-status.directive.ts":
/*!***********************************************************************************!*\
  !*** ./src/shared/form-field/directives/button-status/button-status.directive.ts ***!
  \***********************************************************************************/
/*! exports provided: ButtonStatusDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonStatusDirective", function() { return ButtonStatusDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const SVG_LOADING = `
    <svg class="spinner" viewBox="0 0 50 50">
      <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>`;
let ButtonStatusDirective = class ButtonStatusDirective {
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
        this.loadingText = true;
        this.divElement = null;
    }
    ngOnChanges(changes) {
        this.loadingState(changes.status.currentValue);
    }
    ngOnInit() {
        this.target = this._el.nativeElement;
    }
    /** toggle loader state of button */
    loadingState(status) {
        if (status) {
            this.innerText = this.target.innerText;
            this.target.innerText = '';
            this.createLoader(this.target);
        }
        else {
            this.removeLoader();
        }
        if (this.target) {
            this.target.disabled = this.target ? status : null;
        }
    }
    /** creates a loading for button */
    createLoader(wrapperElement) {
        this.divElement = this._renderer.createElement('div');
        this._renderer.addClass(this.divElement, 'btn-loader');
        this.divElement.innerHTML = (this.loadingText ? 'Loading' : '') + SVG_LOADING;
        this._renderer.insertBefore(wrapperElement, this.divElement, null);
    }
    /** removes loading from button */
    removeLoader() {
        if (this.divElement) {
            this._renderer.removeChild(this.target, this.divElement);
            this.target.innerText = this.innerText;
        }
    }
};
ButtonStatusDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('btnStatus'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ButtonStatusDirective.prototype, "status", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('loadingText'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ButtonStatusDirective.prototype, "loadingText", void 0);
ButtonStatusDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[btnStatus]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], ButtonStatusDirective);



/***/ }),

/***/ "./src/shared/form-field/directives/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/form-field/directives/index.ts ***!
  \***************************************************/
/*! exports provided: ButtonStatusDirective, InputMaskDirective, InputRefDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_status_button_status_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-status/button-status.directive */ "./src/shared/form-field/directives/button-status/button-status.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonStatusDirective", function() { return _button_status_button_status_directive__WEBPACK_IMPORTED_MODULE_0__["ButtonStatusDirective"]; });

/* harmony import */ var _input_mask_input_mask_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-mask/input-mask.directive */ "./src/shared/form-field/directives/input-mask/input-mask.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputMaskDirective", function() { return _input_mask_input_mask_directive__WEBPACK_IMPORTED_MODULE_1__["InputMaskDirective"]; });

/* harmony import */ var _input_ref_input_ref_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input-ref/input-ref.directive */ "./src/shared/form-field/directives/input-ref/input-ref.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputRefDirective", function() { return _input_ref_input_ref_directive__WEBPACK_IMPORTED_MODULE_2__["InputRefDirective"]; });




// export * from './';


/***/ }),

/***/ "./src/shared/form-field/directives/input-mask/helpers/digit-validators.ts":
/*!*********************************************************************************!*\
  !*** ./src/shared/form-field/directives/input-mask/helpers/digit-validators.ts ***!
  \*********************************************************************************/
/*! exports provided: neverValidator, maskDigitValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "neverValidator", function() { return neverValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maskDigitValidators", function() { return maskDigitValidators; });
const numericValidator = (char) => /[0-9]{1}/.test(char);
const lowerCaseValidator = (char) => /[a-z]{1}/.test(char);
const upperCaseValidator = (char) => /[A-Z]{1}/.test(char);
const textValidator = (char) => /^[a-zA-Z '-]{1}/.test(char);
const anyValidator = (char) => true;
const numberRangeValidator = (maxValue, char) => numericValidator(char) && parseInt(char, null) <= maxValue;
const neverValidator = (char) => false;
const maskDigitValidators = {
    'a': lowerCaseValidator,
    'A': upperCaseValidator,
    'T': textValidator,
    '*': anyValidator
};
for (let i = 0; i <= 9; i++) {
    maskDigitValidators[i] = numberRangeValidator.bind(undefined, i);
}


/***/ }),

/***/ "./src/shared/form-field/directives/input-mask/helpers/utils.ts":
/*!**********************************************************************!*\
  !*** ./src/shared/form-field/directives/input-mask/helpers/utils.ts ***!
  \**********************************************************************/
/*! exports provided: TAB, LEFT_ARROW, RIGHT_ARROW, BACKSPACE, DELETE, SPECIAL_CHARACTERS, overwriteCharAtPosition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TAB", function() { return TAB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LEFT_ARROW", function() { return LEFT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RIGHT_ARROW", function() { return RIGHT_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKSPACE", function() { return BACKSPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPECIAL_CHARACTERS", function() { return SPECIAL_CHARACTERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overwriteCharAtPosition", function() { return overwriteCharAtPosition; });
// tslint:disable-next-line: one-variable-per-declaration
const TAB = 9, LEFT_ARROW = 37, RIGHT_ARROW = 39, BACKSPACE = 8, DELETE = 46;
const SPECIAL_CHARACTERS = [' ', '/', '(', ')', '+', '/', '-'];
function overwriteCharAtPosition(input, position, key) {
    const currentValue = input.value;
    input.value = currentValue.slice(0, position) + key + currentValue.slice(position + 1);
}


/***/ }),

/***/ "./src/shared/form-field/directives/input-mask/input-mask.directive.ts":
/*!*****************************************************************************!*\
  !*** ./src/shared/form-field/directives/input-mask/input-mask.directive.ts ***!
  \*****************************************************************************/
/*! exports provided: InputMaskDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputMaskDirective", function() { return InputMaskDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_digit_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/digit-validators */ "./src/shared/form-field/directives/input-mask/helpers/digit-validators.ts");
/* harmony import */ var _helpers_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/utils */ "./src/shared/form-field/directives/input-mask/helpers/utils.ts");

var InputMaskDirective_1;





let InputMaskDirective = InputMaskDirective_1 = class InputMaskDirective {
    constructor(el) {
        this.el = el;
        this.mask = '';
        this.fullFieldSelected = false;
        this._placeholder = '';
        this.onChange = (_data) => { };
        this.onTouch = () => { };
        this.input = this.el.nativeElement;
    }
    onSelect() {
        this.fullFieldSelected = this.input.selectionStart === 0 && this.input.selectionEnd === this.input.value.length;
    }
    onClick() {
        setTimeout(() => {
            if (this.input.value === this._placeholder) {
                this.input.setSelectionRange(0, 0);
            }
        }, 0);
    }
    /** overwrite particular character of the input on keypress */
    onKeyDown($event, keyCode) {
        // get control for cases for copy and paste keyboard shortcut
        if ($event.metaKey || $event.ctrlKey) {
            return;
        }
        if (keyCode !== _helpers_utils__WEBPACK_IMPORTED_MODULE_5__["TAB"]) {
            $event.preventDefault();
        }
        const key = String.fromCharCode(keyCode);
        const cursorPos = this.input.selectionStart;
        // if true, clear field and select first position
        if (this.fullFieldSelected) {
            this.input.value = this._placeholder;
            const firstPlaceholderPos = lodash__WEBPACK_IMPORTED_MODULE_3__["findIndex"](this.input.value, (char) => char === '_');
            this.input.setSelectionRange(firstPlaceholderPos, firstPlaceholderPos);
        }
        switch (keyCode) {
            case _helpers_utils__WEBPACK_IMPORTED_MODULE_5__["LEFT_ARROW"]:
                this.handleLeftArrow(cursorPos);
                return;
            case _helpers_utils__WEBPACK_IMPORTED_MODULE_5__["RIGHT_ARROW"]:
                this.handleRightArrow(cursorPos);
                return;
            case _helpers_utils__WEBPACK_IMPORTED_MODULE_5__["BACKSPACE"]:
                this.handleBackspace(cursorPos);
                return;
            case _helpers_utils__WEBPACK_IMPORTED_MODULE_5__["DELETE"]:
                this.handleDelete(cursorPos);
                return;
        }
        const maskDigit = this.mask.charAt(cursorPos);
        const digitValidator = _helpers_digit_validators__WEBPACK_IMPORTED_MODULE_4__["maskDigitValidators"][maskDigit] || _helpers_digit_validators__WEBPACK_IMPORTED_MODULE_4__["neverValidator"];
        if (digitValidator(key)) {
            Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_5__["overwriteCharAtPosition"])(this.input, cursorPos, key);
            this.handleRightArrow(cursorPos);
        }
        this.onChange(this.input.value);
        this.onTouch();
    }
    handleDelete(cursorPos) {
        Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_5__["overwriteCharAtPosition"])(this.input, cursorPos, '_');
        this.input.setSelectionRange(cursorPos, cursorPos);
    }
    handleBackspace(cursorPos) {
        const previousPos = this.calculatePreviousCursorPos(cursorPos);
        if (previousPos >= 0) {
            Object(_helpers_utils__WEBPACK_IMPORTED_MODULE_5__["overwriteCharAtPosition"])(this.input, previousPos, '_');
            this.input.setSelectionRange(previousPos, previousPos);
        }
    }
    handleLeftArrow(cursorPos) {
        const previousPos = this.calculatePreviousCursorPos(cursorPos);
        if (previousPos >= 0) {
            this.input.setSelectionRange(previousPos, previousPos);
        }
    }
    handleRightArrow(cursorPos) {
        const valueAfterCursor = this.input.value.slice(cursorPos + 1);
        const nextPos = lodash__WEBPACK_IMPORTED_MODULE_3__["findIndex"](valueAfterCursor, (char) => !lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](_helpers_utils__WEBPACK_IMPORTED_MODULE_5__["SPECIAL_CHARACTERS"], char));
        if (nextPos >= 0) {
            const newCursorPos = cursorPos + nextPos + 1;
            this.input.setSelectionRange(newCursorPos, newCursorPos);
        }
    }
    ngOnInit() {
        this._placeholder = this.buildPlaceholder();
        if (!this.input.value) {
            this.input.value = this._placeholder;
        }
    }
    buildPlaceholder() {
        const chars = this.mask.split('');
        return chars.reduce((result, char) => {
            return (result += lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](_helpers_utils__WEBPACK_IMPORTED_MODULE_5__["SPECIAL_CHARACTERS"], char) ? char : '_');
        }, '');
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    writeValue(obj) { }
    calculatePreviousCursorPos(cursorPos) {
        const valueBeforeCursor = this.input.value.slice(0, cursorPos);
        return lodash__WEBPACK_IMPORTED_MODULE_3__["findLastIndex"](valueBeforeCursor, (char) => !lodash__WEBPACK_IMPORTED_MODULE_3__["includes"](_helpers_utils__WEBPACK_IMPORTED_MODULE_5__["SPECIAL_CHARACTERS"], char));
    }
};
InputMaskDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('input-mask'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], InputMaskDirective.prototype, "mask", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('select', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], InputMaskDirective.prototype, "onSelect", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], InputMaskDirective.prototype, "onClick", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event', '$event.keyCode']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent, Number]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], InputMaskDirective.prototype, "onKeyDown", null);
InputMaskDirective = InputMaskDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => InputMaskDirective_1),
                multi: true
            }
        ],
        selector: '[input-mask]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], InputMaskDirective);



/***/ }),

/***/ "./src/shared/form-field/directives/input-ref/input-ref.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/shared/form-field/directives/input-ref/input-ref.directive.ts ***!
  \***************************************************************************/
/*! exports provided: InputRefDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputRefDirective", function() { return InputRefDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let InputRefDirective = class InputRefDirective {
    constructor(_el, _control) {
        this._el = _el;
        this._control = _control;
        this.focus = false;
        this.element = this._el.nativeElement;
        this.control = this._control;
    }
    onFocus() {
        this.focus = true;
    }
    onBlur() {
        this.focus = false;
    }
};
InputRefDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('focus'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], InputRefDirective.prototype, "onFocus", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], InputRefDirective.prototype, "onBlur", null);
InputRefDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[inputRef]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControl"]])
], InputRefDirective);



/***/ }),

/***/ "./src/shared/form-field/form-field.module.ts":
/*!****************************************************!*\
  !*** ./src/shared/form-field/form-field.module.ts ***!
  \****************************************************/
/*! exports provided: FormFieldModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormFieldModule", function() { return FormFieldModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/form-field/form-field.component */ "./src/shared/form-field/components/form-field/form-field.component.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives */ "./src/shared/form-field/directives/index.ts");
/* harmony import */ var _validators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validators */ "./src/shared/form-field/validators/index.ts");







let FormFieldModule = class FormFieldModule {
};
FormFieldModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_4__["FormFieldComponent"],
            _directives__WEBPACK_IMPORTED_MODULE_5__["InputRefDirective"],
            _directives__WEBPACK_IMPORTED_MODULE_5__["ButtonStatusDirective"],
            _directives__WEBPACK_IMPORTED_MODULE_5__["InputMaskDirective"],
            _validators__WEBPACK_IMPORTED_MODULE_6__["SecurePasswordDirective"],
            _validators__WEBPACK_IMPORTED_MODULE_6__["DateValidatorDirective"],
            _validators__WEBPACK_IMPORTED_MODULE_6__["PhoneInputValidatorDirective"],
            _validators__WEBPACK_IMPORTED_MODULE_6__["RestrictCharValidatorDirective"],
            _validators__WEBPACK_IMPORTED_MODULE_6__["ComparePasswordDirective"],
        ],
        exports: [
            _components_form_field_form_field_component__WEBPACK_IMPORTED_MODULE_4__["FormFieldComponent"],
            _directives__WEBPACK_IMPORTED_MODULE_5__["InputRefDirective"],
            _directives__WEBPACK_IMPORTED_MODULE_5__["ButtonStatusDirective"],
            _directives__WEBPACK_IMPORTED_MODULE_5__["InputMaskDirective"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _validators__WEBPACK_IMPORTED_MODULE_6__["SecurePasswordDirective"],
            _validators__WEBPACK_IMPORTED_MODULE_6__["DateValidatorDirective"],
            _validators__WEBPACK_IMPORTED_MODULE_6__["PhoneInputValidatorDirective"],
            _validators__WEBPACK_IMPORTED_MODULE_6__["RestrictCharValidatorDirective"],
            _validators__WEBPACK_IMPORTED_MODULE_6__["ComparePasswordDirective"],
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
    })
], FormFieldModule);



/***/ }),

/***/ "./src/shared/form-field/validators/compare-password/compare-password.directive.ts":
/*!*****************************************************************************************!*\
  !*** ./src/shared/form-field/validators/compare-password/compare-password.directive.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComparePasswordDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComparePasswordDirective", function() { return ComparePasswordDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



const COMPARE_TO_VALIDATOR = {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => ComparePasswordDirective)
};
let ComparePasswordDirective = class ComparePasswordDirective {
    validate(control) {
        return control.value === this.comparedControl.value ? null : { compareTo: true };
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('compare-password'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
], ComparePasswordDirective.prototype, "comparedControl", void 0);
ComparePasswordDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        providers: [COMPARE_TO_VALIDATOR],
        selector: '[compare-password]'
    })
], ComparePasswordDirective);



/***/ }),

/***/ "./src/shared/form-field/validators/date/date-validator.directive.ts":
/*!***************************************************************************!*\
  !*** ./src/shared/form-field/validators/date/date-validator.directive.ts ***!
  \***************************************************************************/
/*! exports provided: DateValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateValidatorDirective", function() { return DateValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



const DATE_VALIDATOR = {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DateValidatorDirective)
};
function ddmmyyyy(date) {
    const mm = date.getMonth() + 1; // getMonth() is zero-based
    const dd = date.getDate();
    return [
        (dd > 9 ? '' : '0') + dd,
        (mm > 9 ? '' : '0') + mm,
        date.getFullYear()
    ].join('/');
}
const datePattern = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
let DateValidatorDirective = class DateValidatorDirective {
    constructor(el) {
        this.el = el;
        this.setting = { max: null, noFutureDates: true, minDate: null, maxDate: null };
        this.target = el.nativeElement;
    }
    /**
     * validates date of birth is older than 18
     * @method validate
     * @param {AbstractControl} control
     * @public
     * @return {[key: string]: any }
     */
    validate(control) {
        return this.validateDate(control.value);
    }
    /**
     * validates date matches DD/MM/YYY except on ios devices
     * validates date of birth is older than 18
     * @method validateDate
     * @param {string} value
     * @private
     * @return { [key: string]: any }
     */
    validateDate(value) {
        let dateValue;
        if (!value) {
            return { invalidDate: true };
        }
        if (typeof value === 'string') {
            const dateAr = value.split('/');
            if (dateAr.length !== 3) {
                return { invalidDate: true };
            }
            // convert to us format MM/DD/YYYY
            dateValue = new Date(`${dateAr[1]}/${dateAr[0]}/${dateAr[2]}`);
            if (ddmmyyyy(dateValue) !== value) {
                return { invalidDate: true };
            }
        }
        if (this.setting.max !== null && dateValue && this._calculateAge(dateValue) < this.setting.max) {
            return { young: true };
        }
        if (this.setting.noFutureDates === true && dateValue > new Date()) {
            return { future: true };
        }
        if (value < this.setting.minDate) {
            return { minDate: true };
        }
        if (value > this.setting.maxDate) {
            return { maxDate: true };
        }
        return;
    }
    /**
     * calculates age from date
     * @method _calculateAge
     * @param {Date} birthday
     * @private
     * @return {number}
     */
    _calculateAge(birthday) {
        const ageDifMs = Date.now() - birthday.getTime();
        const ageDate = new Date(ageDifMs);
        return ageDate.getUTCFullYear() - 1970;
    }
};
DateValidatorDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('date'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DateValidatorDirective.prototype, "setting", void 0);
DateValidatorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        providers: [DATE_VALIDATOR],
        selector: '[date][ngModel]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], DateValidatorDirective);



/***/ }),

/***/ "./src/shared/form-field/validators/index.ts":
/*!***************************************************!*\
  !*** ./src/shared/form-field/validators/index.ts ***!
  \***************************************************/
/*! exports provided: ComparePasswordDirective, DateValidatorDirective, PhoneInputValidatorDirective, RestrictCharValidatorDirective, SecurePasswordDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compare_password_compare_password_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compare-password/compare-password.directive */ "./src/shared/form-field/validators/compare-password/compare-password.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComparePasswordDirective", function() { return _compare_password_compare_password_directive__WEBPACK_IMPORTED_MODULE_0__["ComparePasswordDirective"]; });

/* harmony import */ var _date_date_validator_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./date/date-validator.directive */ "./src/shared/form-field/validators/date/date-validator.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DateValidatorDirective", function() { return _date_date_validator_directive__WEBPACK_IMPORTED_MODULE_1__["DateValidatorDirective"]; });

/* harmony import */ var _phone_input_phone_input_validator_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./phone-input/phone-input-validator.directive */ "./src/shared/form-field/validators/phone-input/phone-input-validator.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhoneInputValidatorDirective", function() { return _phone_input_phone_input_validator_directive__WEBPACK_IMPORTED_MODULE_2__["PhoneInputValidatorDirective"]; });

/* harmony import */ var _restrict_char_restrict_char_validator_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restrict-char/restrict-char-validator.directive */ "./src/shared/form-field/validators/restrict-char/restrict-char-validator.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RestrictCharValidatorDirective", function() { return _restrict_char_restrict_char_validator_directive__WEBPACK_IMPORTED_MODULE_3__["RestrictCharValidatorDirective"]; });

/* harmony import */ var _secure_password_secure_password_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./secure-password/secure-password.directive */ "./src/shared/form-field/validators/secure-password/secure-password.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecurePasswordDirective", function() { return _secure_password_secure_password_directive__WEBPACK_IMPORTED_MODULE_4__["SecurePasswordDirective"]; });






// export * from './';


/***/ }),

/***/ "./src/shared/form-field/validators/phone-input/phone-input-validator.directive.ts":
/*!*****************************************************************************************!*\
  !*** ./src/shared/form-field/validators/phone-input/phone-input-validator.directive.ts ***!
  \*****************************************************************************************/
/*! exports provided: PhoneInputValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneInputValidatorDirective", function() { return PhoneInputValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var libphonenumber_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! libphonenumber-js */ "./node_modules/libphonenumber-js/index.es6.js");
/* harmony import */ var _directives_input_mask_helpers_digit_validators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/input-mask/helpers/digit-validators */ "./src/shared/form-field/directives/input-mask/helpers/digit-validators.ts");





const PHONE_VALIDATOR = {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => PhoneInputValidatorDirective),
};
let PhoneInputValidatorDirective = 
/**
 * phone number is validated by an external library google-libphonenumber.
 * the library validates the number input and the country code to make sure the phone number is valid.
 * country code is either set by siteconfiguration or by user detail country code
 * @todo chnage how default country code is set for when user is logged out
 * on blur, the phone number value is formatted with prepended country code if not already added
 * also restricts key input to numbers only
 *
 * @example <input name="mobile" [(ngModel)]="mobile" [phone]="GB">
 * @class PhoneInputValidatorDirective
 * @implements Validator
 * @author Spencer Anum
 * @updated 12/06/2018
 * @version 1.0.0
 */
class PhoneInputValidatorDirective {
    constructor(el) {
        this.el = el;
        this.country = 'GB';
        this.target = el.nativeElement;
    }
    /** on input blur format phone number */
    formatPhone() {
        if (!this.target.value) {
            return;
        }
        const phone = Object(libphonenumber_js__WEBPACK_IMPORTED_MODULE_3__["parsePhoneNumber"])(this.target.value, this.country.toUpperCase());
        if (Object(libphonenumber_js__WEBPACK_IMPORTED_MODULE_3__["isValidNumber"])(phone.number)) {
            this.target.value = phone.number;
        }
    }
    /** keypress validate input is numeric */
    onKeypress($event, keyCode) {
        const key = String.fromCharCode(keyCode);
        const digitValidator = _directives_input_mask_helpers_digit_validators__WEBPACK_IMPORTED_MODULE_4__["maskDigitValidators"][9] || _directives_input_mask_helpers_digit_validators__WEBPACK_IMPORTED_MODULE_4__["neverValidator"];
        if (!digitValidator(key)) {
            $event.preventDefault();
        }
    }
    /** validates the input value by first checking and replacing the preceeding value
     * then validating the number with isValidNumber method in libphonenumber-js library
     */
    validate(control) {
        if (control.value && control.value.length > 3) {
            this.phoneNumber = Object(libphonenumber_js__WEBPACK_IMPORTED_MODULE_3__["parsePhoneNumber"])(control.value, this.country.toUpperCase());
            if (this.phoneNumber) {
                if (!Object(libphonenumber_js__WEBPACK_IMPORTED_MODULE_3__["isValidNumber"])(this.phoneNumber.number)) {
                    return { phone: true };
                }
                else {
                    return;
                }
            }
        }
        return;
    }
};
PhoneInputValidatorDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('phone'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PhoneInputValidatorDirective.prototype, "country", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], PhoneInputValidatorDirective.prototype, "formatPhone", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event', '$event.keyCode']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent, Number]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], PhoneInputValidatorDirective.prototype, "onKeypress", null);
PhoneInputValidatorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        providers: [PHONE_VALIDATOR],
        selector: '[phone][ngModel]',
    })
    /**
     * phone number is validated by an external library google-libphonenumber.
     * the library validates the number input and the country code to make sure the phone number is valid.
     * country code is either set by siteconfiguration or by user detail country code
     * @todo chnage how default country code is set for when user is logged out
     * on blur, the phone number value is formatted with prepended country code if not already added
     * also restricts key input to numbers only
     *
     * @example <input name="mobile" [(ngModel)]="mobile" [phone]="GB">
     * @class PhoneInputValidatorDirective
     * @implements Validator
     * @author Spencer Anum
     * @updated 12/06/2018
     * @version 1.0.0
     */
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], PhoneInputValidatorDirective);



/***/ }),

/***/ "./src/shared/form-field/validators/restrict-char/restrict-char-validator.directive.ts":
/*!*********************************************************************************************!*\
  !*** ./src/shared/form-field/validators/restrict-char/restrict-char-validator.directive.ts ***!
  \*********************************************************************************************/
/*! exports provided: RestrictCharValidatorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestrictCharValidatorDirective", function() { return RestrictCharValidatorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _directives_input_mask_helpers_digit_validators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/input-mask/helpers/digit-validators */ "./src/shared/form-field/directives/input-mask/helpers/digit-validators.ts");




const numRegex = /\d/;
const textRegex = /^[a-zA-Z ]*$/;
const CHAR_VALIDATOR = {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => RestrictCharValidatorDirective)
};
let RestrictCharValidatorDirective = class RestrictCharValidatorDirective {
    validate(control) {
        let returnVal;
        if (this.restrict === 'text') {
            returnVal = numRegex.test(control.value) ? { textOnly: true } : null;
        }
        else {
            returnVal = textRegex.test(control.value) ? { numberOnly: true } : null;
        }
        return returnVal;
    }
    /**
     * on keypress validate input is numeric, is a card number and format card number
     * @method onKeypress
     * @return {void}
     */
    onKeypress(event, keyCode) {
        const key = String.fromCharCode(keyCode);
        const digitValidator = _directives_input_mask_helpers_digit_validators__WEBPACK_IMPORTED_MODULE_3__["maskDigitValidators"]['T'] || _directives_input_mask_helpers_digit_validators__WEBPACK_IMPORTED_MODULE_3__["neverValidator"];
        if (this.restrict === 'number') {
            if (digitValidator(key)) {
                event.preventDefault();
            }
        }
        else if (this.restrict === 'text') {
            if (!digitValidator(key)) {
                event.preventDefault();
            }
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], RestrictCharValidatorDirective.prototype, "restrict", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keypress', ['$event', '$event.keyCode']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, Number]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], RestrictCharValidatorDirective.prototype, "onKeypress", null);
RestrictCharValidatorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        providers: [CHAR_VALIDATOR],
        selector: '[restrict][ngModel]'
    })
], RestrictCharValidatorDirective);



/***/ }),

/***/ "./src/shared/form-field/validators/secure-password/secure-password.directive.ts":
/*!***************************************************************************************!*\
  !*** ./src/shared/form-field/validators/secure-password/secure-password.directive.ts ***!
  \***************************************************************************************/
/*! exports provided: SecurePasswordDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurePasswordDirective", function() { return SecurePasswordDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



const PASSWORD_VALIDATOR = {
    multi: true,
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => SecurePasswordDirective)
};
const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
const mediumRegex = new RegExp('^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})');
let SecurePasswordDirective = class SecurePasswordDirective {
    constructor() {
        this.output = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    validate(control) {
        return this.checkSecure(control.value);
    }
    /**
     * validates password length, strength and invalid characters
     * @method validatePassword
     * @return { [key: string]: any }
     */
    checkSecure(value) {
        if (value && value.length < 4) {
            this.output.emit('danger');
            return { length: true };
        }
        else {
            if (value) {
                if (strongRegex.test(value)) {
                    this.output.emit('success');
                }
                else if (mediumRegex.test(value)) {
                    this.output.emit('warning');
                }
                else {
                    this.output.emit('danger');
                    return { secure: true };
                }
            }
            if (/\s/.test(value)) {
                return { invalid: true };
            }
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('secure'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], SecurePasswordDirective.prototype, "output", void 0);
SecurePasswordDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        providers: [PASSWORD_VALIDATOR],
        selector: '[secure]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SecurePasswordDirective);



/***/ }),

/***/ "./src/shared/helpers/config.ts":
/*!**************************************!*\
  !*** ./src/shared/helpers/config.ts ***!
  \**************************************/
/*! exports provided: createTranslateLoader, IonicGestureConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicGestureConfig", function() { return IonicGestureConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");




/** translate http loader functions
 * https://github.com/ngx-translate/http-loader
 */
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_3__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
/**
 * This class overrides the default Angular gesture config and adds hammer gesture config
 * make sure hammer is imported in main.ts
 * https://medium.com/madewithply/ionic-4-long-press-gestures-96cf1e44098b
 */
let IonicGestureConfig = class IonicGestureConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["HammerGestureConfig"] {
    buildHammer(element) {
        const mc = new window.Hammer(element);
        for (const eventName in this.overrides) {
            if (eventName) {
                mc.get(eventName).set(this.overrides[eventName]);
            }
        }
        return mc;
    }
};
IonicGestureConfig = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], IonicGestureConfig);



/***/ }),

/***/ "./src/shared/helpers/extender.ts":
/*!****************************************!*\
  !*** ./src/shared/helpers/extender.ts ***!
  \****************************************/
/*! exports provided: Extender */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Extender", function() { return Extender; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _services_subscriptions_subscriptions_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/subscriptions/subscriptions.service */ "./src/shared/services/subscriptions/subscriptions.service.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes */ "./src/shared/helpers/routes.ts");








/**
 * @class Extender
 */
let Extender = class Extender {
    constructor(_injector) {
        this._injector = _injector;
        // implements OnDestroy {
        this.status = '';
        this.loading = false;
    }
    /** get access to subscriptions in SubscriptionService, this makes it accessible to all components that extend this class */
    get subscriptions() {
        return this._injector.get(_services_subscriptions_subscriptions_service__WEBPACK_IMPORTED_MODULE_6__["SubscriptionsService"]).subscriptions;
    }
    /** uncomment and add onDestroy implementation to unsubscribe from subscriptions in all components */
    /** unsubscribe to all subscriptions saved in SubscriptionsService */
    // public forceSubscriptionDestroy(): void {
    //   for (const sub of this.subscriptions) {
    //     sub.unsubscribe();
    //   }
    // }
    /** unsubscribe to all subscriptions saved in SubscriptionsService on component destroy */
    // public ngOnDestroy(): void {
    //   for (const sub of this.subscriptions) {
    //     sub.unsubscribe();
    //   }
    // }
    /** get access to routes and make them available app wide in any class that extends this class */
    get routes() {
        return _routes__WEBPACK_IMPORTED_MODULE_7__["Routes"]._routes;
    }
    /** inject angular Router class, saves us having to add this in several component constructors */
    get router() {
        return this._injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]);
    }
    /** navigate back */
    back() {
        return this._injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]).back();
    }
    /** inject angular ActivatedRoute class, saves us having to add this in several component constructors */
    get activatedRoute() {
        return this._injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]);
    }
    /** inject TranslateService class, saves us having to add this in several component constructors */
    get translate() {
        return this._injector.get(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]);
    }
    /** handles routing to pages allows to include route params */
    goto(page, params = null) {
        if (!params) {
            return this.router.navigate([page]);
        }
        else {
            return this.router.navigate([page], params);
        }
    }
    /** inject ionic ToastController class, saves us having to add this in several component constructors */
    get toastCtrl() {
        return this._injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]);
    }
    /**
     * methods with default toast settings and handling message input into toast for errors
     * error messages tend to have the format error.message
     * @param msg
     */
    toast(msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let val;
            val = typeof msg === 'string' ? msg : msg.message;
            const toast = yield this.toastCtrl.create({
                message: val,
                duration: 2000
            });
            toast.present();
        });
    }
    /** inject ionic ActionSheetController class, saves us having to add this in several component constructors */
    get actionSheetCtrl() {
        return this._injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ActionSheetController"]);
    }
    /** inject ionic AlertController class, saves us having to add this in several component constructors */
    get alertCtrl() {
        return this._injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]);
    }
    /** inject ionic ModalController class, saves us having to add this in several component constructors */
    get modalCtrl() {
        return this._injector.get(_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]);
    }
    /** open modal for various components, add component properties and class */
    openModal(component, componentProps = {}, cssClass = '') {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component,
                componentProps: { data: componentProps },
                cssClass
            });
            return modal;
        });
    }
    /**
     * closes modal, can close with data and/or close and force a back navigation if you specify goBack to be true
     * @param data
     * @param goBack
     */
    closeModal(data = null, route = false) {
        this.modalCtrl.dismiss(data);
        if (route) {
            this.goto(route);
        }
    }
    /** convert timestamp from firebase to date */
    toDate(item) {
        return new Date(item);
    }
    /** get random integer between two values */
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};
Extender.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"] }] }
];
Extender = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"]])
], Extender);



/***/ }),

/***/ "./src/shared/helpers/native.ts":
/*!**************************************!*\
  !*** ./src/shared/helpers/native.ts ***!
  \**************************************/
/*! exports provided: NativeImports */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NativeImports", function() { return NativeImports; });
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/facebook/ngx */ "./node_modules/@ionic-native/facebook/ngx/index.js");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/ngx/index.js");
/* harmony import */ var _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/google-plus/ngx */ "./node_modules/@ionic-native/google-plus/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "./node_modules/@ionic-native/splash-screen/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/**
 * native add ons all in one place
 * export to appModule Providers
 */










const NativeImports = [
    _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_9__["StatusBar"],
    _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_8__["SplashScreen"],
    _ionic_native_facebook_ngx__WEBPACK_IMPORTED_MODULE_2__["Facebook"],
    _ionic_native_google_plus_ngx__WEBPACK_IMPORTED_MODULE_5__["GooglePlus"],
    _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__["FirebaseX"],
    _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_1__["Camera"],
    _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_0__["CallNumber"],
    _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["ImagePicker"],
    _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_4__["Geolocation"],
    _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__["SocialSharing"]
];


/***/ }),

/***/ "./src/shared/helpers/routes.ts":
/*!**************************************!*\
  !*** ./src/shared/helpers/routes.ts ***!
  \**************************************/
/*! exports provided: Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/** configure all routes strings within the app, makes it easy to change in one place */
class Routes {
}
Routes._routes = {
    home: '/',
    auth: '/auth',
    login: '/auth/login',
    register: '/auth/register',
    forgot: '/auth/forgot',
    verifyEmail: '/auth/verify-email',
    deactivated: '/auth/deactivated',
    feed: '/feed',
    profile: '/profile',
    search: '/search',
    dashboard: '/dashboard',
    people: '/people',
    messages: '/messages',
    setting: 'setting',
    schedule: '/dashboard/schedule',
    map: '/dashboard/map',
    chart: '/dashboard/chart',
    welcome: '/welcome'
};


/***/ }),

/***/ "./src/shared/modals/calendar-event-list/calendar-event-list.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/shared/modals/calendar-event-list/calendar-event-list.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .date-title {\n  margin: 0 0 10px;\n  font-size: 16px;\n  padding: 0 15px 10px;\n  color: var(--ion-color-primary);\n  border-bottom: 1px solid rgba(var(--ion-color-medium-rgb), 0.4);\n}\n:host .content-wrapper .content-scroll {\n  padding: 0 15px;\n}\n:host .content-wrapper .content-scroll .event {\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 10px 0;\n  padding: 0 15px;\n}\n:host .content-wrapper .content-scroll .event ::ng-deep .prefix ion-icon {\n  font-size: 25px;\n}\n:host .content-wrapper .content-scroll .event ::ng-deep .detail {\n  padding-left: 10px;\n}\n:host .content-wrapper .content-scroll .event ::ng-deep .detail .time {\n  font-size: 12px;\n  color: var(--ion-color-medium);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL21vZGFscy9jYWxlbmRhci1ldmVudC1saXN0L2NhbGVuZGFyLWV2ZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvc2hhcmVkL21vZGFscy9jYWxlbmRhci1ldmVudC1saXN0L2NhbGVuZGFyLWV2ZW50LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsK0RBQUE7QUNETjtBREdJO0VBQ0UsZUFBQTtBQ0ROO0FERU07RUFDRSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNBUjtBREdZO0VBQ0UsZUFBQTtBQ0RkO0FESVU7RUFDRSxrQkFBQTtBQ0ZaO0FER1k7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUNEZCIsImZpbGUiOiJzcmMvc2hhcmVkL21vZGFscy9jYWxlbmRhci1ldmVudC1saXN0L2NhbGVuZGFyLWV2ZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAuZGF0ZS10aXRsZSB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgcGFkZGluZzogMCAxNXB4IDEwcHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC40KTtcclxuICAgIH1cclxuICAgIC5jb250ZW50LXNjcm9sbCB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgLmV2ZW50IHtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICA6Om5nLWRlZXAge1xyXG4gICAgICAgICAgLnByZWZpeCB7XHJcbiAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5kZXRhaWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgIC50aW1lIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmRhdGUtdGl0bGUge1xuICBtYXJnaW46IDAgMCAxMHB4O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDAgMTVweCAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuNCk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCB7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ldmVudCB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZXZlbnQgOjpuZy1kZWVwIC5wcmVmaXggaW9uLWljb24ge1xuICBmb250LXNpemU6IDI1cHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZXZlbnQgOjpuZy1kZWVwIC5kZXRhaWwge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZXZlbnQgOjpuZy1kZWVwIC5kZXRhaWwgLnRpbWUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/shared/modals/calendar-event-list/calendar-event-list.component.ts":
/*!********************************************************************************!*\
  !*** ./src/shared/modals/calendar-event-list/calendar-event-list.component.ts ***!
  \********************************************************************************/
/*! exports provided: CalendarEventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventListComponent", function() { return CalendarEventListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_pages_dashboard_services_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/dashboard/services/schedule/schedule.service */ "./src/pages/dashboard/services/schedule/schedule.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _calendar_event_manage_calendar_event_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calendar-event-manage/calendar-event-manage.component */ "./src/shared/modals/calendar-event-manage/calendar-event-manage.component.ts");






/**
 * get events for a selected day from calendar component
 */
let CalendarEventListComponent = class CalendarEventListComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"] {
    constructor(injector, navParam, scheduleService) {
        super(injector);
        this.injector = injector;
        this.navParam = navParam;
        this.scheduleService = scheduleService;
        this.events = [];
    }
    /** get events from nav params */
    ngOnInit() {
        this.day = this.navParam.get('data');
        this.events = this.day.data.events;
    }
    /** open calendar event manage to edit event and on dismiss, add or replace event in events list */
    open(day, data = null, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(_calendar_event_manage_calendar_event_manage_component__WEBPACK_IMPORTED_MODULE_5__["CalendarEventManageComponent"], { day, data });
            modal.present();
            modal.onDidDismiss().then((item) => {
                if (item.data && !item.data.id) {
                    this.events.push(item.data);
                }
                else if (item.data && !item.data.id) {
                    this.events.splice(index, 1, item.data);
                }
            });
        });
    }
    /** update event as completed */
    updateAsCompleted(event, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.scheduleService.updateEvent(event);
            this.events.splice(index, 1, event);
        });
    }
    /** delete event */
    delete(item, index) {
        this.scheduleService.removeEvent(item.id);
        this.events.splice(index, 1);
    }
};
CalendarEventListComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: src_pages_dashboard_services_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleService"] }
];
CalendarEventListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar-event-list',
        template: __webpack_require__(/*! raw-loader!./calendar-event-list.component.html */ "./node_modules/raw-loader/index.js!./src/shared/modals/calendar-event-list/calendar-event-list.component.html"),
        styles: [__webpack_require__(/*! ./calendar-event-list.component.scss */ "./src/shared/modals/calendar-event-list/calendar-event-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], src_pages_dashboard_services_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_3__["ScheduleService"]])
], CalendarEventListComponent);



/***/ }),

/***/ "./src/shared/modals/calendar-event-manage/calendar-event-manage.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/shared/modals/calendar-event-manage/calendar-event-manage.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll-area {\n  display: block;\n  height: 90%;\n  overflow: auto;\n}\n\nion-label,\n.label {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  font-size: 13px;\n  -webkit-box-align: center;\n          align-items: center;\n  color: var(--ion-color-medium);\n}\n\nion-label.small,\n.label.small {\n  font-size: 0.8rem;\n}\n\nion-datetime {\n  --padding-start: 0;\n}\n\ninput,\ntextarea {\n  border: none;\n  background: transparent;\n  width: 100%;\n  resize: none;\n  outline: none;\n}\n\n.form-item {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 20px;\n}\n\n.form-item:nth-of-type(even) {\n  background: var(--ion-color-light-shade);\n}\n\n.form-item:nth-of-type(odd) {\n  background: var(--ion-color-light);\n}\n\n.title-section {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.title-section > .left {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.title-section > .left .label {\n  margin-bottom: 5px;\n}\n\n.title-section > .right {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 25px;\n  height: 25px;\n  border-radius: 100%;\n  border: 1px solid var(--ion-color-medium);\n}\n\n.date-section,\n.time-section {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n\n.date-section > .left, .date-section > .right,\n.time-section > .left,\n.time-section > .right {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n  position: relative;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.date-section > .left .datetime, .date-section > .right .datetime,\n.time-section > .left .datetime,\n.time-section > .right .datetime {\n  padding: 8px 0px 0px 0px !important;\n}\n\n.date-section > .left,\n.time-section > .left {\n  border-right: 1px solid var(--ion-color-light);\n  padding-right: 20px;\n}\n\n.date-section > .right,\n.time-section > .right {\n  padding-left: 20px;\n}\n\n.all-day-section ion-label,\n.remind-section ion-label,\n.location-section ion-label,\n.invites-section ion-label,\n.notes-section ion-label {\n  margin: 0;\n}\n\n.all-day-section > .left,\n.remind-section > .left,\n.location-section > .left,\n.invites-section > .left,\n.notes-section > .left {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 1;\n          flex: 1;\n  position: relative;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.all-day-section > .right,\n.remind-section > .right,\n.location-section > .right,\n.invites-section > .right,\n.notes-section > .right {\n  display: -webkit-box;\n  display: flex;\n  width: 10%;\n  position: relative;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.remind-detail,\n.invites-detail,\n.location-detail {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  padding: 0;\n}\n\n.remind-detail .content,\n.invites-detail .content,\n.location-detail .content {\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n.remind-detail .left,\n.invites-detail .left,\n.location-detail .left {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-box-pack: center;\n          justify-content: center;\n  position: relative;\n}\n\n.remind-detail .left ion-select,\n.invites-detail .left ion-select,\n.location-detail .left ion-select {\n  position: relative;\n  max-width: 80%;\n}\n\n.remind-detail .left .images,\n.invites-detail .left .images,\n.location-detail .left .images {\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  -webkit-box-align: center;\n          align-items: center;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow-x: auto;\n  padding-left: 15px;\n}\n\n.remind-detail .left .images .image,\n.invites-detail .left .images .image,\n.location-detail .left .images .image {\n  width: 30px;\n  height: 30px;\n  margin: 0 5px;\n  border-radius: 100%;\n  background-position: center;\n  background-size: cover;\n}\n\n.remind-detail .right,\n.invites-detail .right,\n.location-detail .right {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 25%;\n}\n\n.remind-detail {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.location-detail {\n  padding: 20px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.location-detail ion-list {\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL21vZGFscy9jYWxlbmRhci1ldmVudC1tYW5hZ2UvY2FsZW5kYXItZXZlbnQtbWFuYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL3NoYXJlZC9tb2RhbHMvY2FsZW5kYXItZXZlbnQtbWFuYWdlL2NhbGVuZGFyLWV2ZW50LW1hbmFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBOztFQUVFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7QUNDRjs7QURDRTs7RUFDRSxpQkFBQTtBQ0VKOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTs7RUFFRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0U7RUFDRSx3Q0FBQTtBQ0NKOztBREVFO0VBQ0Usa0NBQUE7QUNBSjs7QURJQTtFQUNFLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtBQ0RGOztBREdFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0FDREo7O0FER0k7RUFDRSxrQkFBQTtBQ0ROOztBREtFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7QUNISjs7QURPQTs7RUFFRSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7QUNKRjs7QURNRTs7O0VBRUUsb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsbUJBQUE7VUFBQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDSEo7O0FES0k7OztFQUNFLG1DQUFBO0FDRE47O0FES0U7O0VBQ0UsOENBQUE7RUFDQSxtQkFBQTtBQ0ZKOztBREtFOztFQUNFLGtCQUFBO0FDRko7O0FEV0U7Ozs7O0VBQ0UsU0FBQTtBQ0pKOztBRE9FOzs7OztFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBQ0RKOztBRElFOzs7OztFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNFSjs7QURFQTs7O0VBR0UsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsVUFBQTtBQ0NGOztBRENFOzs7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO1VBQUEsT0FBQTtBQ0dKOztBREFFOzs7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURGSTs7O0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0FDTU47O0FESEk7OztFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDT047O0FETE07OztFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ1NSOztBREpFOzs7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxxQkFBQTtVQUFBLHlCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLFVBQUE7QUNRSjs7QURKQTtFQUNFLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtBQ09GOztBREpBO0VBQ0UsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNPRjs7QURMRTtFQUNFLGNBQUE7QUNPSiIsImZpbGUiOiJzcmMvc2hhcmVkL21vZGFscy9jYWxlbmRhci1ldmVudC1tYW5hZ2UvY2FsZW5kYXItZXZlbnQtbWFuYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjcm9sbC1hcmVhIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBoZWlnaHQ6IDkwJTtcclxuICBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuaW9uLWxhYmVsLFxyXG4ubGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcblxyXG4gICYuc21hbGwge1xyXG4gICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgfVxyXG59XHJcblxyXG5pb24tZGF0ZXRpbWUge1xyXG4gIC0tcGFkZGluZy1zdGFydDogMDtcclxufVxyXG5cclxuaW5wdXQsXHJcbnRleHRhcmVhIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcmVzaXplOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgcGFkZGluZzogMTBweCAyMHB4O1xyXG5cclxuICAmOm50aC1vZi10eXBlKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7XHJcbiAgfVxyXG5cclxuICAmOm50aC1vZi10eXBlKG9kZCkge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICB9XHJcbn1cclxuXHJcbi50aXRsZS1zZWN0aW9uIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAmID4gLmxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4OiAxO1xyXG5cclxuICAgIC5sYWJlbCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAucmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gIH1cclxufVxyXG5cclxuLmRhdGUtc2VjdGlvbixcclxuLnRpbWUtc2VjdGlvbiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgJiA+IC5sZWZ0LFxyXG4gICYgPiAucmlnaHQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAuZGF0ZXRpbWUge1xyXG4gICAgICBwYWRkaW5nOiA4cHggMHB4IDBweCAwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgPiAubGVmdCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICB9XHJcblxyXG4gICYgPiAucmlnaHQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmFsbC1kYXktc2VjdGlvbixcclxuLnJlbWluZC1zZWN0aW9uLFxyXG4ubG9jYXRpb24tc2VjdGlvbixcclxuLmludml0ZXMtc2VjdGlvbixcclxuLm5vdGVzLXNlY3Rpb24ge1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICAmID4gLmxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgJiA+IC5yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVtaW5kLWRldGFpbCxcclxuLmludml0ZXMtZGV0YWlsLFxyXG4ubG9jYXRpb24tZGV0YWlsIHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxuXHJcbiAgLmxlZnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4OiAxO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgaW9uLXNlbGVjdCB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWF4LXdpZHRoOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlcyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcblxyXG4gICAgICAuaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yaWdodCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxufVxyXG5cclxuLnJlbWluZC1kZXRhaWwge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1kZXRhaWwge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgaW9uLWxpc3Qge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG59XHJcbiIsIi5zY3JvbGwtYXJlYSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDkwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbmlvbi1sYWJlbCxcbi5sYWJlbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xufVxuaW9uLWxhYmVsLnNtYWxsLFxuLmxhYmVsLnNtYWxsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG5cbmlvbi1kYXRldGltZSB7XG4gIC0tcGFkZGluZy1zdGFydDogMDtcbn1cblxuaW5wdXQsXG50ZXh0YXJlYSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICByZXNpemU6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5mb3JtLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG59XG4uZm9ybS1pdGVtOm50aC1vZi10eXBlKGV2ZW4pIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LXNoYWRlKTtcbn1cbi5mb3JtLWl0ZW06bnRoLW9mLXR5cGUob2RkKSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5cbi50aXRsZS1zZWN0aW9uIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbi50aXRsZS1zZWN0aW9uID4gLmxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4OiAxO1xufVxuLnRpdGxlLXNlY3Rpb24gPiAubGVmdCAubGFiZWwge1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4udGl0bGUtc2VjdGlvbiA+IC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cblxuLmRhdGUtc2VjdGlvbixcbi50aW1lLXNlY3Rpb24ge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuLmRhdGUtc2VjdGlvbiA+IC5sZWZ0LCAuZGF0ZS1zZWN0aW9uID4gLnJpZ2h0LFxuLnRpbWUtc2VjdGlvbiA+IC5sZWZ0LFxuLnRpbWUtc2VjdGlvbiA+IC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kYXRlLXNlY3Rpb24gPiAubGVmdCAuZGF0ZXRpbWUsIC5kYXRlLXNlY3Rpb24gPiAucmlnaHQgLmRhdGV0aW1lLFxuLnRpbWUtc2VjdGlvbiA+IC5sZWZ0IC5kYXRldGltZSxcbi50aW1lLXNlY3Rpb24gPiAucmlnaHQgLmRhdGV0aW1lIHtcbiAgcGFkZGluZzogOHB4IDBweCAwcHggMHB4ICFpbXBvcnRhbnQ7XG59XG4uZGF0ZS1zZWN0aW9uID4gLmxlZnQsXG4udGltZS1zZWN0aW9uID4gLmxlZnQge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xufVxuLmRhdGUtc2VjdGlvbiA+IC5yaWdodCxcbi50aW1lLXNlY3Rpb24gPiAucmlnaHQge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG59XG5cbi5hbGwtZGF5LXNlY3Rpb24gaW9uLWxhYmVsLFxuLnJlbWluZC1zZWN0aW9uIGlvbi1sYWJlbCxcbi5sb2NhdGlvbi1zZWN0aW9uIGlvbi1sYWJlbCxcbi5pbnZpdGVzLXNlY3Rpb24gaW9uLWxhYmVsLFxuLm5vdGVzLXNlY3Rpb24gaW9uLWxhYmVsIHtcbiAgbWFyZ2luOiAwO1xufVxuLmFsbC1kYXktc2VjdGlvbiA+IC5sZWZ0LFxuLnJlbWluZC1zZWN0aW9uID4gLmxlZnQsXG4ubG9jYXRpb24tc2VjdGlvbiA+IC5sZWZ0LFxuLmludml0ZXMtc2VjdGlvbiA+IC5sZWZ0LFxuLm5vdGVzLXNlY3Rpb24gPiAubGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hbGwtZGF5LXNlY3Rpb24gPiAucmlnaHQsXG4ucmVtaW5kLXNlY3Rpb24gPiAucmlnaHQsXG4ubG9jYXRpb24tc2VjdGlvbiA+IC5yaWdodCxcbi5pbnZpdGVzLXNlY3Rpb24gPiAucmlnaHQsXG4ubm90ZXMtc2VjdGlvbiA+IC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJlbWluZC1kZXRhaWwsXG4uaW52aXRlcy1kZXRhaWwsXG4ubG9jYXRpb24tZGV0YWlsIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMDtcbn1cbi5yZW1pbmQtZGV0YWlsIC5jb250ZW50LFxuLmludml0ZXMtZGV0YWlsIC5jb250ZW50LFxuLmxvY2F0aW9uLWRldGFpbCAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbn1cbi5yZW1pbmQtZGV0YWlsIC5sZWZ0LFxuLmludml0ZXMtZGV0YWlsIC5sZWZ0LFxuLmxvY2F0aW9uLWRldGFpbCAubGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucmVtaW5kLWRldGFpbCAubGVmdCBpb24tc2VsZWN0LFxuLmludml0ZXMtZGV0YWlsIC5sZWZ0IGlvbi1zZWxlY3QsXG4ubG9jYXRpb24tZGV0YWlsIC5sZWZ0IGlvbi1zZWxlY3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogODAlO1xufVxuLnJlbWluZC1kZXRhaWwgLmxlZnQgLmltYWdlcyxcbi5pbnZpdGVzLWRldGFpbCAubGVmdCAuaW1hZ2VzLFxuLmxvY2F0aW9uLWRldGFpbCAubGVmdCAuaW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5yZW1pbmQtZGV0YWlsIC5sZWZ0IC5pbWFnZXMgLmltYWdlLFxuLmludml0ZXMtZGV0YWlsIC5sZWZ0IC5pbWFnZXMgLmltYWdlLFxuLmxvY2F0aW9uLWRldGFpbCAubGVmdCAuaW1hZ2VzIC5pbWFnZSB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5yZW1pbmQtZGV0YWlsIC5yaWdodCxcbi5pbnZpdGVzLWRldGFpbCAucmlnaHQsXG4ubG9jYXRpb24tZGV0YWlsIC5yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5yZW1pbmQtZGV0YWlsIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmxvY2F0aW9uLWRldGFpbCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmxvY2F0aW9uLWRldGFpbCBpb24tbGlzdCB7XG4gIG1hcmdpbjogMTBweCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/shared/modals/calendar-event-manage/calendar-event-manage.component.ts":
/*!************************************************************************************!*\
  !*** ./src/shared/modals/calendar-event-manage/calendar-event-manage.component.ts ***!
  \************************************************************************************/
/*! exports provided: CalendarEventManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarEventManageComponent", function() { return CalendarEventManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_dashboard_services_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/pages/dashboard/services/schedule/schedule.service */ "./src/pages/dashboard/services/schedule/schedule.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");







/** add or edit calendar event */
let CalendarEventManageComponent = class CalendarEventManageComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_6__["Extender"] {
    constructor(injector, navParams, authService, scheduleService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.authService = authService;
        this.scheduleService = scheduleService;
        this.event = null;
        this.remindTimes = [10, 30, 60, 120, 160, 1440];
        this.locations = [];
        this.showRemind = false;
        this.showNotes = false;
    }
    /** get user and get calendar event data. format date to work with the date picker  */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.user = yield this.authService.getUser();
            const calData = this.navParams.get('data');
            if (calData.data) {
                this.event = calData.data;
                this.event.start = new Date(+this.event.start).toISOString();
                this.event.end = new Date(+this.event.end).toISOString();
            }
            else {
                this.event = {
                    recurrence: [{}],
                    start: new Date(calData.day.date).toISOString(),
                    end: new Date(calData.day.date).toISOString(),
                    title: '',
                    uid: this.user.uid
                };
            }
        });
    }
    /** humanize date using moment */
    getHumanize(time) {
        return moment__WEBPACK_IMPORTED_MODULE_3__["duration"](time, 'minutes').humanize(true);
    }
    /** add a reminder to calendar event object */
    addReminder() {
        this.event.recurrence.push({});
    }
    /** remove a reminder from calendar event object */
    removeReminder(i) {
        this.event.recurrence.splice(i, 1);
    }
    /** format event dates and reminders and save or update event */
    save() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.event.recurrence =
                this.event.recurrence && this.event.recurrence.length > 0
                    ? this.event.recurrence.map((reminder) => moment__WEBPACK_IMPORTED_MODULE_3__(this.event.start)
                        .subtract(reminder, 'minutes')
                        .toISOString())
                    : [];
            if (this.event.id) {
                this.scheduleService.updateEvent(this.event).then();
            }
            else {
                this.scheduleService.addEvent(this.event).then();
            }
            this.closeModal(this.event);
        });
    }
};
CalendarEventManageComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: src_pages_dashboard_services_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_5__["ScheduleService"] }
];
CalendarEventManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-calendar-event-manage',
        template: __webpack_require__(/*! raw-loader!./calendar-event-manage.component.html */ "./node_modules/raw-loader/index.js!./src/shared/modals/calendar-event-manage/calendar-event-manage.component.html"),
        styles: [__webpack_require__(/*! ./calendar-event-manage.component.scss */ "./src/shared/modals/calendar-event-manage/calendar-event-manage.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        src_pages_dashboard_services_schedule_schedule_service__WEBPACK_IMPORTED_MODULE_5__["ScheduleService"]])
], CalendarEventManageComponent);



/***/ }),

/***/ "./src/shared/modals/change-password/change-password.component.scss":
/*!**************************************************************************!*\
  !*** ./src/shared/modals/change-password/change-password.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 44px) !important;\n  width: 100%;\n  padding: 0 15px;\n}\n:host .content-wrapper .wrapper .content-scroll .info {\n  font-size: 12px;\n  margin: 0;\n  color: var(--ion-color-medium-shade);\n}\n:host .content-wrapper .wrapper .content-scroll .center {\n  text-align: center;\n}\n:host .content-wrapper .wrapper .content-scroll .text-line-through-background span {\n  background: var(--ion-color-wite);\n}\n:host .content-wrapper .wrapper .content-scroll .form-label {\n  font-size: 12px;\n  padding-left: 10px;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL21vZGFscy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL3NoYXJlZC9tb2RhbHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7QUNETjtBREdNO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FER1E7RUFDRSxlQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0FDRFY7QURJUTtFQUNFLGtCQUFBO0FDRlY7QURNVTtFQUNFLGlDQUFBO0FDSlo7QURRUTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FDTlYiLCJmaWxlIjoic3JjL3NoYXJlZC9tb2RhbHMvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuY29udGVudC13cmFwcGVyIHtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgLmNvbnRlbnQtc2Nyb2xsIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0cHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2VudGVyIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0LWxpbmUtdGhyb3VnaC1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2l0ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0cHgpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuaW5mbyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnRleHQtbGluZS10aHJvdWdoLWJhY2tncm91bmQgc3BhbiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aXRlKTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5mb3JtLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */"

/***/ }),

/***/ "./src/shared/modals/change-password/change-password.component.ts":
/*!************************************************************************!*\
  !*** ./src/shared/modals/change-password/change-password.component.ts ***!
  \************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");





/** present screen to allow user to change password */
let ChangePasswordComponent = class ChangePasswordComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.model = {
            oldPassword: null,
            password: null,
            rpassword: null
        };
        this.failPromise = (err) => {
            this.loading = false;
            this.toast(err);
        };
    }
    /** get current user */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
        });
    }
    /**
     * update user password and close modal
     */
    changePassword() {
        this.loading = true;
        this.authService
            .updatePassword(this.model.oldPassword, this.model.password)
            .then(() => {
            this.loading = false;
            this.closeModal();
            this.toast('Password Changed');
        })
            .catch((err) => this.failPromise(err));
    }
};
ChangePasswordComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] }
];
ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-password',
        template: __webpack_require__(/*! raw-loader!./change-password.component.html */ "./node_modules/raw-loader/index.js!./src/shared/modals/change-password/change-password.component.html"),
        styles: [__webpack_require__(/*! ./change-password.component.scss */ "./src/shared/modals/change-password/change-password.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]])
], ChangePasswordComponent);



/***/ }),

/***/ "./src/shared/modals/edit-profile/edit-profile.component.scss":
/*!********************************************************************!*\
  !*** ./src/shared/modals/edit-profile/edit-profile.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  width: 100%;\n  padding: 0 15px;\n}\n:host .content-wrapper .wrapper .content-scroll .profile-image {\n  height: 80px;\n  width: 80px;\n  background-blend-mode: color-burn;\n  background-color: rgba(var(--ion-color-medium-rgb), 0.3);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 50%;\n  margin: auto;\n}\n:host .content-wrapper .wrapper .content-scroll .profile-detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background: var(--ion-color-light);\n  padding: 20px 0;\n}\n:host .content-wrapper .wrapper .content-scroll .profile-detail .form-label {\n  font-size: 12px;\n  padding-left: 10px;\n  color: var(--ion-color-primary);\n}\n:host .content-wrapper .wrapper .content-scroll .profile-detail form-field .flag-img {\n  width: 20px;\n  height: 20px;\n}\n:host .content-wrapper .wrapper .content-scroll .profile-detail form-field.textarea ::ng-deep .input-wrapper {\n  height: auto;\n}\n:host .content-wrapper .wrapper .content-scroll .profile-detail form-field.textarea ::ng-deep .input-wrapper .input textarea {\n  background: none;\n  resize: none;\n  border: none;\n  width: 100%;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL21vZGFscy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL3NoYXJlZC9tb2RhbHMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7QUNETjtBREdNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNEUjtBREVRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLHdEQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBVjtBREdRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0FDRFY7QURHVTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLCtCQUFBO0FDRFo7QURLWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDSGQ7QURPZ0I7RUFDRSxZQUFBO0FDTGxCO0FEUW9CO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDTnRCIiwiZmlsZSI6InNyYy9zaGFyZWQvbW9kYWxzL2VkaXQtcHJvZmlsZS9lZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgIC5jb250ZW50LXNjcm9sbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIC5wcm9maWxlLWltYWdlIHtcclxuICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1ibGVuZC1tb2RlOiBjb2xvci1idXJuO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMyk7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2ZpbGUtZGV0YWlsIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuXHJcbiAgICAgICAgICAuZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGZvcm0tZmllbGQge1xyXG4gICAgICAgICAgICAuZmxhZy1pbWcge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLnRleHRhcmVhIHtcclxuICAgICAgICAgICAgICA6Om5nLWRlZXAge1xyXG4gICAgICAgICAgICAgICAgLmlucHV0LXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1pbWFnZSB7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIGJhY2tncm91bmQtYmxlbmQtbW9kZTogY29sb3ItYnVybjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1pb24tY29sb3ItbWVkaXVtLXJnYiksIDAuMyk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogYXV0bztcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWRldGFpbCAuZm9ybS1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnByb2ZpbGUtZGV0YWlsIGZvcm0tZmllbGQgLmZsYWctaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWRldGFpbCBmb3JtLWZpZWxkLnRleHRhcmVhIDo6bmctZGVlcCAuaW5wdXQtd3JhcHBlciB7XG4gIGhlaWdodDogYXV0bztcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWRldGFpbCBmb3JtLWZpZWxkLnRleHRhcmVhIDo6bmctZGVlcCAuaW5wdXQtd3JhcHBlciAuaW5wdXQgdGV4dGFyZWEge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICByZXNpemU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */"

/***/ }),

/***/ "./src/shared/modals/edit-profile/edit-profile.component.ts":
/*!******************************************************************!*\
  !*** ./src/shared/modals/edit-profile/edit-profile.component.ts ***!
  \******************************************************************/
/*! exports provided: EditProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfileComponent", function() { return EditProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);







let EditProfileComponent = class EditProfileComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, authService, commonService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.commonService = commonService;
        this.firestoreService = firestoreService;
        this.countrySelectOptions = {
            header: this.translate.instant('edit-profile-component.select-country'),
            data: this.commonService.getCountries()
        };
        this.failPromise = (err) => {
            this.loading = false;
            this.toast(err);
        };
    }
    /** get current user */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
        });
    }
    /**
     * open actionsheet with options to select image from camera or library
     * once image is selected, save image to firebase cloud storage
     */
    changePhoto() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: this.translate.instant('edit-profile-component.change-profile-image'),
                buttons: [
                    {
                        text: this.translate.instant('other.camera'),
                        handler: () => {
                            this.getPicture(1);
                        }
                    },
                    {
                        text: this.translate.instant('other.library'),
                        handler: () => {
                            this.getPicture(0);
                        }
                    },
                    {
                        text: this.translate.instant('other.close'),
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheet.present();
        });
    }
    /** detect file from browser file input changes and upload image */
    detectFiles(event) {
        let image;
        this.commonService.getImagesFromFiles(event).then((images) => {
            if (Object(util__WEBPACK_IMPORTED_MODULE_6__["isArray"])(images)) {
                image = images[0];
            }
            this.uploadImage(image);
        });
    }
    /**
     * update currentUser and close modal, show toast if any error occurs
     */
    save(close = true) {
        this.loading = true;
        this.firestoreService
            .upsert(`users/${this.currentUser.uid}`, this.currentUser)
            .then(() => {
            this.loading = false;
            if (close) {
                this.closeModal(this.currentUser);
            }
        })
            .catch((err) => this.failPromise(err));
    }
    /**
     * get image using native camera plugin to retrieve from either camera or library of device
     * param type is a number that specifies whether to get from camera or from library
     * one image retrieved, upload to firebase storage. if error, display a toast with error message
     * @param type
     */
    getPicture(type) {
        this.loading = true;
        if (window.cordova) {
            // if on device use native plugins
            this.commonService
                .getPictures(type)
                .then((imageData) => {
                this.uploadImage(imageData);
            })
                .catch((err) => this.failPromise(err));
        }
        else {
            // if on device use browser file upload
            this.fileInputButton.nativeElement.click();
        }
    }
    /**
     * append base 64 string to image data, upload image data to firebase storage.
     * the upload function returns a download data which is then saved to currentUser.photoUrl property
     */
    uploadImage(imageData) {
        this.currentUser.photoURL = imageData;
        this.firestoreService
            .uploadImage(this.currentUser.photoURL, this.currentUser.uid, 'profile-images')
            .then((photoURL) => {
            this.currentUser.photoURL = photoURL;
            this.save(false);
            this.loading = false;
        })
            .catch((err) => this.failPromise(err));
    }
};
EditProfileComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInputButton', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], EditProfileComponent.prototype, "fileInputButton", void 0);
EditProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: __webpack_require__(/*! raw-loader!./edit-profile.component.html */ "./node_modules/raw-loader/index.js!./src/shared/modals/edit-profile/edit-profile.component.html"),
        styles: [__webpack_require__(/*! ./edit-profile.component.scss */ "./src/shared/modals/edit-profile/edit-profile.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
        src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
        src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]])
], EditProfileComponent);



/***/ }),

/***/ "./src/shared/modals/feedback/feedback.component.scss":
/*!************************************************************!*\
  !*** ./src/shared/modals/feedback/feedback.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 44px) !important;\n  width: 100%;\n  padding: 0 15px;\n}\n:host .content-wrapper .wrapper .content-scroll .info {\n  font-size: 12px;\n  color: var(--ion-color-medium-shade);\n}\n:host .content-wrapper .wrapper .content-scroll form-field.textarea ::ng-deep .input-wrapper {\n  height: auto;\n}\n:host .content-wrapper .wrapper .content-scroll form-field.textarea ::ng-deep .input-wrapper .input textarea {\n  background: none;\n  resize: none;\n  border: none;\n  width: 100%;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL21vZGFscy9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuc2NzcyIsInNyYy9zaGFyZWQvbW9kYWxzL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0ROO0FER007RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRFI7QURHUTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtBQ0RWO0FETWM7RUFDRSxZQUFBO0FDSmhCO0FET2tCO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDTHBCIiwiZmlsZSI6InNyYy9zaGFyZWQvbW9kYWxzL2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAuY29udGVudC1zY3JvbGwge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCkgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG4gICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9ybS1maWVsZCB7XHJcbiAgICAgICAgICAmLnRleHRhcmVhIHtcclxuICAgICAgICAgICAgOjpuZy1kZWVwIHtcclxuICAgICAgICAgICAgICAuaW5wdXQtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gICAgICAgICAgICAgICAgLmlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5pbmZvIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCBmb3JtLWZpZWxkLnRleHRhcmVhIDo6bmctZGVlcCAuaW5wdXQtd3JhcHBlciB7XG4gIGhlaWdodDogYXV0bztcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIGZvcm0tZmllbGQudGV4dGFyZWEgOjpuZy1kZWVwIC5pbnB1dC13cmFwcGVyIC5pbnB1dCB0ZXh0YXJlYSB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/shared/modals/feedback/feedback.component.ts":
/*!**********************************************************!*\
  !*** ./src/shared/modals/feedback/feedback.component.ts ***!
  \**********************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");





let FeedbackComponent = class FeedbackComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.model = { uid: null, comment: '' };
    }
    /** save current user */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            this.model.uid = uid;
        });
    }
    /** save feedback to feedback collection */
    save() {
        this.firestoreService.add(`feedback`, this.model).then(() => {
            this.toast(this.translate.instant('feedback-component.success-message'));
            this.closeModal();
        });
    }
};
FeedbackComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] }
];
FeedbackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback',
        template: __webpack_require__(/*! raw-loader!./feedback.component.html */ "./node_modules/raw-loader/index.js!./src/shared/modals/feedback/feedback.component.html"),
        styles: [__webpack_require__(/*! ./feedback.component.scss */ "./src/shared/modals/feedback/feedback.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]])
], FeedbackComponent);



/***/ }),

/***/ "./src/shared/modals/gallery-picker/gallery-picker.component.scss":
/*!************************************************************************!*\
  !*** ./src/shared/modals/gallery-picker/gallery-picker.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: var(--ion-color-dark);\n}\n:host ion-content .content-wrapper {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host ion-content .content-wrapper .main-image {\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 100%;\n  width: calc(100% - 40px);\n  margin: 20px;\n  background-size: contain !important;\n}\n:host ion-content .content-wrapper .image-options {\n  display: -webkit-box;\n  display: flex;\n  height: 75px;\n  width: 100%;\n  background: var(--ion-color-dark-tint);\n  overflow-x: auto;\n  overflow-y: hidden;\n}\n:host ion-content .content-wrapper .image-options .images {\n  display: -webkit-box;\n  display: flex;\n}\n:host ion-content .content-wrapper .image-options .images .image {\n  width: 75px;\n  height: 99%;\n  margin: 1px;\n}\n:host ion-content .content-wrapper .image-options .images .image.active {\n  border: 3px solid var(--ion-color-secondary);\n}\n:host ion-footer textarea {\n  padding: 5px 10px;\n  overflow: hidden;\n  height: 40px !important;\n  width: calc(100% - 20px);\n  border: 1px solid var(--ion-color-medium);\n  outline: none;\n  resize: none;\n  margin: 5px 5px 0 10px;\n  border-radius: 40px;\n  color: var(--ion-color-dark);\n}\n:host ion-footer ion-button {\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n  --border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL21vZGFscy9nYWxsZXJ5LXBpY2tlci9nYWxsZXJ5LXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNyYy9zaGFyZWQvbW9kYWxzL2dhbGxlcnktcGlja2VyL2dhbGxlcnktcGlja2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsbUNBQUE7QUNBSjtBREVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FDQU47QURDTTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtBQ0NSO0FERU07RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0FSO0FERVE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNBVjtBREVVO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FDQVo7QURDWTtFQUNFLDRDQUFBO0FDQ2Q7QURRSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtBQ05OO0FEUUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNOTiIsImZpbGUiOiJzcmMvc2hhcmVkL21vZGFscy9nYWxsZXJ5LXBpY2tlci9nYWxsZXJ5LXBpY2tlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuXHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgLm1haW4taW1hZ2Uge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcclxuICAgICAgICBtYXJnaW46IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5pbWFnZS1vcHRpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogNzVweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcclxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgLmltYWdlcyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgIC5pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDk5JTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcHg7XHJcbiAgICAgICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICAgICAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW9uLWZvb3RlciB7XHJcbiAgICB0ZXh0YXJlYSB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgcmVzaXplOiBub25lO1xyXG4gICAgICBtYXJnaW46IDVweCA1cHggMCAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgfVxyXG4gICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLm1haW4taW1hZ2Uge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgbWFyZ2luOiAyMHB4O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmltYWdlLW9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDc1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItZGFyay10aW50KTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuaW1hZ2Utb3B0aW9ucyAuaW1hZ2VzIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmltYWdlLW9wdGlvbnMgLmltYWdlcyAuaW1hZ2Uge1xuICB3aWR0aDogNzVweDtcbiAgaGVpZ2h0OiA5OSU7XG4gIG1hcmdpbjogMXB4O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuaW1hZ2Utb3B0aW9ucyAuaW1hZ2VzIC5pbWFnZS5hY3RpdmUge1xuICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cbjpob3N0IGlvbi1mb290ZXIgdGV4dGFyZWEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHJlc2l6ZTogbm9uZTtcbiAgbWFyZ2luOiA1cHggNXB4IDAgMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbn1cbjpob3N0IGlvbi1mb290ZXIgaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgLS1ib3JkZXItcmFkaXVzOiA1MCU7XG59Il19 */"

/***/ }),

/***/ "./src/shared/modals/gallery-picker/gallery-picker.component.ts":
/*!**********************************************************************!*\
  !*** ./src/shared/modals/gallery-picker/gallery-picker.component.ts ***!
  \**********************************************************************/
/*! exports provided: GalleryPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPickerComponent", function() { return GalleryPickerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);






let GalleryPickerComponent = class GalleryPickerComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"] {
    constructor(injector, navParams, socialShare) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.socialShare = socialShare;
        this.images = [];
        this.textMsg = null;
        this.selectedImageIndex = 0;
    }
    /** get images from nav param and set main image */
    ngOnInit() {
        const data = this.navParams.get('data');
        this.images = Object(util__WEBPACK_IMPORTED_MODULE_5__["isArray"])(data) ? data : [data];
        this.mainImage = this.images[this.selectedImageIndex];
    }
    /** send will set images and text and pass it as param in close modal so be accessed and used by message.component.ts */
    send(text, images) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const data = {
                images,
                text
            };
            this.closeModal(data);
        });
    }
    /** save an image to device album */
    save() {
        this.socialShare.saveToPhotoAlbum(this.mainImage).then(() => this.toast(this.translate.instant('other.save-to-album')));
    }
    /** save share image via various media */
    share() {
        this.socialShare.share(null, null, null, this.mainImage);
    }
    /** remove image */
    remove() {
        this.images.splice(this.selectedImageIndex, 1);
        this.mainImage = this.images[0];
    }
};
GalleryPickerComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__["SocialSharing"] }
];
GalleryPickerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-gallery-picker',
        template: __webpack_require__(/*! raw-loader!./gallery-picker.component.html */ "./node_modules/raw-loader/index.js!./src/shared/modals/gallery-picker/gallery-picker.component.html"),
        styles: [__webpack_require__(/*! ./gallery-picker.component.scss */ "./src/shared/modals/gallery-picker/gallery-picker.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"], _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__["SocialSharing"]])
], GalleryPickerComponent);



/***/ }),

/***/ "./src/shared/modals/image-preview/image-preview.component.scss":
/*!**********************************************************************!*\
  !*** ./src/shared/modals/image-preview/image-preview.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: transparent;\n}\n:host ion-content .content-wrapper {\n  width: 90%;\n  height: 80%;\n  margin: 20% auto;\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  box-shadow: 1px 2px 12px var(--ion-color-dark);\n  overflow: hidden;\n}\n:host ion-content .content-wrapper .content-scroll {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL21vZGFscy9pbWFnZS1wcmV2aWV3L2ltYWdlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvc2hhcmVkL21vZGFscy9pbWFnZS1wcmV2aWV3L2ltYWdlLXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtBQ0FKO0FERUk7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBRENNO0VBQ0UsYUFBQTtBQ0NSIiwiZmlsZSI6InNyYy9zaGFyZWQvbW9kYWxzL2ltYWdlLXByZXZpZXcvaW1hZ2UtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgbWFyZ2luOiAyMCUgYXV0bztcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAxMnB4IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLmNvbnRlbnQtc2Nyb2xsIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIge1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgbWFyZ2luOiAyMCUgYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxMnB4IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/shared/modals/image-preview/image-preview.component.ts":
/*!********************************************************************!*\
  !*** ./src/shared/modals/image-preview/image-preview.component.ts ***!
  \********************************************************************/
/*! exports provided: ImagePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreviewComponent", function() { return ImagePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");






let ImagePreviewComponent = class ImagePreviewComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"] {
    constructor(injector, navParams, socialShare, firestoreService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.socialShare = socialShare;
        this.firestoreService = firestoreService;
    }
    /** get image from navParams */
    ngOnInit() {
        this.image = this.navParams.get('data');
    }
    /** save an image to device album */
    save(image) {
        this.socialShare.saveToPhotoAlbum(image).then(() => this.toast(this.translate.instant('other.save-to-album')));
    }
    /** save share image via various media */
    share(image) {
        this.socialShare.share(null, null, null, image);
    }
};
ImagePreviewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__["SocialSharing"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"] }
];
ImagePreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-image-preview',
        template: __webpack_require__(/*! raw-loader!./image-preview.component.html */ "./node_modules/raw-loader/index.js!./src/shared/modals/image-preview/image-preview.component.html"),
        styles: [__webpack_require__(/*! ./image-preview.component.scss */ "./src/shared/modals/image-preview/image-preview.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavParams"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_2__["SocialSharing"],
        src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_5__["FirestoreService"]])
], ImagePreviewComponent);



/***/ }),

/***/ "./src/shared/modals/lang-select/lang-select.component.scss":
/*!******************************************************************!*\
  !*** ./src/shared/modals/lang-select/lang-select.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 90px) !important;\n  width: 100%;\n  padding: 0 15px;\n}\n:host .content-wrapper .wrapper .content-scroll app-simple-item {\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 10px 0;\n}\n:host .content-wrapper .wrapper .content-scroll app-simple-item .img {\n  width: 20px;\n  max-width: 20px;\n  margin: 0 10px;\n  height: 20px;\n}\n:host .content-wrapper .wrapper .content-scroll app-simple-item ion-icon {\n  padding: 0 10px;\n}\n:host .content-wrapper .wrapper .content-scroll app-simple-item strong {\n  font-size: 14px;\n}\n:host .content-wrapper .wrapper .content-scroll app-simple-item p {\n  margin: 0;\n  font-size: 11px;\n  color: var(--ion-color-medium);\n}\n:host .content-wrapper .wrapper ion-button {\n  margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL21vZGFscy9sYW5nLXNlbGVjdC9sYW5nLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNyYy9zaGFyZWQvbW9kYWxzL2xhbmctc2VsZWN0L2xhbmctc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0ROO0FER007RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRFI7QURHUTtFQUNFLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxjQUFBO0FDRFY7QURHVTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNEWjtBRElVO0VBQ0UsZUFBQTtBQ0ZaO0FES1U7RUFDRSxlQUFBO0FDSFo7QURLVTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7QUNIWjtBRE9NO0VBQ0UsY0FBQTtBQ0xSIiwiZmlsZSI6InNyYy9zaGFyZWQvbW9kYWxzL2xhbmctc2VsZWN0L2xhbmctc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAuY29udGVudC1zY3JvbGwge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG4gICAgICAgIGFwcC1zaW1wbGUtaXRlbSB7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcblxyXG4gICAgICAgICAgLmltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3Ryb25nIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gOTBweCkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIGFwcC1zaW1wbGUtaXRlbSB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgYXBwLXNpbXBsZS1pdGVtIC5pbWcge1xuICB3aWR0aDogMjBweDtcbiAgbWF4LXdpZHRoOiAyMHB4O1xuICBtYXJnaW46IDAgMTBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgYXBwLXNpbXBsZS1pdGVtIGlvbi1pY29uIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgYXBwLXNpbXBsZS1pdGVtIHN0cm9uZyB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIGFwcC1zaW1wbGUtaXRlbSBwIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMTBweCAwO1xufSJdfQ== */"

/***/ }),

/***/ "./src/shared/modals/lang-select/lang-select.component.ts":
/*!****************************************************************!*\
  !*** ./src/shared/modals/lang-select/lang-select.component.ts ***!
  \****************************************************************/
/*! exports provided: LangSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LangSelectComponent", function() { return LangSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app/app.service */ "./src/app/services/app/app.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");







let LangSelectComponent = class LangSelectComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_4__["Extender"] {
    constructor(injector, navParams, commonService, appService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.commonService = commonService;
        this.appService = appService;
        this.firestoreService = firestoreService;
    }
    /** get settings from nav params */
    ngOnInit() {
        this.setting = this.navParams.get('data');
        this.subscriptions.push(this.commonService.getCountries().subscribe((countries) => (this.countries = countries)));
    }
    /** select a country, update lang preference and set translation with new lang data */
    select(lang) {
        if (!(lang === 'gb' || lang === 'es' || lang === 'fr')) {
            lang = 'gb';
        }
        this.setting.language = lang;
        this.firestoreService.upsert(`preferences/${this.setting.uid}`, this.setting);
        this.appService.langConfig(lang);
        this.closeModal();
    }
};
LangSelectComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"] },
    { type: src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"] }
];
LangSelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lang-select',
        template: __webpack_require__(/*! raw-loader!./lang-select.component.html */ "./node_modules/raw-loader/index.js!./src/shared/modals/lang-select/lang-select.component.html"),
        styles: [__webpack_require__(/*! ./lang-select.component.scss */ "./src/shared/modals/lang-select/lang-select.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
        src_app_services_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"],
        src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__["FirestoreService"]])
], LangSelectComponent);



/***/ }),

/***/ "./src/shared/modals/map-filter/map-filter.component.scss":
/*!****************************************************************!*\
  !*** ./src/shared/modals/map-filter/map-filter.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: transparent;\n}\n:host ion-content .content-wrapper {\n  width: 90%;\n  height: auto;\n  margin: 20% auto;\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  box-shadow: 1px 2px 12px var(--ion-color-dark);\n  overflow: hidden;\n}\n:host ion-content .content-wrapper .content-scroll {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL21vZGFscy9tYXAtZmlsdGVyL21hcC1maWx0ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvc2hhcmVkL21vZGFscy9tYXAtZmlsdGVyL21hcC1maWx0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSx5QkFBQTtBQ0FKO0FERUk7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0JBQUE7QUNBTjtBRENNO0VBQ0UsYUFBQTtBQ0NSIiwiZmlsZSI6InNyYy9zaGFyZWQvbW9kYWxzL21hcC1maWx0ZXIvbWFwLWZpbHRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICB3aWR0aDogOTAlO1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbjogMjAlIGF1dG87XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgICAgIGJveC1zaGFkb3c6IDFweCAycHggMTJweCB2YXIoLS1pb24tY29sb3ItZGFyayk7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIC5jb250ZW50LXNjcm9sbCB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI6aG9zdCBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW46IDIwJSBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDEycHggdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAuY29udGVudC1zY3JvbGwge1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/shared/modals/map-filter/map-filter.component.ts":
/*!**************************************************************!*\
  !*** ./src/shared/modals/map-filter/map-filter.component.ts ***!
  \**************************************************************/
/*! exports provided: MapFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapFilterComponent", function() { return MapFilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");




let MapFilterComponent = class MapFilterComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, navParams) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.typeSelectOptions = {
            header: 'Select Type',
            data: ['gym', 'hospital', 'spa', 'doctor', 'store', 'supermarket']
        };
    }
    ngOnInit() {
        this.filter = this.navParams.get('data');
        if (!this.filter) {
            this.filter = {
                radius: 0,
                openNow: false,
                type: null,
                zoom: 0
            };
        }
    }
    save() {
        this.closeModal(this.filter);
    }
};
MapFilterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] }
];
MapFilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-map-filter',
        template: __webpack_require__(/*! raw-loader!./map-filter.component.html */ "./node_modules/raw-loader/index.js!./src/shared/modals/map-filter/map-filter.component.html"),
        styles: [__webpack_require__(/*! ./map-filter.component.scss */ "./src/shared/modals/map-filter/map-filter.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"]])
], MapFilterComponent);



/***/ }),

/***/ "./src/shared/modals/notification-settings/notification-settings.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/shared/modals/notification-settings/notification-settings.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 44px) !important;\n  width: 100%;\n  padding: 0 15px;\n}\n:host .content-wrapper .wrapper .content-scroll .info {\n  margin: 0;\n  font-size: 12px;\n  color: var(--ion-color-medium-shade);\n}\n:host .content-wrapper .wrapper .content-scroll .text-line-through-background span {\n  background: var(--ion-color-light);\n}\n:host .content-wrapper .wrapper .content-scroll .notification-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 10px 0;\n}\n:host .content-wrapper .wrapper .content-scroll .notification-item .detail {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content-wrapper .wrapper .content-scroll .notification-item .detail h2,\n:host .content-wrapper .wrapper .content-scroll .notification-item .detail p {\n  margin: 5px 0;\n}\n:host .content-wrapper .wrapper .content-scroll .notification-item .detail h2 {\n  font-size: 16px;\n}\n:host .content-wrapper .wrapper .content-scroll .notification-item .detail p {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL21vZGFscy9ub3RpZmljYXRpb24tc2V0dGluZ3Mvbm90aWZpY2F0aW9uLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic3JjL3NoYXJlZC9tb2RhbHMvbm90aWZpY2F0aW9uLXNldHRpbmdzL25vdGlmaWNhdGlvbi1zZXR0aW5ncy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7QUNETjtBREdNO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FER1E7RUFDRSxTQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDRFY7QURLVTtFQUNFLGtDQUFBO0FDSFo7QURPUTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxjQUFBO0FDTFY7QURPVTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtBQ0xaO0FET1k7O0VBRUUsYUFBQTtBQ0xkO0FEUVk7RUFDRSxlQUFBO0FDTmQ7QURTWTtFQUNFLGVBQUE7QUNQZCIsImZpbGUiOiJzcmMvc2hhcmVkL21vZGFscy9ub3RpZmljYXRpb24tc2V0dGluZ3Mvbm90aWZpY2F0aW9uLXNldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgLndyYXBwZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAuY29udGVudC1zY3JvbGwge1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCkgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG4gICAgICAgIC5pbmZvIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50ZXh0LWxpbmUtdGhyb3VnaC1iYWNrZ3JvdW5kIHtcclxuICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5vdGlmaWNhdGlvbi1pdGVtIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcblxyXG4gICAgICAgICAgLmRldGFpbCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgICAgICBoMixcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDRweCkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5pbmZvIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC50ZXh0LWxpbmUtdGhyb3VnaC1iYWNrZ3JvdW5kIHNwYW4ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLm5vdGlmaWNhdGlvbi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAubm90aWZpY2F0aW9uLWl0ZW0gLmRldGFpbCB7XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAubm90aWZpY2F0aW9uLWl0ZW0gLmRldGFpbCBoMixcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ub3RpZmljYXRpb24taXRlbSAuZGV0YWlsIHAge1xuICBtYXJnaW46IDVweCAwO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLm5vdGlmaWNhdGlvbi1pdGVtIC5kZXRhaWwgaDIge1xuICBmb250LXNpemU6IDE2cHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAubm90aWZpY2F0aW9uLWl0ZW0gLmRldGFpbCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/shared/modals/notification-settings/notification-settings.component.ts":
/*!************************************************************************************!*\
  !*** ./src/shared/modals/notification-settings/notification-settings.component.ts ***!
  \************************************************************************************/
/*! exports provided: NotificationSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationSettingsComponent", function() { return NotificationSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");





let NotificationSettingsComponent = class NotificationSettingsComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.model = null;
    }
    /** get settings and current user */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            this.firestoreService.doc$(`preferences/${uid}`).subscribe((setting) => (this.model = setting));
        });
    }
    /** save preference */
    savePreference(setting) {
        this.firestoreService.set(`preferences/${this.model.uid}`, setting);
    }
};
NotificationSettingsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] }
];
NotificationSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notification-settings',
        template: __webpack_require__(/*! raw-loader!./notification-settings.component.html */ "./node_modules/raw-loader/index.js!./src/shared/modals/notification-settings/notification-settings.component.html"),
        styles: [__webpack_require__(/*! ./notification-settings.component.scss */ "./src/shared/modals/notification-settings/notification-settings.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]])
], NotificationSettingsComponent);



/***/ }),

/***/ "./src/shared/modals/privacy/privacy.component.scss":
/*!**********************************************************!*\
  !*** ./src/shared/modals/privacy/privacy.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 60px) !important;\n  width: 100%;\n  padding: 0 15px;\n}\n:host .content-wrapper .wrapper .content-scroll .info {\n  margin: 0;\n  font-size: 12px;\n  color: var(--ion-color-medium-shade);\n}\n:host .content-wrapper .wrapper .content-scroll p {\n  color: var(--ion-color-medium-shade);\n}\n:host .content-wrapper .wrapper .content-scroll .text-line-through-background span {\n  background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL21vZGFscy9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50LnNjc3MiLCJzcmMvc2hhcmVkL21vZGFscy9wcml2YWN5L3ByaXZhY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxZQUFBO0FDRE47QURHTTtFQUNFLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNEUjtBREdRO0VBQ0UsU0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0RWO0FER1E7RUFDRSxvQ0FBQTtBQ0RWO0FES1U7RUFDRSxrQ0FBQTtBQ0haIiwiZmlsZSI6InNyYy9zaGFyZWQvbW9kYWxzL3ByaXZhY3kvcHJpdmFjeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuY29udGVudC13cmFwcGVyIHtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgLmNvbnRlbnQtc2Nyb2xsIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQtbGluZS10aHJvdWdoLWJhY2tncm91bmQge1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5pbmZvIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAudGV4dC1saW5lLXRocm91Z2gtYmFja2dyb3VuZCBzcGFuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/shared/modals/privacy/privacy.component.ts":
/*!********************************************************!*\
  !*** ./src/shared/modals/privacy/privacy.component.ts ***!
  \********************************************************/
/*! exports provided: PrivacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function() { return PrivacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");



let PrivacyComponent = class PrivacyComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    ngOnInit() { }
};
PrivacyComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
PrivacyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy',
        template: __webpack_require__(/*! raw-loader!./privacy.component.html */ "./node_modules/raw-loader/index.js!./src/shared/modals/privacy/privacy.component.html"),
        styles: [__webpack_require__(/*! ./privacy.component.scss */ "./src/shared/modals/privacy/privacy.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], PrivacyComponent);



/***/ }),

/***/ "./src/shared/modals/review/review.component.scss":
/*!********************************************************!*\
  !*** ./src/shared/modals/review/review.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 44px) !important;\n  width: 100%;\n  padding: 0 15px;\n}\n:host .content-wrapper .wrapper .content-scroll .info {\n  font-size: 12px;\n  color: var(--ion-color-medium-shade);\n}\n:host .content-wrapper .wrapper .content-scroll app-rating {\n  display: block;\n  margin-bottom: 20px;\n}\n:host .content-wrapper .wrapper .content-scroll form-field.textarea ::ng-deep .input-wrapper {\n  height: auto;\n}\n:host .content-wrapper .wrapper .content-scroll form-field.textarea ::ng-deep .input-wrapper .input textarea {\n  background: none;\n  resize: none;\n  border: none;\n  width: 100%;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL21vZGFscy9yZXZpZXcvcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic3JjL3NoYXJlZC9tb2RhbHMvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLFlBQUE7QUNETjtBREdNO0VBQ0Usb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQ0RSO0FER1E7RUFDRSxlQUFBO0VBQ0Esb0NBQUE7QUNEVjtBREdRO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDRFY7QURNYztFQUNFLFlBQUE7QUNKaEI7QURPa0I7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUNMcEIiLCJmaWxlIjoic3JjL3NoYXJlZC9tb2RhbHMvcmV2aWV3L3Jldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuY29udGVudC13cmFwcGVyIHtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgLmNvbnRlbnQtc2Nyb2xsIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDQ0cHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFwcC1yYXRpbmcge1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3JtLWZpZWxkIHtcclxuICAgICAgICAgICYudGV4dGFyZWEge1xyXG4gICAgICAgICAgICA6Om5nLWRlZXAge1xyXG4gICAgICAgICAgICAgIC5pbnB1dC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICAgICAgICAgICAgICAuaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICByZXNpemU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NHB4KSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMCAxNXB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmluZm8ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIGFwcC1yYXRpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIGZvcm0tZmllbGQudGV4dGFyZWEgOjpuZy1kZWVwIC5pbnB1dC13cmFwcGVyIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgZm9ybS1maWVsZC50ZXh0YXJlYSA6Om5nLWRlZXAgLmlucHV0LXdyYXBwZXIgLmlucHV0IHRleHRhcmVhIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgcmVzaXplOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdXRsaW5lOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/shared/modals/review/review.component.ts":
/*!******************************************************!*\
  !*** ./src/shared/modals/review/review.component.ts ***!
  \******************************************************/
/*! exports provided: ReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewComponent", function() { return ReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/services/firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");





let ReviewComponent = class ReviewComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_3__["Extender"] {
    constructor(injector, authService, firestoreService) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.model = { rating: 0, comment: '', uid: '' };
    }
    /** get user id and assign to model */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            this.model.uid = uid;
        });
    }
    /** update rating value */
    update(val) {
        this.model.rating = val;
    }
    /** save feedback */
    save() {
        this.firestoreService.add(`feedback`, this.model).then(() => {
            this.toast(this.translate.instant('feedback-component.success-message'));
            this.closeModal();
        });
    }
};
ReviewComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"] }
];
ReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review',
        template: __webpack_require__(/*! raw-loader!./review.component.html */ "./node_modules/raw-loader/index.js!./src/shared/modals/review/review.component.html"),
        styles: [__webpack_require__(/*! ./review.component.scss */ "./src/shared/modals/review/review.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], src_shared_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_4__["FirestoreService"]])
], ReviewComponent);



/***/ }),

/***/ "./src/shared/modals/social-share/social-share.component.scss":
/*!********************************************************************!*\
  !*** ./src/shared/modals/social-share/social-share.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: transparent;\n}\n:host ion-content .content-wrapper {\n  width: 90%;\n  height: auto;\n  margin: 20% auto;\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  box-shadow: 1px 2px 12px var(--ion-color-dark);\n  overflow: hidden;\n}\n:host ion-content .content-wrapper .content-scroll {\n  padding: 10px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL21vZGFscy9zb2NpYWwtc2hhcmUvc29jaWFsLXNoYXJlLmNvbXBvbmVudC5zY3NzIiwic3JjL3NoYXJlZC9tb2RhbHMvc29jaWFsLXNoYXJlL3NvY2lhbC1zaGFyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLHlCQUFBO0FDQUo7QURFSTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7RUFDQSxnQkFBQTtBQ0FOO0FERU07RUFDRSxrQkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9zaGFyZWQvbW9kYWxzL3NvY2lhbC1zaGFyZS9zb2NpYWwtc2hhcmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW46IDIwJSBhdXRvO1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gICAgICBib3gtc2hhZG93OiAxcHggMnB4IDEycHggdmFyKC0taW9uLWNvbG9yLWRhcmspO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgICAgLmNvbnRlbnQtc2Nyb2xsIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luOiAyMCUgYXV0bztcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMXB4IDJweCAxMnB4IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/shared/modals/social-share/social-share.component.ts":
/*!******************************************************************!*\
  !*** ./src/shared/modals/social-share/social-share.component.ts ***!
  \******************************************************************/
/*! exports provided: SocialShareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialShareComponent", function() { return SocialShareComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_share_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-share/core */ "./node_modules/@ngx-share/core/fesm2015/ngx-share-core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");






/** browser social share using @ngx-share/core*/
let SocialShareComponent = class SocialShareComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"] {
    constructor(injector, navParam, share) {
        super(injector);
        this.injector = injector;
        this.navParam = navParam;
        this.share = share;
    }
    /** get share configs */
    ngOnInit() {
        this.share.config.url = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].hosting}/${this.navParam.get('data')}`;
        this.socialButtons = [
            {
                text: 'Facebook',
                type: 'facebook'
            },
            {
                text: 'Twitter',
                type: 'twitter'
            },
            {
                text: 'WhatsApp',
                type: 'whatsapp',
                icon: 'message-circle'
            },
            {
                text: 'Email',
                type: 'email',
                color: 'dark',
                icon: 'mail'
            },
            {
                text: 'Copy',
                type: 'copy',
                color: 'medium'
            },
            {
                text: 'Print',
                type: 'print',
                color: 'tertiary',
                icon: 'printer'
            }
        ];
    }
};
SocialShareComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: _ngx_share_core__WEBPACK_IMPORTED_MODULE_3__["ShareService"] }
];
SocialShareComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-social-share',
        template: __webpack_require__(/*! raw-loader!./social-share.component.html */ "./node_modules/raw-loader/index.js!./src/shared/modals/social-share/social-share.component.html"),
        styles: [__webpack_require__(/*! ./social-share.component.scss */ "./src/shared/modals/social-share/social-share.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"], _ngx_share_core__WEBPACK_IMPORTED_MODULE_3__["ShareService"]])
], SocialShareComponent);



/***/ }),

/***/ "./src/shared/modals/terms-and-conditions/terms-and-conditions.component.scss":
/*!************************************************************************************!*\
  !*** ./src/shared/modals/terms-and-conditions/terms-and-conditions.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 60px) !important;\n  width: 100%;\n  padding: 0 15px;\n}\n:host .content-wrapper .wrapper .content-scroll .info {\n  margin: 0;\n  font-size: 12px;\n  color: var(--ion-color-medium-shade);\n}\n:host .content-wrapper .wrapper .content-scroll p {\n  color: var(--ion-color-medium-shade);\n}\n:host .content-wrapper .wrapper .content-scroll .text-line-through-background span {\n  background: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uZW8vRGVza3RvcC9kZXYvbWVzc2FnZXJfMi9zcmMvc2hhcmVkL21vZGFscy90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyIsInNyYy9zaGFyZWQvbW9kYWxzL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0ROO0FER007RUFDRSxvQ0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDRFI7QURHUTtFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNEVjtBREdRO0VBQ0Usb0NBQUE7QUNEVjtBREtVO0VBQ0Usa0NBQUE7QUNIWiIsImZpbGUiOiJzcmMvc2hhcmVkL21vZGFscy90ZXJtcy1hbmQtY29uZGl0aW9ucy90ZXJtcy1hbmQtY29uZGl0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAuY29udGVudC13cmFwcGVyIHtcclxuICAgIC53cmFwcGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgICAgLmNvbnRlbnQtc2Nyb2xsIHtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDYwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG5cclxuICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRleHQtbGluZS10aHJvdWdoLWJhY2tncm91bmQge1xyXG4gICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjBweCkgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5pbmZvIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAudGV4dC1saW5lLXRocm91Z2gtYmFja2dyb3VuZCBzcGFuIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/shared/modals/terms-and-conditions/terms-and-conditions.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/shared/modals/terms-and-conditions/terms-and-conditions.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TermsAndConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function() { return TermsAndConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");



let TermsAndConditionsComponent = class TermsAndConditionsComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_2__["Extender"] {
    constructor(injector) {
        super(injector);
        this.injector = injector;
    }
    ngOnInit() { }
};
TermsAndConditionsComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] }
];
TermsAndConditionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms-and-conditions',
        template: __webpack_require__(/*! raw-loader!./terms-and-conditions.component.html */ "./node_modules/raw-loader/index.js!./src/shared/modals/terms-and-conditions/terms-and-conditions.component.html"),
        styles: [__webpack_require__(/*! ./terms-and-conditions.component.scss */ "./src/shared/modals/terms-and-conditions/terms-and-conditions.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"]])
], TermsAndConditionsComponent);



/***/ }),

/***/ "./src/shared/pipes/markdown/markdown.pipe.ts":
/*!****************************************************!*\
  !*** ./src/shared/pipes/markdown/markdown.pipe.ts ***!
  \****************************************************/
/*! exports provided: MarkdownPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkdownPipe", function() { return MarkdownPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_2__);



/** convert text to markdown  */
let MarkdownPipe = class MarkdownPipe {
    transform(value) {
        if (value && value.length > 0) {
            return marked__WEBPACK_IMPORTED_MODULE_2__(value);
        }
        return value;
    }
};
MarkdownPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'markdown'
    })
], MarkdownPipe);



/***/ }),

/***/ "./src/shared/services/common/common.service.ts":
/*!******************************************************!*\
  !*** ./src/shared/services/common/common.service.ts ***!
  \******************************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_modals_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/shared/modals/social-share/social-share.component */ "./src/shared/modals/social-share/social-share.component.ts");
/* harmony import */ var _firestore_firestore_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");













let CommonService = class CommonService extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_10__["Extender"] {
    constructor(injector, http, authService, firestoreService, camera, callNumber, imagePicker, socialSharing) {
        super(injector);
        this.injector = injector;
        this.http = http;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.camera = camera;
        this.callNumber = callNumber;
        this.imagePicker = imagePicker;
        this.socialSharing = socialSharing;
        this.cameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.countries = [];
    }
    /** get list of countries from free api */
    getCountries() {
        if (this.countries.length === 0) {
            return this.http.get('https://restcountries.eu/rest/v2/all').pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((res) => {
                this.countries = res;
                return res;
            }));
        }
        else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(this.countries);
        }
    }
    /** search country by name */
    searchCountry(search) {
        return this.http.get('https://restcountries.eu/rest/v2/name/' + search).pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_8__["map"])((res) => {
            return res;
        }));
    }
    /** call user method checks if the device supports native and uses native call number function.
     * otherwise pass reference to <a href="tel:" and access click event to make a browser call
     */
    callUser(mobile, el) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (mobile) {
                if (window.cordova) {
                    yield this.callNumber.isCallSupported();
                    return yield this.callNumber.callNumber(mobile, false);
                }
                else {
                    el.nativeElement.click();
                }
            }
            else {
                this.toast('User does not have a phone number');
            }
        });
    }
    /** checks if the device supports native and uses native share function
     * otherwise using open social share component
     */
    share(message, subject, file, url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (window.cordova) {
                return yield this.socialSharing
                    .share(message, subject, file, url)
                    .then(() => this.toast(this.translate.instant('feed-component.share-confirm')));
            }
            else {
                const modal = yield this.openModal(src_shared_modals_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_11__["SocialShareComponent"], url, 'custom-modal');
                modal.present();
            }
        });
    }
    /** specify which native library to use to get images.
     * if multiple images, use imagePicker library, if camera, use camera library
     */
    getPictures(type, multiple = false) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (!multiple) {
                return this.getPicturesNative(type);
            }
            else {
                return yield this.getPicturesFromLibrary();
            }
        });
    }
    /** get files from browser file input and convert to images and resolve all */
    getImagesFromFiles(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let reads = [];
            const images = Array.prototype.slice.call(event.target.files);
            if (images && images.length > 0) {
                reads = images.map((element) => {
                    return new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onloadend = (e) => {
                            resolve(e.target.result);
                        };
                        return reader.readAsDataURL(element);
                    });
                });
                const _images = yield Promise.all(reads);
                return _images;
            }
        });
    }
    /** get single image from camera or library and append base64 string text and resolve */
    getPicturesNative(type) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.cameraOptions.sourceType = type;
            this.cameraOptions.quality = 20;
            return yield new Promise((resolve, reject) => {
                this.camera
                    .getPicture(this.cameraOptions)
                    .then((results) => {
                    resolve('data:image/jpeg;base64,' + results);
                })
                    .catch((err) => reject(err));
            });
        });
    }
    /** get images from library and append base64 string text and resolve */
    getPicturesFromLibrary() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const options = {
                outputType: 1,
                quality: 20,
                maximumImagesCount: 5
            };
            return yield new Promise((resolve, reject) => {
                this.imagePicker
                    .getPictures(options)
                    .then((results) => {
                    resolve(results.map((item) => 'data:image/jpeg;base64,' + item));
                })
                    .catch((err) => {
                    reject(err);
                    this.toast('fail' + err);
                });
            });
        });
    }
};
CommonService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"], args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],] }] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] },
    { type: _firestore_firestore_service__WEBPACK_IMPORTED_MODULE_12__["FirestoreService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"] },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"] }
];
CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injector"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
        _firestore_firestore_service__WEBPACK_IMPORTED_MODULE_12__["FirestoreService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_4__["Camera"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_5__["ImagePicker"],
        _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_6__["SocialSharing"]])
], CommonService);



/***/ }),

/***/ "./src/shared/services/fcm/fcm.service.ts":
/*!************************************************!*\
  !*** ./src/shared/services/fcm/fcm.service.ts ***!
  \************************************************/
/*! exports provided: FcmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FcmService", function() { return FcmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/messaging */ "./node_modules/@angular/fire/messaging/es2015/index.js");
/* harmony import */ var _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/firebase-x/ngx */ "./node_modules/@ionic-native/firebase-x/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var _firestore_firestore_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../firestore/firestore.service */ "./src/shared/services/firestore/firestore.service.ts");










let FcmService = class FcmService extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_8__["Extender"] {
    constructor(injector, firebaseNative, authService, firestoreService, platform, afMessaging) {
        super(injector);
        this.injector = injector;
        this.firebaseNative = firebaseNative;
        this.authService = authService;
        this.firestoreService = firestoreService;
        this.platform = platform;
        this.afMessaging = afMessaging;
        try {
            const _messaging = firebase_app__WEBPACK_IMPORTED_MODULE_5__["messaging"]();
            _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
            _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        }
        catch (e) { }
    }
    // Get permission from the user
    getToken() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let token;
            if (window.cordova) {
                if (this.platform.is('android')) {
                    token = yield this.firebaseNative.getToken();
                    console.log('android', token);
                }
                if (this.platform.is('ios')) {
                    token = yield this.firebaseNative.getToken();
                    console.log('android', token);
                    yield this.firebaseNative.grantPermission();
                }
                return this.saveTokenToFirestore(token);
            }
            else {
                this.afMessaging.requestPermission.subscribe();
                return this.afMessaging.requestToken.subscribe((_token) => {
                    token = _token;
                    return this.saveTokenToFirestore(token);
                });
            }
        });
    }
    // Listen to incoming FCM messages
    listenToNotifications() {
        if (window.cordova) {
            return this.firebaseNative.onMessageReceived();
        }
        else {
            return this.afMessaging.messages.pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((msg) => {
                const body = msg.notification.body;
                this.toast(body);
            }));
        }
    }
    // Save the token to firestore
    saveTokenToFirestore(token) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const { uid } = yield this.authService.getUser();
            if (!token) {
                return;
            }
            if (uid) {
                const docData = {
                    token,
                    uid
                };
                return this.firestoreService.set(`fcm-devices/${token}`, docData);
            }
        });
    }
};
FcmService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__["FirebaseX"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _firestore_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_2__["AngularFireMessaging"] }
];
FcmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _ionic_native_firebase_x_ngx__WEBPACK_IMPORTED_MODULE_3__["FirebaseX"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _firestore_firestore_service__WEBPACK_IMPORTED_MODULE_9__["FirestoreService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"],
        _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_2__["AngularFireMessaging"]])
], FcmService);



/***/ }),

/***/ "./src/shared/services/firestore/firestore.service.ts":
/*!************************************************************!*\
  !*** ./src/shared/services/firestore/firestore.service.ts ***!
  \************************************************************/
/*! exports provided: FirestoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirestoreService", function() { return FirestoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let FirestoreService = class FirestoreService {
    constructor(afs, afStorage) {
        this.afs = afs;
        this.afStorage = afStorage;
    }
    /// **************
    /// Write Data
    /// **************
    /// Firebase Server Timestamp
    get timestamp() {
        return firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.serverTimestamp();
    }
    /// **************
    /// Get a Reference
    /// **************
    createId() {
        return this.afs.createId();
    }
    col({ ref, queryFn }) {
        return typeof ref === 'string' ? this.afs.collection(ref, queryFn) : ref;
    }
    doc(ref) {
        return typeof ref === 'string' ? this.afs.doc(ref) : ref;
    }
    /// **************
    /// Get Data
    /// **************
    doc$(ref) {
        return this.doc(ref)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((doc) => {
            return Object.assign({ id: doc.payload.id }, doc.payload.data());
        }));
    }
    col$(ref, queryFn) {
        return this.col({ ref, queryFn })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((docs) => {
            return docs.map((a) => a.payload.doc.data());
        }));
    }
    /// with Ids
    colWithIds$(ref, queryFn) {
        return this.col({ ref, queryFn })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((actions) => {
            return actions.map((a) => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;
                return Object.assign({ id }, data);
            });
        }));
    }
    /** set document update created and updated timestamp, use merge true to merge data if its an update */
    set(ref, data) {
        const timestamp = this.timestamp;
        return this.doc(ref).set(Object.assign({}, data, { updatedAt: timestamp, createdAt: timestamp }), { merge: true });
    }
    /** update data and timestamp */
    update(ref, data) {
        return this.doc(ref).update(Object.assign({}, data, { updatedAt: this.timestamp }));
    }
    delete(ref) {
        return this.doc(ref).delete();
    }
    add(ref, data) {
        const timestamp = this.timestamp;
        return this.col({ ref }).add(Object.assign({}, data, { updatedAt: timestamp, createdAt: timestamp }));
    }
    geopoint(lat, lng) {
        return new firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].GeoPoint(lat, lng);
    }
    /// If doc exists update, otherwise set
    upsert(ref, data) {
        const doc = this.doc(ref)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1))
            .toPromise();
        return doc.then((snap) => {
            return snap.payload.exists ? this.update(ref, data) : this.set(ref, data);
        });
    }
    /// *************
    /// Upload Data to Firestore
    /// *************
    /** configure storage name for image upload,
     * if image is a URI, encode to data_url and upload using putString function in firebase storage reference
     * if image isn't a URI just call putString without encoding
     */
    uploadImage(imageURI, filename, store, isURI = false) {
        return new Promise((resolve, reject) => {
            const name = `${store}/${filename}`;
            const storageRef = this.afStorage.storage.ref();
            const imageRef = storageRef.child(name);
            if (isURI) {
                this.encodeImageUri(imageURI, (image64) => {
                    this.uploadWithPutString(imageRef, image64, name, resolve, reject);
                });
            }
            else {
                this.uploadWithPutString(imageRef, imageURI, name, resolve, reject);
            }
        });
    }
    /** upload a file to firebase and save file metadata in files document */
    uploadFile(upload, store) {
        const storageRef = this.afStorage.storage.ref();
        const uploadTask = storageRef.child(`${store}/${upload.file.name}`).put(upload.file);
        return uploadTask.on(firebase_app__WEBPACK_IMPORTED_MODULE_4__["storage"].TaskEvent.STATE_CHANGED, (snapshot) => {
            // upload in progress
            upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        }, (error) => {
            // upload failed
            console.log(error);
        }, () => {
            // upload success
            upload.url = uploadTask.snapshot.downloadURL;
            upload.name = upload.file.name;
            this.saveFileData(upload);
        });
    }
    /** get token from download url, use token as id to file file in files collection,
     * delete file and use name from file doc to delete from storage
     */
    deleteUpload(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const token = this.getDownloadToken(url);
            if (token) {
                return this.doc$(`files/${token}`).subscribe((file) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    yield this.deleteFileData(token);
                    return yield this.deleteFileStorage(file.name);
                }));
            }
        });
    }
    /** encode uri to data url */
    encodeImageUri(imageUri, callback) {
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        const img = new Image();
        img.onload = function () {
            const aux = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            const dataURL = c.toDataURL('image/jpeg');
            callback(dataURL);
        };
        img.src = imageUri;
    }
    /// **************
    /// Inspect Data
    /// **************
    inspectDoc(ref) {
        const tick = new Date().getTime();
        this.doc(ref)
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((d) => {
            const tock = new Date().getTime() - tick;
            console.log(`Loaded Document in ${tock}ms`, d);
        }))
            .subscribe();
    }
    inspectCol(ref) {
        const tick = new Date().getTime();
        this.col({ ref })
            .snapshotChanges()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((c) => {
            const tock = new Date().getTime() - tick;
            console.log(`Loaded Collection in ${tock}ms`, c);
        }))
            .subscribe();
    }
    /// **************
    /// Create and read doc references
    /// **************
    /// create a reference between two documents
    connect(host, key, doc) {
        return this.doc(host).update({ [key]: this.doc(doc).ref });
    }
    /// returns a documents references mapped to AngularFirestoreDocument
    docWithRefs$(ref) {
        return this.doc$(ref).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((doc) => {
            for (const k of Object.keys(doc)) {
                if (doc[k] instanceof firebase_app__WEBPACK_IMPORTED_MODULE_4__["firestore"].DocumentReference) {
                    doc[k] = this.doc(doc[k].path);
                }
            }
            return doc;
        }));
    }
    /**
     * Delete a collection, in batches of batchSize. Note that this does
     * not recursively delete sub-collections of documents in the collection
     * from: https://github.com/AngularFirebase/80-delete-firestore-collections/blob/master/src/app/firestore.service.ts
     */
    deleteCollection(path, batchSize) {
        const source = this.deleteBatch(path, batchSize);
        // expand will call deleteBatch recursively until the collection is deleted
        return source.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["expand"])((val) => this.deleteBatch(path, batchSize)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeWhile"])((val) => val > 0));
    }
    /** upload image base64 string to firebase storage using putString method */
    uploadWithPutString(imageRef, imageURI, name, resolve, reject) {
        imageRef.putString(imageURI, 'data_url').then((url) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.saveFileData({ name, url: yield imageRef.getDownloadURL() });
            resolve(imageRef.getDownloadURL());
        }), (err) => {
            reject(err);
        });
    }
    /** get token from url query param */
    getDownloadToken(url) {
        const urlParams = new URLSearchParams(url);
        return urlParams.get('token');
    }
    // add files details from the realtime db
    saveFileData({ name, url }) {
        const token = this.getDownloadToken(url);
        return this.set(`files/${token}`, { name, url });
    }
    // Deletes the file details from the realtime db
    deleteFileData(key) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.delete(`files/${key}`);
        });
    }
    // Firebase files must have unique names in their respective storage dir
    // So the name serves as a unique key
    deleteFileStorage(name) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield this.afStorage.storage
                .ref()
                .child(`${name}`)
                .delete();
        });
    }
    // Detects documents as batched transaction
    deleteBatch(path, batchSize) {
        const colRef = this.afs.collection(path, (ref) => ref.orderBy('__name__').limit(batchSize));
        return colRef.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["mergeMap"])((snapshot) => {
            // Delete documents in a batch
            const batch = this.afs.firestore.batch();
            snapshot.forEach((doc) => {
                batch.delete(doc.payload.doc.ref);
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["from"])(batch.commit()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(() => snapshot.length));
        }));
    }
};
FirestoreService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"] }
];
FirestoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _angular_fire_storage__WEBPACK_IMPORTED_MODULE_3__["AngularFireStorage"]])
], FirestoreService);



/***/ }),

/***/ "./src/shared/services/subscriptions/subscriptions.service.ts":
/*!********************************************************************!*\
  !*** ./src/shared/services/subscriptions/subscriptions.service.ts ***!
  \********************************************************************/
/*! exports provided: SubscriptionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionsService", function() { return SubscriptionsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


/**
 * @class SubscriptionsService
 * handle subscriptions https://github.com/angular/angularfire/issues/1459
 */
let SubscriptionsService = class SubscriptionsService {
    constructor() {
        this.subscriptions = [];
    }
    forceSubscriptionDestroy() {
        for (const sub of this.subscriptions) {
            sub.unsubscribe();
        }
    }
};
SubscriptionsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], SubscriptionsService);



/***/ }),

/***/ "./src/shared/shared.module.ts":
/*!*************************************!*\
  !*** ./src/shared/shared.module.ts ***!
  \*************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ngx_share_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-share/core */ "./node_modules/@ngx-share/core/fesm2015/ngx-share-core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-moment */ "./node_modules/angular2-moment/index.js");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/fesm2015/ngx-autosize.js");
/* harmony import */ var _components_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/accordion/accordion.module */ "./src/shared/components/accordion/accordion.module.ts");
/* harmony import */ var _components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/no-data/no-data.component */ "./src/shared/components/no-data/no-data.component.ts");
/* harmony import */ var _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/rating/rating.component */ "./src/shared/components/rating/rating.component.ts");
/* harmony import */ var _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search-bar/search-bar.component */ "./src/shared/components/search-bar/search-bar.component.ts");
/* harmony import */ var _components_simple_item_simple_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/simple-item/simple-item.component */ "./src/shared/components/simple-item/simple-item.component.ts");
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/shared/components/spinner/spinner.component.ts");
/* harmony import */ var _components_tab_menu_tab_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/tab-menu/tab-menu.component */ "./src/shared/components/tab-menu/tab-menu.component.ts");
/* harmony import */ var _directives_color_luminance_color_luminance_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directives/color-luminance/color-luminance.directive */ "./src/shared/directives/color-luminance/color-luminance.directive.ts");
/* harmony import */ var _directives_elastic_elastic_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directives/elastic/elastic.directive */ "./src/shared/directives/elastic/elastic.directive.ts");
/* harmony import */ var _directives_image_loader_image_loader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/image-loader/image-loader */ "./src/shared/directives/image-loader/image-loader.ts");
/* harmony import */ var _form_field_form_field_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./form-field/form-field.module */ "./src/shared/form-field/form-field.module.ts");
/* harmony import */ var _modals_calendar_event_list_calendar_event_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modals/calendar-event-list/calendar-event-list.component */ "./src/shared/modals/calendar-event-list/calendar-event-list.component.ts");
/* harmony import */ var _modals_calendar_event_manage_calendar_event_manage_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modals/calendar-event-manage/calendar-event-manage.component */ "./src/shared/modals/calendar-event-manage/calendar-event-manage.component.ts");
/* harmony import */ var _modals_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modals/change-password/change-password.component */ "./src/shared/modals/change-password/change-password.component.ts");
/* harmony import */ var _modals_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modals/edit-profile/edit-profile.component */ "./src/shared/modals/edit-profile/edit-profile.component.ts");
/* harmony import */ var _modals_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modals/feedback/feedback.component */ "./src/shared/modals/feedback/feedback.component.ts");
/* harmony import */ var _modals_gallery_picker_gallery_picker_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modals/gallery-picker/gallery-picker.component */ "./src/shared/modals/gallery-picker/gallery-picker.component.ts");
/* harmony import */ var _modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./modals/image-preview/image-preview.component */ "./src/shared/modals/image-preview/image-preview.component.ts");
/* harmony import */ var _modals_lang_select_lang_select_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./modals/lang-select/lang-select.component */ "./src/shared/modals/lang-select/lang-select.component.ts");
/* harmony import */ var _modals_map_filter_map_filter_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./modals/map-filter/map-filter.component */ "./src/shared/modals/map-filter/map-filter.component.ts");
/* harmony import */ var _modals_notification_settings_notification_settings_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modals/notification-settings/notification-settings.component */ "./src/shared/modals/notification-settings/notification-settings.component.ts");
/* harmony import */ var _modals_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./modals/privacy/privacy.component */ "./src/shared/modals/privacy/privacy.component.ts");
/* harmony import */ var _modals_review_review_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./modals/review/review.component */ "./src/shared/modals/review/review.component.ts");
/* harmony import */ var _modals_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./modals/social-share/social-share.component */ "./src/shared/modals/social-share/social-share.component.ts");
/* harmony import */ var _modals_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./modals/terms-and-conditions/terms-and-conditions.component */ "./src/shared/modals/terms-and-conditions/terms-and-conditions.component.ts");
/* harmony import */ var _pipes_markdown_markdown_pipe__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pipes/markdown/markdown.pipe */ "./src/shared/pipes/markdown/markdown.pipe.ts");


































const COMPONENTS = [_components_tab_menu_tab_menu_component__WEBPACK_IMPORTED_MODULE_14__["TabMenuComponent"], _components_no_data_no_data_component__WEBPACK_IMPORTED_MODULE_9__["NoDataComponent"], _components_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_11__["SearchBarComponent"], _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_13__["SpinnerComponent"], _components_simple_item_simple_item_component__WEBPACK_IMPORTED_MODULE_12__["SimpleItemComponent"], _components_rating_rating_component__WEBPACK_IMPORTED_MODULE_10__["RatingComponent"]];
const MODALS = [
    _modals_gallery_picker_gallery_picker_component__WEBPACK_IMPORTED_MODULE_24__["GalleryPickerComponent"],
    _modals_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_21__["ChangePasswordComponent"],
    _modals_calendar_event_list_calendar_event_list_component__WEBPACK_IMPORTED_MODULE_19__["CalendarEventListComponent"],
    _modals_calendar_event_manage_calendar_event_manage_component__WEBPACK_IMPORTED_MODULE_20__["CalendarEventManageComponent"],
    _modals_image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_25__["ImagePreviewComponent"],
    _modals_review_review_component__WEBPACK_IMPORTED_MODULE_30__["ReviewComponent"],
    _modals_lang_select_lang_select_component__WEBPACK_IMPORTED_MODULE_26__["LangSelectComponent"],
    _modals_notification_settings_notification_settings_component__WEBPACK_IMPORTED_MODULE_28__["NotificationSettingsComponent"],
    _modals_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_22__["EditProfileComponent"],
    _modals_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_23__["FeedbackComponent"],
    _modals_privacy_privacy_component__WEBPACK_IMPORTED_MODULE_29__["PrivacyComponent"],
    _modals_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_32__["TermsAndConditionsComponent"],
    _modals_map_filter_map_filter_component__WEBPACK_IMPORTED_MODULE_27__["MapFilterComponent"],
    _modals_social_share_social_share_component__WEBPACK_IMPORTED_MODULE_31__["SocialShareComponent"]
];
const DIRECTIVES = [_directives_image_loader_image_loader__WEBPACK_IMPORTED_MODULE_17__["ImageLoaderDirective"], _directives_elastic_elastic_directive__WEBPACK_IMPORTED_MODULE_16__["ElasticDirective"], _directives_color_luminance_color_luminance_directive__WEBPACK_IMPORTED_MODULE_15__["ColorLuminanceDirective"]];
const PIPES = [_pipes_markdown_markdown_pipe__WEBPACK_IMPORTED_MODULE_33__["MarkdownPipe"]];
const MODULES = [
    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
    _form_field_form_field_module__WEBPACK_IMPORTED_MODULE_18__["FormFieldModule"],
    angular2_moment__WEBPACK_IMPORTED_MODULE_6__["MomentModule"],
    _components_accordion_accordion_module__WEBPACK_IMPORTED_MODULE_8__["AccordionModule"],
    ngx_autosize__WEBPACK_IMPORTED_MODULE_7__["AutosizeModule"],
    _ngx_share_core__WEBPACK_IMPORTED_MODULE_4__["ShareModule"]
];
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [COMPONENTS, DIRECTIVES, PIPES, MODALS],
        entryComponents: [MODALS],
        exports: [MODULES, COMPONENTS, DIRECTIVES, PIPES, MODALS],
        imports: [MODULES]
    })
], SharedModule);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/neo/Desktop/dev/messager_2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map