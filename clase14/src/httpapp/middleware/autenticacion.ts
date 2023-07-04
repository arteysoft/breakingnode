import express from 'express'
import {verificarToken} from '../../lib/jwt/verificador'

export default () => (request, response, next) => {
    console.log('ACA HABRIA QUE CHEQUEAR SI VIENE UN TOKEN Y SI NO VIENE VA 401 o 403')
    if (request.headers['x-token'] === undefined) {
        response.status(401).send()
        return
    }

    try {
        verificarToken(request.headers['x-token'])
        request.miNumeroDeSuscriber = 123456789
        next()
        return
    }
    catch (err) {

    }    
    response.status(401).send()
}