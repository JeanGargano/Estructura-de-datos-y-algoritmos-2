import { Graph } from "./graph.js";
import { Person } from "./graph.js";
import { Ciudad } from "./graph.js";

const btnPersona = document.getElementById("personB").addEventListener("click", ingresarPersona)
const btnCiudad = document.getElementById("cityB").addEventListener("click", ingresarCiudad)
const btnRelacion = document.getElementById("relacionar").addEventListener("click", añadir_Relacion)
const btnBuscar = document.getElementById("search").addEventListener("click", buscar)

let miGrafo = new Graph();

function ingresarPersona() {
    let nombre = document.getElementById("nombreP").value;
    let edad = parseInt(document.getElementById("edad").value);

    let nombreExistente = miGrafo.nodes.find(node => node instanceof Person && node.nombre === nombre);
    let edadExistente = miGrafo.nodes.find(node => node instanceof Person && node.edad === edad);
    if (nombreExistente && edadExistente) {
        console.error("Esta persona ya existe en el grafo, por lo tanto no se puede añadir")
   
    }else{
        let objP = new Person(nombre, edad);
        miGrafo.addNode(objP);
        console.log("Se añadió la persona correctamente");
    }
}

function ingresarCiudad() {
    let nombre = document.getElementById("nombreC").value;
    let nombreExistente = miGrafo.nodes.find(node => node instanceof Ciudad && node.nombre === nombre);
    if (nombreExistente) {
        console.error("Esta ciudad ya existe en el grafo por lo tanto no se puede añadir")
    }else{
        let objC = new Ciudad(nombre);
        miGrafo.addNode(objC);
        console.log("Se añadió la ciudad correctamente");
    }
}


function añadir_Relacion() {
    let nombreP_dado = document.getElementById("nombreP").value;
    let nombreC_dado = document.getElementById("nombreC").value;

    let oPersona = miGrafo.nodes.find(node => node instanceof Person && node.nombre === nombreP_dado);
    let oCiudad = miGrafo.nodes.find(node => node instanceof Ciudad && node.nombre === nombreC_dado);

    if (oPersona && oCiudad) {
        miGrafo.addEdge(oPersona, oCiudad);
        console.log("Relación añadida correctamente.");
    } else {
        console.log("No se encontraron ambos nombres en el grafo.");
        console.log("oPersona:", oPersona, "oCiudad:", oCiudad); 
    }
}

function buscar() {
    let ciudadDada = document.getElementById("nombreC").value;
    let areaT = document.getElementById("salida")

    // Buscar personas conectadas a la ciudad dada
    let personasConectadas = miGrafo.personas_de_la_ciudad(ciudadDada);

    areaT.innerHTML = personasConectadas;

}