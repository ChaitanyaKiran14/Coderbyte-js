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
