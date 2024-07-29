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
        if (arr[i] % 2 === 0){
            even += arr[i]
        }else {
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