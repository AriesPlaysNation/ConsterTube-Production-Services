/* Author: Brad Botteron
Date: 11/3/19
Desc: JS for chapter07a
 */

"use strict";

function insertCopyright()
{
    //Input: none
    // Processing: Calculates current year
    // Output: Places current year in footer after copyright symbol
    var currentYear = new Date().getFullYear();
    var dateContainer = document.getElementById("year");
    dateContainer.innerHTML = currentYear;
} // END function insertCopyright()

var Card = function(fname, lname, addr, wphone, hphone)
{
    // Input: Expects first name, last name, address, work phone, and home phone
    // Processing: Declares a class based on "Rolodex card" template below
    // Output: When called, it instantiates an object based on this class

    // Class constructor
    this.firstName = fname;
    this.lastName = lname;
    this.address = addr;
    this.workPhone = wphone;
    this.homePhone = hphone;
    this.printCard = printTheCard;

    function printTheCard() // Define a method for the object
    {
        // Input: none
        // Processing: none
        // Output: Adds a "Rolodex" card element to the page based on an object
        var line1 = "Name:\t\t" + this.firstName + " " + this.lastName + "<br />";
        var line2 = "Address:\t" + this.address + "<br />";
        var line3 = "Work:\t" + this.workPhone + "<br />";
        var line4 = "Home:\t" + this.homePhone + "<br />";

        var rolodexElement = document.getElementById("rolodex");
        var newRolodexCard = document.createElement("pre");
        newRolodexCard.innerHTML = line1 + line2 + line3 + line4;
        rolodexElement.appendChild(newRolodexCard);
    } // END of printCard method
} // END of Card constructor

function createObjects()
{
    // Input: none
    // Processing: Creates objects by calling the Card class constructor
    // Output: none
    // Create 3 instances of this object:
    var iabel = new Card("Isaiah", "Abel", "21 N. Anythony Blvd", "555-1234", "555-9876");
    var tsingh = new Card("Tanveer", "Singh", "2025 Somewhere Lane", "480-9137", "480-7319");
    var cparrish = new Card(); // Alternative Approach
    cparrish.firstName = "Christopher";
    cparrish.lastName = "Parrish";
    cparrish.address = "1234 Any Lane";
    cparrish.workPhone = "777-7777";
    cparrish.homePhone = "777-1234";
    // Print cards for the 3 objects
    iabel.printCard();
    tsingh.printCard();
    cparrish.printCard();
} // END function createObjects

function init()
{
    // Input: none;
    // Processing: calls the other functions necessary for script initialization
    // Output: none
    insertCopyright();
    createObjects();
} // END function init()

// XBCEL
if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", init);
}










