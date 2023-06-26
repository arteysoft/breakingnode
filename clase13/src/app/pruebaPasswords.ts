import sha256 from 'sha256'
import {v4 as uuid} from 'uuid'
import {crearUsuario, validarUsuario} from '../lib/manejadorSQLUsuarios'

export default () => {

    /*
    crearUsuario({usuario:'max', passwordClear: 'max33RedBull'}, (err) => {
        console.log(err)
    })
    */

    validarUsuario('max', 'max33RedBull', (err) => {
        console.log(err)
    })
}