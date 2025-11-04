function validacionUser(data){
    console.log("--seguridad validación--")
    console.log(data)

    if(data.user === "admin" && data.pass === "admin"){
        return {success: true};
    }else{
       return {success: false};
    }    
}

const { getUuid } = require('./helper.js'); // usamos helper
let tokenGuardado = ""; // acá vamos a guardar un solo token

function getToken() {
  tokenGuardado = getUuid(10); // genera uno nuevo
  console.log("Token generado:", tokenGuardado);
  return tokenGuardado;
}

function validarToken(token) {
  return token === tokenGuardado; // compara el recibido con el guardado
}


module.exports = {validacionUser , getToken, validarToken }