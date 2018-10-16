const Models = require('../../models');
const sessionStore = require('../../server').sessionStore;

module.exports = {
  getJobs: function(req, res, next) {
    Models.JobTracking.findAll().then(function(
      job
    ) {
      res.json(job.map(el => el.get({ plain: true })))
    });
  }
};
