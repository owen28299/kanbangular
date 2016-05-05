'use strict';

const express = require('express'),
      app     = express(),
      PORT    = process.env.PORT || 3000
      ;


app.listen(PORT, function(){
  console.log(`Server listening on port ${PORT}`);
});