"use strict";

var _app = _interopRequireDefault(require("./app.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PORT = process.env.PORT || 5000;
_app["default"].listen(PORT, function () {
  console.log("Server is running on http://localhost:".concat(PORT));
});