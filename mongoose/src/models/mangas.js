const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const mangasSchema = new Schema({
    "id": {
        "type": "Number"
    },
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
let Manga = mongoose.model("manga", mangasSchema);

module.exports = Manga;