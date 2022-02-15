const manga = require('../models/mangas');


async function getManga(req, res) {
  const limit = parseInt(req.query.limit, 10) || 3;
     manga = await manga(limit)
    res.json(manga);
}
async function añadirManga(req, res) {
    console.log(req.body);
    const newManga = new manga(req.body);
    const saveManga = await newManga.save();
    res.send(saveManga);
  }

  module.exports = { getManga, añadirManga};