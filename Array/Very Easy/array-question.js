// Q => 1 Create a function that takes an array containing only numbers and return the first element.

function getFirstValue(arr){
    return arr[0]
}
// Examples
// console.log(getFirstValue([1, 2, 3])) //➞ 1
// console.log(getFirstValue([80, 5, 100]))// ➞ 80
// console.log(getFirstValue([-500, 0, 50]))// ➞ -500



// Q => 2 Given two arguments, return an array which contains these two arguments.

function makePair(arg1,arg2){
    return [arg1,arg2]
}
// Examples
// console.log(makePair(1, 2)) //➞ [1, 2]
// console.log(makePair(51, 21))// ➞ [51, 21]
// console.log(makePair(512124, 215))// ➞ [512124, 215]



// Q => 3 According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// function drop(arr,n){
//     if(n >= arr.length){
//         return []
//     } else if (n <= 0){
//         return arr.slice
//     }else{
//         return arr.slice(n)
//     }
// }

function drop(arr,n){
    return arr.slice(n)
}
// Examples
// console.log(drop([1, 2, 3], 1)) // ➞ [2, 3]
// console.log(drop([1, 2, 3], 2)) // ➞ [3]
// console.log(drop([1, 2, 3], 5))// ➞ []

// drop([1, 2, 3], 0) ➞ [1, 2, 3]

// Q => 4 Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

function getVoteCount(obj){
    let sub = obj.upvotes - obj.downvotes;
    return sub
}

// Examples
console.log(getVoteCount({ upvotes: 13, downvotes: 0 })) //➞ 13
console.log(getVoteCount({ upvotes: 2, downvotes: 33 })) //➞ -31
console.log(getVoteCount({ upvotes: 132, downvotes: 132 }))// ➞ 0


// Q => 5 Write a function to reverse an array.
const reverse = (arr) => arr.reverse();

// Examples
// console.log(reverse([1, 2, 3, 4])) // ➞ [4, 3, 2, 1]
// console.log(reverse([9, 9, 2, 3, 4])) // ➞ [4, 3, 2, 9, 9]
// console.log(reverse([])) //➞  []



// Q => 6 make a function that add 1 to every element in the array!

// const incrementItems = (arr) => arr.map(item => item +1) 

function incrementItems(arr){
    for(let i = 0; i < arr.length;i++){
        arr[i] += 1
    }
    return arr
}

// Examples
// console.log(incrementItems([0, 1, 2, 3]))// ➞ [1, 2, 3, 4]
// console.log(incrementItems([2, 4, 6, 8]))// ➞ [3, 5, 7, 9]
// console.log(incrementItems([-1, -2, -3, -4]))  //➞ [0, -1, -2, -3]


// Q => 7 You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2
// With ES6, you can assign variables from arrays in a much more succinct way. Create variables a and b from the given array using the ES6 destructuring assignment syntax, where a === 1 and b === 2.

const arr = [1, 2, 3, 4, 5, 6]

const [a,b] = arr;
console.log(a === 1); // true
console.log(b === 2); // true


//Q => 8 Create a function that accepts an array and returns the last item in the array.

function getLastItem(arr){
    return arr.pop()
}

// Examples
// console.log(getLastItem([1, 2, 3])) // ➞ 3
// console.log(getLastItem(["cat", "dog", "duck"]))// ➞ "duck"
// console.log(getLastItem([true, false, true]))// ➞ true


//Q => 9 Create a function that takes an array of numbers or letters and returns a string.

function arrayToString(arr){
    return arr.join()
}
// Examples
// console.log(arrayToString([1, 2, 3, 4, 5, 6])) //➞ "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])) //➞ "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])) //➞ "123asdAAAA"


// Q => 10 Create a function to concatenate two integer arrays.

function concat(arr1,arr2){
    return arr1.concat(arr2)
}

// Examples
console.log(concat([1, 3, 5], [2, 6, 8])) // ➞ [1, 3, 5, 2, 6, 8]
console.log(concat([7, 8], [10, 9, 1, 1, 2])) // ➞ [7, 8, 10, 9, 1, 1, 2]
console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])) //➞ [4, 5, 1, 3, 3, 3, 3, 3]
