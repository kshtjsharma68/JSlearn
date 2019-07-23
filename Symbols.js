//Symbols-- values created with Symbol function and are unique
//Can not create twice
let sym = Symbol('name')
//console.log(sym == Symbol('name')) //false as its always unique

function Rabbit(type) {
this.type = type
}

Rabbit.prototype.say = function(line) {
	console.log( `this ${this.type} rabbit says: ${line}` )
}
//Concept of class
/**
* This is same as defining with class notation
* class Rabbit { constructor(type) {this.type = type;}  speak(line) {}}
**/
let bRabbit = new Rabbit('balck'); //acting as constructor
//console.log(bRabbit, bRabbit.say('fsfs'))

// so here lets see symbols
Rabbit.prototype[sym] =55
//prototype overriding
bRabbit.say = function(line) {
return `randome shit ${line}` 
}
//console.log(bRabbit)
//using Symbol more openly
let toStringSymbol = Symbol('toString')
Rabbit.prototype[toStringSymbol] = function() {
 return `${this.type} is symbol eg`
}
//console.log(bRabbit, bRabbit[toStringSymbol]())

//Symbols are used with [] brackets everywhere
Array.prototype[toStringSymbol] = function() {
return `this show random string symbol`
}

//console.log([1,2].toString(), [1,2][toStringSymbol]())

//Symbols can be included into symbol properties
let stringObject = {
	[toStringSymbol]() { return "a test symbol example" }
}

console.log(stringObject[toStringSymbol]())