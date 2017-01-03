//Challenge time! 
//Return the factorial of the provided integer.

// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n. Factorials are often represented with the shorthand notation n!

// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

// Check out Arithmetic Operators https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators

//n! = n × (n−1)

//Input: any whole number (aka integer)
//Output: the product of all the numbers >0 and <= the number itself


function factorializeIt(num) {
  //your code here
  //for loop to run through the calculation
  var total = 1;
  for (i = 1; i <= num; i++) {
    total = total * i;
  };
  return total;
}

console.log(factorializeIt(5));