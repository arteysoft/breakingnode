import crearArchivos from './app/crearArchivos'
import {esPrimo} from './ejercicio/commons/commons'
import {discoverNumerosPrimosEnRecursion} from './app/numerosPrimos'
import {ejemploPromise1} from './app/ejemplosPromise'
import serverHTTP from './httpapp/server'
import clienteHTTP from './httpcliente/index'
import {consultarTableNumerosPrimos} from './lib/manejadorSQL'
import levantarArchivos from './app/levantarArchivos'
import 'dotenv/config'

switch (process.argv[2]) {
    case 'creararchivos':
        crearArchivos()
        break
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
    case 'levantararchivos':
        levantarArchivos()
        break;
    default:
        console.log('Atencion, se debe enviar un parametro con la accion a seguir')
}



