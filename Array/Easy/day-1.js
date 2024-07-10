// Q => 1 1Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i = 0 ; i < arr.length ; i++){
        if(min > arr[i]){
            min = arr[i]
        }
        if(max < arr[i]){
            max = arr[i]
        }
    }
    return [min, max]
}

function minMax(arr){
    let sort = arr.sort((a,b) => a - b)
    let res = [sort[0],sort[arr.length - 1]]
    return res
}

function minMax(arr){
    let res = [Math.min(...arr),Math.max(...arr)]
    return res
}

// Examples
// console.log(minMax([1, 2, 3, 4, 5])) // ➞ [1, 5]
// console.log(minMax([2334454, 5])) // ➞ [5, 2334454]
// console.log(minMax([1])) // ➞ [1, 1]

//Q => 2 Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

function canNest(arr1,arr2){
    let minArr1 = Math.min(...arr1);
    let maxArr1 = Math.max(...arr1);

    let minArr2 = Math.min(...arr2);
    let maxArr2 = Math.max(...arr2);

    // return maxArr1
    let res = minArr1 > minArr2 && maxArr1 < maxArr2
    return res
}

// Examples
// console.log(canNest([1, 2, 3, 4], [0, 6])) // ➞ true
// console.log(canNest([3, 1], [4, 0])) // ➞ true
// console.log(canNest([9, 9, 8], [8, 9])) // ➞ false
// console.log(canNest([1, 2, 3, 4], [2, 3])) // ➞ false


//Q => 3 When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

function seriesResistance(arr){
    let res = 0;
    for(let i = 0 ; i< arr.length; i++){
        res += arr[i]
    }
    return res <= 1 ? `${res} ohm` : `${res} ohms`
};

function seriesResistance(arr){
    let res = 0
    arr.map(item => res += item)
    return res <= 1 ? `${res} ohm` : `${res} ohms`
};

function seriesResistance(arr){
    let res = arr.reduce((acc,curr)=> acc + curr,0)
    return res <= 1 ? `${res} ohm` : `${res} ohms`
}

// Examples
// console.log(seriesResistance([1, 5, 6, 3])) // ➞ "15 ohms"
// console.log(seriesResistance([16, 3.5, 6])) // ➞ "25.5 ohms"
// console.log(seriesResistance([0.5, 0.5])) // ➞ "1.0 ohm"


//Q=> 4 Create a function that takes two arrays and insert the second array in the middle of the first array.

function tuckIn(arr1,arr2){
    let res = [arr1.shift(),...arr2,arr1.pop()]
    return res
}

function tuckIn(arr1,arr2){
    arr2.unshift(arr1.shift())
    arr2.push(arr1.pop());
    return arr2
}

// Examples
// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))  //  ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(tuckIn([15,150], [45, 75, 35]))  //  ➞ [15, 45, 75, 35, 150]
// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]))  //  ➞ [[1, 2], [3, 4], [5, 6]]


//Q => 5 Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

function numberSplit(num){
    let res = [];
    if(num % 2 === 0){
        res = [Math.floor(num/2),Math.floor(num/2)]
    }else{
        res = [Math.floor(num/2),Math.floor(num/2)+1]
    }
    return res
}

function numberSplit(num){
    let leftSide = Math.floor(num/2);
    let rightSide = Math.ceil(num/2)
    return [ leftSide,rightSide]
}

// Examples
// console.log(numberSplit(4)  ) // ➞ [2, 2]
// console.log(numberSplit(10) ) // ➞ [5, 5]
// console.log(numberSplit(11) ) // ➞ [5, 6]
// console.log(numberSplit(-9) ) // ➞ [-5, -4]


//Q => 6 Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

function filterArray(arr){
    let res = arr.filter(item => typeof item === "number" )
    return res
}

function filterArray(arr){
    let res = [];
    arr.map(item => {
        if(typeof item === "number"){
            res.push(item)
        }
    })
    return res
}

function filterArray(arr){
    return arr.reduce((acc,curr)=>{
        if (typeof curr === "number") {
            acc.push(curr)
        }
        return acc
    },[])
}

function filterArray(arr){
    let res = [];
    for(let item of arr){
        if(typeof item === "number"){
            res.push(item)
        }
    }
    return res
}

// Examples
console.log(filterArray([1, 2, "a", "b"])) // ➞ [1, 2]
console.log(filterArray([1, "a", "b", 0, 15])) // ➞ [1, 0, 15]
console.log(filterArray([1, 2, "aasf", "1", "123", 123])) // ➞ [1, 2, 123]

//q => 8 Create a function that returns an array of strings sorted by length in ascending order.

function sortByLength(arr){
    let res = arr.sort((a,b)=> a.length - b.length)
    return res
}

