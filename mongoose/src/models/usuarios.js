const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const usuariosSchema = new Schema({
  usuarioId: {
    type: "Number",
  },
  usuarioNombre: {
    type: "String",
  },
  usuarioContra: {
    type: "String",
  },
  usuarioEmail: {
    type: "String",
  },
});

let usuario = mongoose.model("Usuario", usuariosSchema);

module.exports = usuario;
