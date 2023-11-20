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
