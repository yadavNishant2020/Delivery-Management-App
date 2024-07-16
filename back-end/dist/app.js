"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
require("./config/dotenv.js");
var _db = _interopRequireDefault(require("./config/db.js"));
var _authRoutes = _interopRequireDefault(require("./routes/authRoutes.js"));
var _adminRoutes = _interopRequireDefault(require("./routes/adminRoutes.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// Import the cors package
// Load environment variables

var app = (0, _express["default"])();

// Middleware
app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])()); // Enable CORS

// Routes
app.use('/api/auth', _authRoutes["default"]);
app.use('/api/admin', _adminRoutes["default"]);

// Connect to database
(0, _db["default"])();
var _default = exports["default"] = app;