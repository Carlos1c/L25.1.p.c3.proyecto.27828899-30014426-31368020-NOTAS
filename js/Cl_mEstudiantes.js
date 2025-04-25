export default class Cl_mEstudiantes {
    constructor() {
        this.array = [];
    }

    agregar(array) {
        this.array.push(array);
    };

    listado() {
        return this.array;
    };
}