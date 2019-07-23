//In JS functions are handled as first class citizens
//expression stated with the keyword function and have parameters and a body
//without return keyword function gives undefined
//Binding and scope
//Lexical Scoping -- each local scope can see all local scopes that contains it and all scopes can see global scopes
//Functions are declared on top so can be defined any where on script does not matter as these are first class citizens
//Fat arrow function using =>  sign

//CALL STACK -- how the flow is in real world e.g.

function greet(who) {
    //2. call stack here and runs console.log
    console.log(`Hello ${who}`)
}

greet('kshitij')  //1. call stack is here
console.log('herer') //3.call stack is here
//computer must remember the context from where functional call was made -- important for currying
//Where computer stores the context is call stack -- every time a function is called the context is stored on top of call stack and when function returns it remove the top context from call stack
//Stack require space in memory to store but it fails sometime e.g.
function chicken() {
    return egg()
}

function egg() {
    return chicken()
}
console.log(chicken())
//This will make call stack go out of memory or will go out of stack space
//Optional parameters

//Closure -- Important  -- Being able to reference a specific instance of local binding in an enclosing scope
//In simple words -- keeping copy of outer scope references where enclosed scope depends
//function value contaning both code as in their body and the enviornment in which it was created
function multiplier(factor) {
    return number => factor * number;
}
let twice = multiplier(2) //this defines factor as 2
console.log(twice(4))     //this will give 8 as all due to closure

//Recursion -- function to call itself -- recursion is slower than looping

function power(num, pow) {
    if ( pow === 0 ) {
        return 1;
    }

    return num * power(num, pow - 1)
}