
let m6 = () => {
    console.log('estoy en m6')
    console.log('salgo de m6')
    setTimeout(() => {
        console.log('Funcion ejecutada bien')
    }, 0)
}

let m5 = () => {
    console.log('Antes de llamar a m5')
    m6()
    console.log('Luego de llamar a m6')
}

let m4 = () => {
    console.log('Antes de llamar a m5')
    m5()
    console.log('Luego de llamar a m5')
}

let m3 = () => {
    console.log('Antes de llamar a m4')
    m4()
    console.log('Luego de llamar a m4')
}

let m2 = () => {
    console.log('Antes de llamar a m3')
    m3()
    console.log('Luego de llamar a m3')
} 

let m1 = () => {
    console.log('Antes de llamar a m2')
    m2()
    console.log('Luego de llamar a m2')
}

m1()

/** Que cosas asincrónicas existen ?
 * 
 * IO Archivos
 * Lectura de Teclado, escritura en la consola
 * IO red
 * SetTimeout
 * IO Mongo, MySQL
 * 
 */