// Examples
console.log(sortByLength(["a", "ccc", "dddd", "bb"])) // ➞ ["a", "bb", "ccc", "dddd"]
console.log(sortByLength(["apple", "pie", "shortcake"])) // ➞ ["pie", "apple", "shortcake"]
console.log(sortByLength(["may", "april", "september", "august"])) // ➞ ["may", "april", "august", "september"]
console.log(sortByLength([])) // ➞ []


//Q => 9 Create a function that takes in an array of numbers and returns the sum of its cubes.

function sumOfCubes(arr){
    let res = arr.reduce((acc,curr)=> acc + curr** 3,0)
    return res
}

function sumOfCubes(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++){
        sum += arr[i]**3
    }
    return sum
}

function sumOfCubes(arr){
    let sum = 0;
    arr.map(item => sum += item**2)
    return sum
}

// Examples
console.log(sumOfCubes([1, 5, 9])) // ➞ 855
// Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
console.log(sumOfCubes([3, 4, 5])) // ➞ 216
console.log(sumOfCubes([2])) // ➞ 8
console.log(sumOfCubes([])) // ➞ 0

//Q=> 10 Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

function getOnlyEvens(arr){
    let res = arr.filter((item , index)=> item % 2 === 0 && index % 2 === 0)
    return res
}

function getOnlyEvens(arr){
    let res = [];
    for(let i = 0 ; i < arr.length; i++){
        if(arr[i] % 2 === 0 && i % 2 === 0){
            res.push(arr[i])
        }
    }
    return res
}

function getOnlyEvens(arr){
    let res = [];
    arr.map((item,index)=> {
        if(item % 2 === 0 && index % 2 === 0){
            res.push(item)
        }
    })
    return res
}

function getOnlyEvens(arr){
    let res = [];
    arr.forEach((item,index)=>{
        if(item % 2 === 0 && index % 2 === 0){
            res.push(item)
        }
    })
    return res
}
// Examples
console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])) //  ➞ [2, 4]
console.log(getOnlyEvens([0, 1, 2, 3, 4])) //  ➞ [0, 2, 4]
console.log(getOnlyEvens([1, 2, 3, 4, 5])) //  ➞ []


//Q => 11 Create a function that takes an array of strings and return an array, sorted from shortest to longest.

function sortByLength(arr){
    let res = arr.sort((a,b)=> a.length - b.length)
    return res
}

// Examples
console.log(sortByLength(["Google", "Apple", "Microsoft"])
) //➞ ["Apple", "Google", "Microsoft"]

console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"])
) //➞ ["Raphael", "Leonardo", "Donatello", "Michelangelo"]

console.log(sortByLength(["Turing", "Einstein", "Jung"])
) //➞ ["Jung", "Turing", "Einstein"]

// Q => 12 The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.

// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

function calculateDifference(obj,limit){
    let total = 0;
    for(let item in obj){
        total += obj[item]
    }
    let difference = total - limit
    return difference
}

// Examples
console.log(calculateDifference({ "baseball bat": 20 }, 5)) // ➞ 15
console.log(calculateDifference({ skate: 10, painting: 20 }, 19)) // ➞ 11
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)) // ➞ 1


//Q => 13 Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

function isAvgWhole(arr){
    let sum = arr.reduce((acc,curr)=> acc + curr,0);
    return Number.isInteger(sum / arr.length)
}

// Examples
console.log(isAvgWhole([1, 3])) // ➞ true
console.log(isAvgWhole([1, 2, 3, 4])) // ➞ false
console.log(isAvgWhole([1, 5, 6])) // ➞ true
console.log(isAvgWhole([1, 1, 1])) // ➞ true
console.log(isAvgWhole([9, 2, 2, 5])) // ➞ false

//Q => 14 Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

function getAbsSum(arr){
    let res = arr.reduce((acc,curr)=> acc + Math.abs(curr), 0)
    return res
}

function getAbsSum(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length; i++){
        sum += Math.abs(arr[i])
    }
    return sum
}

function getAbsSum(arr){
    let sum = 0;
    arr.map(item => sum += Math.abs(item))
    return sum
}

// Examples
console.log(getAbsSum([2, -1, 4, 8, 10])) // ➞ 25
console.log(getAbsSum([-3, -4, -10, -2, -3])) // ➞ 22
console.log(getAbsSum([2, 4, 6, 8, 10])) // ➞ 30
console.log(getAbsSum([-1])) // ➞ 1

//Q=> 15 Create a function that takes an array of numbers and returns a new array, sorted in ascending order (smallest to biggest).

// Sort numbers array in ascending order.
// If the function's argument is null, an empty array, or undefined; return an empty array.
// Return a new array of sorted numbers.

