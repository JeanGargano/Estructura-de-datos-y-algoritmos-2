import {Task} from "./linkedList.js"
import { LinkedList } from "./linkedList.js"

//instanciando objeto LinkedList
const myLinkedList = new LinkedList();

//Llamado de botones
const boton1 = document.getElementById("enviar")
const boton2 = document.getElementById("mostrar")

boton1.addEventListener("click", enviar)
boton2.addEventListener("click", mostrar)

function enviar(){
    
    let titulo = document.getElementById("titulo").value
    let descripcion = document.getElementById("descripcion").value

    let task = new Task(titulo, descripcion)
    myLinkedList.append(task)

    console.log("Se ha creado la tarea correctamente")
}

function mostrar(){
    let area = document.getElementById("salida")
    let res = myLinkedList.print
    area.value = res
    return(res)
}

