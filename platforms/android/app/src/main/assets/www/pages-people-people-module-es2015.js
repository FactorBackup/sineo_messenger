(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-people-people-module"],{

/***/ "./node_modules/@ionic-native/contacts/ngx/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@ionic-native/contacts/ngx/index.js ***!
  \**********************************************************/
/*! exports provided: Contact, ContactName, ContactField, ContactAddress, ContactOrganization, ContactFindOptions, Contacts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactName", function() { return ContactName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactField", function() { return ContactField; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactAddress", function() { return ContactAddress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactOrganization", function() { return ContactOrganization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFindOptions", function() { return ContactFindOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contacts", function() { return Contacts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");


var Contact = /** @class */ (function () {
    function Contact() {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["checkAvailability"])('navigator.contacts', 'create', 'Contacts') === true) {
            this._objectInstance = navigator.contacts.create();
        }
    }
    Contact.prototype.clone = function () {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instanceAvailability"])(_this) === true) {
                var newContact = new Contact();
                for (var prop in _this) {
                    if (prop === 'id')
                        return;
                    newContact[prop] = _this[prop];
                }
                return newContact;
            }
        })();
    };
    Contact.prototype.remove = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordovaInstance"])(this, "remove", {}, arguments); };
    Contact.prototype.save = function () {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instanceAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["getPromise"])(function (resolve, reject) {
                    _this._objectInstance.save(function (contact) {
                        _this._objectInstance = contact;
                        resolve(_this);
                    }, reject);
                });
            }
        })();
    };
    Object.defineProperty(Contact.prototype, "id", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "id"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "id", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "displayName", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "displayName"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "displayName", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "name", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "name"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "name", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "nickname", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "nickname"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "nickname", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "phoneNumbers", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "phoneNumbers"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "phoneNumbers", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "emails", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "emails"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "emails", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "addresses", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "addresses"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "addresses", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "ims", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "ims"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "ims", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "organizations", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "organizations"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "organizations", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "birthday", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "birthday"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "birthday", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "note", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "note"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "note", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "photos", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "photos"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "photos", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "categories", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "categories"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "categories", value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Contact.prototype, "urls", {
        get: function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertyGet"])(this, "urls"); },
        set: function (value) { Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["instancePropertySet"])(this, "urls", value); },
        enumerable: true,
        configurable: true
    });
    return Contact;
}());

var ContactName = /** @class */ (function () {
    function ContactName(formatted, familyName, givenName, middleName, honorificPrefix, honorificSuffix) {
        this.formatted = formatted;
        this.familyName = familyName;
        this.givenName = givenName;
        this.middleName = middleName;
        this.honorificPrefix = honorificPrefix;
        this.honorificSuffix = honorificSuffix;
    }
    return ContactName;
}());

var ContactField = /** @class */ (function () {
    function ContactField(type, value, pref) {
        this.type = type;
        this.value = value;
        this.pref = pref;
    }
    return ContactField;
}());

var ContactAddress = /** @class */ (function () {
    function ContactAddress(pref, type, formatted, streetAddress, locality, region, postalCode, country) {
        this.pref = pref;
        this.type = type;
        this.formatted = formatted;
        this.streetAddress = streetAddress;
        this.locality = locality;
        this.region = region;
        this.postalCode = postalCode;
        this.country = country;
    }
    return ContactAddress;
}());

var ContactOrganization = /** @class */ (function () {
    function ContactOrganization(type, name, department, title, pref) {
        this.type = type;
        this.name = name;
        this.department = department;
        this.title = title;
        this.pref = pref;
    }
    return ContactOrganization;
}());

var ContactFindOptions = /** @class */ (function () {
    function ContactFindOptions(filter, multiple, desiredFields, hasPhoneNumber) {
        this.filter = filter;
        this.multiple = multiple;
        this.desiredFields = desiredFields;
        this.hasPhoneNumber = hasPhoneNumber;
    }
    return ContactFindOptions;
}());

var Contacts = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Contacts, _super);
    function Contacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a single contact.
     * @returns {Contact} Returns a Contact object
     */
    Contacts.prototype.create = function () {
        return new Contact();
    };
    Contacts.prototype.find = function (fields, options) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["getPromise"])(function (resolve, reject) {
                    navigator.contacts.find(fields, function (contacts) {
                        resolve(contacts.map(processContact));
                    }, reject, options);
                });
            }
        })();
    };
    Contacts.prototype.pickContact = function () {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["checkAvailability"])(_this) === true) {
                return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["getPromise"])(function (resolve, reject) {
                    navigator.contacts.pickContact(function (contact) { return resolve(processContact(contact)); }, reject);
                });
            }
        })();
    };
    Contacts.pluginName = "Contacts";
    Contacts.plugin = "cordova-plugin-contacts";
    Contacts.pluginRef = "navigator.contacts";
    Contacts.repo = "https://github.com/apache/cordova-plugin-contacts";
    Contacts.platforms = ["Android", "BlackBerry 10", "Browser", "Firefox OS", "iOS", "Ubuntu", "Windows", "Windows 8", "Windows Phone"];
    Contacts = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([], Contacts);
    return Contacts;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

/**
 * @hidden
 */
