'use strict';

(function(){
  angular.module('kanban')
    .controller('SignUpController', ['$scope', '$http', 'SignUpService',
    function($scope, $http, SignUpService){
      $scope.signup = "Sign Up Now!!!";

      $scope.addUser = function(user){
        SignUpService.addUser(user).then(function(response){
          console.log(response.data);
        });
      };

    }]);
})();