/* Author:      Brad Botteron
Date:           11/24/19
Description:    External JavaScript for lab12e.html
                Multi-page format
 */

"use strict";

var genderImg = document.getElementById("placeholderImg");
var title = "";

// Function decs
function readStorage()
{
    //I:    none
    //P:    reads local storage items from browser cache
    //O:    customizes the page based on local storage values

    var customerElement = document.getElementById("theCustomer");
    var customerElement2 = document.getElementById("customerName");
    document.getElementById("wrapper").style.backgroundColor = decodeURIComponent(localStorage.getItem("favColor"));

    switch (decodeURIComponent(localStorage.getItem("image")))
    {
        case "blgr122": title = "blgr122.gif";
            break;
        case "purpl028": title = "purpl028.jpg";
            break;
        case "red098": title = "red098.jpg";
            break;
    }

    if(/[fe]+male$/.test(decodeURIComponent(localStorage.getItem("gender"))))
    {
        genderImg.src = "images/female.png";
    } else {
        genderImg.src = "images/male.png";
    }

    document.body.style.background = "url(\"images/" + title + "\")";

    customerElement.innerHTML = decodeURIComponent(localStorage.getItem("customerFirst")) + " " +
    decodeURIComponent(localStorage.getItem("customerLast"));
    customerElement2.innerHTML = decodeURIComponent(localStorage.getItem("customerFirst")) + " " +
        decodeURIComponent(localStorage.getItem("customerLast"));

    //Itemize web storage in console log
    var storageItem = ["customerFirst", "customerLast", "gender", "image", "favColor"];
    for(var i = 0; i < storageItem.length; i++)
    {
        console.log(decodeURIComponent(localStorage.getItem(storageItem[i])));
    } // END for loop
} // END funciton readStorage()

function insertCopyright()
{
    var year = new Date().getFullYear();
    var dateContainer = document.getElementById("copyright");
    dateContainer.innerHTML = "Copyright " + year + " inserted by lab12e.js";
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










