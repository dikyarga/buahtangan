'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Item.belongsToMany(User, {through: 'Chart',foreignKey:'itemid'});
      }
    }
  });
  return Item;
};
