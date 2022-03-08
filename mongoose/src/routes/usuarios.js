const express = require("express");

const {
  getUsuario,
  agregarUsuario,
  login,
} = require("../controllers/usuarios");

const router = express.Router();

router.get("/", getUsuario);

router.post("/", agregarUsuario);
router.post("/", login);

module.exports = router;
