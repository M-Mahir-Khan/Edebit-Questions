//Q => 42 Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...

function addIndexes(arr) {
    let res =  arr.map((item, index) => item + index);
    return res
}

function addIndexes(arr){
    let res = []
    for(let i = 0; i < arr.length ; i++){
        res.push(arr[i] + i)
    }
    return res
}

function addIndexes(arr){
    let res = [];
    arr.forEach((num, index)=> res.push(num + index))
    return res
}


// Examples
console.log(addIndexes([0, 0, 0, 0, 0])) // ➞ [0, 1, 2, 3, 4]
console.log(addIndexes([1, 2, 3, 4, 5])) // ➞ [1, 3, 5, 7, 9]
console.log(addIndexes([5, 4, 3, 2, 1])) // ➞ [5, 5, 5, 5, 5]

//Q => 43 Create a function that returns an array of all the integers between two given numbers start and end.

function rangeOfNum(start, end) {
    let arr = [];
    for (let i = start; i < end; i++) {
        arr.push(i)
    }
    return arr
}


// Examples
// console.log(rangeOfNum(2, 4)) // ➞ [3]
// console.log(rangeOfNum(5, 9)) // ➞ [6, 7, 8]
// console.log(rangeOfNum(2, 11)) // ➞ [3, 4, 5, 6, 7, 8, 9, 10]

//Q=>44 Write a function that returns the sum of elements greater than 5, in the given array .

function sumFive(arr) {
    let res = arr
        .filter(item => item > 5)
        .reduce((acc, curr) => acc + curr, 0)
    return res;
}

function sumFive(arr){
    let sum = 0;
    for(let i = 0; i< arr.length; i++){
        if(arr[i] > 5){
            sum += arr[i]
        }
    }
    return sum
}
// Examples
console.log(sumFive([1, 5, 20, 30, 4, 9, 18]))// ➞ 77  
console.log(sumFive([1, 2, 3, 4]))// ➞ 0
console.log(sumFive([10, 12, 28, 47, 55, 100]))// ➞ 252


//Q=>45 Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

function filterArray(arr) {
    let res =  arr.filter(item => typeof item === "number")
    return res;
}

function filterArray(arr){
    let res = [];
    for(let i = 0 ; i< arr.length ; i++){
        if(typeof arr[i] === "number"){
            res.push(arr[i])
        }
    }
    return res
}

function filterArray(arr) {
    let res = [];
    for (let item of arr) {
        if (typeof item === "number") {
            res.push(item);
        }
    }
    return res;
}
// Examples
console.log(filterArray([1, 2, 3,, "a", "b", 4])) // ➞ [1, 2, 3, 4]
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]))// ➞ [0, 1729]
console.log(filterArray(["Nothing", "here"]))// ➞ []

//Q=>46 In mathematics and digital electronics, a binary number is a number expressed in the base-2 numeral system or binary numeral system. Given an array of ones and zeroes of a binary number, return the equivalent decimal value.

function binaryToDecimal(arr) {
    let result = arr.join("");
    return parseInt(result, 2);
}
// Examples
// console.log(binaryToDecimal([0, 0, 0, 1]))// ➞ 1
// console.log(binaryToDecimal([0, 0, 1, 0]))// ➞ 2
// console.log(binaryToDecimal([1, 1, 1, 1,1, 0, 1, 1, 0, 1]))// ➞ 1005

//Q =>47 The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.
// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

function sayWhat(obj) {
    const secondKey = obj[2];

    const allValues = Object.keys(obj).map(key => obj[key])
    const valueJoin = allValues.join(" ");

    return `${valueJoin} ${secondKey}`

}

// Examples
// console.log(sayWhat({ 1: "Mommy", 2: "please", 3: "help" }))// ➞ "Mommy please help please"
// console.log(sayWhat({ 1: "Me", 2: "innocent", 3: "is" })) //➞ "Me innocent is innocent"
// console.log(sayWhat({ 1: "Must", 2: "lawyer", 3: "call" })) //➞ "Must lawyer call lawyer"

//Q=>48 According to the lodash documentation, _.fill Fills elements of an array with the value from start to, but not including, end. Note that this method mutates the array.
// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Arguments
// array (Array): The array to fill.
// value (*): The value to fill array with.
// [start=0] (number): The start position.
// [end=array.length] (number): The end position.
// Returns
// (Array): Returns array.

function fill(array, val, start, end) {
    return array.fill(val, start, end)
}

// Examples
var array = [1, 2, 3]
// console.log(fill(array, "a"))//➞ ["a", "a", "a"]
// console.log(fill(Array(3), 2))// ➞ [2, 2, 2]
// console.log(fill([4, 6, 8, 10], "*", 1, 3)) // ➞ [4, "*", "*", 10]



//Q => 49 Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.

function makeRug(m, n, s = "#") {
    let arr = [];
    for (let i = 0; i < m; i++) {
        arr.push(s.repeat(n))
    }
    return arr
}

// function makeRug(m,n,s = "#"){
//     let res = [];

// }

// Examples
console.log(makeRug(3, 5)) //➞ [
//   "#####",//   "#####",

//   "#####",
//   "#####"
// ]

console.log(makeRug(3, 5, '$'))// ➞ [
//   "$$$$$",
//   "$$$$$",
//   "$$$$$"
// ]

console.log(makeRug(2, 2, 'A'))// ➞ [
//   "AA",
//   "AA"
// ]

//Q => 50 Given a letter and an array of words, return whether the letter does not appear in any of the words.

function forbiddenLetter(letter, arr) {
    for (let word of arr) {
        if (word.includes(letter)) {
            return true
        }
    }
    return false
}



// Examples
// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])) //s➞ false
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]))// ➞ true
// console.log(forbiddenLetter("m", [])) //➞ true


// Q => 51 You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

function birthdayCakeCandles(candles) {
    let maxNum = Math.max(...candles)
    let maxCandel = candles.filter(item => item === maxNum)
    return maxCandel.length
}

function birthdayCakeCandles(candels){
    let maxNum = Math.max(...candels)
    let maxCandel = 0
    for(let i = 0; i <  candels.length; i++){
        maxCandel += candels[i] === maxNum;
    }
    return maxCandel.length
}

// Examples
// console.log(birthdayCakeCandles([4, 4, 1, 3]))//➞ 2
// The maximum height candles are four units high.
// There are two of them, so you return 2.

console.log(birthdayCakeCandles([3, 2, 1, 3]))// ➞ 2
console.log(birthdayCakeCandles([82, 49, 82, 82, 41, 82, 15, 63, 38, 25]))// ➞ 4

// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.