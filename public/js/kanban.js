'use strict';

(function(){

  angular.module('kanban', ['ngRoute', 'ngAnimate']);

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
    .run(['$window', '$rootScope', function($window, $rootScope){
      var currUser = JSON.parse($window.sessionStorage.getItem('user'));
      $rootScope.currUser =  currUser;
    }]);

})();