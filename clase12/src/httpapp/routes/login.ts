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

        // request.body.usuario con eso hago una busqueda en MySQL
        // request.body.password lo que explicamos en pruebaPasswords

        response.status(200).send({token: uuid()})
    })
    .put('', (request, response) => {})
    .delete('', (request, response) => {})

