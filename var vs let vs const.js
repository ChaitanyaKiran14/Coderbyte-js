var has gloal scope,
let has block scope i.e, witin paranthesis

we can reasign and update values using "var"
we can only update using "let"
we can't do both using "const", once defined u can't do anything to it

// var a = 45;
// var a = "p"
let b = "Harry";
const author = "Harry"
author = 5 // Throws an error because constant cannot be changed
b = 4
const harry = 0;
let c = null
let d  = undefined  
{
  let b = 'this'
  console.log(b)
}
console.log(b)
