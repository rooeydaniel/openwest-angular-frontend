'use strict';

var taskApp = angular.module('TaskApp', ['ngRoute', 'restangular', 'TaskApp.controllers'])
    .config(['$routeProvider', 'RestangularProvider', function($routeProvider, RestangularProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'partials/dashboard.tpl.html',
                controller: 'DashboardController',
                title: 'Dashboard'
            })
            .when('/tasks', {
                templateUrl: 'partials/tasks.tpl.html',
                controller: 'TasksController',
                title: 'Tasks'
            })
            .otherwise({
                redirectTo: '/dashboard'
            });

        RestangularProvider.setBaseUrl('http://localhost:8001');
    }]);