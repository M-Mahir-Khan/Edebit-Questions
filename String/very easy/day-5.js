//Q => 73 Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

function cmsSelector(arr, str) {
    let res = arr.filter(item => item.toLowerCase().includes(str))
}

function cmsSelector(arr, str) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].toLowerCase().includes(str)){
            res.push(arr[i])
        }
    }
    return res
}

// Examples
console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "w")) // ➞ ["WordPress"]
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru")) // ➞ ["Drupal"]
console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "")) // ➞ ["Drupal", "Joomla", "Magento", "WordPress"]


//Q => 74 Create a function that calculates the profit margin given costPrice and salesPrice. Return the result as a percentage formatted string, and rounded to one decimal. To calculate profit margin you subtract the cost from the sales price, then divide by sales price.

function profitMargin(costPrice, salesPrice) {
    let margin = ((salesPrice - costPrice) / salesPrice) * 100
    let fixedMargin = margin.toFixed(1)
    return `${fixedMargin}%`
}

// Examples
console.log(profitMargin(50, 50)) // ➞ "0.0%"
console.log(profitMargin(28, 39)) // ➞ "28.2%"
console.log(profitMargin(33, 84)) // ➞ "60.7%"

//Q => 75 Create a function that takes a string and returns the word count. The string will be a sentence.

function countWords(str){
    let arr = str.split(" ");
    return arr.length
}

// Examples
console.log(countWords("Just an example here move along")) // ➞ 6
console.log(countWords("This is a test")) // ➞ 4
console.log(countWords("What an easy task, right")) // ➞ 5

// Q => 76 I'm trying to watch some lectures to study for my next exam but I keep getting distracted by meme compilations, vine compilations, anime, and more on my favorite video platform.

// Your job is to help me create a function that takes a string and checks to see if it contains the following words or phrases:

// "anime"
// "meme"
// "vines"
// "roasts"
// "Danny DeVito"
// If it does, return "NO!". Otherwise, return "Safe watching!".

function preventDistractions(str) {
    if (str.includes("anime") || str.includes("meme") || str.includes("vines") || str.includes("roasts") || str.includes("Danny DeVito")) {
        return "NO!"
    } else {
        return "Safe watching!"
    }
}

// // Examples
console.log(preventDistractions("vines that butter my eggroll")) //➞ "NO!"
console.log(preventDistractions("Hot pictures of Danny DeVito")) //➞ "NO!"
console.log(preventDistractions("How to ace BC Calculus in 5 Easy Steps")) //➞ "Safe watching!"


//Q => 77 Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

function stringPairs(str) {
    let pairs = [];

    for (let i = 0; i < str.length; i += 2) {
        if (i + 1 < str.length) {
            pairs.push(str[i] + str[i + 1]);
        } else {
            pairs.push(str[i] + '*');
        }
    }

    return pairs;
}

// Examples
console.log(stringPairs("mubashir")) // ➞ ["mu", "ba", "sh", "ir"]
console.log(stringPairs("edabit")) // ➞ ["ed", "ab", "it"]
console.log(stringPairs("airforces")) // ➞ ["ai", "rf", "or", "ce", "s*"]



//Q => 78 Mubashir needs your help to count uppercase letters, lowercase letters, numbers and special characters in a given string.

// Create a function which takes a string txt and returns a list of numbers with count of uppercase letters, lowercase letters, numbers and special characters.

function filterString(str){
    let uppercase = 0;
    let lowercase = 0;
    let number = 0;
    let special = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] >= "A" && str[i] <= "Z"){
            uppercase++
        }else if(str[i] >= "a" && str[i] <= "z"){
            lowercase++
        }else if(str[i] >= 0 && str[i] <= 9){
            number++
        }else{
            special++
        }
        
    }

    return [uppercase,lowercase,number,special]
}

// Examples
console.log(filterString("*$(#Mu12bas43hiR%@*!")) // ➞ [2, 6, 4, 8]
// 2 uppercase letters
// 6 lowercase letters
// 4 numbers
// 8 special characters

console.log(filterString("^^Edabit^^%$#12379")) // ➞ [1, 5, 5, 7]

console.log(filterString("**Airforce1**")) // ➞ [1, 7, 1, 4]


//Q => 79 Given a string of letters, how many capital letters are there?

function capitalLetters(str){
    let count = 0;
    for(let letter of str){
        if(letter === letter.toUpperCase()){
            count++
        }
    }
    return count
}


function capitalLetters(str){
    let count = 0;
    for(let letter of str){
        if(letter >= "A" && letter <= "Z"){
            count++
        }
    }
    return count
}

// Examples
console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc")) // ➞ 6
console.log(capitalLetters("JMZWCneOTFLWYwBWxyFw")) // ➞ 14
console.log(capitalLetters("mqeytbbjwqemcdrdsyvq")) // ➞ 0


//Q => 80 Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

function numberSyllables(str){
    let arr = str.split("-");
    return arr.length
}


function numberSyllables(str) {
    let count = 1; // Start with 1 because the number of syllables is one more than the number of hyphens
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '-') {
            count++;
        }
    }
    return count;
}

// Examples
console.log(numberSyllables("buf-fet")) // ➞ 2
console.log(numberSyllables("beau-ti-ful")) // ➞ 3
console.log(numberSyllables("mon-u-men-tal")) // ➞ 4
console.log(numberSyllables("on-o-mat-o-poe-ia")) // ➞ 6


//Q => 81 Hamming distance is the number of characters that differ between two strings.

// To illustrate:

// String1: "abcbba"
// String2: "abcbda"

// Hamming Distance: 1 - "b" vs. "d" is the only difference.
// Create a function that computes the hamming distance between two strings.

