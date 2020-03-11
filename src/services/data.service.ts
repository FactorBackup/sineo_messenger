/*
* Social chat in Ionic 4 chat application  (https://github.com/habupagas/facebook-clone-ionic4)
* Copyright  @2020-present. All right reserved.
* Author By Abubakar Pagas
*/


import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject, AngularFireList } from "@angular/fire/database";
import * as firebase from "firebase";
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  UserUid = window.localStorage.getItem('userId');
  userId

  list: AngularFireList<any>;
  user: AngularFireObject<any>;
  webRTCClient;
  incomingCallId;
  userContactsList = [];
  userOnlyContacts = [];
  exitsUserList = [];
  inviteUserList = [];
  userContactsListWithCountryCode = [];
  isContactGet = false;
  countryCode = "+1";

  constructor(
    public angularDb: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { }

  //get timline Post
  getTimelinePost() {
    return this.list = this.angularDb.list("timeline");
  }

  getTimelineUser(timelineId) {
    return this.user = this.angularDb.object("/timeline/" + timelineId);
  }
  //get timline Post
  getNotification() {
    return this.list = this.angularDb.list("/accounts/" + firebase.auth().currentUser.uid + "/notifications/");
  }

  getMessage() {
    return this.list = this.angularDb.list("messages");
  }

  // get friend list
  getFriends() {
    return this.list = this.angularDb.list(
      "accounts/" + firebase.auth().currentUser.uid + "/friends"
    );
  }

  getConvertion() {
    return this.list = this.angularDb.list(
      "accounts/" + firebase.auth().currentUser.uid + "/conversations"
    );
  }

  getConversations() {
    return this.list = this.angularDb.list(
      "accounts/" + firebase.auth().currentUser.uid + "/conversations"
    );
  }

  Conversations(key) {
    return this.user = this.angularDb.object(
      "accounts/" + firebase.auth().currentUser.uid + "/conversations" + key
    );
  }
  //get time line by id
  getTimeline(timelineId) {
    return this.user = this.angularDb.object("/timeline" + timelineId);
  }

  //get likes list
  getLike(postId) {
    return this.list = this.angularDb.list("/likes/" + postId)
  }

  // get dislike list
  getdisLike(postId) {
    return this.list = this.angularDb.list("/dislikes/" + postId);
  }


  //get comment list
  getComments(postId) {
    return this.list = this.angularDb.list('/comments/' + postId);
  }

  //post the like
  postLike(postId) {
    return this.user = this.angularDb.object("/likes/" + postId);
  }
  //psot the comment
  postComments(postId) {
    return this.user = this.angularDb.object('/comments/' + postId)
  }
  // Get conversation given the conversationId.
  getConversation(conversationId) {
    return this.angularDb.object("messages/" + conversationId);
  }
  // get the current user, load all data from the Database
  getCurrentUser(user) {
    return this.user = this.angularDb.object('accounts/' + user);
  }
  // Get messages of the group given the Id.
  getGroupMessage(groupId) {
    return this.list = this.angularDb.list('/groups/' + groupId + '/messages/');
  }
  // get count of contact
  getFriend(userId) {
    return this.list = this.angularDb.list('/accounts/' + userId + '/friends/')
  }
  //Get user by userId
  //get the accounts group
  accountsGroups(userId) {
    return this.user = this.angularDb.object('/accounts/' + userId + '/groups/')
  }
  keyGroups(userId) {
    return this.list = this.angularDb.list('/accounts/' + userId + '/groups/')
  }
  listUnread(groupId) {
    return this.list = this.angularDb.list('/accounts/' + firebase.auth().currentUser.uid + '/groups/' + groupId + '/messagesRead/')
  }
  countGroups(userId) {
    return this.list = this.angularDb.list('/accounts/' + firebase.auth().currentUser.uid + '/groups/' + userId + '/messagesRead/')
  }
  getUser(userId) {
    return this.user = this.angularDb.object('/accounts/' + userId)
  }
  groups(userId) {
    return this.user = this.angularDb.object('/groups/' + userId)
  }
  getMessageUser(user, conversation) {
    return this.list = this.angularDb.list('messages/' + user + '/' + conversation)
  }
  //get all users
  getUsers() {
    return this.list = this.angularDb.list('accounts', ref =>
      ref.orderByChild('username'));
  }
  // Get user with phonenumber
  getUserWithPhonenumber(phoneNumber) {
    return this.angularDb.list('accounts/', ref =>
      ref.orderByChild('phoneNumber').equalTo('phoneNumber')
    )
  }

  getUserById(userId: string) {
    return this.user = this.angularDb.object('accounts/' + userId);
  }

  //get the request given the usrId
  getRequests(userId) {
    return this.user = this.angularDb.object('/requests/' + userId + '/requestsSent/');
  }
  //get the request given the usrId
  getRequeste(userId) {
    return this.user = this.angularDb.object('/requests/' + userId);
  }
  //get the request given the usrId
  getRequestsCancel(userId, id) {
    return this.user = this.angularDb.object('/requests/' + userId + '/requestsSent/' + id);
  }
  //get the request given the usrId
  getRequestsCount(userId) {
    return this.list = this.angularDb.list('/requests/' + userId + '/requestsSent/');
  }
  //get the request given the usrId
  getRequestsList(userId) {
    return this.list = this.angularDb.list('/requests/' + userId + '/requestsSent/');
  }
  //get the request given for the otheruser
  getRequestOther(userId) {
    return this.user = this.angularDb.object('/requests/' + userId + '/friendRequests/');
  }
  //get the request given for the otheruser
  getRequestOtherCancel(userId, id) {
    return this.user = this.angularDb.object('/requests/' + userId + '/friendRequests/' + id);
  }
  getRequest() {
    return this.user = this.angularDb.object('/requests/' + firebase.auth().currentUser.uid);
  }
  // get user with username
  getUserWithUsername(username) {
    return this.list = this.angularDb.list('/accounts/', ref =>
      ref.orderByChild('username').equalTo(username))
  }
  // get the conversation count 
  getConversationCount(userId) {
    return this.list = this.angularDb.list("/conversations/" + userId, ref =>
      ref.orderByChild('read').equalTo('unread')
    );
  }

  // get the notification count 
  getNotificationCount(userId) {
    return this.list = this.angularDb.list("/accounts/" + userId + "/notifications/", ref =>
      ref.orderByChild('read').equalTo('unread')
    );
  }




}
