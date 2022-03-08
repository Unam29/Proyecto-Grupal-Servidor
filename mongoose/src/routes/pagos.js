const express = require("express");

const { getPago,agregarPago } = require("../controllers/pagos");

const router = express.Router();

router.get("/", getPago);

router.post("/", agregarPago);

module.exports = router;
