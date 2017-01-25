//Fibonacci Challenge!

//Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.

//The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number is the sum of the previous two numbers.

//As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under 4 are 1, 1, and 3.

//Input: any positive integer
//Ouput: a number (the sum of all odd Fibonacci numbers leading upt to our input number)

//use a loop to go through all of the numbers up to that input number
//create the sequence
//use a conditional statement and modulo to see if the Fibonacci number is odd
//if it is odd, we will add that to our new variable
//return the result

function sumFibonacci(num) {
  var previousNum = 0;
  var currentNum = 1;
  var result =0;
  
  while (currentNum <= num){
    if (currentNum % 2 !== 0){
      result += currentNum;
    }
   var sum = currentNum + previousNum;
    previousNum = currentNum;
    currentNum = sum;
  }
    
   console.log(result); 
}



//TEST CASES
sumFibonacci(1000); //should return 1785.
sumFibonacci(4000000); //should return 4613732.
sumFibonacci(4); //should return 5.
sumFibonacci(75024); //should return 60696.