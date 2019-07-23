//Iterator interface
//Any object given to for/of loop is expected to be iterable
//What iterable means is that it is named with Symbol.iterator symbol
//WHen called method should return second iterface iterator -- this is actual thing that iterates
/**
 * Strutcture for iterator interface is as following
 * it should have next method 
 * when called it should return object with value and next method
 * if its last value then return object with value and done property true
 * next, value and done property name are plain strings
 */
//EG
let okIterable = "OK"[Symbol.iterator]();
//So now calling on this as loop works
console.log(okIterable.next()) //this will give { value: "O", done: false }
console.log(okIterable.next()) //{ value: "K", done: false }
console.log(okIterable.next()) //{ value: undefined, done: true } --this means it is finished

//Getter and setters and Statics
/**
 * Interface generally contains methods but its ok to have properties
 * like Map objects have size property which tells about no. keys stored
 */

class Temperature {
	constructor(celsius) {
    	this.celsius = celsius
    } 
    //to fetch value
    get fahrenheit() {
    	return this.celsius * 1.8 + 32
    }
    //to set value
    set fahrenheit(value) {
    	this.celsius = (value - 32) / 1.8
    }
    
    static fromFahrenheit(value) {
    	return new Temperature((value -32)/1.8);
    }
    /**
     * here methods that have static keyword before them are directly stored in constructor of class
     */
}

let temp = new Temperature(22);
console.log(temp.fahrenheit)
temp.fahrenheit = 86;
console.log(temp.fahrenheit, temp.celsius)
//so if use static method
//Temperature.fromFahrenheit(86)
//it will create temperature class with fahrenhite degree
let temp = Temperature.fromFahrenheit(86);
console.log(temp.celsius) //will give 30


