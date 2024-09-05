class Queue{
    constructor(){
        this.queue = []
    }

    enqueue(element){
        this.queue.push(element)
        return this.queue
    }
}

class Persona{
    constructor(nombre, tiempo){
        this.nombre = nombre
        this.tiempo = tiempo
    }
}

export{Queue, Persona}