//CLosure
//js runtime store or keep track of outer fn variable depends on which inner fn depends is called closure
//JS keeps copy of stack or variables on which inner function depends and from where its called
//or inner fn + outer fn it relies on == closure

function stopwatch() {
    let start = Date.now()
console.log(start, 'start')
    function delay() {
        return Date.now() - start
    }

    return delay
}

//now initiating outer function
// var timer = stopwatch() 

// for ( let i in [0,1,2,3,4,5,6,7]) {
//     console.log(i, 'inside loop')
// }

// console.dir(timer())
//console.log(timer())

//2. Second method  ES6
function multiple(factor) {
    return n => n * factor
}

var twotimes = multiple(2); //here we have initialized outer function and defined factor is 2
var thretimes = multiple(3);  //here factor is initialized as 3

console.log(twotimes(3)) //here second argument or inner function argumnent is passed
console.log(thretimes(3))