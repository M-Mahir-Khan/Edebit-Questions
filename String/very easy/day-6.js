// Q => 91 In semantic versioning a piece of software can be represented in a format like this example: 6.1.9.

// The first number is the major version.
// The second number is the minor version.
// The third number is the patch (bug fixes).
// Write three separate functions, one to retrieve each element in the semantic versioning specification.

function retrieveMajor(str) {
    let res = str.split(".");
    return res[0];
}

function retrieveMinor(str) {
    let res = str.split(".");
    return res[1];
}

function retrievePatch(str) {
    let res = str.split(".");
    return res[2];
}

// Examples
// 6.1.9
console.log(retrieveMajor("6.1.9")) // ➞ "6"

console.log(retrieveMinor("6.1.9")) // ➞ "1"

console.log(retrievePatch("6.1.9")) // ➞ "9"

// 2.1.0
console.log(retrieveMajor("2.1.0")) // ➞ "2"

console.log(retrieveMinor("2.1.0")) // ➞ "1"

console.log(retrievePatch("2.1.0")) // ➞ "0"



//Q => 92 Create a function that takes a string and returns a string with its letters in alphabetical order.

function AlphabetSoup(str) {
    let res = str.split("").sort()
    return res.join("")
}

function AlphabetSoup(str) {
    let res = [...str].sort();
    return res.join("");
}

// Examples
console.log(AlphabetSoup("hello")) // ➞ "ehllo"

console.log(AlphabetSoup("edabit")) // ➞ "abdeit"

console.log(AlphabetSoup("hacker")) // ➞ "acehkr"

console.log(AlphabetSoup("geek")) // ➞ "eegk"

console.log(AlphabetSoup("javascript")) // ➞ "aacijprstv"


//Q => 93 Create a function that takes a string as its argument and returns the string in reversed order.

function reverse(str) {
    let res = str.split("").reverse().join("")
    return res
}

function reverse(str) {
    let res = "";
    for (let i = str.length - 1; i >= 0; i--) {
        res += str[i]
    }
    return res
}

// Examples
console.log(reverse("Hello World")) // ➞ "dlroW olleH"
console.log(reverse("The quick brown fox.")) // ➞ ".xof nworb kciuq ehT"
console.log(reverse("Edabit is really helpful!")) // ➞ "!lufpleh yllaer si tibadE"

//Q => 94 Fix the Error: Vowel Edition
// Your friend is trying to write a function that removes all vowels from a string. They write:

// function removeVowels(str) {
//   return str.replace(/[aeiou]/, "")
// }
// However, it seems that it doesn't work? Fix your friend's code so that it actually does remove all vowels.

function removeVowels(str) {
    return str.replace(/[a,e,i,o,u]/, "")
}

// Examples
console.log(removeVowels("candy")) // ➞ "cndy"

console.log(removeVowels("hello")) // ➞ "hllo"
// The "e" is removed, but the "o" is still there!

console.log(removeVowels("apple")) // ➞ "pple"


//Q => 95 Create a function that returns the smaller number.
// Notes
// Numbers will be represented as strings, and your output should also be a string.
// If both numbers tie, return either number.
// Numbers will be positive.
// Bonus: See if you can do this without converting to integers.

function smallerNum(num1, num2) {
    let arr = [num1, num2];
    arr.sort((a, b) => a - b);
    return arr[0]
}

function smallerNum(num1, num2) {
    if (parseInt(num1) < parseInt(num2)) {
        return num1
    } else {
        return num2
    }
}

// Examples
console.log(smallerNum("21", "44")) // ➞ "21"
console.log(smallerNum("1500", "1")) // ➞ "1"
console.log(smallerNum("5", "5")) // ➞ "5"


//Q => 96 Create a function that takes a number (from 1 - 60) and returns a corresponding string of hyphens.

