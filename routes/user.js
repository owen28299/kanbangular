'use strict';

const express   = require('express'),
      router    = express.Router(),
      userModel = require('./methods/usermodels')
      ;

router.route('/')
  .post(function(req,res){
    userModel.addUser(req.body);
    res.send(req.body);
  })
  .get(function(req,res){
    userModel.getUsers()
    .then(function(users){
      var allUsers = [];

      users.forEach(function(element){
        allUsers.push(element.dataValues);
      });

      res.send(allUsers);

    });
  })
  ;

module.exports = router;