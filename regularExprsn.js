/**
 * ----- Regular Expressions -----
 * Regular expression -- way to express patterns in string data , regular expressions are objets  
 */
//Create regular expressions
let re1 = new RegExp("abc") //using constructor RegExp
let rel2 = /abc/  //using enclosing a pattern within forward slash(/)
// \n these backlashes are not part of special characters so are reserved like ?  + signs
//Regular expression methods (a lot methods)

/**
 * Testing a match in string with range and alternate to indexOf in string
 */
//1. Testing a match
console.log(/abc/.test("abcd"))  //true as string matched in pattern
console.log(/abc/.test("abxd"))  //false as no pattern in string

//Its an alternate of using indexOf method inside string
//Match any character from pattern in string, we use [ ] brackets for that pattern
console.log(/[0123456789]/.test("in 1909")) //true
console.log(/[0-9]/.test("in 1882"))  //true as numbers from 0-9 exists in string
// here [] is used to specify the any character 
// - inside [] is used to describe range
console.log(/[34378]/.test("in this 2")) //false
console.log(/[0-5]/.test("in asdkja 6")) //false
console.log(/[0-6]/.test("in asdkja 6")) //true 6 available in string

//using shortcuts
/**
 *   \d --any digit character
 *   \w --any alphanumeric character
 *   \s -- any whitespace character( space, tab, newline etc... )
 *   \D --character that is not a digit
 *   \W -- no alphanumric character
 *   \S -- A nonwhitespace character
 *   . --  any character but newline
 *   \b -- word boundary
 */

 /**
  * The characters that are given special meaning within a regular expression, are: 
. * ? + [ ] ( ) { } ^ $ | \. You will need to backslash these characters whenever you want to use them literally. For example, if you want to match ".", you'd have to write \.. All other characters automatically assume their literal meanings
  */
console.log(/\d\d-\d\d-\d\d\d\d \d\d:\d\d/.test("01-30-2003 15:20")) //true
console.log(/\d\d-\d\d-\d\d\d\d \d\d:\d\d/.test("01-jan-2003 15:20")) //false
//[\d.] -- this means any digit or a perid character

//To invert a set of characters use caret(^) -- which means any other than these character
console.log(/[^01]/.test("11110010110011"))  //false as nothing else than 0 and 1
console.log(/[^01]/.test("012000300")) //true as other than 0 and 1 present in string

/**
 * Special characters
 * + -- this makes the pattern to be repeated more that one time
 * * --  this means pattern can be more or zero match
 * ? -- this means that it may or may not be present
 */
console.log(/'\d+'/.test("'123'")) //true  --- here digit repeat more than once
console.log(/'\d+'/.test("''")) //false --here no digit matched
console.log(/'\d*'/.test("'123'")) //true --  here digit matches
console.log(/'\d*'/.test("''"))  //true -- here zero match
console.log(/neightb?or/.test("neightor")) //true -- here b can be can not be present
console.log(/neightb?or/.test("neightbor")) //true

/**
 * To specify the range of occurrence of pattern can be done by {}
 * {4} -- it means pattern occur 4 times
 * {2-4}  -- it means pattern to occur atleast 2 and atmost 4 times
 * {5,}  -- this means 5 or more times
 */
//Date pattern example
console.log(/\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/.test("1-30-2008 8:45")) //this will return true due to proper limit specification of patterns

/**
 * Grouping Sub-Expressions
 * () --makes the internal part as a group or single entity
 * i -- makes the pattern case insensitive
 */
console.log(/boo+(hoo+)+/i.test("Boohooooohoohoooo")) //true -- here first + and second + apply to o in boo  and o in hoo but third + apply to whole (hoo+) matching one or more occurrence

//Regular expressions have exec(execute) method that will return null if no match but will return the match if found
let match = /\d+/.exec("one two 100")
console.log(match) //["100"]
console.log(match.index) //this will return the index from where match starts with index property
//-------
//Strings have match method same as regular expression have exec() method
//-------
console.log("one two 100".match(/\d+/)) 

//when subexpression are grouped with parentheses , then result give string that matched in first index and matched part in second index
console.log(/'([^'])*'/.exec("she said 'hello'")) //[ "'hello'", "hello"]

console.log(/bad(ly)?/.exec("bad")) // ["bad", undefined] --when ? part does not match it gives undefined

console.log(/(\d)+/.exec("123")) // ["123", "3"]  //will give last part of occurrence

/**
 * Date class -- create date object using new
 */
console.log(new Date()) // Mon Nov 13 2019 16:19:11 GMT+0100 (CET)
//can create for specific time -- month number starts from 0
console.log(new Date(2009, 11, 9, 12, 59, 59, 999)) // Wed Dec 09 2009 12:59:59 GMT+0100 (CET)
//getTime method
console.log(new Date(2009, 11, 9).getTime()) //1387407600000 -- time in milisecond and it can be used vice-versa
//Date Function methods
/**
 * getFullYear
 * getMonth
 * getDate
 * gethours
 * getMinutes
 * getSeconds
 */
//lets create getDate using regular expression
function getDate(string) {
	let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string)
    console.log(/(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string))
    return new Date(year, month -1, day)
    }
    
    console.log(getDate("1-30-2018"))

    //to setup word boudary \b is used
    console.log(/cat/.test("concate")) //true
    console.log(/\bcat\b/).test("concatenate") //false as word longer than boundary
    //for conditional testing
    let animalCount = /\b\d+ (pig|cow|chicken)s?\b/ //here boundary with a number , space and optional animal type with s can be and can not be
    console.log(animalCount.test("15 pigs")) // true
    console.log(animalCount.test("15 pigchickens")) //false as animal type is optional

    /**
     * Replace method -- Strings have replace method used to replace part of string
     */