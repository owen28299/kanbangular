'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserTasks = sequelize.define('UserTasks', {
    UserId: {
      type: DataTypes.INTEGER,
      references: {model: "User", key: "id"},
      allowNull: false
    },
    TaskId: {
      type: DataTypes.INTEGER,
      references: {model: "User", key: "id"},
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return UserTasks;
};