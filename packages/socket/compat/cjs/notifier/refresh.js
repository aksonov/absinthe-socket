"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var _newArrowCheck=_interopDefault(require("babel-runtime/helpers/newArrowCheck")),utilsComposite=require("@jumpn/utils-composite"),utilsArray=require("@jumpn/utils-array"),_this=void 0,findIndex=function(e,r,i){return _newArrowCheck(this,_this),e.findIndex(utilsComposite.hasIn([r],i))}.bind(void 0),_this$1=void 0,refresh=function(e){return _newArrowCheck(this,_this$1),function(r){return _newArrowCheck(this,_this$1),utilsArray.replace(findIndex(r,"request",e.request),[e],r)}.bind(this)}.bind(void 0);module.exports=refresh;
//# sourceMappingURL=refresh.js.map
