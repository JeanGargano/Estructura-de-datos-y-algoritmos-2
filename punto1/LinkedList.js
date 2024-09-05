class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    sortDescendete() {
        let array = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        array.sort((a, b) => b - a); 
        this.head = null;
        this.tail = null;
        for (let value of array) {
            this.append(value);
        }
    }
    sortAscendente() {
        let array = [];
        let current = this.head;
        while (current) {
            array.push(current.value);
            current = current.next;
        }
        array.sort((a, b) => a - b); 
        this.head = null;
        this.tail = null;
        for (let value of array) {
            this.append(value);
        }
    }

    print() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values.join(', '); // Devuelve una cadena de valores separados por comas
    }
}

export default LinkedList;


