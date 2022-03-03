const express = require('express');

const { getManga,agregarManga } = require('../controllers/mangas');
const { getPago,añadirPago } = require('../controllers/pagos');
const { getUsuario,agregarUsuario } = require('../controllers/usuarios');



const router = express.Router();


router.get('/mangas', getManga);
router.post('/agregarManga', agregarManga);

router.get('/pagos', getPago);
router.post('/añadirPago', añadirPago);

router.get('/usuarios', getUsuario);
router.post('/registrarse', agregarUsuario);

module.exports = router;