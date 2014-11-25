'use strict';

var mockModule = require('./mocked-backend');

describe('mock resource calls', function() {
  it('lists all patients', function() {
    browser.addMockModule('httpBackendMock', mockModule.httpBackendMock);
    browser.get('/');

    var patients = element.all(by.repeater('patient in patients'));

    expect(patients.count()).toBe(1);
  });
});
