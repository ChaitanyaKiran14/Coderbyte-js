3. Using Object:
function findDuplicates(array) {
    let count = {};
    let duplicates = [];

    for (let value of array) {
        count[value] = (count[value] || 0) + 1;
        if (count[value] === 2) {
            duplicates.push(value);
        }
    }

    return duplicates;
}

let myArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 1];
let duplicateValues = findDuplicates(myArray);

console.log(duplicateValues); // Output: [2, 3, 1]
Here's a simple example to illustrate the logic:
let count = {};
let value = 3;

// First encounter of value 3
count[value] = (count[value] || 0) + 1;
console.log(count); // Output: { 3: 1 }

// Second encounter of value 3
count[value] = (count[value] || 0) + 1;
console.log(count); // Output: { 3: 2 }
This is a common pattern for counting occurrences of values in an array or collection. 


-------------------------------------------------------------------------------------------------------------------

1. Using a Set:

function findDuplicates(array) {
    let set = new Set();
    let duplicates = new Set();

    for (let value of array) {
        if (set.has(value)) {
            duplicates.add(value);
        } else {
            set.add(value);
        }
    }

    return Array.from(duplicates);
}

let myArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 1];
let duplicateValues = findDuplicates(myArray);

console.log(duplicateValues); // Output: [2, 3, 1]

---------------------------------------------------------------------------------------

  2. Using Array Filter and IndexOf:

function findDuplicates(array) {
    return array.filter((value, index, self) => self.indexOf(value) !== index);
}

let myArray = [1, 2, 3, 4, 2, 5, 6, 3, 7, 8, 9, 1];
let duplicateValues = findDuplicates(myArray);

console.log(duplicateValues); // Output: [2, 3, 1]



























































  











  
  
