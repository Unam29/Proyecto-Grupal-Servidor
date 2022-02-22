const express = require('express');

const { getPago,añadirPago } = require('../controllers/pagos');

const router = express.Router();

router.get('/', getPago);

router.post('/', añadirPago);

module.exports = router;