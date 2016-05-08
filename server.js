'use strict';

const express         = require('express'),
      app             = express(),
      PORT            = process.env.PORT || 3000,
      taskRoute       = require('./routes/task'),
      userRoute       = require('./routes/user'),
      bodyParser      = require('body-parser'),
      db              = require('./models'),
      User            = db.User,
      passport        = require('passport'),
      cookieParser    = require('cookie-parser'),
      session         = require('express-session'),
      LocalStrategy   = require('passport-local').Strategy,
      bcrypt          = require('bcryptjs'),
      isAuthenticated = require('./middleware/isAuthenticated')
      ;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session({
  secret : process.env.SECRET || 'chocolate',
  resave : true,
  saveUninitialized : true
}));
app.use(passport.initialize());
app.use(passport.session());


app.use(express.static('public'));
app.use('/task', isAuthenticated, taskRoute);
app.use('/user', userRoute);

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

app.post('/login', passport.authenticate('local'), function(req,res){
  var details = req.user[0].dataValues;

  delete details.password;

  res.send(details);
});

app.get('*', function(req, res){
  res.sendFile('./public/index.html',
              {
                root  : __dirname
              });
});

app.listen(PORT, function(){
  db.sequelize.sync();
  console.log(`Server listening on port ${PORT}`);
});