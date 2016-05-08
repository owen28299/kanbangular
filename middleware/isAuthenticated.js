'use strict';

function isAuthenticated(req, res, next) {
    if(!req.isAuthenticated()) {
      return res.status(401).json({failure: "Unauthorized"});
    }
    return next();
  }

module.exports = isAuthenticated;