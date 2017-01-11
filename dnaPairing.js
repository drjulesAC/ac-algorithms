//Code Your DNA!

//The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2nd array.

//Base pairs are a pair of AT and CG. Match the missing element to the provided character.

//Return the provided character as the first element in each array.

//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

//Input: string of missing pairing elements
//Output: the pairs are arrays inside of one pair of arrays
  //create the parent array
 //separate the string into an array, using split
//create a for loop to look at each letter
//use a conditional statement to determine which partner to add
  //push that partner letter pair into the parent

function pairElement(str) {
  var parentArray = [];
  var dna = {
    T:"A",
    A:"T",
    G:"C",
    C:"G",
  };
  var newStr = str.split("");
  for (var i = 0; i < newStr.length; i++){
    parentArray.push([newStr[i], dna[newStr[i]]]);
  }
  
  return parentArray;
}

console.log(pairElement("GCG"));

//TEST CASES
//pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]]