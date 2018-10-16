module.exports = function(app) {
  require('./auth')(app);
  require('./user')(app);
  require('./permission')(app);
  require('./jobtracking')(app);
};
