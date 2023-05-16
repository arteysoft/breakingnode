
let m6 = x => {
    console.log('estoy en m6')
    if (x == 0) {
        throw new Error('No se puede dividir por zero')
    }
    console.log('salgo de m6', x)    
}

let m5 = x => {
    console.log('Antes de llamar a m5')
    m6(x + 1)
    console.log('Luego de llamar a m6')
}

let m4 = x => {
    console.log('Antes de llamar a m5')
    m5(x + 1)
    console.log('Luego de llamar a m5')
}

let m3 = x => {
    console.log('Antes de llamar a m4')
    m4(x + 1)
    console.log('Luego de llamar a m4')
}

let m2 = x => {
    console.log('Antes de llamar a m3')
    m3(x + 1)
    console.log('Luego de llamar a m3')
} 

let m1 = x => {
    console.log('Antes de llamar a m2')
    m2(x + 1)
    console.log('Luego de llamar a m2')
}

try {
    m1(-5)
}
catch (err) {
    console.log(err)
}

console.log('SEGUIMOS X ACA !!!!')


/** Que cosas asincrónicas existen ?
 * 
 * IO Archivos
 * Lectura de Teclado, escritura en la consola
 * IO red
 * SetTimeout
 * IO Mongo, MySQL
 * 
 */

