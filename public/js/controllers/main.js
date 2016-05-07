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
        TaskService.addTask(task, function(tasks){
          $scope.tasks = tasks;
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

      $scope.deleteTask = function(task_id){
        TaskService.deleteTask(task_id).then(function(response){
          $scope.tasks = response.data;
        });
      };

    }]);
})();