class NaryTree {
    constructor(root = null) {
        this.root = root;
    }

    search(nombre, currentNode = this.root) {
        if (!currentNode) return null;
        if (currentNode.nombre === nombre) return currentNode;

        for (let child of currentNode.children) {
            const result = this.search(nombre, child);
            if (result) return result;
        }

        return null;
    }

    insert(nombre, fecha, parentName = null) {
        const newNode = new Node(nombre, fecha);

        if (!parentName) {
            if (!this.root) {
                this.root = newNode;
            } else {
                console.error("El árbol ya tiene una raíz.");
            }
        } else {
            const parentNode = this.search(parentName);
            if (parentNode) {
                parentNode.children.push(newNode);
            } else {
                console.error("No se encontró el nodo padre.");
            }
        }
    }

    preOrder(node = this.root) {
        if (!node) {
            return;
        }
        console.log(node.nombre);
        node.children.forEach(child => {
            this.preOrder(child);
        });
    }

    postOrder(node = this.root) {
        if (!node) {
            return;
        }
        node.children.forEach(child => {
            this.postOrder(child);
        });
        console.log(node.nombre);
    }

    inOrder(node = this.root) {
        if (!node) {
            return;
        }
        if (node.children.length === 0) {
            console.log(node.nombre);
        } else {
            this.inOrder(node.children[0]);
            console.log(node.nombre);
            for (let i = 1; i < node.children.length; i++) {
                this.inOrder(node.children[i]);
            }
        }
    }
}

    
class Node {
    constructor(nombre, fecha) {
        this.nombre = nombre;
        this.fecha = fecha;
        this.children = [];
    }

    isLeaf() {
        return this.children.length === 0;
    }
}
export{NaryTree, Node}