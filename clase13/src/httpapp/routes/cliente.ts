import express from 'express'

export default express.Router()
    .use('', (request, response, next) => {
        console.log('Pasando por el middleware de hola')
        next()
    })
    .get('', (request, response) => {
        response.status(200).send({saludo:'hola'})
    })
    .get('', (request, response) => {})
    .post('', (request, response) => {})
    .put('', (request, response) => {})
    .delete('', (request, response) => {})

