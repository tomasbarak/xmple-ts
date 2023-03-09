export class Persona {
    nombre: String
    apellido: String
    edad: Number

    constructor(nombre: String, apellido: String, edad: Number) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }

    getNombre(): String {
        return this.nombre
    }

    setNombre(nombre: String) {
        this.nombre = nombre
    }

    getApellido(): String {
        return this.apellido
    }

    setApellido(apellido: String) {
        this.apellido = apellido
    }

    getEdad(): Number {
        return this.edad
    }

    setEdad(edad: Number) {
        this.edad = edad
    }

}