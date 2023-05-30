
let discoverNumerosPrimos =  () => {
    let numeroMax = 500;
    
    for (let numero = 1; numero < numeroMax; numero++) {
        let esPrimo = true;
        for (let index = 2; index < numero; index++) {
            if (numero%index === 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            console.log("El número "+numero+" es primo!");
        }
    }
}



export default () => discoverNumerosPrimos()