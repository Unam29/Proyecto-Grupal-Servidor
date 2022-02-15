const usuario = require('../models/usuarios');


async function getUsuario(req, res) {
  const limit = parseInt(req.query.limit, 10) || 3
     usuario = await usuario(limit)
    res.json(usuario);

}
async function añadirUsuario(req, res) {
    console.log(req.body);
    const newUsuario = new usuario(req.body);
    const saveUsuario = await newUsuario.save();
    res.send(saveUsuario);
  
  }