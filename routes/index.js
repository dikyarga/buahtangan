var express = require('express');
var router = express.Router();

let db = require('../models')
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Express'
    });
});

router.get('/register', function(req, res, next) {
    if (req.session.username) {
      res.redirect('/dashboard')

    } else {
      res.render('auth/register')
    }
})

router.get('/login', function(req, res, next) {
    if (req.session.username) {

        res.redirect('/dashboard')
    } else {
        res.render('auth/login')
    }
})

router.get('/logout', function(req, res, next) {
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    })
})

router.get('/dashboard', function(req, res, next) {
    if (req.session.username) {
        res.render('dashboard/index', {
            username: req.session.username,
            role: req.session.role
        })
    } else {
        res.redirect('/login')
    }
})

module.exports = router;
