import { BinaryTree } from "./binaryTree.js";

const btn_agregar = document.getElementById("agregar");
btn_agregar.addEventListener("click", agregarNodo);

const btn_altura = document.getElementById("altura");
btn_altura.addEventListener("click", altura);

const miArbol = new BinaryTree();

function agregarNodo() {
    let numero = parseInt(document.getElementById("numero").value);

    if (!isNaN(numero)) {
        miArbol.insert(numero); 
        console.log("Se añadió el nodo con éxito");
        console.log("Estructura actual del árbol en preorden:");
        miArbol.preOrder();  
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

function altura() {
    let areaTexto = document.getElementById("area-texto");
    let resultado = "La altura del árbol es: " + miArbol.height();
    areaTexto.value = resultado;  // Usa 'value' para actualizar el contenido del <textarea>
}
