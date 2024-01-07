//there will be array of no push the oddnumber to the begining of the array 
let val =  [22, 33, 24, 35, 26, 37, 28, 39]
let newArr = []
for (let i in val){
    if (val[i] %2 !==0) {
        newArr.push(val[i])
    }
}
for (let i in val){
    if (val[i] %2 ===0) {
        newArr.push(val[i])
    }
}

console.log(newArr)
