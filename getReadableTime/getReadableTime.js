/*
Given a number of minutes as an integer, return an object with two properties,
"hour" and "minute", which is equivalent to the input minutes.
Hint: Check out Math.floor function at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
Hint: Check out remainder operator at
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder


Bonus 1: Add "day" property

Bonus 2: return -1 if the input is not a number or if 
it is a negative number
*/

/**
Examples:

var result = getReadableTime(102);
console.log(result) // Object {minute: 42, hour: 1}

var result = getReadableTime(12);
console.log(result) // Object {minute: 12, hour: 0}

var result = getReadableTime(1002);
console.log(result) // Object {minute: 42, hour: 16}

var result = getReadableTime(10002);
console.log(result) // Object {minute: 42, hour: 22, day: 6}

var result = getReadableTime("10002");
console.log(result) // -1

var result = getReadableTime();
console.log(result) // -1

var result = getReadableTime(-12);
console.log(result) // -1

**/

//Input: minutes as an integer
//Output: an object that contains key/value pairs , with keys of hours and minutes	


function getReadableTime(minutes) {
	
	if (typeof	minutes !=='number' || minutes < 0) {
		return -1;
	} else {
 
	var timeObject = {};
	var hours = Math.floor(minutes/60);
    var day = Math.floor(hours/24);
      if (day > 0) {
          var remainingHours = hours % 24;
        timeObject.day = day;
        timeObject.hour = remainingHours;
          } else {
            timeObject.hour = hours;
          }
  var minutes = minutes % 60;
  timeObject.minute = minutes;
  return timeObject;
      }
}



var result = getReadableTime(102);
console.log(result) // Object {minute: 42, hour: 1}

var result = getReadableTime(12);
console.log(result) // Object {minute: 12, hour: 0}

var result = getReadableTime(1002);
console.log(result) // Object {minute: 42, hour: 16}

var result = getReadableTime(10002);
console.log(result) // Object {minute: 42, hour: 22, day: 6}

var result = getReadableTime("10002");
console.log(result) // -1

var result = getReadableTime();
console.log(result) // -1

var result = getReadableTime(-12);
console.log(result) // -1