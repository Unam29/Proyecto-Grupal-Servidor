const express = require('express');

const { usuarios } = require('../controllers/usuarios');

const router = express.Router();

router.get('/', usuarios);


module.exports = router;