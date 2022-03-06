const express = require('express');
const path = require('path');
const engine = require('ejs-mate');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const morgan = require('morgan');
const nodemailer = require('nodemailer');

// initializations
const app = express();
require('./database');
require('./passport/local-auth');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'))
app.engine('ejs', engine);
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(session({
  secret: 'mysecretsession',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  app.locals.signinMessage = req.flash('signinMessage');
  app.locals.signupMessage = req.flash('signupMessage');
  app.locals.user = req.user;
  console.log(app.locals)
  next();
});

// Email
app.post('/send-email', (req,res) => {
  var transporter = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      post: 8080,
      secure: false,
      auth:{
          user: "aurelie.barton43@ethereal.email", /** el usuario y pass generado por Ethereal Email */
          pass:  "wYdfj5G71T83cvtMxz",
      },
  });

  var mailOptions = {
      from: "Remitente",
      to: "juanma97sevillano@gmail.com",
      subject: "Enviado desde asljdhasldjhasjldkhas",
      text: "Esto es un texto enviado PRUEBA 3"
  }

  transporter.sendMail(mailOptions, (err, info) => {
      if(err){
          res.status(500).send(err.message);
      }
      else{
          console.log("Email ha sido enviado!!! :DDD");
          res.status(200).json(req.body);
      }
  })
  console.log('Email enviado');
});

// routes
app.use('/', require('./routes/index'));

// Starting the server
app.listen(app.get('port'), () => {
  console.log('server on port', app.get('port'));
});
