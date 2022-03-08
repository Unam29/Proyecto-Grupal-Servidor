const express = require("express");

const { getManga, agregarManga } = require("../controllers/mangas");
const { getPago, agregarPago } = require("../controllers/pagos");
const {
  getUsuario,
  agregarUsuario,
  login,
} = require("../controllers/usuarios");

const router = express.Router();

router.get("/mangas", getManga);
router.post("/agregarManga", agregarManga);

router.get("/pagos", getPago);
router.post("/agregarPago", agregarPago);

router.get("/usuarios", getUsuario);
router.post("/registrarse", agregarUsuario);
router.post("/login", login);

module.exports = router;
