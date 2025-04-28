export default class Cl_mEvaluacion{
    constructor(codigo, actividad, valor){
        this.codigo = codigo;
        this.actividad = actividad;
        this.valor = valor;
    }
    set codigo (c){
        this._codigo = c.toUpperCase();
    }
    get codigo (){
        return this._codigo;
    }
    set actividad (a){
        this._actividad = a.toUpperCase();
    }
    get actividad (){
        return this._actividad;
    }
    set valor (v){
        this._valor = +v;
    }
    get valor (){
        return this._valor; 
    }
}