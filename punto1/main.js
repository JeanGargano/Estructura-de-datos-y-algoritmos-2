import LinkedList from "./LinkedList.js";

// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    const btnEnviar = document.getElementById("enviar");
    const tipoListaSelect = document.getElementById("tipo");
    const areaTexto = document.getElementById("area-texto");
    const btnFusionar = document.getElementById("fusionar")

    let lista1 = new LinkedList();
    let lista2 = new LinkedList();

    btnEnviar.addEventListener("click", agregarNumero);
    btnFusionar.addEventListener("click", () => concatenar(lista1, lista2));

    function agregarNumero() {
        let numero = parseInt(document.getElementById("numero").value);
        let tipoLista = tipoListaSelect.value;

        if (!isNaN(numero)) {
            if (tipoLista === "1") {
                lista1.append(numero);
                lista1.sortDescendete(); 
                console.log("Se añadió el número a la Lista 1 correctamente"); 
            } else if (tipoLista === "2") {
                lista2.append(numero);
                lista2.sortDescendete(); 
                console.log("Se añadió el número a la Lista 2 correctamente"); 
            }
        } else {
            alert("Por favor, ingrese un número válido.");
        }
    }


    function concatenar(lista1, lista2) {
        let array1 = [];
        let array2 = [];

        for (let current = lista1.head; current; current = current.next) {
            array1.push(current.value);
        }
        for (let current = lista2.head; current; current = current.next) {
            array2.push(current.value);
        }

        let arrayConcatenado = array1.concat(array2).sort((a, b) => a - b);

        let nuevaLista = new LinkedList();
        arrayConcatenado.forEach(value => nuevaLista.append(value));
        nuevaLista.sortAscendente(); 

        let res = nuevaLista.print(); 
        areaTexto.value = res; 
    }
});

