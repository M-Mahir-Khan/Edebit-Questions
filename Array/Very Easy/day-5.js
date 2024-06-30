// 52 Create a function that takes an array. This array will contain numbers represented as strings.
// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.
// Return an empty array if there are no even numbers, or odd.


function cleanUpArray(arr) {
    let newarr = [[], []]
    arr.forEach(item => {
        if (item % 2 == 0) {
            newarr[0].push(item)
        }
        else {
            newarr[1].push(item)
        }

    })
    return newarr
}

function cleanUpArray(arr){
    let newarr = [[],[]];
    for(let i= 0; i< arr.length ; i++){
        if(arr[i] % 2 === 0){
            newarr[0].push(arr[i])
        }else{
            newarr[1].push(arr[i])
        }
    }
    return newarr
}

function cleanUpArray(arr){
    let even = arr.filter(num => num % 2 === 0);
    let odd = arr.filter(num => num % 2 !== 0);
    return [even, odd]
}

// Examples
console.log(cleanUpArray(["8"]))// ➞ [s "8"])) //➞ [[4, 8], [9, 5]]

// 53 Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.
function largestNumbers(n,arr){
    arr.sort((a,b) => b - a)
    const result = arr.slice(0,n)
    return result;
}

// Examples
console.log(largestNumbers(2, [4, 3, 2, 1]) )//➞ [3, 4]
console.log(largestNumbers(1, [7, 19, 4, 2]))// ➞ [19]
console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16]))// ➞ [16, 18, 57]
console.log(largestNumbers(0, [1, 3, 4, 2]) )//➞ []

// 54 Create a function that finds each factor of a given number n. Your solution should return an array of the number(s) that meet this criteria.

function findFactors(n){
    let factor = [];
    for(let i = 0; i < n ; i++){
        if(n % i === 0){
            factor.push(i)
        }
    }
    return factor 
}


// Examples
// console.log(findFactors(9) )// ➞ [1, 3, 9]
// 9 has three factors 1, 3 and 9

console.log(findFactors(12))// ➞ [1, 2, 3, 4, 6, 12]
console.log(findFactors(20))// ➞ [1, 2, 4, 5, 10, 20]
console.log(findFactors(0) )// ➞ []
// 0 has no factors

// 55 Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.

function trimmedAverages(arr){
    arr.sort((a,b) => a - b);
    let trimed = arr.slice(1,-1);
    let sum = trimed.reduce((acc,curr) => acc + curr, 0)
    let average = sum / trimed.length;
    return average;
}

function trimmedAverages(arr){
    let min = Math.min(...arr);
    let max = Math.max(...arr);

    let filterArr = arr.filter(num => num !== min && num !== max)

    if (filterArr.length === 0) {
        return min; 
    }

    let sum = 0;
    for(let i = 0 ; i < filterArr.length ; i++){
        sum += filterArr[i]
    }

    let average = sum / filterArr.length;
    return average
}
// // Examples
console.log(trimmedAverages([4, 5, 7, 100]) )//➞ 6
// Average of 5 and 7
console.log(trimmedAverages([10, 25, 5, 15, 20])) //➞ 15
// Average of 10, 15 and 20
console.log(trimmedAverages([1, 1, 1]) )//➞ 1
// 1

//56 Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.
function arrayLessThan100(arr){
    let sum = arr.reduce((acc,curr)=> acc + curr, 0);
    let res = sum < 100;
    return res
}

function arrayLessThan100(arr){
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    let res = sum < 100;
    return res
}

// Examples
console.log(arrayLessThan100([5, 57]) )//➞ true
console.log(arrayLessThan100([77, 30]))// ➞ false
console.log(arrayLessThan100([0])) // ➞ true

// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.
function sumMinimums(arr){
    let sum = 0;
    for(let row of arr){
        let minVal = Math.min(...row);
        sum += minVal
    }
    return sum
}

function sumMinimums(arr){
    let sum = arr.reduce((acc,row)=> acc + Math.min(...row), 0)
    return sum
}
function sumMinimums(arr) {
    let totalSum = 0;
    for (let i = 0; i < arr.length; i++) {
        let minVal = Math.min(...arr[i]);
        totalSum += minVal;
    }
    return totalSum;
}
// Examples
console.log(sumMinimums([
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8, 9],
  [20, 21, 34, 56, 100]
])) // ➞ 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20


// 57 Create a function that returns the last value of the last item in an array or string.

function lastItem(input){
    let result ;
    for(let i = 0 ; i < input.length; i++){
        result = input[input.length - 1]
    }
    return result
}
// Examples
console.log(lastItem([0, 4, 19, 34, 50, -9, 2]) ) //➞ 2
console.log(lastItem("The quick brown fox jumped over the lazy dog")) // ➞ "g"
console.log(lastItem([])) // ➞ undefined


//58 Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.

// If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.

function ageDifference(arr){
   let newArr = arr.sort((a,b)=> b - a).slice(0,2)
   let difference = Math.abs(newArr[0] - newArr[1])
   if(difference === 0){
    return  "No age difference between spouses."
   }
   return `${difference} ${difference === 1 ? "year" : "years"}`
}

// Examples
console.log(ageDifference([29, 1, 6, 8, 28])) // ➞ "1 year"
console.log(ageDifference([43, 86, 49, 86]) ) //➞ "No age difference between spouses."
console.log(ageDifference([2, 4, 6, 32, 27])) // ➞ "5 years"

// 59 Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.

function outlierNumber(arr) {
    if (arr.length >= 3) {
      let odd = [];
      let even = [];
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
          even.push(arr[i]);
        } else {
          odd.push(arr[i]);
        }
      }
      return odd.length > even.length ? Number(even) : Number(odd);
    }
  }
// Examples
outlierNumber([2, 3, 4]) //➞ 3
// 2 and 4 are even numbers.
// 3 is an outlier number.

outlierNumber([1, 2, 3]) //➞ 2

outlierNumber([4, 1, 3, 5, 9])// ➞ 4