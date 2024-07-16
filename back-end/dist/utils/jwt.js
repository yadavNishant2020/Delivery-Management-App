"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var generateToken = function generateToken(userId) {
  return _jsonwebtoken["default"].sign({
    id: userId
  }, process.env.JWT_SECRET, {
    expiresIn: '1h'
  });
};
var _default = exports["default"] = generateToken;