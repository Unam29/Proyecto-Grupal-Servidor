const express = require("express");

const { getManga, agregarManga, eliminarManga, buscarPorDemografia } = require("../controllers/mangas");

const router = express.Router();

router.get("/", getManga);

router.post("/", agregarManga);

router.delete("/",eliminarManga)

router.get("/demografia",buscarPorDemografia)

module.exports = router;
