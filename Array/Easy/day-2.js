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


//Q=> 24 Write two functions:

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


//Q => 25 A baseball player's batting average is calculated by the following formula:

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

//Q=> 26 According to the lodash documentation, _.dropRight Creates a slice of an array with n elements dropped from the end.

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

//Q=> 27 Given an array and an integer n, return the sum of the first n numbers in the array.

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


//Q=> 28 Create a function to count the number of 1s in a 2D array.

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


//Q => 29 Create a function that returns true if the first array is a subset of the second. Return false otherwise.

function isSubset(subset,arr){
    let res = subset.every(item => arr.includes(item))
    return res
}

function isSubset(subset,arr){
    for(let i = 0 ;i < subset.length;i++){
        if(!arr.includes(subset[i])){
            return false
        }
    }
    return true
}

// Examples
console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2])) // ➞ true
console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6])) // ➞ true
console.log(isSubset([1, 2], [3, 5, 9, 1])) // ➞ false


//Q => 30 Write a function that returns the number of users in a chatroom based on the following rules:

// If there is no one, return "no one online".
// If there is 1 person, return "user1 online".
// If there are 2 people, return "user1 and user2 online".
// If there are n>2 people, return the first two names and add "and n-2 more online".
// For example, if there are 5 users, return:

// "user1, user2 and 3 more online"

function chatroomStatus(arr){
    if(arr.length === 0){
        return "no one online"
    }
    if(arr.length === 1){
        return `${arr[0]} online`
    }
    if(arr.length === 2){
        return `${arr[0]} and ${arr[1]} online`
    }
    if(arr.length > 2){
        return `${arr[0]}. ${arr[1]} and ${arr.length - 2} more online`
    }
}

// Examples
console.log(chatroomStatus([]) ) //➞ "no one online"

console.log(chatroomStatus(["paRIE_to"]) ) //➞ "paRIE_to online"

console.log(chatroomStatus(["s234f", "mailbox2"]) ) //➞ "s234f and mailbox2 online"

console.log(chatroomStatus(["pap_ier44", "townieBOY", "panda321", "motor_bike5", "sandwichmaker833", "violinist91"])
) //➞ "pap_ier44, townieBOY and 4 more online"

//Q => 31 Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.


function spelling(str){
    let res = [];
    for(let i = 1 ; i <= str.length ; i++){
        res.push(str.slice(0,i))
    }
    return res
}

// Examples
console.log(spelling("bee")) // ➞ ["b", "be", "bee"]
console.log(spelling("happy")) // ➞ ["h", "ha", "hap", "happ", "happy"]
console.log(spelling("eagerly")) // ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]



// Q=> 32 Given a word, write a function that returns the first index and the last index of a character.
// Notes
// If the character does not exist in the word, return undefined.
// If only one instance of the character exists, the first and last index will be the same.
// Check the Resources tab for hints.

function charIndex(str,char){
    let res = [str.indexOf(char), str.lastIndexOf(char)]
    return res[0] === -1 ? undefined : res
}

function charIndex(str,char){
    let res = [];
    for(let i = 0 ; i < str.length; i++){
        if(str[i] === char && res.length === 0){
            res.push(i);
        }
    }

    for(let i = str.length; i>= 0; i--){
        if(str[i] === char && res.length === 1){
            res.push(i);
        }
    }
    return res.length === 0 ? undefined : res
}

// Examples
console.log(charIndex("hello", "l")) // ➞ [2, 3]
// The first "l" has index 2, the last "l" has index 3.

console.log(charIndex("circumlocution", "c")) // ➞ [0, 8]
// The first "c" has index 0, the last "c" has index 8.

console.log(charIndex("happy", "h")) // ➞ [0, 0]
// Only one "h" exists, so the first and last index is 0.

console.log(charIndex("happy", "e")) // ➞ undefined
// "e" does not exist in "happy", so we return undefined.


//Q=> 33 Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is

// Round 1: [s, f] Sacrifice his slowest snail against Steve's fastest.
// Round 2: [m, s] Use his middle snail against Steve's slowest.
// Round 3: [f, m] Use his fastest snail against Steve's middle.
// Create a function that determines whether Maurice's plan will work by outputting true if Maurice wins 2/3 games.

// The function inputs:

// Array 1: [s, m, f] for Maurice.
// Array 2: [s, m, f] for Steve.
// Notes
// Maurice wins if his competing snail's speed strictly exceeds Steve's snail's speed.
// Steve will always play in this order: [f, s, m].
// The order you'll get the snails is always in ascending order.

function mauriceWins(maurice,steve){
    let [ms,mm,mf] = maurice;
    let [ss,sm,sf] = steve;
    let wins = [
        ms > sf,
        mm > ss,
        mf > sm
    ].filter(Boolean).length
    return wins >= 2
}

// Examples
console.log(mauriceWins([3, 5, 10], [4, 7, 11])) //  ➞ true
// Since the matches are (3, 11), (5, 4) and (10, 7), Maurice wins 2 out of 3.

console.log(mauriceWins([6, 8, 9], [7, 12, 14])) //  ➞ false
// Since the matches are (6, 14), (8, 7) and (9, 12), Steve wins 2 out of 3.

console.log(mauriceWins([1, 8, 20], [2, 9, 100])) //  ➞ true

