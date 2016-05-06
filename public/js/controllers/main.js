'use strict';

(function(){
  angular.module('kanban')
    .controller('MainController', ['$scope', '$http', 'TaskService',
    function($scope, $http, TaskService){

      // TaskService.$get.getName()
      // .then(function(response){
      //   $scope.name = response.data;
      // });
     TaskService.getName().then(function (res){
        $scope.name = res.data;
      });

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