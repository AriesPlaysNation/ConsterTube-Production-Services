/*	Author:		YOUR NAME
	Date Written:	TODAY'S DATE
	Description:	Demonstrate DOM location properties
*/

// Global Variables
console.log("1. Declaring global variables");

function displayList()
{ // Input:		none
  // Processing:	none
  // Output:		Display document info using DOM properties
} // end FUNCTION displayInfo()

function reload()
{ // Input:		none
  // Processing:	loads the previous page from browser history
  // Output:		none
	console.log("4. Entering reload()");
	console.log("5. Leaving reload()");
} // end FUNCTION goBack()

// Set Up Cross Browser Compatible Event Listeners (XBCEL)
console.log("6. Setting up XBCELs");
if (window.addEventListener) 
{
  console.log("7. Adding TC39 Event Listeners");
} 
else if (window.attachEvent)  
{
  console.log("8. Attaching Microsoft Event Listeners");
} // end XBCEL
