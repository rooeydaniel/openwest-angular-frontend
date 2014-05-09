'use strict';

angular.module('TaskApp.controllers', [])
    .controller('DashboardController', ['$scope', '$location', function($scope, $location) {
        $scope.viewTasks = function() {
            $location.path('/tasks');
        }
    }])
    .controller('TasksController', ['$scope', 'Restangular', function($scope, Restangular) {
        $scope.tasks = {};
        $scope.categories = {};
        $scope.tags = {};

        $scope.tasksLoaded = false;
        Restangular.one('tasks').getList()
            .then(function(tasks) {
                $scope.tasks = tasks;

                $scope.tasksLoaded = true;
            });

        Restangular.one('categories').getList()
            .then(function(categories) {
                $scope.categories = categories;
            });

        Restangular.one('tags').getList()
            .then(function(tags) {
                $scope.tags = tags;
            });

        $scope.addTask = function(task) {
            Restangular.all('tasks').customPOST(task)
                .then(function (newTask) {
                    $scope.tasks.push(newTask)

                    $scope.task.name = '';
                    $scope.task.description = '';
                    $scope.task.due_date = '';
                    $scope.task.priority = '';
                    $scope.task.category = '';
                    $scope.task.tags = '';

                    toastr.success('You successfully added a new task!');
                });
        };
    }]);