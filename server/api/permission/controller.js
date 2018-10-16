const Models = require('../../models');
const sessionStore = require('../../server').sessionStore;

module.exports = {
  getPermissions: function(req, res, next) {
    Models.Permission.findAll().then(function(
      permission
    ) {
      res.json(permission.map(el => el.get({ plain: true })))
    });
  }
};
