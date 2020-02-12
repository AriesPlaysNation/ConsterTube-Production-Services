/* Author: Brad Botteron
Date: 11/3/19
Desc: JS for chapter 07c
 */

"use strict";

// Declare some global html objects
var button1 = document.getElementById("guitar1");
var button2 = document.getElementById("guitar2");

function insertCopyright()
{
    var currentYear = new Date().getFullYear();
    var dateContainer = document.getElementById("year");
    dateContainer.innerText = currentYear;
}

var Guitar = function(theName, theBrand, theModel, theId)
{
    this.guitarName = theName;
    this.guitarBrand = theBrand;
    this.guitarModel = theModel;
    this.guitarId = theId;

    this.showDescription = function()
    {
        var description = "\n\t<h2>" + this.guitarName + "</h2>\n\t<h3>" + this.guitarModel + "</h3>\n\tby " + this.guitarBrand;
        return (description);
    }
}

// Create 2 instances based on the guitar class
// Note: if these 2 lines are in the global scope, why can they not be with the other global declarations above?
var instrument1 = new Guitar("Tiger", "Paul Reed Smith", "Hollowbody II", "one");
var instrument2 = new Guitar("Sunny", "Ibanez", "Roland G3 synth controller", "two");

function displayGuitar(selectedGuitar)
{
    var theElement = document.getElementById(selectedGuitar.guitarId);
    theElement.innerHTML = selectedGuitar.showDescription();
}

// XBCEL
if(button1.addEventListener)
{
    button1.addEventListener("click", function(){displayGuitar(instrument1);}, false);
    button2.addEventListener("click", function(){displayGuitar(instrument2);}, false);
    window.addEventListener("load", insertCopyright, false);
} else if (window.attachEvent)
{
    button1.attachEvent("onclick", function(){displayGuitar(instrument1);});
    button2.attachEvent("onclick", function(){displayGuitar(instrument1);});
}









