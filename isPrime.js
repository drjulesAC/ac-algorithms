/*

Given a number between 1 and 2^16, return true if the number is prime, return false if it is not.
Remember 2 is a prime number and 1 is not.

Hint: You may not need to check numbers up to num to check for primeness.

*/

/**

Examples:

var result = isPrime(1)
console.log(result) // false

var result = isPrime(2)
console.log(result) // true

var result = isPrime(3)
console.log(result) // true

var result = isPrime(4)
console.log(result) // false

var result = isPrime(29)
console.log(result) // true

var result = isPrime(51)
console.log(result) // false

**/
//Input: an integer between 1 and a really big number
//Ooutput: true or false
//Prime Number: A prime number is a whole number greater than 1, whose only two whole-number factors are 1 and itself
//Tools: modulo, to see if a neighbor has a remainder when divided, a for loop and a conditional statement

function isPrime(num) {
	// determine if the number is greater than 1
	//run a for loop
	//if (statement) the number is divisible by i, we know it is not prime
if (num <= 1) {
	return false;
}

		for (var i = 2; i < num; i++) {
			if (num !== 2 && num % i === 0) {
				return false;
			} 
			
		}
		return true;
}

var result = isPrime(1);
console.log(result); // false

var result = isPrime(2);
console.log(result); // true

var result = isPrime(3);
console.log(result); // true

var result = isPrime(4);
console.log(result); // false

var result = isPrime(29);
console.log(result); // true

var result = isPrime(51);
console.log(result); // false

