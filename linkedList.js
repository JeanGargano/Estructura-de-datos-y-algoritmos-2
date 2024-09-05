// Clase Task
class Task {
    constructor(titulo, descripcion, next = null) {
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.next = next;
    }
}

// Clase LinkedList
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(task) {
        if (!this.head) {
            this.head = task;
        } else {
            this.tail.next = task;
        }
        this.tail = task;
    }

    print() {
        let task = this.head;
        while (task != null) {
            console.log("Título: " + task.titulo + ", Descripción: " + task.descripcion + " - Next: " + (task.next ? task.next.titulo : "null"));
            task = task.next;
        }
    }
}

export{Task, LinkedList}  

