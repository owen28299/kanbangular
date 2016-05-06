'use strict';

(function(){
  angular.module('kanban')
    .controller('MainController', ['$scope', '$http', 'TaskService',
    function($scope, $http, TaskService){

      // TaskService.getName().then(function (res){

      // });

      $scope.name = "KanBangular";

      $scope.TaskService = TaskService;

      TaskService.getTasks().then(function(data){
        $scope.tasks = data.data;
      });

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