/* Author:               Brad Botteron                           */
/* Date Written:         11/28/19                          */
/* Description:          External JS for Inventory Update AJAX demo */

/* Global Variables */
var currentYear = new Date().getFullYear(); 
var dateContainer = document.getElementById("year");
    dateContainer.innerHTML = "2015-" + currentYear;
var focusField = document.getElementById("partNum");
    focusField.focus();

/* XBCEL to build datalist */
if (window.addEventListener)
{
    window.addEventListener("load", function(){ ajaxFunction("datalist");}, false);
}
else if (window.attachEvent)
{	window.attachEvent("onload",function() { ajaxFunction("datalist"); }); }

/* XBCEL to query database using partNum */
var partNumElement = document.getElementById("partNum");
if (partNumElement.addEventListener)
{
    partNumElement.addEventListener("change", function() { ajaxFunction("select");}, false);
}
else if (partNumElement.attachEvent)
{	partNumElement.attachEvent("onchange",function() { ajaxFunction("select"); }); }
