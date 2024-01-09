3.string=google 
print only the first unique letter and if there is not unique 
also print there no unique letter 
example output:- l


let str = "google";
let count = {};
let uni = new Set(str)

for (let i = 0; i < str.length; i++) {
    let char = str[i];
    count[char] = (count[char] || 0) + 1;
}
console.log(count)
for (let char of uni){
    if (count[char] ===1){
        console.log(char)
        break;
    }
}

// output is l
