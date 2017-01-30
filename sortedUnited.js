//Sorted Union
//Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

//In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

//The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

//Here are some helpful links:

//Array.reduce()  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
//Input: Two or more arrays
//Output: a new array in original order with no duplicates

//Create a new array
//create a var to hold our arguments array
//loop through the length of arguments to 
//Loop through the individual elements
//Compare the values of competing repeating numbers, use indexOf to search our array to see if the number exists, if it does not exist, do nothing, if it doesn't, push it
//push the numbers that match the requirements into that array
//return that array

function uniteUnique(arr) {
  var newArray = [];
  
  for (var i = 0; i < arguments.length; i++){
    var numbers = arguments[i];
    for (var j = 0; j < numbers.length; j++){
      if(newArray.indexOf(numbers[j]) === -1){
        newArray.push(numbers[j]);
      }
    }
    
  }
  return newArray;
}






//TEST CASES


var result = uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) //should return [1, 3, 2, 5, 4].
console.log(result);
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]) //should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]) //should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) //should return [1, 2, //3, 5, 4, 6, 7, 8].