function Go(num) {
    let res = "";
    for (let i = 0; i < num; i++) {
        res += "-"
    }
    return res
}
function Go(num) {
    return "-".repeat(num)
}
// Examples
console.log(Go(1)) // ➞ "-"
console.log(Go(5)) // ➞ "-----"
console.log(Go(3)) // ➞ "---"


//Q => 97 Create a function that takes a string of lowercase characters and returns that string reversed and in upper case.

function reverseCapitalize(str) {
    let res = str.split("").reverse().join("").toUpperCase()
    return res

}

// Examples
console.log(reverseCapitalize("abc")) // ➞ "CBA"
console.log(reverseCapitalize("hellothere")) // ➞ "EREHTOLLEH"
console.log(reverseCapitalize("input")) // ➞ "TUPNI"


//Q => 98 Create a function that takes an initial word and extracts any words that start with the same letters as the initial word.

function dictionary(word, arr) {
    let res = arr.filter(item => item.includes(word))
    return res
}


function dictionary(word, arr) {
    let res = [];
    for (let item of arr) {
        if (item.includes(word)) {
            res.push(item)
        }
    }
    return res
}
// Examples
console.log(dictionary("bu", ["button", "breakfast", "border"])) // ➞ ["button"]
console.log(dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])) // ➞ ["triplet", "tries", trip"]
console.log(dictionary("beau", ["pastry", "delicious", "name", "boring"])) // ➞ []


//Q => 99 Create a function that takes two strings and returns true if the first string ends with the second string; otherwise return false.

function checkEnding(str1, str2) {
    let res = str1.endsWith(str2)
    return res
}

function checkEnding(str1, str2) {
    return str1.substring(str1.length - str2.length) === str2;
}

function checkEnding(str1, str2) {
    return str1.slice(-str2.length) === str2;
}

// Examples
console.log(checkEnding("abc", "bc")) // ➞ true
console.log(checkEnding("abc", "d")) // ➞ false
console.log(checkEnding("samurai", "zi")) // ➞ false
console.log(checkEnding("feminine", "nine")) // ➞ true
console.log(checkEnding("convention", "tio")) // ➞ false


//Q => 100 Create a function that accepts a string (of a person's first and last name) and returns a string with the first and last name swapped.

function nameShuffle(str) {
    let arr = str.split(" ");
    return `${arr[1]} ${arr[0]}`
}

function nameShuffle(str) {
    let res = str.split(" ").reverse().join(" ")
    return res

}

// Examples
console.log(nameShuffle("Donald Trump")) // ➞ "Trump Donald"
console.log(nameShuffle("Rosie O'Donnell")) // ➞ "O'Donnell Rosie"
console.log(nameShuffle("Seymour Butts")) // ➞ "Butts Seymour"


//Q => 101 Create a function that returns true if an input string contains only uppercase or only lowercase letters.

function sameCase(str) {
    if (str === str.toUpperCase()) {
        return true
    } else if (str === str.toLowerCase()) {
        return true
    } else {
        return false
    }
}

// Examples
console.log(sameCase("hello")) // ➞ true
console.log(sameCase("HELLO")) // ➞ true
console.log(sameCase("Hello")) // ➞ false
console.log(sameCase("ketcHUp")) // ➞ false

//Q => 102 Create a function that takes a string and returns true or false, depending on whether the characters are in order or not.

function isInOrder(str) {
    let res = str === str.split("").sort().join("")
    return res
}

// Examples
console.log(isInOrder("abc")) // ➞ true
console.log(isInOrder("edabit")) // ➞ false
console.log(isInOrder("123")) // ➞ true
console.log(isInOrder("xyzz")) // ➞ true

//Q => 103 A palindrome is a word that is identical forward and backwards.

// mom
// racecar
// kayak
// Given a word, create a function that checks whether it is a palindrome.

function checkPalindrome(str) {
    if (str[0] === str[str.length - 1]) {
        return true
    }

    return false
}

