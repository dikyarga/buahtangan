var express = require('express');
var router = express.Router();
let db = require('../models')
const crypto = require('crypto');
const shortid = require('shortid');
let faker = require('faker')

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.Item.findAll().then(function(items){
     res.render('items/index', {items})

    })
});

router.get('/generate/:amount', function(req, res, next){
  // console.log(req.body);
  for (var i = 0; i < req.params.amount; i++) {
     db.Item.create({
       name: faker.commerce.productName(),
       price: faker.commerce.price(),
       description: faker.lorem.sentence(),
       pictlink: faker.image.imageUrl()
     })
  }

})

router.get('/edit/:id',function(req, res, next){
  db.Item.findOne({where:{id:req.params.id}})
  .then(function(item){
    res.render('items/edit',{item})
  })
})

router.get('/delete/:id',function(req, res, next){
   db.Item.destroy({where:{id:req.params.id}})
   .then(function(){
     res.redirect('/items')
   })
})

module.exports = router;
