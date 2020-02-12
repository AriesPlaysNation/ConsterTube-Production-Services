/*	Author:		YOUR NAME
	Date Written:	TODAY'S DATE
	Description:	Demonstrate date and time methods
*/

// Global Variables
console.log("1. Declaring global variables");

function displayInfo()
{ // Input:		none
  // Processing:	none
  // Output:		Display date/time info to page
} // end FUNCTION displayInfo()

// Set Up Cross Browser Compatible Event Listeners (XBCEL)
console.log("4. Setting up XBCEL");
if (window.addEventListener)
{
  console.log("5. Adding TC39 Event Listener");
}
else if (window.attachEvent)
{
  console.log("6. Attaching Microsoft Event Listener");
} // end XBCEL
