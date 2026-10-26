export class Personaje {

    //Atributos de la clase
    #nombre;
    #edad;
    #vivo;
    #casa;
    #arma;

    //Constructor parametrizado
    constructor(nombre,edad,vivo,casa,arma){
        this.#nombre=nombre;
        this.#edad=edad;
        this.#vivo=vivo;
        this.#casa=casa;
        this.#arma=arma;
    }

    //Presentacion donde mostraremos el nombre y la casa a la que pertenece
    presentacion(){
        console.log("Soy "+this.#nombre+" de la Casa "+this.#casa.getNombre());
    }

    //En este metodo hacemos referencia a que un personaje puede matar a otro
    matar(personaje){
        if(personaje.getVivo()){
            personaje.setVivo(false);
        }
    }

    //Aqui le pasaremos un arma y se la equiparemos
    equipar_arma(arma) {
        this.#arma=arma;
        console.log(this.#nombre+" ha equipado el arma "+arma.getNombre());
    }

    //Getters y Setters
    getNombre(){
        return this.#nombre;
    }
    setNombre(nombre){
        this.#nombre=nombre;
    }
    getEdad(){
        return this.#edad;
    }
    setEdad(edad){
        this.#edad=edad;
    }
    getVivo(){
        return this.#vivo;
    }
    setVivo(vivo){
        this.#vivo=vivo;
    }
    getCasa(){
        return this.#casa;
    }
    setCasa(casa){
        this.#casa=casa;
    }
    getArma(){
        return this.#arma;
    }
    setArma(arma){
        this.#arma=arma;
    }
}