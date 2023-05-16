/*
Curry o partial application es una forma de funciones que solo reciben un parametro
Muy de la programacion funcional, se usa bastante en javascript
*/

let suma = x => {
    return y => {
        return x + y
    }
}

// console.log(suma(4)(6))

let suma100 = suma(100)
let suma101 = suma(101)
let suma102 = suma(102)

// console.log(suma102(1))

//////////////////////////////////////////////////////////////////////////////////

let suma2 = (x, y) => {
   return x + y 
}

let suma1000 = suma2.bind(null, 1000)
let todoCocinado = suma2.bind(null, 1000, 1000)

console.log(suma1000(5000))
console.log(todoCocinado)

