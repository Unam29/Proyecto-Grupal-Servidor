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

async function getManga(req, res) {

  const { pagina = 1, limit = 10 } = req.query;
  
  try {
    // execute query with pagina and limit values
    let mangas = await Manga.find({})
  
    .limit(limit * 1)
    .skip((pagina - 1) * limit)
    .exec();

  // Obtener el total de documentos de la coleccion Mangas 
  const count = await Manga.countDocuments();
     
console.log(mangas)
// res.send(mangas);
console.log('Hola mundo')

  //devolver el response con los mangas,paginas totales y actuales
  res.json({
    mangas,
    paginasTotales: Math.ceil(count / limit),
    paginaActual: pagina
  });
} catch (err) {
  console.error(err.message);
}
};

module.exports = mongoose.model('manga', mangaSchema);