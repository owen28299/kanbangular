'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserTasks = sequelize.define('UserTasks', {
    userId: {
      type: DataTypes.INTEGER,
      references: {model: "User", key: "id"},
      allowNull: false
    },
    taskId: {
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