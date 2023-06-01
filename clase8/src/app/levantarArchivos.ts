import fs from 'fs/promises'
import mysql2prom, {Connection} from 'mysql2/promise'

let insertarAlumno = (alumno) => {
    let tmplSQL = 'INSERT INTO users (id, firstName, lastName, city, streetName, country, accountName, account, amount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)'
    
    let connection = mysql2prom.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'breakingnode'
    })
    .then(c => c.query(tmplSQL, [
        alumno.id,
        alumno.firstName,
        alumno.lastName,
        alumno.city,
        alumno.streetName,
        alumno.country,
        alumno.accountName,
        alumno.account,
        alumno.amount,
    ]))
}


let checkStr = (x:string|undefined):string => {
    if (x === undefined) {
        throw new Error('El parametro, no puede ser undefined')
    }
    return x
}

export default () => {

    fs.readdir(checkStr(process.env.PATH_UBICACION_ARCHIVOS_OUTPUT))
    .then((xs:string[]) => xs[0])
    .then(nombreArch => {
        let fullPath = [checkStr(process.env.PATH_UBICACION_ARCHIVOS_OUTPUT), nombreArch].join('/')
        console.log(fullPath)
        return fullPath
    })
    .then(fullpath => {
        let contenidoObj = {}
        return fs.readFile(fullpath, 'utf-8')
    })
    .then(z => {
        console.log(z)
        return z
    })
    .then(z => JSON.parse(z))
    .then(z => {
        console.log(z)
        return z
    })
    .then(al => insertarAlumno(al))
    .catch(err => console.log(err))
    
}