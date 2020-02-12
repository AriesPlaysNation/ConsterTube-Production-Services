/* Author:           YOUR NAME                                     */
/* Date Written:     TODAY'S DATE                                    */
/* Description:      AJAX framework with two processes for Inventory Demo */

//Browser Support Code
function ajaxFunction() 
{
	var ajaxRequest; // The variable that makes Ajax possible!
	try
	{
		// REAL BROWSERS
		ajaxRequest = new XMLHttpRequest();
	} 
	catch (e) // MICROSOFT TRAP
	{
	  try
	  {
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
	  } 
	  catch (e) // VERY OLD MICROSOFT TRAP
	  {
		try
		{
	  	  ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
		} 
		catch (e) 
		{    // something went wrong
			alert("Your browser does not support AJAX.");
			return false;
		}// ends SOMETHING WRONG
	   } //ends VERY OLD MICROSOFT TRAP
	}// ends MICROSOFT TRAP


	// Create a function that will receive date sent from the server
	ajaxRequest.onreadystatechange = function()
	{
		console.log("Monitoring readyState: " + ajaxRequest.readyState);
		if(ajaxRequest.readyState == 4)
		{
			console.log("responseText received. readyState: " + ajaxRequest.readyState);
			var ajaxDisplay = document.getElementById("feedback");
			ajaxDisplay.innerHTML = ajaxRequest.responseText;
		} // END if readystate 4
	} /// END on ready state change

	// Prepare the ajax call
	var paperback = document.getElementById("paperback").value;
	var genre = document.getElementById("genre").value;

	// Build query string
	var queryString = "?paperback=" + paperback + "&genre=" + genre;
	console.log("Query String: " + queryString);
	console.log("Opening ajax request to henryBooksReport.inc.php...");
	ajaxRequest.open("GET", "henryBooksReport.inc.php" + queryString, true);
	console.log("Sending ajax request...");
	ajaxRequest.send(null);


}// END AJAXFUNCTION




















