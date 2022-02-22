const express = require('express');

const { getManga,añadirManga } = require('../controllers/mangas');

const router = express.Router();

router.get('/', getManga);

router.post('/', añadirManga);

module.exports = router;