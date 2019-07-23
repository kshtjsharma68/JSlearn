//Classes-define shape of type of object ( what method and properties it has )
//When a function is called with new keyword its treated as constructor and create a object with right prototype, bound to this in function
//and returned in the end
function Rabbit(type) {
this.type = type
}
//using prototype object by using prototype property
//set speak as prototype property
Rabbit.prototype.speak = function(line) {
	console.log(`this ${this.type} rabbit says ${line}`)
}
//its calling a function acting as constructor with new keywor
let weirdRa = new Rabbit("Weird")
let KillerRa = new Rabbit("Killer")
//get prototype of object
console.log(Object.getPrototypeOf(weirdRa))
console.log(weirdRa.speak('herer'))
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype)
console.log(Object.getPrototypeOf(weirdRa) == Rabbit.prototype)
//This is how it was done untill 2015
//Now with class notation
//This class keyword declare class and define constructor and set of methods in a single place without writing a lot of code
class LatestRabbit {
	constructor(type) {
    	this.type = type;
    }
    speak(line) {
    	console.log(`this ${this.type} rabbit is saying this line : ${line} using new class notation`)
    }
}

let nRa = new LatestRabbit('white')
console.log(nRa.speak('gurrr'), Object.getPrototypeOf(nRa) == LatestRabbit.prototype)
console.log(nRa)

//Overriding already defined properties

Rabbit.prototype.teeth = 'small'
console.log(weirdRa.teeth)
KillerRa.teeth = 'very large'
console.log(KillerRa)
//so here what happend is parent container property is hidden in proto object
//and will not effect is main property of teeth
/**
teeth: "very large"
type: "Killer"
__proto__:
speak: ƒ (line)
teeth: "small"
constructor: ƒ Rabbit(type)
**/
console.log(KillerRa.teeth, Object.getPrototypeOf(KillerRa).teeth)
//so here prototype property is kind of backup

//Calling toString
console.dir([1,2].toString()) //here toString on array act as join()
console.log(Object.prototype.toString.call([1,2]))
//[object Array] it gives: word Object and type Array because function does not know about Array
