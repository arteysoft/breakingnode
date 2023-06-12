import {MongoClient} from 'mongodb'

export let insertOne = async (nombreColeccion, documento) => {
    const url = 'mongodb://0.0.0.0:27017'

    let cliente = await MongoClient.connect(url)
    let db = cliente.db('nodebreaker_10')
    let collection = db.collection(nombreColeccion)
    let metadata = await collection.insertOne(documento)
    await cliente.close()
    return metadata
}