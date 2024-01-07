WE USED SIMILAR LOGIC IN duplicates.js
let charCount = (str) => {
    let counts = {};
    let newStr = str.split(' ').join('');

    for (let i = 0; i < newStr.length; i++) {
        let char = newStr[i];
        counts[char] = (counts[char] || 0) + 1;
    }

    return counts;
}

let myString = "hello world";
let charOccurrences = charCount(myString);

console.log(charOccurrences);
Object
{
h:1
e:1
l:3
o:2
w:1
r:1
d:1
}
-----------------------------------------------------------------------------------------------------
If an array of strings is given, you just join the array into single string and so the same  and also remove white spaces 

let charCount = (arr) => {
    let counts = {};
    
    let newStr =  arr.join('').split(' ').join('');
    
    for (let i = 0; i< newStr.length; i++){
        let char= newStr[i]
        counts[char] = (counts[char] ||0) +1
    }
    return counts
}

let myString = ["hello world", "chaitanya", "kiran"]
let charOccurrences = charCount(myString);
console.log(charOccurrences);
console.log("Count of 'a':", val['a'] || 0);  //if I want to print how many times a specific letter is repeated. I couldn't do that in interview so at least now i know.





















    
