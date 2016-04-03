'use strict';

angular
  .module('apiTestApp', [
    'ui.router'
  ])

  .config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider',
    function angularConfig($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/components/home/home.html',
          controller: 'homeController'
        })
        .state('tests', {
          url: '/tests',
          templateUrl: 'app/components/tests/tests.html',
          controller: 'testsController'
        });

      $urlRouterProvider.otherwise('/');

      $locationProvider.html5Mode(true);
    }
  ]);