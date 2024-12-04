//Q => 1 Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

function getVoteCount({ upvotes, downvotes }) {
    return upvotes - downvotes
}



// Examples
console.log(getVoteCount({ upvotes: 13, downvotes: 0 })) // ➞ 13
console.log(getVoteCount({ upvotes: 2, downvotes: 33 })) // ➞ -31
console.log(getVoteCount({ upvotes: 132, downvotes: 132 })) // ➞ 0

//Q => 2 The police send you an electronic statement for you to sign. As you begin to sign, an error pops up. Apparently, they sent you a protected document.

// This challenge is a bit different as the function you are given already contains some code that you should not change or remove. Also, don't do a return statement, it is already included. Your task is, given an object, prevent changes to that object.

// Examples
const obj = { noChanges: true }

function preventChanges(obj) {
    Object.freeze(obj)
    obj.noChanges = false;
    obj.signature = "whatever"
    return obj;
}

console.log(preventChanges(obj));
// ➞ { noChanges: true }

// obj.signature = "whatever";
// console.log(obj);


//Q => 3 Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
// Notes
// Don't forget to return the result.
// Remember that the values are in an object.
// Volume is length * width * height.

function volumeOfBox(obj) {
    let volume = obj.width * obj.length * obj.height
    return volume
}


// Examples
console.log(volumeOfBox({ width: 2, length: 5, height: 1 })) //  ➞ 10
console.log(volumeOfBox({ width: 4, length: 2, height: 2 })) //  ➞ 16
console.log(volumeOfBox({ width: 2, length: 3, height: 5 })) //  ➞ 30


//Q => 4 The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.

function fiftyThirtyTwenty(ati) {
    let obj = {
        Needs: ati * 0.5,
        Wants: ati * 0.3,
        Savings: ati * 0.2
    }
    return obj
}

// Examples
console.log(fiftyThirtyTwenty(10000)) // ➞ { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
console.log(fiftyThirtyTwenty(50000)) // ➞ { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
console.log(fiftyThirtyTwenty(13450)) // ➞ { "Needs": 6725, "Wants": 4035, "Savings": 2690 }


//Q => 5 Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid

function relationToLuke(person) {
    const obj = {
        "Darth Vader": "Luke, I am your father",
        "Leia": "Luke, I am your sister",
        "Han": "Luke I am your brother in law",
        "R2D2": "Luke, I am your droid"
    }
    return obj[person]
}
// Examples
console.log(relationToLuke("Darth Vader")) // ➞ "Luke, I am your father."
console.log(relationToLuke("Leia")) // ➞ "Luke, I am your sister."
console.log(relationToLuke("Han")) // ➞ "Luke, I am your brother in law."


//Q => 6 Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

