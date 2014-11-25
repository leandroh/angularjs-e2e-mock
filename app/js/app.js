'use strict';

angular.module('app.controllers', []);
angular.module('app.services', []);

var app = angular.module('app', [
  'ngRoute',
  'ngResource',
  'app.controllers',
  'app.services'
]);

app.config(['$routeProvider',
function($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