function hammingDistance(str1,str2){
    let count = 0;
    for(let i = 0; i < str1.length; i++){
        if(str1[i] !== str2[i]){
            count++
        }
    }
    return count
}

function hammingDistance(str1,str2){
    return str1.split("").reduce((count,char,index)=>{
        return count + (char !== str2[index] ? 1 : 0)
    },0)
}

function hammingDistance(str1,str2){
    let count = 0;
     str1.split("").map((char,index)=>{
         count += (char !== str2[index] ? 1 : 0)
    })
    return count;
}

// Examples
console.log(hammingDistance("abcde", "bcdef")) // ➞ 5
console.log(hammingDistance("abcde", "abcde")) // ➞ 0
console.log(hammingDistance("strong", "strung")) // ➞ 1


//Q => 82 You can think of character classes as characters with special meaning. They are recognized as special when you place the \ before the character.

// Here is a list of the character classes in JavaScript:

// ., \cX, \d, \D, \f, \n, \r, \s, \S, \t, \v, \w, \W, \0, \xhh, \uhhhh, \uhhhhh, [\b]
// There is a hidden word in this string:

const str = "**^&$Regular#$%Expressions$%$$%^**";
const hiddenWord = str.replace(/[^\w]/g, '');
console.log(hiddenWord);

//Write the regular expression that reveals the hidden word. You have to remove all of the special characters to reveal the word. Use the character class \w in your expression.


// Q => 83 Create a function that removes the first and last characters from a string.
// Notes
// If the string is 2 or fewer characters long, return the string itself (See Example #4).

function removeFirstLast(str){
    if(str.length <= 2){
        return str
    }

    return str.slice(1,str.length -1)
}

function removeFirstLast(str) {
    if (str.length <= 2) {
        return str;
    }
    let arr = str.split('');
    arr.pop();
    arr.shift();
    return arr.join('');
}

// Examples
console.log(removeFirstLast("hello")) // ➞ "ell"
console.log(removeFirstLast("maybe")) // ➞ "ayb"
console.log(removeFirstLast("benefit")) // ➞ "enefi"
console.log(removeFirstLast("a")) // ➞ "a"


//Q => 84 Create a function to extract the name of the subreddit from its URL.

function subReddit(url){
    let arr = url.split("/");
    return arr[arr.length - 2]
}

// Examples
console.log(subReddit("https://www.reddit.com/r/funny/")) // ➞ "funny"
console.log(subReddit("https://www.reddit.com/r/relationships/")) // ➞ "relationships"
console.log(subReddit("https://www.reddit.com/r/mildlyinteresting/")) // ➞ "mildlyinteresting"



//Q => 85 Create a function which validates whether a bridge is safe to walk on (i.e. has no gaps in it to fall through).

function isSafeBridge(str){
    return !str.includes(" ")
}

function isSafeBridge(str){
    for(let item of str){
        if(item === " "){
            return false
        }
    }
    return true
}

// Examples
console.log(isSafeBridge("####")) // ➞ true
console.log(isSafeBridge("## ####")) // ➞ false
console.log(isSafeBridge("#")) // ➞ true


//Q => 86 Write a function that takes three string arguments (first, last, and word) and returns true if word is found between first and last in the dictionary, otherwise false.

function isBetween(first,last, word){
    if(word.localeCompare(first) > 0 && word.localeCompare(last) < 0){
        return true
    }else{
        return false

    }
}

function isBetween(first,last,word){
    return first <= word && last >= word
}

// Examples
console.log(isBetween("apple", "banana", "azure")) // ➞ true
console.log(isBetween("monk", "monument", "monkey")) // ➞ true
console.log(isBetween("bookend", "boolean", "boost")) // ➞ false


//Q => 87 Write a regular expression that matches a string if it contains at least one digit.


function containsDigit(str) {
    const regex = /\d/;
    return regex.test(str);
}

// Examples
console.log(containsDigit("c8"));        // ➞ true
console.log(containsDigit("23cc4"));     // ➞ true
console.log(containsDigit("abwekz"));    // ➞ false
console.log(containsDigit("sdfkxi"));    // ➞ false

//Q => 88 Create a function that replaces all the vowels in a string with a specified character.

function replaceVowels(str,char){
    let res = ""
    for(let i = 0 ; i < str.length; i++){
        if(str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            res += char;
        }else{
            res += str[i]
        }
    }
    return res
}

function replaceVowels(str, char) {
    return str.replace(/[aeiou]/g, char)
}

// Examples
console.log(replaceVowels("the aardvark", "#")) // ➞ "th# ##rdv#rk"
console.log(replaceVowels("minnie mouse", "?")) // ➞ "m?nn?? m??s?"
console.log(replaceVowels("shakespeare", "*") ) //➞ "sh*k*sp**r*"


//Q => 89 Create a function that adds a string ending to each member in an array.

function addEnding(arr,end){
    let res = arr.map(item => item + end)
    return res
}

function addEnding(arr,end){
    let res = [];
    for(let i =0 ; i < arr.length; i++){
        res.push(arr[i] + end);
    }
    return res
}

function addEnding(arr,end){
    let res = [];
    arr.forEach(item => res.push(item + end))
    return res
}

// Examples
console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly")
) //➞ ["cleverly", "meekly", "hurriedly", "nicely"]

console.log(addEnding(["new", "pander", "scoop"], "er")
) //➞ ["newer", "panderer", "scooper"]

console.log(addEnding(["bend", "sharpen", "mean"], "ing")
) //➞ ["bending", "sharpening", "meaning"]


//Q => 90 Create a function that takes an array of strings and returns the words that are exactly four letters.

function isFourLetters(arr){
    return arr.filter(item => item.length === 4)
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
console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])) // ➞ ["Ryan", "Matt"]