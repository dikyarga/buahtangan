var express = require('express');
var router = express.Router();
let db = require('../models')
const crypto = require('crypto');
const shortid = require('shortid');
let help=require('../helper/help');
router.get('/',function(req,res,next){
   if (req.session) {
      db.User.findOne({
        where:{
          email:req.session.email
        }
        })
      .then(function(user){
        if (user==null) {
          res.redirect('/login');
        }else {
          user.getItems()
          .then(function(items){
          let total=help.total(items)
           console.log('-----------------',items[0].Chart);
            res.render('cart',
            {
              useritem:items,
              total:total
            })
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

router.get('/delete/:itemid',function(req,res,next){
   if (req.session) {
    db.Chart.findOne({
      where:
      {
        userid:req.session.userid,
        itemid:req.params.id
      }
    }).then(function(chart){
      console.log(chart.id);
       db.Chart.destroy({
         where:{
          id:chart.id
         }
       })
    })



   }else{
     res.redirect('/cart')
   }
});

module.exports = router;
