import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Mixpanel
 * @description
 * Cordova Plugin that wraps Mixpanel SDK for Android and iOS
 *
 * @usage
 * ```typescript
 * import { Mixpanel } from '@ionic-native/mixpanel/ngx';
 *
 * constructor(private mixpanel: Mixpanel, private mixpanelPeople: MixpanelPeople) { }
 *
 * ...
 *
 * this.mixpanel.init(token)
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 * @classes
 * MixpanelPeople
 */
export declare class Mixpanel extends IonicNativePlugin {
    /**
     * If originalId is omitted, aliasId will be used as originalId.
     * @param aliasId {string}
     * @param originalId {string}
     * @returns {Promise<any>}
     */
    alias(aliasId: string, originalId?: string): Promise<any>;
    /**
     *
     * @returns {Promise<any>}
     */
    distinctId(): Promise<any>;
    /**
     * @returns {Promise<any>}
     */
    flush(): Promise<any>;
    /**
     * The usePeople parameter is used for the iOS Mixpanel SDK.
     * @param distinctId {string}
     * @param usePeople {boolean}
     * @returns {Promise<any>}
     */
    identify(distinctId: string, usePeople?: boolean): Promise<any>;
    /**
     *
     * @param token {string}
     * @returns {Promise<any>}
     */
    init(token: string): Promise<any>;
    /**
     *
     * @returns {Promise<any>}
     */
    getSuperProperties(): Promise<any>;
    /**
     *
     * @param superProperties {any}
     * @returns {Promise<any>}
     */
    registerSuperProperties(superProperties: any): Promise<any>;
    /**
     *
     * @param superProperties {any}
     * @returns {Promise<any>}
     */
    registerSuperPropertiesOnce(superProperties: any): Promise<any>;
    /**
     *
     * @param superPropertyName {string}
     * @returns {Promise<any>}
     */
    unregisterSuperProperty(superPropertyName: string): Promise<any>;
    /**
     *
     * @returns {Promise<any>}
     */
    reset(): Promise<any>;
    /**
     *
     * @param eventName {string}
     * @returns {Promise<any>}
     */
    timeEvent(eventName: string): Promise<any>;
    /**
     *
     * @param eventName {string}
     * @param eventProperties {any} optional
     * @returns {Promise<any>}
     */
    track(eventName: string, eventProperties?: any): Promise<any>;
}
/**
 * @hidden
 */
export declare class MixpanelPeople extends IonicNativePlugin {
    /**
     *
     * @param appendObject {any}
     * @return {Promise<any>}
     */
    append(appendObject: any): Promise<any>;
    /**
     *
     * @return {Promise<any>}
     */
    deleteUser(): Promise<any>;
    /**
     *
     * @param distinctId {string}
     * @return {Promise<any>}
     */
    identify(distinctId: string): Promise<any>;
    /**
     *
     * @param peopleProperties {string}
     * @return {Promise<any>}
     */
    increment(peopleProperties: any): Promise<any>;
    /**
     *
     * @param pushId
     * @return {Promise<any>}
     */
    setPushId(pushId: string): Promise<any>;
    /**
     *
     * @param peopleProperties
     * @return {Promise<any>}
     */
    set(peopleProperties: any): Promise<any>;
    /**
     *
     * @param peopleProperties {any}
     * @return {Promise<any>}
     */
    setOnce(peopleProperties: any): Promise<any>;
    /**
     *
     * @param amount {number}
     * @param chargeProperties
     * @return {Promise<any>}
     */
    trackCharge(amount: number, chargeProperties: any): Promise<any>;
    /**
     *
     * @param propertiesArray
     * @return {Promise<any>}
     */
    unset(propertiesArray: string[]): Promise<any>;
    /**
     *
     * @param unionObject {any}
     * @return {Promise<any>}
     */
    union(unionObject: any): Promise<any>;
}
