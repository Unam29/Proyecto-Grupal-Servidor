const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  done(null, user);
});

passport.use('local-signup', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await User.findOne({'email': email})
  console.log(user)
  if(user) {
    return done(null, false, req.flash('signupMessage', 'Este Email ya está cogido !'));
  } else {
    const newUser = new User();
    newUser.email = email;
    newUser.password = newUser.encryptPassword(password);
  console.log(newUser)
    await newUser.save();
    done(null, newUser);
  }
}));

//Comprobamos la existencia de las cuentas y la verificacion de su contraseña

passport.use('local-signin', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const user = await User.findOne({email: email});
  //Si el email no existe te dice que no existe la cuenta
  if(!user) {
    return done(null, false, req.flash('signinMessage', 'No se ha encontrado la cuenta !!'));
  }
  //Si el email existe, pero la contraseña introducida es incorrecta
  if(!user.comparePassword(password)) {
    return done(null, false, req.flash('signinMessage', 'Contraseña Incorrecta !!'));
  }
  return done(null, user);
}));
