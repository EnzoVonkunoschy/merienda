const fs = require('fs')
const Clases = require('./clases.js')


function getUsuarios(){
    let usuarios = [];
    const str_usuario = fs.readFileSync('./db/usuarios.txt','utf-8')
    if (str_usuario){
        let arUsuarios = JSON.parse(str_usuario)
        for (let i = 0; i < arUsuarios.length; i++){
            let u = arUsuarios[i]
            usuarios.push(new Clases.Usuario(u.nombre, u.apellido, u.cuil, u.cond, u.pass, u.rol))
           
        }         
    }
    return usuarios;
}

function setUsuarios(usuarios){
    if(Array.isArray(usuarios)){
        fs.writeFileSync('./db/usuarios.txt', JSON.stringify(usuarios), 'utf-8')
        return {success: true}
    } 
}


module.exports = {setUsuarios,getUsuarios}