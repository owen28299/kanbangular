'use strict';
const bcrypt = require('bcryptjs');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    username : DataTypes.STRING,
    password : DataTypes.STRING
  }, {
    hooks : {
      beforeCreate : function(user, options) {
        var salt = bcrypt.genSaltSync(10);
        user.password = bcrypt.hashSync(user.password, salt);
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        User.belongsToMany(models.Task, { through: models.UserTasks });
      }
    }
  });
  return User;
};