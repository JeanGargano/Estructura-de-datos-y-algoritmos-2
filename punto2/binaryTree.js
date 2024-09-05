class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value); 

        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {
                if (current.value === value) {
                    return null;
                }

                if (current.value > value) {
                    if (!current.left) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (!current.right) {
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    preOrder(node = this.root) {
        if (node !== null) {
            console.log(node.value);  
            this.preOrder(node.left); 
            this.preOrder(node.right); 
        }
    }
    //Funcion para calcular altura
    height(node = this.root) {
        if (node === null) {
            return 0;
        }
        const leftHeight = this.height(node.left);  
        const rightHeight = this.height(node.right); 

        return Math.max(leftHeight, rightHeight) + 1; 
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export { Node, BinaryTree };
