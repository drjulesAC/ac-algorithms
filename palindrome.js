//Check for Palindromes
//Return true if the given string is a palindrome. Otherwise, return false.

//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

//We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

//Here are some helpful links:

//String.replace() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
//String.toLowerCase() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase

//TEST CASES

//palindrome("eye") should return true.
//palindrome("race car") should return true.
//palindrome("not a palindrome") should return false.
//palindrome("A man, a plan, a canal. Panama") should return true.
//palindrome("never odd or even") should return true.
//palindrome("nope") should return false.
//palindrome("almostomla") should return false.
//palindrome("My age is 0, 0 si ega ym.") should return true.
//palindrome("1 eye for of 1 eye.") should return false.
//palindrome("0_0 (: /-\ :) 0-0") should return true.


/Input: a string that could have letters numbers symbols or spaces
//Output: boolean!
	//remove non alphanumeric symbols and spaces and cange out string to lowercase
	//a conditional statement to see if the string backwards is strictly equal to the string forward. 
  //If so, return true, using .split(), and .reverse() and .join())


function palindrome(str) {
  var cleanStr = str.replace(/\W|_/g, "").toLowerCase();
  var checkStr = cleanStr.split("").reverse("").join("");
  
  if(checkStr === cleanStr) {
    return true; 
  } else {
    return false;
  };
	
};




palindrome("eye"); //should return true.
palindrome("race car"); //should return true.
palindrome("not a palindrome"); // should return false.
palindrome("A man, a plan, a canal. Panama"); //should return true.
palindrome("never odd or even"); // should return true.
palindrome("nope"); //should return false.
palindrome("almostomla"); //should return false.
palindrome("My age is 0, 0 si ega ym."); //should return true.
palindrome("1 eye for of 1 eye."); //should return false.
palindrome("0_0 (: /-\ :) 0-0"); //should return true.
