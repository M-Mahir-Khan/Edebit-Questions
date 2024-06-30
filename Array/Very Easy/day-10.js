//107 Create a function to calculate the determinant of a 2 * 2 matrix. The determinant of the following matrix is: ad - bc:

// [[a, b], [c, d]]

function calcDeterminant(matrix) {
    let a = matrix[0][0];
    let b = matrix[0][1];
    let c = matrix[1][0];
    let d = matrix[1][1];

    let res = a * d - b * c;
    return res

}
// Examples
console.log(calcDeterminant([
    [1, 2],
    [3, 4]
])) // ➞ -2

console.log(calcDeterminant([
    [5, 3],
    [3, 1]
])) // ➞ -4

console.log(calcDeterminant([
    [1, 1],
    [1, 1]
])) // ➞ 0


//108 Write a function that returns true if there exists at least one number that is larger than or equal to n.

function existsHigher(arr, n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= n) {
            return true
        }

    }
    return false
}

function existsHigher(arr, n) {
    let res = arr.some(num => num >= n)
    return res
}

// Examples
console.log(existsHigher([5, 3, 15, 22, 4], 10)) // ➞ true
console.log(existsHigher([1, 2, 3, 4, 5], 8)) // ➞ false
console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4)) // ➞ true
console.log(existsHigher([], 5)) // ➞ false


//109 This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

function transformArray(arr, n) {
    let res = arr.map(num => num % n);
    return res
}

function transformArray(arr, n) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i] % n)
    }
    return res
}

function transformArray(arr, n) {
    return arr.reduce((acc, num) => {
        acc.push(num % n)
        return acc
    }, [])
}

// Examples
console.log(transformArray([5, 7, 8, 2, 1], 2)); // ➞ [1, 1, 0, 0, 1]
console.log(transformArray([9, 8, 16, 47], 4)); // ➞ [1, 0, 0, 3]
console.log(transformArray([17, 11, 99, 55, 23, 1], 5)); // ➞ [2, 1, 4, 0, 3, 1]
console.log(transformArray([6, 1], 7)); // ➞ [6, 1]
console.log(transformArray([3, 2, 9], 3)); // ➞ [0, 2, 0]
console.log(transformArray([48, 22, 0, 19, 33, 100], 10)); // ➞ [8, 2, 0, 9, 3, 0]


//110 Create a function that filters out an array to include numbers that only have a certain number of digits.
function filterDigitLength(arr, n) {
    let res = arr.filter(item => item.toString().length === n)
    return res
}

function filterDigitLength(arr, n) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString().length === n) {
            res.push(arr[i])
        }
    }
    return res
}

function filterDigitLength(arr, n) {
    return arr.reduce((acc, num) => {
        if (num.toString().length === n) {
            acc.push(num)
        }
        return acc
    }, [])
}
// Examples
console.log(filterDigitLength([88, 232, 4, 9721, 555], 3)) //  ➞ [232, 555]
// Include only numbers with 3 digits.

console.log(filterDigitLength([2, 7, 8, 9, 1012], 1)) //  ➞ [2, 7, 8, 9]
// Include only numbers with 1 digit.

console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1)) //  ➞ []
// No numbers with only 1 digit exist => return empty array.

console.log(filterDigitLength([5, 6, 8, 9], 1)) //  ➞ [5, 6, 8, 9]
// All numbers in the array have 1 digit only => return original array.


//111 Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format:

function evenOddPartition(arr) {
    let res = [[], []];
    for (let num of arr) {
        if (num % 2 === 0) {
            res[0].push(num)
        }
        else {
            res[1].push(num)
        }
    }
    return res
}

function evenOddPartition(arr) {
    return arr.reduce((acc, num) => {
        acc[num % 2 === 0 ? 0 : 1].push(num)
        return acc
    }, [[], []])
}

function evenOddPartition(arr) {
    const evens = arr.filter(num => num % 2 === 0);
    const odds = arr.filter(num => num % 2 !== 0);
    return [evens, odds];
}

// [[evens], [odds]]
// Examples
console.log(evenOddPartition([5, 8, 9, 2, 0])) // ➞ [[8, 2, 0], [5, 9]]
console.log(evenOddPartition([1, 0, 1, 0, 1, 0])) // ➞ [[0, 0, 0], [1, 1, 1]]
console.log(evenOddPartition([1, 3, 5, 7, 9])) // ➞ [[], [1, 3, 5, 7, 9]]
console.log(evenOddPartition([])) // ➞ [[], []]


