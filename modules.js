/**
 * Modules -- it is a piece of program that specifies which other piece it relies on and which functionality it provides
 * ------------------------------------------------------------------------------------------
 * Relations between modules is called dependencies
 */

 /**
  * Packages -- chunk of code that can be distributed ( copied and installed )
  * It may depends upon one or more modules and also comes with documentation explaining what it does
  * In JS world infrastructure is provided by NPM(https://npmjs.org)
  * NPM -- this is an online service to download and upload packages and a program (bundled with Node.js) that helps to install and manage packages
  */
 
  //Evaluating data as code -- string of code run as part of current program
  //Special operator eval -- execute string in current scope
  const x = 1;
  function evalAndReturnX(code) {
      eval(code)
      return x;
  }
  evalAndReturnX("var x = 2") //will return 2 --here run this string as code and use x in current scope
  console.log(x) //will return 1
  //But this has a lot of side effects

/**
 * Function constructor 
 * It takes 2 argument comma seperated string -- 1. names 2. string containing function body
 * It wraps code in function values which gives its own scope so no odd things with other scope
 * This is precisely what is used in module system 
 */
//eg
let plusOne = Function("n", "return n+1");
plusOne(3) //this will give 4

/**
 * CommonJS
 * -------------------------------------------------------------------------------------------
 * commonly used approach in JS is commonJS module
 * function used is called require -- it makes sure module is loaded and returns its interface
 * --Loader wraps the module code in a function, module automatically gets its own scope. calll require to access the dependency and put their interface in an object bound to export
 */

 //defining the require in minimal form -- memoizing is used
 require.cache = Object.create(null);

 function require(name) {
     if (!(name in require.cache)) {
        let code = readFile(name); //imaginary function readFile to read file
        let module = {exports: {}};
        require.cache[name] = module;
        let wrapper = Function("require, exports, module", code);
        wrapper(require, module.exports, module);
     }
     return require.cache[name].exports;
 }
//Loader keeps sure that these bindings are available in module scope,
//String is given to require function to translate the filename or web address "./" && "../" are generally interpreted as relative to current module's filename, so "format-date" is interpreted as "format-date.js". When name is not relative is it taken as package

/**
 * ECMAScript modules
 * special keyword import in place of require function
 * export keyword to export things
 * 
 * ES module's interface is not a single value but a set of named bindings
 * When importing from another module you import the binding not the value, which means an exporting module may change its value of binding at any time and module that imports will see its new value
 * 
 * When its binding are name default, its treated as its main binding, import without braces give default binding. Such module can still export other bindings under different names alngside their default binding
 * 
 * ES module imports happen before the modules scripts start running. Means import declarations may not appear inside functions or blocks, and the names of dependencies must be quoted string, not arbitrary expressions
 */
import {days, months} from "date-names";
export function formatDate(date, format){/** code here */}

//default binding
export default ["Winter", "spring", "summer","Autumn"];
//Rename Importing bindings
import {days as dayNames} from "date-names";

/**
 * Bundlers
 * its easy and fast to load one single file than many tiny files so bundlers are tools to make a single file from modules before publishing it on web 
 * 
 * Size of files also matter so --minifiers--
 * tool to make file smaller by removing comments, whitespace, renaming bindings and replacing code with equivalent code which takes less space
 * 
 * Stages of transformation before networking over to web
 * modern JS --> historicJS
 * ES module --> commonJS -->bundled --> minified
 */