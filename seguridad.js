const Helper= require('./helper.js')
const Controlador= require('./controlador.js')
const modelo = require('./modelo.js');
const clases = require('./clases.js')

let enSession = []

function getToken(){
    const token= Helper.getUuid(25) //Genera el token unico de 25 caracteres
    return token 
}


function validacionUser(data){
    console.log("--seguridad validación--")
    console.log(data)
    const usuarios = modelo.getUsuarios()

    if (usuarios.length == 0){
        const admin = new clases.Usuario("admin","admin","admin","admin","admin","admin")
        usuarios.push(admin)
        modelo.setUsuarios(usuarios)
        const Session = new clases.Session(admin, new Date(), getToken())
        enSession.push(Session)
        return {success: true}
    }

      
    for (const usuario of usuarios){ 
        if (data.user === usuario.cuil && data.pass === usuario.pass) {
          const Session = new clases.Session(usuario, new Date(), getToken())
          enSession.push(Session)

          return {success: true};
        }
    }
    return {success: false};
}


function nuevoUsuario(data){

console.log("--seguridad.NuevoUsuario--")
    console.log(data)
    if(tokens.includes(data.token)){ //Valida token antes de crear usuario, si es valido pasa al controlador
        Controlador.nuevoUsuario(data)
        return {success: true}
    }else{
        return {success: false}
    }


}

module.exports = {validacionUser, nuevoUsuario, getToken}