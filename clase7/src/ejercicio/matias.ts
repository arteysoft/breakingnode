export const esPrimo = (numero: number) =>{
	let esPrimo = true
	for(let i = 2; i < numero ; i++){
		if(numero % i === 0){
			esPrimo = false
		}
	}
	return esPrimo
}

export default esPrimo

