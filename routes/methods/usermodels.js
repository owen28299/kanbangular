'use strict';
const db = require('../../models'),
      User = db.User,
      UserTask = db.UserTasks,
      Task = db.Task
      ;

function userModel(){

  function addUser(user){

    var newUser = {
      first_name : user.first_name,
      last_name : user.last_name,
      username : user.username,
      password : user.password
    };

    User.create(newUser);

    return(newUser);
  }

  function getUsers(){
    return User.findAll();
  }

  function getUser(user_name){
    return User.findOne({
      where: {
        first_name : user_name
      }
    });
  }

  function addUserTask(user_id, task_id){
    var newUserTask = {
      UserId : user_id,
      TaskId : task_id
    };

    UserTask.create(newUserTask);

  }

  function getUserTasks(user_id, callback){
    UserTask.findAll({
      attributes: ['TaskId'],
      where : {
        UserId : user_id
      }
    }).then(function(response){
      var taskQuery = [];

      response.forEach(function(element){
        taskQuery.push({
          id : element.TaskId
        });
      });

      Task.findAll({
        where : {
          $or : taskQuery
        }
      }).then(function(response){
        callback(response);
      });

    });
  }

  function getTaskUsers(task_id, callback){
    UserTask.findAll({
      attributes: ['UserId'],
      where : {
        TaskId : task_id
      }
    }).then(function(response){
      var userQuery = [];

      response.forEach(function(element){
        userQuery.push({
          id : element.UserId
        });
      });

      User.findAll({
        where : {
          $or : userQuery
        }
      }).then(function(response){
        callback(response);
      });

    });
  }

  return {
    addUser      : addUser,
    getUsers     : getUsers,
    getUser      : getUser,
    addUserTask  : addUserTask,
    getUserTasks : getUserTasks,
    getTaskUsers : getTaskUsers
  };

}

module.exports = userModel();