const Modelo = require('./modelo.js');
const { Usuario } = require('./clases.js');
const Seguridad = require('./seguridad.js');

function nuevoUsuario(req, res) {
  const { token, apellido, nombre, cuil, condicion, rol } = req.body;

  // Validamos el token
  if (!Seguridad.validarToken(token)) {
    res.send("<h3>Token inválido o expirado</h3>");
    return;
  }

  // Obtenemos la lista actual
  const usuariosActuales = Modelo.getUsuarios();

  // Creamos el nuevo usuario
  const nuevo = new Usuario(apellido, nombre, cuil, condicion, rol);

  // Agregamos a la lista
  Modelo.agregarUsuario(nuevo);

  // Mostramos mensaje de confirmación
  res.send(`
    <h3>Usuario creado correctamente</h3>
    <a href= '/menuadmin'>Volver al menú del administrador</a>
  `);
}

module.exports = { nuevoUsuario };
