const express = require('express');
const router = express.Router();

const { getUsuario,añadirUsuario } = require('../controllers/usuarios');


router.get('/login', getUsuario);

router.post('/register', añadirUsuario);


module.exports = router;