import express from 'express'
import {consultarTableNumerosPrimos} from '../lib/manejadorSQL'
import {insertOne, query as queryMongo} from '../lib/driverMongo'
import {MongoServerError, MongoServerSelectionError} from 'mongodb'
import clienteRouter from './routes/cliente'
import autenticacionRouter from './middleware/autenticacion'
import horaMiddleware from './middleware/hora'
import loginMiddleware from './routes/login'
import createLogger from '../cfg/logger'
import alumnoRouter from './routes/alumnoRouter'

let logger = createLogger('server.ts')

export default () => {

    logger.info('levantando express')
    let app = express()

    app.use(express.json());
    app.use('/api/login', loginMiddleware)
    app.use('/api/cliente', clienteRouter)
    app.use('/api/alumno', alumnoRouter)
    app.use(autenticacionRouter())

    app.listen(3000, () => {
        logger.info('escuchando puerto 3000')
    })
}