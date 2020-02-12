/*	Author:		YOUR NAME
	Date Written:	TODAY'S DATE
	Description:	Demonstrate DOM properties
*/

// Global Variables
console.log("1. Declaring global variables");

function displayList()
{ // Input:		none
  // Processing:	none
  // Output:		Display document info using DOM properties
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
