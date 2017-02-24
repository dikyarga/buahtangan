var crypto =require('crypto')
var model = require('../models')


class help {
 static total (items){
let total=0;
   for (var i = 0; i < items.length; i++) {
      total=total+parseInt(items[i].price)
   }

    return total
 }

}

//console.log(help.hasedPswd('asaadada','saees'));
module.exports = help;
