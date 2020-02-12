/* Author:      Brad Botteron
Date:           11/24/19
Description:    External JavaScript for chapter09c.html
                Multi-page format
 */

"use strict";

// Function declarations

function readCookies()
{
    //I:    none
    //P:    reads cookie from browser cache, splits key/value pairs, and
    //O:    customizes the page based on cookie values
    //Local vars
    var cookieArray = [];
    var cookieKey = "";
    var cookieValue = "";

    var allCookies = document.cookie;
    console.log(document.cookie);
    console.log(allCookies.split('; '));
    var cookieInfo = "All cookies: " + allCookies + "\n";
    //Get all the cookies pairs in an array
    for(var i = 0; i < cookieArray.length; i++)
    {
        cookieKey = cookieArray[i].split("=")[0];
        cookieValue = cookieArray[i].split("=")[1];
        console.log("cookieKey: " + cookieKey);
        console.log("cookieValue: " + cookieValue);
        cookieInfo += "Key is: <b>" + cookieKey + "</b> and Value is: <b>" + cookieValue + "</b>\n";
        switch (cookieKey)
        {
            case "customer": var customerName = decodeURIComponent(cookieValue);
            break;
            case "favColor": var favoriteColor = decodeURIComponent(cookieValue);
            break;
        } // END switch(cookieKey)
    } // END for loop
    var cookieElement = document.getElementById("cookieJar");
    cookieElement.innerHTML = cookieInfo;
    document.body.style.backgroundColor = favoriteColor;
    var customerElement = document.getElementById("theCustomer");
    customerElement.innerHTML = customerName;
} // END function readCookie()

function insertCopyright()
{
    //I:    none
    //P:    calculates current year
    //O:    places current year in footer after copyright symbol
    var currentYear = new Date().getFullYear();
    var dateContainer = document.getElementById("copyright");
    dateContainer.innerHTML = "2015-" + currentYear;
    console.log("Copyright " + currentYear + " inserted by chapter09c.js");
} // END funciton insertCopyright()

function init()
{
    readCookies();
    insertCopyright();
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if(window.attachEvent)
{
    window.attachEvent("onload", init);
}















