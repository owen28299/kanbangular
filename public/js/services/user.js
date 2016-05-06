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


    }]);

})();