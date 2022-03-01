
const Manga = require('../models/mangas');


async function getManga(req, res) {
let mangas = await Manga.find({});

console.log(mangas)
res.send(mangas);
console.log('Hola mundo')
}



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
