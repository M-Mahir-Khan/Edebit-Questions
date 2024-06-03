//Q => 1 Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(a){
    return "something " + a
}

// Examples
// console.log(giveMeSomething("is better than nothing")) // ➞ "something is better than nothing"
// console.log(giveMeSomething("Bob Jane"))  //➞ "something Bob Jane"
// console.log(giveMeSomething("something")) // ➞ "something something" 


//Q=> 2 A student learning JavaScript was trying to make a function. His code should concatenate a passed string name with string "Edabit" and store it in a variable called result. He needs your help to fix this code.
function nameString(name){
    let result = name + "Edabit";
    return result
}

// Examples
// console.log(nameString("Mubashir")) // ➞ "MubashirEdabit"
// console.log(nameString("Matt")) // ➞ "MattEdabit"
// console.log(nameString("javaScript") ) //➞ "javaScriptEdabit"

// Q => 3 Create a function that takes a boolean variable flag and returns it as a string.

function boolToString(flag){
    return flag.toString()
}

// Examples
console.log(boolToString(true) ) //➞ "true"
console.log(boolToString(false)) // ➞ "false"

// Q = 4 Create a function that will handle simple math expressions. The input is an expression in the form of a string.

function calculator(str){
    return eval(parseInt(str))
}

// Examples
// console.log(calculator("23+4"))  //➞ 27
// console.log(calculator("45-15")) // ➞ 30
// console.log(calculator("13+2-5*2")) //➞ 5
// console.log(calculator("49/7*2-3")) //➞ 11


//Q => 5 Emmy has written a function that returns a greeting to users. However, she's in love with Mubashir, and would like to greet him slightly differently. She added a special case in her function, but she made a mistake.
// Can you help her?

function greeting(name){
    return "Hello, " + name;
}

// Examples
// console.log(greeting("Matt")) // ➞ "Hello, Matt!"
// console.log(greeting("Helen")) // ➞ "Hello, Helen!"
// console.log(greeting("Mubashir")) // ➞ "Hello, my Love!"

// Q => 6 Create a function that takes two strings as arguments and return either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

function comp(str1, str2){
    return str1.length === str2.length 
}

// Examples
// console.log(comp("AB", "CD") ) // ➞ true
// console.log(comp("ABC", "DE")) // ➞ false
// console.log(comp("hello", "edabit")) //➞ false

// Q => 7Create a function that returns true if a string is empty and false otherwise.
function isEmpty(str){
    return str.length === 0
}
// Examples
console.log(isEmpty("") ) //➞ true
console.log(isEmpty(" ")) // ➞ false
console.log(isEmpty("a")) // ➞ false

// Q => 8 Write a function that returns the length of a string. Make your function recursive.

function length(str){
    return str.length
}

// Examples
console.log(length("apple"))// ➞ 5
console.log(length("make"))// ➞ 4
console.log(length("a")) // ➞ 1
console.log(length("") ) //➞ 0


// Q => 9 Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName,lastName){
    return lastName + firstName
}
// Examples
console.log(concatName("First", "Last") )// ➞ "Last, First"
console.log(concatName("John", "Doe") ) //➞ "Doe, John"
console.log(concatName("Mary", "Jane")) // ➞ "Jane, Mary"

// Q =>10 Create a function that takes a string and returns it as an integer.

function stringInt(str){
    return parseInt(str)
}

// Examples
console.log(stringInt("6")) //s ➞ 6
console.log(stringInt("1000")) //s ➞ 1000
console.log(stringInt("12") ) //s➞ 12

// Q => 11 Create a function that evaluates an equation.

function eq(equation){
    return eval(equation)
}

// Examples
// console.log(eq("1+2"))// ➞ 3
// console.log(eq("6/(9-7)"))// ➞ 3
// console.log(eq("3+2-4"))// ➞ 1