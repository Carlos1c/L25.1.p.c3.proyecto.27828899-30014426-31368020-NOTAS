import Cl_mEstudinte from "./Cl_mEstudiante.js";
import Cl_mEstudiantes from "./Cl_mEstudiantes.js";
import Cl_mEvaluaciones from "./Cl_mEvaluaciones.js";
import Cl_mEvaluacion from "./Cl_mEvaluacion.js";
import Cl_mSemestre from "./Cl_mSemestre.js";

let estudiantes = new Cl_mEstudiantes;
estudiantes.agregar(new Cl_mEstudinte(27828899, "Vasquez", "Carlos"));
estudiantes.agregar(new Cl_mEstudinte(30014426, "Franyeliz", "Freitez"));
estudiantes.agregar(new Cl_mEstudinte(31368020, "Gil", "Estefany"));

let evaluaciones = new Cl_mEvaluaciones
evaluaciones.agregar(new Cl_mEvaluacion("c4", "p", 7));
evaluaciones.agregar(new Cl_mEvaluacion("c4", "p", 8));
evaluaciones.agregar(new Cl_mEvaluacion("c4", "p", 9));

alert(`listado de estudiantes: ${JSON.stringify(estudiantes.listado())}`)
alert (`listado de evaluaciones: ${JSON.stringify(evaluaciones.listado())}`)