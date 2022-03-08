const Pago = require('../models/pagos');
const nodemailer = require("nodemailer");

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
    idUser: req.body.idUser,
    idManga: req.body.idManga,
    total: Number(req.body.total),
    precio: Number(req.body.precio),
  })
	await pago.save()
	res.send(pago)
  console.log(pago);
  console.log(pago.idManga);
  console.log(pago.idPago);
  console.log(pago.idUser);
  console.log(pago.total);
  console.log(pago.precio);
  var transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    post: 8080,
    secure: false,
    auth:{
        user: "maximillian.torphy93@ethereal.email", /** el usuario y pass generado por Ethereal Email */
        pass:  "JBhtefHZ7YdNwTBz15",
    },
});

var mailOptions = {
    from: "Tienda de Mangas",
    to: "sevillanito435@gmail.com",
    subject: `Recibo pedido ${pago.idPago}`,
    text: `
    Precio manga : ${pago.precio}
    Total : ${pago.total}
    
    Gracias por su Compra ^^
    `
}

transporter.sendMail(mailOptions, (err, info) => {
    if(err){
        res.status(500).send(err.message);
    }
    else{
        console.log("Email ha sido enviado!!! :DDD");
        res.status(200).json(req.body);
    }
})
console.log('Email enviado');
}
  
  module.exports = {
    getPago,
    agregarPago

}
