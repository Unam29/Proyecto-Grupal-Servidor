const express = require('express');

const { mangas } = require('../controllers/mangas');

const router = express.Router();

router.get('/', mangas);


module.exports = router;