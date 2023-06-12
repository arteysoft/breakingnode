import express from 'express'
import genUsuario from '../lib/genusuario'
import {consultarTableNumerosPrimos} from '../lib/manejadorSQL'

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
        console.log(request.query)

        response            
        .status(200)
        .send([])
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

        // Insertar el cliente en la base 

        response            
        .status(201)
        .send()
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