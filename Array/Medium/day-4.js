//Q => 31 Given a square matrix (i.e. same number of rows as columns), its trace is the sum of the entries in the main diagonal (i.e. the diagonal line from the top left to the bottom right).

// As an example, for:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]
// ... the trace is 1 + 5 + 9 = 15.

// Write a function that takes a square matrix and computes its trace.

function trace(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][i]
    }
    return sum
}

function trace(arr) {
    let res = arr.reduce((acc, curr, index) => acc + curr[index], 0)
    return res
}

// Examples
console.log(trace([
    [1, 4],
    [4, 1]
])) // ➞ 2

// 1 + 1 = 2

console.log(trace([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
])) // ➞ 15

// 1 + 5 + 9 = 15

console.log(trace([
    [1, 0, 1, 0],
    [0, 2, 0, 2],
    [3, 0, 3, 0],
    [0, 4, 0, 4]
])) // ➞ 10

// 1 + 2 + 3 + 4 = 10


//Q => 32 Given an array of numbers, write a function that returns an array that...

// Has all duplicate elements removed.
// Is sorted from least to greatest value.

function uniqueSort(arr) {
    let res = [...new Set(arr)].sort()
    return res
}

function uniqueSort(arr) {
    let unique = arr.reduce((acc, val) => {
        if (!acc.includes(val)) {
            acc.push(val)
        }
        return acc
    }, [])
    return unique.sort()
}

// Examples
console.log(uniqueSort([1, 2, 4, 3])) // ➞ [1, 2, 3, 4]
console.log(uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2])) // ➞ [1, 2, 3, 4]
console.log(uniqueSort([6, 7, 3, 2, 1])) // ➞ [1, 2, 3, 6, 7]

// Q => 33 ES6: Destructuring Arrays V
// ES6 Destructuring can come in handy when you use regular expressions. Here is a function that uses a regular expression to parse a URL.

// const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url);
function parseURL(url) {
    // Parse the URL using a regular expression
    const parsedURL = /^(\w+):\/\/([^\/]+)\/(.*)$/.exec(url);

    // Destructure the result to extract protocol, host, and path
    const [urlPath, protocol, host, path] = parsedURL;

    // Return the extracted values
    return [urlPath, protocol, host, path];
}
console.log(parseURL("https://developer.mozilla.org/en-US/Web/JavaScript"));
// returns ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

// the protocol = https
// the host = developer.mozilla.org
// the path = en-US/Web/JavaScript
// From the parsedURL result you could assign these segments using ES6 array destructuring.

// Challenge
// Assign the variables protocol, host, path inside the brackets of the given string.
// Pay close attention to what is being returned from parsedURL, as you will need to skip over any values that are not protocol, host, or path.


//Q => 34   Create a function that takes a number as its parameter and returns another function. The returned function must take an array of numbers as its parameter, and return an array of the numbers divided by the number that was passed into the first function.

function factory(num) {
    return function (arr) {
        return arr.map(item => item / num)
    }
}

// Examples
const first = factory(15)
// returns a function first.

const arr = [30, 45, 60]
// 30 / 15 = 2, 45 / 15 = 3, 60 / 15 = 4

console.log(first(arr)) // ➞ [2, 3, 4]
const second = factory(2)
// returns a function second.

const arr2 = [2, 4, 6]
// 2 / 2 = 1, 4 / 2 = 2, 6 / 2 = 3

console.log(second(arr)) // ➞ [1, 2, 3]


//Q => 35 Create a function that returns true if all parameters are truthy, and false otherwise.

function allTruthy(...args) {
    return args.every(item => item == true)
}

function allTruthy(...args) {
    for (let i = 0; i < args.length; i++) {
        if (!args[i]) {
            return false
        }
    }
    return true
}

// Examples
console.log(allTruthy(true, true, true)) // ➞ true
console.log(allTruthy(true, false, true)) // ➞ false
console.log(allTruthy(5, 4, 3, 2, 1, 0)) // ➞ false
// Notes
// Falsy values include false, 0, "" (empty string), null, undefined, and NaN; everything else is truthy.
// You will always be supplied with at least one parameter.


