'use strict';

const express = require('express'),
      app     = express(),
      PORT    = process.env.PORT || 3000,
      taskRoute = require('./routes/task'),
      bodyParser = require('body-parser')
      ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('public'));
app.use('/task', taskRoute);

app.listen(PORT, function(){
  console.log(`Server listening on port ${PORT}`);
});