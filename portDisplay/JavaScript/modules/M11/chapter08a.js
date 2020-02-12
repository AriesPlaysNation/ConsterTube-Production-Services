/* Author:		Brad Botteron
   Date Written:	11/17/19
   Description:		External JavaScript for chapter08a.html
			Manipulating Strings
*/

"use strict";

// Global declarations
var container1 = document.getElementById("part1"); // Are these needed now?
var container2 = document.getElementById("part2");
var container3 = document.getElementById("part3");

// Function declarations

function stringManipulation()
{
  // Input:		none
  // Processing: Performs a variety of string formatting and manipulation
  // Output:	Displays results in the page container with id=part1

  // Local Variables
	var includesQuotes = "Brad exclaimed, \"Javascript Rules!\" as he entered the chat room.";
	var anotherCopyright = String.fromCharCode(169) + " 2019";
	var emailAddress = "bsullens@ivytech.edu";
	var atPosition = emailAddress.search("@"); // returns 8
	var topLevelDomain = emailAddress.slice(-3); // returns edu
	var string1 = "A Raisin In The Sun";
	var outputString = ""; // Initialize the concatenation string

	outputString += "<p>" + includesQuotes + "</p>\n";
	outputString += "<p>Email Address: " + emailAddress + "</p>\n";
	outputString += "<p>The @ symbol is in the position " + atPosition + " in the email address.</p>\n";
	outputString += "<p>The LTD of the email address is <code>" + topLevelDomain + "</code>.</p>\n";
	outputString += "<p>Favorite play: " + string1 + ".</p>\n";
	outputString += "<p>In all caps: " + string1.toUpperCase() + "</p>\n";
	outputString += "<p>Down low: " + string1.toLowerCase() + "</p>\n";
	outputString += "<p>The play's title contains " + string1.length + " characters in it.</p>\n";
	container1.innerHTML = outputString;

} // end FUNCTION stringManipulation

function regularExpressions()
{
  // Input:		none
  // Processing:	Performs a variety of regular expressions tests
  // Output:		Displays results in the page container with id=part2

  // Local variables
	var outputString = ""; // Initialize concatenation string
	var regExPattern; // The regular expression pattern to be tested
	var regExTest; // The regular expression test

	regExPattern = /[CDT]ry/;
	regExTest = regExPattern.test("Dry")? "First test passed" : "First test failed!";
	outputString += "<p>REGEX test pattern: <code>" + regExPattern + "</code></p>\n";
	outputString += "<p>First REGEX test results (Dry): " + regExTest + "</p>\n";
	regExTest = regExPattern.test("Fry")? "Second test passed" : "Second Test Failed!";
	outputString += "<p>Second REGEX test results (Fry): " + regExTest + "</p>\n";

	regExPattern = /long$/;
	regExTest = regExPattern.test("belong")? "First test passed" : "First test failed";
	outputString += "<p>REGEX test pattern: <code>" + regExPattern + "</code></p>\n";
	outputString += "<p>First REGEX test results (belong): " + regExTest + "</p>\n";
	regExTest = regExPattern.test("behind")? "Second test passed" : "Second test failed!";
	outputString += "<p>Second REGEX test (behind): " + regExTest + "</p>\n";

	regExPattern = /\d/;
	regExTest = regExPattern.test("AB7CD")? "First test passed" : "First test failed!";
	outputString += "<p>REGEX test pattern: <code>" + regExPattern + "</code></p>\n";
	outputString += "<p>First REGEX test results (AB7CD): " + regExTest + "</p>\n";
	regExTest = regExPattern.test("ABCD")? "Second test passed" : "Second test failed!";
	outputString += "<p>Second REGEX test results (ABCD): " + regExTest + "</p>\n";

	regExPattern = /[!@#_]/;
	regExTest = regExPattern.test("ABCDEFG")? "First test passed" : "First test failed!";
	outputString += "<p>REGEX test pattern: <code>" + regExPattern + "</code></p>\n";
	outputString += "<p>First regex test results (ABCDEFG): " + regExTest + "</p>\n";
	regExTest = regExPattern.test("abc!def")? "Second test passed" : "Second test failed!";
	outputString += "<p>Second REGEX test results: (abc!def): " + regExTest + "</p>\n";
	container2.innerHTML = outputString;

} // end FUNCTION regularExpressions

function arrayManipulation()
{
  // Input:		none
  // Processing:	Performs a variety of array manipulation
  // Output:		Displays all output in the page container with id=part3


   // Local variables
	var fruit = ["pear", "apple", "banana", "ugli fruit", "grape"];
	var outputString = "";

	function showArray(theArray)
	{
		// Input: Accepts an array as a parameter
		// Processing: Builds an ordered list of the array elements
		// Output: Displays the list in the destination container

		// Local variables
		var outputString = "<ol>\n"; // Initialize the output string

		for(var i = 0; i < theArray.length; i++)
		{
			outputString += "\t<li>" + theArray[i] + "</li>\n";
		}
		outputString += "</ol>\n";
		container3.innerHTML += outputString;
	} // END function showArray

	container3.innerHTML += "<p>&nbsp;</p>\n";
	container3.innerHTML += "<h3>The Original Array</h3>\n";
	showArray(fruit);

	container3.innerHTML += "<h3>The Array Reversed</h3>\n";
	showArray(fruit.reverse());

	container3.innerHTML += "<h3>The Array Sorted</h3>\n";
	showArray(fruit.sort());

	container3.innerHTML += "<h3>Shift -> remove first element</h3>\n";
	fruit.shift();
	showArray(fruit);

	container3.innerHTML += "<h3>Unshift -> Add an element to beginning</h3>\n";
	fruit.unshift("tangelo");
	showArray(fruit);

	container3.innerHTML += "<h3>Pop -> remove last element</h3>\n";
	fruit.pop();
	showArray(fruit);

	container3.innerHTML += "<h3>Push -> add an element to the beginning of the array</h3>\n";
	fruit.push("oroblanco");
	showArray(fruit);

	container3.innerHTML += "<p>Whew! That was a lot of typing.</p>\n";

} // end FUNCTION arrayManipulation

function insertCopyright()
{
  // Input: 		none
  // Processing: 	Calculates current year
  // Output: 		Places current year in footer after copyright symbol

	var currentYear = new Date().getFullYear(); 
	var dateContainer = document.getElementById("copyright");
	dateContainer.innerHTML = currentYear;
	
} // end FUNCTION insertCopyright

function init()
{
  // Input: 		none
  // Processing: 	Call initial script functions
  // Output: 		none

	stringManipulation();
	regularExpressions();
	arrayManipulation();
	insertCopyright();
  
} // end FUNCTION init()

// Cross-Browser Compatible Event Listeners

if (window.addEventListener)
{ // TC39 browsers
  window.addEventListener("load",init,false);
}
else if (window.attachEvent)
{ // MS browsers
  window.attachEvent("onload",init);
}
