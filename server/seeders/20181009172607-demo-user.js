"use strict";
const bcrypt = require('bcrypt')
const salt = bcrypt.genSaltSync();

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "demo",
          email: "demo@demo.com",
          password:  bcrypt.hashSync('demo', salt),
          group: 'TDEM_IS',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "tdem_is",
          email: "tdem_is@tdem_is.com",
          password:  bcrypt.hashSync('tdem_is', salt),
          group: 'TDEM_IS',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "tdem_lp",
          email: "tdem_lp@tdem_lp.com",
          password:  bcrypt.hashSync('tdem_lp', salt),
          group: 'TDEM_LP',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "tdem_lp_manager",
          email: "tdem_lp_manager@tdem_lp_manager.com",
          password:  bcrypt.hashSync('tdem_lp_manager', salt),
          group: 'TDEM_LP_MANAGER',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "tmt",
          email: "tmt@tmt.com",
          password:  bcrypt.hashSync('tmt', salt),
          group: 'TMT',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "tmt_manager",
          email: "tmt_manager@tmt_manager.com",
          password:  bcrypt.hashSync('tmt_manager', salt),
          group: 'TMT_MANAGER',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "logistic_partner",
          email: "logistic_partner@logistic_partner.com",
          password:  bcrypt.hashSync('logistic_partner', salt),
          group: 'LOGISTIC_PARTNER',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          username: "logistic_partner_manager",
          email: "logistic_partner_manager@logistic_partner_manager.com",
          password:  bcrypt.hashSync('logistic_partner_manager', salt),
          group: 'LOGISTIC_PARTNER_MANAGER',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
