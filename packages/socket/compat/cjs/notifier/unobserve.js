"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var _extends=_interopDefault(require("babel-runtime/helpers/extends")),_objectWithoutProperties=_interopDefault(require("babel-runtime/helpers/objectWithoutProperties")),_newArrowCheck=_interopDefault(require("babel-runtime/helpers/newArrowCheck")),utilsArray=require("@jumpn/utils-array"),_this=void 0,unobserve=function(e,r){_newArrowCheck(this,_this);var t=e.observers,i=_objectWithoutProperties(e,["observers"]);return _extends({},i,{observers:utilsArray.remove(t.indexOf(r),1,t)})}.bind(void 0);module.exports=unobserve;
//# sourceMappingURL=unobserve.js.map