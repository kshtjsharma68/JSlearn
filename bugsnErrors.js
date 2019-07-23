//Flaws in computer programming -- bugs
//Process of finding bugs --debugging
//"use strict"  --for strict model enabling 
counter = 0
//in normal execution it will automatically assign glocal scope but in strict mode it will give error
//EG
function Person(name) {this.name = name}
let ferdinand = Person('ferdinand') //creating new Object without new keyword
//so in normal mode it will assign name to global object property
console.log(name) //ferdinand
//But in strict mode will give error -- Cannot set property of undefined
//Debugging -- Find out what the problem is 
//Tools: 1.console.log 2. Breakpoints (inside Browser)

//Excceptions: and handling --when a function can not proceed normally it will jump to place which knows how to handle problems
//Exceptions are mechanism that make code in problem to throw or raise exception
//it jumps out from current function to all the way to its caller -- all the way down to first call and its called Unwinding the stack
//Exception always zoomed right down to bottom of the stack
throw new Error('Error message')
//using try catch
try {
    //working code
} catch (error) {
    console.error('Something went wrong:' + error)
} 
//here throw keyword raise an exception, catching done by try catch block
//try cause exception to raise catch is used to handle the exception and evaluate the problem
//Error constructor to create our exception value -- this create javascript object with message property , in enviornment it also gather information about call stack that existed or stack-tree and is stored in stack property
for(;;) {
 break;
}
//for(;;) constructor is used to create a loop which does not terminate it self
//Assertions -- checks in function to close the loop holes
function firstElement(array) {
    if (array.length == 0) {
        //this is a loop hole handling
        throw new Exception('Can not process empty error')
    }
    return array[0];
}