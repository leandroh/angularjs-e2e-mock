'use strict';

angular.module('app.services', ['ngResource']).factory('Patient', ['$resource',
  function($resource) {
    return $resource('http://stage.miniclinic.com.br/patients', {}, {
      all: { method: 'GET', isArray: true }
    });
  }]);
