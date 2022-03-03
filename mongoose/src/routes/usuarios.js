const express = require('express');

const { getUsuario,agregarUsuario } = require('../controllers/usuarios');

const router = express.Router();

router.get('/', getUsuario);

router.post('/', agregarUsuario);

module.exports = router;