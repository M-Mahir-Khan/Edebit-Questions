// Q => 21  Create a function that returns true if a string contains any spaces.

function hasSpaces(str){
    return str.includes(" ")
}

function hasSpaces(str){
    for(let i = 0 ; i< str.length; i++){
        if(str[i] === " "){
            return true
        }
    }
    return false
}



// Examples
console.log(hasSpaces("hello")) // ➞ false
console.log(hasSpaces("hello, world")) // ➞ true
console.log(hasSpaces(" ")) // ➞ true
console.log(hasSpaces("")) // ➞ false
console.log(hasSpaces(",./!@#")) // ➞ false


//Q=> 22 Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

function isLastCharacterN(str){
    return str[str.length -1] === "n"
}

// Examples
console.log(isLastCharacterN("Aiden")) // ➞ true
console.log(isLastCharacterN("Piet") ) //➞ false
console.log(isLastCharacterN("Bert") ) //➞ false
console.log(isLastCharacterN("Dean") ) //➞ true


//Q=> 23 Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
function relationToLuke(str){
    switch (str){
        case "Darth Vader":
            return `Luke, I am your father.`
        case "Leia":
            return `Luke, I am your sister.`
        case "Han":
            return `Luke, I am your brother in law.`
        case "R202":
            return `Luke, I am your droid.`

    }
}

// Examples
console.log(relationToLuke("Darth Vader")) // ➞ "Luke, I am your father."
console.log(relationToLuke("Leia")) // ➞ "Luke, I am your sister."
console.log(relationToLuke("Han")) // ➞ "Luke, I am your brother in law."


//Q=> 24 Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

function frontThree(str){
    return str.slice(0,3).repeat(3)
}

function frontThree(str){
    let res = ""
    for(let i = 0; i < 3; i++){
        res += str[i]
    }
    return res.repeat(3)
}

// Examples
console.log(frontThree("Python")) // ➞ "PytPytPyt"
console.log(frontThree("Cucumber")) // ➞ "CucCucCuc"
console.log(frontThree("bioshock")) // ➞ "biobiobio"

//Q => 25 Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

function cityFacts(obj){
    return `${obj.name} has a population of ${obj.population} and is situated in ${obj}`
}

// Examples
console.log(cityFacts({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
})) //  ➞ "Paris has a population of 2,140,526 and is situated in Europe"

console.log(cityFacts({
  name: "Tokyo",
  population: "13,929,286",
  continent: "Asia"
})) //  ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"

//Q => 26 Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

function isPlural(str){
    return str.endsWith("s")
}

function isPlural(str){
    return str.slice(-1) === "s"
}

// Examples
console.log(isPlural("changes")) //➞ true
console.log(isPlural("change")) //➞ false
console.log(isPlural("dudes")) //➞ true
console.log(isPlural("magic")) //➞ false


//Q => 27 Create a function that takes a string and returns the concatenated first and last character.

function firstLast(str){
    return str[0] + str[str.length - 1]
}

function firstLast(str){
    return `${str[0]}${str.slice(-1)}`
}

// Examples
console.log(firstLast("ganesh")) // ➞ "gh"
console.log(firstLast("kali")) // ➞ "ki"
console.log(firstLast("shiva")) // ➞ "sa"
console.log(firstLast("vishnu")) // ➞ "vu"
console.log(firstLast("durga")) // ➞ "da"

//Q => 28 Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

function stutter(str){
    return `${str.slice(0,2)}... ${str.slice(0,2)}... ${str}?`
}

// Examples
console.log(stutter("incredible")) //  ➞ "in... in... incredible?"
console.log(stutter("enthusiastic")) //  ➞ "en... en... enthusiastic?"
console.log(stutter("outstanding")) //  ➞ "ou... ou... outstanding?"


//Q => 29 Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// Example:
// ["1", "3", "3.6"] ➞ [1, 3, 3.6]

function toNumberArray(arr){
    for(let i = 0 ; i < arr.length; i++){
        arr[i] = Number(arr[i])
    }
    return arr
}

function toNumberArray(arr){
    return arr.map(Number)
}

// Examples
console.log(toNumberArray(["9.4", "4.2"])) //  ➞ [9.4, 4.2]
console.log(toNumberArray(["91", "44"])) //  ➞ [91, 44]
console.log(toNumberArray(["9.5", "8.8"])) //  ➞ [9.5, 8.8]

