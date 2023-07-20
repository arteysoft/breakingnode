import {MongoClient} from 'mongodb'

const NOMBRE_BASE_DE_DATOS = process.env.NOMBRE_BASE_DE_DATOS
const URL_CONN_MONGO:any = process.env.URL_CONN_MONGO

export let insertOne = async (nombreColeccion, documento) => {
    const url = URL_CONN_MONGO

    let cliente = await MongoClient.connect(URL_CONN_MONGO)
    let db = cliente.db(NOMBRE_BASE_DE_DATOS)
    let collection = db.collection(nombreColeccion)
    let metadata = await collection.insertOne(documento)
    await cliente.close()
    return metadata
}

export let query = async (nombreColeccion, query) => {
    const url = URL_CONN_MONGO

    let cliente = await MongoClient.connect(URL_CONN_MONGO)
    let db = cliente.db(NOMBRE_BASE_DE_DATOS)
    let collection = db.collection(nombreColeccion)
    let resultado = await collection.find(query).toArray()
    await cliente.close()
    return resultado
}

