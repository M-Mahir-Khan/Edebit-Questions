
//Q =>61 Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

function cleanUpArray(arr) {
    let even = [];
    let odd = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            even.push(+arr[i]);
        } else {
            odd.push(+arr[i]);
        }
    }
    return [even, odd]
}

function cleanUpArray(arr) {
    let even = [];
    let odd = [];
    arr.map(item => item % 2 === 0 ? even.push(+item) : odd.push(+item))
    return [even, odd]
}

// Examples
console.log(cleanUpArray(["8"])) // ➞ [[8], []]
console.log(cleanUpArray(["11"])) // ➞ [[], [11]]
console.log(cleanUpArray(["7", "4", "8"])) // ➞ [[4, 8], [7]]
console.log(cleanUpArray(["9", "4", "5", "8"])) // ➞ [[4, 8], [9, 5]]

//Q =>62 Create a function that takes two numbers and a mathematical operator and returns the result.

function calculate(num1, num2, op) {
    let res = eval(`${num1}${op}${num2}`)
    return res
}

function calculate(num1, num2, op) {
    if (op === '+') {
        return num1 + num2;
    } else if (op === '-') {
        return num1 - num2;
    } else if (op === '*') {
        return num1 * num2;
    } else if (op === '/') {
        return num1 / num2;
    } else if (op === "%") {
        return num1 % num2;
    }
}

// Examples
console.log(calculate(4, 9, "+")) //➞ 13
console.log(calculate(12, 5, "-")) // ➞ 7
console.log(calculate(6, 3, "*")) //➞ 18
console.log(calculate(25, 5, "/")) // ➞ 5
console.log(calculate(14, 3, "%")) // ➞ 2


//Q =>63 Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

// Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

function keyboardMistakes(str) {
    let arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "4") {
            arr[i] = "A";
        } else if (arr[i] === "5") {
            arr[i] = "S";
        } else if (arr[i] === "0") {
            arr[i] = "O"
        } else if (arr[i] === "1") {
            arr[i] = "I"
        }
    }

    return arr.join("")
}

function keyboardMistakes(str) {
    str = str.replace(/4/g, "A")
    str = str.replace(/5/g, "S")
    str = str.replace(/0/g, "O")
    str = str.replace(/1/g, "I")

    return str
}

// Examples
console.log(keyboardMistakes("MUB45H1R")) // ➞ "MUBASHIR"
console.log(keyboardMistakes("DUBL1N")) // ➞ "DUBLIN"
console.log(keyboardMistakes("51NG4P0RE")) // ➞ "SINGAPORE"


//Q =>64 Create a function that returns the last value of the last item in an array or string.
// Notes

function lastItem(input) {
    if (typeof input === "string") {
        return input.slice(-1)
    }
    return input[input.length - 1]
}

// Arrays/strings will be of varying size.
// Return undefined if array/string is empty.
// Examples
console.log(lastItem([0, 4, 19, 34, 50, -9, 2])) // ➞ 2
console.log(lastItem("The quick brown fox jumped over the lazy dog")) // ➞ "g"
console.log(lastItem([])) // ➞ undefined


//Q =>65 Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.

function evenOddString(str) {
    let even = "";
    let odd = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            even += str[i]
        } else {
            odd += str[i]
        }
    }
    return even + " " + odd
}


function evenOddString(str) {
    let even = "";
    let odd = "";

    str.split("").map((item, index) => index % 2 === 0 ? even += item : odd += item)
    return even + " " + odd

}

// Examples
console.log(evenOddString("mubashir")) //  ➞ "mbsi uahr"
// Letters at even indexes = "mbsi"
// Letters at odd indexes = "uahr"
// Join both strings with a space

console.log(evenOddString("edabit")) //  ➞ "eai dbt"

console.log(evenOddString("airforce")) //  ➞ "aroc ifre"


//Q =>66 In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

function arithmeticProgression(start, diff, n) {
    let result = "";
    for (let i = 0; i < n; i++) {
        result += start + diff * i + ", "
    }
    return result
}

function arithmeticProgression(start, diff, n) {
    let result = `${start}, `;
    for (let i = 0; i < n - 1; i++) {
        start += diff;
        result += `${start}, `
    }
    return result
}

// Examples
console.log(arithmeticProgression(1, 2, 5)) // ➞ "1, 3, 5, 7, 9"
console.log(arithmeticProgression(1, 0, 5)) // ➞ "1, 1, 1, 1, 1"
console.log(arithmeticProgression(1, -3, 10)) // ➞ "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"


//Q =>67 Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.

function longestString(str1, str2) {
    let combinedStr = str1 + str2;

    let uniqueStr = new Set(combinedStr);
    let arr = Array.from(uniqueStr).sort();
    return arr.join("")
}

