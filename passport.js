'use strict';

const passport        = require('passport'),
      LocalStrategy   = require('passport-local').Strategy,
      bcrypt          = require('bcryptjs'),
      db              = require('./models'),
      User            = db.User
      ;

passport.use(new LocalStrategy(
  function(username, password, done){
    User.findAll({
      where : {
        username : username
      }
    })
    .then(function(user){
      if(user.length === 0){
        return done(null, false);
      }
      else if (bcrypt.compareSync(password, user[0].password) === false){
        return done(null, false);
      }
      else {
        return done(null, user);
      }
    });
  }
));

passport.serializeUser(function(user, done) {
  return done(null, user);
});

passport.deserializeUser(function(user, done) {
  return done(null, user);
});


module.exports = passport;