// Examples
console.log(checkPalindrome("mom")) // ➞ true
console.log(checkPalindrome("scary")) // ➞ false
console.log(checkPalindrome("reviver")) // ➞ true
console.log(checkPalindrome("stressed")) // ➞ false



//Q => 104 A pair of strings form a strange pair if both of the following are true:

// The 1st string's first letter = 2nd string's last letter.
// The 1st string's last letter = 2nd string's first letter.
// Create a function that returns true if a pair of strings constitutes a strange pair, and false otherwise.

function isStrangePair(str1, str2) {
    if (str1[0] === str2[str2.length - 1] && str1[str1.length - 1] === str2[0]) {
        return true
    }
    return false
}

// Examples
console.log(isStrangePair("ratio", "orator")) // ➞ true
// "ratio" ends with "o" and "orator" starts with "o".
// "ratio" starts with "r" and "orator" ends with "r".

console.log(isStrangePair("sparkling", "groups")) // ➞ true

console.log(isStrangePair("bush", "hubris")) // ➞ false

console.log(isStrangePair("", "")) // ➞ true


//Q => 105 Write a function that turns a comma-delimited list into an array of strings.

function toArray(str) {
    let arr = str.split(",")
    return arr
}

// Examples
console.log(toArray("watermelon, raspberry, orange")
) //➞ ["watermelon", "raspberry", "orange"]

console.log(toArray("x1, x2, x3, x4, x5")
) //➞ ["x1", "x2", "x3", "x4", "x5"]

console.log(toArray("a, b, c, d")
) //➞ ["a", "b", "c", "d"]

console.log(toArray("")
) //➞ []

//Q => 106 Write a function that takes an integer and returns a string with the given number of "a"s in Edabit.

function howManyTimes(n) {
    let aTimes = "a".repeat(n);
    return "Ed" + aTimes + "it"
}

function howManyTimes(n) {
    let aTimes = ""
    for (let i = 0; i < n; i++) {
        aTimes += "a"
    }
    return "Ed" + aTimes + "bit"
}

// Examples
console.log(howManyTimes(5)) //➞ "Edaaaaabit"
console.log(howManyTimes(0)) //➞ "Edbit"
console.log(howManyTimes(12)) // ➞ "Edaaaaaaaaaaaabit"


//Q => 107 Create a function that repeats each character in a string n times.

function repeat(str, n) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        res += str[i].repeat(n)
    }
    return res
}


function repeat(str, n) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < n; j++) {
            res += str[i]
        }
    }
    return res
}

// Examples
console.log(repeat("mice", 5)) // ➞ "mmmmmiiiiiccccceeeee"
console.log(repeat("hello", 3)) // ➞ "hhheeellllllooo"
console.log(repeat("stop", 1)) // ➞ "stop"


//Q => 108 Google's logo can be stretched depending on how many pages it lets you skip forward to.

// Image of Goooooooooogle

// Let's say we wanted to change the number of pages that Google could skip to. Create a function where given a number of pages n, return the word "Google" but with the correct number of "o"s.

function googlify(n) {
    if (n <= 1) {
        return "invalid"
    }

    let numOfO = "o".repeat(n);
    return `G${numOfO}gle`
}

// Examples
console.log(googlify(10)) // ➞ "Goooooooooogle"
console.log(googlify(23)) // ➞ "Gooooooooooooooooooooooogle"
console.log(googlify(2)) // ➞ "Google"
console.log(googlify(-2)) // ➞ "invalid"

// Write a function that maps files to their extension names.

function getExtension(arr) {
    let res = arr.map(item => item.split(".").pop());
    return res
}

function getExtension(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i].split(".").pop())
    }
    return res
}


// Examples
console.log(getExtension(["code.html", "code.css"])
) //➞ ["html", "css"]

console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])
) //➞ ["jpg", "pdf", "mp3"]

console.log(getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])
) //➞ ["rb", "cpp", "py", "js"]


// Write a function that returns true if all characters in a string are identical and false otherwise.

function isIdentical(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[0] !== str[i]) {
            return false
        }
    }
    return true
}

