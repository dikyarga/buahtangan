var express = require('express');
var router = express.Router();
let db = require('../models')
const crypto = require('crypto');
const shortid = require('shortid');

router.get('/',function(req,res,next){
   if (req.session) {
      db.User.findOne({
        where:{
          email:req.session.email
        }
        })
      .then(function(user){
        if (user==null) {
          res.redirect('/users/login');
        }else {
          user.getItems()
          .then(function(items){
            res.render('cart',{useritem:items})
          })
        }
      })
   } else {
      res.redirect('/users/login');
   }
});

router.get('/add/:cartid',function(req,res,next){
   if (req.session) {
     console.log(req.session);
     console.log(req.session);
     db.Chart.create({
       userid:req.session.userid,
       itemid:req.params.cartid
     }).then(() => {
       res.redirect('/cart')
     })
   }else{
     res.redirect('/cart')
   }
});

router.get('/delete/:cartid',function(req,res,next){
   if (req.session) {
     db.Chart.destroy({
       where:{
         id:req.params.id
       }
     })
   }else{
     res.redirect('/cart')
   }
});

module.exports = router;
