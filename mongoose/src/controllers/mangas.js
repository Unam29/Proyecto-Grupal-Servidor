const Manga = require('../models/mangas');




async function getManga(req, res) {
  const limit = parseInt(req.query.limit, 10) || 3
     manga = await Manga(limit)
    res.json(manga);

}
async function añadirManga(req, res) {
    console.log(req.body);
    const newManga = new Manga(req.body);
    const saveManga = await newManga.save();
    res.send(saveManga);
  
  }
  module.exports = {
    getManga,
    añadirManga

}