//Q => 30 Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

function greaterThanOne(frac){
    return eval(frac) > 1
}

// Examples
console.log(greaterThanOne("1/2")) // ➞ false
console.log(greaterThanOne("7/4")) // ➞ true
console.log(greaterThanOne("10/10")) // ➞ false

//Q => 31 Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".

function moodToday(mood){
    if(mood === undefined){
        return "Today, I am feeling neutral"
    }
    return `Today, I am feeling ${mood}`
}

// Examples
console.log(moodToday("happy")) // ➞ "Today, I am feeling happy"
console.log(moodToday("sad")) // ➞ "Today, I am feeling sad"
console.log(moodToday()) // ➞ "Today, I am feeling neutral"

//Q => 32 Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).

function countSyllables(str){
    return str.length / 2
}

function countSyllables(str) {
    let count = 0;
    for (let i = 0; i < str.length; i += 2) {
        count++;
    }
    return count;
}

// Examples
console.log(countSyllables("Hehehehehehe")) // ➞ 6
console.log(countSyllables("bobobobobobobobo")) // ➞ 8
console.log(countSyllables("NANANA")) // ➞ 3

// Q => 33 Create a function that returns the ASCII value of the passed in character.
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.


function ctoa(char) {
    return char.charCodeAt(0);
}

// Examples
// console.log(ctoa("A")) //➞ 65
// console.log(ctoa("m")) //➞ 109
// console.log(ctoa("[")) //➞ 91
// console.log(ctoa("/")) //➞ 47

// Q=> 34 For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

function reversePsychology(str = "do anything"){
    return "Do not " + str
}

function reversePsychology(str = "do anything"){
    return "Do not ".concat(str)
}

// Examples
console.log(reversePsychology("wash the dishes")) //➞ "Do not wash the dishes."
console.log(reversePsychology("eat your lunch")) //➞ "Do not eat your lunch."
console.log(reversePsychology("go to school")) //➞ "Do not go to school."

// Q=>35 Write a function that validates whether two strings are identical. Make it case insensitive.

function match(str1,str2){
    let res = str1.toLowerCase() === str2.toLowerCase()
    return res
}

// Examples
console.log(match("hello", "hELLo")) //➞ true
console.log(match("motive", "emotive")) //➞ false
console.log(match("venom", "VENOM")) //➞ true
console.log(match("mask", "mAskinG")) //➞ false

//Q => 36 Create a function that takes a string txt and a number n and returns the repeated string n number of times.

// If given argument txt is not a string, return Not A String !!

function repeatString(txt,n){
    if(typeof txt !== "string"){
        return "Not A String !!"
    }

    return txt.repeat(n)
}

function repeatString(txt,n){
    if(typeof txt !== "string"){
        return "Not A String !!"
    }

   for(let i = 1 ; i < n; i++){
    txt += txt
   }
   return txt
}

// Examples
console.log(repeatString("Mubashir", 2)) // ➞ "MubashirMubashir"
console.log(repeatString("Matt", 3)) // ➞ "MattMattMatt"
console.log(repeatString(1990, 7)) // ➞ "Not A String !!"


//Q => 37 Create a function that checks if the argument is an integer or a string. Return "int" if it's an integer and "str" if it's a string.

function intOrString(arg){
    if(typeof arg === "number"){
        return "int"
    }
    return "str"
}

// Examples
console.log(intOrString(8)) // ➞ "int"
console.log(intOrString("Hello")) // ➞ "str"
console.log(intOrString(9843532)) // ➞ "int"

//Q => 38 Write a function that takes an integer and:

// If the number is a multiple of 3, return "Hello".
// If the number is a multiple of 5, return "World".
// If the number is a multiple of both 3 and 5, return "Hello World".

function helloWorld(num){
    if(num % 3 === 0 && num % 5 === 0){
        return "Hello World"
    }else if(num % 5 === 0){
        return "World"
    }else if(num % 3 === 0){
        return "Hello"
    }
}

// Examples
console.log(helloWorld(3)) // ➞ "Hello"
console.log(helloWorld(5)) // ➞ "World"
console.log(helloWorld(15)) // ➞ "Hello World"


//Q => 39 Write two functions:

// toInt() : A function to convert a string to an integer.
// toStr() : A function to convert an integer to a string.

