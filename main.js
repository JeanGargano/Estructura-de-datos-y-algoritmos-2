import{stack} from "./Stack.js"
import {book} from "./Stack.js"

//Declaracion de botones

const boton1 = document.getElementById("enviar")
const boton2 = document.getElementById("mostrar")

//Funcionalidad a botones
boton1.addEventListener("click", agregarLibro)
boton2.addEventListener("click", mostrarPila)

const miPila = new stack()

function agregarLibro(){

    let nombre = document.getElementById("nombre").value 
    let isbn = document.getElementById("isbn").value
    let autor = document.getElementById("autor").value
    let editorial = document.getElementById("editorial").value
    let obj = new book(nombre, isbn, autor, editorial)
    miPila.push(obj)

    console.log("El libro se agrego correctamente")
    
}

function mostrarPila(){
    
    console.log(miPila)
}



