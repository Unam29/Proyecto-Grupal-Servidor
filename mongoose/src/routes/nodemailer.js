const express = require('express');

const { enviarEmail } = require('../controllers/nodemailer');

const router = express.Router();

router.post('/', enviarEmail);

module.exports = router;