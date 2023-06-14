import express from 'express'
import genUsuario from '../lib/genusuario'
import {consultarTableNumerosPrimos} from '../lib/manejadorSQL'
import {insertOne, query as queryMongo} from '../lib/driverMongo'
import {MongoServerError, MongoServerSelectionError} from 'mongodb'

export default () => {

    let app = express()

    app.use(express.json());

    app.get('/inventarcliente', (request, response) => {
        
        response            
            .status(200)
            .send(genUsuario())
    })

    app.get('/cliente', (request, response) => {
        /* Normalmente voy a traer los clientes por algun filtro */
        let query:any = {}

        console.log(request.query)
        if (request.query['firstName']) { query.firstName = request.query['firstName']; }

        queryMongo('clientes', query)
        .then(res => {
            response            
            .status(200)
            .send(res)
        })
        .catch(err => {            
            response            
            .status(500)
            .send()
        })

        
    })

    app.get('/cliente/:id', (request, response) => {
        /* Aca lo importante es que si el id NO existe ? se debe retornar 404
        */
        console.log(request.params.id)

        response            
        .status(404)
        .send()
    })

    app.post('/cliente', (request, response) => {
        console.log(request.body)

        insertOne('clientes', request.body)
        .then(() => {
            response            
                .status(201)
                .send()
        })
        .catch(err => {
            console.log(err)

            if (err instanceof MongoServerError) {
                response
                .status(400)
                .send()
                return
            }

            if (err instanceof MongoServerSelectionError) {
                response            
                .status(500)
                .send()
                return
            }

            response            
                .status(500)
                .send()
        })
    })

    app.put('/cliente/:id', (request, response) => {
        /* Puede ser 404 no existe
            Puede ser 200 que se modifico
        */
        console.log(request.params.id)

        response            
        .status(404)
        .send()
    })

    app.delete('/cliente/:id', (request, response) => {
        console.log('DESAFIO')
        /*
        Borrar de la tabla, el id que me llega como param
        */
       
        response            
            .status(200)
            .send()
    })

    app.listen(3000, () => {
        console.log('escuchando puerto 3000')
    })
}