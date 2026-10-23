import { Personaje } from "./clases/Personaje.js";
import { Casa } from "./clases/Casa.js";
import { Reino } from "./clases/Reino.js";
import { Arma } from "./clases/Arma.js";


/**
 * Armas:
 * Garra(espada) - daño: 25
 * Aguja(espada) - daño: 15
 */
let aguja = new Arma("Aguja", 15, "espada");
let garra = new Arma("Garra", 25, "espada");


/**
 * Jon Snow ha equipado el arma Garra
 * Arya Stark ha equipado el arma Aguja
 */
let stark = new Casa("Stark", "Se acerca el invierno");
let lannister = new Casa("Lannister", "Oye mi rugido");


//Creamos los personajes
let jon = new Personaje("Jon Snow", 25, true, stark, null);
let arya = new Personaje("Arya Stark", 18, true, stark, null);
let jaime = new Personaje("Jaime Lannister", 40, true, lannister, null);


//Creamos el reino de Poniente
let poniente = new Reino("Poniente", null);


//Mostramos la descripción de las armas
console.log("Armas:");
garra.descripcion();
aguja.descripcion();


//Equipamos las armas a los personajes
jon.equipar_arma(garra);
arya.equipar_arma(aguja);


/**
 * Jon Snow ha sido añadido a la Casa Stark
 * Arya Stark ha sido añadido a la Casa Stark
 * Jaime Lannister ha sido añadido a la Casa Lannister
 */
stark.añadir_miembro(jon);
stark.añadir_miembro(arya);
lannister.añadir_miembro(jaime);


/**
 * La Casa Stark ha sido añadida al Reino Poniente
 * La Casa Lannister ha sido añadida al Reino Poniente
 */
poniente.añadir_casa(stark);
poniente.añadir_casa(lannister);


/**
 * Jaime Lannister ha sido proclamado rey de Poniente
 */
poniente.proclamar_rey(jaime);


/**
 * Casas del Reino de Poniente:
 * - Casa Stark
 * - Casa Lannister
 */
poniente.mostrar_casas();


/**
 * Rey actual:
 * El rey actual es Jaime Lannister de la Casa Lannister
 */
poniente.mostrar_info_rey();


/**
 * Miembros de la Casa Stark:
 * - Jon Snow
 * - Arya Stark
 *
 * Miembros de la Casa Lannister:
 * - Jaime Lannister
 */
stark.mostrar_miembros();
lannister.mostrar_miembros();


/**
 * Presentaciones:
 * Soy Jon Snow de la Casa Stark
 * Soy Arya Stark de la Casa Stark
 * Soy Jaime Lannister de la Casa Lannister
 */
console.log("Presentaciones:");
jon.presentacion();
arya.presentacion();
jaime.presentacion();


/**
 * Armas:
 * Garra(espada) - daño: 25
 * Aguja(espada) - daño: 15
 */
console.log("Armas:");
garra.descripcion();
aguja.descripcion();