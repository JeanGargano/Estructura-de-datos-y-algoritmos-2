//Primer reto sobre crear tres funciones con las tres formas posibles 


let a = parseInt(prompt("Escriba un numero entero"))

// Old Regular Function
function oldRegularFunction(a){
    let res = ""
    if (a%2 === 0){
        res = "El numero es par"
    }else{
        res = "El numero es impar"
    }
    console.log(res)
    return res
}
oldRegularFunction(a)

// New Regular Function
const newRegularFunction = function(a){
    let res = ""
    if (a%2 === 0){
        res = "El numero es par"
    }else{
        res = "El numero es impar"
    }
    console.log(res)
    return res

}
newRegularFunction(a)

// Arrow Function
const arrowFunction = (a) =>{
    let res = ""
    if (a%2 === 0){
        res = "El numero es par"
    }else{
        res = "El numero es impar"
    }
    console.log(res)
    return res
}
arrowFunction(a)