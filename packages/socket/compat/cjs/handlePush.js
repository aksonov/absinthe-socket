"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var _newArrowCheck=_interopDefault(require("babel-runtime/helpers/newArrowCheck"));require("phoenix");var _this=void 0,handlePush=function(e,r){return _newArrowCheck(this,_this),e.receive("ok",r.onSucceed).receive("error",r.onError).receive("timeout",r.onTimeout)}.bind(void 0);module.exports=handlePush;
//# sourceMappingURL=handlePush.js.map