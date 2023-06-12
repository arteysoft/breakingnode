import genUsuario from '../lib/genusuario'
import {insertOne} from '../lib/driverMongo'

/*
export let pruebaMongo = () => {
    const url = 'mongodb://0.0.0.0:27017'

    let cliente:MongoClient

    MongoClient.connect(url)
    .then((c) => {
        cliente = c
        let db = cliente.db('nodebreaker_10')
        let collection = db.collection('alumnos')
        return collection
    })
    .then(colAlu => {
        return colAlu.insertOne(genUsuario())
    })
    .then(() => {
        cliente.close()
    })
}

*/

export let pruebaMongo = () => {
    let usu = genUsuario()
    insertOne('clientes', usu)
    .then(console.log)
    .catch(console.log)
}


