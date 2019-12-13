/* Author:          Brad Botteron
   Date Written:    12/10/2019
   Description:     ajax framework
 */

"use strict";


//Browser support code
function ajaxFunction()
{
    console.log("Entering ajax-framework");
    var ajaxRequest; // The variable that makes the AJAX magic possible!
    try {
        // REAL BROWSERS
        ajaxRequest = new XMLHttpRequest();
        console.log("Going through with ajax");
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

    //Create a function that will receive data sent from the server
    console.log("1. " + ajaxRequest.readyState);
    ajaxRequest.onreadystatechange = function()
    {
        console.log("2. " + ajaxRequest.readyState);
        if(ajaxRequest.readyState == 4)
        {
            console.log("3. " + ajaxRequest.readyState);
            var formPlace = document.getElementById("formPlace");
            formPlace.innerHTML = ajaxRequest.responseText;
            document.getElementById("formDetails").style.display = "none";
            document.getElementById("formPlace").style.display = "block";
        } // END if readystate

    }

    var firstName = document.getElementById("firstNameInput").value;
    var lastName = document.getElementById("lastNameInput").value;
    var emailAddress = document.getElementById("emailInput").value;
    var telephone = document.getElementById("telephoneInput").value;

    var queryString = "?firstName="+ firstName + "&lastName=" + lastName;
    queryString += "&emailAddress=" + emailAddress + "&telephone=" + telephone;

    ajaxRequest.open("GET", "formSubmission.php" + queryString, true);
    ajaxRequest.send(null);
}













