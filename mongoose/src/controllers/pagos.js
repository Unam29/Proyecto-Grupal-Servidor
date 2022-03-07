const Pago = require('../models/pagos');


async function getPago(req, res) {
  const { pagina = 1, limit = 10 } = req.query;
  
  try {
    // execute query with pagina and limit values
    let pagos = await Pago.find({})
  
    .limit(limit * 1)
    .skip((pagina - 1) * limit)
    .exec();

  // Obtener el total de documentos de la coleccion pagos 
  const count = await Pago.countDocuments();
     
console.log(pagos)
// res.send(pagos);
console.log('Hola mundo')

  //devolver el response con los pagos,paginas totales y actuales
  res.json({
    pagos,
    paginasTotales: Math.ceil(count / limit),
    paginaActual: pagina
  });
} catch (err) {
  console.error(err.message);
}
};


async function agregarPago(req, res) {
  
  const pago = new Pago({
		idPago: req.body.idPago,   
    idUser: req.body.pagoName,
    idManga: req.body.idManga,
    total: Number(req.body.total),
    precio: Number(req.body.precio),
  })
	await pago.save()
	res.send(pago)
  console.log(pago)
  }
  module.exports = {
    getPago,
    agregarPago

}
