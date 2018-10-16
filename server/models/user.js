'use strict';
const bcrypt = require('bcrypt')
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      group: DataTypes.STRING,
      session: DataTypes.STRING,
      last_login: DataTypes.DATE
    },
    {
      hooks: {
        beforeCreate: user => {
          const salt = bcrypt.genSaltSync();
          user.password = bcrypt.hashSync(user.password, salt);
        }
      }
    }
  );
  User.associate = function(models) {
    // associations can be defined here
  };

  // Instance method
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  }

  return User;
};
