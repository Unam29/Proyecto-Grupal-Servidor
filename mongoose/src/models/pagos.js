const mongoose = require("mongoose");
let Schema = mongoose.Schema;


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
let Pago = mongoose.model("pago", pagosSchema);

module.exports = Pago;