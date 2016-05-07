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

      $scope.addUserTask = function(user_id, task_id){
        UserService.addUserTask(user_id, task_id).then(function(response){
          console.log(response);
        });
      };

      $scope.myTasks = [];
      $scope.findUserTasks = function(user_name){
        if(user_name === ""){
          $scope.myTasks = [];
        }

        else {

          UserService.getUser(user_name).then(function(response){
            if(!response.data.id){
              console.log(response.data);
              $scope.myTasks = [];
            }

            else{
              var user_id = response.data.id;

              UserService.getUserTasks(user_id).then(function(response){
                $scope.myTasks = response.data;
              });
            }

          });

        }
      };

    }]);
})();