function sortNumsAscending(arr){
    if(arr === null || arr === undefined || arr.length === 0){
        return [];
    }

    let res = arr.sort((a,b)=> a - b)
    return res
}

// Examples
console.log(sortNumsAscending([1, 2, 10, 50, 5])) // ➞ [1, 2, 5, 10, 50]
console.log(sortNumsAscending([80, 29, 4, -95, -24, 85])) // ➞ [-95, -24, 4, 29, 80, 85]
console.log(sortNumsAscending(null)) // ➞ []
console.log(sortNumsAscending([])) // ➞ []


//16 Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

function findLargestNums(arr){
    let res = arr.map(item => Math.max(...item))
    return res
}

function findLargestNums(arr){
    let res = [];
    for(let i = 0 ; i < arr.length; i++){
        let max = arr[i][0]
        for(let j = 0 ; j < arr[i].length; j++){
            if(arr[i][j] > max){
                max = arr[i][j]
            }
        }
        res.push(max)
    }
    return res
}

function eachArr(arr){
    let sorted = arr.sort((a,b)=> b - a);
    return sorted[0]
}

function findLargestNums(arr){
    let res = arr.map(item => eachArr(item))
    return res
}
// Examples
console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])) // ➞ [7, 90, 2]
console.log(findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])) // ➞ [-34, -2, 7]
console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]])) // ➞ [0.7634, 9.32, 9]



//17 A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// // original array

// [1, 3, 5]
// // original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.

function set(arr){
    let sort = arr.sort((a,b)=> a-b)
    let res = [];
    for(let i = 0 ; i < sort.length; i++){
        if(sort[i] !== sort[i -1]){
            res.push(arr[i])
        }
    }
    return res;
}

// Examples
console.log(set([1, 3, 3, 5, 5])) // ➞ [1, 3, 5]
console.log(set([4, 4, 4, 4])) // ➞ [4]
console.log(set([5, 7, 8, 9, 10, 15])) // ➞ [5, 7, 8, 9, 10, 15]
console.log(set([3, 3, 3, 2, 1])) // ➞ [1, 2, 3]



//Q => 18 Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

function formatPhoneNumber(arr){
    let res = `(${arr[0]}${arr[1]}${arr[2]}) ${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}`
    return res
}

// Examples
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])) // ➞ "(123) 456-7890"

console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])) // ➞ "(519) 555-4468"

console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])) // ➞ "(345) 501-2527"


//Q => 19 In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

// Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

// Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.
// Notes
// The given parameter num will always be equal to or greater than 1.
// Remember to include the num as the higher bound of the sequence (see the Examples) above.
// A number a amplified by a factor b can also be read as: a * b.
// A number a is exactly divisible by a number b when the remainder of the division a / b is equal to 0.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function amplify(num){
    let res = [];
    for(let i = 1 ; i <= num; i++){
        if(i % 4 === 0){
            res.push(i * 10)
        }
        else{
            res.push(i)
        }
    }
    return res
}

// Examples
console.log(amplify(4) ) // ➞ [1, 2, 3, 40]
// Create a sequence from 1 to 4
// 4 is exactly divisible by 4, so it will be 4*10 = 40

console.log(amplify(3) ) // ➞ [1, 2, 3]
// Create a sequence from 1 to 3
// There are no numbers that can be exactly divided by 4

console.log(amplify(25)) //  ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// Create a sequence from 1 to 25
// The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.


//Q => 20 A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

function societyName(arr){
    arr.sort();
    let res = arr.map(el=> el[0]).join('').toUpperCase()
    return res
}

function societyName(arr){
    arr.sort();
    let name = "";
    for(let i = 0 ; i < arr.length ; i++){
        name += arr[i][0]
    }
    return name
}

// Examples
console.log(societyName(["Adam", "Sarah", "Malcolm"])) // ➞ "AMS"
console.log(societyName(["Harry", "Newt", "Luna", "Cho"])) // ➞ "CHLN"
console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])) // ➞ "CJMPRR"



//Q => 21 Create a function that takes three parameters where:

// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

function arrayOperation(x , y , n){
    let res = [];
    for(let i = x ; i < y; i++){
        if(i % n === 0){
            res.push(i)
        }
    }
    return res
}

// Examples
console.log(arrayOperation(1, 10, 3)) // ➞ [3, 6, 9]
console.log(arrayOperation(7, 9, 2)) // ➞ [8]
console.log(arrayOperation(15, 20, 7)) // ➞ []


//Q => 22 Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

function maxTotal(arr){
    arr.sort((a,b)=> b - a)
    let res = arr.slice(0,5).reduce((acc,curr)=> acc + curr,0)
    return res
}

