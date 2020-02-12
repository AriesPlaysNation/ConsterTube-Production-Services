/* Author:      Brad Botteron
Date:           11/24/19
Description:    External JavaScript for lab12a.html
                Multi-page format
 */

"use strict";

// Global variable declarations
var currentYear = new Date().getFullYear();
var dateContainer = document.getElementById("copyright");

// Function declarations
function insertCopyright()
{
    //Input: None
    //Processing: Calculates the current year
    //Output: Places current year in footer after copyright symbol

    dateContainer.innerHTML = "2015-" + currentYear;
    console.log("Copyright " + currentYear + " inserted by lab12a.js");
} // END function copyright

function init()
{
    //Input: none
    //Processing: Call initial script functions
    //Output: none
    insertCopyright();
} //END function init()

//XBCEL
if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if(window.attachEvent)
{
    window.attachEvent("onload", init);
}