'use strict';

(function(){
  angular.module('kanban')
    .controller('MainController', ['$scope', '$http', 'TaskService', '$window', '$rootScope' ,
    function($scope, $http, TaskService, $window, $rootScope){

      $scope.name = "KanBangular";

      $scope.tasks = [];
      TaskService.getTasks().then(function(response){
        $scope.tasks = response.data;
      })
      .catch(function(){
        $window.location.href = '/login';
      });

      $scope.showAddForm = function(){

        if($rootScope.isLoggedIn === false){
          $window.location.href = "/login";
          return;
        }

        if(!$scope.newtask){
          $scope.newtask = true;
        }
        else {
          $scope.newtask = false;
        }
      };

      $scope.addTask = function(task) {
        TaskService.addTask(task, function(tasks){
          $scope.tasks = tasks;
          $scope.newtask = false;
        });
      }
      ;

      $scope.changeTask = function(field, update, id) {
        TaskService.changeTask(field,update,id).then(function(response){
          $scope.tasks = response.data;
        })
        .catch(function(){
        $window.location.href = '/login';
        });
      };

      $scope.toggle = function(editMode){
        if (editMode.value){
          editMode.value = false;
        }
        else{
          editMode.value = true;
        }
      };

      $scope.deleteTask = function(task_id){
        TaskService.deleteTask(task_id).then(function(response){
          $scope.tasks = response.data;
        })
        .catch(function(){
        $window.location.href = '/login';
        });
      };


      $scope.$on('task-item.drop', function(error, element){
        var idText = (element[0].innerHTML);
        var idstart = idText.indexOf('!') + 1;
        var idend = idText.indexOf('!', idstart);

        var id = idText.substring(idstart, idend);

        var statusText = (element[0].parentNode.innerHTML);
        var statusstart = statusText.indexOf("status='") + 8;
        var statusend = statusText.indexOf("'", statusstart);

        var newStatus = statusText.substring(statusstart, statusend);

        TaskService.changeTask("status", newStatus, id).then(function(response){
          $scope.tasks = response.data;
        })
        .catch(function(){
          $window.location.href = '/login';
        });

      });

    }]);
})();