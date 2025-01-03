//82 Create a function that returns true if two arrays sharing the same length have identical numerical values at every index, and false otherwise.

// To solve this question, your friend initially wrote the following code (see this challenge):

// function checkEquals(arr1, arr2) {
//   if (arr1 === arr2) {
//     return true
//    } else {
//     return false
//    }
// }
// If you're unsure why the above code doesn't work, I recommend doing that challenge first.

// Your friend did some more research and he fixed the code into the following:

// function checkEquals(arr1, arr2) {
//   if (arr1.join("") === arr2.join("")) {
//     return true
//    } else {
//     return false
//    }
// }
// It works in most cases, but on some cases it fails. This confuses him, can you spot the error and fix it?

function checkEquals(arr1,arr2){
    if (arr1.length !== arr2.length) {
        return false;
    }

    for(let i = 0 ; i <arr1.length; i++){
       if(arr1[i] !== arr2[i]){
        return false
       }
    }
    return true
};

function checkEquals(arr1, arr2){
    if (arr1.length !== arr2.length) {
        return false;
    }

    let res = arr1.every((value, index)=> value === arr2[index])
    return res
}

// Examples
console.log(checkEquals([1, 2], [1, 3])) // ➞ false
console.log(checkEquals([1, 2], [1, 2])) // ➞ true
console.log(checkEquals([4, 5, 6], [4, 5, 6]) ) //➞ true
console.log(checkEquals([4, 7, 6], [4, 5, 6]) ) //➞ false
console.log(checkEquals([1, 12], [11, 2])) // ➞ false


// 83 Create a function that adds a string ending to each member in an array.

function addEnding(arr,ending){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        res.push(arr[i] + ending)
    }
    return res
}

function addEnding(arr,ending){
    let res = arr.map(item => item + ending);
    return res
}

// Examples
console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly")
) //➞ ["cleverly", "meekly", "hurriedly", "nicely"]

console.log(addEnding(["new", "pander", "scoop"], "er")
) //➞ ["newer", "panderer", "scooper"]

console.log(addEnding(["bend", "sharpen", "mean"], "ing")
) //➞ ["bending", "sharpening", "meaning"]


// 84 Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).

function getSequence(start , end ){
    let res = [];
    for(let i = start; i <= end; i++){
        res.push(i)
    }
    return res
}

function getSequence(start , end){
    let res = [];
    let current = start;
    while(current <= end){
        res.push(current);
        current++
    }
    return res
}

// Examples
console.log(getSequence(1, 5) ) //➞ [1, 2, 3, 4, 5]
console.log(getSequence(98, 100) ) //➞ [98, 99, 100]
console.log(getSequence(1000, 1000) ) //➞ [1000]

//85 Given an array of numbers, negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

function negate(arr){
    let res = arr.map(item => (-item))
    return res
}

function negate(arr){
    let res = [];
    for(let num of arr){
        res.push(-num)
    }
    return res
}
// Examples
console.log(negate([1, 2, 3, 4])) // ➞ [-1, -2, -3, -4]
console.log(negate([-1, 2, -3, 4])) // ➞ [1, -2, 3, -4]
console.log(negate([]) ) //➞ []) //

// 86 Create a function that takes an array of strings and returns the words that are exactly four letters.

function isFourLetters(arr){
    let res = arr.filter(item => item.length === 4)
    return res
}

function isFourLetters(arr){
    let res = [];
    for(let item of arr){
        if(item.length === 4){
            res.push(item)
        }
    }
    return res
}

// Examples
console.log(isFourLetters(["Tomato", "Potato", "Pair"])) // ➞ ["Pair"]
console.log(isFourLetters(["Kangaroo", "Bear", "Fox"])) // ➞ ["Bear"]
console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]) ) //➞ ["Ryan", "Matt"]

// 87 Given an array of integers, return the difference between the largest and smallest integers in the array.

function difference(arr){
    let max = arr[0];
    let min = arr[0];

    for(let i = 0 ; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
        if(min > arr[i]){
            min = arr[i]
        }
    }

    let res = max - min;
    return res
}

// Examples
console.log(difference([10, 15, 20, 2, 10, 6]) ) //➞ 18
// 20 - 2 = 18
console.log(difference([-3, 4, -9, -1, -2, 15])) // ➞ 24
// 15 - (-9) = 24
console.log(difference([4, 17, 12, 2, 10, 2])) // ➞ 15


