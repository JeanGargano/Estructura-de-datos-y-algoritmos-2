import { Queue } from "./queues.js";
import { Persona } from "./queues.js";

//Llamada de botones
const boton1 = document.getElementById("enviar")
const boton2 = document.getElementById("mostrar")

boton1.addEventListener("click", agregarPersona)
boton2.addEventListener("click", mostrarPila)

let miPila = new Queue()

function agregarPersona(){

    let nombre = document.getElementById("nombre").value
    let tiempo = document.getElementById("tiempo").value
    let obj = new Persona(nombre, tiempo)
    miPila.enqueue(obj)

    console.log("Se agrego el objeto a la pila")
}
function mostrarPila(){

    console.log(miPila)
}

function ordenar(miPila){
    return miPila.sort((a,b) => a.tiempo - b.tiempo)
}
