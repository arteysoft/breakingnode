import express from 'express'
import {v4 as uuid} from 'uuid'
import {crearJWT} from '../../lib/jwt/creador'

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

        // SELECT FROM USUARIOS WHERE nombre_usuario = ? 
        // La password que nos envian sumarle el salt y encriptar todo
        // se comparan las passwords, si son iguales ? la password es correcta

        // en ese caso voy a generar el JWT
        response.status(200).send({token: crearJWT()})
    })
    .put('', (request, response) => {})
    .delete('', (request, response) => {})

