"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _adminController = require("../controllers/adminController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();
router.post('/signup', _adminController.adminSignUp);
router.post('/signin', _adminController.adminSignIn);
var _default = exports["default"] = router;