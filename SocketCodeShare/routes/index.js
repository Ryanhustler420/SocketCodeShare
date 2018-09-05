var express = require('express');
var router = express.Router();


var nodemailer = require('nodemailer');
var config = require('../config');
var transporter = nodemailer.createTransport(config.mailer);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'codeShare - a platform for sharing code. created by GauravGupta!' });
});


router.get('/about',function(req,res,next){
  res.render('about',{ title: 'codeShare - a platform for sharing code. created by GauravGupta!'});
});

//this route is for two operation first user will get this page and after submistion of the
//form he/she will redirect to tanku page.
router.route('/contact')
  .get(function(req,res,next){
    res.render('contact',{title:'codeShare - a platform for sharing code. created by GauravGupta!'});
  }).post(function(req,res,next){
    req.checkBody('name','empty name').notEmpty();
    req.checkBody('email','empty email').notEmpty();
    req.checkBody('message','empty message').notEmpty();
    var errors = req.validationErrors();

    if(errors){
      res.render('contact',{
        title:'codeShare - a platform for sharing code. created by GauravGupta!',
        name:req.body.name,
        email:req.body.email,
        message:req.body.message,
        errorMessages:errors
      });
    }else{
      var mailOption = {
        from:'CodeShare <no-reply@codeShare.com>',
        to:'theunknown@gmail.com',
        subject:'you got a new message from visitor 💩 it is a poop?',
        text:req.body.message
      };

      transporter.sendMail(mailOption,function(error,info){
        if(error){
          return console.log(error);
        }
          res.render('thankYou',{title:'codeShare - a platform for sharing code. created by GauravGupta!'});
      });
    }
  });


  router.get('/login',function(req,res,next){
    res.render('login',{title:'Login your account'});
  });

  router.get('/register',function(req,res,next){
    res.render('register',{title:'Register a bew account'});
  });








module.exports = router;
