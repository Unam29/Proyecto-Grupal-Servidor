const mongoose = require('mongoose');

const { Schema } = mongoose;

//Creación de valores necesarios para un Manga
const mangaSchema = new Schema({
  id: Number,
  name: String,
  volumen: String,
  description: String,
  demography: String,
  gender: String,
  price: Number
});

module.exports = mongoose.model('manga', mangaSchema);