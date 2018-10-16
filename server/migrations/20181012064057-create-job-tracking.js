'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('JobTrackings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      plan_arrival_time: {
        type: Sequelize.DATE
      },
      route: {
        type: Sequelize.STRING
      },
      tracking_by: {
        type: Sequelize.STRING
      },
      run_seq: {
        type: Sequelize.STRING
      },
      truck_license: {
        type: Sequelize.STRING
      },
      ETA: {
        type: Sequelize.FLOAT
      },
      part_usage_time: {
        type: Sequelize.DATE
      },
      actual_arrival_time: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.STRING
      },
      alt_route_hazard_point: {
        allowNull: true,
        type: Sequelize.JSON
      },
      problem: {
        type: Sequelize.STRING
      },
      action: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('JobTrackings');
  }
};