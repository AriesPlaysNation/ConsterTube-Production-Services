// Author: 			YOUR NAME
// Date Written:	TODAY'S DATE
// Description:		Preventing Runtime Errors with console logs and exception handling

/* Global Variables */
var goButton = document.getElementById("button");

// We have removed function findQuotient() because it is no longer needed.

function checkValidity()
{
	// Input:		none
	// Processing:	check validity of denominator to prevent irrational quotients
	// 				set local validity flag validQuotient 
	// Output:		none
	
	var validQuotient = true;  // assume the quotient is valid (HINT: bad idea)
	var numerator     = document.getElementById("top").value;
	var denominator   = document.getElementById("bottom").value;
	var denomElement  = document.getElementById("bottom");
	var errorMessage  = document.getElementById("errMsg");
	    errorMessage.innerHTML = ""; // clean up previous error message
	var theContainer = document.getElementById("result");
	
	function showQuotient() 
	{	
		// Input: 		none
		// Processing:	divide denominator into numerator
		// Output:		display quotient in existing container
		
		var quotient = (numerator / denominator);
		theContainer.innerHTML = numerator + "/" + denominator + " = " + quotient.toFixed(1);
	} // end FUNCTION showQuotient
	
	try {
			if (denominator == 0) 
			{
				throw "Denominator cannot be zero.";
				validQuotient = false; // We will change this later.
			}
			else
			{
				// WHAT DO WE DO HERE?
			}// end IF
		} // end TRY
	catch (message)
		{
			var displayedMessage = message;
			denomElement.value = ""; // clear out erroneous entry
		} // end CATCH
	finally
		{
			if (validQuotient)
			{
				showQuotient(); 
			}
			else
			{
				theContainer.innerHTML = ""; // clean up any previous quotient output
				errorMessage.style.backgroundColor = "rgb(255,0,0)";
				errorMessage.style.color = "rgb(255,255,255)";
				errorMessage.style.padding = "0px 5px";
				errorMessage.innerHTML = displayedMessage;
				denomElement.focus();
				displayedMessage = ""; //clean up any previous error message
			} // end IF validQuotient
		} // end FINALLY
} // end FUNCTION checkValidity

/* XBCEL */
console.log("23. ****BEGINNING MAIN PROGRAM****");
if (goButton.addEventListener) {
   console.log("24. > Adding TC39 Event Listener...");
   goButton.addEventListener("click", checkValidity, false);
} else if (goButton.attachEvent) {
   console.log("25. > Adding MS Event Listener...");
   goButton.attachEvent("onclick", checkValidity);
}// END IF ADDEVENTLISTENER
console.log("26. < Leaving Event Listener IF");
