/* Author:      Brad Botteron
Date:           11/24/19
Description:    External JavaScript for lab12d.html
                Multi-page format
 */

"use strict";

//function declarations
function writeStorage()
{
    //I:    none
    //P:    builds local storage items from form data
    //O:    writes local storage items to browser cache
    if(typeof (Storage) != "undefined") // Check browser support
    {
        //Store
        var customerFirst = encodeURIComponent(document.myform.customerFirst.value);
        var customerLast = encodeURIComponent(document.myform.customerLast.value);
        var favoriteColor = encodeURIComponent(document.myform.favColor.value);
        var gender = encodeURIComponent(document.myform.gender.value);
        var image = encodeURIComponent(document.myform.image.value);

        localStorage.setItem("customerFirst", customerFirst);
        localStorage.setItem("customerLast", customerLast);
        localStorage.setItem("favColor", favoriteColor);
        localStorage.setItem("gender", gender);
        localStorage.setItem("image", image);
        console.log("Written to local storage: \n" + customerFirst + " " + customerLast + "\n" + favoriteColor + "\n" + gender + "\n" + image);
        document.getElementById("error").innerHTML = "Your browser supports web storage. Data has been stored.";
    } // END if statement
} // END function writeStorage()

function insertCopyright()
{
    var year = new Date().getFullYear();
    var dateContainer = document.getElementById("copyright");
    dateContainer.innerHTML = "Copyright " + year + " inserted by lab12d.js";
    console.log("Copyright: " + year + " has been inserted");
}

function createEventListeners()
{
    var webStoreButton = document.getElementById("webStore");
    if(window.addEventListener)
    {
        webStoreButton.addEventListener("click", writeStorage, false);
    } else if (window.attachEvent)
    {
        webStoreButton.attachEvent("onclick", writeStorage);
    }
} //END function createEventListeners()

function init()
{
    createEventListeners();
    insertCopyright();
} // END init()

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", init);
}
















