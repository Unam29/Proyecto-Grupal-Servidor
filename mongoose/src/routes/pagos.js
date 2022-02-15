const express = require('express');

const { pagos } = require('../controllers/pagos');

const router = express.Router();

router.get('/', pagos);


module.exports = router;