//Q => 36 Create a function that takes a number and returns an array with the digits of the number in reverse order.

function reverseArr(num) {
    let numbers = String(num).split("").reverse()
    return numbers.map(item => +item)
}

function reverseArr(num) {
    let res = [];
    let numbers = String(num).split("")
    for (let i = numbers.length - 1; i >= 0; i--) {
        res.push(+numbers[i])
    }
    return res
}

// Examples
console.log(reverseArr(1485979)) // ➞ [9, 7, 9, 5, 8, 4, 1]
console.log(reverseArr(623478)) // ➞ [8, 7, 4, 3, 2, 6]
console.log(reverseArr(12345)) // ➞ [5, 4, 3, 2, 1]


//Q => 37 Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// Notes
// In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.

function hackerSpeak(str) {
    return str.replace(/[aeios]/gi, function (match) {
        switch (match.toLowerCase()) {
            case 'a':
                return '4';
            case 'e':
                return '3';
            case 'i':
                return '1';
            case 'o':
                return '0';
            case 's':
                return '5';
            default:
                return match;
        }
    })
}

function hackerSpeak(str) {
    const replacements = {
        'a': '4',
        'e': '3',
        'i': '1',
        'o': '0',
        's': '5'
    };

    return str.split("").map(char => replacements[char.toLowerCase()] || char).join("")
}

// Examples
console.log(hackerSpeak("javascript is cool")) // ➞ "j4v45cr1pt 15 c00l"
console.log(hackerSpeak("programming is fun")) // ➞ "pr0gr4mm1ng 15 fun"
console.log(hackerSpeak("become a coder")) // ➞ "b3c0m3 4 c0d3r"


//Q => 38 Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

function capMe(arr) {
    let res = arr.map(item => item[0].toUpperCase() + item.slice(1, item.length).toLowerCase())
    return res

}

function capMe(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i]
        let firstLetter = arr[i][0]
        res.push(firstLetter.toUpperCase() + name.slice(1).toLowerCase())
    }
    return res
}

// Examples
console.log(capMe(["mavis", "senaida", "letty"])) // ➞ ["Mavis", "Senaida", "Letty"]
console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"])) // ➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]
console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"])) // ➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]


//Q => 39 Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

function sumTwoSmallestNums(arr) {
    let positive = arr.filter(num => num >= 0).sort((a, b) => a - b);
    return positive[0] + positive[1]


}

// Examples
console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])) // ➞ 7
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])) // ➞ 3453455
console.log(sumTwoSmallestNums([2, 9, 6, -1])) // ➞ 8
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])) // ➞ 563
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])) // ➞ 4519


//Q => 40 There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

function warOfNumbers(arr) {
    let even = arr.filter(item => item % 2 === 0)
    let odd = arr.filter(item => item % 2 !== 0)

    let sumOfEven = even.reduce((acc, curr) => acc + curr)
    let sumOfOdd = odd.reduce((acc, curr) => acc + curr)

    return sumOfEven >= sumOfOdd ? sumOfEven - sumOfOdd : odd - even;

}


function warOfNumbers(arr) {
    let filter = arr.reduce((acc, curr) => {
        if (curr % 2 === 0) {
            acc[0] += curr
        } else {
            acc[1] += curr
        }
        return acc
    }, [0, 0])

    let [even, odd] = filter
    return even >= odd ? even - odd : odd - even;
}

function warOfNumbers(arr) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even += arr[i]
        } else {
            odd += arr[i]
        }
    }
    return even >= odd ? even - odd : odd - even;
}

// Examples
console.log(warOfNumbers([2, 8, 7, 5])) // ➞ 2
// 2 + 8 = 10
// 7 + 5 = 12
// 12 is larger than 10
// So we return 12 - 10 = 2

console.log(warOfNumbers([12, 90, 75])) // ➞ 27
console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243])) // ➞ 168



//Q => 41 Return the total number of arrays inside a given array.

function numOfSubbarrays(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count++
    }
    return count
}

function numOfSubbarrays(arr) {
    return arr.length
}
// Examples
console.log(numOfSubbarrays([[1, 2, 3]])) // ➞ 1
console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]])) // ➞ 3
console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]])) // ➞ 4
console.log(numOfSubbarrays([1, 2, 3])) // ➞ 0


