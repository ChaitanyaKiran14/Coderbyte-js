//checking if a given number is a prime or not

const num = parseInt(prompt("Enter a number:"));
let factors = 0;

for (let i = 2; i < num; i++) {
    if (num % i === 0) {
        factors += 1;
    }
}

if (factors === 0) {
    console.log("Prime");
} else {
    console.log("Not Prime");
}
*******************************************************
//To get prime numbers in a range

let isPrime = (start, end) => {
    let primes = [];

    for (let num = start; num <= end; num++) {
        let factors = 0;

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                factors += 1;
            }
        }

        if (factors === 0) {
            primes.push(num);
        }
    }

    return primes;
}

let primeNumbers = isPrime(11, 30);
console.log("Prime Numbers:", primeNumbers);
