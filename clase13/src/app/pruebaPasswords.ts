import sha256 from 'sha256'
import {v4 as uuid} from 'uuid'
import {crearUsuario, validarUsuario, crearToken} from '../lib/manejadorSQLUsuarios'

export default async () => {

    /*
    crearUsuario({usuario:'valtery', passwordClear: 'Mercedes77'})
    .then(() => { console.log('usuario creado') })
    .catch(err => { console.log(err) })
    */
    
    /* PROBAMOS POR THEN Y CATCH
    validarUsuario('max', 'max33RedBull')
    .then(() => { console.log('ok max')})
    .catch(err => console.log(err))

    validarUsuario('valtery', 'Mercedes77')
    .then(() => { console.log('ok valtery')})
    .catch(err => console.log(err))
    */

    try {
        await validarUsuario('valtery', 'Mercedes77')
        let token = 'unToken__' + uuid()
        console.log(token)
        await crearToken('valtery', token)
    }
    catch (err) {
        console.log(err)
    }
}