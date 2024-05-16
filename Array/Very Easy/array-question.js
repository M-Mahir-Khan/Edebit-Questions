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
    // console.log(getVoteCount({ upvotes: 13, downvotes: 0 })) //➞ 13
    // console.log(getVoteCount({ upvotes: 2, downvotes: 33 })) //➞ -31
    // console.log(getVoteCount({ upvotes: 132, downvotes: 132 }))// ➞ 0


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
// console.log(a === 1); // true
// console.log(b === 2); // true


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
// console.log(concat([1, 3, 5], [2, 6, 8])) // ➞ [1, 3, 5, 2, 6, 8]
// console.log(concat([7, 8], [10, 9, 1, 1, 2])) // ➞ [7, 8, 10, 9, 1, 1, 2]
// console.log(concat([4, 5, 1], [3, 3, 3, 3, 3])) //➞ [4, 5, 1, 3, 3, 3, 3, 3]


// Q => 11Create a function that takes an array and a string as arguments and returns the index of the string.

// function findIndex(arr,str){
//     return arr.indexOf(str);
// }

function findIndex(arr,str){
    for(let i = 0; i <= arr.length; i++){
        if(arr[i] === str){
            return i
        }
    }
}

// Examples
// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")) // ➞ 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")) //➞ 1
// console.log(findIndex(["a", "g", "y", "d"], "d")) //➞ 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple"))// ➞ 0


// Q => 12 Given an index and an array, return the value of the array with the given index.

function valueAt(arr,index){
    return arr[Math.floor(index)];
}

// Examples
// console.log(valueAt([1, 2, 3, 4, 5, 6], 10 / 2)) //➞ 6
// console.log(valueAt([1, 2, 3, 4, 5, 6], 8.0 / 2)) //➞ 5
// console.log(valueAt([1, 2, 3, 4], 6.535355314 / 2)) //➞ 4


// Q => 13 Create a function that finds the index of a given item.

const search = (arr,i) => arr.indexOf(i);

// Examples
// console.log(search([1, 5, 3], 5)) // ➞ 1
// console.log(search([9, 8, 3], 3)) //➞ 2
// console.log(search([1, 2, 3], 4)) //➞ -1


// Q => 14 Make a function thar return sum total of an array

// function sumArray(arr){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum
// }

const sumArray = (arr) => arr.reduce((a,b) => a + b)

// console.log(sumArray([1, 2, 3, 4, 5]))// ➞ 15
// console.log(sumArray([-1, 0, 1])) //➞ 0
// console.log(sumArray([0, 4, 8, 12])) //➞ 24

// Q => 15Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

function search2(arr,val){
    if(arr.includes(val)){
        return arr.indexOf(val)
    }else{
        return -1
    }
}

// Examples
// console.log(search2([1, 2, 3, 4], 3)) //➞ 2
// console.log(search2([2, 4, 6, 8, 10], 8))// ➞ 3
// console.log(search2([1, 3, 5, 7, 9], 11))// ➞ -1


// Q => 16 Write a function to check if an array contains a particular number.
function check(arr,item){
    return arr.includes(item)
}
 // Examples
// console.log(check([1, 2, 3, 4, 5], 3)) //➞ true
// console.log(check([1, 1, 2, 1, 1], 3)) //➞ false
// console.log(check([5, 5, 5, 6], 5)) //➞ true
// console.log(check([], 5)) //➞ false


//Q => 17 Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

// function arrBetween(num1,num2,arr){
//     let newarr = []
//     for(let i =0; i<= arr.length;i++){
//         if(arr[i] > num1 && arr[i] < num2){
//             newarr.push(arr[i])
//         }
//     }
//     return newarr
// }

function arrBetween(num1,num2,arr){
    return arr.filter((item) => item > num1 && item < num2)
}
// Examples
// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])) //➞ [5, 4, 7]
// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])) //➞ [8, 6]
// console.log(arrBetween(7, 32, [1, 2, 3, 78])) //➞ []



//Q=> 18 The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.
// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

function fiftyThirtyTwenty(ati){
    const needs = ati * 0.5;
    const wants = ati * 0.3;
    const savings = ati * 0.2;

    return {
        "Needs": needs,
        "Wants": wants,
        "Saving": savings
    }
}

// Examples
// console.log(fiftyThirtyTwenty(10000)) //➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// console.log(fiftyThirtyTwenty(50000)) //➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// console.log(fiftyThirtyTwenty(13450)) //➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }

//Q=>19 Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.

// function hasSameBread(arr1,arr2){
//     if(arr1[0] === arr2[0] && arr1[arr1.length -1] === arr2[arr2.length -1]){
//         return true
//     }else {
//         return false
//     }
// }

function hasSameBread (arr1,arr2){
    return arr1[0] === arr2[0] && arr1[arr1.length -1] === arr2[arr2.length -1]
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

function parseArray(arr){
    let stringArr = []
    for(let i = 0; i< arr.length;i++){
        stringArr.push(String(arr[i]))
    }
    return stringArr
}

// Examples
console.log(parseArray([1, 2, "a", "b"])) //➞ ["1", "2", "a", "b"]
console.log(parseArray(["abc", 123, "def", 456])) //➞ ["abc", "123", "def", "456"]
console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]))// ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
console.log(parseArray([])) //➞ []

