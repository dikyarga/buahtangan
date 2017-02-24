'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkInsert('Items', [{
        name :'empek-empek',
        price : "20000",
        description: "empek-empek ikan tenggiri segar",
        pictlink:'http://pempeklince.com/wp-content/uploads/2013/12/pempek-kapal-selam.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name :'Sambal Lingkong',
        price : "25000",
        description: "untuk yang satu ini wajib diburu juga. Dari namanya saja sudah unik",
        pictlink:'https://gamaholiday.com/wp-content/uploads/2016/08/Pulau-Belitung-Sambal-Lingkong-Gama-Holiday.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name :' Belacan Belitong',
        price : "30000",
        description: "Jenis olahan yang berasal dari desa Sijok ini juga dikenal dengan pasta udang atau Terasi",
        pictlink:'https://gamaholiday.com/wp-content/uploads/2016/08/Pulau-Belitung-Belacan-Gama-Holiday.jpg',
        createdAt: new Date(),
        updatedAt: new Date()

      },{
        name :' Satam',
        price : "3000000",
        description: "Benda yang memiliki bentuk seperti batu hitam ini bisa disulap menjadi berbagai perhiasan yang indah banget seperti cincin. Konon, batu ini merupakan hasil tabrakan meteor ",
        pictlink:'https://gamaholiday.com/wp-content/uploads/2016/08/Pulau-Belitung-Batu-Satam-Gama-Holiday.jpg',
        createdAt: new Date(),
        updatedAt: new Date()

      },{
        name :' Sirup jeruk kunci',
        price : "40000",
        description: " Sirup ini terbuat dari jeruk kunci yang mana buahnya hanya bisa ditemukan di Pulau ini saja.",
        pictlink:'http://budaya-indonesia.org/f/5322/roby08darisandi_esjerukkunci.JPG',
        createdAt: new Date(),
        updatedAt: new Date()

      },{
        name :'otak-otak belitung',
        price : "15000",
        description: "otak-otak belitung memiliki cita rasa yang berbed karena dibuat dengan lebih banyak ikan",
        pictlink:'http://2.bp.blogspot.com/-IvaIwytzjZM/UebmYXgHCYI/AAAAAAAAABQ/olPYmn3Y3ds/s400/otak+otak%25282%2529.png',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('Items', null, {});
  }
};
