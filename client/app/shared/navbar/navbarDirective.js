'use strict';

angular.module('apiTestApp')
  .directive('navbar', function navbarDirective() {
    return {
      restrict: 'E',
      templateUrl: 'app/shared/navbar/navbarView.html'
    };
  });