// Use default parameter where ever you can

/*
1. 🎖Write a function named calculateDogAge that:
  * [ ] Takes 1 argument: your puppy's age.
  * [ ] Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
  * [ ] Return the result dog age in dog year.
  * [ ] Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

function calculateDogAge(dogAge,humanAge) {
  // Your code goes here
  alert("Enter dogs age and human age");
  dogAge=dogAge*7;
  return `Dog age is ${dogAge} and human age is ${humanAge}`
}
calculateDogAge(7,7);

/*
2. 🎖Write a function named calculateMoviesToWatch that:
  * [ ] takes 2 arguments: age, number of movies you watch every week. (take 4 weeks per month)
  * [ ] calculates the number of movies for rest of the life (based on a constant max age).
  * [ ] Return the total number of movie you will watch.
*/

function calculateMoviesToWatch(age,movies) {
  // Your code goes here
  const maxAge= 30;
  let ageDiff= maxAge-age;
  movies = ageDiff * movies * 4*12;
  return `you would watch ${movies}movies for the remaining ${ageDiff}years`
}
calculateMoviesToWatch(20,1);

/*
3. 🎖Create a function called celsiusToFahrenheit:
  * [ ] Accepts celsius temperature as argument.
  * [ ] Convert it to fahrenheit and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(temp) {
  // Your code goes here
  return (temp*9/5)+ 32;
}
celsiusToFahrenheit(50);
/*
4. 🎖Create a function called fahrenheitToCelsius:
  * [ ] Accepts fahrenheit temperature as argument.
  * [ ] Convert it to celsius and return "NN°F is NN°C"
*/

function celsiusToFahrenheit(temp) {
  // Your code goes here
  return ((32*temp) - 32) * 5/9; 
}
celsiusToFahrenheit(60);
/*
5. 🎖 Write a function pow(n, x) that returns x in power n.

  * [ ] The function accepts two parameter x and n.
  * [ ] Return x times n
  * [ ] If the value of n is below 0 return "The number below 1 is not allowed"
*/

function pow(n,x) {
  // Your code goes here
  if(n<0){
    alert("The number below 1 is not allowed");
  }else {
    return x ** n;
  }
}
pow(2,3);

// Test
pow(3, 2); // 9
pow(3, 3); // 27
pow(1, 100); // 1
pow(-31, 2); // "The number below 1 is not allowed"

/*
6. 🎖Write a program that accepts two parameter a number n and a string with possible values of `sum` or `product`
and return sum or product of 1,…,n. If user enters any other value than `sum` or `product` alert `Not a valid Input`.
*/

function sumOrProductOfN(x,y) {
  // Your code 
  if(y!=='sum' || y!=='product'){
    alert("Invalid input");
  }else{
    let sum=0;
    let prod=1;
    let i=1;
    while(x>=i){
      sum=sum+i;
      prod=prod*i
      i++;
    }
  console.log(`sum equals ${sum} and product equals ${prod}`);
  }
}

sumOrProductOfN(4, 'sum'); // 10
sumOrProductOfN(4, 'product'); // 24
sumOrProductOfN(4, 'hello'); // alert "Not a valid Input"

/*
6. 🎖Write a program that accepts a number n using argument and return the sum of the numbers 1 to n
*/

function sumOfN(x) {
  // Your code goes here
  let sum=0;
    
    let i=1;
    while(x>=i){
      sum=sum+i;
      
      i++;
    }
  console.log(`sum equals ${sum}`);
}
sumOfN(4);
/*
7. 🎖Modify the previous program such that only multiples of 5 or 7 are considered in the sum, e.g. n = 20 (5,7,10,14,15,20) 71
*/

// Your code goes here
const sumMul = (num) =>{
  let sum=0;
  let i=1;
  while(i<=num){
    if(i%5==0 || i%7==0){
      sum=sum+i;
      i++;
    }
    
  }
  return sum;
}
/*
8. 🎖Write a function `min` that takes two arguments and returns their minimum.
*/

function min(x,y) {
  // Your code goes here
  if(x<y){
    console.log(x);
  }else console.log(y);
}

min(0, 10);
min(0, -10);

/*
9. 🎖Write a JavaScript function which accepts an argument and returns the type of the value.
*/

function typeCheck(x) {
  // Your code goes here
  return typeof x;
}

typeCheck("as");