/* Author: Brad Botteron
Date: 11/3/19
Desc: JS for chapter07e
 */

"use strict";

function insertCopyright()
{
    var currentYear = new Date().getFullYear();
    var dateContainer = document.getElementById("year");
    dateContainer.innerHTML = currentYear;
}

function singleton()
{
    var singletonElement = document.getElementById("singleton");
    var apple = {
        type: "mac",
        color: "red",
        getInfo: function(){return this.color + " " + this.type + " apple";}
    }

    apple.color = "reddish";
    singletonElement.innerHTML = "I have a " + apple.getInfo() + "! Want a bite?";
    singletonElement.style.color = "rgb(255,0,0)";
}

function init()
{
    insertCopyright();
    singleton();
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", init);
}














