import crearArchivos from './app/crearArchivos'
import {esPrimo} from './ejercicio/commons/commons'
import {discoverNumerosPrimosEnRecursion} from './app/numerosPrimos'
import {ejemploPromise1} from './app/ejemplosPromise'
import serverHTTP from './httpapp/server'
import clienteHTTP from './httpcliente/index'
import {consultarTableNumerosPrimos} from './lib/manejadorSQL'

console.log(process.argv)

switch (process.argv[2]) {
    case 'discoverNumerosPrimos':
        discoverNumerosPrimosEnRecursion()
        break
    case 'probar':
        consultarTableNumerosPrimos((err, data) => {
            console.log(data)
        })
        break
    case 'server':
        serverHTTP()
        break
    case 'cliente':
        clienteHTTP(z => {
            console.log(z)
        })
        break
}



