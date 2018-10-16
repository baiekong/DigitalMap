const permCtrl = require('./controller');
const sessionChecker = require('../middleware/session').sessionChecker
var Models = require('../../models');

module.exports = function(app) {
  app.all('/api/permission', sessionChecker, permCtrl.getPermissions);
};
