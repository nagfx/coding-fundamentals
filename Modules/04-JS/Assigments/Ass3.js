function factorial(anyNumber) {
    let result = 1
    for (let i =anyNumber; i>0; i--) {
    result = result * i}
    return result
    } 
console.log(factorial(5) === 120)
console.log(factorial(4) === 24)
console.log(factorial(1) === 1) 