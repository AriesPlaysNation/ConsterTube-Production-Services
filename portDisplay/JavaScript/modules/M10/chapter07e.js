/* Author:			Brad Botteron
   Date Written:	11/7/19
   Description:		External JavaScript for chapter07e.html
					Working with object literals
*/
"use strict";
// Global declarations

var resultContainer = document.getElementById("result");

// Function declarations
var student = {firstName: "Maggie", lastName: "Smith"};

function objectLiteral()
{
  // Input: 		none
  // Processing: 	Declare an object literal
  // Output:  		Display object literal on page
  resultContainer.innerHTML = student.firstName;


  
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
  // Input: 		none
  // Processing: 	Call initial script functions
  // Output: 		none
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
