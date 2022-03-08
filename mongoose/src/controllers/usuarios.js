const Usuario = require("../models/usuarios");

const bcrypt = require("bcrypt");

//Obtener todos los usuarios
async function getUsuario(req, res) {
  let usuarios = await Usuario.find({});

  // console.log(usuarios);
  res.send(usuarios);
  // console.log("Hola mundo");
}

//Funcion que se dedica a loguear
async function login(req, res) {
  // Busca si el correo indicado esta en la base de datos.
  let usuario = await Usuario.findOne({
    usuarioEmail: req.body.usuarioEmail,
  }).exec();
  // console.log(usuario.usuarioEmail);
  // console.log(usuario.usuarioContra);

  // Verifica que exista un usuario con el mail escrita por el usuario.
  if (!usuario) {
    res.send("Usuario no existe");
  } else {
    res.send("UsuarioLogueado");
  }
  // Valida que la contraseña escrita por el usuario, sea la almacenada en la db
  if (!bcrypt.compareSync(req.body.usuarioContra, usuario.usuarioContra)) {
    res.send("Usuario no existe");
  } else {
    res.send("UsuarioLogueado");
  }
}

async function agregarUsuario(req, res) {
  // Recoger los datos que añade el usuario
  const usuario = new Usuario({
    usuarioId: req.body.usuarioId,
    usuarioNombre: req.body.usuarioNombre,
    usuarioContra: bcrypt.hashSync(req.body.usuarioContra, 10),
    usuarioEmail: req.body.usuarioEmail,
  });
  await usuario.save();
  res.send(usuario);
  // console.log(usuario);
}

module.exports = {
  getUsuario,
  agregarUsuario,
  login,
};
