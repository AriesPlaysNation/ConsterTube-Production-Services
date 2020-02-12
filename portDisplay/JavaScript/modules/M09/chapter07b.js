/* Author: Brad Botteron
Date: 11/3/19
Desc: JS for Chapter07b
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

    var celllington = new Card("Christi", "Ellington", "2800 N. Anthony Blvd", "55-5768", "555-9789");
    celllington.email = "lellington@ivytech.edu"; // added without prototype
    var sholley = new Card("Shalanda", "Holley", "2025 Nowhere st.", "777-7777", "777-1111");
    var mgosheff = new Card();
    mgosheff.firstName = "Michael";
    mgosheff.lastName = "Gosheff";
    mgosheff.address = "1234 Any St.";
    mgosheff.workPhone = "888-2351";
    mgosheff.homePhone = "888-7896";
    Card.prototype.email = "not available"; // adds property to constructor using PROTOTYPE property
    console.log(Card.prototype.constructor); // for review of the class constructor
    mgosheff.email = "mgosheff@ivytech.edu";

    var dmyers = new Card("Dustin", "Myers", "1122 The other st.", "111-4568", "111-4567");
    // Constructor now has the email property
    dmyers.email = "dmyers53@ivytech.edu"; // so we can add dmyer's email address

    Card.prototype.printModCard = function()
    {
        // Input: none
        // Processing: none
        // Output: adds a "rolodex" card element to the page based on an object with prototype properties
        var line1 = "Name:\t\t" + this.firstName + " " + this.lastName + "<br>";
        var line2 = "Address:\t" + this.address + "<br>";
        var line3 = "Work:\t\t" + this.workPhone + "<br>";
        var line4 = "Home:\t\t" + this.homePhone + "<br>";
        var line5 = "Email:\t\t" + this.email + "<br>"; // this is the prototype property
        var rolodexElement = document.getElementById("rolodex");
        var newRolodexElement = document.createElement("pre");

        newRolodexElement.innerHTML = line1 + line2 + line3 + line4 + line5;
        newRolodexElement.style.backgroundColor = "rgb(240, 240, 255)";
        newRolodexElement.style.color = "rgb(0,0,0)";
        rolodexElement.appendChild(newRolodexElement);
    } // END of printModCard method

    // Print cards
    celllington.printCard();
    sholley.printCard();
    dmyers.printCard(); // dmyers object created after new method was added to constructor
    mgosheff.printModCard(); // mgosheff object created before new method added, but it's still available.
    celllington.printModCard(); // cellington email added without prototype, but it's now available.
    sholley.printModCard(); // sholley email was never added.
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










