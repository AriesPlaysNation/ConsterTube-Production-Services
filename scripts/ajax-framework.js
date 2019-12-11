/* Author:          Brad Botteron
   Date Written:    12/10/2019
   Description:     ajax framework
 */

"use strict";

console.log("Entering ajax-framework");

//Browser support code
function ajaxFunction()
{
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

    //Create a function that will receive data sent from the server
    ajaxRequest.onreadystatechange = function()
    {
        if(ajaxRequest.readyState == 4)
        {
            var form = document.getElementById("formPlace");
            form.innerHTML = ajaxRequest.responseText;
        } // END if readystate
        /*var firstName = document.getElementById("firstNameInput").value;
        var lastName = document.getElementById("lastNameInput").value;
        var emailAddress = document.getElementById("emailAddressInput").value;
        var telephone = document.getElementById("telephoneInput").value;

        var queryString = "?firstName="+ firstName + "&lastName=" + lastName;
        queryString += "&emailAddress=" + emailAddress + "&telephone" + telephone;*/

        ajaxRequest.open("GET", "formSubmission.php", true);
        ajaxRequest.send(null);
    }
}













