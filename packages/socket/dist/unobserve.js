import _newArrowCheck from"babel-runtime/helpers/newArrowCheck";import{hasIn}from"@jumpn/utils-composite";import{replace,remove}from"@jumpn/utils-array";import _extends from"babel-runtime/helpers/extends";import _objectWithoutProperties from"babel-runtime/helpers/objectWithoutProperties";var _this=void 0,findIndex=function(e,r,i){return _newArrowCheck(this,_this),e.findIndex(hasIn([r],i))}.bind(void 0),_this$1=void 0,refresh=function(e){return _newArrowCheck(this,_this$1),function(r){return _newArrowCheck(this,_this$1),replace(findIndex(r,"request",e.request),[e],r)}.bind(this)}.bind(void 0),_this$2=void 0,unobserve=function(e,r){_newArrowCheck(this,_this$2);var i=e.observers,t=_objectWithoutProperties(e,["observers"]);return _extends({},t,{observers:remove(i.indexOf(r),1,i)})}.bind(void 0),_this$3=void 0,updateNotifiers=function(e,r){return _newArrowCheck(this,_this$3),e.notifiers=r(e.notifiers),e}.bind(void 0),_this$4=void 0,unobserve$1=function(e,r,i){return _newArrowCheck(this,_this$4),updateNotifiers(e,refresh(unobserve(r,i))),e}.bind(void 0);export default unobserve$1;
//# sourceMappingURL=unobserve.js.map