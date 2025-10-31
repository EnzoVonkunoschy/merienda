function validacionUser(data){
    console.log("--seguridad validación--")
    console.log(data)

    if(data.user === "admin" && data.pass === "admin"){
        return {success: true};
    }else{
       return {success: false};
    }    
}

module.exports = {validacionUser}