//88 Create a function that takes an array of numbers and returns only the even values.

function noOdds(arr){
    let res = arr.filter(item => item % 2 === 0)
    return res
}

function noOdds(arr){
    let res = [];
    for(let num of arr){
        if(num % 2 === 0){
            res.push(num)
        }
    }
    return res
}

function noOdds(arr){
    let res = [];
    arr.forEach(item => {
        if(item % 2 === 0){
            res.push(item)
        }
    })
    return  res
}

// Examples
console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8])) //➞ [2, 4, 6, 8]
console.log(noOdds([43, 65, 23, 89, 53, 9, 6])) //➞ [6]
console.log(noOdds([718, 991, 449, 644, 380, 440])) //➞ [718, 644, 380, 440]


//89 Create a function to multiply all of the values in an array by the amount of values in the given array.
function multiplyByLength(arr){
    let res = arr.map((item , index)=> item * arr.length)
    return res
}

function multiplyByLength(arr){
    let res = [];
    for(let i = 0 ; i < arr.length; i++){
        res.push(arr[i] * arr.length)
    }
    return res
}

// Examples
console.log(multiplyByLength([2, 3, 1, 0]) ) //➞ [8, 12, 4, 0]
console.log(multiplyByLength([4, 1, 1]) ) //➞ ([12, 3, 3])
console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1]) ) //➞  [7, 0, 21, 21, 49, 14, 7]
console.log(multiplyByLength([0]) ) //➞ ([0])


//90 Create a function to remove all null values from an array.

function removeNull(arr){
    let res = arr.filter(item => item !== null)
    return res
}

function removeNull(arr){
    let res = [];
    for(let item of arr){
        if(item !== null){
            res.push(item)
        }
    }
    return res
}

function removeNull(arr){
    let res = [];
    arr.forEach(item => {
        if(item !== null){
            res.push(item)
        }
    })
    return res
}

// Examples
console.log(removeNull(["a", null, "b", null]) ) //➞ ["a", "b"]
console.log(removeNull([null, null, null, null, null]) ) //➞ []
console.log(removeNull([7, 8, null, 9]) ) //➞ [7, 8, 9]


//91 Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.

// A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

function hurdleJump(hurdles ,jumpHeight){
    let res = hurdles.every(val => val <= jumpHeight)
    return res
}

function hurdleJump(hurdle,jumpHeight){
    for(let i = 0 ; i < hurdle.length; i++){
        if(hurdle[i] > jumpHeight){
            return false
        }
    }
    return true
}

// Examples
console.log(hurdleJump([1, 2, 3, 4, 5], 5) ) // ➞ true
console.log(hurdleJump([5, 5, 3, 4, 5], 3) ) // ➞ false
console.log(hurdleJump([5, 4, 5, 6], 10) ) // ➞ true
console.log(hurdleJump([1, 2, 1], 1) ) // ➞ false


//92 Create a function that takes an array of numbers and returns the smallest number in the set.

function findSmallestNum(arr){
    let smallest = Math.min(...arr);
    return smallest;
}

function findSmallestNum(arr){
    let smallest = arr[0];
    for(let i = 0 ; i < arr.length; i++){
        if(smallest > arr[i]){
            smallest = arr[i]
        }
    }
    return smallest
}

// Examples
console.log(findSmallestNum([34, 15, 88, 2])) // ➞ 2
console.log(findSmallestNum([34, -345, -1, 100])) // ➞ -345
console.log(findSmallestNum([-76, 1.345, 1, 0])) // ➞ -76
console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999])) // ➞ -0.9999
console.log(findSmallestNum([7, 7, 7])) // ➞ 7


//93 Create a function that takes an array of values and returns the first and last values in a new array.

function firstLast(arr){
    let res = [arr[0], arr[arr.length -1]]
    return res

}

// Examples
console.log(firstLast([5, 10, 15, 20, 25])) // ➞ [5, 25]
console.log(firstLast(["edabit", 13, null, false, true])) // ➞ ["edabit", true]
console.log(firstLast([undefined, 4, "6", "hello", null])) // ➞ [undefined, null]

//94 Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.

function getFillings(arr){
    let res = [];
    for(let i = 0 ; i < arr.length; i++){
        if( i !== 0 && i !== arr.length -1){
            res.push(arr[i])
        }
    }
    return res
}

