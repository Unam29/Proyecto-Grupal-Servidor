const mongoose = require("mongoose");
let Schema = mongoose.Schema;


const pagosSchema = new Schema({
    "idPago": {
        "type": "Number"
    },
    "idUser": {
        "type": "Number"
    },
    "idManga":{
        "type": "Number"
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