//Find the Longest Word in a String

//Return the length of the longest word in the provided sentence.

//Your response should be a number.

//Here are some helpful links:

//String.split() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
//String.length https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

//TEST CASES
// findLongestWord("The quick brown fox jumped over the lazy dog");
// findLongestWord("The quick brown fox jumped over the lazy dog") should return a number.
// findLongestWord("The quick brown fox jumped over the lazy dog") should return 6.
// findLongestWord("May the force be with you") should return 5.
// findLongestWord("Google do a barrel roll") should return 6.
// findLongestWord("What is the average airspeed velocity of an unladen swallow") should return 8.
// findLongestWord("What if we try a super-long word such as otorhinolaryngology") should return 19.

//Input: a String
//Output: a number ( length of longest word)


function findLongestWord(str) {
  //split up te String
  //look at each word for its length ( .length)
  //want to find the longest one, using a for loop look at each word and determine length 
  //then store each length in a new array (in a new var)
  //loop through that array to find the largest number
  //
  //want to return the numerical value of the length
  
  var wordArray = str.split(" ");
  var longestWord = 0;
  

   for (i = 0; i < wordArray.length; i++) {
     if(wordArray[i].length > longestWord) {
       longestWord = wordArray[i].length
     }
   }
  console.log(longestWord);
}

findLongestWord("The quick brown fox jumped over the lazy dog");
findLongestWord("May the force be with you");
findLongestWord("Google do a barrel roll");
findLongestWord("What is the average airspeed velocity of an unladen swallow");
findLongestWord("What if we try a super-long word such as otorhinolaryngology");