"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var UserSchema = new _mongoose["default"].Schema({
  name: String,
  email: {
    type: String,
    unique: true
  },
  username: {
    type: String,
    unique: true
  },
  password: String
});
var User = _mongoose["default"].model('User', UserSchema);
var _default = exports["default"] = User;