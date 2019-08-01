//Central part of a computer, part that carries out individual steps that make up our programs --> processor
/**
 * Synchronous model --  processor one thing at a time
 * Asynchronous model -- multiple things at a time
 * Thread -- another running program whose execution may be interleaved with other programs by the operating system
 * multiple processor multiple threads at the same time
 */
//Callbacks --extra argument in slow functions/actions
/**
 * Promise
 * --------------------------------------------
 * An asynchronous action that may complete at some point and produce value, it is able to notify anyone who is interested when value is available
 * Create a promise -- Promise.resolve  -- this function ensure the value is wrapped in a Promise
 * Get result of promise using -- then -- this register a callback function to be called when promise resolve and provide value, but then also return another promise and which resolves to value the handler fn returns.
 * Promise constructor to make a promise and accept function as argument
 * reject is used to make promise fail and reject the promise
 */
let fifteen = Promise.resolve(15)
fifteen.then(value => console.log(`Got ${value}`))   //gives Got 15
//eg
new Promise((resolve, reject) => {
    if(true){
        resolve('response')
    } else {
        reject(new Error('Fail'))
    }
})
.then(value => console.log(value))
.catch(reason => {
    console.log("caught failure"+ reason)
    return "nothing"
})
.then(value => console.log("handler 2", value))

//when this promise fails -- 
//caught failure Error: fail
//handler 2 nothing
//JS enviornment can detect promise failure and report the error
//Collection of promises
Promise.all([...promises]) //for multiple promises chaining/running at the same time, wait for alll promises to resolve if one rejects this itself get rejected

/**
 * ASYNC functions
 * pseudo synchronous code to describe asynchronous computation
 * An async function is a function which implicitly return a promise and that can in its body await other promises in a way to look synchronous
 * ----------------------------------------------
 * async function always return a promise and await keyword is used to wait to promise to resolve
 * when body returns something promise is resolved and if exception then promise rejects
 */

 /**
  * GENERATORS
  * -------------------------------
  * funciton* -- to describe a generator function
  * when call a generator function it return a iterator
  */
 //eg
 function* power(n) {
     for (let i = n;; i *= n) {
        yield i;
     }
 }
 //this gives iterator
 for(let power of power(3)) {
     if (power < 50) {
        console.log(power)     
    } else {
             break;
         }
 }
 //gives 3,9 27
 //every time you can next on iterator function runs untill it hits yield expression which pauses it and causes yielded value the next produced value by iterator
 //writing iterator usign Symbol and generator function
 Group.prototype[Symbol.iterator] = function*() {
     for (let i =0; i < this.member.length; i++) {
         yield this.member[i];
     }
 }