const pago = require('../models/pagos');


async function getPago(req, res) {
  const limit = parseInt(req.query.limit, 10) || 3
     pago = await pago(limit)
    res.json(pago);

}
async function añadirPago(req, res) {
    console.log(req.body);
    const newPago = new pago(req.body);
    const savePago = await newPago.save();
    res.send(savePago);
  
  }
  module.exports = {
    getPago,
    añadirPago

}
