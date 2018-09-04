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
    res.render('thankYou',{title:'codeShare - a platform for sharing code. created by GauravGupta!'});
  });

module.exports = router;
