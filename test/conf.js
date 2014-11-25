exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  //directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  specs: ['add-module-spec.js'],

  baseUrl: 'http://localhost:8000',

  jasmineNodeOpts: {
    showColors: true
  }
};
