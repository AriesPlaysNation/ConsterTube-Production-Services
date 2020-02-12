/* Author:      Brad Botteron
Date:           12/5/19
Desc:           Event listeners for Henry Books AJAX demo
 */

"use strict";

var paperbackElement = document.getElementById("paperback");
var genreElement = document.getElementById("genre");
var searchButton = document.getElementById("search");

function insertCopyright()
{
    // I:   None
    // P:   calculates current year
    // O:   places current year in footer after copyright symbol

    var currentYear = new Date().getFullYear();
    var dateContainer = document.getElementById("copyright");
    dateContainer.innerHTML = "2015-" + currentYear;
    console.log("Copyright 2015-" + currentYear + " inserted by eventListeners.js");
} // END function insertCopyright

// XBCEL
if(paperbackElement.addEventListener)
{
    console.log("Setting up TC39 XBCELS for ajaxFunction");
    window.addEventListener("load", insertCopyright, false);
    paperbackElement.addEventListener("change", ajaxFunction, false);
    genreElement.addEventListener("change", ajaxFunction, false);
    searchButton.addEventListener("click", ajaxFunction, false);
} else if (paperbackElement.attachEvent)
{
    console.log("Setting up IE XBCELS for ajaxFunction");
    window.attachEvent("onload", ajaxFunction);
    paperbackElement.attachEvent("onchange", ajaxFunction);
    genreElement.attachEvent("onchange", ajaxFunction);
    searchButton.attachEvent("onclick", ajaxFunction);
}