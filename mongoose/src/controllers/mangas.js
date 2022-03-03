
const Manga = require('../models/mangas');


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




async function agregarManga(req, res) {
  
  const manga = new Manga({
		mangaId: req.body.mangaId,   
    mangaName: req.body.mangaName,
    mangaVolumen: req.body.mangaVolumen,
    mangaDescription: req.body.mangaDescription,
    mangaDemography: req.body.mangaDemography,
    mangaGender: req.body.mangaGender,
    mangaPrecio: Number(req.body.mangaPrecio),
  })
	await manga.save()
	res.send(manga)
  console.log(manga)
}
  

  module.exports = {
    getManga,
    agregarManga
}
