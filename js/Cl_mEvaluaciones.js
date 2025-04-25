export default class Cl_mEvaluaciones{
    constructor (){
        this.array = [];
    }

    agregar (array){
        this.array.push(array);
    }
    listado (){
        return this.array;
    }
}