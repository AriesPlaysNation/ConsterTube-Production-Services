/* Author:          Brad Botteron
   Date Written:    11/3/19
   Desc:            Chapter 7 Lab JavaScript
 */

"use strict";


function addDate()
{
    var currentYear = new Date().getFullYear();
    var dateContainer = document.getElementById("year");
    dateContainer.innerHTML = currentYear;
}

function init()
{
    addDate();
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", init);
}




