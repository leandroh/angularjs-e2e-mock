module.exports = {
  httpBackendMock: function() {
    angular.module('httpBackendMock', ['app', 'ngMockE2E']).run(function($httpBackend) {
      var patients = [
        {"name":"Leandro Heuert","username":"leandro.heuert@miniclinic.com.br"}
      ];

      $httpBackend.whenGET('/patients').respond(patients);
      $httpBackend.whenGET(/.*/).passThrough();
    });
  }
}