function processContact(contact) {
    var newContact = new Contact();
    for (var prop in contact) {
        if (typeof contact[prop] === 'function')
            continue;
        newContact[prop] = contact[prop];
    }
    return newContact;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NvbnRhY3RzL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyx5SEFRTCxVQUFVLEVBQ1gsTUFBTSxvQkFBb0IsQ0FBQzs7SUF1RzFCO1FBQ0UsSUFDRSxpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLEtBQUssSUFBSSxFQUN0RTtZQUNBLElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNwRDtJQUNILENBQUM7SUFHRCx1QkFBSzs7O3NEQUFZO2dCQUNmLElBQU0sVUFBVSxHQUFRLElBQUksT0FBTyxFQUFFLENBQUM7Z0JBQ3RDLEtBQUssSUFBTSxJQUFJLElBQUksS0FBSSxFQUFFO29CQUN2QixJQUFJLElBQUksS0FBSyxJQUFJO3dCQUFFLE9BQU87b0JBQzFCLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQy9CO2dCQUNELE9BQU8sVUFBVSxDQUFDO2FBQ25COzs7SUFHRCx3QkFBTTtJQUtOLHNCQUFJOzs7c0RBQWlCO2dCQUNuQixPQUFPLFVBQVUsQ0FBQyxVQUFDLE9BQWlCLEVBQUUsTUFBZ0I7b0JBQ3BELEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBWTt3QkFDckMsS0FBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUM7d0JBQy9CLE9BQU8sQ0FBQyxLQUFJLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNiLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OzswQkFqRG1CLHVCQUFFOzs7Ozs7MEJBQ0YsZ0NBQVc7Ozs7OzswQkFDWCx5QkFBSTs7Ozs7OzBCQUNKLDZCQUFROzs7Ozs7MEJBQ1IsaUNBQVk7Ozs7OzswQkFDWiwyQkFBTTs7Ozs7OzBCQUNOLDhCQUFTOzs7Ozs7MEJBQ1Qsd0JBQUc7Ozs7OzswQkFDSCxrQ0FBYTs7Ozs7OzBCQUNiLDZCQUFROzs7Ozs7MEJBQ1IseUJBQUk7Ozs7OzswQkFDSiwyQkFBTTs7Ozs7OzBCQUNOLCtCQUFVOzs7Ozs7MEJBQ1YseUJBQUk7Ozs7OztrQkEzRzFCOzs7O0lBNkxFLHFCQUNTLFNBQWtCLEVBQ2xCLFVBQW1CLEVBQ25CLFNBQWtCLEVBQ2xCLFVBQW1CLEVBQ25CLGVBQXdCLEVBQ3hCLGVBQXdCO1FBTHhCLGNBQVMsR0FBVCxTQUFTLENBQVM7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBUztRQUNuQixjQUFTLEdBQVQsU0FBUyxDQUFTO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQVM7UUFDbkIsb0JBQWUsR0FBZixlQUFlLENBQVM7UUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQVM7SUFDOUIsQ0FBQztzQkFwTU47Ozs7SUFvTkUsc0JBQ1MsSUFBYSxFQUNiLEtBQWMsRUFDZCxJQUFjO1FBRmQsU0FBSSxHQUFKLElBQUksQ0FBUztRQUNiLFVBQUssR0FBTCxLQUFLLENBQVM7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFVO0lBQ3BCLENBQUM7dUJBeE5OOzs7O0lBa1BFLHdCQUNTLElBQWMsRUFDZCxJQUFhLEVBQ2IsU0FBa0IsRUFDbEIsYUFBc0IsRUFDdEIsUUFBaUIsRUFDakIsTUFBZSxFQUNmLFVBQW1CLEVBQ25CLE9BQWdCO1FBUGhCLFNBQUksR0FBSixJQUFJLENBQVU7UUFDZCxTQUFJLEdBQUosSUFBSSxDQUFTO1FBQ2IsY0FBUyxHQUFULFNBQVMsQ0FBUztRQUNsQixrQkFBYSxHQUFiLGFBQWEsQ0FBUztRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVM7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFTO1FBQ25CLFlBQU8sR0FBUCxPQUFPLENBQVM7SUFDdEIsQ0FBQzt5QkEzUE47Ozs7SUErUUUsNkJBQ1MsSUFBYSxFQUNiLElBQWEsRUFDYixVQUFtQixFQUNuQixLQUFjLEVBQ2QsSUFBYztRQUpkLFNBQUksR0FBSixJQUFJLENBQVM7UUFDYixTQUFJLEdBQUosSUFBSSxDQUFTO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBUztRQUNuQixVQUFLLEdBQUwsS0FBSyxDQUFTO1FBQ2QsU0FBSSxHQUFKLElBQUksQ0FBVTtJQUNwQixDQUFDOzhCQXJSTjs7OztJQTBTRSw0QkFDUyxNQUFlLEVBQ2YsUUFBa0IsRUFDbEIsYUFBd0IsRUFDeEIsY0FBd0I7UUFIeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUztRQUNmLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsa0JBQWEsR0FBYixhQUFhLENBQVc7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQVU7SUFDOUIsQ0FBQzs2QkEvU047Ozs7SUFxVzhCLDRCQUFpQjs7OztJQUM3Qzs7O09BR0c7SUFDSCx5QkFBTSxHQUFOO1FBQ0UsT0FBTyxJQUFJLE9BQU8sRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFTRCx1QkFBSSxhQUNGLE1BQTBCLEVBQzFCLE9BQTZCOzs7bURBQ1Q7Z0JBQ3BCLE9BQU8sVUFBVSxDQUFDLFVBQUMsT0FBaUIsRUFBRSxNQUFnQjtvQkFDcEQsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3JCLE1BQU0sRUFDTixVQUFDLFFBQWU7d0JBQ2QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDeEMsQ0FBQyxFQUNELE1BQU0sRUFDTixPQUFPLENBQ1IsQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFPRCw4QkFBVzs7O21EQUFxQjtnQkFDOUIsT0FBTyxVQUFVLENBQUMsVUFBQyxPQUFpQixFQUFFLE1BQWdCO29CQUNwRCxTQUFTLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FDNUIsVUFBQyxPQUFZLElBQUssT0FBQSxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQWhDLENBQWdDLEVBQ2xELE1BQU0sQ0FDUCxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO2FBQ0o7Ozs7Ozs7O0lBNUNVLFFBQVEsa0JBQVIsUUFBUTttQkFyV3JCO0VBcVc4QixpQkFBaUI7U0FBbEMsUUFBUTtBQStDckI7O0dBRUc7QUFDSCxTQUFTLGNBQWMsQ0FBQyxPQUFZO0lBQ2xDLElBQU0sVUFBVSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7SUFDakMsS0FBSyxJQUFNLElBQUksSUFBSSxPQUFPLEVBQUU7UUFDMUIsSUFBSSxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxVQUFVO1lBQUUsU0FBUztRQUNsRCxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ2xDO0lBQ0QsT0FBTyxVQUFVLENBQUM7QUFDcEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvcmRvdmFDaGVjayxcbiAgQ29yZG92YUluc3RhbmNlLFxuICBJbnN0YW5jZUNoZWNrLFxuICBJbnN0YW5jZVByb3BlcnR5LFxuICBJb25pY05hdGl2ZVBsdWdpbixcbiAgUGx1Z2luLFxuICBjaGVja0F2YWlsYWJpbGl0eSxcbiAgZ2V0UHJvbWlzZVxufSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55LCBuYXZpZ2F0b3I6IGFueTtcblxuZXhwb3J0IHR5cGUgQ29udGFjdEZpZWxkVHlwZSA9XG4gIHwgJyonXG4gIHwgJ2FkZHJlc3NlcydcbiAgfCAnYmlydGhkYXknXG4gIHwgJ2NhdGVnb3JpZXMnXG4gIHwgJ2NvdW50cnknXG4gIHwgJ2RlcGFydG1lbnQnXG4gIHwgJ2Rpc3BsYXlOYW1lJ1xuICB8ICdlbWFpbHMnXG4gIHwgJ25hbWUuZmFtaWx5TmFtZSdcbiAgfCAnbmFtZS5mb3JtYXR0ZWQnXG4gIHwgJ25hbWUuZ2l2ZW5OYW1lJ1xuICB8ICduYW1lLmhvbm9yaWZpY1ByZWZpeCdcbiAgfCAnbmFtZS5ob25vcmlmaWNTdWZmaXgnXG4gIHwgJ2lkJ1xuICB8ICdpbXMnXG4gIHwgJ2xvY2FsaXR5J1xuICB8ICduYW1lLm1pZGRsZU5hbWUnXG4gIHwgJ25hbWUnXG4gIHwgJ25pY2tuYW1lJ1xuICB8ICdub3RlJ1xuICB8ICdvcmdhbml6YXRpb25zJ1xuICB8ICdwaG9uZU51bWJlcnMnXG4gIHwgJ3Bob3RvcydcbiAgfCAncG9zdGFsQ29kZSdcbiAgfCAncmVnaW9uJ1xuICB8ICdzdHJlZXRBZGRyZXNzJ1xuICB8ICd0aXRsZSdcbiAgfCAndXJscyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RQcm9wZXJ0aWVzIHtcbiAgLyoqIEEgZ2xvYmFsbHkgdW5pcXVlIGlkZW50aWZpZXIuICovXG4gIGlkPzogc3RyaW5nO1xuXG4gIC8qKiBBIGdsb2JhbGx5IHVuaXF1ZSBpZGVudGlmaWVyIG9uIEFuZHJvaWQuICovXG4gIHJhd0lkPzogc3RyaW5nO1xuXG4gIC8qKiBUaGUgbmFtZSBvZiB0aGlzIENvbnRhY3QsIHN1aXRhYmxlIGZvciBkaXNwbGF5IHRvIGVuZCB1c2Vycy4gKi9cbiAgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG5cbiAgLyoqIEFuIG9iamVjdCBjb250YWluaW5nIGFsbCBjb21wb25lbnRzIG9mIGEgcGVyc29ucyBuYW1lLiAqL1xuICBuYW1lPzogSUNvbnRhY3ROYW1lO1xuXG4gIC8qKiBBIGNhc3VhbCBuYW1lIGJ5IHdoaWNoIHRvIGFkZHJlc3MgdGhlIGNvbnRhY3QuICovXG4gIG5pY2tuYW1lPzogc3RyaW5nO1xuXG4gIC8qKiBBbiBhcnJheSBvZiBhbGwgdGhlIGNvbnRhY3QncyBwaG9uZSBudW1iZXJzLiAqL1xuICBwaG9uZU51bWJlcnM/OiBJQ29udGFjdEZpZWxkW107XG5cbiAgLyoqIEFuIGFycmF5IG9mIGFsbCB0aGUgY29udGFjdCdzIGVtYWlsIGFkZHJlc3Nlcy4gKi9cbiAgZW1haWxzPzogSUNvbnRhY3RGaWVsZFtdO1xuXG4gIC8qKiBBbiBhcnJheSBvZiBhbGwgdGhlIGNvbnRhY3QncyBhZGRyZXNzZXMuICovXG4gIGFkZHJlc3Nlcz86IElDb250YWN0QWRkcmVzc1tdO1xuXG4gIC8qKiBBbiBhcnJheSBvZiBhbGwgdGhlIGNvbnRhY3QncyBJTSBhZGRyZXNzZXMuICovXG4gIGltcz86IElDb250YWN0RmllbGRbXTtcblxuICAvKiogQW4gYXJyYXkgb2YgYWxsIHRoZSBjb250YWN0J3Mgb3JnYW5pemF0aW9ucy4gKi9cbiAgb3JnYW5pemF0aW9ucz86IElDb250YWN0T3JnYW5pemF0aW9uW107XG5cbiAgLyoqIFRoZSBiaXJ0aGRheSBvZiB0aGUgY29udGFjdC4gKi9cbiAgYmlydGhkYXk/OiBEYXRlO1xuXG4gIC8qKiBBIG5vdGUgYWJvdXQgdGhlIGNvbnRhY3QuICovXG4gIG5vdGU/OiBzdHJpbmc7XG5cbiAgLyoqIEFuIGFycmF5IG9mIHRoZSBjb250YWN0J3MgcGhvdG9zLiAqL1xuICBwaG90b3M/OiBJQ29udGFjdEZpZWxkW107XG5cbiAgLyoqIEFuIGFycmF5IG9mIGFsbCB0aGUgdXNlci1kZWZpbmVkIGNhdGVnb3JpZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250YWN0LiAqL1xuICBjYXRlZ29yaWVzPzogSUNvbnRhY3RGaWVsZFtdO1xuXG4gIC8qKiBBbiBhcnJheSBvZiB3ZWIgcGFnZXMgYXNzb2NpYXRlZCB3aXRoIHRoZSBjb250YWN0LiAqL1xuICB1cmxzPzogSUNvbnRhY3RGaWVsZFtdO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3QgaW1wbGVtZW50cyBJQ29udGFjdFByb3BlcnRpZXMge1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGlkOiBzdHJpbmc7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgZGlzcGxheU5hbWU6IHN0cmluZztcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBuYW1lOiBJQ29udGFjdE5hbWU7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbmlja25hbWU6IHN0cmluZztcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBwaG9uZU51bWJlcnM6IElDb250YWN0RmllbGRbXTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBlbWFpbHM6IElDb250YWN0RmllbGRbXTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBhZGRyZXNzZXM6IElDb250YWN0QWRkcmVzc1tdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGltczogSUNvbnRhY3RGaWVsZFtdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIG9yZ2FuaXphdGlvbnM6IElDb250YWN0T3JnYW5pemF0aW9uW107XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgYmlydGhkYXk6IERhdGU7XG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgbm90ZTogc3RyaW5nO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHBob3RvczogSUNvbnRhY3RGaWVsZFtdO1xuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGNhdGVnb3JpZXM6IElDb250YWN0RmllbGRbXTtcbiAgQEluc3RhbmNlUHJvcGVydHkoKSB1cmxzOiBJQ29udGFjdEZpZWxkW107XG4gIHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnk7XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGlmIChcbiAgICAgIGNoZWNrQXZhaWxhYmlsaXR5KCduYXZpZ2F0b3IuY29udGFjdHMnLCAnY3JlYXRlJywgJ0NvbnRhY3RzJykgPT09IHRydWVcbiAgICApIHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gbmF2aWdhdG9yLmNvbnRhY3RzLmNyZWF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnN0YW5jZUNoZWNrKClcbiAgY2xvbmUoKTogQ29udGFjdCB7XG4gICAgY29uc3QgbmV3Q29udGFjdDogYW55ID0gbmV3IENvbnRhY3QoKTtcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gdGhpcykge1xuICAgICAgaWYgKHByb3AgPT09ICdpZCcpIHJldHVybjtcbiAgICAgIG5ld0NvbnRhY3RbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgIH1cbiAgICByZXR1cm4gbmV3Q29udGFjdDtcbiAgfVxuXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxuICByZW1vdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICBASW5zdGFuY2VDaGVjaygpXG4gIHNhdmUoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gZ2V0UHJvbWlzZSgocmVzb2x2ZTogRnVuY3Rpb24sIHJlamVjdDogRnVuY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlLnNhdmUoKGNvbnRhY3Q6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IGNvbnRhY3Q7XG4gICAgICAgIHJlc29sdmUodGhpcyk7XG4gICAgICB9LCByZWplY3QpO1xuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0RXJyb3Ige1xuICAvKiogRXJyb3IgY29kZSAqL1xuICBjb2RlOiBudW1iZXI7XG4gIC8qKiBFcnJvciBtZXNzYWdlICovXG4gIG1lc3NhZ2U6IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IENvbnRhY3RFcnJvcjoge1xuICBuZXcgKGNvZGU6IG51bWJlcik6IElDb250YWN0RXJyb3I7XG4gIFVOS05PV05fRVJST1I6IG51bWJlcjtcbiAgSU5WQUxJRF9BUkdVTUVOVF9FUlJPUjogbnVtYmVyO1xuICBUSU1FT1VUX0VSUk9SOiBudW1iZXI7XG4gIFBFTkRJTkdfT1BFUkFUSU9OX0VSUk9SOiBudW1iZXI7XG4gIElPX0VSUk9SOiBudW1iZXI7XG4gIE5PVF9TVVBQT1JURURfRVJST1I6IG51bWJlcjtcbiAgUEVSTUlTU0lPTl9ERU5JRURfRVJST1I6IG51bWJlcjtcbn07XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3ROYW1lIHtcbiAgLyoqIFRoZSBjb21wbGV0ZSBuYW1lIG9mIHRoZSBjb250YWN0LiAqL1xuICBmb3JtYXR0ZWQ/OiBzdHJpbmc7XG4gIC8qKiBUaGUgY29udGFjdCdzIGZhbWlseSBuYW1lLiAqL1xuICBmYW1pbHlOYW1lPzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyBnaXZlbiBuYW1lLiAqL1xuICBnaXZlbk5hbWU/OiBzdHJpbmc7XG4gIC8qKiBUaGUgY29udGFjdCdzIG1pZGRsZSBuYW1lLiAqL1xuICBtaWRkbGVOYW1lPzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyBwcmVmaXggKGV4YW1wbGUgTXIuIG9yIERyLikgKi9cbiAgaG9ub3JpZmljUHJlZml4Pzogc3RyaW5nO1xuICAvKiogVGhlIGNvbnRhY3QncyBzdWZmaXggKGV4YW1wbGUgRXNxLikuICovXG4gIGhvbm9yaWZpY1N1ZmZpeD86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250YWN0TmFtZSBpbXBsZW1lbnRzIElDb250YWN0TmFtZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBmb3JtYXR0ZWQ/OiBzdHJpbmcsXG4gICAgcHVibGljIGZhbWlseU5hbWU/OiBzdHJpbmcsXG4gICAgcHVibGljIGdpdmVuTmFtZT86IHN0cmluZyxcbiAgICBwdWJsaWMgbWlkZGxlTmFtZT86IHN0cmluZyxcbiAgICBwdWJsaWMgaG9ub3JpZmljUHJlZml4Pzogc3RyaW5nLFxuICAgIHB1YmxpYyBob25vcmlmaWNTdWZmaXg/OiBzdHJpbmdcbiAgKSB7fVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWN0RmllbGQge1xuICAvKiogQSBzdHJpbmcgdGhhdCBpbmRpY2F0ZXMgd2hhdCB0eXBlIG9mIGZpZWxkIHRoaXMgaXMsIGhvbWUgZm9yIGV4YW1wbGUuICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiBUaGUgdmFsdWUgb2YgdGhlIGZpZWxkLCBzdWNoIGFzIGEgcGhvbmUgbnVtYmVyIG9yIGVtYWlsIGFkZHJlc3MuICovXG4gIHZhbHVlPzogc3RyaW5nO1xuICAvKiogU2V0IHRvIHRydWUgaWYgdGhpcyBDb250YWN0RmllbGQgY29udGFpbnMgdGhlIHVzZXIncyBwcmVmZXJyZWQgdmFsdWUuICovXG4gIHByZWY/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIEBoaWRkZW5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRhY3RGaWVsZCBpbXBsZW1lbnRzIElDb250YWN0RmllbGQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgdHlwZT86IHN0cmluZyxcbiAgICBwdWJsaWMgdmFsdWU/OiBzdHJpbmcsXG4gICAgcHVibGljIHByZWY/OiBib29sZWFuXG4gICkge31cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdEFkZHJlc3Mge1xuICAvKiogU2V0IHRvIHRydWUgaWYgdGhpcyBDb250YWN0QWRkcmVzcyBjb250YWlucyB0aGUgdXNlcidzIHByZWZlcnJlZCB2YWx1ZS4gKi9cbiAgcHJlZj86IGJvb2xlYW47XG4gIC8qKiBBIHN0cmluZyBpbmRpY2F0aW5nIHdoYXQgdHlwZSBvZiBmaWVsZCB0aGlzIGlzLCBob21lIGZvciBleGFtcGxlLiAqL1xuICB0eXBlPzogc3RyaW5nO1xuICAvKiogVGhlIGZ1bGwgYWRkcmVzcyBmb3JtYXR0ZWQgZm9yIGRpc3BsYXkuICovXG4gIGZvcm1hdHRlZD86IHN0cmluZztcbiAgLyoqIFRoZSBmdWxsIHN0cmVldCBhZGRyZXNzLiAqL1xuICBzdHJlZXRBZGRyZXNzPzogc3RyaW5nO1xuICAvKiogVGhlIGNpdHkgb3IgbG9jYWxpdHkuICovXG4gIGxvY2FsaXR5Pzogc3RyaW5nO1xuICAvKiogVGhlIHN0YXRlIG9yIHJlZ2lvbi4gKi9cbiAgcmVnaW9uPzogc3RyaW5nO1xuICAvKiogVGhlIHppcCBjb2RlIG9yIHBvc3RhbCBjb2RlLiAqL1xuICBwb3N0YWxDb2RlPzogc3RyaW5nO1xuICAvKiogVGhlIGNvdW50cnkgbmFtZS4gKi9cbiAgY291bnRyeT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb250YWN0QWRkcmVzcyBpbXBsZW1lbnRzIElDb250YWN0QWRkcmVzcyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBwcmVmPzogYm9vbGVhbixcbiAgICBwdWJsaWMgdHlwZT86IHN0cmluZyxcbiAgICBwdWJsaWMgZm9ybWF0dGVkPzogc3RyaW5nLFxuICAgIHB1YmxpYyBzdHJlZXRBZGRyZXNzPzogc3RyaW5nLFxuICAgIHB1YmxpYyBsb2NhbGl0eT86IHN0cmluZyxcbiAgICBwdWJsaWMgcmVnaW9uPzogc3RyaW5nLFxuICAgIHB1YmxpYyBwb3N0YWxDb2RlPzogc3RyaW5nLFxuICAgIHB1YmxpYyBjb3VudHJ5Pzogc3RyaW5nXG4gICkge31cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFjdE9yZ2FuaXphdGlvbiB7XG4gIC8qKiBTZXQgdG8gdHJ1ZSBpZiB0aGlzIENvbnRhY3RPcmdhbml6YXRpb24gY29udGFpbnMgdGhlIHVzZXIncyBwcmVmZXJyZWQgdmFsdWUuICovXG4gIHByZWY/OiBib29sZWFuO1xuICAvKiogQSBzdHJpbmcgdGhhdCBpbmRpY2F0ZXMgd2hhdCB0eXBlIG9mIGZpZWxkIHRoaXMgaXMsIGhvbWUgZm9yIGV4YW1wbGUuICovXG4gIHR5cGU/OiBzdHJpbmc7XG4gIC8qKiBUaGUgbmFtZSBvZiB0aGUgb3JnYW5pemF0aW9uLiAqL1xuICBuYW1lPzogc3RyaW5nO1xuICAvKiogVGhlIGRlcGFydG1lbnQgdGhlIGNvbnRyYWN0IHdvcmtzIGZvci4gKi9cbiAgZGVwYXJ0bWVudD86IHN0cmluZztcbiAgLyoqIFRoZSBjb250YWN0J3MgdGl0bGUgYXQgdGhlIG9yZ2FuaXphdGlvbi4gKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ29udGFjdE9yZ2FuaXphdGlvbiBpbXBsZW1lbnRzIElDb250YWN0T3JnYW5pemF0aW9uIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHR5cGU/OiBzdHJpbmcsXG4gICAgcHVibGljIG5hbWU/OiBzdHJpbmcsXG4gICAgcHVibGljIGRlcGFydG1lbnQ/OiBzdHJpbmcsXG4gICAgcHVibGljIHRpdGxlPzogc3RyaW5nLFxuICAgIHB1YmxpYyBwcmVmPzogYm9vbGVhblxuICApIHt9XG59XG5cbi8qKiBTZWFyY2ggb3B0aW9ucyB0byBmaWx0ZXIgbmF2aWdhdG9yLmNvbnRhY3RzLiAgKi9cbmV4cG9ydCBpbnRlcmZhY2UgSUNvbnRhY3RGaW5kT3B0aW9ucyB7XG4gIC8qKiBUaGUgc2VhcmNoIHN0cmluZyB1c2VkIHRvIGZpbmQgbmF2aWdhdG9yLmNvbnRhY3RzLiAqL1xuICBmaWx0ZXI/OiBzdHJpbmc7XG4gIC8qKiBEZXRlcm1pbmVzIGlmIHRoZSBmaW5kIG9wZXJhdGlvbiByZXR1cm5zIG11bHRpcGxlIG5hdmlnYXRvci5jb250YWN0cy4gRGVmYXVsdHMgdG8gZmFsc2UuICovXG4gIG11bHRpcGxlPzogYm9vbGVhbjtcbiAgLyoqIENvbnRhY3QgZmllbGRzIHRvIGJlIHJldHVybmVkIGJhY2suIElmIHNwZWNpZmllZCwgdGhlIHJlc3VsdGluZyBDb250YWN0IG9iamVjdCBvbmx5IGZlYXR1cmVzIHZhbHVlcyBmb3IgdGhlc2UgZmllbGRzLiAqL1xuICBkZXNpcmVkRmllbGRzPzogc3RyaW5nW107XG4gIC8qKlxuICAgKiAoQW5kcm9pZCBvbmx5KTogRmlsdGVycyB0aGUgc2VhcmNoIHRvIG9ubHkgcmV0dXJuIGNvbnRhY3RzIHdpdGggYSBwaG9uZSBudW1iZXIgaW5mb3JtZWQuXG4gICAqL1xuICBoYXNQaG9uZU51bWJlcj86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQGhpZGRlblxuICovXG5leHBvcnQgY2xhc3MgQ29udGFjdEZpbmRPcHRpb25zIGltcGxlbWVudHMgSUNvbnRhY3RGaW5kT3B0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBmaWx0ZXI/OiBzdHJpbmcsXG4gICAgcHVibGljIG11bHRpcGxlPzogYm9vbGVhbixcbiAgICBwdWJsaWMgZGVzaXJlZEZpZWxkcz86IHN0cmluZ1tdLFxuICAgIHB1YmxpYyBoYXNQaG9uZU51bWJlcj86IGJvb2xlYW5cbiAgKSB7fVxufVxuXG4vKipcbiAqIEBuYW1lIENvbnRhY3RzXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFjY2VzcyBhbmQgbWFuYWdlIENvbnRhY3RzIG9uIHRoZSBkZXZpY2UuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqIEB1c2FnZVxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IENvbnRhY3RzLCBDb250YWN0LCBDb250YWN0RmllbGQsIENvbnRhY3ROYW1lIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb250YWN0cy9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udGFjdHM6IENvbnRhY3RzKSB7IH1cbiAqXG4gKiBsZXQgY29udGFjdDogQ29udGFjdCA9IHRoaXMuY29udGFjdHMuY3JlYXRlKCk7XG4gKlxuICogY29udGFjdC5uYW1lID0gbmV3IENvbnRhY3ROYW1lKG51bGwsICdTbWl0aCcsICdKb2huJyk7XG4gKiBjb250YWN0LnBob25lTnVtYmVycyA9IFtuZXcgQ29udGFjdEZpZWxkKCdtb2JpbGUnLCAnNjQ3MTIzNDU2NycpXTtcbiAqIGNvbnRhY3Quc2F2ZSgpLnRoZW4oXG4gKiAgICgpID0+IGNvbnNvbGUubG9nKCdDb250YWN0IHNhdmVkIScsIGNvbnRhY3QpLFxuICogICAoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignRXJyb3Igc2F2aW5nIGNvbnRhY3QuJywgZXJyb3IpXG4gKiApO1xuICpcbiAqIGBgYFxuICogQGNsYXNzZXNcbiAqIENvbnRhY3RcbiAqIEBpbnRlcmZhY2VzXG4gKiBJQ29udGFjdFByb3BlcnRpZXNcbiAqIElDb250YWN0RXJyb3JcbiAqIElDb250YWN0TmFtZVxuICogSUNvbnRhY3RGaWVsZFxuICogSUNvbnRhY3RBZGRyZXNzXG4gKiBJQ29udGFjdE9yZ2FuaXphdGlvblxuICogSUNvbnRhY3RGaW5kT3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0NvbnRhY3RzJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY29udGFjdHMnLFxuICBwbHVnaW5SZWY6ICduYXZpZ2F0b3IuY29udGFjdHMnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jb250YWN0cycsXG4gIHBsYXRmb3JtczogW1xuICAgICdBbmRyb2lkJyxcbiAgICAnQmxhY2tCZXJyeSAxMCcsXG4gICAgJ0Jyb3dzZXInLFxuICAgICdGaXJlZm94IE9TJyxcbiAgICAnaU9TJyxcbiAgICAnVWJ1bnR1JyxcbiAgICAnV2luZG93cycsXG4gICAgJ1dpbmRvd3MgOCcsXG4gICAgJ1dpbmRvd3MgUGhvbmUnXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdHMgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcmVhdGUgYSBzaW5nbGUgY29udGFjdC5cbiAgICogQHJldHVybnMge0NvbnRhY3R9IFJldHVybnMgYSBDb250YWN0IG9iamVjdFxuICAgKi9cbiAgY3JlYXRlKCk6IENvbnRhY3Qge1xuICAgIHJldHVybiBuZXcgQ29udGFjdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlYXJjaCBmb3IgY29udGFjdHMgaW4gdGhlIENvbnRhY3RzIGxpc3QuXG4gICAqIEBwYXJhbSB7Q29udGFjdEZpZWxkVHlwZVtdfSBmaWVsZHMgQ29udGFjdCBmaWVsZHMgdG8gYmUgdXNlZCBhcyBhIHNlYXJjaCBxdWFsaWZpZXJcbiAgICogQHBhcmFtIHtJQ29udGFjdEZpbmRPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9uYWwgb3B0aW9ucyBmb3IgdGhlIHF1ZXJ5XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbnRhY3RbXT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgc2VhcmNoIHJlc3VsdHMgKGFuIGFycmF5IG9mIENvbnRhY3Qgb2JqZWN0cylcbiAgICovXG4gIEBDb3Jkb3ZhQ2hlY2soKVxuICBmaW5kKFxuICAgIGZpZWxkczogQ29udGFjdEZpZWxkVHlwZVtdLFxuICAgIG9wdGlvbnM/OiBJQ29udGFjdEZpbmRPcHRpb25zXG4gICk6IFByb21pc2U8Q29udGFjdFtdPiB7XG4gICAgcmV0dXJuIGdldFByb21pc2UoKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICBuYXZpZ2F0b3IuY29udGFjdHMuZmluZChcbiAgICAgICAgZmllbGRzLFxuICAgICAgICAoY29udGFjdHM6IGFueVtdKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZShjb250YWN0cy5tYXAocHJvY2Vzc0NvbnRhY3QpKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0LFxuICAgICAgICBvcHRpb25zXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhIHNpbmdsZSBDb250YWN0LlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDb250YWN0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBzZWxlY3RlZCBDb250YWN0XG4gICAqL1xuICBAQ29yZG92YUNoZWNrKClcbiAgcGlja0NvbnRhY3QoKTogUHJvbWlzZTxDb250YWN0PiB7XG4gICAgcmV0dXJuIGdldFByb21pc2UoKHJlc29sdmU6IEZ1bmN0aW9uLCByZWplY3Q6IEZ1bmN0aW9uKSA9PiB7XG4gICAgICBuYXZpZ2F0b3IuY29udGFjdHMucGlja0NvbnRhY3QoXG4gICAgICAgIChjb250YWN0OiBhbnkpID0+IHJlc29sdmUocHJvY2Vzc0NvbnRhY3QoY29udGFjdCkpLFxuICAgICAgICByZWplY3RcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NDb250YWN0KGNvbnRhY3Q6IGFueSkge1xuICBjb25zdCBuZXdDb250YWN0ID0gbmV3IENvbnRhY3QoKTtcbiAgZm9yIChjb25zdCBwcm9wIGluIGNvbnRhY3QpIHtcbiAgICBpZiAodHlwZW9mIGNvbnRhY3RbcHJvcF0gPT09ICdmdW5jdGlvbicpIGNvbnRpbnVlO1xuICAgIG5ld0NvbnRhY3RbcHJvcF0gPSBjb250YWN0W3Byb3BdO1xuICB9XG4gIHJldHVybiBuZXdDb250YWN0O1xufVxuIl19

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/people/components/people/people.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/people/components/people/people.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-menu-button size=\"small\" autoHide=\"true\"></ion-menu-button>\r\n  </ion-buttons>\r\n</ion-toolbar>\r\n\r\n<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  \r\n\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"header no-border has-toolbar\">\r\n      <div class=\"title\">\r\n        {{ 'people-component.title' | translate }}\r\n      </div>\r\n      <div class=\"options\">\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"openSearch = !openSearch\">\r\n          <ion-icon mode=\"md\" name=\"search\"></ion-icon>\r\n        </ion-button>\r\n        <ion-button fill=\"clear\" size=\"small\" color=\"medium\" (click)=\"gotoinvitechatuser()\">\r\n          <ion-icon mode=\"md\" name=\"chatboxes\"></ion-icon>\r\n        </ion-button>\r\n        </div>\r\n    </div>\r\n    <app-tab-menu [tabs]=\"views\" (event)=\"showList($event)\"></app-tab-menu>\r\n    <app-search-bar *ngIf=\"openSearch\" (event)=\"onSearch($event)\"></app-search-bar>\r\n\r\n    <div class=\"wrapper\" *ngIf=\"groupedPeople.length > 0\">\r\n      <div class=\"content-scroll\" #content>\r\n        <div class=\"group\" *ngFor=\"let group of groupedPeople\">\r\n          <!-- <div class=\"title\" [id]=\"group.letter\">{{ group.letter }}</div> --> <!--kjm-->\r\n          <div class=\"contact\" *ngFor=\"let contact of group.people; let i = index\">\r\n            <div class=\"image\" [image-loader]=\"contact.photoURL\" (click)=\"open(contact.uid)\"></div>\r\n            <div class=\"detail\" (click)=\"open(contact.uid)\">\r\n              <div class=\"name\">{{ contact.displayName }}</div>\r\n              <div class=\"city\" *ngIf=\"contact.town\">{{ contact.town }}</div>\r\n              <div class=\"country\" *ngIf=\"contact.country\">{{ contact.country }}</div>\r\n            </div>\r\n\r\n            <div class=\"more\">\r\n              <ion-button *ngIf=\"isFriend(contact.uid)\" size=\"small\" fill=\"clear\" shape=\"round\" (click)=\"openMore(contact)\">\r\n                <ion-icon name=\"more\"></ion-icon>\r\n              </ion-button>\r\n              <ion-button *ngIf=\"!isFriend(contact.uid)\" class=\"follow-btn\" size=\"small\" shape=\"round\" (click)=\"manage(contact)\">\r\n                {{ 'people-component.follow' | translate }}\r\n              </ion-button>\r\n            </div>\r\n\r\n            <a hidden #callNumber href=\"tel:+{{ contact.mobile || contact.phone }}\"></a>\r\n          </div>\r\n        </div>\r\n\r\n\t\t\t\t<div\r\n\t\t\t\t\tclass=\"group\"\r\n\t\t\t\t\t*ngFor=\"let item of contactlist; let i = index\"\r\n\t\t\t\t>\r\n\t\t\t\t\t<div class=\"contact\">\r\n\t\t\t\t\t\t<div class=\"contactimage\" [routerLink]=\"['#']\">\r\n\t\t\t\t\t\t\t<img src=\"/assets/imgs/nonuser.png\" />\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"detail\">\r\n\t\t\t\t\t\t\t<div class=\"name\">{{ item.displayName }}</div>\r\n\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\tclass=\"nativecontactphonenumber\"\r\n\t\t\t\t\t\t\t\t*ngIf=\"item.phoneNumbers\"\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t{{ item.phoneNumbers }}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\r\n\r\n            <div class=\"more\">\r\n              <ion-button class=\"SocialShare-btn\" size=\"small\" color=\"secondary\" shape=\"round\" (click)=\"socialshare()\">\r\n                {{ 'people-component.SocialShare' | translate }}\r\n              </ion-button>\r\n            </div>\r\n\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n        \r\n      </div>\r\n\r\n      <div class=\"link-alpha\">\r\n        <li class=\"alpha-link-item\" *ngFor=\"let item of alpha\" (click)=\"scrollTo(item)\">{{ item }}</li>\r\n      </div>\r\n    </div>\r\n    <app-no-data *ngIf=\"groupedPeople.length === 0\"> </app-no-data>\r\n  </div>\r\n</ion-content>\r\n\r\n<app-spinner *ngIf=\"loading\"></app-spinner>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/pages/people/components/person/person.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/pages/people/components/person/person.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content scrollX=\"false\" scrollY=\"false\">\r\n  <div class=\"content-wrapper\">\r\n    <div class=\"wrapper\">\r\n      <div class=\"content-scroll\" *ngIf=\"user\">\r\n        <!-- profile image -->\r\n        <div class=\"profile-image\" [image-loader]=\"user.photoURL\">\r\n          <!-- show if following -->\r\n          <ion-fab slot=\"fixed\" *ngIf=\"isFriend\">\r\n            <ion-fab-button>\r\n              <ion-icon name=\"add\"></ion-icon>\r\n            </ion-fab-button>\r\n            <ion-fab-list side=\"bottom\">\r\n              <ion-fab-button>\r\n                <ion-icon (click)=\"call()\" src=\"assets/icons/phone-call.svg\"></ion-icon>\r\n              </ion-fab-button>\r\n              <ion-fab-button>\r\n                <ion-icon (click)=\"chat()\" src=\"assets/icons/message-square.svg\"></ion-icon>\r\n              </ion-fab-button>\r\n              <ion-fab-button>\r\n                <ion-icon (click)=\"share()\" src=\"assets/icons/share-2.svg\"></ion-icon>\r\n              </ion-fab-button>\r\n            </ion-fab-list>\r\n          </ion-fab>\r\n\r\n          <!-- show if not following -->\r\n          <ion-button *ngIf=\"!isFriend\" class=\"follow\" (click)=\"manage()\">{{ 'person-component.follow' | translate }}</ion-button>\r\n        </div>\r\n\r\n        <!-- profile details -->\r\n        <div class=\"profile-detail\">\r\n          <div class=\"name\">{{ user.displayName }}</div>\r\n\r\n          <div class=\"country\">{{ user.country }}</div>\r\n\r\n          <div class=\"status\">\r\n            {{\r\n              user.statusMessage ||\r\n                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis maximus ligula, quis luctus neque. Integer eu efficitur urna. Quisque rhoncus non est eu tristique.'\r\n            }}\r\n          </div>\r\n          <div class=\"email\"><ion-icon src=\"assets/icons/mail.svg\"></ion-icon>{{ user.email }}</div>\r\n          <div class=\"phone\">\r\n            <ion-icon src=\"assets/icons/phone.svg\"></ion-icon>{{ user.mobile || user.phone || 'misc.no-data' | translate }}\r\n          </div>\r\n          <div class=\"town\"><ion-icon src=\"assets/icons/map-pin.svg\"></ion-icon>{{ user.town || 'misc.no-data' | translate }}</div>\r\n        </div>\r\n\r\n        <!-- call user with hidden a tag -->\r\n        <a hidden #callNumber href=\"tel:+{{ user.mobile || user.phone }}\"></a>\r\n      </div>\r\n\r\n      <ion-button fill=\"clear\" (click)=\"closeModal()\">\r\n        <ion-icon src=\"assets/icons/x.svg\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/pages/people/components/people/people.component.scss":
/*!******************************************************************!*\
  !*** ./src/pages/people/components/people/people.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n:host .content-wrapper {\n  overflow: hidden;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .content-wrapper .header .title {\n  -webkit-box-align: center;\n          align-items: center;\n}\n:host .content-wrapper .header .title small {\n  font-size: 50%;\n  margin-left: 10px;\n}\n:host .content-wrapper .wrapper {\n  display: -webkit-box;\n  display: flex;\n  height: 100%;\n  overflow: hidden;\n}\n:host .content-wrapper .wrapper .content-scroll {\n  height: 100% !important;\n  width: 100%;\n  overflow: auto;\n}\n:host .content-wrapper .wrapper .content-scroll .group {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n:host .content-wrapper .wrapper .content-scroll .group .title {\n  font-size: 22px;\n  font-weight: 600;\n  padding: 10px 0 5px 30px;\n  text-transform: uppercase;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact {\n  margin: 5px 20px 5px 0;\n  display: -webkit-box;\n  display: flex;\n  padding: 5px 10px 5px 15px;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .image {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-size: cover !important;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .contactimage {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background-size: cover !important;\n  /* 사진 겉에 희미하게 그림자 없애기box-shadow: 1px 1px 12px\n  var(--ion-color-light-shade);*/\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail {\n  padding: 0 10px 0 15px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .name {\n  font-size: 16px;\n  font-weight: 500;\n  padding: 0 0 4px 0;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .job {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n  margin-bottom: 2px;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .city,\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .country {\n  font-size: 11px;\n  font-weight: 400;\n  color: var(--ion-color-medium-shade);\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .detail .country {\n  color: var(--ion-color-primary-shade);\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .more .follow-btn {\n  width: 55px;\n  font-size: 10px;\n}\n:host .content-wrapper .wrapper .content-scroll .group .contact .more .SocialShare-btn {\n  width: 80px;\n  font-size: 10px;\n}\n:host .content-wrapper .wrapper .link-alpha {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  margin-right: 15px;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n:host .content-wrapper .wrapper .link-alpha .alpha-link-item {\n  list-style-type: none;\n  font-size: 11px;\n  margin: 0 0 1px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9wYWdlcy9wZW9wbGUvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2tldmluL0RvY3VtZW50cy9zaW5lbzMvc2luZW9fbWVzc2VuZ2VyL3NyYy9wYWdlcy9wZW9wbGUvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NkO0VBQ0UsZ0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QURDSjtBQ0NNO0VBQ0UseUJBQUE7VUFBQSxtQkFBQTtBRENSO0FDQ1E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QURDVjtBQ0lJO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FERk47QUNHTTtFQUNFLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUREUjtBQ0dRO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0FERFY7QUNHVTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7QUREWjtBQ0lVO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSwwQkFBQTtBREZaO0FDSVk7RUFDRSxXQUFBO0VBQ1AsWUFBQTtFQUNBLGtCQUFBO0VBQ08saUNBQUE7QURGZDtBQ0tZO0VBQ0wsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0E7Z0NBQUE7QURGUDtBQ01ZO0VBQ0Usc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxtQkFBQTtVQUFBLE9BQUE7QURKZDtBQ01jO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QURKaEI7QUNRYztFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUROaEI7QUNTYzs7RUFFRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQ0FBQTtBRFBoQjtBQ1VjO0VBQ0UscUNBQUE7QURSaEI7QUNhYztFQUNFLFdBQUE7RUFDQSxlQUFBO0FEWGhCO0FDYWM7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBRFhoQjtBQ2tCTTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QURoQlI7QUNpQlE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBRGZWIiwiZmlsZSI6InNyYy9wYWdlcy9wZW9wbGUvY29tcG9uZW50cy9wZW9wbGUvcGVvcGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC5oZWFkZXIgLnRpdGxlIHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLmhlYWRlciAudGl0bGUgc21hbGwge1xuICBmb250LXNpemU6IDUwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwge1xuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCAudGl0bGUge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIHBhZGRpbmc6IDEwcHggMCA1cHggMzBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCAuY29udGFjdCB7XG4gIG1hcmdpbjogNXB4IDIwcHggNXB4IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxNXB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmdyb3VwIC5jb250YWN0IC5pbWFnZSB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmdyb3VwIC5jb250YWN0IC5jb250YWN0aW1hZ2Uge1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgLyog7IKs7KeEIOqyieyXkCDtnazrr7jtlZjqsowg6re466a87J6QIOyXhuyVoOq4sGJveC1zaGFkb3c6IDFweCAxcHggMTJweFxuICB2YXIoLS1pb24tY29sb3ItbGlnaHQtc2hhZGUpOyovXG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLmNvbnRhY3QgLmRldGFpbCB7XG4gIHBhZGRpbmc6IDAgMTBweCAwIDE1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDE7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLmNvbnRhY3QgLmRldGFpbCAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZzogMCAwIDRweCAwO1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmdyb3VwIC5jb250YWN0IC5kZXRhaWwgLmpvYiB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLmNvbnRhY3QgLmRldGFpbCAuY2l0eSxcbjpob3N0IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5ncm91cCAuY29udGFjdCAuZGV0YWlsIC5jb3VudHJ5IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLmNvbnRhY3QgLmRldGFpbCAuY291bnRyeSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1zaGFkZSk7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAuZ3JvdXAgLmNvbnRhY3QgLm1vcmUgLmZvbGxvdy1idG4ge1xuICB3aWR0aDogNTVweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLmdyb3VwIC5jb250YWN0IC5tb3JlIC5Tb2NpYWxTaGFyZS1idG4ge1xuICB3aWR0aDogODBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuOmhvc3QgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAubGluay1hbHBoYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbi1yaWdodDogMTVweDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG46aG9zdCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5saW5rLWFscGhhIC5hbHBoYS1saW5rLWl0ZW0ge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgbWFyZ2luOiAwIDAgMXB4IDA7XG59IiwiOmhvc3Qge1xyXG4gIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgc21hbGwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiA1MCU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAud3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLmNvbnRlbnQtc2Nyb2xsIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBcclxuICAgICAgICAuZ3JvdXAge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgICAgLnRpdGxlIHsgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDVweCAzMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5jb250YWN0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMjBweCA1cHggMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDEwcHggNXB4IDE1cHg7XHJcblxyXG4gICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDogNDBweDtcclxuXHRcdFx0XHRcdFx0XHRib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuY29udGFjdGltYWdlIHtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDogNDBweDtcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6IDQwcHg7XHJcblx0XHRcdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdFx0XHRcdFx0XHRcdGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcclxuXHRcdFx0XHRcdFx0XHQvKiDsgqzsp4Qg6rKJ7JeQIO2drOuvuO2VmOqyjCDqt7jrprzsnpAg7JeG7JWg6riwYm94LXNoYWRvdzogMXB4IDFweCAxMnB4XHJcblx0XHRcdFx0XHRcdHZhcigtLWlvbi1jb2xvci1saWdodC1zaGFkZSk7Ki9cclxuXHRcdFx0XHRcdFx0fVxyXG5cclxuICAgICAgICAgICAgLmRldGFpbCB7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4IDAgMTVweDtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgZmxleDogMTtcclxuXHJcbiAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCA0cHggMDtcclxuICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAuam9iIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAuY2l0eSxcclxuICAgICAgICAgICAgICAuY291bnRyeSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXNoYWRlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5tb3JlIHtcclxuICAgICAgICAgICAgICAuZm9sbG93LWJ0biB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTVweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLlNvY2lhbFNoYXJlLWJ0bntcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpbmstYWxwaGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAuYWxwaGEtbGluay1pdGVtIHtcclxuICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDFweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/pages/people/components/people/people.component.ts":
/*!****************************************************************!*\
  !*** ./src/pages/people/components/people/people.component.ts ***!
  \****************************************************************/
/*! exports provided: PeopleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleComponent", function() { return PeopleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/messages/services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _services_people_people_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/people/people.service */ "./src/pages/people/services/people/people.service.ts");
/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../person/person.component */ "./src/pages/people/components/person/person.component.ts");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "./node_modules/@ionic-native/contacts/ngx/index.js");











/**
 * get list of people fro users collection, group them by first letter of their display names.
 * using a href to scroll to category by letter in the user list.
 * you can follow and unfollow users, call and start message
 */
let PeopleComponent = class PeopleComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"] {
    constructor(injector, authService, messageService, peopleService, commonService, contacts, platform) {
        super(injector);
        this.injector = injector;
        this.authService = authService;
        this.messageService = messageService;
        this.peopleService = peopleService;
        this.commonService = commonService;
        this.contacts = contacts;
        this.platform = platform;
        /** group contacts by first letter of their first names */
        this.groupedPeople = [];
        /** stores string array of alphabets */
        this.alpha = [];
        /** stores tabbed views properties */
        this.views = [];
        /** toggles search bar in template */
        this.openSearch = false;
        this.selectedIndex = 0;
        this.contactlist = [];
        this.alpha = this.peopleService.alpha;
        this.views = this.peopleService.views;
        this.fetchDeviceContact();
    }
    /** get currentUser, get users friends ids and get all users from user collection */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = true;
            this.openProfileFromUrl();
            this.currentUser = yield this.authService.getUser();
            this.subscriptions.push(this.peopleService.getFriendIds(this.currentUser.uid).subscribe((ids) => (this.friends = ids)));
            this.subscriptions.push(this.peopleService.getPeople(this.currentUser.uid).subscribe((users) => {
                this.list = users;
                this.loading = false;
                this.showList(this.selectedIndex);
            }, (err) => {
                this.loading = false;
                this.toast(err);
            }));
        });
    }
    fetchDeviceContact() {
        const options = {
            filter: '',
            multiple: true,
            hasPhoneNumber: true
        };
        this.platform.ready().then(() => {
            this.contacts
                .find(['*'], options)
                .then((res) => {
                for (var i = 0; i < res.length; i++) {
                    const contact = res[i];
                    const no = res[i].name.formatted;
                    //						const no = res[i].name.givenName;
                    const phonenumber = res[i].phoneNumbers;
                    if (phonenumber != null) {
                        for (var n = 0; n < phonenumber.length; n++) {
                            var type = phonenumber[n].type;
                            if (type == 'mobile') {
                                var phone = phonenumber[n].value;
                                var mobile;
                                if (phone.slice(0, 1) === '+' ||
                                    phone.slice(0, 1) === '0') {
                                    mobile = phone.replace(/[^a-zA-Z0-9+]/g, '');
                                }
                                else {
                                    var mobile_no = phone.replace(/[^a-zA-Z0-9]/g, '');
                                    mobile = mobile_no;
                                }
                                var contactData = {
                                    displayName: no,
                                    phoneNumbers: mobile
                                };
                                this.contactlist.push(contactData);
                            }
                        }
                    }
                }
                console.log('contactlist >>>', this.contactlist);
            })
                .catch((err) => {
                console.log('err', err);
            });
        });
    }
    /** if you navigate to this page with query params, open person modal and use id in query param to find user details */
    openProfileFromUrl() {
        this.subscriptions.push(this.activatedRoute.queryParams.subscribe((param) => {
            if (param && param.id) {
                this.open(param.id);
            }
        }));
    }
    gotoinvitechatuser() {
        this.router.navigateByUrl('/invite-group');
    }
    /** search list of users by name and regroup into alphabet categories */
    onSearch(val) {
        let people;
        if (val && val.trim() !== '') {
            people = this.list.filter((item) => {
                return item.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1;
            });
        }
        else {
            people = [...this.list];
        }
        this.groupedPeople = this.peopleService.groupPeople(people);
    }
    /** show either friends or all people based on tab selection */
    showList(index) {
        this.selectedIndex = index;
        if (index === 0) {
            this.groupedPeople = this.peopleService.groupPeople(this.list);
        }
        else {
            const friends = this.list.filter((user) => (this.friends && this.friends.length > 0 ? this.friends.includes(user.uid) : null));
            this.groupedPeople = this.peopleService.groupPeople(friends);
        }
    }
    /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
    manage(friend) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (Object(util__WEBPACK_IMPORTED_MODULE_7__["isArray"])(this.friends) && this.friends.includes(friend.uid)) {
                yield this.peopleService.unfollow(friend.uid);
            }
            else {
                yield this.peopleService.follow(friend.uid);
            }
            this.showList(this.selectedIndex);
        });
    }
    isFriend(fid) {
        return Object(util__WEBPACK_IMPORTED_MODULE_7__["isArray"])(this.friends) && this.friends.includes(fid);
    }
    /** open a persons profile */
    open(uid) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.openModal(_person_person_component__WEBPACK_IMPORTED_MODULE_9__["PersonComponent"], uid, 'custom-modal');
            modal.present();
        });
    }
    /** open action sheet with options for a person selection */
    openMore(contact) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const actionSheetCtrl = yield this.actionSheetCtrl.create({
                header: this.translate.instant('other.options'),
                buttons: [
                    {
                        text: this.translate.instant('people-component.unfollow'),
                        handler: () => {
                            this.manage(contact);
                        }
                    },
                    {
                        text: this.translate.instant('people-component.open'),
                        handler: () => {
                            this.open(contact.uid);
                        }
                    },
                    {
                        text: this.translate.instant('people-component.call'),
                        handler: () => {
                            this.commonService.callUser(contact.mobile || contact.phone, this.callNumber);
                        }
                    },
                    {
                        text: this.translate.instant('people-component.chat'),
                        handler: () => {
                            this.messageService.startChat(contact);
                        }
                    },
                    {
                        text: this.translate.instant('other.cancel'),
                        role: 'cancel'
                    }
                ]
            });
            yield actionSheetCtrl.present();
        });
    }
    /** scroll user to user group category */
    scrollTo(item) {
        const element = document.getElementById(item);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        }
    }
    socialshare() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const messageval = ' Join Sineo Messenger for auto-translated messaging ';
            yield this.commonService.share('', '', '', messageval);
            this.closeModal();
        });
    }
};
PeopleComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] },
    { type: _services_people_people_service__WEBPACK_IMPORTED_MODULE_8__["PeopleService"] },
    { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] },
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_10__["Contacts"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], PeopleComponent.prototype, "content", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('callNumber', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], PeopleComponent.prototype, "callNumber", void 0);
PeopleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-people',
        template: __webpack_require__(/*! raw-loader!./people.component.html */ "./node_modules/raw-loader/index.js!./src/pages/people/components/people/people.component.html"),
        providers: [_ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_10__["Contacts"]],
        styles: [__webpack_require__(/*! ./people.component.scss */ "./src/pages/people/components/people/people.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"],
        _services_people_people_service__WEBPACK_IMPORTED_MODULE_8__["PeopleService"],
        src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"],
        _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_10__["Contacts"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
], PeopleComponent);



