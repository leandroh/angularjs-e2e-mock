'use strict';

angular.module('app.services', ['ngResource']).factory('Patient', ['$resource',
  function($resource) {
    return $resource('/patients', {}, {
      all: { method: 'GET', isArray: true }
    });
  }]);
