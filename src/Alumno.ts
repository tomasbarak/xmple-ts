import { Materia } from "./Materia"
import { Persona } from "./Persona"

export class Alumno extends Persona {
    legajo: Number
    materias: Array<Materia>
    constructor(nombre: String, apellido: String, edad: Number, legajo: Number) {
        super(nombre, apellido, edad)
        this.legajo = legajo
        this.materias = []
    }

    getLegajo(): Number {
        return this.legajo
    }

    setLegajo(legajo: Number) {
        this.legajo = legajo
    }

    getMaterias(): Array<Materia> {
        return this.materias
    }

    setMaterias(materias: Array<Materia>) {
        this.materias = materias
    }

}