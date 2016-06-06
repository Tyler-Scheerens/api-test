(function () {
  angular.module('apiTestApp')
    .service('testsApiService', ['$http', testsApiService]);

  function testsApiService($http) {
    var self = this;
    var baseUrl = 'http://localhost:3000/api/';
    var anonymousToken = {
      'AnonymousToken': '78020290-5df3-44b8-9bdb-7b3b4fea2f25'
    };
    var objectName = 'tests';

    self.readAll = function () {
      return $http({
        method: 'GET',
        url: baseUrl + objectName,
        headers: anonymousToken
      }).then(function (response) {
        return response.data;
      });
    };

    self.readOne = function (id) {
      return $http({
        method: 'GET',
        url: baseUrl + objectName + '/' + id,
        headers: anonymousToken
      }).then(function (response) {
        return response.data;
      });
    };

    self.create = function (data) {
      return $http({
        method: 'POST',
        url: baseUrl + objectName,
        data: data,
        params: {
          returnObject: true
        },
        headers: anonymousToken
      }).then(function (response) {
        return response.data;
      });
    };

    self.update = function (id, data) {
      return $http({
        method: 'PUT',
        url: baseUrl + objectName + '/' + id,
        data: data,
        headers: anonymousToken
      }).then(function (response) {
        return response.data;
      });
    };

    self.delete = function (id) {
      return $http({
        method: 'DELETE',
        url: baseUrl + objectName + '/' + id,
        headers: anonymousToken
      });
    };
  }
}());
