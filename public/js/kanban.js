'use strict';

(function(){

  angular.module('kanban', ['ngRoute', 'ngAnimate', angularDragula(angular)]);

  var myApp = angular.module('kanban');

  myApp
    .config(['$routeProvider','$locationProvider',
    function($routeProvider, $locationProvider){
      $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
      });

      $routeProvider
        .when('/', {
          templateUrl : 'views/main.html',
          controller  : 'MainController'
        })
        .when('/signup', {
          templateUrl : 'views/signup.html',
          controller  : 'UserController'
        })
        .when('/tasks', {
          templateUrl : 'views/tasks.html',
          controller  : 'UserController'
        })
        .when('/login', {
          templateUrl : 'views/login.html',
          controller  : 'LoginController'
        })
        .otherwise({
          templateUrl : 'views/404.html'
        });

    }])
    .run(['$window', '$rootScope', '$http',
    function($window, $rootScope, $http){
      var currUser = JSON.parse($window.sessionStorage.getItem('user'));
      $rootScope.currUser =  currUser;

      $http.get('/ping').then(function(){
        console.log("Logged in as " + currUser.username);
      })
      .catch(function(){
        $rootScope.currUser =  {
          first_name : "Guest"
        };
      });

      $rootScope.logout = function(){
        $http.get('/logout').then(function(){
          $window.location.href = "/login";
        });
      };
    }]);

})();