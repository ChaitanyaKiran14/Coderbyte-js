let arr = ["chaitanya", "dunki", "salaar"];

// Function to count character occurrences in an array of strings
function countCharactersInArray(arr) {
  let result = {};

  // Get unique characters using Set
  let jo  = arr.join('')
  console.log(jo)
  let uniqueChars = new Set(arr.join(''));
  console.log(uniqueChars)

  // Initialize counts for each unique character
  uniqueChars.forEach(char => {result[char] = 0; });

  // Count occurrences
  arr.forEach(str => {
    for (let char of str) {
      result[char]++;
    }
  });

  return result;
}

// Call the function
let characterOccurrences = countCharactersInArray(arr);

// Print the results
console.log(characterOccurrences);

output:

{
  c: 2,
  h: 3,
  a: 5,
  i: 2,
  t: 1,
  y: 1,
  n: 2,
  d: 1,
  u: 1,
  k: 1,
  s: 2,
  l: 2,
  r: 1
}
