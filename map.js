//To create empty object without any prototype
let noPropty = Object.create(null)
//Cheking if toString method in newly created object without prototypes
//Object property names must be strings
console.log("toString" in Object.create(null))
//this can safely be used for map
//Here we have map keyword for that
let ages = new Map()
ages.set("Boris", 15)
ages.set("luis", 30)
ages.set("Rohn", 25)
//Here we can using set to set property
//Now we will fetch properties
//console.log(ages)
//Instance of Map
//also checking is perperty exists
console.log(ages.get('Boris'), ages.has('john'))
console.log(ages.has('toString'))
//no prototype as created by Map or Object.create(null)

//Method set, get and has are part of interface of Map object

