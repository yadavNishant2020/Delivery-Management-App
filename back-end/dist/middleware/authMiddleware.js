"use strict";

var jwt = require('jsonwebtoken');
var authMiddleware = function authMiddleware(req, res, next) {
  var token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({
      error: 'No token, authorization denied'
    });
  }
  try {
    var decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({
      error: 'Token is not valid'
    });
  }
};
module.exports = authMiddleware;