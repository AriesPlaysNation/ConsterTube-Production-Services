/* Author:      Brad Botteron
Date:           11/24/19
Description:    External JavaScript for lab12b.html
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
    if((document.myform.customerFirst.value == "") && (document.myform.customerLast.value == ""))
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
    var days = 7;
    now.setTime(now.getTime() + (days * 86400000)); //Expires in 1 week
    var expiry = now.toUTCString();             // extend expiry for production
    var customerFirst = encodeURIComponent(document.myform.customerFirst.value);
    var customerLast = encodeURIComponent(document.myform.customerLast.value);
    var favoriteColor = encodeURIComponent(document.myform.favColor.value);
    var gender = encodeURIComponent(document.myform.gender.value);
    var image = encodeURIComponent(document.myform.image.value);
    document.cookie="customerFirst=" + customerFirst + "; ";
    document.cookie="customerLast=" + customerLast + "; ";
    document.cookie="gender=" + gender + "; ";
    document.cookie="image=" + image + "; ";
    document.cookie="favColor=" + favoriteColor + "; ";
    document.cookie="expiry=" + expiry + "; ";
    document.cookie="path=" + myPath + "; ";


    var logString = "customerFirst=" + customerFirst + "\ncustomerLast=" + customerLast + "\nfavColor=";
    logString += favoriteColor + "\ngender=" + gender + "\nimage=" + image + "\nexpires=" + expiry + "\npath=" + myPath;
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
    console.log("Copyright " + currentYear + " inserted by lab12b.js");
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















