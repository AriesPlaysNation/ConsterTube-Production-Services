/* Author:		Brad Botteron
   Date Written:	11/17/19
   Description:		External JavaScript for chapter08b.html
			Working with JSON
*/

"use strict";

// Global declarations
var hiddenElement = document.getElementById("jsonObj");

// Function declarations

function playingWithJSON()
{
   // Input:		none
   // Processing: 	Create string literal, convert to a JSON string, and assign that string
	// 				as the value of the hidden form element
   // Output:		none

   // Local Variables
	var student = {firstName: "Tony", lastName: "Damarjian", address: "54321 Every St", workPhone: "260-555-1234", homePhone: "260-555-9876"};
	var jdString = JSON.stringify(student);

	hiddenElement.value = jdString;
	console.log(hiddenElement);

} // end FUNCTION playingWithJSON

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

	playingWithJSON();
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
