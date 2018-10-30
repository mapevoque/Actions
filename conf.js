exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  capabilities: {
    'browserName' : 'chrome'
  },
  onPrepare: () =>{
    browser.ignoreSynchronization = true;
  },
  specs: ['test.js'],

jasmineNodeOpts: {
  showColors : true,
  defaultTimeoutInterval: 30000
}
};