'use strict';

(function(){
  angular.module('kanban')
    .controller('MainController', ['$scope', 'TaskService',
    function($scope, TaskService){
      $scope.name = "KanBangular";
      $scope.TaskService = TaskService;
    }]);
})();