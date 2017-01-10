/*

Given a number, insert dashes ('-') between each two odd numbers and return it as a string
Remember 0 is an even number. Assume the input will contain at least 1 digit.

Hint: Check out toString() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

*/

/**
Examples:

var result = dashInsert("454793");
console.log(result) // "4547-9-3"

var result = dashInsert("44");
console.log(result) // "44"

var result = dashInsert("0");
console.log(result) // "0"

var result = isBigger("13");
console.log(result) // "1-3"

**/

//function dashInsert(str) {
	// INput: any number with at least one digit
	//Output:a string with a dash between odd numbers
	//Identify odd numbers using modulo
	//Convert string to string, separate the string into individual indexes, so we can check if the numbers are even or odd
	//IF they are even, add the value of the index to overall output, else add the dash if the next number is odd
	//Join into a string
//}


function dashInsert(num) {
  //start with output variable
  var output = "";
  var myString = num.toString().split("");
  for (i = 0; i < myString.length; i++) {
    if (myString[i] % 2 !== 0 && myString[i+ 1] % 2 !==0) {
      output += myString[i] + "-";
    } else {
      output += myString[i];
    }
  }
  
  return output;
  
}

console.log(dashInsert(794));