const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

//Creación de valores necesarios para el registro y el profile
const userSchema = new Schema({
  email: String,
  password: String
});
//Ciframos las contraseñas para que sean privadas
userSchema.methods.encryptPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};
//Comprobamos que las contraseñas cifradas sean iguales
userSchema.methods.comparePassword= function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('user', userSchema);