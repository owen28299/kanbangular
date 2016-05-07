'use strict';
const db = require('../../models'),
      Task = db.Task
      ;

function taskModel(){

    function getTasks(){
      return Task.findAll();
    }

    function addTask(task){

      var newTask = {
        title : task.title,
        description : task.description,
        status : task.status
      };

      Task.create(newTask);

      return(newTask);
    }

    function changeTask(field, update, id, callback){

      var change = {};
      change[field] = update;
      change.updatedAt = new Date();

      Task.update(change, {
        where : {
          id : id
        }
      })
      .then(function(){
        Task.findAll().then(function(tasks){
          var allTasks = [];

          tasks.forEach(function(element){
            allTasks.push(element.dataValues);
          });

          callback(allTasks);
        });

      });

    }

    function deleteTask(task_id, callback){
      Task.destroy({
        where : {
          id : task_id
        }
      })
      .then(function(){
        Task.findAll().then(function(tasks){
          var allTasks = [];

          tasks.forEach(function(element){
            allTasks.push(element.dataValues);
          });

          callback(allTasks);
        });
      });
    }

    return {
      getTasks : getTasks,
      addTask : addTask,
      changeTask : changeTask,
      deleteTask : deleteTask
    };


}


module.exports = taskModel();