//ABSTRACTION -- hide details and give ability to talk about problems at higher (more abstract) level
function repeat(n, action) {
    for( let i = 0; i < n; i++) {
        action(i)
    }
} 
let labels = []
repeat(5, i => labels.push(`Unit ${i + 1}`)) // will give [ 'Unit1', 'Unit2', ... ] //here its working like callback
//HOF -- functions that operate on other functions, either by taking them as argument or returning them
//Similar to closure
function greaterThan(n) {
    return m => m > n
}
let greaterThan10 = greaterThan(10)
console.log(greaterThan10(11)) //will give true
//EG
function noisy(f) {
    return (...args) => f(...args)
}
noisy(Math.min)(3,2,1)//example of higher order function