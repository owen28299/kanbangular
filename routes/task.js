'use strict';

const express   = require('express'),
      router    = express.Router(),
      taskModel = require('../models/taskmodels')
      ;

router.route('/')
  .get(function (req, res) {
    res.send(taskModel.getTasks());
  })
  .post(function(req,res){
    var newTask = taskModel.addTask(req.body);
    res.json(newTask);
  })
  .put(function(req,res){
    taskModel.changeTask(req.body.field, req.body.update, req.body.id);
    var tasks = taskModel.getTasks();
    res.send(tasks);
  })
  ;

  module.exports = router;

