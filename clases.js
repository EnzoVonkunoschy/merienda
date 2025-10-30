class Usuario{
    constructor(ape, nom, cuil, cond){
        this.apellido = ape;
        this.nombre = nom;
        this.cuil = cuil;
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
}

// Clase enum
const Menu = Object.freeze({
  COMUN: "común",
  SALUDABLE: "saludable",
  CELIACO: "celíaco",
  ESPECIAL: "especial"
});

module.exports = {Usuario, Menu}

