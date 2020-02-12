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
var turn = ["left", "right"];
var index = 0;

// Function declarations

function Car(theName, theMake, theModel, theYear, theColor, theMaxSpeed)
{
    /* Input: Parameters include the car name, make, model, year, color, and top speed
    Processing: Construct an object based on the class definition below.
    Output: none*/
    // Class construvctor
    this.name = theName;
    this.make = theMake;
    this.model = theModel;
    this.year = theYear;
    this.color = theColor;
    this.maxSpeed = theMaxSpeed;
    this.speed = 0;
    this.position = position;
    this.accelerate = addFiveMPH;
    this.brake = subtractFiveMPH;
    this.showSpeed = speedometer;
    this.directions = ["North", "East", "South", "West"];

    function addFiveMPH() // This is called a mutator method
    {
        /* Input: none
        processing: add 5 to vehicles current speed
        output: none
         */
        this.speed = this.speed + 5;
    }

    function subtractFiveMPH() // How will you prevent exceeding maxSpeed?
    {
        /* Input: none
        processing: subtract 5 from vehicles speed
        output: none
         */
        this.speed = this.speed - 5; // How will you prevent decelerating below 0?
    }

    function speedometer() // this is called an accessor method
    {
        /* Input: none
        processing: none
        output: display vehicles current speed
         */
        document.getElementById(this.name).innerHTML += "<li>" + this.name + " is going " + this.speed + "mph.</li>\n";
    }

    function position()
    {
        /* input: none
        processing: none
        output: display vehicles current direction after change
         */
        document.getElementById(this.name).innerHTML += "<li class=red>New Direction: " + this.directions[index] + "</li>\n";
        console.log("New position: " + this.directions[index]);
    }


} // end of Car constructor

function instatiateObjects()
{
    /* input: none
    processing: instantiate objects for kitt, batmobile, and herbie
    output: none
     */
    kitt = new Car("KITT", "Pontiac", "Trans Am", 1982, "black", 200);
    batmobile = new Car("Batmobile", "Lincoln", "Futura", 1955, "black", 350);
    herbie = new Car("Herbie", "Volkswagen", "Beetle", 1968, "white", 120);
}

function addDesc()
{
    /* input: none
    processing: none
    output: displays vehicles descriptions
     */
    descBatmobile.innerHTML = batmobile.name + ", who is a " + batmobile.color + " " + batmobile.year + " " + batmobile.make + " " + batmobile.model;
    descHerbie.innerHTML = herbie.name + ", who is a " + herbie.color + " " + herbie.year + " " + herbie.make + " " + herbie.model;
    descKitt.innerHTML = kitt.name + ", who is a " + kitt.color + " " + kitt.year + " " + kitt.make + " " + kitt.model;
}

function newDirection(turn)
{
    /* input: turn direction
    processing: assigns random turn from array of "left and "right"
    output: none
     */
    var direction = Math.floor(Math.random() * turn.length);
    if(direction == 0)
    {
        direction = "left";
        if(index == 0)
        {
            index = 3;
        } else {
            index -= 1;
        }
    } else if(direction == 1)
    {
        direction = "right";
        if(index == 3)
        {
            index = 0;
        } else {
            index += 1;
        }
    }
    console.log("New Directino: " + direction);
    return direction;
}

function driveHerbie()
{
    /* Input: none
    processing: "drive" herbie by invoking accelerate(), brake(), and showSpeed() methods based
            on the direction
    output: add a list item to the ordered list for vehicle each time the showSpeed() method is invoked
     */
    herbie.showSpeed();
    herbieElement.innerHTML += "<li class=red>" + herbie.name + " is facing North" + ".</li>\n";
    herbieElement.innerHTML += "<li class=red>Accelerating to 55mph</li>\n";
    while(herbie.speed < 55)
    {
        herbie.accelerate();
        herbie.showSpeed();
    }
    herbieElement.innerHTML += "<li class=red>Approaching turn, slowing down to 20mph</li>\n";
    while(herbie.speed > 20)
    {
        herbie.brake();
        herbie.showSpeed();
    }
    herbieElement.innerHTML += "<li class=red>Turning " + newDirection(turn) + " to avoid speedbump." + "</li>\n";
    herbie.position();
    herbieElement.innerHTML += "<li class=red>Speeding up to 50</li>\n";
    while(herbie.speed < 50)
    {
        herbie.accelerate();
        herbie.showSpeed();
    }
    herbieElement.innerHTML += "<li class=red>Approaching a " + newDirection(turn) + " turn, slowing down</li>\n";
    while(herbie.speed > 20)
    {
        herbie.brake();
        herbie.showSpeed();
    }
    herbie.position();
    herbieElement.innerHTML += "<li class=red>Booking it!</li>\n";
    while(herbie.speed < herbie.maxSpeed)
    {
        herbie.accelerate();
        herbie.showSpeed();
    }
    herbieElement.innerHTML += "<li class=red>Slowing down to enter the garage to avoid the po-po!!</li>\n";
    while(herbie.speed > 0)
    {
        herbie.brake();
        herbie.showSpeed();
    }
    herbieElement.innerHTML += "<li class=red>Pulling in garage safe and sound :)</li>\n";
}

function driveKitt()
{
    /* Input: none
    processing: "drive" herbie by invoking accelerate(), brake(), and showSpeed() methods based
            on the direction
    output: add a list item to the ordered list for vehicle each time the showSpeed() method is invoked
     */
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
    /* Input: none
    processing: "drive" herbie by invoking accelerate(), brake(), and showSpeed() methods based
            on the direction
    output: add a list item to the ordered list for vehicle each time the showSpeed() method is invoked
     */
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
    console.log("Entering init");
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
