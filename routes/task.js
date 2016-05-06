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
  });

  module.exports = router;

