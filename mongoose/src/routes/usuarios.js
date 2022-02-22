const express = require('express');

const { getUsuario,añadirUsuario } = require('../controllers/usuarios');

const router = express.Router();

router.get('/', getUsuario);

router.post('/', añadirUsuario);

module.exports = router;