const Usuario = require('../models/usuarios');



async function getUsuario(req, res) {
  let usuarios = await Usuario.find({});
  
  console.log(usuarios)
  res.send(usuarios);
  console.log('Hola mundo')
  }
  
  
  
  async function agregarUsuario(req, res) {
    
    const usuario = new Usuario({
      usuarioId: req.body.usuarioId,   
      usuarioNombre: req.body.usuarioNombre,
      usuarioContra: req.body.usuarioContra,
      usuarioEmail: req.body.usuarioEmail,
    })
    await usuario.save()
    res.send(usuario)
    console.log(usuario)
  }
    
  module.exports = {
    getUsuario,
    agregarUsuario

}
