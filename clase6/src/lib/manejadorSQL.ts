import * as todoElDriver from 'mysql2'

let connection = todoElDriver.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'breakingnode'
})

export let insertarNumeroPrimoSQL = (nuevoNumero, onFinish) => {

    setTimeout(() => {
        onFinish(null)
    }, 30)
    return

    console.log('connect', nuevoNumero)
    connection.connect(err => {
        if (err) {
            onFinish(err)
            return
        }
    
        let newRecord = {
            fecha: new Date().toLocaleDateString(),
            numero: nuevoNumero
        };
        
        console.log('query', nuevoNumero)
        connection.query('INSERT INTO numerosprimos SET ?', newRecord, err => {
            if (err) {
                onFinish(err)
                return
            }
            console.log('end', nuevoNumero)            
            connection.end(err => {
                console.log('termina el callback de end', nuevoNumero)
                if (err) {
                    onFinish(err)
                    return
                }
                onFinish(null)
            })
        })
    })
}


