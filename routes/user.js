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

router.route('/:name')
  .get(function(req,res){
    userModel.getUser(req.params.name).then(function(response){
      res.send(response);
    });
  });

router.route('/usertask')
  .post(function(req,res){
    userModel.addUserTask(req.body.user_id, req.body.task_id);
    res.send(req.body);
  })
  ;

router.route('/usertask/:id')
  .get(function(req,res){
    userModel.getUserTasks(req.params.id, function(response){
      res.send(response);
    });
  });

router.route('/taskuser/:id')
  .get(function(req,res){
    userModel.getTaskUsers(req.params.id, function(response){
      res.send(response);
    });
  });

router.route('/usertask/:user/:task')
  .delete(function(req,res){
    userModel.removeUserTask(req.params.user, req.params.task);
    res.send("deleted");
  });

module.exports = router;