function isIdentical(str) {
    let res = str.split("").every(char => char === str[0])
    return res
}

function isIdentical(str) {
    return new Set(str).length === 1
}

// Examples
console.log(isIdentical("aaaaaa")) // ➞ true
console.log(isIdentical("aabaaa")) // ➞ false
console.log(isIdentical("ccccca")) // ➞ false
console.log(isIdentical("kk")) // ➞ true



// Write a function that removes any non-letters from a string, returning a well-known film title.

function lettersOnly(str) {
    return str.replace(/[^a-zA-Z]/g, "");
}

function lettersOnly(str) {
    let res = "";
    for (let char of str) {
        if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
            res += char
        }
    }
    return res
}

// Examples
console.log(lettersOnly("R!=:~0o0./c&}9k`60=y")) // ➞ "Rocky"
console.log(lettersOnly("^,]%4B|@56a![0{2m>b1&4i4")) // ➞ "Bambi"
console.log(lettersOnly("^U)6$22>8p).")) // ➞ "Up"


// Write a function that reverses a string. Make your function recursive.

function reverse(str) {
    if (str.length <= 0) {
        return str
    }

    return str[str.length - 1] + reverse(str.slice(0, -1))
}

// Examples
console.log(reverse("hello")) // ➞ "olleh"
console.log(reverse("world")) // ➞ "dlrow"
console.log(reverse("a")) // ➞ "a"
console.log(reverse("")) // ➞ ""



// Create the instance properties fullname and email in the Employee class. Given a person's first and last names:

// Form the fullname by simply joining the first and last name together, separated by a space.
// Form the email by joining the first and last name together with a . in between, and follow it with @company.com at the end. Make sure the entire email is in lowercase.

class Employee {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
        // Complete the code!
        this.fullname = firstname + lastname
        this.email = `${firstname.toLowerCase()}.${lastname.toLowerCase()}@company.com`;
    }

}

// Examples
let emp1 = new Employee("John", "Smith");
console.log(emp1.fullname); // ➞ "John Smith"
console.log(emp1.email);    // ➞ "john.smith@company.com"

let emp2 = new Employee("Mary", "Sue");
console.log(emp2.fullname); // ➞ "Mary Sue"
console.log(emp2.email);    // ➞ "mary.sue@company.com"

let emp3 = new Employee("Antony", "Walker");
console.log(emp3.firstname); // ➞ "Antony"
console.log(emp3.fullname);  // ➞ "Antony Walker"
console.log(emp3.email);     // ➞ "antony.walker@company.com"


// Given two strings, create a function that returns the total number of unique characters from the combined string.

function countUnique(str1,str2){
    let combined = str1 + str2;
    return new Set(combined).size
}

function countUnique(str1,str2){
    let combined = str1 + str2;
    let res = "";
    for(let i = 0; i < combined.length; i++){
        if(!res.includes(combined[i])){
            res += combined[i]
        }
    }
    return res.length
}

// Examples
console.log(countUnique("apple", "play")) // ➞ 5
// "appleplay" has 5 unique characters:
// "a", "e", "l", "p", "y"

console.log(countUnique("sore", "zebra")) // ➞ 7
// "sorezebra" has 7 unique characters:
// "a", "b", "e", "o", "r", "s", "z"

console.log(countUnique("a", "soup")) // ➞ 5



// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".
// Notes
// Each greeting has to be separated with a comma and a space.
// If you're given an empty array [], return an empty string "".

function greetPeople(arr){
    let res = arr.map(item => "Hello " + item);
    return res.join(",")
}

// Examples
console.log(greetPeople(["Joe"])) // ➞ "Hello Joe"
console.log(greetPeople(["Angela", "Joe"])) // ➞ "Hello Angela, Hello Joe"
console.log(greetPeople(["Frank", "Angela", "Joe"])) // ➞ "Hello Frank, Hello Angela, Hello Joe"
