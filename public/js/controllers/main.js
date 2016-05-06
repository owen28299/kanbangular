'use strict';

(function(){
  angular.module('kanban')
    .controller('MainController', ['$scope', '$http', 'TaskService',
    function($scope, $http, TaskService){

      $scope.name = "KanBangular";

      $scope.tasks = [];
      TaskService.getTasks().then(function(response){
        $scope.tasks = response.data;
      });

      $scope.addTask = function(task) {
        TaskService.addTask(task).then(function(response){
          var newTask = response.data;

          var nextId = $scope.tasks.reduce(function(highest, task){
              return Math.max(task.id, highest);
            }, 0) + 1;

          newTask.id = nextId;

          $scope.tasks.push(newTask);
        });
      };

      $scope.changeTask = function(field, update, id) {
        TaskService.changeTask(field,update,id).then(function(response){
          $scope.tasks = response.data;
        });
      };

      $scope.toggle = function(editMode){
        if (editMode.value){
          editMode.value = false;
        }
        else{
          editMode.value = true;
        }
      };

    }]);
})();