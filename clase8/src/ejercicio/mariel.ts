
const numerosPrimos = (numero) => {
    if (numero <= 1) {
      console.log(`el  numero ${numero} no es primo`)
      return
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        console.log(`el  numero ${numero} no es primo`);
        return 
      }
    }
    console.log(`el  numero ${numero} es primo`);
    return 
};

const functionPrimos = () => {
    for (let index = 1; index < 1000; index++) {
        numerosPrimos(index)
    }
}

export default functionPrimos