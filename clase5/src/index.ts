import crearArchivos from './app/crearArchivos'
import numerosPrimos from './app/numerosPrimos'
import {esPrimo} from './ejercicio/commons/commons'

if (esPrimo(49, [2, 3, 5, 7])) {
    console.log('Es primo')
}
else {
    console.log('NO es primo')
}

