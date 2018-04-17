"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var _toConsumableArray=_interopDefault(require("babel-runtime/helpers/toConsumableArray")),_extends=_interopDefault(require("babel-runtime/helpers/extends")),_objectWithoutProperties=_interopDefault(require("babel-runtime/helpers/objectWithoutProperties")),_newArrowCheck=_interopDefault(require("babel-runtime/helpers/newArrowCheck")),utilsComposite=require("@jumpn/utils-composite"),utilsArray=require("@jumpn/utils-array"),Observable=_interopDefault(require("zen-observable")),_this=void 0,observe=function(e,r){_newArrowCheck(this,_this);var t=e.observers,i=_objectWithoutProperties(e,["observers"]);return _extends({},i,{observers:[].concat(_toConsumableArray(t),[r])})}.bind(void 0),_this$1=void 0,findIndex=function(e,r,t){return _newArrowCheck(this,_this$1),e.findIndex(utilsComposite.hasIn([r],t))}.bind(void 0),_this$2=void 0,refresh=function(e){return _newArrowCheck(this,_this$2),function(r){return _newArrowCheck(this,_this$2),utilsArray.replace(findIndex(r,"request",e.request),[e],r)}.bind(this)}.bind(void 0),_this$3=void 0,updateNotifiers=function(e,r){return _newArrowCheck(this,_this$3),e.notifiers=r(e.notifiers),e}.bind(void 0),_this$4=void 0,observe$1=function(e,r,t){return _newArrowCheck(this,_this$4),updateNotifiers(e,refresh(observe(r,t)))}.bind(void 0),_this$5=void 0,onResult=function(e,r){return _newArrowCheck(this,_this$5),function(t){_newArrowCheck(this,_this$5),r.next(t),"subscription"!==e.operationType&&r.complete()}.bind(this)}.bind(void 0),toObservable=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=t.onError,o=t.onStart,n=t.unsubscribe;return _newArrowCheck(this,_this$5),new Observable(function(t){return _newArrowCheck(this,_this$5),observe$1(e,r,{onError:i,onStart:o,onAbort:t.error,onResult:onResult(r,t)}),n}.bind(this))}.bind(void 0);module.exports=toObservable;
//# sourceMappingURL=toObservable.js.map