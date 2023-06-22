import express from 'express'

export default () => (request, response, next) => {
    console.log('ACA HABRIA QUE CHEQUEAR SI VIENE UN TOKEN Y SI NO VIENE VA 401 o 403')
    if (request.headers['x-token'] === undefined) {
        response.status(401).send()
        return
    }
    if (request.headers['x-token'] === 'teMandoElToken') {
        next()
        return
    }
    response.status(401).send()
}