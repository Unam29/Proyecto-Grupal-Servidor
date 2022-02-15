const { Router } = require('express');

const mangas = require('./mangas');
const pagos = require('./pagos');
const usuarios = require('./usuarios');

const router2 = Router();

router2.post('/mangas', mangas);

module.exports = router2;