function toInt(str){
    return parseInt(str)
}

function toStr(int){
    return int.toString()
}

// Examples
console.log(toInt("77")) // ➞ 77
console.log(toInt("532")) // ➞ 532
console.log(toStr(77)) // ➞ "77"
console.log(toStr(532)) // ➞ "532"


//Q => 40 Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.
// Notes
// Expect num to always be >= 1.
// Remember to use a capital "B".
// Don't forget to return the result.

function longBurp(num){
    let burp = "Bu"
    for(let i = 0; i < num; i++){
        burp += "r"
    }
    return burp + "p"
}

function longBurp(num){
    return "Bu" + "r".repeat(num) + "p"
}

// Examples
console.log(longBurp(3)) // ➞ "Burrrp"
console.log(longBurp(5)) // ➞ "Burrrrrp"
console.log(longBurp(9)) // ➞ "Burrrrrrrrrp"


//Q => 41 Create a function that takes a string and returns a string with spaces in between all of the characters.

function spaceMeOut(str){
    let arr = str.split("")
    let result = ""
    for(let i = 0; i < arr.length; i++){
        result += arr[i] + " "
    }
    return result
}

function spaceMeOut(str){
    return str.split("").join(" ")
}


// Examples
console.log(spaceMeOut("space")) // ➞ "s p a c e"
console.log(spaceMeOut("far out")) // ➞ "f a r   o u t"
console.log(spaceMeOut("elongated musk")) // ➞ "e l o n g a t e d   m u s k"



//q => 42 Create a function which makes the last character of a string repeat n number of times.

function modifyLast(str,n){
    let res = str + str[str.length -1].repeat(n-1)
    return res
}

function modifyLast(str,n){
    let last = str[str.length - 1];
    for(let i = 1; i < n; i++){
        str += last
    }
    return str
}

// Examples
console.log(modifyLast("Hello", 3)) // ➞ "Hellooo"
console.log(modifyLast("hey", 6)) // ➞ "heyyyyyy"
console.log(modifyLast("excuse me what?", 5)) // ➞ "excuse me what?????"


//Q => 43 Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

function amazingEdabit(str){
    if(str.includes("edabit")){
        return str
    }

    return str.replace("amazing","not amazing")
}

// Examples
console.log(amazingEdabit("edabit is amazing.")) // ➞ "edabit is amazing."
console.log(amazingEdabit("Mubashir is amazing.")) // ➞ "Mubashir is not amazing."
console.log(amazingEdabit("Infinity is amazing.")) // ➞ "Infinity is not amazing."

//Q => 44 Create a class that takes the following four arguments for a particular football player:

// name
// age
// height
// weight
// Also, create three functions for the class that returns the following strings:

// getAge() returns "name is age age"
// getHeight() returns "name is heightcm"
// getWeight() returns "name weighs weightkg"

class Player {
    constructor(name,age,height,weight){
        this.name = name;
        this.age = age;
        this.height = height;
        this.weight = weight;
    }

    getAge(){
        console.log(`${this.name} is age ${this.age}`);
    }

    getHeight(){
        console.log(`${this.name} is ${this.height}cm`);
    }

    getWeight(){
        console.log(`${this.name} weighs ${this.weight}kg`);
    }
}


// Examples
 p1 = new Player("David Jones", 25, 175, 75)

 p1.getAge()// ➞ "David Jones is age 25"
 p1.getHeight()// ➞ "David Jones is 175cm"
 p1.getWeight()// ➞ "David Jones weighs 75kg"


// Q =>45 After an amazing performance, the crowd goes wild! People clap enthusiastically and most claps overlap with each other to create one homogeneous sound.

// An overlapped clap is a clap which starts but doesn't finish, as in "ClaClap" (The first clap is cut short and there are overall 2 claps)

// Given a string of what the overlapping claps sounded like, return how many claps were made in total.

function countClaps(str){
    let res = 0;
    for(let i = 0; i < str.length; i++){
        str[i] == "C" ? res +=1 : i
    }
    return res
}

// Examples
console.log(countClaps("ClaClaClaClap!")) // ➞ 4
console.log(countClaps("ClClClaClaClaClap!")) // ➞ 6
console.log(countClaps("CCClaClClap!Clap!ClClClap!")) // ➞ 9