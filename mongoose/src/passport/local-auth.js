const passport = require('passport');
const user = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

passport.serializeUser((user, done) => {
    done(null, user.id);
})

passport.deserializeUser(async (id, done) => {
    await User.findById(id);
    done(null, user);
})

passport.use('local-register', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallBack: true
}, async {req, email, password, done} => {
    const user = new User();
    user.email = email;
    user.password = password;
    await user.save();
    done(null, user);
}));