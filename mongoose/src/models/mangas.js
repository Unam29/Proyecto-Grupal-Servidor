const mongoose = require("mongoose");
let Schema = mongoose.Schema;

const mangasSchema = new Schema({
    "mangaId": {
        "type": "Number"
    },
    "mangaName": {
        "type": "String"
    },
    "mangaVolumen": {
        "type": "String"
    },
    "mangaDescription": {
        "type": "String"
    },
    "mangaDemography": {
        "type": "String"
    },
    "mangaGender": {
        "type": "String"
    },
    "mangaPrecio": {
        "type": "Number"
    }
});
const manga = mongoose.model("Manga", mangasSchema);


module.exports = manga;