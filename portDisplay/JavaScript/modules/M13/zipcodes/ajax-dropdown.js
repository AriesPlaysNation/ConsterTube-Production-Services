/* Author:           YOUR NAME                                          */
/* Date Written:     TODAY'S DATE                                       */
/* Description:      AJAX framework for ZipCode state dropdown datalist */

function ajaxCreateStateList() {
	var ajaxStateRequest;  // The variable that makes all the magic possible!

	try {
		// Real Browsers
		ajaxStateRequest = new XMLHttpRequest();
	} catch (e) {
		// Internet Explorer Browsers
		try {
			ajaxStateRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				ajaxStateRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				// Something went wrong
				alert("Your browser cannot handle AJAX!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	ajaxStateRequest.onreadystatechange = function ()
	{
		if(ajaxStateRequest.readyState == 4)
		{
			var ajaxDisplay = document.getElementById("ajaxState");
			ajaxDisplay.innerHTML = ajaxStateRequest.responseText;
		} // END if statement
	} // END ajaxStateRequest
	console.log("No Query string required.");
	console.log("AJAX call to dropdown-zips.inc.php");
	ajaxStateRequest.open("GET", "dropdown-zips.inc.php", true);
	ajaxStateRequest.send(null);
} // END function
