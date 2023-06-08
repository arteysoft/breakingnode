import {MongoClient} from 'mongodb'

export let pruebaMongo = () => {
    const url = 'mongodb://0.0.0.0:27017'

    let cliente:MongoClient

    MongoClient.connect(url)
    .then((c) => {
        cliente = c
    })
    .then(() => {
        cliente.close()
    })
}