const { Usuario } = require('./clases.js');

// Lista de usuarios en memoria (vacía al inicio)
let listaUsuarios = [];

// Devuelve la lista actual
function getUsuarios() {
  return listaUsuarios;
}

// Agrega un nuevo usuario
function agregarUsuario(usuario) {
  listaUsuarios.push(usuario);
}



module.exports = { getUsuarios, agregarUsuario,};