function cityFacts(obj) {
    let res = `${obj.name} has a population of ${obj.population} and is situated in ${obj.continent}`
    return res
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



//Q => 7 You can assign variables from arrays like this:

var arr = [1, 2, 3, 4, 5, 6, 7, 8]
// first = arr[0]
// second = arr[1]
// third = arr[2]
// other = arr.slice(3)
{
let [one, two, third, ...other] = arr;
console.log(one)
console.log(two)
console.log(third)
console.log(other)
}
// ➞ outputs 1
// ➞ outputs 2
// ➞ outputs 3
// ➞ outputs [4, 5, 6, 7, 8]

//Q => 8 However, this is long and tedious. Instead, we can use Object Destructuring to create all those variables in one line. Your task: Create variables first, second, third and other from the given array using Destructuring Assignment (check the Resources tab for some examples).


// first ➞ 1
// second ➞ 2
// third ➞ 3
// other ➞ [4, 5, 6, 7, 8]
// Your task is to unpack the arr writeyourcodehere into four variables, first, second, third, and other.


//Q =>9 You call your spouse in anger and a "little" argument takes place. Count the total amount of insults used. Given an object of insults, return the total amount of insults used.

function totalAmountAdjectives(obj) {
    return Object.values(obj).length
}

// Examples
console.log(totalAmountAdjectives({ a: "moron" })) // ➞ 1
console.log(totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" })) // ➞ 3
console.log(totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" })) // ➞ 4




// Q => 10 Using basic object destructuring you can assign variables name and email:

let { name, email } = { name: "John", email: "john@example.com" }

console.log(name)  // "John"
console.log(email)  // "john@example.com"

// What if there were more properties but you didn't want to write variables for all of them and just wanted to stick them into another object and do something like this:

let { name1, email2, ...rest } = { name1: "John", email2: "john@example.com", city: "Phoenix", state: "AZ", country: "USA" }

// rest === { city: "Phoenix", state: "AZ", country: "USA" }

console.log(rest);
// true

// There is something you have to do with the variable name rest in order to assign it an object containing the rest of the object properties. You can find out how in the MDN docs in the Resources tab.

//Q =>11  Use the rest syntax to change the code so that rest = {city: "Phoenix", state: "AZ", address: "USA"}. Only edit the left side of the assignment { name, email, rest }. Ignore the .toString() function (used for validation).


const obj1 = { two: 2 }

var { one = 1, two } = obj1;

console.log(one) // outputs undefined
// Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).


//Q => 12 Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

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

function nSidedShape(num) {
    let obj = {
        1:"circle",
        2:"semi-circle",
        3:"triangle",
        4:"square",
        5:"pentagon",
        6:"hexagon",
        7:"heptagon",
        8:"octagon",
        9:"nonagon",
        10:"decagon"
    }
    return obj[num]
}

// Examples
console.log(nSidedShape(3)) // ➞ "triangle"
console.log(nSidedShape(1)) // ➞ "circle"
console.log(nSidedShape(9)) // ➞ "nonagon"


//Q =>13 Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.


// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.

function determineLever(arr) {
    // Check the positions of "f", "e", and "l" in the array
    const fulcrumIndex = arr.indexOf("f");
    const effortIndex = arr.indexOf("e");
    const loadIndex = arr.indexOf("l");

    // Determine the type of lever based on the positions
    if (fulcrumIndex === 1) {
        return "first class lever";
    } else if (fulcrumIndex === 2) {
        return "second class lever";
    } else if (fulcrumIndex === 0) {
        return "third class lever";
    } else {
        return "Invalid input";
    }
}

// Examples
console.log(determineLever(["e", "f", "l"]))// ➞ "first class lever"
console.log(determineLever(["e", "l", "f"]))// ➞ "second class lever"
console.log(determineLever(["f", "e", "l"]))// ➞ "third class lever"



//Q =>14 Create a class that takes the following four arguments for a particular football player:

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
        console.log(`${this.name} is ${this.weight}kg`);
    }
}

// Examples
 p1 = new Player("David Jones", 25, 175, 75)

 p1.getAge() //➞ "David Jones is age 25"
 p1.getHeight() //➞ "David Jones is 175cm"
 p1.getWeight() //➞ "David Jones weighs 75kg"


//Q =>15  Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive).

function isInRange(num, {min,max}){
    if(num >= min && num <= max){
        return true
    }
    return false
}

// Examples
console.log(isInRange(4, { min: 0, max: 5 })) // ➞ true
console.log(isInRange(4, { min: 4, max: 5 })) // ➞ true
console.log(isInRange(4, { min: 6, max: 10 })) // ➞ false
console.log(isInRange(5, { min: 5, max: 5 })) // ➞ true


//Q =>16 Your spouse wants a copy of the stolen items. Given an object containing the stolen items, return a copy of that list.

function makeCopy(obj){
    return {...obj}
}

function makeCopy(obj){
    return Object.assign({},obj)
}

// Examples
console.log(makeCopy({ piano: 100, tv: 50 })) // ➞ { piano: 100, tv: 50 }


//Q =>17 Given a set containing an element, return the sole element.

function elementSet(set){
    return set.values().next().value
}

function elementSet(set){
    for(let item of set){
        return item
    }
}

// Examples
const first = new Set();
first.add(1); 
console.log(elementSet(first) ) //➞ 1

const second = new Set();
second.add("apple"); 
console.log(elementSet(second)) // ➞ "apple"

const third  = new Set();
third.add(false); 
console.log(elementSet(third) ) //➞ false


//Q =>18 The insurance guy calls again. Apparently, they were informed by your spouse that some items were not stolen at all and you failed to mention this detail to them. This is a fraud attempt! You freeze and mumble something unintelligible. Find out what you said.

// Given an object, return a string that concatenates all the values and adds the 2nd key at the end. Make sure you keep an empty space between them but not at the beginning or end of the string. Look at the examples for a clearer picture.

function sayWhat(obj){
    let value = Object.values(obj)
    let str = value.join(" ")
    return `${str} ${value[1]}`
}



// Examples
console.log(sayWhat({ 1: "Mommy", 2: "please", 3: "help" })) //  ➞ "Mommy please help please"
console.log(sayWhat({ 1: "Me", 2: "innocent", 3: "is" })) //  ➞ "Me innocent is innocent"
console.log(sayWhat({ 1: "Must", 2: "lawyer", 3: "call" })) //  ➞ "Must lawyer call lawyer"


//Q =>19 Write your own version of the lodash _.isEqual function using vanilla JavaScript (so, no external libraries - namely, lodash; don't import it). isEqual performs a deep comparison between two values to determine if they are equal. You can use it to compare arrays, booleans, dates, objects, sets, regexs, and typed arrays.

// This is used as a helper function for many more advanced lodash functions in instances where comparison between objects or arrays is needed, but regular JavaScript comparison is too strict.

// Arguments
// value (can be anything): The first value to compare.
// other (can be anything): The other value to compare against.
// returns: (boolean): Returns true if they are the same, otherwise false.

function isEqual(obj,other){
    return JSON.stringify(obj) === JSON.stringify(other)
    
}

// Examples
// const objects =
var object = { "a": 1 }
var other = { "a": 1 }
console.log(isEqual(object, other))
// returns true
// object === other
// returns false


//Q =>20 There has been a masterdata issue which affected the unit of measure of the products. All values need to be checked if they are valid. The unit of measure is valid when it izs either "L" (liters), "PCE" (pieces) OR when the product has a comment.

// The return value should be a Boolean.

function hasValidUnitOfMeasure(product){
    const validUnites = ["L","PCE"];

    if(validUnites.includes(product.unitOfMeasure)){
        return true
    }

    if(product.comment){
        return true
    }

    return false
}

// Expected results
console.log(hasValidUnitOfMeasure({ "product": "Milk", unitOfMeasure: "L" })) // ➞ true
console.log(hasValidUnitOfMeasure({ "product": "Cereals", unitOfMeasure: "" })) // ➞ false
console.log(hasValidUnitOfMeasure({ "product": "Beer", unitOfMeasure: false })) // ➞ false
console.log(hasValidUnitOfMeasure({ "product": "Beef", unitOfMeasure: "Cow" })) // ➞ false

{


//Q =>21 var { one, two } = obj
// We can assign variables by the same name properties of objects, but what if I wanted to assign obj.one to a different name like anotherOne?

// Use ES6 object destructuring to assign obj.one to the variable anotherOne. Variable two needs to remain assigned to obj.two. Ignore the .toString() function (used for validation).

const obj2 =  { one : 1, two : 2 }

const {one:anotherOne ,two} = obj2
console.log(anotherOne);
console.log(obj2);
console.log(two);
}


//Q =>22 Write a function that returns true if a hash contains the specified key, and false otherwise.

function hasKey(obj,key){
    return key in obj
}

function hasKey(obj,key){
    return obj.hasOwnProperty(key)
}

function hasKey(obj,key){
    return Object.keys(obj).includes(key)
}

// Examples
console.log(hasKey({ a: 44, b: 45, c: 46 }, "d")) // ➞ false
console.log(hasKey({ craves: true, midnight: true, snack: true }, "morning")) // ➞ false
console.log(hasKey({ pot: 1, tot: 2, not: 3 }, "not")) // ➞ true


//Q =>23 In JavaScript, you can do basic object assignment like this:
// {
// const obj =  { one : 1, two : 2 }

// ({one,two}) = obj
// console.log(one); // 1
// console.log(two); // 2
// }


// let one = obj.one
// let two = obj.two
// However, with ES6 you can assign the variables in a much more succinct way. Use ES6 object destructuring to assign variables one and two to obj.one and obj.two respectively.

// Although you can use let, var, or const for assignment, DO NOT use these in this challenge.

// Notes
// Ignore the backticks `` (used for validation).
// Ignore the .toString() function (used for validation).
// Replace the commented part of the first line with proper, left-side part of the solution.



//Q =>24 Given a class for a BasicPlan, write the classes for StandardPlan and PremiumPlan which have class properties of the following:

// BasicPlan	StandardPlan	PremiumPlan
// ✓	✓	✓	canStream
// ✓	✓	✓	canDownload
// ✓	✓	✓	hasSD
//      ✓	✓	hasHD
//          ✓	hasUHD
// 1	2	4	numOfDevices
// $8.99	$12.99	$15.99	price


class BasicPlan {
	static canStream = true;
	static canDownload = true;
	static numOfDevices = 1;
	static hasSD = true;
	static hasHD = false;
	static hasUHD = false;
	static price = '$8.99';
}

//Q => 25 Write the classes for StandardPlan and PremiumPlan here!

class StandardPlan extends BasicPlan{
    static hasHD = false;
    static numOfDevices = 2;
    static price = '$12.99'
}

class PremiumPlan extends StandardPlan{
    static hasUHD = true;
    static numOfDevices = 4;
    static price = '$15.99'
}

// Examples
console.log(BasicPlan.hasSD); // true
console.log(PremiumPlan.hasSD); // true
console.log(BasicPlan.hasUHD); // false
console.log(BasicPlan.price); // '$8.99'
console.log(PremiumPlan.numOfDevices); // 4



//Q => 26 You work for a manufacturer, and have been asked to calculate the total profit made on the sales of a product. You are given an object containing the cost price per unit (in dollars), sell price per unit (in dollars), and the starting inventory. Return the total profit made, rounded to the nearest dollar.


function profit(info){
    let productSalePrice = info.sellPrice * info.inventory;
    let productCostPrice = info.costPrice * info.inventory;

    let profit = productSalePrice - productCostPrice
    return Math.round(profit)

}

function profit({ costPrice, sellPrice, inventory }) {
    const totalCost = costPrice * inventory;
    const totalSales = sellPrice * inventory;
    const totalProfit = totalSales - totalCost;
    return Math.round(totalProfit);
}

// Examples
console.log(profit({
  costPrice: 32.67,
  sellPrice: 45.00,
  inventory: 1200
})) // ➞ 14796

console.log(profit({
  costPrice: 225.89,
  sellPrice: 550.00,
  inventory: 100
})) // ➞ 32411

console.log(profit({
  costPrice: 2.77,
  sellPrice: 7.95,
  inventory: 8500
})) // ➞ 44030
// Notes
// Assume all inventory has been sold.
// Profit = Total Sales - Total Cost


//Q => 27 Write a function that returns true if an object is empty, and false otherwise.

function isEmpty(obj){
    return Object.keys(obj).length === 0;
}

function isEmpty(obj){
    for(let key in obj){
        return false
    }
    return true
}

function isEmpty(obj){
    return Object.entries(obj).length === 0;
}

// Examples
console.log(isEmpty({})) // ➞ true

console.log(isEmpty({ a: 1 })) // ➞ false