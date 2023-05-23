
let init_primes: Array<number> = [2,3,5,7]

const check_if_prime = (number:number) => {

    if (init_primes.includes(number)) {
        return 1 // it is prime
    }

    // Check if it is divisible for 2,3 or 5
    for (let index:number = 0; index < init_primes.length; index++) {
        if(number % init_primes[index] ===  0) {
            return 0 // it is not prime
        }
    }

    // Agregarlo al array
    return 1
}

export default () => {
    // Get the prime numbers below 10000
    for (let i:number = 0; i < 10000; i++) {
        if (check_if_prime(i)) {
            console.log("Number " + i + " is prime")
        }
    }
}