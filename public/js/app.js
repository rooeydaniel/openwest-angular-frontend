'use strict';

var taskApp = angular.module('TaskApp', ['ngRoute', 'TaskApp.controllers'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/dashboard', {
                templateUrl: 'partials/dashboard.tpl.html',
                controller: 'DashboardController',
                title: 'Dashboard'
            })
            .otherwise({
                redirectTo: '/dashboard'
            });
    }]);