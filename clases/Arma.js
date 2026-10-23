export class Arma{

    //Atributos
    nombre; 
    daño; 
    tipo; 

    //Constructor parametrixado
    constructor(nombre,daño,tipo){
        this.nombre=nombre;
        this.daño=daño;
        this.tipo=tipo;
    }

    //Descripcion de cada arma mostrando el nombre tipo y daño
    descripcion(){
        console.log(this.nombre + "("+this.tipo+") - daño: "+this.daño);
    }

    //Getters y Setters
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getDaño() {
        return this.daño;
    }
    setDaño(daño) {
        this.daño = daño;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }

}