/* Author:      Brad Botteron
Date:           11/24/19
Description:    External JavaScript for chapter09b.html
                Multi-page format
 */

"use strict";

//Globals
var errorDiv = document.getElementById("errorMsg");

//Functions
function writeCookies()
{
    //I:        none
    //P:        builds a cookie from the form data
    //O:        writes the cookie to browser cache
    if(document.myform.customer.value == "")
    {
        errorDiv.innerHTML = ("Please enter a name.");
        errorDiv.style.display = "block";
        return;
    } else {
        errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
    } //END if customer value is empty

    var myPath = "/~bbottero";
    var now = new Date();
    now.setTime(now.getTime() + 1 * 600 * 1000); //Expires in 10 minutes
    var expiry = now.toUTCString();             // extend expiry for production
    var customer = encodeURIComponent(document.myform.customer.value);
    var favoriteColor = encodeURIComponent(document.myform.favColor.value);
    document.cookie="customer=" + customer + "; expires=" + expiry + "; path=" + myPath;
    document.cookie="favColor=" + favoriteColor + "; expires=" + expiry + "; path=" + myPath;
    var logString = "customer=" + customer + "\nfavColor=";
    logString += favoriteColor + "\nexpires=" + expiry;
    console.log("Cookies written");
    console.log(logString);
} // END function writeCookies()

function insertCopyright()
{
    //I:        none
    //P:        calculates the current year
    //O:        places current year in footer after copyright symbol
    var currentYear = new Date().getFullYear();
    var dateContainer = document.getElementById("copyright");
    dateContainer.innerHTML = "2015-" + currentYear;
    console.log("Copyright " + currentYear + " inserted by chapter09b.js");
} // END function insertCopyright()

function createEventListeners()
{
    //I:        none
    //P:        creates event listeners for the scripts
    //O:        none
    var cookieButton = document.getElementById("cookie");
    if(window.addEventListener)
    {
        cookieButton.addEventListener("click", writeCookies, false);
    } else if (window.attachEvent)
    {
        cookieButton.attachEvent("onclick", writeCookies);
    }
} // END function createEventListeners()

function init()
{
    //I:    none
    //P:    call initial scripts function and assigns some variables
    //O:    none
    createEventListeners();
    insertCopyright();
} // END function init()

//XBCEL
if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if(window.attachEvent)
{
    window.attachEvent("onlaod", init);
}















