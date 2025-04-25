import Cl_mEstudiantes from "./Cl_mEstudiantes.js";
import Cl_mEvaluaciones from "./Cl_mEvaluaciones.js";

export default class Cl_mSemestre{
    constructor (){
        this.nombre = nombre;
        this.evaluaciones = new Cl_mEvaluaciones;
        this.estudiantes = new Cl_mEstudiantes;
    }
    set nombre (nombre){
        this._nombre = nombre.toUpperCase();
    }
    get nombre (){
        return this._nombre;
    }

}