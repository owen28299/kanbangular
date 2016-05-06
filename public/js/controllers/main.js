'use strict';

(function(){
  angular.module('kanban')
    .controller('MainController', ['$scope', '$http', 'TaskService',
    function($scope, $http, TaskService){

      $scope.name = "KanBangular";

      $scope.TaskService = TaskService;

      $scope.tasks = [];
      TaskService.getTasks().then(function(response){
        $scope.tasks = response.data;
      });

      $scope.addTask = function(task) {
        TaskService.addTask(task).then(function(response){
          $scope.tasks.push(response.data);
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