'use strict';

(function(){
  angular.module('kanban')
    .controller('UserController', ['$scope', '$http', 'UserService', '$window',
    function($scope, $http, UserService, $window){
      $scope.signup = "Sign Up";

      $scope.addUser = function(user){
        if(user.password !== user.password2){
          console.log("passwords do not match");
        }
        else {
          UserService.addUser(user).then(function(){
            $window.location.href = "/login";
          });
        }
      };

      $scope.users = [];
      UserService.getUsers().then(function(response){
        $scope.users = response.data;
      });

      $scope.addUserTask = function(user, task_id){
        var exists;

        $scope.taskusers.forEach(function(element){
          if(element.id === JSON.parse(user).id){
            exists = true;
            console.log("already exists");
          }
        });

        if(!exists){
          UserService.addUserTask(JSON.parse(user).id, task_id).then(function(){
            $scope.taskusers.push(JSON.parse(user));
          })
          .catch(function(error){
            console.log(error);
            $window.location.href = "/login";
          });
        }
      };

      $scope.removeUserTask = function(user_id, task_id){
        UserService.removeUserTask(user_id, task_id).then(function(response){
          $scope.taskusers = $scope.taskusers.filter(function(element){
            return element.id !== user_id;
          });
        })
        .catch(function(error){
          console.log(error);
          $window.location.href = "/login";
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

      $scope.taskusers = [];
      $scope.findTaskUsers = function(task_id){
        UserService.getTaskUsers(task_id).then(function(response){
          $scope.taskusers = response.data;
        });
      };

    }]);
})();