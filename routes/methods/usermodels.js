'use strict';
const db = require('../../models'),
      User = db.User
      ;

function userModel(){

  function addUser(user){

    var newUser = {
      first_name : user.first_name,
      last_name : user.last_name
    };

    User.create(newUser);

    return(newUser);
  }

  return {
    addUser : addUser
  };

}

module.exports = userModel();