//112 Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.

// function minusOne(arr) {
//   arr.pop()
//   return arr
// }
// Examples
let x = [1, 2, 3, 4, 5]
// minusOne(x) ➞ [1, 2, 3, 4]  // 1st time function is called.
// minusOne(x) ➞ [1, 2, 3]  // 2nd time function is called.
// minusOne(x) ➞ [1, 2]  // 3rd time function is called.
// minusOne(x) ➞ [1]  // 4th time function is called.

function minusOne(arr) {
    let newArr = arr.slice(0, -1);
    return newArr
}

// What I want instead:
console.log(minusOne(x)) // ➞ [1, 2, 3, 4]  // 1st time function is called.
console.log(minusOne(x)) // ➞ [1, 2, 3, 4]  // 2nd time function is called.
console.log(minusOne(x)) // ➞ [1, 2, 3, 4]  // 3rd time function is called.
console.log(minusOne(x)) // ➞ [1, 2, 3, 4]  // 4th time function is called.


//113 Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

function checkFactors(arr, num) {
    let res = arr.every(element => num % element === 0)
    return res
}


function checkFactors(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (num % arr[i] !== 0) {
            return false
        }
    }
    return true
}
// Examples
console.log(checkFactors([2, 3, 4], 12)) // ➞ true
// Since 2, 3, and 4 are all factors of 12.
console.log(checkFactors([1, 2, 3, 8], 12)) // ➞ false
// 8 is not a factor of 12.
console.log(checkFactors([1, 2, 50], 100)) // ➞ true
console.log(checkFactors([3, 6], 9)) // ➞ false


//114 Write a function that maps files to their extension names.

function getExtension(arr) {
    let res = arr.map(item => item.split(".").pop())
    return res
}

function getExtension(arr) {
    let extension = [];
    for (let i = 0; i < arr.length; i++) {
        extension.push(arr[i].split(".").pop())
    }
    return extension
}

// Examples
console.log(getExtension(["code.html", "code.css"])
) //➞ ["html", "css"]

console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])
) //➞ ["jpg", "pdf", "mp3"]

console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])
) //➞ ["rb", "cpp", "py", "js"]


//115 The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group. Given a sorted array of numbers, return the mean (rounded to one decimal place).

function mean(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0);
    let average = sum / arr.length;
    return parseFloat(average.toFixed(1))
}

function mean(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    return parseFloat(average.toFixed(1))
}

// Examples
console.log(mean([1, 6, 6, 7, 8, 8, 9, 10, 10]))  // ➞ 7.2
console.log(mean([1, 3, 8, 9, 9, 10]))  // ➞ 6.7
console.log(mean([2, 3, 3, 6, 6, 8, 9, 10]))  // ➞ 5.9


//116 Create a function that returns the product of all odd integers in an array.

function oddProduct(arr) {
    let odd = arr.filter(num => num % 2 !== 0);
    let product = odd.reduce((acc, curr) => acc * curr, 1)
    return product
}

function oddProduct(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            product *= arr[i]
        }
    }
    return product
}

// Examples/
console.log(oddProduct([3, 4, 1, 1, 5])) // ➞ 15
console.log(oddProduct([5, 5, 8, 2, 4, 32])) // ➞ 25
console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2])) // ➞ 1


//117 Create a function that returns the minimum number of removals to make the sum of all elements in an array even.

function minimumRemovals(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0)

    if (sum % 2 === 0) {
        return 0
    } else {
        for (let num of arr) {
            if (num % 2 !== 0) {
                return 1
            }
        }
    }
}


function minimumRemovals(arr) {
    let sum = arr.reduce((acc, curr) => acc + curr, 0)

    if (sum % 2 === 0) {
        return 0
    } else {
        let oddNUm = arr.filter(num => num % 2 !== 0)
        return oddNUm.length > 0 ? 1 : 0;
    }
}


// Examples
console.log(minimumRemovals([1, 2, 3, 4, 5])) // ➞ 1
console.log(minimumRemovals([5, 7, 9, 11])) // ➞ 0
console.log(minimumRemovals([5, 7, 9, 12])) // ➞ 1

//118 Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

