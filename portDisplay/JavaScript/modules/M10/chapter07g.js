/* Author:			Brad Botteron
   Date Written:	11/7/19
   Description:		External JavaScript for chapter07g.html
					Working with object literals
*/
"use strict";
// Global declarations

var resultContainer = document.getElementById("result");

// Function declarations
var friend = {firstName: "Cliff", age: 39};

function objectLiteral()
{
  // Input: 		none
  // Processing: 	Declare an object literal
  // Output:  		Display object literal on page
  resultContainer.innerHTML = "My friend " + friend.firstName + " is " + friend.age + " years old!";



} // end FUNCTION objectLiteral

function insertCopyright()
{
  // Input: 		none
  // Processing: 	Calculates current year
  // Output: 		Places current year in footer after copyright symbol

	var currentYear = new Date().getFullYear(); 
	var dateContainer = document.getElementById("year");
	dateContainer.innerHTML = currentYear;
	
} // end FUNCTION insertCopyright

function init()
{
  // Input: 	 none
  // Processing: Call initial script functions
  // Output: 	 none
  insertCopyright();
  objectLiteral();


  
} // end FUNCTION init()

// Cross-Browser Compatible Event Listeners

if (window.addEventListener)
{ // TC39 browsers
	window.addEventListener("load", init, false);
}
else if (window.attachEvent)
{ // MS browsers
	window.attachEvent("onload", init);
}
