const express = require('express');

const { getManga,añadirManga } = require('../controllers/mangas');
const { getPago,añadirPago } = require('../controllers/pagos');
const { getUsuario,añadirUsuario } = require('../controllers/usuarios');



const router = express.Router();


router.get('/mangas', getManga);
router.post('/añadirManga', añadirManga);

router.get('/pagos', getPago);
router.post('/añadirPago', añadirPago);

router.get('/usuarios', getUsuario);
router.post('/añadirUsuario', añadirUsuario);

module.exports = router;