let a = (strinngg) => {
    let val =   strinngg.split('').reverse().join('');
    return val === strinngg
   
}
const myString = "MADAM"
console.log(a(myString))

// reverse method is an array method. To reverse a string, you need to convert it to an array, reverse the array, and then join it back into a string.

let a = (strinngg) => {
    let val =   strinngg.toLowerCase().split('').reverse().join('');
    return val === strinngg.toLowerCase()
   
}
const myString = "madaM"
console.log(a(myString))

