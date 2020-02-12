/* Author:			Brad Botteron
   Date Written:	11/7/19
   Description:		External JavaScript for chapter07h.html
					Working with advanced object literals
*/
"use strict";
// Global declarations

var kittElement = document.getElementById("KITT");
var batmobileElement = document.getElementById("Batmobile");
var herbieElement = document.getElementById("Herbie");

// Init identifiers for objects
var kitt;
var batmobile;
var herbie;
var descHerbie = document.getElementById("descHerbie");
var descBatmobile = document.getElementById("descBatmobile");
var descKitt = document.getElementById("descKITT");

// Function declarations

function Car(theName, theMake, theModel, theYear, theColor, theMaxSpeed)
{

    this.name = theName;
    this.make = theMake;
    this.model = theModel;
    this.year = theYear;
    this.color = theColor;
    this.maxSpeed = theMaxSpeed;
    this.speed = 0;
    this.accelerate = addFiveMPH;
    this.brake = subtractFiveMPH;
    this.showSpeed = speedometer;

    function addFiveMPH() // This is called a mutator method
    {
        this.speed = this.speed + 5;
    }

    function subtractFiveMPH() // How will you prevent exceeding maxSpeed?
    {
        this.speed = this.speed - 5; // How will you prevent decelerating below 0?
    }

    function speedometer() // this is called an accessor method
    {
        document.getElementById(this.name).innerHTML += "<li>" + this.name + " is going " + this.speed + "mph.</li>\n";
    }


} // end of Car constructor

function instatiateObjects()
{
    kitt = new Car("KITT", "Pontiac", "Trans Am", 1982, "black", 200);
    batmobile = new Car("Batmobile", "Lincoln", "Futura", 1955, "black", 350);
    herbie = new Car("Herbie", "Volkswagen", "Beetle", 1968, "white", 120);
}

function addDesc()
{
    descBatmobile.innerHTML = batmobile.name + ", who is a " + batmobile.color + " " + batmobile.year + " " + batmobile.make + " " + batmobile.model;
    descHerbie.innerHTML = herbie.name + ", who is a " + herbie.color + " " + herbie.year + " " + herbie.make + " " + herbie.model;
    descKitt.innerHTML = kitt.name + ", who is a " + kitt.color + " " + kitt.year + " " + kitt.make + " " + kitt.model;
}

function driveHerbie()
{
    herbie.showSpeed(); // Step 1
    herbieElement.innerHTML += "<li class=red>Accelerating to 60mph</li>\n";
    while(herbie.speed < 60) // step 2
    {
        herbie.accelerate();
        herbie.showSpeed();
    }
    herbieElement.innerHTML += "<li class=red>Decelerating to 40mph</li>\n";
    while(herbie.speed > 40)
    {
        herbie.brake();
        herbie.showSpeed();
    }
    herbieElement.innerHTML += "<li class=red>Hitting max speed</li>\n";
    while(herbie.speed < herbie.maxSpeed)
    {
        herbie.accelerate();
        herbie.showSpeed();
    }
    herbieElement.innerHTML += "<li class=red>Slow it down Speedster!</li>\n";
    while(herbie.speed > 0)
    {
        herbie.brake();
        herbie.showSpeed();
    }
}

function driveKitt()
{
    kitt.showSpeed(); // Step 1
    kittElement.innerHTML += "<li class=red>Accelerating to 55mph</li>\n";
    while(kitt.speed < 55) // step 2
    {
        kitt.accelerate();
        kitt.showSpeed();
    }
    kittElement.innerHTML += "<li class=red>Decelerating to 20mph</li>\n";
    while(kitt.speed > 20)
    {
        kitt.brake();
        kitt.showSpeed();
    }
    kittElement.innerHTML += "<li class=red>Pedal to the metal</li>\n";
    while(kitt.speed < kitt.maxSpeed)
    {
        kitt.accelerate();
        kitt.showSpeed();
    }
    kittElement.innerHTML += "<li class=red>Coming to a full stop</li>\n";
    while(kitt.speed > 0)
    {
        kitt.brake();
        kitt.showSpeed();
    }
}

function driveBatmobile()
{
    batmobile.showSpeed(); // Step 1
    batmobileElement.innerHTML += "<li class=red>Accelerating to 120mph</li>\n";
    while(batmobile.speed < 120) // step 2
    {
        batmobile.accelerate();
        batmobile.showSpeed();
    }
    batmobileElement.innerHTML += "<li class=red>Decelerating to 55mph</li>\n";
    while(batmobile.speed > 55)
    {
        batmobile.brake();
        batmobile.showSpeed();
    }
    batmobileElement.innerHTML += "<li class=red>Turbines the speed!</li>\n";
    while(batmobile.speed < batmobile.maxSpeed)
    {
        batmobile.accelerate();
        batmobile.showSpeed();
    }
    batmobileElement.innerHTML += "<li class=red>Holy speed trap, Batman! Deploying Bat-chutes!</li>\n";
    while(batmobile.speed > 0)
    {
        batmobile.brake();
        batmobile.showSpeed();
    }
}

function insertCopyright()
{
  // Input: 		none
  // Processing: 	Calculates current year
  // Output: 		Places current year in footer after copyright symbol

	var currentYear = new Date().getFullYear();
	var dateContainer = document.getElementById("year");
	dateContainer.innerHTML = currentYear;

} // end FUNCTION insertCopyright

function init()
{
  // Input: 	 none
  // Processing: Call initial script functions
  // Output: 	 none
  insertCopyright();
  instatiateObjects();
  addDesc();
  driveKitt();
  driveBatmobile();
  driveHerbie();



} // end FUNCTION init()

// Cross-Browser Compatible Event Listeners

if (window.addEventListener)
{ // TC39 browsers
	window.addEventListener("load", init, false);
}
else if (window.attachEvent)
{ // MS browsers
	window.attachEvent("onload", init);
}
