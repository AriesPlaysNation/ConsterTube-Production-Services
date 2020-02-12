/* Author: Brad Botteron
Date Written: 9/30/19
Filename: lab05.js
 */

"use strict";

function createToc()
{
    console.log("*1. Entering createToc()");
    var tocList = document.getElementsByTagName("ul")[0];
    var h3Heading = document.getElementsByTagName("h3");
    var tocEntry = "";

    for(var i = 1; i < 11; i++)
    {
        tocEntry = (h3Heading[i].innerText);
        var li = document.createElement("li");
        var a = document.createElement("a");
        a.text = tocEntry;
        a.href = "#" + [i];
        li.appendChild(a);
        tocList.appendChild(li);

    }

    console.log("*--------CONSOLE LOGS INCOMING------")
    console.log("a = " + a);
    console.log("li = " + li.innerHTML);
    console.log("tocList = " + tocList.innerHTML);
    console.log("*2. tocEntry: " + tocEntry);
    console.log("*3. Exiting createToc()");
}

function showDate()
{
    console.log("*6. entering showDate()");
    var currentYear = new Date().getFullYear();
    var dateContainer = document.getElementById("year");
    dateContainer.innerHTML = currentYear;
    console.log("*7. Exiting showDate()");
}

if(window.addEventListener)
{
    console.log("*4 . Adding TC39 Event Listener");
    window.addEventListener("load", createToc(), false);
    window.addEventListener("load", showDate(), false);
} else if(window.attachEvent)
{
    console.log("*5 . Attaching MS event listener");
    window.attachEvent("onload", createToc());
    window.attachEvent("onload", showDate());
}

