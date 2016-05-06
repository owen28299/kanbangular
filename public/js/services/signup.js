'use strict';

(function(){
  angular.module('kanban')
    .service('SignUpService', ['$http', function SignUpService($http){

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


    }]);

})();