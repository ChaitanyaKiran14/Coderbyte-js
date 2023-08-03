// Description: For this challenge you will be manipulating characters in a
// string based off their positions in the alphabet.

// Q. Have the function LetterChanges(str) take the str parameter being passed
//    and modify it using the following algorithm. Replace every letter in the
//    string with the letter following it in the alphabet
//    (ie. c becomes d, z becomes a). Then capitalize every vowel in this new
//    string (a, e, i, o, u) and finally return this modified string.

// Examples
// Input: "hello*3"
// Output: Ifmmp*3

// Input: "fun times!"
// Output: gvO Ujnft!

const letterChanges = str => {
    let modifiedString = '';
    for (let char of str){
        if (/[a-zA-Z]/.test(char)){
            char = String.fromCharCode(char.charCodeAt(0) +1)
        }
        if (/^[aeiou]$/i.test(char)){
            char = char.toUpperCase()
        }
        modifiedString += char
    }
    
    return modifiedString
}
console.log(letterChanges('hello*3'));
