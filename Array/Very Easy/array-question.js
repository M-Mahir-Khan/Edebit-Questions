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
// console.log(parseArray([1, 2, "a", "b"])) //➞ ["1", "2", "a", "b"]
// console.log(parseArray(["abc", 123, "def", 456])) //➞ ["abc", "123", "def", "456"]
// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]))// ➞ ["1", "2", "3", "17", "24", "3", "a", "123b"]
// console.log(parseArray([])) //➞ []


//Q=> 21 Create a function that takes an array and returns the types of values (data types) in a new array.

function arrayValuesTypes(arr){
    return arr.map((item)=> typeof item)
}

// // Examples
// console.log(arrayValuesTypes([1, 2, "null", []]))
// // ➞ ["number", "number", "string", "object"]
// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]))
// // ➞ ["string", "boolean", "boolean", "number", "number", "object", "object"]
// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]))
// // ➞ ["number", "string", "string", "object", "object", "boolean", "number"]


//Q => 22 There is an easy way to assign to array values to the nth index by using rest parameter syntax.

// var [head, tail] = [1, 2, 3, 4]

// console.log(head) // outputs  1
// console.log(tail) // outputs 2
// But how could I make tail = [2, 3, 4] instead of tail = 2?

// solution
var [head,...tail] = [1,2,3,4];
// console.log(head);
// console.log(tail);


//Q => 23 Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

function toNumberArray(arr){
    return arr.map((item)=> Number(item));
}
// Example:
// console.log(toNumberArray(["9.4", "4.2"])) //➞ [9.4, 4.2]
// console.log(toNumberArray(["91", "44"])) //➞ [91, 44]
// console.log(toNumberArray(["9.5", "8.8"])) //➞ [9.5, 8.8]


//Q => 24 Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.

function checkSquareAndCube(arr){
    return Math.sqrt(arr[0]) === Math.pow(arr[1], 1/3)
}

// Examples
// console.log(checkSquareAndCube([4, 8]))//➞ true
// console.log(checkSquareAndCube([16, 48])) //➞ false
// console.log(checkSquareAndCube([9, 27])) //➞ true


//Q => 25 You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

function totalAmountAdjectives(obj){
    return Object.keys(obj).length;
}
// Examples
// console.log(totalAmountAdjectives({ a: "moron" }))// ➞ 1
// console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })) //➞ 3
// console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })) //➞ 4

//Q=> 26 You can assign variables from arrays with destructuring like this:

const arr1 = ["eyes", "nose", "lips", "ears"];
// let [eyes, nose, lips, ears] = arr1
// But you can also skip over items in the array being destructured.

let [eyes, nose, , ears] = arr1;


//Q=> 27 Create a function which returns the length of a string, WITHOUT using String.length property.

function length(str){
    let count = 0;
    for(let length of str){
        count++
    }
    return count
}


// Examples
// console.log(length("Hello World")) //➞ 11
// console.log(length("Edabit")) //➞ 6
// console.log(length("wash your hands!")) //➞ 16

//Q=>28 Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

function halfQuarterEighth(num){
    return [num / 2, num / 4, num / 8]
}

// Examples
// console.log(halfQuarterEighth(6))//➞ [3, 1.5, 0.75]
// console.log(halfQuarterEighth(22)) //➞ [11, 5.5, 2.75]
// console.log(halfQuarterEighth(25)) //➞ [12.5, 6.25, 3.125]

//Q => 29 Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"

function nSidedShape(n){
    let shapes = ["circle","semi-circle","triangle","square","pentagon","hexagon","heptagon","heptagon","octagon","nonagon","decagon"];
    return shapes[n - 1]
}
// Examples
// console.log(nSidedShape(3)) // ➞ "triangle"
// console.log(nSidedShape(1)) // ➞ "circle"
// console.log(nSidedShape(9)) // ➞ "nonagon"

//Q => 30 Create a function that takes an array with numbers and return an array with the elements multiplied by two.

function getMultipliedArr(arr){
    return arr.map(item => item * 2)
}
// // Examples
// console.log(getMultipliedArr([2, 5, 3])) //➞ [4, 10, 6]
// console.log(getMultipliedArr([1, 86, -5])) //➞ [2, 172, -10]
// console.log(getMultipliedArr([5, 382, 0])) //➞ [10, 764, 0]


//Q=> 31 Create a function that takes an array of words and transforms it into an array of each word's length.

function wordLengths(arr){
    return arr.map((str) => str.length)
}

// Examples
console.log(wordLengths(["hello", "world"])) //➞ [5, 5]
console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"])) //➞ [9, 12, 9]
console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"])) //➞ [3, 5, 9, 4, 2, 3, 8]

//Q => 32 Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.


// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

function determineLever(arr){
    const fulcrumIndex = arr.indexOf("f");
    const effortIndex = arr.indexOf("e");
    const loadIndex = arr.indexOf("l");

    if(fulcrumIndex === 1){
        return "first class lever"
    }else if(fulcrumIndex === 2){
        return "second class lever"
    }else if(fulcrumIndex === 0){
        return "third class lever"
    }
}

// Examples
console.log(determineLever(["e", "f", "l"])) // ➞ "first class lever"
console.log(determineLever(["e", "l", "f"])) // ➞ "second class lever"
console.log(determineLever(["f", "e", "l"])) // ➞ "third class lever"

//Q => 33 Create a function that takes a string and returns a string with spaces in between all of the characters.

function spaceMeOut(str){
    let charactersArray = str.split('')
    let spaceString = charactersArray.join(' ')
    return spaceString;
}
// Examples
console.log(spaceMeOut("space")) // ➞ "s p a c e"
console.log(spaceMeOut("far out")) // ➞ "f a r   o u t"
console.log(spaceMeOut("elongated musk")) // ➞ "e l o n g a t e d   m u s k"