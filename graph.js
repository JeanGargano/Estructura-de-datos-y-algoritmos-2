class Graph {
    constructor() {
        this.nodes = []; 
        this.adjList = new Map(); 
    }

    addNode(node) {
        if (!this.adjList.has(node)) {
            this.nodes.push(node);
            this.adjList.set(node, []); 
        } else {
            console.log(`El nodo ${node.nombre} ya existe en el grafo.`);
        }
    }

    addEdge(node1, node2) {
        if (this.adjList.has(node1) && this.adjList.has(node2)) {
            this.adjList.get(node1).push(node2);
            this.adjList.get(node2).push(node1);
        } else {
            console.log("Uno o ambos nodos no existen en el grafo.");
        }
    }

    printGraph() {
        for (let [node, edges] of this.adjList.entries()) {
            console.log(`${node.nombre}: [${edges.map(edge => edge.nombre).join(", ")}]`);
        }
    }

    personas_de_la_ciudad(nombreCiudad) {
        let cityNode = this.nodes.find(node => node instanceof Ciudad && node.nombre === nombreCiudad);
        
        if (!cityNode) {
            return `La ciudad ${nombreCiudad} no existe en el grafo.`;
        } else {
            let personasConectadas = this.adjList.get(cityNode).filter(node => node instanceof Person);
            
            let nombresPersonas = personasConectadas.map(persona => persona.nombre);
            
            return nombresPersonas; 
        }
    }
}

class Person {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Ciudad {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

export { Graph, Person, Ciudad };


