'use strict';

(function(){
  angular.module('kanban')
    .controller('MainController', ['$scope', 'TaskService',
    function($scope, TaskService){
      $scope.name = "KanBangular";
      $scope.TaskService = TaskService;

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