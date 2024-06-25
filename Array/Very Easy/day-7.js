//73 You are given an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.

function accepted(arr){
    let res = arr.filter(item => item[0] !== "C")
    return res
}

function accepted(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i][0] !== "C"){
            res.push(arr[i])
        }
    }
    return res
}

// Examples
console.log(accepted(["Ducks", "Bears",  "Cats"])) //➞ ["Ducks", "Bears"]
console.log(accepted(["cars", "trucks", "planes"]) ) //➞ ["cars", trucks", "planes"]
console.log(accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"]))//➞ ["Worms", "Bugs", "Beans"]


//74 Given a sorted array of numbers, remove any numbers that are diviscible by 13. Return the amended array.

function unlucky13(arr){
    let res = arr.filter(item => item % 13 !== 0)
    return res
}

function unlucky13(arr){
    let res = [];
    for(let i = 0; i < arr.length ; i++ ){
        if(arr[i] % 13 !== 0){
            res.push(arr[i])
        }
    }
    return res
}

function unlucky13(arr){
    let res = [];
    arr.forEach(num =>{
        if(num % 13 === 0){
            res.push(num)
        }
    })
    return res;
}

// Examples
console.log(unlucky13([53, 182, 435, 591, 637]) ) //➞ [53, 435, 591]
// 182 and 637 are divisible by 13.

console.log(unlucky13([24, 316, 393, 458, 1279]) ) //➞ [24, 316, 393, 458, 1279]
// No numbers in the array are divisible by 13.

console.log(unlucky13([104, 351, 455, 806, 871]) ) //➞ []
// All numbers in the array are divisible by 13.



//75 I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

// function removeEmptyArrays(arr) {
//   return arr.filter(x => x !== [])
// }
// However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.
// What I am getting:
// removeEmptyArrays(["a", "b", []]) ➞ ["a", "b", []]
// removeEmptyArrays([1, 2, [], 4]) ➞ [1, 2, [], 4]

// Solution
function removeEmptyArrays(arr){
    let res = arr.filter(item => !(Array.isArray(item) && item.length === 0))
    return res
}

function removeEmptyArrays(arr){
    let res = [];
    arr.forEach(item => {
        if(!Array.isArray(item) || item.length > 0){
            res.push(item)
        }
    })
    return res
}

// Examples
// What I want:
console.log(removeEmptyArrays(["a", "b", []])) //  ➞ ["a", "b"]
console.log(removeEmptyArrays([1, 2, [], 4]) ) // ➞ [1, 2, 4]

//76 Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.

function divisible(arr){
    let sum = arr.reduce((acc,curr)=> acc + curr , 0);
    let product = arr.reduce((acc,curr)=> acc * curr, 1);
    
    let res = product % sum === 0;
    return res;
}

function divisible(arr){
    let sum = 0 ;
    let product = 1
    for(let num of arr){
        sum += num;
        product *=num
    }
    return product % sum === 0;
}

// Examples
console.log(divisible([3, 2, 4, 2])) // ➞ false

console.log(divisible([4, 2, 6])) // ➞ true
// 4 * 2 * 6 / (4 + 2 + 6)

console.log(divisible([3, 5, 1])) // ➞ false

//77 Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.

function findBob(arr){
    let res = arr.indexOf("Bob")
    return res
}

function findBob(arr){
    let res = -1
    for(let i = 0 ; i< arr.length ; i++){
        if(arr[i] === "Bob"){
            res = i
        }
    }
    return res;
}

// Examples
console.log(findBob(["Jimmy", "Layla", "Bob"]) ) // ➞ 2
console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"])) //  ➞ 0
console.log(findBob(["Jimmy", "Layla", "James"]) ) // ➞ -1


//78 Create a function that takes an array of numbers. Return the largest number in the array.

function findLargestNum(arr){
    let largest = Math.max(...arr)
    return largest
}

function findLargestNum(arr){
    let largest = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}


function findLargestNum(arr){
    let res = arr.reduce((acc,curr)=> curr > acc ? curr : acc)
    return res
}
// Examples
console.log(findLargestNum([4, 5, 1, 3])) // ➞ 5
console.log(findLargestNum([300, 200, 600, 150])) // ➞ 600
console.log(findLargestNum([1000, 1001, 857, 1]) ) //➞ 1001

//79 You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

// Inputs:
// User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

// Output: [1, 1, -1, -1, 1]
// Examples

function correctStream(user , corret){
    let res = [];
    for(let i = 0 ; i < user.length; i++){
        res.push(user[i] === corret[i] ? 1 : -1)
    }
    return res
}

function correctStream(user, correct){
    let res = [];
    user.forEach((item , index)=>{
        res.push(item === correct[index] ? 1 : -1)
    })
    return res
}

console.log(correctStream(
  ["it", "is", "find"],
  ["it", "is", "fine"]
) ) //➞ [1, 1, -1]

console.log(correctStream(
  ["april", "showrs", "bring", "may", "flowers"],
  ["april", "showers", "bring", "may", "flowers"]
)) // ➞ [1, -1, 1, 1, 1]

//80  Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

function nextElement(arr){
    let difference = arr[1] - arr[0];
    let lastElm = arr[arr.length -1];
    let res = lastElm + difference;
    return res
}

// Examples
console.log(nextElement([3, 5, 7, 9]) ) //➞ 11
console.log(nextElement([-5, -6, -7]) ) //➞ -8
console.log(nextElement([2, 2, 2, 2, 2])) // ➞ 2

// 81 Write a function that returns true if two rooks can attack each other, and false otherwise.

function canCapture([yourbook,oppentsbook]){
    let res = yourbook[0] === oppentsbook[0] || yourbook[1] === oppentsbook[1]
    return res
}

// Examples
console.log(canCapture(["A8", "E8"])) // ➞ true
console.log(canCapture(["A1", "B2"])) // ➞ false
console.log(canCapture(["H4", "H3"])) // ➞ true
console.log(canCapture(["F5", "C8"])) // ➞ false


