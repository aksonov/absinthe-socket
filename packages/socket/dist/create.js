import _newArrowCheck from"babel-runtime/helpers/newArrowCheck";import"phoenix";import{hasIn,map}from"@jumpn/utils-composite";import{remove,replace}from"@jumpn/utils-array";import _JSON$stringify from"babel-runtime/core-js/json/stringify";import _extends from"babel-runtime/helpers/extends";import{errorsToString,requestToCompat}from"@jumpn/utils-graphql";var _this=void 0,handlePush=function(n,i){return _newArrowCheck(this,_this),n.receive("ok",i.onSucceed).receive("error",i.onError).receive("timeout",i.onTimeout)}.bind(void 0),_this$1=void 0,getNotifier=function(n,i){return _newArrowCheck(this,_this$1),function(e){return _newArrowCheck(this,_this$1),e[n]&&e[n](i)}.bind(this)}.bind(void 0),getHandlerName=function(n){return _newArrowCheck(this,_this$1),"on"+String(n)}.bind(void 0),notify=function(n,i,e){return _newArrowCheck(this,_this$1),n.observers.forEach(getNotifier(getHandlerName(i),e))}.bind(void 0),_this$2=void 0,notifyall=function(n,i,e){return _newArrowCheck(this,_this$2),n.forEach(function(n){return _newArrowCheck(this,_this$2),notify(n,i,e)}.bind(this))}.bind(void 0),_this$3=void 0,find=function(n,i,e){return _newArrowCheck(this,_this$3),n.find(hasIn([i],e))}.bind(void 0),_this$4=void 0,createEventHandler=function(n,i){return _newArrowCheck(this,_this$4),function(e){return _newArrowCheck(this,_this$4),function(){for(var r=arguments.length,t=Array(r),o=0;o<r;o++)t[o]=arguments[o];_newArrowCheck(this,_this$4);var s=find(n.notifiers,"request",i);s&&e.apply(void 0,[n,s].concat(t))}.bind(this)}.bind(this)}.bind(void 0),createPushHandler=function(n,i,e){return _newArrowCheck(this,_this$4),map(createEventHandler(i,e),n)}.bind(void 0),_this$5=void 0,findIndex=function(n,i,e){return _newArrowCheck(this,_this$5),n.findIndex(hasIn([i],e))}.bind(void 0),_this$6=void 0,remove$1=function(n){return _newArrowCheck(this,_this$6),function(i){return _newArrowCheck(this,_this$6),remove(findIndex(i,"request",n.request),1,i)}.bind(this)}.bind(void 0),_this$7=void 0,refresh=function(n){return _newArrowCheck(this,_this$7),function(i){return _newArrowCheck(this,_this$7),replace(findIndex(i,"request",n.request),[n],i)}.bind(this)}.bind(void 0),_this$8=void 0,updateNotifiers=function(n,i){return _newArrowCheck(this,_this$8),n.notifiers=i(n.notifiers),n}.bind(void 0),_this$9=void 0,notifyStart=function(n){return _newArrowCheck(this,_this$9),notify(n,"Start",n)}.bind(void 0),onSubscriptionSucceed=function(n,i,e){var r=e.subscriptionId;_newArrowCheck(this,_this$9);var t=_extends({},i,{subscriptionId:r});updateNotifiers(n,refresh(t)),notifyStart(t)}.bind(void 0),abortRequest=function(n,i,e){_newArrowCheck(this,_this$9),updateNotifiers(n,remove$1(i)),notify(i,"Abort",e)}.bind(void 0),onError=function(n,i,e){return _newArrowCheck(this,_this$9),abortRequest(n,i,new Error(_JSON$stringify(e)))}.bind(void 0),onSubscriptionResponse=function(n,i,e){_newArrowCheck(this,_this$9),e.errors?onError(n,i,errorsToString(e.errors)):onSubscriptionSucceed(n,i,e)}.bind(void 0),onQueryOrMutationResponse=function(n,i,e){_newArrowCheck(this,_this$9),updateNotifiers(n,remove$1(i)),notify(i,"Result",e)}.bind(void 0),onTimeout=function(n,i){return _newArrowCheck(this,_this$9),notify(i,"Error",new Error("request: timeout"))}.bind(void 0),queryOrMutationHandler={onError:onError,onTimeout:onTimeout,onSucceed:onQueryOrMutationResponse},subcriptionHandler={onError:onError,onTimeout:onTimeout,onSucceed:onSubscriptionResponse},send=function(n,i,e){return _newArrowCheck(this,_this$9),handlePush(n.channel.push("doc",requestToCompat(i)),createPushHandler(e,n,i))}.bind(void 0),pushRequest=function(n,i){_newArrowCheck(this,_this$9),"subscription"===i.operationType?send(n,i.request,subcriptionHandler):(notifyStart(i),send(n,i.request,queryOrMutationHandler))}.bind(void 0),_this$10=void 0,createChannelJoinHandler=function(n){return _newArrowCheck(this,_this$10),{onError:function(i){return _newArrowCheck(this,_this$10),notifyall(n.notifiers,"Error",new Error("channel join: "+String(i)))}.bind(this),onSucceed:function(){return _newArrowCheck(this,_this$10),n.notifiers.forEach(function(i){return _newArrowCheck(this,_this$10),pushRequest(n,i)}.bind(this))}.bind(this),onTimeout:function(){return _newArrowCheck(this,_this$10),notifyall(n.notifiers,"Error",new Error("channel join: timeout"))}.bind(this)}}.bind(void 0),joinChannel=function(n){return _newArrowCheck(this,_this$10),handlePush(n.channel.join(),createChannelJoinHandler(n)),n.channelJoinCreated=!0,n}.bind(void 0),_this$11=void 0,createConnectionCloseError=function(){return _newArrowCheck(this,_this$11),new Error("connection: close")}.bind(void 0),mutationOnConnectionClose=function(n,i){_newArrowCheck(this,_this$11),updateNotifiers(n,remove$1(i)),notify(i,"Abort",createConnectionCloseError())}.bind(void 0),notifierOnConnectionClose=function(n){return _newArrowCheck(this,_this$11),function(i){_newArrowCheck(this,_this$11),"mutation"===i.operationType?mutationOnConnectionClose(n,i):notify(i,"Error",createConnectionCloseError())}.bind(this)}.bind(void 0),onConnectionClose=function(n){return _newArrowCheck(this,_this$11),function(){return _newArrowCheck(this,_this$11),n.notifiers.forEach(notifierOnConnectionClose(n))}.bind(this)}.bind(void 0),onSubscriptionData=function(n,i){var e=i.payload;_newArrowCheck(this,_this$11);var r=find(n.notifiers,"subscriptionId",e.subscriptionId);r&&notify(r,"Result",e.result)}.bind(void 0),onMessage=function(n){return _newArrowCheck(this,_this$11),function(i){_newArrowCheck(this,_this$11),"subscription:data"===i.event&&onSubscriptionData(n,i)}.bind(this)}.bind(void 0),shouldJoinChannel=function(n){return _newArrowCheck(this,_this$11),!n.channelJoinCreated&&n.notifiers.length>0}.bind(void 0),onConnectionOpen=function(n){return _newArrowCheck(this,_this$11),function(){_newArrowCheck(this,_this$11),shouldJoinChannel(n)&&joinChannel(n)}.bind(this)}.bind(void 0),absintheChannelName="__absinthe__:control",create=function(n){_newArrowCheck(this,_this$11);var i={phoenixSocket:n,channel:n.channel(absintheChannelName),channelJoinCreated:!1,notifiers:[]};return n.onOpen(onConnectionOpen(i)),n.onMessage(onMessage(i)),n.onClose(onConnectionClose(i)),i}.bind(void 0);export default create;
//# sourceMappingURL=create.js.map