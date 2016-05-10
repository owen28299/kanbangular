'use strict';

const express   = require('express'),
      router    = express.Router()
      ;

router.route('/')
  .get(function(req, res) {
    req.logout();
    res.send('Successfully logged out');
  });

module.exports = router;