'use strict';

angular.module('TaskApp.controllers', [])
    .controller('DashboardController', ['$scope', '$location', function($scope, $location) {
        $scope.viewTasks = function() {
            $location.path('/tasks');
        }
    }])
    .controller('TasksController', ['$scope', 'Restangular', function($scope, Restangular) {
        $scope.tasks = {};

        $scope.tasksLoaded = false;
        Restangular.one('tasks').getList()
            .then(function(tasks) {
                console.log('Tasks loaded...');
                $scope.tasks = tasks;

                $scope.tasksLoaded = true;
            });
    }]);