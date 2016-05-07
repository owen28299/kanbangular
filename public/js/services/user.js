'use strict';

(function(){
  angular.module('kanban')
    .service('UserService', ['$http', function UserService($http){

        this.addUser = function(user){
          var data = {
            first_name : user.fname,
            last_name : user.lname
          };

          var config = {
            headers : {
              'Content-Type': 'application/json'
            }
          };

          return $http.post('/user', data, config);

        };

        this.getUsers = function(){
          return $http({
            method : "GET",
            url : '/user'
          });
        };

        this.getUser = function(name){
          return $http({
            method: "GET",
            url : '/user/' + name
          });
        };


        this.addUserTask = function(user_id, task_id){
          var data = {
            user_id : user_id,
            task_id : task_id
          };

          var config = {
            headers : {
              'Content-Type': 'application/json'
            }
          };

          return $http.post('/user/usertask', data, config);
        };

        this.getUserTasks = function(user_id){
          return $http({
            method: "GET",
            url : '/user/usertask/' + user_id
          });
        };

        this.getTaskUsers = function(task_id){
          return $http({
            method: "GET",
            url : '/user/taskuser/' + task_id
          });
        };

    }]);

})();