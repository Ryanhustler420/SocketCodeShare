var express = require('express');
var router = express.Router();

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
      res.render('thankYou',{title:'codeShare - a platform for sharing code. created by GauravGupta!'});
    }
  });

module.exports = router;
