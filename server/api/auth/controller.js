const Models = require('../../models');
const sessionStore = require('../../server').sessionStore;

module.exports = {
  // Define a middleware function to be used for every secured routes
  isAuthenticated: function(req, res, next) {
    if (req.session.user && req.cookies.user_sid) {
      res.json({
        authResult: true,
        user: req.session.user,
        message: 'Successed authentication'
      });
    } else {
      // return an error
      return res.status(403).send({
        authResult: false,
        message: 'No session provided'
      });
    }
  },
  login: function(req, res, next) {
    var username = req.body.username,
      password = req.body.password;

    Models.User.findOne({ where: { username: username } }).then(function(user) {
      if (!user) {
        res.json({
          authResult: false,
          message: 'User not found'
        });
      } else if (!user.validPassword(password)) {
        res.json({
          authResult: false,
          message: 'Incorrect password'
        });
      } else {
        // Delete previous login session ID
        if(sessionStore){
        sessionStore.destroy(user.session, function(ret) {
          Models.User.update(
            {
              last_login: new Date(),
              session: req.sessionID
            },
            { where: { username: username } }
          ).then(function() {
            req.session.user = user;
            // return the information including token as JSON
            res.json({
              authResult: true,
              user: user,
              message: 'Successed Signin'
            });
          });
        });}else{
          res.json({
            authResult: false,
            message: 'Service is temporarily unavailable, please try again later'
          });
        }
      }
    });
  },
  logout: function(req, res, next) {
    if (req.session.user && req.cookies.user_sid) {
      res.clearCookie('user_sid');
    } else {
      res.redirect('/login');
    }
  }
};