// Examples
str1 = "mubashir"
str2 = "edabit"

console.log(longestString(str1, str2)) // ➞ "abdehimrstu"
// Contains sorted and distinct letters of the given strings.

str1 = "abcdefghijklmnopqrstuvwxyz"
str2 = "abcdefghijklmnopqrstuvwxyz"

console.log(longestString(str1, str2)) // ➞ "abcdefghijklmnopqrstuvwxyz"
// Contains sorted and distinct letters of the given strings.


//Q =>68 Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

function countCharacters(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += arr[i].length;
    }
    return count
}

function countCharacters(arr) {
    let count = 0;
    arr.map(item => count += item.length);
    return count
}

function countCharacters(arr) {
    let res = arr.reduce((acc, curr) => acc + curr.length, 0)
    return res
}

// Examples
console.log(countCharacters([
    "###",
    "###",
    "###"
])) // ➞ 9

console.log(countCharacters([
    "22222222",
    "22222222",
])) // ➞ 16

console.log(countCharacters([
    "------------------"
])) // ➞ 18

console.log(countCharacters([])) // ➞ 0

console.log(countCharacters(["", ""])) // ➞ 0



//Q =>69 Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than his opponent in a gun standoff.

// Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".

function showdown(p1, p2) {
    let p1Position = p1.indexOf("Bang!");
    let p2Position = p2.indexOf("Bang!");

    if (p1Position < p2Position) {
        return "p1"
    } else if (p1Position > p2Position) {
        return "p2"
    } else {
        return "tie"
    }
}


function showdown(p1, p2) {
    let p1Position = p1.trimStart().length;
    let p2Position = p2.trimStart().length;

    if (p1Position < p2Position) {
        return "p1";
    } else if (p1Position > p2Position) {
        return "p2";
    } else {
        return "tie";
    }
}

// Examples
console.log(showdown(
    "   Bang!        ",
    "        Bang!   "
)) // ➞ "p1"

// p1 draws his gun sooner than p2

console.log(showdown(
    "               Bang! ",
    "             Bang!   "
)) // ➞ "p2"

console.log(showdown(
    "     Bang!   ",
    "     Bang!   "
)) // ➞ "tie"

// Q =>70 Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

function owofied(str) {
    let newStr = str.replace(/i/g, "wi").replace(/e/g, "we");
    return newStr + " owo"
}

function owofied(str) {
    let arr = str.split("")
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "i") {
            arr[i] = "wi"
        } else if (arr[i] === "e") {
            arr[i] = "we"
        }
    }
    return arr.join("") + " owo"
}

// Examples
console.log(owofied("I'm gonna ride 'til I can't no more")
) // ➞ "I'm gonna rwidwe 'twil I can't no morwe owo"

console.log(owofied("Do you ever feel like a plastic bag")
) // ➞ "Do you wevwer fwewel lwikwe a plastwic bag owo"

console.log(owofied("Cause baby you're a firework")
) // ➞ "Causwe baby you'rwe a fwirwework owo"


//Q=> 71 Edabit allows for markdown formatting, meaning that it's possible to format words by surrounding text with special characters. For example, to get bold text, you surround the text with double asterisks, like this **bold**.

// Here is a list of the possible formatting options in Edabit and how to apply them:

// **bold**
// _italics_
// `inline code`
// ~~strikethrough~~
// Challenge
// Given a string and a style character, return the newly formatted string. Style characters are single letters that represent the different types of formatting.

// For the purposes of this challenge, the style characters are as follows:

// "b" is for bold
// "i" is for italics
// "c" is for inline code
// "s" is for strikethrough

function mdFormat(word, style) {
    if (style === "b") {
        return `**${word}**`
    } else if (style === "i") {
        return `_${word}_`
    } else if (style === "c") {
        return `\`${word}\``
    } else if (style === "s") {
        return `--${word}--`
    }
}

// Examples
console.log(mdFormat("Bold", "b")) // ➞ "**Bold**"
console.log(mdFormat("leaning text", "i")) // ➞ "_leaning text_"
console.log(mdFormat("Edabit", "c")) // ➞ "`Edabit`"
console.log(mdFormat("That's a strike!", "s")) // ➞ "~~That's a strike!~~"



//Q => 72 Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.

function stupidAddition(a, b) {
    if (typeof a !== typeof b) {
        return null
    } else if (typeof a === "number" && typeof b === "number") {
        return String(a) + String(b)
    } else if (typeof a === "string" && typeof b === "string") {
        return Number(a) + Number(b)
    }
}

// Examples
console.log(stupidAddition(1, 2)) // ➞ "12"
console.log(stupidAddition("1", "2")) // ➞ 3
console.log(stupidAddition("1", 2)) // ➞ null