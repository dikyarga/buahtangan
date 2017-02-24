'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    description: DataTypes.TEXT,
    pictlink:DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Item.belongsToMany(models.User, {
          through: 'Chart',
          foreignKey: 'itemid'
        });
      }
    }
  });
  return Item;
};
