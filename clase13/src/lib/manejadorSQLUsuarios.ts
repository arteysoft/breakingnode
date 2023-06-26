import * as todoElDriver from 'mysql2'
import {crearConexion} from './obtenerConexion'
import {v4 as uuid} from 'uuid'
import sha256 from 'sha256'

let cerrarConexion = (conn, onFinish) => {
    conn.end(err => {
        if (err) {
            onFinish(err)
            return
        }
        onFinish(null)
    })
}

export let crearUsuario = (usuarioDto, onFinish) => {
    let connection = crearConexion()

    connection.connect(err => {
        if (err) {
            onFinish(err)
            return
        }
    })

    usuarioDto.salt = [uuid(), uuid()].join('__')
    // usuarioDto.usuario
    // usuarioDto.passwordClear
    let sinEncriptar = [usuarioDto.passwordClear, usuarioDto.salt].join('__')
    console.log(sinEncriptar)
    usuarioDto.passwordEncriptada = sha256(sinEncriptar)

    let arrInsert = [uuid(), usuarioDto.usuario, usuarioDto.passwordEncriptada, usuarioDto.salt, '']

    connection.query('INSERT INTO usuarios (id_usuario, nombre_usuario, password_encriptada, salt, token) VALUES (?, ?, ?, ?, ?)', 
        arrInsert, err => {
        if (err) {
            onFinish(err)
            return
        }
        cerrarConexion(connection, onFinish)
    })


}

export let validarUsuario = (usuario, passwordEnClear, onFinish) => {
    let connection = crearConexion()

    connection.connect(err => {
        if (err) {
            onFinish(err)
            return
        }
    })

    connection.query('SELECT * FROM usuarios where nombre_usuario = ? ', [usuario], (err, results:any, fields) => {
        if (err) {
            onFinish(err)
            return
        }
        
        console.log(results)
        if (results.length === 0) {
            cerrarConexion(connection, () => {
                onFinish(new Error('no vino ningun resultado'))
            })
            return
        }

        let resultado = results[0]

        let paraComparar = sha256([passwordEnClear, resultado.salt].join('__'))

        console.log(paraComparar)
        console.log(resultado.password_encriptada)

        if (paraComparar === resultado.password_encriptada) {
            onFinish('Token')
            cerrarConexion(connection, onFinish)
            return
        }

        cerrarConexion(connection, onFinish)
    })
}


export let validarToken = () => {

}

export let consultarTableNumerosPrimos = onFinish => {
    let connection = crearConexion()

    connection.connect(err => {
        if (err) {
            onFinish(err)
            return
        }
    
        connection.query('SELECT fecha, numero FROM numerosprimos ', (err, results, fields) => {
            if (err) {
                onFinish(err)
                return
            }
            
            connection.end(err => {
                if (err) {
                    onFinish(err)
                    return
                }
                onFinish(null, results)
            })
        })
    })
}

export let insertarNumeroPrimoSQL = (nuevoNumero, onFinish) => {

    setTimeout(() => {
        onFinish(null)
    }, 30)

    let connection = todoElDriver.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'breakingnode'
    })

    console.log('connect', nuevoNumero)
    connection.connect(err => {
        if (err) {
            onFinish(err)
            return
        }
    
        console.log('query', nuevoNumero)
        connection.query('INSERT INTO numerosprimos (fecha, numero) VALUES (CURRENT_TIMESTAMP(), ?)', nuevoNumero, err => {
            if (err) {
                onFinish(err)
                return
            }
            console.log('end', nuevoNumero)
            connection.end(err => {
                console.log('termina el callback de end', nuevoNumero)
                if (err) {
                    onFinish(err)
                    return
                }
                onFinish(null)
            })
        })
    })
}


