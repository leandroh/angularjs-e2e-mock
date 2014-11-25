angular.module('app.controllers').controller('HomeCtrl', ['$scope', 'Patient',
  function($scope, Patient) {
    $scope.greets = 'Patients';

    Patient.all(function(data) {
      $scope.patients = data;
    })
  }]);
