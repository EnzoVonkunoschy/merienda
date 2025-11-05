class Usuario{
    constructor(nom, ape, cuil,cond, pass, rol){
        this.nombre = nom;
        this.apellido = ape;
        this.cuil = cuil;
        this.pass= pass;
        this.condicion = cond;
        this.rol = rol;
    }

    getApellido(){
        return this.apellido;
    }

    getNombre(){
        return this.nombre;
    }

    getCuil(){
        return this.cuil;
    }

    getDni(){
        return "12345678";
    }

    getCondicion(){
        return this.condicion;
    }

    getRol(){
        return this.rol;
    }

    getPass() {
        return this.pass;
    }
}

// Clase enum
const Menu = Object.freeze({
  COMUN: "común",
  SALUDABLE: "saludable",
  CELIACO: "celíaco",
  ESPECIAL: "especial"
});

module.exports = {Usuario, Menu}

