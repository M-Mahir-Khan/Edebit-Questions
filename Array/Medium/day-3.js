// Q =>17 An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

function isSpecialArray(arr){
   let res = arr.every((item,index)=> index % 2 === 0 ? item % 2 === 0 : item % 2 !== 0) 
   return res
}

function isSpecialArray(arr){
    for(let i = 0; i < arr.length ; i++){
        if(i % 2 === 0){
            if(arr[i] % 2 !== 0){
                return false
            }
        }else{
            if(arr[i] % 2 === 0){
                return false
            }
        }
    }
    return true
}

// Examples
console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])) // ➞ true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])) // ➞ false
// Index 2 has an odd number 9.

console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])) // ➞ false
// Index 3 has an even number 8.


//Q =>18 Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

function jazzify(arr){
    let res = [];
    for(let i = 0; i < arr.length; i++){
        if(!arr[i].includes("7")){
            res.push(arr[i] + "7")
        }else{
            res.push(arr[i])
        }
    }
    return res
}

function jazzify(arr){
    let res = arr.map(item => item.includes("7") ? item : item + "7" ) 
    return res
}

function jazzify(arr){
    let res = [];
    arr.forEach(item => {
        item.includes("7") ? res.push(item) : res.push(item + "7")
    });
    return res
}

// Examples
console.log(jazzify(["G", "F", "C"])) // ➞ ["G7", "F7", "C7"]
console.log(jazzify(["Dm", "G", "E", "A"])) // ➞ ["Dm7", "G7", "E7", "A7"]
console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])) // ➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
console.log(jazzify([])) // ➞ []


// Q =>19 Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.

function ascDesNone(arr,str){
    if(str === "Asc"){
        return arr.sort()
    }else if(str === "Des"){
        return arr.sort((a,b)=> b - a)
    }else if(str === "None"){
        return arr
    }
}

function ascDesNone(arr,str){
    switch (str){
        case "Asc":
            return arr.sort()
        case "Des":
            return arr.sort((a,b)=> b - a)
        case "None":
            return arr
    }
}

// Examples
console.log(ascDesNone([4, 3, 2, 1], "Asc" )) // ➞ [1, 2, 3, 4]
console.log(ascDesNone([7, 8, 11, 66], "Des")) // ➞ [66, 11, 8, 7]
console.log(ascDesNone([1, 2, 3, 4], "None")) // ➞ [1, 2, 3, 4]


//Q =>20 Mubashir was reading about currying functions. He needs your help to multiply an array of numbers using currying functions.

// Create a function which takes an array arr of integers as an argument. This function must return another function, which takes a single integer as an argument and returns a new array.

// The returned array should consist of each of the elements from the first array multiplied by the integer.

function multiply(arr){
    return function(num){
       return arr.map(item => item * num)
    }
}

function multiply(arr){
    return function(num){
      let res = [];
      for(let i = 0; i < arr.length; i++){
        res.push(arr[i] * num)
      }
      return res
    }
}

// Examples
console.log(multiply([1, 2, 3])(2)) // ➞ [2, 4, 6]
console.log(multiply([4, 6, 5])(10)) // ➞ [40, 60, 50]
console.log(multiply([1, 2, 3])(0)) // ➞ [0, 0, 0]


//Q =>21 Finding Adjacent Nodes
// A graph is a set of nodes and edges that connect those nodes.

// Graph Example

// There are two types of graphs; directed and undirected. In an undirected graph, the edges between nodes have no particular direction (like a two-way street) whereas in a directed graph, each edge has a direction associated with it (like a one-way street).

// For two nodes in a graph to be considered adjacent to one another, there must be an edge between them. In the example given above, nodes 0 and 1 are adjacent, but nodes 0 and 2 are not.

// We can encode graphs using an adjacency matrix. An adjacency matrix for a graph with "n" nodes is an "n * n" matrix where the entry at row "i" and column "j" is a 0 if nodes "i" and "j" are not adjacent, and 1 if nodes "i" and "j" are adjacent.

// For the example above, the adjacency matrix would be as follows:

// [
//     [0, 1, 0, 0],
//     [1, 0, 1, 1],
//     [0, 1, 0, 1],
//     [0, 1, 1, 0],
//   ];
  // A one indicates that a connection is true and a zero indicates a connection is false.
  
  // Here is how the above model might be written out:
  
  // On the first row, node 0 does not connect to itself, but it does connect to node 1. It does not connect to node 2 or node 3. The row is written as 0, 1, 0, 0.
  // On the second row, node 1 connects to node 0, node 2 and node 3, but it does not connect to itself. The row is written as 1, 0, 1, 1.
  // On the third row, node 2 does not connect to node 0, but it does connect to node 1, does not connect to itself, and it does connect to node 3. The row is written as 0, 1, 0, 1
  // On the fourth row, node 3 does not connect to node 0, but it does connect to node 1 and node 2. It does not connect to itself. The row is written as 0, 1, 1, 0.
  // Your task is to determine if two nodes are adjacent in an undirected graph when given the adjacency matrix and the two nodes.
  
  // Examples
  // Graph Example
  
  // Adjacency Matrix:
  function isAdjacent(adjMatrix, node1, node2) {
    return adjMatrix[node1][node2] === 1;
  }
  const matrix1 = [
    [0, 1, 0, 0],
    [1, 0, 1, 1],
    [0, 1, 0, 1],
    [0, 1, 1, 0],
  ];
  console.log(isAdjacent(matrix1, 0, 1));
  console.log(isAdjacent(matrix1, 0, 2));
  // Nodes 0,1 should return true.
  // Nodes 0,2 should return false.
  // Graph Example 2
  
  const matrix2 = [
    [0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0],
    [0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 0],
  ];
  console.log(isAdjacent(matrix2, 0, 3));
  console.log(isAdjacent(matrix2, 1, 4));
  // Nodes 0,1 should return true.
  // Nodes 0,2 should return false.
  // Graph Example 2
  
  // Nodes 0,3 should return true.
  // Nodes 1,4 should return false.
  // Notes
  // Graphs may have between 0 and 25,000 nodes.
  // Time Limit: 100 milliseconds.