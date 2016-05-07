'use strict';

(function(){

  angular.module('kanban')
    .service('TaskService', ['$http', function TaskService($http){

    this.getTasks = function(){
      return $http({
        method : "GET",
        url : '/task'
      });
    };

    this.addTask = function(task, callback){
      var data = {
        title : task.title,
        description : task.description,
        status : task.status
      };

      var config = {
        headers : {
          'Content-Type': 'application/json'
        }
      };

      $http.post('/task', data, config).then(function(response){
        callback(response.data);
      });

    };

    this.changeTask = function(field, update, id){
      var data = {
        field : field,
        update : update,
        id : id
      };

      var config = {
        headers : {
          'Content-Type': 'application/json'
        }
      };

      return $http.put('/task', data, config);
    };

    this.deleteTask = function(task_id){
      return $http.delete('/task/' + task_id);
    };

  }]);

})();