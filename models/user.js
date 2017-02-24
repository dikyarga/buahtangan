'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING,
    role: DataTypes.STRING,
    chatid: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.belongsToMany(Item, {through: 'Chart',foreignKey:'userid'});
    }
  });
  return User;
};
