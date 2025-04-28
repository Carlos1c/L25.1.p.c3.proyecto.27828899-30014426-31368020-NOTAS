import Cl_mEstudiante from "./Cl_mEstudiante.js";
import Cl_mEstudiantes from "./Cl_mEstudiantes.js";
import Cl_mEvaluaciones from "./Cl_mEvaluaciones.js";
import Cl_mEvaluacion from "./Cl_mEvaluacion.js";
import Cl_mSemestre from "./Cl_mSemestre.js";

let estudiantes = new Cl_mEstudiantes;
estudiantes.agregar(new Cl_mEstudiante(27828899, "Vasquez", "Carlos"));
estudiantes.agregar(new Cl_mEstudiante(30014426, "Freitez", "Franyeliz"));
estudiantes.agregar(new Cl_mEstudiante(31368020, "Gil", "Estefany"));

let evaluaciones = new Cl_mEvaluaciones
evaluaciones.agregar(new Cl_mEvaluacion("c4", "pro", 7));
evaluaciones.agregar(new Cl_mEvaluacion("c4", "pro", 8));
evaluaciones.agregar(new Cl_mEvaluacion("c4", "pro", 9));

alert(`listado de estudiantes: ${JSON.stringify(estudiantes.listado())}`)
alert (`listado de evaluaciones: ${JSON.stringify(evaluaciones.listado())}`)