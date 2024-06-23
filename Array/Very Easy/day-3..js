//Q => 33 Create a function that takes a string and returns a string with spaces in between all of the characters.

function spaceMeOut(str) {
    let charactersArray = str.split('')
    let spaceString = charactersArray.join(' ')
    return spaceString;
}

function spaceMeOut(str){
    let spaceStr = ""
    for(let char of str){
        spaceStr += char + " "
    }
    return spaceStr
}

function spaceMeOut(str){
    let spaceStr = "";
    for(let i = 0; i< str.length; i++){
        spaceStr += str[i] + " "
    }
    return spaceStr
} 
// Examples
console.log(spaceMeOut("space")) // ➞ "s p a c e"
console.log(spaceMeOut("far out")) // ➞ "f a r   o u t"
console.log(spaceMeOut("elongated musk")) // ➞ "e l o n g a t e d   m u s k"


//Q=> 34 You can assign variables from nested arrays like this:

// const arr = ["cars", "planes", ["trains", ["motorcycles"]]]

// let trans1 = arr[0]
// let trans2 = arr[1]
// let trans3 = arr[2][0]
// let trans4 = arr[2][1][0]

console.log(trans1) // outputs "cars"
console.log(trans2) // outputs "planes"
console.log(trans3) // outputs "trains"
console.log(trans4) // outputs "motorcycles"
// With ES6, you can assign variables from arrays in a much more succinct way.

const arr2 = ["cars", "planes", ["trains", ["motorcycles"]]];

// Destructuring assignment
const [trans1, trans2, [trans3, [trans4]]] = arr2;
console.log(trans1) // outputs "cars"
console.log(trans2) // outputs "planes"
console.log(trans3) // outputs "trains"
console.log(trans4) // outputs "motorcycles"


//Q=>35 Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

function findDifference(a, b) {
    let volumeOfA = a[0] * a[1] * a[2];
    let volumeOfB = b[0] * b[1] * b[2];

    return Math.abs(volumeOfA - volumeOfB);
}

function findDifference(a,b){
    const res = Math.abs(a.reduce((acc,val)=> acc * val,1) - b.reduce((acc,val)=> acc * val, 1))
    return res
}


// Examples
console.log(findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]) ) //➞ 12040
console.log(findDifference([ 9, 22, 18 ], [ 16, 24, 10 ])) // ➞ 276
console.log(findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]) )//➞  405
console.log(findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]))// ➞  5412

//Q=>36 Create a function that takes an array and returns the sum of all numbers in the array.

function getSumOfItems(arr) {
    return arr.reduce((acc, curr) => acc + curr)
}

function getSumOfItems(arr){
    let res = 0;
    for(let i = 0; i< arr.length; i++){
        res += arr[i]
    }
    return res
}

function getSumOfItems(arr){
    if(arr.length === 0){
        return 0
    }
    return arr[0] + getSumOfItems(arr.slice(1))
}

function getSumOfItems(arr){
    let res = 0;
    arr.forEach(item => res += item)
    return res
}
// Examples
console.log(getSumOfItems([2, 7, 4])) //➞ 13
console.log(getSumOfItems([45, 3, 0])) //➞ 48
console.log(getSumOfItems([-2, 84, 23]))// ➞ 105


//Q=>37 Given an array of integers, determine whether the sum of its elements is even or odd.
// The return value should be a string ("odd" or "even").
// If the input array is empty, consider it as an array with a zero ([0]).



function evenOrOdd(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    // let sum = arr.reduce((acc,curr) => acc + curr);
    return sum % 2 === 0 ? "even" : "odd";
}

function evenOrOdd(arr){
    let sum = arr.reduce((acc,curr)=> acc + curr,0 )
    let res = sum % 2 === 0 ? "even" : "odd";
    return res;
}

// Examples
console.log(evenOrOdd([0])) // ➞ "even"
console.log(evenOrOdd([1])) // ➞ "odd"
console.log(evenOrOdd([]) ) //➞ "even"
console.log(evenOrOdd([0, 1, 5])) // ➞ "even"

//Q => 38 Create a function that takes an array of numbers arr and returns an inverted array.

function invertArray(arr) {
    return arr.map(num => -num)
}

function invertArray(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        res.push( -arr[i])
    }
    return res
}

function invertArray(arr){
    let res = [];
    arr.forEach(item => res.push(-item))
    return res
}


// Example
console.log(invertArray([1, 2, 3, 4, 5])) //➞ [-1, -2, -3, -4, -5]
console.log(invertArray([1, -2, 3, -4, 5])) // ➞ [-1, 2, -3, 4, -5]
console.log(invertArray([])) // ➞ []


//Q=> 39 Given an array, rotate the values clockwise by one (the last value is sent to the first position).
// Check the examples for a better understanding.

function rotateByOne(arr) {
    const lastElement = arr.pop();
    arr.unshift(lastElement);
    return arr
}

Examples
console.log(rotateByOne([1, 2, 3, 4, 5]))   //➞ [5, 1, 2, 3, 4]
console.log(rotateByOne([6, 5, 8, 9, 7]) )  //➞ [7, 6, 5, 8, 9]
console.log(rotateByOne([20, 15, 26, 8, 4]))// ➞ [4, 20, 15, 26, 8]


//Q=>40 Create a function that returns the selected filename from a path. Include the extension in your answer.

function getFilename(path) {
    const parts = path.split(/[/\\]/);
    return parts[parts.length - 1];
}

// // Examples
console.log(getFilename("C:/Projects/pil_tests/ascii/edabit.txt"))// ➞ "edabit.txt"
console.log(getFilename("C:/Users/johnsmith/Music/Beethoven_5.mp3"))// ➞ "Beethoven_5.mp3"
console.log(getFilename("ffprobe.exe"))// ➞ "ffprobe.exe"


//Q => 41 Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:
// cola
// fanta

function skipTooMuchSugarDrinks(arr) {
    return arr.filter((item) => {
        if (item !== "cola" && item !== "fanta") {
            return item
        }
    })
}

function skipTooMuchSugarDrinks(arr){
    let res = [];
    for(let i = 0 ; i < arr.length; i++){
        if (arr[i] !== "cola" && arr[i] !== "fanta") {
            res.push(arr[i])
        }
    }
    return res
}

function skipTooMuchSugarDrinks(arr){
    let res = [];
    for(let drink of arr){
        if (drink !== "cola" && drink !== "fanta") {
            res.push(drink)
        }
    }
    return res
}
function skipTooMuchSugarDrinks(arr) {
    let res = [];
    arr.forEach(item => {
        if (item !== "cola" && item !== "fanta") {  
            res.push(item);
        }
    });
    return res;
}
// Examples
console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]))// ➞ ["water"]
console.log(skipTooMuchSugarDrinks(["fanta", "cola"])) //➞ []
console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"])) //➞ ["lemonade", "beer", "water"]


