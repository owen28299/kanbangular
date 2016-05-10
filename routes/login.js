'use strict';

const express   = require('express'),
      router    = express.Router(),
      passport  = require('../passport')
      ;

router.route('/')
  .post(passport.authenticate('local'), function(req,res){
    var details = req.user[0].dataValues;

    delete details.password;

    res.send(details);
  });

module.exports = router;