import _newArrowCheck from"babel-runtime/helpers/newArrowCheck";import{hasIn}from"@jumpn/utils-composite";import{replace}from"@jumpn/utils-array";var _this=void 0,findIndex=function(r,e,i){return _newArrowCheck(this,_this),r.findIndex(hasIn([e],i))}.bind(void 0),_this$1=void 0,refresh=function(r){return _newArrowCheck(this,_this$1),function(e){return _newArrowCheck(this,_this$1),replace(findIndex(e,"request",r.request),[r],e)}.bind(this)}.bind(void 0);export default refresh;
//# sourceMappingURL=refresh.js.map