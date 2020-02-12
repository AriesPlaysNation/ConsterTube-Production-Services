/* AJAX Framework for PHP/MySQL Query in SDEV 250 Lab13 
   Author:         Brad Botteron
   Date Written:   11/30/19
   Description:    DESCRIPTION OF THE SCRIPT
*/

console.log("Entering ajax-framework1.js");

//Browser Support Code
function ajaxFunction(whichSelected) {
	var ajaxRequest; // The variable that makes the AJAX magic possible!
	try {
		// REAL BROWSERS
		ajaxRequest = new XMLHttpRequest();
	} catch (e) {
		// Internet Exploder Browsers
		try {
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {
				// something went wrong
				alert("Your browser broke!");
				return false;
			}
		}
	}
	// Create a function that will receive data sent from the server
	if(whichSelected == "programChange")
	{
		ajaxRequest.onreadystatechange = function()
		{
			if(ajaxRequest.readyState == 4) {

				var course = document.getElementById("course");
				course.innerHTML = ajaxRequest.responseText;

				var courseChange = document.getElementById("course");
				courseChange.addEventListener("change", function () {
					ajaxFunction("courseChange");
				}, false);

			}
		} // END readystatechange
		var program = document.getElementById("program").value;
		var queryString = "?program=" + program;
		console.log("Query String: " + queryString);
		console.log("AJAX: program (Calling course-info-query.php");
		ajaxRequest.open("GET", "course-info-query.php" + queryString, true);
		ajaxRequest.send(null);
	}

	if(whichSelected == "courseChange")
	{
		ajaxRequest.onreadystatechange = function()
		{
			if(ajaxRequest.readyState == 4) {

				var description = document.getElementById("catalog");
				description.innerHTML = ajaxRequest.responseText;

				var courseChange = document.getElementById("course");
				courseChange.addEventListener("change", function () {
					ajaxFunction("courseChange");
				}, false);

			}
		} // END readystatechange
		var program = document.getElementById("program").value;
		var courseNum = document.getElementById("course").value;
		var queryString = "?program=" + program + "&courseNum=" + courseNum;
		console.log("Query String: " + queryString);
		console.log("AJAX: program (Calling course-info-query.php");
		ajaxRequest.open("GET", "course-info-query.php" + queryString, true);
		ajaxRequest.send(null);
	}
}



















