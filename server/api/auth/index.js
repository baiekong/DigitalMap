const authCtrl = require('./controller');
var Models = require('../../models');

module.exports = function(app) {
  app.all('/api/auth', authCtrl.isAuthenticated);
  app.post('/api/auth/login', authCtrl.login);
  app.get('/test', function(req, res, next) {
    Models.User.findAll().then(function(item) {
      res.send({ item });
    });
  });

};
