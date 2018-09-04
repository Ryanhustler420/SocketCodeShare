var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'codeShare - a platform for sharing code. created by GauravGupta!' });
});


router.get('/about',function(req,res,next){
  res.render('about',{ title: 'codeShare - a platform for sharing code. created by GauravGupta!'});
});

module.exports = router;
