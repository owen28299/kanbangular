'use strict';

const express   = require('express'),
      router    = express.Router(),
      userModel = require('./methods/usermodels')
      ;

router.route('/')
  .post(function(req,res){
    userModel.addUser(req.body);
    res.send(req.body);
  });

module.exports = router;