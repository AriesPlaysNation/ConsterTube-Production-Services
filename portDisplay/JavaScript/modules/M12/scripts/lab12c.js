/* Author:      Brad Botteron
Date:           11/24/19
Description:    External JavaScript for lab12c.html
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
    var title = "";
    var genderImg = document.getElementById("placeholderImg");

    var allCookies = document.cookie;
    console.log(document.cookie);
    console.log(allCookies.split('; '));
    var cookieInfo = "All cookies: " + allCookies + "\n";
    //Get all the cookies pairs in an array
    cookieArray = allCookies.split("; "); // that is semicolon and space
    // Now take key value pair out of this array
    for(var i = 0; i < cookieArray.length; i++)
    {
        cookieKey = cookieArray[i].split('=')[0];
        cookieValue = cookieArray[i].split('=')[1];
        console.log("cookieKey: " + cookieKey);
        console.log("cookieValue: " + cookieValue);
        cookieInfo += "Key is: <b>" + cookieKey + "</b> and Value is: <b>" + cookieValue + "</b>\n";
        switch (cookieKey)
        {
            case "customerFirst": var customerFirst = decodeURIComponent(cookieValue);
            break;
            case "customerLast": var customerLast = decodeURIComponent(cookieValue);
            break;
            case "favColor": var favoriteColor = decodeURIComponent(cookieValue);
            break;
            case "gender": var gender = decodeURIComponent(cookieValue);
            break;
            case "image": var image = decodeURIComponent(cookieValue);
        } // END switch(cookieKey)
    } // END for loop
    var cookieElement = document.getElementById("cookieJar");
    cookieElement.innerHTML = cookieInfo;
    document.getElementById("wrapper").style.backgroundColor = favoriteColor;
    switch(image)
    {
        case "blgr122": title = "blgr122.gif";
        break;
        case "purpl028": title = "purpl028.jpg";
        break;
        case "red098": title = "red098.jpg";
        break;
    }
    if(/[fe]+male$/.test(gender))
    {
        genderImg.src = "images/female.png";
    } else {
        genderImg.src = "images/male.png";
    }
    document.body.style.background = "url(\"images/" + title + "\")";
    var customerElement = document.getElementById("customerName");
    var customerElement2 = document.getElementById("theCustomer");

    //Assigns name to different places on page
    customerElement.innerHTML = customerFirst + " " + customerLast;
    customerElement2.innerHTML = customerFirst + " " + customerLast;
} // END function readCookie()

function insertCopyright()
{
    //I:    none
    //P:    calculates current year
    //O:    places current year in footer after copyright symbol
    var currentYear = new Date().getFullYear();
    var dateContainer = document.getElementById("copyright");
    dateContainer.innerHTML = "2015-" + currentYear;
    console.log("Copyright " + currentYear + " inserted by lab12c.js");
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















