//Q => 47 Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

function transformUpvotes(str) {
    let res = str.split(" ").map(upvote => {
        if (upvote.includes("k")) {
            return parseFloat(upvote) * 1000
        } else {
            return parseFloat(upvote)
        }
    })
    return res
}

``
function transformUpvotes(str) {
    let arr = str.split(" ");
    let res = []
    for (let item of arr) {
        if (item.includes("k")) {
             res.push(parseFloat(item) * 1000)
        }else{
             res.push(parseFloat(item))
        }
    }
    return res
}

function transformUpvotes(str){
    let arr = str.split(" ")

    let res = arr.reduce((acc,curr)=>{
        if(curr.includes("k")){
            acc.push(parseFloat(curr) * 1000) 
        }else{
            acc.push(parseFloat(curr))
        }
        return acc
    },[])
    return res
}

// Examples
console.log(transformUpvotes("6.8k 13.5k")) //  ➞ [6800, 13500]
console.log(transformUpvotes("5.5k 8.9k 32")) //  ➞ [5500, 8900, 32]
console.log(transformUpvotes("20.3k 3.8k 7.7k 992")) //  ➞ [20300, 3800, 7700, 992]