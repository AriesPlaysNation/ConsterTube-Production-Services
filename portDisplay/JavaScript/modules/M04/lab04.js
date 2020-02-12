	/* Author:		Brad Botteron                              */
/* Date Written:	9/24/19                           */
/* Descriptoin:		Lab04 Debugging and Exception Handling */

// Global Variables
var kilometersElement = document.getElementById("kValue"); // DO NOT CHANGE ANY OF THESE
var milesElement      = document.getElementById("mValue"); // GLOBAL ASSIGNMENTS
var errorMessage      = document.getElementById("errorMessage");
var fieldValidity     = false; // assume field is invalid to begin

milesElement.focus(); // Focus cursor in the milesElement form field

function checkValidity()
{
	// Input: Kilometers from the user
	// Processing: Check validity of distance to prevent negative input
	// Output:	converted miles to screen
	console.log("*1. Entering checkValidity()");

	var formValidity = true; // assume form is valid until proven otherwise
	var displayedMessage = "";
	try
	{
		console.log("*2. Entering try block");
		if (milesElement.value < 0) // ** the VALUE of the milesElement is negative
		{
			console.log("*3. Miles, less than 0");
			console.log("*4. Miles = " + milesElement.value);
			throw "Please enter a number of miles greater than or equal to 0.";
		}// end IF
		else
		{
			console.log("*5. Miles >= 0");
			console.log("*6. Miles = " + milesElement.value);
			fieldValidity = true; // ** mileElement's value is positive, so set fieldValidity to true
			console.log("*7. Calling convert function();");
			convert();// ** call the convert function here
		} // end IF milesElement's value is negative
	} // end TRY
	catch(message)
	{
		console.log("*8. Entering catch clause");
		displayedMessage = message;
		formValidity = false; // ** Since we caught an error, set formValidity to false
		milesElement.innerHTML = ""; // ** Clear the VALUE from the milesElement form field
        milesElement.focus();        // ** Put the cursor in the milesElement form field
	} // end CATCH
	finally
	{
		console.log("*9. Entering finally clause");
		fieldValidity = formValidity; // fieldValidity is used by errorStyle()
		errorMessage.innerHTML = "\n<p>" + displayedMessage + "</p>\n";
		errorStyle(fieldValidity);
	} // end FINALLY
	return fieldValidity; // DO NOT ADD ANY LINES BETWEEN HERE AND END OF FUNCTION
} // end FUNCTION checkValidity
	
function convert() 
{
	console.log("*10. Entering convert function");
	var km = milesElement.value / .62137 //** Type the formula for converting miles to kilometers
	//km.toFixed(2); (For some reason putting on a seperate line did not work? // ** Format the km variable to display only two significant digits after the decimal
	kilometersElement.innerHTML = km.toFixed(2); // ** Cause the contents of the km variable to appear inside the kilometersElement container
	console.log("*11. miles = " + milesElement.value + ". Kilometers = " + km);
} // end FUNCTION convert
      
function errorStyle(fieldValidity) 
{
	console.log("*12. Entering validity");
	if (!fieldValidity) 
	{
		kilometersElement.innerHTML = "";// ** Clear the kilometersElement container
		errorMessage.style.backgroundColor = "rgb(255,0,0)";// ** Set errorMessage background to red
		errorMessage.style.textAlign = "center";// ** Set errorMessage textAlign property to center
		errorMessage.style.color = "rgb(255,255,255)"; // ** Set errorMessage color property to white (for text)
		errorMessage.style.padding = "5px"; // ** Set errorMessage padding property to 5px
		errorMessage.style.borderStyle = "double"; // ** Set errorMessage borderStyle property to double
		kilometersElement.focus(); // ** Put the cursor inside the milesElement form field
	}
	else 
	{
		errorMessage.style.backgroundColor = "rgb(255, 255, 255)" // ** Set errorMessage background property to white
	}
} // end FUNCTION errorStyle

// add cross browser compatible event listener to Convert to Km button and clear form
	console.log("*13. Beginning main program");
var convertButton = document.getElementById("convertButton");
if (convertButton.addEventListener) 
{
	console.log("*14. Adding TC39 event listener");
	convertButton.addEventListener("click", checkValidity, false); 
    	window.addEventListener("load", function() 
	{
    		milesElement.value = ""; // clear last miles value on reload
    		kilometersElement.innerHTML = ""; // clear previous results on reload
    	}, false);
} 
else if (convertButton.attachEvent)  
{
	console.log("*15. adding internet exploder event listener");
	convertButton.attachEvent("onclick", checkValidity);
    	window.attachEvent("onload", function() 
	{
    		milesElement.value = ""; // clear last miles value on reload
    		kilometersElement.innerHTML = ""; // clear previous results on reload 
    	});
} // end IF for XBCEL
	console.log("*16. Leasving event listener");
