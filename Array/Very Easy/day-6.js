//60  In the Code tab is a function which is meant to return how many uppercase letters there are in a list of various words. Fix the list comprehension so that the code functions normally!

function countUppercase(arr){
    let count = 0;
    for(let word of arr){
        for(let char of word){
            if(char >= "A" && char <= "Z"){
                count++
            } 
        }
    }
    return count
}

// Examples
console.log(countUppercase(["SOLO", "hello", "Tea", "wHat"])) //➞ 6
console.log(countUppercase(["little", "lower", "down"]) ) // ➞ 0
console.log(countUppercase(["EDAbit", "Educate", "Coding"]) )//➞ 5

//61 Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.

// To illustrate:

// 11, 15, 6, 8, 9, 10
// 11 + 15 = 26 = true
// 15 + 6 = 21 = false
// 6 + 8 = 14 = true
// 8+ 9 = 17 = false
// 9 + 10 = 19 = false
// Therefore, solution = [true, false, true, false, false]

function oddSum(arr){
    let solution = [];
    arr.reduce((acc ,curr) => solution.push((acc + curr) % 2 === 0))
    return solution
}

function oddSum(arr){
    let solution = [];
    for(let i = 0 ; i < arr.length; i++){
        solution.push((arr[i] + arr[i + 1]) % 2 === 0)
    }
    return solution
}


// Examples
console.log(oddSum([11, 15, 6, 8, 9, 10])  ) //➞ [true, false, true, false, false]
console.log(oddSum([12, 21, 5, 9, 65, 32]) ) //➞ [false, true, true, true, false]
console.log(oddSum([1, 2, 3, 4, 5, 6])     ) //➞ [false, false, false, false, false]


// 62 Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

function moveZeros(arr){
    let zeroElm = [];
    let nonZeroElm = [];
    for(let elements of arr){
        if(elements === 0){
            zeroElm.push(elements)
        }else{
            nonZeroElm.push(elements)
        }
    }
    let result = nonZeroElm.concat(zeroElm);
    return result;
}

// Examples
console.log(moveZeros([1, 0, 1, 2, 0, 1, 3])) // ➞ [1, 1, 2, 1, 3, 0, 0]
console.log(moveZeros([0, 1, null, 2, false, 1, 0])) // ➞ [1, null, 2, false, 1, 0, 0]
console.log(moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])) // ➞ ['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


// 63 Given a 2D-list of letters arr and a list of indexes idx, find the letters on given indexes and return as a string.

let arr = [
  ["m", "u", "b"],
  ["a", "s", "h"],
  ["i", "r", "1"]
]

let idx = [1, 3, 5, 8]
// You have to find the characters in these indexes of the given list if you think of the indexes as:

// [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

function arrIndex(arr,idx){
    let flatArr = arr.flat();
    let res = idx.map(index => flatArr[index -1]).join("")
    return res
}

function arrIndex(arr,idx){
    let flatArr = arr.flat();
    let res = "";
    for(let i =0 ; i < idx.length; i++){
        res += flatArr[idx[i] -1]
    }
   return res
}
console.log(arrIndex(arr, idx)) // ➞ "mbsr"


// 64 Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

function countCharacters(arr){
    let count = 0;
    for(let word of arr){
        for(let char of word){
            count++
        }
    }
    return count;
}

function countCharacters(arr){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length ; j++){
            count++
        }
    }
    return count
}

function countCharacters(arr){
    let count = 0;
    arr.forEach(word =>{
        word.split('').forEach(char => count++)
    })
    return count 
}

// Examples
console.log(countCharacters([
  "###",
  "###",
  "###"
]) ) //➞ 9

console.log(countCharacters([
  "22222222",
  "22222222",
])) // ➞ 16

console.log(countCharacters([
  "------------------"
])) // ➞ 18

console.log(countCharacters([]) ) //➞ 0

console.log(countCharacters(["", ""])) // ➞ 0

//65 Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

// Example:

// [2, 4, 9]  ➞ 23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23

function arraySum(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] % 2 === 0 ){
            sum += Math.pow(arr[i],2)
        }else{
            sum += Math.sqrt(arr[i])
        }
    }
    return parseFloat(sum.toFixed(2))
}

// Examples
console.log(arraySum([1, 3, 3, 1, 10]) ) //➞ 105.46
console.log(arraySum([2, 3, 4, 5])) // ➞ 23.97
console.log(arraySum([1, 31, 3, 11, 0])) // ➞ 11.62

// 66 Create a function that returns the original value from a matrix with too many sub-arrays.
function deNest(arr){
    let flatArr = arr.flat();
    return flatArr.join()
}

