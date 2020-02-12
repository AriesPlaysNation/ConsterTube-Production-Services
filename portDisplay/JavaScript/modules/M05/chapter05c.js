/*	Author:		YOUR NAME
	Date Written:	TODAY'S DATE
	Description:	Demonstrate DOM history properties
*/

// Global Variables
console.log("1. Declaring global variables");

function displayList()
{ // Input:		none
  // Processing:	none
  // Output:		Display document info using DOM properties
} // end FUNCTION displayInfo()

function goBack()
{ // Input:		none
  // Processing:	loads the previous page from browser history
  // Output:		none
	console.log("4. Entering goBack()");
	console.log("5. Entering goBack()");
} // end FUNCTION goBack()

function goForward()
{ // Input:		none
  // Processing:	loads the next page from browser history
  // Output:		none
	console.log("6. Entering goForward()");
	console.log("7. Leaving goForward()");
} // end FUNCTION goForward()

// Set Up Cross Browser Compatible Event Listeners (XBCEL)
console.log("8. Setting up XBCELs");
if (window.addEventListener) 
{
  console.log("9. Adding TC39 Event Listeners");
} 
else if (window.attachEvent)  
{
  console.log("10. Attaching Microsoft Event Listeners");
} // end XBCEL