function maxTotal(arr){
    arr.sort((a,b)=> b-a);
    let sum = 0;
    for(let i = 0 ;i < 5;i++){
        sum += arr[i]
    }
    return sum
}

// Examples
console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])) // ➞ 43
console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])) // ➞ 100
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // ➞ 40

//23 A value is omnipresent if it exists in every subarray inside the main array.

// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// // 3 exists in every element inside this array, so is omnipresent.
// Create a function that determines whether an input value is omnipresent for a given array.

function isOmnipresent(arr,val){
    for(let i = 0 ; i < arr.length; i++){
        if(!arr[i].includes(val)){
            return false
        }
    }
    return true
}

function isOmnipresent(arr,val){
    return arr.every(item => item.includes(val))
}

// Examples
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)) // ➞ true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)) // ➞ false
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5)) // ➞ true
console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)) // ➞ false


// Write two functions:

// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.

function toArray(num){
    let str = String(num);
    let res = [];
    for(let i = 0; i < str.length ; i++){
        res.push(Number(str[i]))
    }
    return res
}

function toArray(num){
    return String(num).split("").map(item => Number(item))
    
}

function toNumber(arr){
    let res = parseInt(arr.join(""))
    return res
}

// Examples
console.log(toArray(235)) // ➞ [2, 3, 5]
console.log(toArray(0)) // ➞ [0]
console.log(toNumber([2, 3, 5])) // ➞ 235
console.log(toNumber([0])) // ➞ 0


// A baseball player's batting average is calculated by the following formula:

// BA = (number of hits) / (number of official at-bats)
// Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:

// Ty Cobb .366
// Rogers Hornsby .358
// Shoeless Joe Jackson .356
// The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.

function battingAvg(arr){
    let totalHits = 0;
    let totalAtBats = 0;

    for(let item of arr){
        totalHits += item[0];
        totalAtBats += item[1]
    }

    let avg = totalHits / totalAtBats;
    let rounded = avg.toFixed(3)
    return rounded
}

// Examples
console.log(battingAvg([[0, 0], [1, 3], [2, 2], [0, 4], [1, 5]])) // ➞ ".286"

console.log(battingAvg([[2, 5], [2, 3], [0, 3], [1, 5], [2, 4]])) // ➞ ".350"

console.log(battingAvg([[2, 3], [1, 5], [2, 4], [1, 5], [0, 5]])) // ➞ ".273"

// According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

function dropRight(arr,n = 1){

    return arr.slice(0,arr.length - n)
    
}

function dropRight(arr,n = 1){
    let newArr = [];
    for(let i = 0; i < arr.length - n; i++ ){
        newArr.push(arr[i])
    }
    return newArr
}


// Examples
console.log(dropRight([1, 2, 3])) // ➞ [1, 2]
console.log(dropRight([1, 2, 3], 2)) // ➞ [1]
console.log(dropRight([1, 2, 3], 5)) // ➞ []
console.log(dropRight([1, 2, 3], 0)) // ➞ [1, 2, 3]

// Given an array and an integer n, return the sum of the first n numbers in the array.

function sliceSum(arr,n){
    let res = arr.slice(0,n).reduce((acc,curr)=> acc + curr,0)
    return  res
}

function sliceSum(arr,n){
    let sum = 0;
    for(let i = 0 ; i < n; i++){
        sum += arr[i]
    }
    return sum
}

// Worked Example
console.log(sliceSum([9, 8, 7, 6], 3)) //  ➞ 24
// The parameter n is specified as 3.
// The first 3 numbers in the list are 9, 8 and 7.
// The sum of these 3 numbers is 24 (9 + 8 + 7).
// Return the answer.
// Examples
console.log(sliceSum([1, 3, 2], 2)) //  ➞ 4

console.log(sliceSum([4, 2, 5, 7], 4)) //  ➞ 18

console.log(sliceSum([3, 6, 2], 0)) //  ➞ 0


// Create a function to count the number of 1s in a 2D array.

function countOnes(arr){
    let count = 0;
    for(let item of arr){
        for(let num of item){
            if(num === 1){
                count++
            }
        }
    }
    return count
}

function haveOnce(item){
   let res = item.filter(item => item === 1)
   return res.reduce((acc,curr)=> acc + curr,0) 
}

function countOnes(arr){
    let count = 0;
    for(let item of arr){
        count += haveOnce(item)
    }
    return count
}

// Examples
console.log(countOnes([
  [1, 0],
  [0, 0]
])) // ➞ 1

console.log(countOnes([
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1]
])) // ➞ 7

console.log(countOnes([
  [1, 2, 3],
  [0, 2, 1],
  [5, 7, 33]
])) // ➞ 2