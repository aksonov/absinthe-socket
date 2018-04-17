import _newArrowCheck from"babel-runtime/helpers/newArrowCheck";import{hasIn,map}from"@jumpn/utils-composite";import"phoenix";import{remove,replace,append}from"@jumpn/utils-array";import _JSON$stringify from"babel-runtime/core-js/json/stringify";import _extends from"babel-runtime/helpers/extends";import{errorsToString,requestToCompat,getOperationType}from"@jumpn/utils-graphql";import _toConsumableArray from"babel-runtime/helpers/toConsumableArray";import _objectWithoutProperties from"babel-runtime/helpers/objectWithoutProperties";import Observable from"zen-observable";var _this=void 0,find=function(n,e,i){return _newArrowCheck(this,_this),n.find(hasIn([e],i))}.bind(void 0),_this$1=void 0,createEventHandler=function(n,e){return _newArrowCheck(this,_this$1),function(i){return _newArrowCheck(this,_this$1),function(){for(var r=arguments.length,o=Array(r),t=0;t<r;t++)o[t]=arguments[t];_newArrowCheck(this,_this$1);var s=find(n.notifiers,"request",e);s&&i.apply(void 0,[n,s].concat(o))}.bind(this)}.bind(this)}.bind(void 0),createPushHandler=function(n,e,i){return _newArrowCheck(this,_this$1),map(createEventHandler(e,i),n)}.bind(void 0),_this$2=void 0,handlePush=function(n,e){return _newArrowCheck(this,_this$2),n.receive("ok",e.onSucceed).receive("error",e.onError).receive("timeout",e.onTimeout)}.bind(void 0),_this$3=void 0,getNotifier=function(n,e){return _newArrowCheck(this,_this$3),function(i){return _newArrowCheck(this,_this$3),i[n]&&i[n](e)}.bind(this)}.bind(void 0),getHandlerName=function(n){return _newArrowCheck(this,_this$3),"on"+String(n)}.bind(void 0),notify=function(n,e,i){return _newArrowCheck(this,_this$3),n.observers.forEach(getNotifier(getHandlerName(e),i))}.bind(void 0),_this$4=void 0,findIndex=function(n,e,i){return _newArrowCheck(this,_this$4),n.findIndex(hasIn([e],i))}.bind(void 0),_this$5=void 0,remove$1=function(n){return _newArrowCheck(this,_this$5),function(e){return _newArrowCheck(this,_this$5),remove(findIndex(e,"request",n.request),1,e)}.bind(this)}.bind(void 0),_this$6=void 0,updateNotifiers=function(n,e){return _newArrowCheck(this,_this$6),n.notifiers=e(n.notifiers),n}.bind(void 0),_this$7=void 0,removeNotifiers=function(n,e){_newArrowCheck(this,_this$7),updateNotifiers(n,remove$1(e)),notify(e,"Cancel",e)}.bind(void 0),onError=function(n,e,i){_newArrowCheck(this,_this$7),unsubscribe(n,e),notify(e,"Error","unsubscribe: "+String(i))}.bind(void 0),onTimeout=function(n,e){return _newArrowCheck(this,_this$7),notify(e,"Error","unsubscribe: timeout")}.bind(void 0),notifierPushHandler={onError:onError,onTimeout:onTimeout,onSucceed:removeNotifiers},unsubscribe=function(n,e){return _newArrowCheck(this,_this$7),handlePush(n.channel.push("unsubscribe",{subscriptionId:e.subscriptionId}),createPushHandler(notifierPushHandler,n,e.request))}.bind(void 0),cancel=function(n,e){return _newArrowCheck(this,_this$7),"subscription"===e.operationType?unsubscribe(n,e):removeNotifiers(n,e),n}.bind(void 0),_this$8=void 0,notifyall=function(n,e,i){return _newArrowCheck(this,_this$8),n.forEach(function(n){return _newArrowCheck(this,_this$8),notify(n,e,i)}.bind(this))}.bind(void 0),_this$9=void 0,refresh=function(n){return _newArrowCheck(this,_this$9),function(e){return _newArrowCheck(this,_this$9),replace(findIndex(e,"request",n.request),[n],e)}.bind(this)}.bind(void 0),_this$10=void 0,notifyStart=function(n){return _newArrowCheck(this,_this$10),notify(n,"Start",n)}.bind(void 0),onSubscriptionSucceed=function(n,e,i){var r=i.subscriptionId;_newArrowCheck(this,_this$10);var o=_extends({},e,{subscriptionId:r});updateNotifiers(n,refresh(o)),notifyStart(o)}.bind(void 0),abortRequest=function(n,e,i){_newArrowCheck(this,_this$10),updateNotifiers(n,remove$1(e)),notify(e,"Abort",i)}.bind(void 0),onError$1=function(n,e,i){return _newArrowCheck(this,_this$10),abortRequest(n,e,new Error(_JSON$stringify(i)))}.bind(void 0),onSubscriptionResponse=function(n,e,i){_newArrowCheck(this,_this$10),i.errors?onError$1(n,e,errorsToString(i.errors)):onSubscriptionSucceed(n,e,i)}.bind(void 0),onQueryOrMutationResponse=function(n,e,i){_newArrowCheck(this,_this$10),updateNotifiers(n,remove$1(e)),notify(e,"Result",i)}.bind(void 0),onTimeout$1=function(n,e){return _newArrowCheck(this,_this$10),notify(e,"Error",new Error("request: timeout"))}.bind(void 0),queryOrMutationHandler={onError:onError$1,onTimeout:onTimeout$1,onSucceed:onQueryOrMutationResponse},subcriptionHandler={onError:onError$1,onTimeout:onTimeout$1,onSucceed:onSubscriptionResponse},send=function(n,e,i){return _newArrowCheck(this,_this$10),handlePush(n.channel.push("doc",requestToCompat(e)),createPushHandler(i,n,e))}.bind(void 0),pushRequest=function(n,e){_newArrowCheck(this,_this$10),"subscription"===e.operationType?send(n,e.request,subcriptionHandler):(notifyStart(e),send(n,e.request,queryOrMutationHandler))}.bind(void 0),_this$11=void 0,createChannelJoinHandler=function(n){return _newArrowCheck(this,_this$11),{onError:function(e){return _newArrowCheck(this,_this$11),notifyall(n.notifiers,"Error",new Error("channel join: "+String(e)))}.bind(this),onSucceed:function(){return _newArrowCheck(this,_this$11),n.notifiers.forEach(function(e){return _newArrowCheck(this,_this$11),pushRequest(n,e)}.bind(this))}.bind(this),onTimeout:function(){return _newArrowCheck(this,_this$11),notifyall(n.notifiers,"Error",new Error("channel join: timeout"))}.bind(this)}}.bind(void 0),joinChannel=function(n){return _newArrowCheck(this,_this$11),handlePush(n.channel.join(),createChannelJoinHandler(n)),n.channelJoinCreated=!0,n}.bind(void 0),_this$12=void 0,createConnectionCloseError=function(){return _newArrowCheck(this,_this$12),new Error("connection: close")}.bind(void 0),mutationOnConnectionClose=function(n,e){_newArrowCheck(this,_this$12),updateNotifiers(n,remove$1(e)),notify(e,"Abort",createConnectionCloseError())}.bind(void 0),notifierOnConnectionClose=function(n){return _newArrowCheck(this,_this$12),function(e){_newArrowCheck(this,_this$12),"mutation"===e.operationType?mutationOnConnectionClose(n,e):notify(e,"Error",createConnectionCloseError())}.bind(this)}.bind(void 0),onConnectionClose=function(n){return _newArrowCheck(this,_this$12),function(){return _newArrowCheck(this,_this$12),n.notifiers.forEach(notifierOnConnectionClose(n))}.bind(this)}.bind(void 0),onSubscriptionData=function(n,e){var i=e.payload;_newArrowCheck(this,_this$12);var r=find(n.notifiers,"subscriptionId",i.subscriptionId);r&&notify(r,"Result",i.result)}.bind(void 0),onMessage=function(n){return _newArrowCheck(this,_this$12),function(e){_newArrowCheck(this,_this$12),"subscription:data"===e.event&&onSubscriptionData(n,e)}.bind(this)}.bind(void 0),shouldJoinChannel=function(n){return _newArrowCheck(this,_this$12),!n.channelJoinCreated&&n.notifiers.length>0}.bind(void 0),onConnectionOpen=function(n){return _newArrowCheck(this,_this$12),function(){_newArrowCheck(this,_this$12),shouldJoinChannel(n)&&joinChannel(n)}.bind(this)}.bind(void 0),absintheChannelName="__absinthe__:control",create=function(n){_newArrowCheck(this,_this$12);var e={phoenixSocket:n,channel:n.channel(absintheChannelName),channelJoinCreated:!1,notifiers:[]};return n.onOpen(onConnectionOpen(e)),n.onMessage(onMessage(e)),n.onClose(onConnectionClose(e)),e}.bind(void 0),_this$13=void 0,observe=function(n,e){_newArrowCheck(this,_this$13);var i=n.observers,r=_objectWithoutProperties(n,["observers"]);return _extends({},r,{observers:[].concat(_toConsumableArray(i),[e])})}.bind(void 0),_this$14=void 0,observe$1=function(n,e,i){return _newArrowCheck(this,_this$14),updateNotifiers(n,refresh(observe(e,i)))}.bind(void 0),_this$15=void 0,create$1=function(n){return _newArrowCheck(this,_this$15),{request:n,observers:[],operationType:getOperationType(n.operation),subscriptionId:void 0}}.bind(void 0),_this$16=void 0,connectOrJoinChannel=function(n){_newArrowCheck(this,_this$16),n.phoenixSocket.isConnected()?joinChannel(n):n.phoenixSocket.connect()}.bind(void 0),sendNew=function(n,e){_newArrowCheck(this,_this$16);var i=create$1(e);return updateNotifiers(n,append([i])),n.channelJoinCreated?pushRequest(n,i):connectOrJoinChannel(n),i}.bind(void 0),send$1=function(n,e){return _newArrowCheck(this,_this$16),find(n.notifiers,"request",e)||sendNew(n,e)}.bind(void 0),_this$17=void 0,onResult=function(n,e){return _newArrowCheck(this,_this$17),function(i){_newArrowCheck(this,_this$17),e.next(i),"subscription"!==n.operationType&&e.complete()}.bind(this)}.bind(void 0),toObservable=function(n,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=i.onError,o=i.onStart,t=i.unsubscribe;return _newArrowCheck(this,_this$17),new Observable(function(i){return _newArrowCheck(this,_this$17),observe$1(n,e,{onError:r,onStart:o,onAbort:i.error,onResult:onResult(e,i)}),t}.bind(this))}.bind(void 0),_this$18=void 0,unobserve=function(n,e){_newArrowCheck(this,_this$18);var i=n.observers,r=_objectWithoutProperties(n,["observers"]);return _extends({},r,{observers:remove(i.indexOf(e),1,i)})}.bind(void 0),_this$19=void 0,unobserve$1=function(n,e,i){return _newArrowCheck(this,_this$19),updateNotifiers(n,refresh(unobserve(e,i))),n}.bind(void 0);export{cancel,create,observe$1 as observe,send$1 as send,toObservable,unobserve$1 as unobserve};
//# sourceMappingURL=index.js.map