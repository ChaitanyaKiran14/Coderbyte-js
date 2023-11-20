function generateFibonacciSequence(numTerms) {
    const fibonacciSequence = [0, 1];

    for (let i = 2; i < numTerms; i++) {
        const nextTerm = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
        fibonacciSequence.push(nextTerm);
    }

    return fibonacciSequence;
}

// Example: Generate Fibonacci sequence up to 10 terms
const numTerms = 10;
const fibonacciResult = generateFibonacciSequence(numTerms);

console.log(`Fibonacci sequence up to ${numTerms} terms:`, fibonacciResult);

Fibonacci sequence up to 10 terms:
Array(10)[ 0,1,1,2,3,5,8,13,21,34 ]
