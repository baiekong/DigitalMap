"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Permissions", [
      {
        group: "TDEM_IS",
        permission: JSON.stringify({
          management: {
            view: true,
            edit: true
          },
          operation: {
            view: true,
            edit: true
          },
          location_master: {
            view: true,
            edit: true
          },
          route_master: {
            view: true,
            edit: true
          },
          hazard_point: {
            view: true,
            edit: true
          },
          users: {
            view: true,
            edit: true
          },
          settings: {
            view: true,
            edit: true
          }
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        group: "TDEM_LP",
        permission: JSON.stringify({
          management: {
            view: true,
            edit: true
          },
          operation: {
            view: true,
            edit: true
          },
          location_master: {
            view: true,
            edit: true
          },
          route_master: {
            view: true,
            edit: true
          },
          hazard_point: {
            view: true,
            edit: true
          },
          users: {
            view: true,
            edit: true
          },
          settings: {
            view: true,
            edit: true
          }
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        group: "TDEM_LP_MANAGER",
        permission: JSON.stringify({
          management: {
            view: true,
            edit: true
          },
          operation: {
            view: true,
            edit: true
          },
          location_master: {
            view: true,
            edit: true
          },
          route_master: {
            view: true,
            edit: true
          },
          hazard_point: {
            view: true,
            edit: true
          },
          users: {
            view: true,
            edit: true
          },
          settings: {
            view: true,
            edit: true
          }
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        group: "TMT",
        permission: JSON.stringify({
          management: {
            view: true,
            edit: true
          },
          operation: {
            view: true,
            edit: true
          },
          location_master: {
            view: true,
            edit: true
          },
          route_master: {
            view: true,
            edit: true
          },
          hazard_point: {
            view: true,
            edit: true
          },
          users: {
            view: true,
            edit: true
          },
          settings: {
            view: true,
            edit: true
          }
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        group: "TMT_MANAGER",
        permission: JSON.stringify({
          management: {
            view: true,
            edit: true
          },
          operation: {
            view: true,
            edit: true
          },
          location_master: {
            view: true,
            edit: true
          },
          route_master: {
            view: true,
            edit: true
          },
          hazard_point: {
            view: true,
            edit: true
          },
          users: {
            view: true,
            edit: true
          },
          settings: {
            view: true,
            edit: true
          }
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        group: "LOGISTIC_PARTNER",
        permission: JSON.stringify({
          management: {
            view: true,
            edit: true
          },
          operation: {
            view: true,
            edit: true
          },
          location_master: {
            view: true,
            edit: true
          },
          route_master: {
            view: true,
            edit: true
          },
          hazard_point: {
            view: true,
            edit: true
          },
          users: {
            view: true,
            edit: true
          },
          settings: {
            view: true,
            edit: true
          }
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        group: "LOGISTIC_PARTNER_MANAGER",
        permission: JSON.stringify({
          management: {
            view: true,
            edit: true
          },
          operation: {
            view: true,
            edit: true
          },
          location_master: {
            view: true,
            edit: true
          },
          route_master: {
            view: true,
            edit: true
          },
          hazard_point: {
            view: true,
            edit: true
          },
          users: {
            view: true,
            edit: true
          },
          settings: {
            view: true,
            edit: true
          }
        }),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Permissions", null, {});

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
