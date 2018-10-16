'use strict';
module.exports = (sequelize, DataTypes) => {
  const JobTracking = sequelize.define('JobTracking', {
    plan_arrival_time: DataTypes.DATE,
    route: DataTypes.STRING,
    tracking_by: DataTypes.STRING,
    run_seq: DataTypes.STRING,
    truck_license: DataTypes.STRING,
    ETA: DataTypes.FLOAT,
    part_usage_time: DataTypes.DATE,
    actual_arrival_time: DataTypes.DATE,
    status: DataTypes.STRING,
    alt_route_hazard_point: DataTypes.JSON,
    problem: DataTypes.STRING,
    action: DataTypes.STRING
  }, {});
  JobTracking.associate = function(models) {
    // associations can be defined here
  };
  return JobTracking;
};