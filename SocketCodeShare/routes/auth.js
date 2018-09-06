var express = require('express');
var router = express.Router();
var passport = require('passport');

router.route('/login')
.get(function(req,res,next){
  if(req.user){
   res.redirect('/');
 }else{
  res.render('login',{title:'Login your account'});
 }
})
.post(passport.authenticate('local',{
  failureRedirect:'/login'
}),function(req,res){
  res.redirect('/');
});

router.get('/logout',function(req,res){
  req.logout();
  res.redirect('/login');
});


router.route('/register')
.get(function(req,res,next){
  res.render('register',{title:'Register a bew account'});
})
.post(function(req,res,next){
  req.checkBody('name','Empty Name').notEmpty();
  req.checkBody('email','Invalid Email').notEmpty();
  req.checkBody('password','Empty Password').notEmpty();
  req.checkBody('password','Password do not match').equals(req.body.conformPassword);

  var errors = req.validationErrors();
  if(errors){
    res.render('register',{
      name:req.body.name,
      email:req.body.email,
      errorMessages:errors
    });
  }else{
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    user.save(function(err){
      if(err){
        res.render('register',{errorMessages:err})
      }else{
        res.redirect('/login');
      }
    })
  }
});

module.exports = router;
