'use strict';
module.exports = (sequelize, DataTypes) => {
  const permission = sequelize.define('Permission', {
    group: DataTypes.STRING,
    permission: DataTypes.JSON
  }, {});
  permission.associate = function(models) {
    // associations can be defined here
  };
  return permission;
};