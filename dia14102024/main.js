// function Persona(nom, ed){
//     this.nombre = nom;
//     this.edad = ed;

// }

// Persona.prototype.hablar = function(){
//     //alert(`Hola soy `+ this.nombre)
//     alert(`Hola soy ${this.nombre}`);
// }

class Persona{
    nombre = null;
    grupo = null;
    edad = null;

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
        this.grupo = grupo;

    }
    presentarse(){}
}
class Maestro extends Persona{
    constructor(nombre, edad, grupo){
        super(nombre, edad, grupo);
    }
    calificar(){}
    ensenar(){}
    presentarse(){
        alert(`Hola soy el maestro: ${this.nombre} y estoy en el grupo: ${this.grupo}`);
    }
    
}

class Alumno extends Persona{
    constructor(nombre,edad, grupo){
        super(nombre, edad, grupo);
    }
    guardadCalificacion(){}

    obtenerCalificacion(){}

    presentarse(){
        alert(`Hola soy el alumno: ${this.nombre} y estoy en el grupo: ${this.grupo}`);
    }
}