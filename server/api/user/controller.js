const Models = require('../../models');
const sessionStore = require('../../server').sessionStore;

module.exports = {
  getUsers: function(req, res, next) {
    Models.User.findAll().then(function(
      user
    ) {
      res.json(user.map(el => el.get({ plain: true })))
    });
  }
};
