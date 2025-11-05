const Clases = require('./clases.js')
const Modelo = require('./modelo.js');

function nuevoUsuario(data){
    console.log("--Controlador--")

    let usuarios= Modelo.getUsuarios()
    
    const agregarUsuario = new Clases.Usuario(data.nombre,data.apellido,data.cuil,data.cond,data.pass,data.rol)
    console.log(agregarUsuario)
    usuarios.push(agregarUsuario)
    Modelo.setUsuarios(usuarios)
    return {success: true}
}


module.exports = {nuevoUsuario}