// Examples
console.log(deNest([[[[[[[[[[[[3]]]]]]]]]]]])) // ➞ 3
console.log(deNest([[[[[[[true]]]]]]]) ) //➞ true
console.log(deNest([[[[[[[[[[[[[[[[["edabit"]]]]]]]]]]]]]]]]])) // ➞ "edabit"

// 67 Given an array of integers arr, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.

function evenLast(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        if(i % 2 === 0){
            sum += (arr[i] * arr[arr.length -1])
        }
    }
    return sum
}

function evenLast(arr){
     let res = arr.reduce((sum,value,index)=>{
        if(index % 2 === 0){
            return sum + (value * arr[arr.length -1 ])
        }
        return sum
    },0)
     return res
}

// Examples
console.log(evenLast([2, 3, 4, 5])) //  ➞ 30
// numbers at even index = 2, 4
// number at last index = 5
// 2*5 + 4*5 = 10 + 20 = 30

console.log(evenLast([1, 3, 3, 1, 10]) ) // ➞ 140
console.log(evenLast([]) ) // ➞ 0


//68 Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

// A = 1
// B = 2
// C = 3
// D = 4
// E = 5
// average = total sum of all numbers / number of item in the set
// Return the result rounded to two decimal points.

function averageIndex(arr){
    let sum = 0;
    for(let char of arr){
        sum += char.toLowerCase().charCodeAt(0) - 97 + 1;
    }
    return parseFloat(sum / arr.length).toFixed(2)
}

function average(arr){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let sum = arr.reduce((acc,letter)=>{
        return acc + (alphabet.indexOf(letter) + 1)
    })
    return sum
}
// Examples
console.log(averageIndex(["a", "b", "c", "i"]) ) //➞ 3.75
console.log(averageIndex(["e", "d", "a", "b", "i", "t"]) ) //➞ 6.83
console.log(averageIndex(["y", "o", "u", "a", "r", "e", "t", "h", "e", "b", "e", "s", "t"]) ) //➞ 12.62

// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

function cmsSelector(arr,str){
    let res = []
    for(let word of arr){
        if(str === "" || word.toLowerCase().includes(str.toLowerCase())){
            res.push(word)
        }
    }
    return res.sort();
}

function cmsSelector(arr,str){
    let res = arr.filter(word => str === "" || word.toLowerCase().includes(str.toLowerCase())).sort();
    return res
}

// Examples
console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "w")) // ➞ ["WordPress"]
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru") ) //➞ ["Drupal"]
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "") ) //➞ ["Drupal", "Joomla", "Magento", "WordPress"]


// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

// Number	Month Name
// 1	January
// 2	February
// 3	March
// 4	April
// 5	May
// 6	June
// 7	July
// 8	August
// 9	September
// 10	October
// 11	November
// 12	December

let months = {
  1: "January",
  2: "February",
  3: "March",
  4: "April",
  5: "May",
  6: "June",
  7: "July",
  8: "August",
  9: "September",
  10: "October",
  11: "November",
  12: "December",
};

function monthName(num){
    let res = months[num]
    return res
}

function monthName(num){
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    let res = months[num - 1]
    return res
}

// Examples
console.log(monthName(3) ) //➞ "March"
console.log(monthName(12)) // ➞ "December"
console.log(monthName(6) ) //➞ "June"

// Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:

// He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
// Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
// Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.

function rogerShots(arr){
    let count = 0;
    arr.map(item => {
        if(item === "Bang!" || item === "BangBang!"){
            count += 0.5
        }
    })
    return count
}

function rogerShots(arr){
    let count = 0;
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] === "Bang!" || arr[i] === "BangBang!"){
            count += 0.5
        }
    }
    return count
}

// Examples
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"]) ) //➞ 3
console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"]) ) //➞ 2.5
console.log(rogerShots(["Bang!", "BangBangBang!", "Boom!", "Bang!", "BangBang!", "BangBang!"])) // ➞ 2

// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

function stringPairs(str){
    let pairs = [];
    for(let i = 0; i < str.length; i+= 2){
        let pair = str[i] + (str[i + 1] !== undefined ? str[i + 1] : '*');
        pairs.push(pair)
    }
    return pairs
}
// Examples
console.log(stringPairs("mubashir") ) // ➞ ["mu", "ba", "sh", "ir"]
console.log(stringPairs("edabit") ) // ➞ ["ed", "ab", "it"]
console.log(stringPairs("airforces") ) // ➞ ["ai", "rf", "or", "ce", "s*"]) // 