function getFillings(arr){
    let res = arr.filter((_,index)=> index !== 0 && index !== arr.length -1)
    return res
}

// Examples
console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"])) // ➞ ["ham", "cheese", "ham"]
console.log(getFillings(["bread", "sausage", "tomato", "bread"])) // ➞ ["sausage", "tomato"]
console.log(getFillings(["bread", "lettuce", "bacon", "tomato", "bread"])) // ➞ ["lettuce", "bacon", "tomato"]

//95 Create a function that takes an array and returns the difference between the biggest and smallest numbers.

function diffMaxMin(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    
    let res = max - min;
    return res
}

function diffMaxMin(arr){
    let max = arr[0];
    let min = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(max < arr[i]){
            max = arr[i]
        }
        if(min > arr[i]){
            min = arr[i]
        }
    }

    return max - min;
}

// Examples
console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]) ) //➞ 82
// Smallest number is -50, biggest is 32.

console.log(diffMaxMin([44, 32, 86, 19]) ) //➞ 67
// Smallest number is 19, biggest is 86.


//96  Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

function countdown(num){
    let res = [];
    for(let i = num; i >= 0 ; i--){
        res.push(i)
    }
    return res
}

function countdown(num){
    let res = [];
    let i = num;
    while(i >= 0){
        res.push(i);
        i--
    }
    return res
}

//97 Examples
console.log(countdown(5)) // ➞ [5, 4, 3, 2, 1, 0]
console.log(countdown(1)) // ➞ [1, 0]
console.log(countdown(0)) // ➞ [0]

//97 Create a function that takes in an array and returns true if all its values are even, and false otherwise.

// Not a big deal, your friend says. He writes the following code:

// function checkAllEven(arr) {
//   return arr.every(x % 2 === 0)
// }
// The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:

function checkAllEven(arr){
    let res = arr.every(x => x % 2 === 0)
    return res
}


function checkAllEven(arr){
    for(let i = 0 ; i< arr.length; i++){
        if(arr[i] % 2 !== 0 ){
            return false
        }
    }
    return true
}

// Examples
console.log(checkAllEven([1, 2, 3, 4])) // ➞ false
console.log(checkAllEven([2, 4, 6])) // ➞ true
console.log(checkAllEven([5, 6, 8, 10])) // ➞ false
console.log(checkAllEven([-2, 2, -2, 2])) // ➞ true


//98 Create a function that converts two arrays of x- and y- coordinates into an array of (x, y) coordinates.

function convertCartesian(arr1,arr2){
    let res = arr1.map((item, i )=> [item, arr2[i]])
    return res
}

function convertCartesian(arr1,arr2){
    let res = [];
    for(let i = 0 ; i < arr1.length; i++){
        res.push([arr1[i], arr2[i]])
    }
    return res
}

// Examples
console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0])
) //➞ [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]

console.log(convertCartesian([9, 8, 3], [1, 1, 1])
) //➞ [[9, 1], [8, 1], [3, 1]]


// 99 A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

function additiveInverse(arr){
    let res = arr.map(num => (-num))
    return res
}

function additiveInverse(arr){
    let res = [];
    for(let num of arr){
        res.push(-num)
    }
    return res
}

function additiveInverse(arr){
    let res = [];
    arr.forEach(num => {
        res.push(-num)
    })
    return res
}

// Examples
console.log(additiveInverse([5, -7, 8, 3])) // ➞ [-5, 7, -8, -3]
console.log(additiveInverse([1, 1, 1, 1, 1])) // ➞ [-1, -1, -1, -1, -1]
console.log(additiveInverse([-5, -25, 35])) // ➞ [5, 25, -35]

//100 Given an unsorted array, create a function that returns the nth smallest integer (the smallest integer is the first smallest, the second smallest integer is the second smallest, etc).

function nthSmallest(arr,n){
    if(n > arr.length){
        return null
    }

    arr.sort((a,b)=> a - b)

    let res = arr[n - 1]
    return res
}

// Examples
console.log(nthSmallest([1, 3, 5, 7], 1)) // ➞ 1
console.log(nthSmallest([1, 3, 5, 7], 3)) // ➞ 5
console.log(nthSmallest([1, 3, 5, 7], 5)) // ➞ null
console.log(nthSmallest([7, 3, 5, 1], 2)) // ➞ 3