import express from 'express'
import {v4 as uuid} from 'uuid'

export default express.Router()
    .use('', (request, response, next) => {
        console.log('Pasando por el middleware de hola')
        next()
    })
    .get('', (request, response) => {
        response.status(200).send({saludo:'hola'})
    })
    .get('', (request, response) => {})
    .post('', (request, response) => {
        // evaluar el body 
        console.log(request.body)

        /*
        ACA HAY QUE HACER LO MISMO QUE HICIMOS EN CLASE ************************** 2023 06 26
        */

        response.status(200).send({token: uuid()})
    })
    .put('', (request, response) => {})
    .delete('', (request, response) => {})

