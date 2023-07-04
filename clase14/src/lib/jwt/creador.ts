import {SECRETO, hora} from './commons'
import jwt from 'jsonwebtoken'

export let crearJWT = () => {
    let payload = {
        sub: '35205354',
        name: 'Joan',
        iat: hora(),
        exp: hora() + 40
    }

    let token = jwt.sign(JSON.stringify(payload), SECRETO)

    for (let z of token.split('.')) {
        console.log(z)
    }
    console.log('')
    console.log(token)
    return token
}

