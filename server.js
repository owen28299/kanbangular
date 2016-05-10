'use strict';

const express         = require('express'),
      app             = express(),
      PORT            = process.env.PORT || 3000,
      taskRoute       = require('./routes/task'),
      userRoute       = require('./routes/user'),
      loginRoute      = require('./routes/login'),
      logoutRoute     = require('./routes/logout'),
      bodyParser      = require('body-parser'),
      db              = require('./models'),
      cookieParser    = require('cookie-parser'),
      session         = require('express-session'),
      isAuthenticated = require('./middleware/isAuthenticated'),
      passport        = require('./passport')
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
app.use('/task', taskRoute);
app.use('/user', userRoute);
app.use('/login', loginRoute);
app.use('/logout', logoutRoute);


app.get('/ping', isAuthenticated, function(req,res){
  res.send("logged in");
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