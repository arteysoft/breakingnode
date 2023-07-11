import {MongoClient} from 'mongodb'

const NOMBRE_BASE_DE_DATOS = process.env.NOMBRE_BASE_DE_DATOS

export let insertOne = async (nombreColeccion, documento) => {
    const url = 'mongodb://127.0.0.1:27017'

    let cliente = await MongoClient.connect(url)
    let db = cliente.db(NOMBRE_BASE_DE_DATOS)
    let collection = db.collection(nombreColeccion)
    let metadata = await collection.insertOne(documento)
    await cliente.close()
    return metadata
}

export let query = async (nombreColeccion, query) => {
    const url = 'mongodb://127.0.0.1:27017'

    let cliente = await MongoClient.connect(url)
    let db = cliente.db(NOMBRE_BASE_DE_DATOS)
    let collection = db.collection(nombreColeccion)
    let resultado = await collection.find(query).toArray()
    await cliente.close()
    return resultado
}

