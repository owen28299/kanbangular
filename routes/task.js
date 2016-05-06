'use strict';

const express   = require('express'),
      router    = express.Router(),
      taskModel = require('../models/taskmodels')
      ;

router.route('/')
  .get(function (req, res) {
    res.send(taskModel.getTasks());
  });

  module.exports = router;