/***/ }),

/***/ "./src/pages/people/components/person/person.component.scss":
/*!******************************************************************!*\
  !*** ./src/pages/people/components/person/person.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: transparent;\n}\n:host ion-content .content-wrapper {\n  width: 80%;\n  height: 80%;\n  margin: 20% auto;\n  background: var(--ion-color-light);\n  border-radius: 12px;\n  box-shadow: 1px 2px 12px var(--ion-color-dark);\n  overflow: hidden;\n}\n:host ion-content .content-wrapper .wrapper {\n  height: 100%;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll {\n  height: calc(100% - 45px);\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-image {\n  height: 260px;\n  width: 100%;\n  margin: auto;\n  position: relative;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-image ion-fab {\n  position: absolute;\n  right: 10px;\n  bottom: -28px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-image .follow {\n  position: absolute;\n  right: 10px;\n  bottom: -20px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background: var(--ion-color-light);\n  padding: 20px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .name {\n  font-size: 20px;\n  font-weight: 600;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .status {\n  color: var(--ion-color-medium);\n  font-size: 12px;\n  margin: 5px 0;\n  padding: 0 0 15px;\n  border-bottom: 1px solid rgba(var(--ion-color-medium-rgb), 0.4);\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .email,\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .phone,\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .town {\n  font-size: 13px;\n  margin: 2px 0;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .email ion-icon,\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .phone ion-icon,\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .town ion-icon {\n  margin-right: 10px;\n}\n:host ion-content .content-wrapper .wrapper .content-scroll .profile-detail .country {\n  color: var(--ion-color-medium);\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rZXZpbi9Eb2N1bWVudHMvc2luZW8zL3NpbmVvX21lc3Nlbmdlci9zcmMvcGFnZXMvcGVvcGxlL2NvbXBvbmVudHMvcGVyc29uL3BlcnNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9wYWdlcy9wZW9wbGUvY29tcG9uZW50cy9wZXJzb24vcGVyc29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UseUJBQUE7QUNBSjtBREVJO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7RUFDQSw4Q0FBQTtFQUNBLGdCQUFBO0FDQU47QURDTTtFQUNFLFlBQUE7QUNDUjtBREFRO0VBQ0UseUJBQUE7QUNFVjtBREFVO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFWjtBRERZO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQ0dkO0FERFk7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDR2Q7QURDVTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQ0NaO0FEQVk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNFZDtBREFZO0VBQ0UsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0RBQUE7QUNFZDtBREFZOzs7RUFHRSxlQUFBO0VBQ0EsYUFBQTtBQ0VkO0FERGM7OztFQUNFLGtCQUFBO0FDS2hCO0FERlk7RUFDRSw4QkFBQTtFQUNBLGVBQUE7QUNJZCIsImZpbGUiOiJzcmMvcGFnZXMvcGVvcGxlL2NvbXBvbmVudHMvcGVyc29uL3BlcnNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBpb24tY29udGVudCB7XHJcbiAgICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgbWFyZ2luOiAyMCUgYXV0bztcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICAgICAgYm94LXNoYWRvdzogMXB4IDJweCAxMnB4IHZhcigtLWlvbi1jb2xvci1kYXJrKTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLndyYXBwZXIge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAuY29udGVudC1zY3JvbGwge1xyXG4gICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NXB4KTtcclxuXHJcbiAgICAgICAgICAucHJvZmlsZS1pbWFnZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjYwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgaW9uLWZhYiB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTI4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZvbGxvdyB7XHJcbiAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIGJvdHRvbTogLTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucHJvZmlsZS1kZXRhaWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgMCAxNXB4O1xyXG4gICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLWlvbi1jb2xvci1tZWRpdW0tcmdiKSwgMC40KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZW1haWwsXHJcbiAgICAgICAgICAgIC5waG9uZSxcclxuICAgICAgICAgICAgLnRvd24ge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvdW50cnkge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciB7XG4gIHdpZHRoOiA4MCU7XG4gIGhlaWdodDogODAlO1xuICBtYXJnaW46IDIwJSBhdXRvO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAxcHggMnB4IDEycHggdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA0NXB4KTtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWltYWdlIHtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnByb2ZpbGUtaW1hZ2UgaW9uLWZhYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogLTI4cHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1pbWFnZSAuZm9sbG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAtMjBweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1kZXRhaWwgLm5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1kZXRhaWwgLnN0YXR1cyB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW46IDVweCAwO1xuICBwYWRkaW5nOiAwIDAgMTVweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEodmFyKC0taW9uLWNvbG9yLW1lZGl1bS1yZ2IpLCAwLjQpO1xufVxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnByb2ZpbGUtZGV0YWlsIC5lbWFpbCxcbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWRldGFpbCAucGhvbmUsXG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1kZXRhaWwgLnRvd24ge1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbjogMnB4IDA7XG59XG46aG9zdCBpb24tY29udGVudCAuY29udGVudC13cmFwcGVyIC53cmFwcGVyIC5jb250ZW50LXNjcm9sbCAucHJvZmlsZS1kZXRhaWwgLmVtYWlsIGlvbi1pY29uLFxuOmhvc3QgaW9uLWNvbnRlbnQgLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlciAuY29udGVudC1zY3JvbGwgLnByb2ZpbGUtZGV0YWlsIC5waG9uZSBpb24taWNvbixcbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWRldGFpbCAudG93biBpb24taWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbjpob3N0IGlvbi1jb250ZW50IC5jb250ZW50LXdyYXBwZXIgLndyYXBwZXIgLmNvbnRlbnQtc2Nyb2xsIC5wcm9maWxlLWRldGFpbCAuY291bnRyeSB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/pages/people/components/person/person.component.ts":
/*!****************************************************************!*\
  !*** ./src/pages/people/components/person/person.component.ts ***!
  \****************************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/pages/auth/services/auth/auth.service */ "./src/pages/auth/services/auth/auth.service.ts");
