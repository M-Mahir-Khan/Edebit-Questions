//101 Create a function that goes through the array, incrementing (+1) for each odd-valued number and decrementing (-1) for each even-valued number.

function transform(arr){
    let res = arr.map(item => item % 2 === 0 ? item -1 : item +1)
    return res
}

function transform(arr){
    let res = [];
    for(let i = 0 ; i< arr.length ; i++){
        res.push(arr[i] % 2 === 0 ? arr[i] -1 : arr[i] + 1)
    }
    return res
}

function transform(arr){
    return arr.reduce((acc, num)=> {
        if(num  % 2 ===0 ){
            acc.push(num -1)
        }
        else{
            acc.push(num + 1)
        }
        return acc
    },[])

}

// Examples
console.log(transform([1, 2, 3, 4, 5])) // ➞ [2, 1, 4, 3, 6]
console.log(transform([3, 3, 4, 3])) // ➞ [4, 4, 3, 4]
console.log(transform([2, 2, 0, 8, 10])) // ➞ [1, 1, -1, 7, 9]

//102 Create a function that applies a discount d to every number in the array.

function consolegetDiscounts(arr,discount){
    let discountDecimal = parseFloat(discount) / 100;
    let res = arr.map(num => num * discountDecimal);
    return res
}

function consolegetDiscounts(arr,discount){
    let res = [];
    let discountDecimal = parseFloat(discount) / 100;
    for(let i = 0 ; i < arr.length; i++){
        res.push(arr[i] * discountDecimal)
    }
    return res
}

// Examples
console.log(consolegetDiscounts([2, 4, 6, 11], "50%")) //  ➞ [1, 2, 3, 5.5]
console.log(consolegetDiscounts([10, 20, 40, 80], "75%")) //  ➞ [7.5, 15, 30, 60]
console.log(consolegetDiscounts([100], "45%")) //  ➞ [45]

//103 Create a function that filters out an array of state names into two categories based on the second parameter.

function filterStateNames(arr,type){
    if(type == "abb"){
        return arr.filter(item => item.length === 2)
    }else if(type == "full"){
        return arr.filter(item => item.length > 2)
    }else{
        return []
    }
}

function filterStateNames(arr,type){
    let res = [];
    for(let i = 0 ; i < arr.length ; i++){
        if(type === "abb" && arr[i].length === 2){
            res.push(arr[i])
        }else if(type === "full" && arr[i].length > 2){
            res.push(arr[i])
        }
    }
    return res
}

// Abbreviations abb
// Full names full
// Examples
console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "abb")
) //➞ ["CA", "NY"]

console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")
) //➞ ["Arizona", "Nevada"]

console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")
) //➞ ["MT", "NJ", "TX", "ID", "IL"]

console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")
) //➞ []


//104 Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

function formatDate(date){
    let month = date.substring(0,2);
    let day = date.substring(3,5);
    let year = date.substring(6);

    let res = year + day + month;
    return res
}


// Examples
console.log(formatDate("11/12/2019")) //  ➞ "20191211"
console.log(formatDate("12/31/2019")) //  ➞ "20193112"
console.log(formatDate("01/15/2019")) //  ➞ "20191501"


//105 Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

function repeat(item , times){
    let res = [];
    for(let i = 0 ; i < times; i++){
        res.push(item)
    }
    return res
}

// Examples
console.log(repeat("edabit", 3)) //  ➞ ["edabit", "edabit", "edabit"]
console.log(repeat(13, 5)) //  ➞ [13, 13, 13, 13, 13]
console.log(repeat("7", 2)) //  ➞ ["7", "7"]
console.log(repeat(0, 0)) //  ➞ []

// Write a function that takes an array of elements and returns only the integers.

function returnOnlyInteger(arr){
    let res = arr.filter(item => typeof item === "number" && Number.isInteger(item))
    return res
}

function returnOnlyInteger(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(typeof arr[i] === "number" && Number.isInteger(arr[i])){
            res.push(arr[i])
        }
    }
    return res
}

// Examples
console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16])) // ➞ [9, 2, 16]
console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"])) // ➞ [81, 123]
console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"])) // ➞ [10, 56, 20, 3]
console.log(returnOnlyInteger(["String",  true,  3.3,  1])) // ➞ [1]