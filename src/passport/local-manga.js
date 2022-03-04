const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Manga = require('../models/manga');

passport.serializemanga((manga, done) => {
  done(null, manga.id);
});

passport.deserializemanga(async (id, done) => {
  const manga = await manga.findById(id);
  done(null, manga);
});

passport.use('local-signup', new LocalStrategy({
  manganameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const manga = await manga.findOne({'email': email})
  console.log(manga)
  if(manga) {
    return done(null, false, req.flash('signupMessage', 'Este Email ya está cogido !'));
  } else {
    const newManga = new manga();
    newManga.email = email;
    newManga.password = newManga.encryptPassword(password);
  console.log(newManga)
    await newManga.save();
    done(null, newManga);
  }
}));

//Comprobamos la existencia de las cuentas y la verificacion de su contraseña

passport.use('local-signin', new LocalStrategy({
  manganameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, async (req, email, password, done) => {
  const manga = await manga.findOne({email: email});
  //Si el email no existe te dice que no existe la cuenta
  if(!manga) {
    return done(null, false, req.flash('signinMessage', 'No se ha encontrado la cuenta !!'));
  }
  //Si el email existe, pero la contraseña introducida es incorrecta
  if(!manga.comparePassword(password)) {
    return done(null, false, req.flash('signinMessage', 'Contraseña Incorrecta !!'));
  }
  return done(null, Manga);
}));
