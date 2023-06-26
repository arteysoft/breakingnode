import * as todoElDriver from 'mysql2'

export let crearConexion = () => { 
    return todoElDriver.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'breakingnode'
    })
}

