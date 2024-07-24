//Q => 1 Create a function which returns the number of true values there are in an array.

function countTrue(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++
        }
    }
    return count
}

function countTrue(arr) {
    return arr.reduce((acc, char) => {
        return acc + (char === true ? 1 : 0)
    }, 0)
}

function countTrue(arr) {
    let count = 0;
    arr.forEach(element => {
        if (element === true) {
            count++
        }
    });
    return count
}

// Examples
console.log(countTrue([true, false, false, true, false])) // ➞ 2
console.log(countTrue([false, false, false, false])) // ➞ 0
console.log(countTrue([])) // ➞ 0                



//Q => 2 According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

function compact(arr) {
    let res = arr.filter((item) => item != 0)
    return res
}

function compact(arr) {
    let res = [];
    for (let item of arr) {
        if (item != 0) {
            res.push(item)
        }
    }
    return res
}

// Examples
console.log(compact([0, 1, false, 2, "", 3]))   // => [1, 2, 3]


//Q => 3 Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

function toArray(obj) {
    let res = Object.entries(obj)
    return res
}

function toArray(obj) {
    let res = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            res.push([key, obj[key]])
        }
    }
    return res
}

function toArray(obj) {
    return Object.keys(obj).map(item => [item, obj[item]])
}

// Examples
console.log(toArray({ a: 1, b: 2 })) // ➞ [["a", 1], ["b", 2]]
console.log(toArray({ shrimp: 15, tots: 12 })) // ➞ [["shrimp", 15], ["tots", 12]]
console.log(toArray({})) // ➞ []



//Q => 4 Create a function that concatenates n input arrays, where n is variable.

function concat(...args) {
    return [...args].flat()
}

function concat(...args) {
    return [].concat(...args)
}

function concat(...args) {
    return args.reduce((acc, curr) => acc.concat(curr), [])
}

console.log(concat([1, 2, 3], [4, 5], [6, 7])) // ➞ [1, 2, 3, 4, 5, 6, 7]
console.log(concat([1], [2], [3], [4], [5], [6], [7])) // ➞ [1, 2, 3, 4, 5, 6, 7]
console.log(concat([1, 2], [3, 4])) // ➞ [1, 2, 3, 4]
console.log(concat([4, 4, 4, 4, 4])) // ➞ [4, 4, 4, 4, 4]



//Q => 5 Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.
// Notes
// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01

function changeEnough(arr, amountDue) {
    let quarter = arr[0] * 0.25;
    let dime = arr[1] * 0.10;
    let nickel = arr[2] * 0.05;
    let penny = arr[3] * 0.01;

    let sum = quarter + dime + nickel + penny;
    return sum >= amountDue
}


function changeEnough(arr, amountDue) {
    const [quarter, dime, nickel, penny] = arr;
    let sum = (quarter * 0.25) + (dime * 0.10) + (nickel * 0.05) + (penny * 0.01)

    return sum >= amountDue
}


function changeEnough(arr, amountDue) {
    const conversionRates = {
        quarters: 0.25,
        dimes: 0.10,
        nickels: 0.05,
        penny: 0.01
    };

    let total = arr[0] * conversionRates.quarters +
        arr[1] * conversionRates.dimes +
        arr[2] * conversionRates.nickels +
        arr[3] * conversionRates.penny

    return total >= amountDue
}

function changeEnough(arr, amountDue) {
    const conversionRates = [0.25, 0.10, 0.05, 0.01];

    let sum = arr.reduce((total, count, index) => {
        total + count * conversionRates[index]
    },)

    return sum >= amountDue
}

// Examples
console.log(changeEnough([2, 100, 0, 0], 14.11)) // ➞ false
console.log(changeEnough([0, 0, 20, 5], 0.75)) // ➞ true
console.log(changeEnough([30, 40, 20, 5], 12.55)) // ➞ true
console.log(changeEnough([10, 0, 0, 50], 3.85)) // ➞ false
console.log(changeEnough([1, 0, 5, 219], 19.99)) // ➞ false


//Q => 6 Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

function arrayOfMultiples(num, length) {
    let res = [];
    for (let i = 1; i <= length; i++) {
        res.push(num * i)
    }
    return res
}
function arrayOfMultiples(num, length) {
    let res = [];
    let i = 1;
    while (i <= length) {
        res.push(num * i)
        i++
    }
    return res
}

function arrayOfMultiples(num, length, res = []) {
    if (length === 0) return res;
    res.push(num * res.length + num);
    return arrayOfMultiples(num, length - 1, res);
}


// Examples
console.log(arrayOfMultiples(7, 5)) // ➞ [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)) // ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)) // ➞ [17, 34, 51, 68, 85, 102]


//Q => 7 Write a function that converts an object into an array of keys and values.

function objectToArray(obj) {
    let res = Object.entries(obj);
    return res
}

function objectToArray(obj) {
    let res = [];
    for (let key in obj) {
        res.push([key, obj[key]])
    }
    return res
}

function objectToArray(obj) {
    let res = Object.keys(obj).map((key => [key, obj[key]]))
    return res
}

// Examples
console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3
})) // ➞ [["D", 1], ["B", 2], ["C", 3]]

console.log(objectToArray({
    likes: 2,
    dislikes: 3,
    followers: 10
})) // ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]


//Q => 8 In this challenge you will be given an array similar to the following:

// [[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

// [1, [2], [3], 4, [5], 6]
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

function logsortIt(arr) {
    let res = arr.sort();
    return res
}

// function logsortIt(arr) {
//     return arr.sort((a, b) => {
//         let valueA = Array.isArray(a) ? a[0] : a;
//         let valueB = Array.isArray(b) ? b[0] : b;
//         return valueA - valueB;
//     });
// }


// Examples
console.log(logsortIt([4, 1, 3])) // ➞ [1, 3, 4]

console.log(logsortIt([[4], [1], [3]])) // ➞ [[1], [3], [4]]

console.log(logsortIt([4, [1], 3])) // ➞ [[1], 3, 4]

console.log(logsortIt([[4], 1, [3]])) // ➞ [1, [3], [4]]

console.log(logsortIt([[3], 4, [2], [5], 1, 6])) // ➞ [1, [2], [3], 4, [5], 6]