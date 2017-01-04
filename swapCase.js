/*

Given a string, swap the case of each character and retunr it.
Assume the string has only letters.

Hint 1: Check out indexOf() method at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf

Hint 2: Check toLowerCase and toUpperCase methods at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase

Bonus: If the string has non-letter characters, leave them as they are.

*/

/**
Examples:

var result = swapCase("Hello World")
console.log(result) // "hELLO wORLD"

var result = swapCase("");
console.log(result) // ""

Bonus:
var result = swapCase("Oh, Hello!!");
console.log(result) // "oH, hELLO!!"

**/

function swapCase(str) {
	
	//for loop, to look at all of the letters in the string, use .lengthpoperty to tell the loop when to stop
	//
}

function swapCase(str) {
   var result = "";
  for (i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()){
        result = result + str[i].toLowerCase();
      } else {
        result = result + str[i].toUpperCase();
      }
        
      }
    return result;
    };


//Result using .indexOf()

// function swapCase(str) {
//   var total = "";
//   for (var i = 0; i < str.length; i++){
//     var lowercase = str[i].toLowerCase();
//     if (str.indexOf(lowercase) === -1) {
//       total = total + lowercase;
//     } else{ 
//       total = total + str[i].toUpperCase();
//       }
//     }
//   return total;
  
//   }

  
 
var result = swapCase("Hello World")
console.log(result)

var result = swapCase("");
console.log(result) // ""

