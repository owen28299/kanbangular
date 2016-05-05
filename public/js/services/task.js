'use strict';

(function(){

  function TaskService(){
    this.tasks = [
      {
        id : 1,
        title : "Learn Angular",
        description : "Read the docs",
        status : "todo"
      },
      {
        id : 2,
        title : "Learning Angular",
        description : "Test and break",
        status : "doing"
      },
      {
        id : 3,
        title : "Learnt Angular",
        description : "Lol jokes",
        status : "done"
      }
    ];

    this.nextId = function(){
      return this.tasks.reduce(function(highest, task){
        return Math.max(task.id, highest);
      }, 0) + 1;
    };

    this.getTasks = function(){
      return this.tasks;
    };

    this.getTask = function(id){
      return this.tasks.filter(function(task){
        return id === task.id;
      })[0];
    };

    this.addTask = function(task){
      this.tasks.push({
        id : this.nextId,
        title : task.title,
        description : task.description,
        status : task.status
      });
    };

  }

  angular.module('kanban')
    .service('TaskService', TaskService);

})();