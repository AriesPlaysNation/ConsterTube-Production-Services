/* Author: Brad Botteron
Date: 11/3/19
Desc: JS for Chapter07d
 */

"use strict";

function insertCopyright()
{
    var currentYear = new Date().getFullYear();
    var dateContainer = document.getElementById("year");
    dateContainer.innerHTML = currentYear;
}

var Month = function(position, name, events)
{
    this.position = position;
    this.name = name;
    this.events = events;
    this.displayCalendar = displayCalendar;

    function displayCalendar()
    {
        var theHeading = document.getElementById("calMonth");
        theHeading.innerHTML = this.name + " Events";
        var asideContents = "<ul>";

        for(var i = 0; i < this.events.length; i++)
        {
            asideContents += "<li>" + this.events[i] + "</li>";
        }
        asideContents += "</ul>";
        var theAside = document.getElementById("calDisplay");
        theAside.innerHTML = asideContents;
    }
}

var theMonth = document.getElementById("month");
var janEvents = ["18th SDEV 250 Party", "25th SDEV 253 Party"];
var january = new Month(1, "January", janEvents);
var febEvents = ["2nd Project Meeting", "23rd Faculty Dinner", "24th Fun Outing!"];
var february = new Month(2, "February", febEvents);
var marEvents = ["21st Client Meeting", "31st Student Elections"];
var march = new Month(3, "March", marEvents);
var defEvent = [""];
var defaultEvent = new Month(0, "Monthly", defEvent);

function showEvents(number)
{
    var month = parseInt(number);
    switch(month)
    {
        case 0: defaultEvent.displayCalendar();
        break;
        case 1: january.displayCalendar();
        break;
        case 2: february.displayCalendar();
        break;
        case 3: march.displayCalendar();
        break;
        default: console.log("Invalid Month: " + month);
    }
}

if(window.addEventListener)
{
    window.addEventListener("change", function(){showEvents(theMonth.value);}, false);
    window.addEventListener("load", insertCopyright, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", function(){showEvents(theMonth.value);});
    window.attachEvent("onload", insertCopyright);
}

/*
if(btnPrevious.addEventListener)
{
    btnPrevious.addEventListener("click", function(){
        if(monthPH == 1)
        {
            monthPH = 12;
            var todaydate=new Date()
            var curmonth=todaydate.getMonth()-monthPH //get current month (1-12)
            var curyear=todaydate.getFullYear() //get current year
            document.write(buildCal(curmonth ,curyear, "main", "month", "daysofweek", "days", 0));
        } else {
            monthPH -= 1;
            var todaydate=new Date()
            var curmonth=todaydate.getMonth()-monthPH //get current month (1-12)
            var curyear=todaydate.getFullYear() //get current year
            document.write(buildCal(curmonth ,curyear, "main", "month", "daysofweek", "days", 0));
        }
    }, false);
    btnCurrent.addEventListener("click", function(){
        monthPH = 1;
        var todaydate=new Date()
        var curmonth=todaydate.getMonth()+monthPH //get current month (1-12)
        var curyear=todaydate.getFullYear() //get current year
        document.write(buildCal(curmonth ,curyear, "main", "month", "daysofweek", "days", 0));
    }, false);
    btnNext.addEventListener("click", function(){
        if(monthPH == 12)
        {
            monthPH = 1;
            var todaydate=new Date()
            var curmonth=todaydate.getMonth()+monthPH //get current month (1-12)
            var curyear=todaydate.getFullYear() //get current year
            document.write(buildCal(curmonth ,curyear, "main", "month", "daysofweek", "days", 0));
        } else {
            monthPH += 1;
            var todaydate=new Date()
            var curmonth=todaydate.getMonth()+monthPH //get current month (1-12)
            var curyear=todaydate.getFullYear() //get current year
            document.write(buildCal(curmonth ,curyear, "main", "month", "daysofweek", "days", 0));
        }
    }, false);
} else if (window.attachEvent)
{
    btnPrevious.attachEvent("onclick", function(){

    });
    btnCurrent.attachEvent("onclick", function(){

    });
    btnNext.attachEvent("onclick", function(){

    });
}
 */









