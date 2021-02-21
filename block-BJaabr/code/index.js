// -ook at the example below and do the same for other problems.

/*
Write a function named convertToString that accepts a number and converts the number into a string (hint: use String()) and return the converted value.

Do the following for the given problem:
*/
const convertToString = (num) => String(num);
convertToString(5);

// - Write a Function Decleration
function convertToString(n) {
  return String(n);
}

// - Write a Function Expression
let convertToString = function (n) {
  return String(n);
};

// - Write an Arrow Function without curly brackets (if possible)
let convertToString = (n) => String(n);

// - Write an Arrow Function with curly brackets
let convertToString = (n) => {
  return String(n);
};

// - Execute the function
convertToString(21);

// - Execute the function and store the return value in a variable.
let returnValue = convertToString(23);

// - What is the typeof returnValue
// typeof returnValue is "string"

/* 1. Add one to the given value

Write a function named `addOne` that accepts a number, adds one to the given value and`return` it(hint: use return keyword).


Do the following with above problem.
*/

// - Write a Function Declaration
      function addOne(n){
        return (n+1);
      }
      
// - Write a Function Expression
    const addOne = function (n){
      return (n+1);
    }
    
// - Write an Arrow Function without curly brackets(if possible)
const addOne =  (n) =>{
  return (n+1);
}

// - Write an Arrow Function with curly brackets
const addOne =  (n) => (n+1);


// - Execute the function
addOne(2);
// - Execute the function and store the return value in a variable.
let val= addOne(2);
// - What is the typeof returnValue
"string"
/* 2. Subtract one

Write a function named `substractOne` that accepts a number, substracts one from the given value and return it. (hint: use return keyword)

Do the following with above problem.
*/

// - Write a Function Declaration
function subOne(n){
  return (n-1);
}
// - Write a Function Expression
const subOne = function (n){
  return (n-1);
}
// - Write an Arrow Function without curly brackets(if possible)
const subOne =(n) => (n-1);
// - Write an Arrow Function with curly brackets
const subOne =(n) => { return (n-1);}
// - Execute the function
subOne(n);
// - Execute the function and store the return value in a variable.
let sub= subOne(n);
// - What is the typeof returnValue
//"number"
/* 3. Add two numbers

Write a function named `sum` that accepts two numbers and returns the sum of them.

Do the following with above problem.
*/

// - Write a Function Declaration
    function sum(numA,numB){
      return numA + numB;
    }
// - Write a Function Expression
const sum =function (numA,numB){
  return numA + numB;
}
// - Write an Arrow Function without curly brackets(if possible)
const sum =(numA,numB) => numA + numB;

// - Write an Arrow Function with curly brackets
const sum =(numA,numB) => { return numA + numB;}
// - Execute the function
sum(numA,numB);
// - Execute the function and store the return value in a variable
let sumVal= sum(numA,numB);
// - What is the typeof returnValue
    Number
/* 4. Square of the given value

Write a function named `square` that accepts a number and returns the square of the number.

Do the following with above problem.
*/

// - Write a Function Declaration
function square(square){
  return (square **2);
}
// - Write a Function Expression
function square(square){
  return (square **2);
}
// - Write an Arrow Function without curly brackets(if possible)
const square = (square)=> (square **2);

// - Write an Arrow Function with curly brackets
const square = (square)=> {return (square **2);}
// - Execute the function
  square(5);
// - Execute the function and store the return value in a variable
let squareVal = square(5);
// - What is the typeof returnValue
Number
/* 5. Find isGreater

Write a function named isGreater that accepts two numbers`x` and`y` and returns`true` if x is greater than y or return `false`.

Do the following with above problem.
*/

// - Write a Function Declaration
    function isGreater(x,y){
      if(x>y){
        return `${x} is greater ${y}`;
      }else {
        return `${y} is greater ${x}`;
      }
    } 
// - Write a Function Expression
const isGreater= function(x,y){
  if(x>y){
    return `${x} is greater ${y}`;
  }else {
    return `${y} is greater ${x}`;
  }
} 
// - Write an Arrow Function without curly brackets(if possible)
const isGreater= (x,y)=>{
  if(x>y){
     return `${x} is greater ${y}`;
  }else {
    return `${y} is greater ${x}`;
  }
}
// - Write an Arrow Function with curly brackets
const isGreater= (x,y)=>{
  if(x>y){
     return `${x} is greater ${y}`;
  }else {
    return `${y} is greater ${x}`;
  }
}
// - Execute the function
isGreater(5,13);
// - Execute the function and store the return value in a variable
let isGreaterVal= isGreater(5,13);
// - What is the typeof returnValue
string
/* 6.

Write a function named `oddOrEven` that accepts a`number` and returns

  - `Number is odd` for odd number
  - `Number is even` for even number.

Do the following with above problem.
*/

// - Write a Function Declaration
function oddOrEven(x,){
  if(x%2==0){
    return `${x} is even`;
  }else {
    return `${x} is odd`;
  }
} 

// - Write an anonymous Function Expression
const oddOrEven = function(x){
  if(x%2==0){
    return `${x} is even`;
  }else {
    return `${x} is odd`;
  }
} 

// - Write an named Function Expression
const oddOrEven = function oddOrEven(x){
  if(x%2==0){
    return `${x} is even`;
  }else {
    return `${x} is odd`;
  }
} 
// - Write an Arrow Function without curly brackets (hint: use ternary operator)
const oddOrEven = (x)=> x%2 == 0? `${x} is even`:`${y} is odd`;
// - Write an Arrow Function with curly brackets
const oddOrEven = (x)=>{
  if(x%2==0){
    return `${x} is even`;
  }else {
    return `${x} is odd`;
  }
} 
// - Execute the function
oddOrEven(5);
// - Execute the function and store the return value in a variable
let oddOrEvenVal= oddOrEven(6)
// - What is the typeof returnValue
string