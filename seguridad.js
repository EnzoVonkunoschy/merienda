const Helper= require('./helper.js')
const Controlador= require('./controlador.js')


let tokens=[] //Vector que almacena tokens para verificar posteriormente


function getToken(){
    const token= Helper.getUuid(25) //Genera el token unico de 25 caracteres
    tokens.push(token)  //Almacena token en vector
    return token 
}


function validacionUser(data){
    console.log("--seguridad validación--")
    console.log(data)

    if(data.user === "admin" && data.pass === "admin"){
        return {success: true};
    }else{
       return {success: false};
    }    
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