const { Schema, model } = require('mongoose')

const mongoosePaginate = require('mongoose-paginate-v2');

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

usuariosSchema.plugin(mongoosePaginate);

module.exports = model('usuarios', usuariosSchema);