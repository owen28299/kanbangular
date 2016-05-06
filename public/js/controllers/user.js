'use strict';

(function(){
  angular.module('kanban')
    .controller('UserController', ['$scope', '$http', 'UserService',
    function($scope, $http, UserService){
      $scope.signup = "Sign Up Now!!!";

      $scope.addUser = function(user){
        UserService.addUser(user).then(function(response){
          console.log(response.data);
        });
      };

      $scope.users = [];
      UserService.getUsers().then(function(response){
        $scope.users = response.data;
      });

    }]);
})();