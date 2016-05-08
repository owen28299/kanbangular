'use strict';

(function(){
  angular.module('kanban')
    .controller('LoginController', ['$scope',
      'LoginService',
      '$rootScope',
      '$window',
      function($scope, LoginService, $rootScope, $window){
        $scope.login = function(user){
          LoginService.login(user).then(function(response){
            if(response.data){
              $window.sessionStorage.setItem("user", JSON.stringify(response.data));
              $rootScope.currUser = response.data;
              $window.location.href="/";
            }
          });
        };
      }]);
})();