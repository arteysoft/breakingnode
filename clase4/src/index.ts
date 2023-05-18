const faker = require('faker'); // CommonsJS
import {v4 as uuid} from 'uuid'
import fs from 'fs'

import genUsuario from './lib/genusuario'
import { Usuario } from './interfaces/Usuario';

let fnGrabar = (iteracion:number) => {
    let usu:Usuario = genUsuario()
    console.log(usu)

    fs.writeFile('/var/arch/uno.json', JSON.stringify(usu), 'utf-8', err => {
        console.log(err?err:'')
        fnGrabar(iteracion + 1)
    })
}

fnGrabar(1)

/* SI SE ANIMAN, PUEDEN TRABAJARLO */
/// Lo que falta es que ? primero un corte y segundo que el archivo se deberia llamar diferente cada vez

