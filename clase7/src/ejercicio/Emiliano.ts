// Autor: Emiliano Modula


let NumerosPrimos = x => {
    if (x % 2 != 0) {
        if (x % 3 != 0) {
            if (x % 5 != 0) {
                return x
            }
        }
    }
}
let discoverNumerosPrimos = () => {
    for (let index = 2; ; index++) {
        if (index == 2 || index == 3 || index == 5) {
            console.log(index)
        } else console.log(NumerosPrimos(index))
    }
}


export default discoverNumerosPrimos