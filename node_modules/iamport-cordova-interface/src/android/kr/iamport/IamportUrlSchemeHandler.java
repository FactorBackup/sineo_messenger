package kr.iamport;

import org.apache.cordova.CordovaInterface;

abstract public class IamportUrlSchemeHandler {

    protected CordovaInterface cordova;

    public IamportUrlSchemeHandler(CordovaInterface cordova) {
        this.cordova = cordova;
    }

    abstract public boolean handleUrl(String url);

}