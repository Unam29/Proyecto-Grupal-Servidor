const express = require('express');

const { getManga } = require('../controllers/mangas');

const router = express.Router();

router.get('/', getManga);

module.exports = router;