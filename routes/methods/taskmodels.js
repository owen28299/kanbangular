'use strict';
const db = require('../../models'),
      Task = db.Task
      ;


var database = require('../../db-temp/taskdb');

function taskModel(){

    var tasks = database.tasks;

    function getTasks(){
      return Task.findAll();
    }

    function getTask(id){
      return tasks.filter(function(task){
        return id === task.id;
      })[0];
    }

    function addTask(task){

      var newTask = {
        title : task.title,
        description : task.description,
        status : task.status,
        createdAt : new Date(),
        updatedAt : new Date()
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

    return {
      getTasks : getTasks,
      getTask : getTask,
      addTask : addTask,
      changeTask : changeTask
    };


}


module.exports = taskModel();