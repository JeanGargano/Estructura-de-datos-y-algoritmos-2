class stack{
    constructor(){
        this.stack = {}
        this.count = 0
    }

    push(element){
        this.stack[this.count] = element;
        this.count++;
        return this.stack;
    }
}

class book{
    constructor(nombre, isbn, autor, editorial){
         this.nombre = nombre
         this.isbn = isbn
         this.autor = autor
         this.editorial = editorial
    }

}
export{stack, book} 