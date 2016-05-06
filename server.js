'use strict';

const express = require('express'),
      app     = express(),
      PORT    = process.env.PORT || 3000,
      taskRoute = require('./routes/task'),
      bodyParser = require('body-parser'),
      db = require('./models')
      ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/task', taskRoute);

app.listen(PORT, function(){
  db.sequelize.sync();
  console.log(`Server listening on port ${PORT}`);
});