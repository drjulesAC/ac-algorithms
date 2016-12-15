//Write a JavaScript program to calculate the area and perimeter of a circle. The radius of the circle will be supplied by the user

//Bonus 1: Write the answer like this "The area of the circle is ___ and the perimeter of the circle is ____"

//Bonus 2: Make both numbers whole integers (aka round to the nearest integer) 

//Input: Radius of circle, supplied but our user
//Output: Area and the perimeter of the circle

function circleCalculation (radius) {
	//Calculate area of the circle given the radius to the nearest interger
	var area = Math.round(Math.PI * Math.pow(radius,2));
	//Calculate perimeter of the circle,  given the radius to the nearest integer
	var perimeter = Math.round(2 * Math.PI * radius);
	//Return the full sentence with the values area and perimeter
	console.log("The area of the circle is " + area + " and the perimeter of the circle is " + perimeter + ".");
}
circleCalculation(10);
