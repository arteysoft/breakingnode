/*
Callbacks sincronicos y callbacks asincronicos 
Antes de ver callbacks que seguramente lo saben, tenemos que saber que el concepto es
Functions as Data
Significa que una funcion se trabaja como un entero, un string, Date, etc. 
Como cualquier dato. Array Objeto
Las funciones se llaman First Class
*/

/*
Esto es callback sincronico
*/

let funcionQueSeEjecutaDeManeraSinc = (cb) => {
    console.log('Voy a llamar al callback')
    cb([11,22,33,44,55,66])
    console.log('termine de llamar al callback')
}

/*
Esto es callback sincronico
*/

let funcionQueSeEjecutaDeManeraAsinc = (cb) => {
    console.log('Voy a llamar al callback')
    setTimeout(() => {
        cb([1,2,3,4,5,6])
    }, 0)
    console.log('termine de llamar al callback')
}

let funcionDeCallBack = xs => {
    for (x of xs) {
        console.log(x)
    }
}


funcionQueSeEjecutaDeManeraSinc(funcionDeCallBack)
funcionQueSeEjecutaDeManeraAsinc(funcionDeCallBack)

