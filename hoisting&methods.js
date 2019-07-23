
//this defines hoisiting which means functions are declared first class citizens in js
//this gives undefined which means memory is allocated but value not assigned but letvar will gives error due to lexical scoping

//console.log(test, letvar)
//console.log(speak('herer'))

var test = 'testing';

function speak(line) {
let letvar = 'new';
console.log(`the rabbit speak ${line}`)
}

//defining in different context
let black = {type: 'black', speak};
//console.log(black.speak('gurr'))

//here in methods we have functions call method which can bind this to function
function handle(gesture) {
	console.log(`We are handling ${gesture} gesture with ${this.type} rabbit`)
}

//here with call method first argument will point to this and second will be taken as normal argument
handle.call({type: 'black'}, 'down');

//antoher method is using arrow methods
//arrow functions do not bind their own this but can see this binding of scope around them
function normalize() {
	console.log(this.coords.map(n => n / this.length))
}
//here using call functional method
normalize.call({coords: [0,2,3], length: 5})

