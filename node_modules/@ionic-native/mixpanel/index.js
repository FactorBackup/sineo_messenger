var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
var MixpanelOriginal = /** @class */ (function (_super) {
    __extends(MixpanelOriginal, _super);
    function MixpanelOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MixpanelOriginal.prototype.alias = function (aliasId, originalId) { return cordova(this, "alias", {}, arguments); };
    MixpanelOriginal.prototype.distinctId = function () { return cordova(this, "distinctId", {}, arguments); };
    MixpanelOriginal.prototype.flush = function () { return cordova(this, "flush", {}, arguments); };
    MixpanelOriginal.prototype.identify = function (distinctId, usePeople) { return cordova(this, "identify", {}, arguments); };
    MixpanelOriginal.prototype.init = function (token) { return cordova(this, "init", {}, arguments); };
    MixpanelOriginal.prototype.getSuperProperties = function () { return cordova(this, "getSuperProperties", {}, arguments); };
    MixpanelOriginal.prototype.registerSuperProperties = function (superProperties) { return cordova(this, "registerSuperProperties", {}, arguments); };
    MixpanelOriginal.prototype.registerSuperPropertiesOnce = function (superProperties) { return cordova(this, "registerSuperPropertiesOnce", {}, arguments); };
    MixpanelOriginal.prototype.unregisterSuperProperty = function (superPropertyName) { return cordova(this, "unregisterSuperProperty", {}, arguments); };
    MixpanelOriginal.prototype.reset = function () { return cordova(this, "reset", {}, arguments); };
    MixpanelOriginal.prototype.timeEvent = function (eventName) { return cordova(this, "timeEvent", {}, arguments); };
    MixpanelOriginal.prototype.track = function (eventName, eventProperties) { return cordova(this, "track", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    MixpanelOriginal.pluginName = "Mixpanel";
    MixpanelOriginal.plugin = "cordova-plugin-mixpanel";
    MixpanelOriginal.pluginRef = "mixpanel";
    MixpanelOriginal.repo = "https://github.com/samzilverberg/cordova-mixpanel-plugin";
    MixpanelOriginal.platforms = ["Android", "Browser", "iOS"];
    return MixpanelOriginal;
}(IonicNativePlugin));
var Mixpanel = new MixpanelOriginal();
export { Mixpanel };
var MixpanelPeopleOriginal = /** @class */ (function (_super) {
    __extends(MixpanelPeopleOriginal, _super);
    function MixpanelPeopleOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MixpanelPeopleOriginal.prototype.append = function (appendObject) { return cordova(this, "append", {}, arguments); };
    MixpanelPeopleOriginal.prototype.deleteUser = function () { return cordova(this, "deleteUser", {}, arguments); };
    MixpanelPeopleOriginal.prototype.identify = function (distinctId) { return cordova(this, "identify", {}, arguments); };
    MixpanelPeopleOriginal.prototype.increment = function (peopleProperties) { return cordova(this, "increment", {}, arguments); };
    MixpanelPeopleOriginal.prototype.setPushId = function (pushId) { return cordova(this, "setPushId", {}, arguments); };
    MixpanelPeopleOriginal.prototype.set = function (peopleProperties) { return cordova(this, "set", {}, arguments); };
    MixpanelPeopleOriginal.prototype.setOnce = function (peopleProperties) { return cordova(this, "setOnce", {}, arguments); };
    MixpanelPeopleOriginal.prototype.trackCharge = function (amount, chargeProperties) { return cordova(this, "trackCharge", {}, arguments); };
    MixpanelPeopleOriginal.prototype.unset = function (propertiesArray) { return cordova(this, "unset", {}, arguments); };
    MixpanelPeopleOriginal.prototype.union = function (unionObject) { return cordova(this, "union", {}, arguments); };
    MixpanelPeopleOriginal.plugin = "cordova-plugin-mixpanel";
    MixpanelPeopleOriginal.pluginRef = "mixpanel.people";
    MixpanelPeopleOriginal.pluginName = "Mixpanel";
    return MixpanelPeopleOriginal;
}(IonicNativePlugin));
var MixpanelPeople = new MixpanelPeopleOriginal();
export { MixpanelPeople };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL21peHBhbmVsL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLDhCQUFzQyxNQUFNLG9CQUFvQixDQUFDOztJQWlDMUMsNEJBQWlCOzs7O0lBUTdDLHdCQUFLLGFBQUMsT0FBZSxFQUFFLFVBQW1CO0lBUzFDLDZCQUFVO0lBUVYsd0JBQUs7SUFXTCwyQkFBUSxhQUFDLFVBQWtCLEVBQUUsU0FBbUI7SUFVaEQsdUJBQUksYUFBQyxLQUFhO0lBU2xCLHFDQUFrQjtJQVVsQiwwQ0FBdUIsYUFBQyxlQUFvQjtJQVU1Qyw4Q0FBMkIsYUFBQyxlQUFvQjtJQVVoRCwwQ0FBdUIsYUFBQyxpQkFBeUI7SUFTakQsd0JBQUs7SUFVTCw0QkFBUyxhQUFDLFNBQWlCO0lBYzNCLHdCQUFLLGFBQUMsU0FBaUIsRUFBRSxlQUFxQjs7Ozs7O21CQXhKaEQ7RUFrQzhCLGlCQUFpQjtTQUFsQyxRQUFROztJQW9JZSxrQ0FBaUI7Ozs7SUFPbkQsK0JBQU0sYUFBQyxZQUFpQjtJQVN4QixtQ0FBVTtJQVVWLGlDQUFRLGFBQUMsVUFBa0I7SUFVM0Isa0NBQVMsYUFBQyxnQkFBcUI7SUFVL0Isa0NBQVMsYUFBQyxNQUFjO0lBVXhCLDRCQUFHLGFBQUMsZ0JBQXFCO0lBVXpCLGdDQUFPLGFBQUMsZ0JBQXFCO0lBVzdCLG9DQUFXLGFBQUMsTUFBYyxFQUFFLGdCQUFxQjtJQVVqRCw4QkFBSyxhQUFDLGVBQXlCO0lBVS9CLDhCQUFLLGFBQUMsV0FBZ0I7Ozs7eUJBdlF4QjtFQXNLb0MsaUJBQWlCO1NBQXhDLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZGVjbGFyZSB2YXIgbWl4cGFuZWw6IGFueTtcblxuLyoqXG4gKiBAbmFtZSBNaXhwYW5lbFxuICogQGRlc2NyaXB0aW9uXG4gKiBDb3Jkb3ZhIFBsdWdpbiB0aGF0IHdyYXBzIE1peHBhbmVsIFNESyBmb3IgQW5kcm9pZCBhbmQgaU9TXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBNaXhwYW5lbCB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvbWl4cGFuZWwvbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG1peHBhbmVsOiBNaXhwYW5lbCwgcHJpdmF0ZSBtaXhwYW5lbFBlb3BsZTogTWl4cGFuZWxQZW9wbGUpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIHRoaXMubWl4cGFuZWwuaW5pdCh0b2tlbilcbiAqICAgLnRoZW4ob25TdWNjZXNzKVxuICogICAuY2F0Y2gob25FcnJvcik7XG4gKlxuICogYGBgXG4gKiBAY2xhc3Nlc1xuICogTWl4cGFuZWxQZW9wbGVcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdNaXhwYW5lbCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1peHBhbmVsJyxcbiAgcGx1Z2luUmVmOiAnbWl4cGFuZWwnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3NhbXppbHZlcmJlcmcvY29yZG92YS1taXhwYW5lbC1wbHVnaW4nLFxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1peHBhbmVsIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAvKipcbiAgICogSWYgb3JpZ2luYWxJZCBpcyBvbWl0dGVkLCBhbGlhc0lkIHdpbGwgYmUgdXNlZCBhcyBvcmlnaW5hbElkLlxuICAgKiBAcGFyYW0gYWxpYXNJZCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gb3JpZ2luYWxJZCB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBhbGlhcyhhbGlhc0lkOiBzdHJpbmcsIG9yaWdpbmFsSWQ/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkaXN0aW5jdElkKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGZsdXNoKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSB1c2VQZW9wbGUgcGFyYW1ldGVyIGlzIHVzZWQgZm9yIHRoZSBpT1MgTWl4cGFuZWwgU0RLLlxuICAgKiBAcGFyYW0gZGlzdGluY3RJZCB7c3RyaW5nfVxuICAgKiBAcGFyYW0gdXNlUGVvcGxlIHtib29sZWFufVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpZGVudGlmeShkaXN0aW5jdElkOiBzdHJpbmcsIHVzZVBlb3BsZT86IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gdG9rZW4ge3N0cmluZ31cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaW5pdCh0b2tlbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgZ2V0U3VwZXJQcm9wZXJ0aWVzKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzdXBlclByb3BlcnRpZXMge2FueX1cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVnaXN0ZXJTdXBlclByb3BlcnRpZXMoc3VwZXJQcm9wZXJ0aWVzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gc3VwZXJQcm9wZXJ0aWVzIHthbnl9XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHJlZ2lzdGVyU3VwZXJQcm9wZXJ0aWVzT25jZShzdXBlclByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBzdXBlclByb3BlcnR5TmFtZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bnJlZ2lzdGVyU3VwZXJQcm9wZXJ0eShzdXBlclByb3BlcnR5TmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgcmVzZXQoKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB0aW1lRXZlbnQoZXZlbnROYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9XG4gICAqIEBwYXJhbSBldmVudFByb3BlcnRpZXMge2FueX0gb3B0aW9uYWxcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzdWNjZXNzSW5kZXg6IDIsXG4gICAgZXJyb3JJbmRleDogM1xuICB9KVxuICB0cmFjayhldmVudE5hbWU6IHN0cmluZywgZXZlbnRQcm9wZXJ0aWVzPzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1taXhwYW5lbCcsXG4gIHBsdWdpblJlZjogJ21peHBhbmVsLnBlb3BsZScsXG4gIHBsdWdpbk5hbWU6ICdNaXhwYW5lbCdcbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTWl4cGFuZWxQZW9wbGUgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gYXBwZW5kT2JqZWN0IHthbnl9XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgYXBwZW5kKGFwcGVuZE9iamVjdDogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBkZWxldGVVc2VyKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBkaXN0aW5jdElkIHtzdHJpbmd9XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgaWRlbnRpZnkoZGlzdGluY3RJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHBlb3BsZVByb3BlcnRpZXMge3N0cmluZ31cbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICBpbmNyZW1lbnQocGVvcGxlUHJvcGVydGllczogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHB1c2hJZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNldFB1c2hJZChwdXNoSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBwZW9wbGVQcm9wZXJ0aWVzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0KHBlb3BsZVByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBwZW9wbGVQcm9wZXJ0aWVzIHthbnl9XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgc2V0T25jZShwZW9wbGVQcm9wZXJ0aWVzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gYW1vdW50IHtudW1iZXJ9XG4gICAqIEBwYXJhbSBjaGFyZ2VQcm9wZXJ0aWVzXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdHJhY2tDaGFyZ2UoYW1vdW50OiBudW1iZXIsIGNoYXJnZVByb3BlcnRpZXM6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSBwcm9wZXJ0aWVzQXJyYXlcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoKVxuICB1bnNldChwcm9wZXJ0aWVzQXJyYXk6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHVuaW9uT2JqZWN0IHthbnl9XG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn1cbiAgICovXG4gIEBDb3Jkb3ZhKClcbiAgdW5pb24odW5pb25PYmplY3Q6IGFueSk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=