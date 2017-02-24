var express = require('express');
var router = express.Router();
let db = require('../models')
const crypto = require('crypto');
const shortid = require('shortid');

router.get('/',function(req,res,next){
  console.log(req.session.email);
   if (req.session) {
      db.User.findOne({
        where:{
          email:req.session.email
        }
        })
      .then(function(user){
        //console.log(user.id);
        user.getItems()
        .then(function(items){
          res.render('cart',{useritem:items})
        })
      })

   } else {
      res.redirect('/users/login');
   }
});



router.get('/insert',function(req,res,next){
   //console.log('masuk');
   db.Chart.create({userid:1,itemid:12})
})

module.exports = router;
