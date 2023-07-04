import express from 'express'

export default () => (request, response, next) => {
    console.log('ACA HABRIA QUE CHEQUEAR SI VIENE UN TOKEN Y SI NO VIENE VA 401 o 403')
    if (request.headers['x-token'] === undefined) {
        response.status(401).send()
        return
    }

    /*
        ACA HAY QUE HACER LO MISMO QUE HICIMOS EN CLASE ************************** 2023 06 26
    */

    

    if (request.headers['x-token'] === 'teMandoElToken') {
        next()
        return
    }
    response.status(401).send()
}