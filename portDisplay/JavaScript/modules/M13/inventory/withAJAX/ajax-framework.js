/* Author:           Brad Botteron                                     */
/* Date Written:     11/28/19                                    */
/* Description:      AJAX framework with two processes for Inventory Demo */

// Browser support code
function ajaxFunction(whichSelected){
	var ajaxRequest;  // The variable that makes all the magic possible!
	
	try{
		// Real Browsers
		ajaxRequest = new XMLHttpRequest();
	} catch (e){ // Microsoft Trap
		try{
			ajaxRequest = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) { // Very old ms trap
			try{
				ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e){
				// Something went wrong
				alert("Your browser cannot handle AJAX!");
				return false;
			} // END something wrong
		} // END very old ms trap
	} // END ms trap
	// Create a function that will receive data sent from the server
	if(whichSelected == "datalist")
	{
		ajaxRequest.onreadystatechange = function()
		{
			if(ajaxRequest.readyState == 4)
			{
				var ajaxDisplay = document.getElementById("currentParts");
				ajaxDisplay.innerHTML = ajaxRequest.responseText;
			} // END if readystate
		} // END onreadystatechange function
		console.log("No query string required.");
		console.log("AJAX: datalist (calling inventoryA.inc.php");
		ajaxRequest.open("GET", "inventoryA.inc.php", true);
		ajaxRequest.send(null);
	} // END if datalist

	if(whichSelected == "select")
	{
		// Create a function that will receive data sent from the server
		ajaxRequest.onreadystatechange = function()
		{
			if(ajaxRequest.readyState == 4)
			{
				var ajaxDisplay = document.getElementById("update");
				ajaxDisplay.innerHTML = ajaxRequest.responseText;
				var ajaxClear = document.getElementById("feedback");
				ajaxClear.innerHTML = "<h3>Results</h3>";
				// Reset Event Listener
				var updateBtn = document.getElementById("updateBtn");
				updateBtn.addEventListener("click", function(){ajaxFunction("update");}, false);
			} // END if readystate
		} // END function onreadystatechange
		var partNum = document.getElementById("partNum").value;
		var queryString = "?partNum=" + partNum;
		console.log("Query string: " + queryString);
		console.log("AJAX: select (Calling InventoryB.inc.php)");
		ajaxRequest.open("GET", "inventoryB.inc.php" + queryString, true);
		ajaxRequest.send(null);
	} // END if select
	if(whichSelected == "update") {
		// Create a function that will receive data sent from the server
		ajaxRequest.onreadystatechange = function () {
			if (ajaxRequest.readyState == 4) {
				var ajaxDisplay = document.getElementById("feedback");
				ajaxDisplay.innerHTML = ajaxRequest.responseText;
			} // END if readystate
		} // END funciton onreadystatechange
		var partNum = document.getElementsByName("partNum")[0].value;
		var description = document.getElementsByName("description")[0].value;

		for (i = 0; i <= 3; i++)
		{
			if (document.getElementsByName("unit")[i].checked) {
				var unit = document.getElementsByName("unit")[i].value;
			}
		} // END for unit

		var qty = document.getElementsByName("qty")[0].value;
		var cost = document.getElementsByName("cost")[0].value;
		var price = document.getElementsByName("price")[0].value;

		for (i = 0; i <= 1; i++)
		{
			// Determine which radio button is checked for ON SPECIAL
			if(document.getElementsByName("onSpecial")[i].checked)
			{
				var special = document.getElementsByName("onSpecial")[i].value;
			}
		} // End for special

		for(i = 0; i <= 1; i++)
		{
			if(document.getElementsByName("deleted")[i].checked)
			{
				var deleted = document.getElementsByName("deleted")[i].value;
			}
		} // END for deleted
		var warranty = document.getElementsByName("warranty")[0].value;
		var queryString = "?partNum=" + partNum + "&description=" + description;
		queryString += "&unit=" + unit + "&qty=" + qty + "&cost=" + cost;
		queryString += "&price=" + price + "&onSpecial=" + special;
		queryString += "&warranty=" + warranty + "&deleted=" + deleted;
		console.log("Query String: " + queryString);
		console.log("AJAX: update (calling inventoryC.inc.php");
		ajaxRequest.open("GET", "inventoryC.inc.php" + queryString, true);
		ajaxRequest.send(null);
	} // END if update
} // END ajaxfunction()
