import express from 'express'
import {consultarTableNumerosPrimos} from '../lib/manejadorSQL'

export default () => {

    let app = express()

    app.get('/primer', (request, response) => {
        let respuesta = {
            nombre: 'hola',
            apellido: 'mundo'
        }

        response            
            .status(200)
            .send(respuesta)
    })

    app.get('/numerosprimos', (request, response) => {
        consultarTableNumerosPrimos((err, data) => {
            response            
            .status(200)
            .send(data)
        })
    })

    app.delete('/primer', (request, response) => {
        let respuesta = {
            nombre: 'borrado',
            apellido: 'borrado'
        }

        response            
            .status(200)
            .send(respuesta)
    })

    app.listen(3000, () => {
        console.log('escuchando puerto 3000')
    })
}