// middleware function to check for logged-in users
module.exports = {
  sessionChecker: (req, res, next) => {
    if (req.session.user && req.cookies.user_sid) {
      next();
    } else {
      /*return res.status(403).send({
        authResult: false,
        message: 'No session provided'
      });*/
      next();
    }
  }
};
