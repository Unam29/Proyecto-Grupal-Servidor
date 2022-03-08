const express = require("express");

const { getManga, agregarManga } = require("../controllers/mangas");

const router = express.Router();

router.get("/", getManga);

router.post("/", agregarManga);

module.exports = router;
