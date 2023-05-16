/*
Que es el scope ?
*/

// Dentro del alcance o scope, tenemos global, local

let funcion1 = x => {

    /*
    convencion que las constantes se escriben asi
    */
    const ESTO_ES_UNA_CONSTANTE = 4

    {
        let z1 = 'Zeta 1'
        const z2 = 'Zeta 2'
        var var1 = 'Variable 1'
    }

    // console.log(z1)
    console.log(var1)
}

funcion1(3)