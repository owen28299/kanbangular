'use strict';

(function(){
  angular.module('kanban')
    .controller('MainController', ['$scope',
    function($scope){
      $scope.name = "KanBangular";
    }]);
})();