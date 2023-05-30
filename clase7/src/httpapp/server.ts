import express from 'express'

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

    app.listen(3000, () => {
        console.log('escuchando puerto 3000')
    })
}