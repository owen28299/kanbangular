'use strict';

(function(){

  angular.module('kanban')
    .service('TaskService', ['$http', function TaskService($http){

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

    // this.getName = function(){
    //   return $http({
    //     method : "GET",
    //     url : '/task'
    //   });

    // };

    this.nextId = function(){
      return this.tasks.reduce(function(highest, task){
        return Math.max(task.id, highest);
      }, 0) + 1;
    };

    this.getTasks = function(){
      return $http({
        method : "GET",
        url : '/task'
      });
    };

    this.getTask = function(id){
      return this.tasks.filter(function(task){
        return id === task.id;
      })[0];
    };

    this.addTask = function(task){
      var data = {
        id : this.nextId,
        title : task.title,
        description : task.description,
        status : task.status
      };

      var config = {
        headers : {
          'Content-Type': 'application/json'
        }
      };

      return $http.post('/task', data, config);

    };

    this.changeTask = function(field, update, id){
      var task = this.getTask(id);
      task[field] = update;
    };

  }]);

})();