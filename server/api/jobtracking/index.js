const jobCtrl = require('./controller');
const sessionChecker = require('../middleware/session').sessionChecker

module.exports = function(app) {
  app.get('/api/jobs', sessionChecker, jobCtrl.getJobs);
};
