const express = require('express');

const { getUsuario } = require('../controllers/usuarios');

const router = express.Router();

router.get('/', getUsuario);


module.exports = router;