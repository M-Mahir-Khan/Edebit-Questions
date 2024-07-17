//Q => 1 Write a function that returns the string "something" joined with a space " " and the given argument a.

function giveMeSomething(a){
    return "something " + a
}

function giveMeSomething(a){
    let res =  `something ${a}`
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

function nameString(name){
    return name.concat("Edabit")
}

function nameString(name){
    return `${name}Edabit`
}

// Examples
// console.log(nameString("Mubashir")) // ➞ "MubashirEdabit"
// console.log(nameString("Matt")) // ➞ "MattEdabit"
// console.log(nameString("javaScript") ) //➞ "javaScriptEdabit"

// Q => 3 Create a function that takes a boolean variable flag and returns it as a string.

function boolToString(flag){
    return flag.toString()
}

function boolToString(flag){
    return flag + ""
}

function boolToString(flag){
    return String(flag)
}

function boolToString(flag){
    return `${flag}`
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
    if(name === "Mubashir"){
        return "Hello, my love!"
    }

    return `Hello, ${name}`
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

// Q => 7 Create a function that returns true if a string is empty and false otherwise.
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

function length(str){
    let length = 0;
    for(let i = 0; i < str.length; i++){
        length++
    }
    return length
}

// Examples
console.log(length("apple"))// ➞ 5
console.log(length("make"))// ➞ 4
console.log(length("a")) // ➞ 1
console.log(length("") ) //➞ 0


// Q => 9 Given two strings, firstName and lastName, return a single string in the format "last, first".
function concatName(firstName,lastName){
    return lastName + "," +firstName
}

function concatName(firstName,lastName){
    return `${firstName}, ${lastName}`
}

// Examples
console.log(concatName("First", "Last") )// ➞ "Last, First"
console.log(concatName("John", "Doe") ) //➞ "Doe, John"
console.log(concatName("Mary", "Jane")) // ➞ "Jane, Mary"

// Q =>10 Create a function that takes a string and returns it as an integer.

function stringInt(str){
    return parseInt(str)
}

function stringInt(str){
    return +str
}

// Examples
console.log(stringInt("6")) //s ➞ 6
console.log(stringInt("1000")) //s ➞ 1000
console.log(stringInt("12") ) //s➞ 12



// Q => 11 Write a function that returns the length of a string. Make your function recursive.

function length(str){
    if(str.length === 0){
        return 0
    }
    return 1 + length(str.slice(1))
}

// Examples
console.log(length("apple")) // ➞ 5
console.log(length("make")) // ➞ 4
console.log(length("a")) // ➞ 1
console.log(length("")) // ➞ 0


// Q => 12 Create a function that evaluates an equation.

function eq(equation){
    return eval(equation)
}

// Examples
// console.log(eq("1+2"))// ➞ 3
// console.log(eq("6/(9-7)"))// ➞ 3
// console.log(eq("3+2-4"))// ➞ 1

// Q => 13 Write a template string according to the following example:

// Example
const a = "John";
const b = "Joe";
const c = "Jack";
const template = `Their names were: ${a}, ${b} and ${c}`// ➞ "Their names were:  John,  Joe  and  Jack."


// Q => 14 Given a string, return true if its length is even or false if the length is odd.

function oddOrEven(str){
    const strLenght = str.length
    return strLenght % 2 === 0 
}

// Examples
console.log(oddOrEven("apples")) //➞ true
// The word "apples" has 6 characters.
// 6 is an even number, so the program outputs true.

console.log(oddOrEven("pears")) //➞ false
// "pears" has 5 letters, and 5 is odd.
// Therefore the program outputs false.

console.log(oddOrEven("cherry")) //➞ true

//Q => 15 You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

function intToString(num){
    return String(num)
}

function stringToInt(num){
    return parseInt(num)

}

// Examples:
console.log(intToString(4)) // ➞ "4"
console.log(stringToInt("4")) // ➞ 4
console.log(intToString(29348)) // ➞ "29348"

//Q => 16 Create a function that takes a word and returns the new word without including the first character.

function newWord(str){
    return str.slice(1)
}

function newWord(str){
    let res = "";
    for(let i = 1 ; i < str.length; i++)[
        res += str[i]
    ]
    return res
}

// Examples
console.log(newWord("apple")) // ➞ "pple"
console.log(newWord("cherry")) // ➞ "herry"
console.log(newWord("plum")) // ➞ "lum"

//Q => 17 Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

function helloName(str){
    return `Hello ${str}!`
}

function helloName(str){
    return "Hello" + str + "!"
}

function helloName(str){
    return "Hello".concat(`${str}!`)
}

// Examples
console.log(helloName("Gerald")) // ➞ "Hello Gerald!"
console.log(helloName("Tiffany")) // ➞ "Hello Tiffany!"
console.log(helloName("Ed")) // ➞ "Hello Ed!"



//Q => 18 Create a function that takes an array of numbers or letters and returns a string.

function arrayToString(arr){
    let res = "";
    for(let i = 0; i < arr.length; i++){
        res += arr[i]
    }
    return res
}

function arrayToString(arr){
    return arr.join("")
}

function arrayToString(arr){
    let res = "";
    arr.map(item => {
        res += item
    })
    return res
}

// Examples
console.log(arrayToString([1, 2, 3, 4, 5, 6])) // ➞ "123456"
console.log(arrayToString(["a", "b", "c", "d", "e", "f"])) // ➞ "abcdef"
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])) // ➞ "123asdAAAA"


//Q => 19 Create a function that takes an array and a string as arguments and returns the index of the string.

function findIndex(arr,str){
    return arr.indexOf(str)
}

function findIndex(arr,str){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === str){
            return i
        }
    }
}

// Examples
console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")) // ➞ 2
console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")) // ➞ 1
console.log(findIndex(["a", "g", "y", "d"], "d")) // ➞ 3
console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")) // ➞ 0

//Q => 20 Create a function that returns a number, based on the string provided. Here is a list of all digits:

// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0

function word(str) {
    let obj = {
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "ten": 10
    }
    return obj[str]
}

function word(str){
    switch (str){
        case "one": return 1
        case "two": return 2
        case "three": return 3
        case "four": return 4
        case "five": return 5
        case "six": return 6
        case "seven": return 7
        case "eight": return 8
        case "nine": return 9
        case "ten": return 10
        default: throw new Error("invalid input number")
    }
}

// Examples
console.log(word("one")) // ➞ 1
console.log(word("two")) // ➞ 2
console.log(word("nine")) // ➞ 9