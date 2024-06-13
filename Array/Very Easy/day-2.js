//Q=>19 Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// function hasSameBread(arr1,arr2){
//     if(arr1[0] === arr2[0] && arr1[arr1.length -1] === arr2[arr2.length -1]){
//         return true
//     }else {
//         return false
//     }
// } 

function hasSameBread(arr1, arr2) {
    return arr1[0] === arr2[0] && arr1[arr1.length - 1] === arr2[arr2.length - 1]
}

function hasSameBread(arr1,arr2){

}

// Examples
// console.log(hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// )) //➞ true

// console.log(hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// )) //➞ false

// console.log(hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// )) // ➞ false


// Q=> 20 Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// function parseArray(arr){
//     return arr.map((item)=> String(item))
// }

function parseArray(arr) {
    let stringArr = []
    for (let i = 0; i < arr.length; i++) {
        stringArr.push(String(arr[i]))
    }
    return stringArr
}

// Examples
// console.log(parseArray([1, 2, "a", "b"])) //➞ ["1", "2", "a", "b"]
// console.log(parseArray(["abc", 123, "def", 456])) //➞ ["abc", "123", "def", "456"]
// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]))// ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
// console.log(parseArray([])) //➞ []

//Q=> 21 Create a function that takes an array and returns the types of values (data types) in a new array.

function arrayValuesTypes(arr) {
    return arr.map((item) => typeof item)
}

function arrayValuesTypes(arr){
    let res = []
    for(let i = 0 ; i < arr.length ; i++){
        res.push(typeof arr[i])
    }
    return res
}

// // Examples
console.log(arrayValuesTypes([1, 2, "null", []]))
// ➞ ["number", "number", "string", "object"]
console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]))
// ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]))
// ➞ ["number", "string", "string", "object", "object", "boolean", "number"]


//Q => 22 There is an easy way to assign to array values to the nth index by using rest parameter syntax.

// var [head, tail] = [1, 2, 3, 4]

// console.log(head) // outputs  1
// console.log(tail) // outputs 2
// But how could I make tail = [2, 3, 4] instead of tail = 2?

// solution
var [head, ...tail] = [1, 2, 3, 4];
// console.log(head);
// console.log(tail);

//Q => 23 Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

function toNumberArray(arr) {
    return arr.map((item) => Number(item));
}

function toNumberArray(arr){
    let res = [];
    for(let i = 0 ; i< arr.length ; i++){
        res.push(Number(arr[i]))
    }
}
// Example:
// console.log(toNumberArray(["9.4", "4.2"])) //➞ [9.4, 4.2]
// console.log(toNumberArray(["91", "44"])) //➞ [91, 44]
// console.log(toNumberArray(["9.5", "8.8"])) //➞ [9.5, 8.8]

//Q => 24 Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

function checkSquareAndCube(arr) {
    const res =  Math.sqrt(arr[0]) === Math.pow(arr[1], 1 / 3)
    return res;
}


// Examples
// console.log(checkSquareAndCube([4, 8]))//➞ true
// console.log(checkSquareAndCube([16, 48])) //➞ false
// console.log(checkSquareAndCube([9, 27])) //➞ true


//Q => 25 You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

function totalAmountAdjectives(obj) {
    return Object.keys(obj).length;
}

function totalAmountAdjectives(obj){
    let count = 0 ;
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            count++
        }
    }
    return count;
}

function totalAmountAdjectives(obj) {
    return Object.values(obj).filter(value => typeof value === 'string').length;
}

// Examples
console.log(totalAmountAdjectives({ a: "moron" }))// ➞ 1
console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })) //➞ 3
console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })) //➞ 4

//Q=> 26 You can assign variables from arrays with destructuring like this:

const arr1 = ["eyes", "nose", "lips", "ears"];
// let [eyes, nose, lips, ears] = arr1
// But you can also skip over items in the array being destructured.

let [eyes, nose, , ears] = arr1;


//Q=> 27 Create a function which returns the length of a string, WITHOUT using String.length property.

function length(str) {
    let count = 0;
    for (let length of str) {
        count++
    }
    return count
}

function length(str){
    const res = str.length;
    return res
}

function length(str){
    let count = 0;
    while(str[count] !== undefined){
        count++
    }
    return count;
}

function length(str){
    if(str === ""){
        return 0 
    }else{
        return 1 + length(str.slice(1))
    }
}



// Examples
// console.log(length("Hello World")) //➞ 11
// console.log(length("Edabit")) //➞ 6
// console.log(length("wash your hands!")) //➞ 16

//Q=>28 Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

function halfQuarterEighth(num) {
    return [num / 2, num / 4, num / 8]
}

// Examples
// console.log(halfQuarterEighth(6))//➞ [3, 1.5, 0.75]
// console.log(halfQuarterEighth(22)) //➞ [11, 5.5, 2.75]
// console.log(halfQuarterEighth(25)) //➞ [12.5, 6.25, 3.125]

//Q => 29 Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"

function nSidedShape(n) {
    let shapes = ["circle", "semi-circle", "triangle", "square", "pentagon", "hexagon", "heptagon", "heptagon", "octagon", "nonagon", "decagon"];
    return shapes[n - 1]
}
// Examples
// console.log(nSidedShape(3)) // ➞ "triangle"
// console.log(nSidedShape(1)) // ➞ "circle"
// console.log(nSidedShape(9)) // ➞ "nonagon"

//Q => 30 Create a function that takes an array with numbers and return an array with the elements multiplied by two.


function getMultipliedArr(arr) {
    return arr.map(item => item * 2)
}

function getMultipliedArr(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        res.push(arr[i] * 2)
    }
    return res;
}

function getMultipliedArr(arr){
    let res = [];
    arr.forEach(item => res.push(item * 2))
    return res
}

// // Examples
// console.log(getMultipliedArr([2, 5, 3])) //➞ [4, 10, 6]
// console.log(getMultipliedArr([1, 86, -5])) //➞ [2, 172, -10]
// console.log(getMultipliedArr([5, 382, 0])) //➞ [10, 764, 0]


//Q=> 31 Create a function that takes an array of words and transforms it into an array of each word's length.

function wordLengths(arr) {
    return arr.map((str) => str.length)
}

function wordLengths(arr){
    let res = [];
    for(let i = 0 ; i < arr.length; i++){
        res.push(arr[i].length)
    }
    return res
}

function wordLengths(arr){
    let res = [];
    arr.forEach(item => res.push(item.length))
    return res
}

function wordLengths(arr){
    let res = [];
    for(let str of arr){
        res.push(sre.length)
    }
    return res
}

// Examples
console.log(wordLengths(["hello", "world"])) //➞ [5, 5]
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])) //➞ [9, 12, 9]
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])) //➞ [3, 5, 9, 4, 2, 3, 8]

//Q => 32 Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.


// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

function determineLever(arr) {
    const fulcrumIndex = arr.indexOf("f");
    const effortIndex = arr.indexOf("e");
    const loadIndex = arr.indexOf("l");

    if (fulcrumIndex === 1) {
        return "first class lever"
    } else if (fulcrumIndex === 2) {
        return "second class lever"
    } else if (fulcrumIndex === 0) {
        return "third class lever"
    }
}

// Examples
// console.log(determineLever(["e", "f", "l"])) // ➞ "first class lever"
// console.log(determineLever(["e", "l", "f"])) // ➞ "second class lever"
// console.log(determineLever(["f", "e", "l"])) // ➞ "third class lever"