function middleEarth(arr) {
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] === "Frodo" && arr[i + 1]) === "Sam" || arr[i] === "Frodo" && arr[i - 1] === "Sam") {
            return true
        }
    }
    return false
}

function middleEarth(arr) {
    let samIndex = arr.indexOf("Sam");
    let frodoIndex = arr.indexOf("Frodo");

    let res = Math.abs(samIndex - frodoIndex) === 1;
    return res
}

// Examples
console.log(middleEarth(["Frodo", "Sam", "Gandalf"])) // ➞ true
console.log(middleEarth(["Frodo", "Saruman", "Sam"])) // ➞ false
console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"])) // ➞ true


//119 Create a function that finds all even numbers from 1 to the given number.

function findEvenNums(num) {
    let evenNum = [];
    for (let i = 1; i <= num; i++) {
        if (i % 2 === 0) {
            evenNum.push(i)
        }
    }
    return evenNum;
}

// Examples
console.log(findEvenNums(8)) ///  ➞ [2, 4, 6, 8]
console.log(findEvenNums(4)) ///  ➞ [2, 4]
console.log(findEvenNums(2)) ///  ➞ [2]

//120 Write a function that retrieves the last n elements from an array.
function last(arr, n) {
    if (n > arr.length) return "invalid"
    if (n === 0) return []
    let res = [];
    for (let i = arr.length - n; i < arr.length; i++) {
        res.push(arr[i])
    }
    return res
}

function last(arr, n) {
    if (n > arr.length) return "invalid"
    if (n === 0) return []
    let res = arr.splice(-n, n)
    return res

}

function last(arr, n) {
    if (n > arr.length) return "invalid"
    if (n === 0) return []
    let res = arr.slice(-n)
    return res
}

function last(arr, n) {
    if (n > arr.length) return "invalid"
    if (n === 0) return []
    let res = arr.reverse().slice(0, n).reverse();
    return res
}
// Examples
console.log(last([1, 2, 3, 4, 5], 1)) // ➞ [5]
console.log(last([4, 3, 9, 9, 7, 6], 3)) // ➞ [9, 7, 6]
console.log(last([1, 2, 3, 4, 5], 7)) // ➞ "invalid"
console.log(last([1, 2, 3, 4, 5], 0)) // ➞ []


//121 In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

function greetPeople(arr) {
    let res = arr.map(name => `Hello ${name}`)
    return res
}

function greetings(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(`Hello ${arr[i]}`)
    }
    return res
}

// Examples
console.log(greetPeople(["Joe"])) // ➞ "Hello Joe"
console.log(greetPeople(["Angela", "Joe"])) // ➞ "Hello Angela, Hello Joe"
console.log(greetPeople(["Frank", "Angela", "Joe"])) // ➞ "Hello Frank, Hello Angela, Hello Joe"


//122 Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:

// firstAndLast(string) ➞ [first, last]

function firstAndLast(str) {
    let first = str.split("").sort().join("")
    let last = str.split("").sort().reverse().join("")
    return [first, last]
}
// Examples
console.log(firstAndLast("marmite")) // ➞ ["aeimmrt", "trmmiea"]
console.log(firstAndLast("bench")) // ➞ ["bcehn", "nhecb"]
console.log(firstAndLast("scoop")) // ➞ ["coops", "spooc"]

//123 Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.

// To illustrate:

// arr1 = [1, 3, 4, 4, 4]
// arr2 = [2, 5, 7]
// In arr1, the number 4 appears three times, which means it contains three unique elements: [1, 3, 4]. Since arr1 and arr2 both contain the same number of unique elements, this example would return true.

function same(arr1, arr2) {

}

// Examples
// console.log(same([1, 3, 4, 4, 4], [2, 5, 7])) // ➞ true
// console.log(same([9, 8, 7, 6], [4, 4, 3, 1])) // ➞ false
// console.log(same([2], [3, 3, 3, 3, 3])) // ➞ true

//124 Write a function that finds the sum of an array. Make your function recursive.



function sum(arr) {
    if (arr.length === 0) {
        return 0
    }
    return arr[0] + sum(arr.slice(1))

}

// Examples
console.log(sum([1, 2, 3, 4])) // ➞ 10
console.log(sum([1, 2])) // ➞ 3
console.log(sum([1])) // ➞ 1
console.log(sum([])) // ➞ 0

