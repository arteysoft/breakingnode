import {SECRETO, hora} from './commons'
import jwt, {TokenExpiredError, JsonWebTokenError} from 'jsonwebtoken'

export let verificarToken = (token):boolean => {
    try {
        jwt.verify(token, SECRETO)        
    }
    catch (err) {
        if (err instanceof TokenExpiredError) {
            console.log('El token esta expirado')
            return false
        }
        if (err instanceof JsonWebTokenError) {
            console.log('el token no esta correctamente formateado')
            return false
        }
    }
    return true
}