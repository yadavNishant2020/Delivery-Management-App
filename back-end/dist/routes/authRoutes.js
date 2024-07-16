"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _authController = require("../controllers/authController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/routes/authRoutes.js

var router = _express["default"].Router();
router.post('/signup', _authController.signup);
router.post('/signin', _authController.signin);
var _default = exports["default"] = router;