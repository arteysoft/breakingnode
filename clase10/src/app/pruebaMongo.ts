import {Db, MongoClient, Collection} from 'mongodb'
import genUsuario from '../lib/genusuario'

export let pruebaMongo = () => {
    const url = 'mongodb://0.0.0.0:27017'

    let cliente:MongoClient

    MongoClient.connect(url)
    .then((c) => {
        cliente = c
        let db:Db = cliente.db('nodebreaker')
        let collection:Collection<any> = db.collection('alumnos')
        return collection;
    })
    .then(col => {
        col.insertOne(JSON.stringify(genUsuario()))
    })
    .then(() => {
        cliente.close()
    })
}