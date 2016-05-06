'use strict';

var database = require('../db-temp/taskdb');

function taskModel(){

    var tasks = database.tasks;

    function nextId(){
      return tasks.reduce(function(highest, task){
        return Math.max(task.id, highest);
      }, 0) + 1;
    }

    function getTasks(){
      return tasks;
    }

    function getTask(id){
      return tasks.filter(function(task){
        return id === task.id;
      })[0];
    }

    function addTask(task){

      var newTask = {
        id : nextId(),
        title : task.title,
        description : task.description,
        status : task.status
      };

      tasks.push(newTask);


      return(newTask);
    }

    function changeTask(field, update, id){
      var task = getTask(id);
      task[field] = update;
    }

    return {
      nextId : nextId,
      getTasks : getTasks,
      getTask : getTask,
      addTask : addTask,
      changeTask : changeTask
    };


}


module.exports = taskModel();