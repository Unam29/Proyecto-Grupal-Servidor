const { Schema, model } = require('mongoose')

const mongoosePaginate = require('mongoose-paginate-v2');

const pagosSchema = new Schema({
    "_id": {
        "type": "Number"
    },
    "_iduser": {
        "type": "String"
    },
    "total": {
        "type": "Number"
    },
    "precio": {
        "type": "Number"
    }
});

pagosSchema.plugin(mongoosePaginate);

module.exports = model('usuarios', pagosSchema);