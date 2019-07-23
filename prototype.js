//Prototypes
let empty = {};
console.log(empty.toString)
//magical function of empty object
console.log(empty.toString())

//prototype is another object that is fallback source of properties
//when object is asked for perperty it does not have it searches in its prototype and then its prototype's prototype
//Entity behind all objects Object.prototype

//they both are same
console.log(Object.getPrototypeOf({}), Object.prototype)
console.log(Object.getPrototypeOf([])) 
//-- to get prototype type
//Prototype of Objet Array and Function
console.log(Object.prototype)
console.log(Array.prototype)
console.log(Function.prototype)
console.log(Object.getPrototypeOf(Math.max) == Function.prototype, Object.getPrototypeOf([]) == Array.prototype)
let protoObject = {
	speak (line) {
  	console.log(`this is a prototype method which says: ${line}`)
  }
 }
//now creating a different object with this prototype property of parent container
//Object.create is used to create a new object with specific prototype property
//prototype inheritance is happening here as parent container method is inherited in child prototype property
let nOjct = Object.create(protoObject)
console.log(nOjct)
//so here speak will be in prototype property
console.log(nOjct.speak('herer'))
//it derived shared property from its prototype


//Object.keys() will gives keys of the object but not prototype
//these methods also ignore prototype properties
console.log({x:1}.hasOwnProperty('x'), {x: 1}.hasOwnProperty('toString'))