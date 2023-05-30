import crearArchivos from './app/crearArchivos'
import {esPrimo} from './ejercicio/commons/commons'
import {discoverNumerosPrimosEnRecursion} from './app/numerosPrimos'
import {ejemploPromise1} from './app/ejemplosPromise'
import serverHTTP from './httpapp/server'

console.log(process.argv)

switch (process.argv[2]) {
    case 'discoverNumerosPrimos':
        discoverNumerosPrimosEnRecursion()
        break
    case 'server':
        serverHTTP()
        break
}



