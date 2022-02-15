const express = require('express');

const { getpago } = require('../controllers/pagos');

const router = express.Router();

router.get('/', getpago);


module.exports = router;