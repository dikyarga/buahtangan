'use strict';
module.exports = function(sequelize, DataTypes) {
  var Chart = sequelize.define('Chart', {
    userid: DataTypes.INTEGER,
    itemid: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Chart;
};