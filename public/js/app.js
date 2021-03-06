'use strict';

angular.module('TaskApp', ['ngRoute', 'ngCookies', 'restangular', 'ui.bootstrap', 'TaskApp.controllers', 'TaskApp.filters', 'TaskApp.services'])
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
    }])
    .run(function ($http, $cookies) {
        $http.defaults.headers.common['X-CSRFToken'] = $cookies['csrftoken'];

//        toastr.options = {
//            "positionClass": "toast-top-center"
//        };
    });