/* harmony import */ var src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/pages/messages/services/messages/messages.service */ "./src/pages/messages/services/messages/messages.service.ts");
/* harmony import */ var src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/shared/helpers/extender */ "./src/shared/helpers/extender.ts");
/* harmony import */ var src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/shared/services/common/common.service */ "./src/shared/services/common/common.service.ts");
/* harmony import */ var _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/people/people.service */ "./src/pages/people/services/people/people.service.ts");








/**
 * view users profile and call, follow, unfollow share or chat to user
 */
let PersonComponent = class PersonComponent extends src_shared_helpers_extender__WEBPACK_IMPORTED_MODULE_5__["Extender"] {
    constructor(injector, navParams, authService, peopleService, messageService, commonService) {
        super(injector);
        this.injector = injector;
        this.navParams = navParams;
        this.authService = authService;
        this.peopleService = peopleService;
        this.messageService = messageService;
        this.commonService = commonService;
    }
    /** get current user, get user to view by getting id from nav param */
    ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.currentUser = yield this.authService.getUser();
            const uid = this.navParams.get('data');
            this.user = yield this.peopleService.getPerson(uid);
        });
    }
    /** call user */
    call() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.commonService.callUser(this.user.mobile || this.user.phone, this.callNumber);
            this.closeModal();
        });
    }
    /** chat to user */
    chat() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.messageService.startChat(this.user);
            this.closeModal();
        });
    }
    /** share user */
    share() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const url = `people?id=${this.user.uid}`;
            yield this.commonService.share(this.user.displayName, this.user.email, this.user.photoURL, url);
            this.closeModal();
        });
    }
    /** getter to check if user is a friend */
    get isFriend() {
        return this.peopleService.friends.includes(this.user.uid);
    }
    /** check if user is a friend and follow or unfollow depending on if they are already your friend or not */
    manage() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.peopleService.friends.includes(this.user.uid)) {
                yield this.peopleService.unfollow(this.user.uid);
            }
            else {
                yield this.peopleService.follow(this.user.uid);
            }
        });
    }
};
PersonComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"] },
    { type: src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__["PeopleService"] },
    { type: src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"] },
    { type: src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('callNumber', null),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], PersonComponent.prototype, "callNumber", void 0);
PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-person',
        template: __webpack_require__(/*! raw-loader!./person.component.html */ "./node_modules/raw-loader/index.js!./src/pages/people/components/person/person.component.html"),
        styles: [__webpack_require__(/*! ./person.component.scss */ "./src/pages/people/components/person/person.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavParams"],
        src_pages_auth_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _services_people_people_service__WEBPACK_IMPORTED_MODULE_7__["PeopleService"],
        src_pages_messages_services_messages_messages_service__WEBPACK_IMPORTED_MODULE_4__["MessagesService"],
        src_shared_services_common_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]])
], PersonComponent);



/***/ }),

/***/ "./src/pages/people/people.module.ts":
/*!*******************************************!*\
  !*** ./src/pages/people/people.module.ts ***!
  \*******************************************/
/*! exports provided: PeopleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleModule", function() { return PeopleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/shared/shared.module */ "./src/shared/shared.module.ts");
/* harmony import */ var _components_people_people_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/people/people.component */ "./src/pages/people/components/people/people.component.ts");
/* harmony import */ var _components_person_person_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/person/person.component */ "./src/pages/people/components/person/person.component.ts");







let PeopleModule = class PeopleModule {
};
PeopleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_components_people_people_component__WEBPACK_IMPORTED_MODULE_5__["PeopleComponent"], _components_person_person_component__WEBPACK_IMPORTED_MODULE_6__["PersonComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            src_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([
                {
                    path: '',
                    component: _components_people_people_component__WEBPACK_IMPORTED_MODULE_5__["PeopleComponent"],
                },
                {
                    path: ':id',
                    component: _components_person_person_component__WEBPACK_IMPORTED_MODULE_6__["PersonComponent"],
                },
            ]),
        ],
    })
], PeopleModule);



/***/ })

}]);
//# sourceMappingURL=pages-people-people-module-es2015.js.map