const mongoose = require("mongoose");
let Schema = mongoose.Schema;


const usuariosSchema = new Schema({
    "_id": {
        "type": "Number"
    },
    "nombre": {
        "type": "String"
    },
    "contra": {
        "type": "String"
    },
    "email": {
        "type": "String"
    }
});

let Usuario = mongoose.model("usuario", usuariosSchema);

module.exports = Usuario;