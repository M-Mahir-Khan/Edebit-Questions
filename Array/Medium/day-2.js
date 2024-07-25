// Q => 9 I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// Here is my code:

// function flatten(arr) {
//   arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.concat(arr[i]);
//   }
//   return arr2;
// }
// But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

function flatten(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2 = arr2.concat(arr[i])
    }
    return arr2
}

function flatten(arr) {
    let arr2 = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            arr2.push(arr[i][j])
        }
    }
    return arr2
}

function flatten(arr) {
    let res = arr.reduce((acc, val) => acc.concat(val), [])
    return res
}

function flatten(arr) {
    let res = [];
    arr.forEach(element => {
        element.forEach(item => {
            res.push(item)
        })
    });
    return res
}

// Examples
console.log(flatten([[1, 2], [3, 4]])) /// ➞ []
// Expected: [1, 2, 3, 4]

console.log(flatten([["a", "b"], ["c", "d"]])) /// ➞ []
// Expected: ["a", "b", "c", "d"]

console.log(flatten([[true, false], [false, false]])) /// ➞ []
// Expected: [true, false, false, false]


//Q => 10 Create a function that takes an array of numbers and returns the second largest number.

function secondLargest(arr) {
    let sort = arr.sort((a, b) => b - a)
    return sort[1]
}

// Examples
console.log(secondLargest([10, 40, 30, 20, 50])) // ➞ 40
console.log(secondLargest([25, 143, 89, 13, 105])) // ➞ 105
console.log(secondLargest([54, 23, 11, 17, 10])) // ➞ 23


//Q => 11 The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

function clone(arr) {
    arr.push([...arr])
    return arr
}

function clone(arr) {
    let clone = arr.concat()
    arr.push(clone);
    return arr

}

// Examples
console.log(clone([1, 1])) // ➞ [1, 1, [1, 1]]
console.log(clone([1, 2, 3])) // ➞ [1, 2, 3, [1, 2, 3]]
console.log(clone(["x", "y"])) // ➞ ["x", "y", ["x", "y"]]


//Q => 12 Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.

// Return true if the marathon is 25 miles long, otherwise, return false.

function marathonDistance(arr) {
    let sum = arr.reduce((acc, curr) => acc + Math.abs(curr), 0);
    return sum === 25
}

function marathonDistance(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.abs(arr[i])
    }
    return sum === 25
}

// Examples
console.log(marathonDistance([1, 2, 3, 4])) // ➞ false
console.log(marathonDistance([1, 9, 5, 8, 2])) // ➞ true
console.log(marathonDistance([-6, 15, 4])) // ➞ true


//Q => 13 Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

function testJackpot(arr) {
    return arr.every(item => item === arr[0])
}

function testJackpot(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] !== arr[i]) {
            return false
        }
    }
    return true
}

function testJackpot(arr) {
    return new Set(arr).size === 1;
}

// Examples
console.log(testJackpot(["@", "@", "@", "@"])) // ➞ true
console.log(testJackpot(["abc", "abc", "abc", "abc"])) // ➞ true
console.log(testJackpot(["SS", "SS", "SS", "SS"])) // ➞ true
console.log(testJackpot(["&&", "&", "&&&", "&&&&"])) // ➞ false
console.log(testJackpot(["SS", "SS", "SS", "Ss"])) // ➞ false


//Q => 14 You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".
// Notes
// ! , ? . are always separated from the last word.
// Nemo will always look like Nemo, and not NeMo or other capital variations.
// Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
// If there are multiple Nemo's in the sentence, only return the first one.

function findNemo(str){
    let arr = str.split(" ");
    if(arr.includes("Nemo")){
        return `I found Nemo at ${arr.indexOf("Nemo") + 1}!`
    }else{
        return `I can't find Nemo :(`
    }
}

function findNemo(str){
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === "Nemo"){
            return `I found Nemo at ${i + 1}!`
        }    
    }
    return "I can't find Nemo :(";
}

function findNemo(str){
    let arr = str.split(" ");
    let index = arr.indexOf("Nemo");
    if(index !== -1){
        return `I found Nemo at ${index + 1}!`
    }
    return "I can't find Nemo :(";
}

// Examples
console.log(findNemo("I am finding Nemo !")) //  ➞ "I found Nemo at 4!"
console.log(findNemo("Nemo is me")) //  ➞ "I found Nemo at 1!"
console.log(findNemo("I Nemo am")) //  ➞ "I found Nemo at 2!"


//Q =>15 Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

function totalVolume(...args){
    let total = 0;
    for(let i = 0 ; i < args.length ;i++){
        total += (args[i][0] * args[i][1] * args[i][2])
    }
    return total
}

function totalVolume(...args){
    let res = args.reduce((acc,curr)=>{
        return acc + (curr[0] * curr[1] * curr[2] )
    },0)
    return res
}

// Examples
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])) // ➞ 63
console.log(totalVolume([2, 2, 2], [2, 1, 1])) // ➞ 10
console.log(totalVolume([1, 1, 1])) // ➞ 1


//Q =>16 Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

function indexMultiplier(arr){
    let res = arr.reduce((acc,curr,index)=>{
      return  acc + (curr * index)
    },0)
    return res
}

// Examples
console.log(indexMultiplier([1, 2, 3, 4, 5])) // ➞ 40
// (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

console.log(indexMultiplier([-3, 0, 8, -6])) // ➞ -2
// (-3*0 + 0*1 + 8*2 + -6*3)