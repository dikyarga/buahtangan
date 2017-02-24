var express = require('express');
var router = express.Router();
let db = require('../models')
const crypto = require('crypto');
const shortid = require('shortid');
let help=require('../helper/help');

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '334030771:AAG9oByxQQDefY5lzVCL2cNE_YL53oOSB38';

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
        itemid:req.params.itemid
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


  // Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// bot.sendMessage(chatId, 'Ada pesanan baru cuy!!! ');

// Matches "/echo [whatever]"
bot.onText(/\/pesanan (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message


  const chatId = msg.chat.id;
  console.log('-------------------', chatId);
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(73953756, 'Ada pesanan baru gan!');
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(73953756, 'Hi, ' + msg.chat.first_name + ' ada pesanan baru lho!');
});


router.get('/checkout', function(req, res, next){
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(73953756, 'Hi, ' + ' Diky' + ' ada pesanan baru lho!');

 res.render('checkout')


})

module.exports = router;
