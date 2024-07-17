// Q => 46 Create a function that counts how many D's are in a sentence.

function countDs(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        str[i].toUpperCase() === "D" ? count++ : i
    }
    return count
}

// Examples
console.log(countDs("My friend Dylan got distracted in school.")) // ➞ 4
console.log(countDs("Debris was scattered all over the yard.")) // ➞ 3
console.log(countDs("The rodents hibernated in their den.")) // ➞ 3

// Q=> 47 Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// Notes
// Ignore punctuation, spaces and numbers.

function getCase(str) {
    if (str === str.toUpperCase()) {
        return "upper"
    } else if (str === str.toLowerCase()) {
        return "lower"
    } else {
        return "mixed"
    }
}

// Examples
console.log(getCase("whisper...")) //➞ "lower"
console.log(getCase("SHOUT!")) //➞ "upper"
console.log(getCase("Indoor Voice")) //➞ "mixed"


//Q=> 48 Create a function that will put the first argument, a character, between every word in the second argument, a string.

function add(char, str) {
    let arr = str.split(" ");
    let result = "";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]
        if (i < arr.length - 1) {
            result += char
        }

    }
    return result
}

function add(char, str) {
    return str.split(" ").join(char)
}

// Examples
console.log(add("R", "javascript is fun")) // ➞ "javascriptRisRfun"
console.log(add("#", "hello world!")) // ➞ "hello#world!"
console.log(add("#", " ")) // ➞ "#"

//Q => 49 Create a function that flips M's to W's (all uppercase).

function wumbo(str) {
    return str.replace("M", "W")
}

function wumbo(str) {
    let result = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "M") {
            result += "W"
        } else {
            result += str[i]
        }
    }
    return result
}

// Examples
console.log(wumbo("I LOVE MAKING CHALLENGES")) // ➞ "I LOVE WAKING CHALLENGES"
console.log(wumbo("MEET ME IN WARSAW")) // ➞ "WEET WE IN WARSAW"
console.log(wumbo("WUMBOLOGY")) // ➞ "WUWBOLOGY"


//Q => 50 Many IDS (for emails or Google ID) are created using the person's name.

// Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

function createID(firstName, lastName) {
    return `${firstName[0].toLowerCase()}${lastName[0].toUpperCase()}${lastName.slice(1, 3).toLowerCase()}`;
}

function createID(firstName, lastName) {
    let res = "";
    res += firstName[0].toLowerCase();
    res += lastName[0].toUpperCase();
    res += lastName.slice(1, 3).toLowerCase();
    return res
}

// Examples
console.log(createID("mary", "lamb")) //➞ "mLam"
console.log(createID("John", "SMITH")) // ➞ "jSmi"
console.log(createID("mary", "smith")) // ➞ "mSmi"

function createID(firstName, lastName) {
    let id = firstName[0] + lastName.slice(0, 3);
    return id.toLowerCase()
}


//Q =>  51 A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.

// Create a function that takes a string and returns a string.

function toScottishScreaming(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            res += "E"
        } else {
            res += str[i].toUpperCase()
        }

    }
    return res
}

function toScottishScreaming(str) {
    return str.replace(/[aeiou]/gi, 'E').toUpperCase();
}

function toScottishScreaming(str) {
    return str.split('').map(char => {
        if ('aeiouAEIOU'.includes(char)) {
            return 'E';
        } else {
            return char.toUpperCase();
        }
    }).join('');
}
// Examples
console.log(toScottishScreaming("hello world")) // ➞ "HELLE WERLD"
console.log(toScottishScreaming("Mr. Fox was very naughty")) // ➞ "MR. FEX WES VERY NEEGHTY"
console.log(toScottishScreaming("Butterflies are beautiful!")) // ➞ "BETTERFLEES ERE BEEETEFEL!"


//Q => 52 Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

function filterArray(arr) {
    let res = arr.filter(item => typeof item === "number")
    return res
}

function filterArray(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            res.push(arr[i])
        }
    }
    return res
}

// Examples
console.log(filterArray([1, 2, 3, "a", "b", 4])) // ➞ [1, 2, 3, 4]
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])) // ➞ [0, 1729]
console.log(filterArray(["Nothing", "here"])) // ➞ []


// Q => 53 Create a function based on the input and output. Look at the examples, there is a pattern.

function secret(arg) {
    let [tag, count] = arg.split("*");
    let res = `<${tag}><${tag}>`
    return res.repeat(count)
}

function secret(str) {
    let [tag, count] = str.split("*")

    let res = ""
    for (let i = 0; i < count; i++) {
        res += `<${tag}></${tag}>`
    }
    return res
}


