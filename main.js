import { NaryTree } from "./trees.js";


const boton1 = document.getElementById("enviar");
const boton2 = document.getElementById("mostrar")

boton1.addEventListener("click",insertarNodo )
boton2.addEventListener("click", mostrar)

let miArbol = new NaryTree()


function insertarNodo() {
    let nombre = document.getElementById("nombre").value;
    let cumple = document.getElementById("fecha").value;
    let padre = document.getElementById("parent").value;

    if (!miArbol.root && !padre) {
        miArbol.insert(nombre, cumple);
        console.log("Se ha insertado la raíz del árbol con éxito.");
    } else if (miArbol.root && padre) {
        miArbol.insert(nombre, cumple, padre);
        console.log("Se ha insertado el nodo con éxito.");
    } else {
        console.error("Debe especificar un nodo padre existente para agregar un nuevo nodo.");
    }
}

function prueba(){
    console.log(JSON.stringify(miArbol, null, 2));
}


function mostrar() {
    let recorrrido = document.getElementById("tipo").value;
    if (recorrrido === "PreOrder") {
        miArbol.preOrder();
    } else if (recorrrido === "PostOrder") {
        miArbol.postOrder();
    } else {
        miArbol.inOrder();
    }
}