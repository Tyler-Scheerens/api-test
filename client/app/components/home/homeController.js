'use strict';

angular
  .module('apiTestApp')

  .controller('homeController', ['testsApiService', '$scope', function homeController(testsApiService, $scope) {
    $scope.testsGridOptions = {
      enableGridMenu: true,
      enableSorting: true,
      columnDefs: [
        { name:'test', field: 'name' },
        { name:'version', field: 'version' }
      ]
    };

    $scope.load = function () {
      testsApiService.readAll().then(function (response) {
        $scope.testsGridOptions.data = response;
      });
    }

    $scope.load();
  }]);