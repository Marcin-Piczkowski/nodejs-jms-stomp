'use strict';
var Stomp = require('stomp-client');
var MessageConsumer = function MessageConsumer(){};
MessageConsumer.prototype.init = function init(){
  var stompClient = new Stomp('127.0.0.1', 61613, 'admin', 'admin');
  var onSuccess = function(sessionId){
    console.log('Successfully connected, session id: ' + sessionId);
  	stompClient.subscribe('/queue/Consumer.CMS.VirtualTopic.Contact.Status', function(body, headers){
      console.log(body);
  	});

  };
  var onError = function(err){
  		console.log(err);
  };
  stompClient.connect(onSuccess,onError);
};
module.exports = new MessageConsumer();