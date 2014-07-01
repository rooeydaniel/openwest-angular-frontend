'use strict';

angular.module('TaskApp.controllers', [])
    .controller('DashboardController', ['$scope', '$location', function ($scope, $location) {
        $scope.viewTasks = function () {
            $location.path('/tasks');
        }
    }])
    .controller('TasksController', ['$scope', 'Restangular', 'EditTaskModal', function ($scope, Restangular, EditTaskModal) {
        $scope.tasks = {};
        $scope.categories = {};
        $scope.tags = {};
        $scope.deleteButton = false;

        $scope.tasksLoaded = false;
        Restangular.one('tasks').getList()
            .then(function (tasks) {
                $scope.tasks = tasks;

                $scope.tasksLoaded = true;
            });

        $scope.categoriesLoaded = false;
        Restangular.one('categories').getList()
            .then(function (categories) {
                $scope.categories = categories;
                $scope.categoriesLoaded = true;
            });

        $scope.tagsLoaded = false;
        Restangular.one('tags').getList()
            .then(function (tags) {
                $scope.tags = tags;
                $scope.tagsLoaded = true;
            });

        $scope.addTask = function (task) {
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

        $scope.editTask = function (task) {
            EditTaskModal.show(task, $scope.tasks);
        };

        $scope.$on('Task:updated', function (event, obj) {
            for (var i = 0; i < $scope.tasks.length; i++) {
                if ($scope.tasks[i].id == obj.task.id) {
                    $scope.tasks[i] = obj.task;
                    break;
                }
            }
        });

        $scope.confirm = function () {
            $scope.deleteButton = true;
        };

        $scope.cancelDelete = function () {
            $scope.deleteButton = false;
        };

        $scope.removeTask = function (task) {
            var taskId = task.id;

            Restangular.one('tasks', task.id).remove()
                .then(function () {
                    toastr.success('Task was deleted');

                    for (var i = 0; i < $scope.tasks.length; i++) {
                        if ($scope.tasks[i].id == taskId) {
                            $scope.tasks.splice(i, 1);
                            break;
                        }
                    }

                    $scope.deleteButton = false;
                });
        };
    }])
    .controller('EditTaskModalController', ['$scope', '$modalInstance', 'Restangular', 'task', 'categories', 'tags', function ($scope, $modalInstance, Restangular, task, categories, tags) {
        $scope.task = (task) ? angular.copy(task) : {};
        $scope.categories = (categories) ? angular.copy(categories) : {};
        $scope.tags = (tags) ? angular.copy(tags) : {};

        $scope.save = function (obj) {
            var task = obj;

            Restangular.one('tasks', task.id).customPUT(task)
                .then(function (task) {
                    toastr.success('Task was updated successfully!');

                    $modalInstance.close({task: task});
                });
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    }]);