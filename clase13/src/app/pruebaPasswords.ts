import sha256 from 'sha256'
import {v4 as uuid} from 'uuid'

export default () => {

    console.log('voy a encriptar hola en sha256')
    console.log(sha256('hola'))

    let salt = [uuid(), uuid()].join('__')

    let claveSinEncriptar = ['hola', salt].join('')
    let claveEncriptada = sha256(claveSinEncriptar)

    console.log(claveSinEncriptar)
    console.log(claveEncriptada)

    /*
    Tengo una tabla en MySQL con los siguientes campos.
    idUsuario,
    nombreUsuario,
    salt,
    passwordEncriptada,
    token
    refresh_token

    Me logueo con usuario y password /login http post
    sha256([password, salt].join('')) === passwordEncriptada

    Atencion: Clientes HTTPs ----------> FrontEnd (HTTPs) http ---> Cuidado que aca se ve el "hola"

    Esta todo bien ? coinciden ?

    Emitir un token, por ahora el token es uuid() lo guardo en mySQL y se lo doy al cliente
    En express voy a ver las cabeceras del request y voy a ver si x-token trae algo y si lo trae
    voy al mySQL y me traigo los datos del usuario

    Cuanto dura el token ? vamos a ver que hay varios criterios.


    */
}