//Q => 42 Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

function findNaN(arr) {
    let res = arr.findIndex(Number.isNaN)
    return res

}

function findNaN(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (Number.isNaN(arr[i])) {
            return i
        }
    }
    return -1
}

// Examples
console.log(findNaN([1, 2, NaN])) // ➞ 2
console.log(findNaN([NaN, 1, 2, 3, 4])) // ➞ 0
console.log(findNaN([0, 1, 2, 3, 4])) // ➞ -1


//Q => 43 Given an array of women and an array of men, either:

// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.

function zipIt(women, men) {
    if (women.length !== men.length) {
        return "sizes don't match"
    }

    let res = women.map((item, index) => [item, men[index]])
    return res

}

function zipIt(women, men) {
    if (women.length !== men.length) {
        return "sizes don't match"
    }

    let res = [];
    for (let i = 0; i < women.length; i++) {
        res.push([women[i], men[i]])
    }
    return res

}

// Examples
console.log(zipIt(["Elise", "Mary"], ["John", "Rick"])
) // ➞ [["Elise", "John"], ["Mary", "Rick"]]

console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"])
) // ➞ "sizes don't match"

console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"])
) // ➞ [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]


//Q => 44   Create a function that performs an even-odd transform to an array, n times. Each even-odd transformation:

// Adds two (+2) to each odd integer.
// Subtracts two (-2) from each even integer.

function evenOddTransform(arr, n) {
    for (let i = 0; i < n; i++) {
        arr = arr.map(item => item % 2 === 0 ? item - 2 : item + 2)
    }
    return arr
}

function evenOddTransform(arr, n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] % 2 === 0) {
                arr[j] -= 2
            } else {
                arr[j] += 2
            }
        }
    }
    return arr
}

function evenOddTransform(arr, n) {
    let res = arr.map(num => num % 2 === 0 ? num - 2 * n : num + 2 * n)
    return res
}

// Examples
console.log(evenOddTransform([3, 4, 9], 3)) // ➞[9, -2, 15]
// Since [3, 4, 9] => [5, 2, 11] => [7, 0, 13] => [9, -2, 15]

console.log(evenOddTransform([0, 0, 0], 10)) // ➞[-20, -20, -20]

console.log(evenOddTransform([1, 2, 3], 1)) // ➞[3, 0, 5]


//Q => 45 Create a function that takes an array of parallel resistance values, and calculates the total resistance of the circuit.
// Notes
// Note that you should rearrange to return the Resistance Total, not 1 / Resistance Total.
// Round to the nearest decimal place.
// All inputs will be valid.

function parallelResistance(arr) {
    let resiprocalSum = arr.reduce((sum, curr) => sum + (1 / curr), 0)

    const totalResistance = 1 / resiprocalSum

    return Math.round(totalResistance * 10) / 10
}

// Worked Example
console.log(parallelResistance([6, 3, 6])) // ➞ 1.5

// 1/RTotal = 1/6 + 1/3 + 1/6
// 1/RTotal = 2/3
// RTotal = 3/2 = 1.5
// Examples
console.log(parallelResistance([6, 3])) // ➞ 2

console.log(parallelResistance([10, 20, 10])) // ➞ 4

console.log(parallelResistance([500, 500, 500])) // ➞ 166.6
// Round to the nearest decimal place


//Q => 46 Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

function mapping(arr) {
    let obj = {}
    arr.forEach(item => {
        obj[item] = item.toUpperCase();
    })
    return obj
}

function mapping(arr) {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = arr[i].toUpperCase()
    }
    return obj
}

function mapping(arr) {
    return arr.reduce((acc, curr) => {
        acc[curr] = curr.toUpperCase()
        return acc
    }, {})
}

function mapping(arr){
    return Object.fromEntries(arr.map(item => [item, item.toUpperCase()]))
}

// Examples
console.log(mapping(["p", "s"])) // ➞ { "p": "P", "s": "S" }
console.log(mapping(["a", "b", "c"])) // ➞ { "a": "A", "b": "B", "c": "C" }
console.log(mapping(["a", "v", "y", "z"])) // ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z"