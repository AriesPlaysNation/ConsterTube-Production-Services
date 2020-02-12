/* Author:      Brad Botteron
Date:           11/24/19
Description:    External JavaScript for chapter09e.html
                Multi-page format
 */

"use strict";

// Function decs
function readStorage()
{
    //I:    none
    //P:    reads local storage items from browser cache
    //O:    customizes the page based on local storage values

    var customerElement = document.getElementById("theCustomer");
    document.body.style.backgroundColor = decodeURIComponent(localStorage.getItem("favColor"));
    customerElement.innerHTML = decodeURIComponent(localStorage.getItem("customer"));

    //Itemize web storage in console log
    var storageItem = ["customer", "favColor"];
    for(var i = 0; i < storageItem.length; i++)
    {
        console.log(decodeURIComponent(localStorage.getItem(storageItem[i])));
    } // END for loop
} // END funciton readStorage()

function insertCopyright()
{
    var year = new Date().getFullYear();
    var dateContainer = document.getElementById("copyright");
    dateContainer.innerHTML = "Copyright " + year + " inserted by chapter09e.js";
    console.log("Copyright: " + year + " has been inserted");
} // END function insertCopyright()

function init()
{
    readStorage();
    insertCopyright();
} // END function init()

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", init);
}