// Examples
console.log(secret("div*2")) // ➞ "<div></div><div></div>"
console.log(secret("p*1")) // ➞ "<p></p>"
console.log(secret("li*3")) // ➞ "<li></li><li></li><li></li>"


// Q =>  54 Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in Fahrenheit and Celsius.
// Notes
// The boiling point of water is 212F in Fahrenheit and 100C in Celsius.

function isBoiling(str) {
    if (str == "212F" || str == "100C") {
        return true
    }
    return false
}

// Examples
console.log(isBoiling("212F")) // ➞ true
console.log(isBoiling("100C")) // ➞ true
console.log(isBoiling("0F")) // ➞ false


// Q =>  55 Create a function that takes the length of the side of an equilateral triangle in centimeters and returns the height of the triangle in millimeters.
// Notes
// Return the answer rounded to one decimal place and in the format shown in the examples above.

function equilateralTriangleHeight(sideLength) {
    // Calculate the height in centimeters
    let heightInCm = (Math.sqrt(3) / 2) * sideLength;

    // Convert height to millimeters
    let heightInMm = heightInCm * 10;

    // Round to one decimal place
    heightInMm = heightInMm.toFixed(1);

    // Return the result
    return heightInMm + ' mm';
}

function height(length) {
    let height = Math.sqrt(3) * length / 2;
    return Math.round(height * 100) / 10; + "mm"
}
// Examples
console.log(height(2)) // ➞ 17.3 mm
console.log(height(5)) // ➞ 43.3 mm
console.log(height(6.2)) // ➞ 53.7 mm


// Q =>  56 Mubashir wants to remove numbers from a given string!

// Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

function removeNumbers(str) {
    return str.split('').filter(c => isNaN(c)).join("");
}

function removeNumbers(str) {
    let res = "";
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i])) {
            res += str[i];
        }
    }
    return res
}

// Examples
console.log(removeNumbers("mubashir1")) // ➞ "mubashir"
console.log(removeNumbers("12ma23tt")) // ➞ "matt"
console.log(removeNumbers("e1d2a3b4i5t6")) // ➞ "edabit"


// Q =>  57 Question)=> The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.


// Notes
// The keys will always be 1: 2: 3: in this order. Don't mistake keys with indexes.
// I'm rating the challenge very easy because it can be hardcoded but try to do it dynamically, that is, imagine tomorrow you receive an object with 4 keys instead, your function would still work.
// Check the Resources for tips if needed.
function repeatSecond(obj) {
    let values = Object.values(obj);
    let secondValue = values[1]
    let str = values.join(" ");
    let res = str + " " + secondValue

    return res
}

// Examples
console.log(repeatSecond({ 1: "Mommy", 2: "please", 3: "help" })) //➞ "Mommy please help please"
console.log(repeatSecond({ 1: "Me", 2: "innocent", 3: "is" })) //➞ "Me innocent is innocent"
console.log(repeatSecond({ 1: "Must", 2: "lawyer", 3: "call" })) //➞ "Must lawyer call lawyer"


//Q => 58 Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

function integerBoolean(int) {
    let res = [];
    for (let i = 0; i < int.length; i++) {
        res.push(Boolean(parseInt(int[i])))
    }
    return res
}

function integerBoolean(int) {
    return int.split('').map(Number).map(Boolean)
}

function integerBoolean(int) {
    return int.split("").map(item => item = Boolean(+item))
}


// Examples
console.log(integerBoolean("100101")) //  ➞ [true, false, false, true, false, true]
console.log(integerBoolean("10")) //  ➞ [true, false]
console.log(integerBoolean("001")) //  ➞ [false, false, true]


//Q => 59 You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments. Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.

function uploadCount(arr, str) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(str)) {
            res++
        }
    }
    return res
}

function uploadCount(arr, str) {
    return arr.filter(date => date.includes(str)).length;
}

function uploadCount(arr, str) {
    return arr.reduce((count, date) => date.includes(str) ? count + 1 : count, 0);
}

// Examples
console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept")) // ➞ 2
console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct")) //➞ 1


//Q => 60 Given a letter and an array of words, return whether the letter does not appear in any of the words.

function forbiddenLetter(letter, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(letter)) {
            return false
        }
    }
    return true
}

function forbiddenLetter(letter, arr) {
    return arr.every(word => !word.includes(letter))
}

// Examples
console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])) // ➞ false
console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])) // ➞ true
console.log(forbiddenLetter("m", [])) // ➞ true