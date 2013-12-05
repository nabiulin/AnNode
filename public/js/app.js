'use strict';

/**
 * Application routing
 * @type {n.config|*|config}
 */
var app = angular.module('App', ['ngRoute']).
    config(function ($routeProvider, $locationProvider) {
        $routeProvider.
            when('/', {
                title: 'Main',
                templateUrl: 'partials/index',
                controller: 'Index'
            })
            .when('/about', {
                title: 'About',
                templateUrl: 'partials/about'
            })
            .when('/services', {
                title: 'Services',
                templateUrl: 'partials/services'
            })
            .when('/contacts', {
                title: 'Contacts',
                templateUrl: 'partials/contacts'
            })
            .otherwise({
                redirectTo: '/'
            });
        $locationProvider.html5Mode(true);
    });

/**
 * Bootstrap
 */
app.run(function($rootScope, $templateCache) {
    $rootScope.$on('$viewContentLoaded', function() {
        $templateCache.removeAll();
    });
    $rootScope.$on('$routeChangeSuccess', function(event, current) {
        $rootScope.pageTitle = typeof current.$$route == 'undefined' || !current.$$route.title ? 'Index' : current.$$route.title;
    });
});