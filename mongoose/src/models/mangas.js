const { Schema, model } = require('mongoose')

const mongoosePaginate = require('mongoose-paginate-v2');

const mangasSchema = new Schema({
    "titulo": {
        "type": "String"
    },
    "categoria": {
        "type": "String"
    },
    "descripcion": {
        "type": "String"
    },
    "precio": {
        "type": "Number"
    }
});

mangasSchema.plugin(mongoosePaginate);

module.exports = model('mangas', mangasSchema);