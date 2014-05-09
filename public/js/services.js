'use strict';

angular.module('TaskApp.services', [])
    .service('EditTaskModal', ['$rootScope', '$modal', 'Restangular', function($rootScope, $modal, Restangular) {
        var editTaskModal;

        this.show = function(task, tasks) {
            var categories = Restangular.all('categories').getList();
            var tags = Restangular.all('tags').getList();

            editTaskModal = $modal.open({
                templateUrl: 'partials/edit-task.tpl.html',
                controller: 'EditTaskModalController',
                resolve: {
                    task: function() { return task; },
                    categories: function() { return categories; },
                    tags: function() { return tags; }
                }
            });

            editTaskModal.result.then(function(obj) {
                $rootScope.$broadcast('Task:updated', { task: obj.task });
            });
        };
    }]);