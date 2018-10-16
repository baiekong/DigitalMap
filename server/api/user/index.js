const userCtrl = require('./controller');
const sessionChecker = require('../middleware/session').sessionChecker

module.exports = function(app) {
  app.get('/api/users', sessionChecker, userCtrl.getUsers);
};
