'use strict';

(function(){
  angular.module('kanban')
    .service('LoginService', ['$http', function($http){
      this.login = function(user){
        var data = {
          username : user.username,
          password : user.password
        };

        var config = {
          headers : {
            'Content-Type': 'application/json'
          }
        };

        return $http.post('/login', data, config);
      };
    }]);

})();