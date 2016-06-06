'use strict';

angular
  .module('apiTestApp', [
    'ui.router',
    'ui.grid',
    'ui.grid.resizeColumns',
    'dndLists'
  ])

  .config([
    '$stateProvider', '$urlRouterProvider', '$locationProvider',
    function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'app/components/home/homeView.html',
          controller: 'homeController'
        })
        .state('tests', {
          url: '/tests',
          templateUrl: 'app/components/tests/testsView.html',
          controller: 'testsController'
        })
        .state('servers', {
          url: '/servers',
          templateUrl: 'app/components/servers/serversView.html',
          controller: 'serversController'
        });

      $urlRouterProvider.otherwise('/');

      $locationProvider.html5Mode(true);
    }
  ]);