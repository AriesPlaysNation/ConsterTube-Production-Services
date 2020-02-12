/* Author:           YOUR NAME                                                */
/* Date Written:     TODAY'S DATE                                             */
/* Description:      AJAX framework for converting zip code to city and state */

function trimSpaces(str)
{
	return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}

function ajaxZipQuery(){
	var ajaxRequest;  // The variable that makes all the magic possible!
	
	try{
		// Opera 8.0+, Firefox, Safari
		ajaxRequest = new XMLHttpRequest();
	} catch (e){
		// Internet Explorer Browsers
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) { // Really old IE
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser cannot handle AJAX!");
				return false;
			}
		}
	} // END try/catch
	// Create a function that will receive data sent from the server
	ajaxRequest.onreadystatechange = function()
	{
		if(ajaxRequest.readyState == 4)
		{
			var city = document.getElementById("city");
			var state = document.getElementById("state");
			var queryResult = []; // Array literal
			ajaxResult = ajaxRequest.responseText;
			queryResult = ajaxResult.split(",");
			city.value = queryResult[0];
			state.value = trimSpaces(queryResult[1]);
		} // END if statement == 4
	} // END ajaxRequest
	var zip = document.getElementById("zipcode").value;
	var queryString = "?zipcode=" + zip;
	console.log("Query String: " + queryString);
	console.log("AJAX call to zipcodes-query.inc.php");
	ajaxRequest.open("GET", "zipcodes-query.inc.php" + queryString, true);
	ajaxRequest.send(null);
} // END function
