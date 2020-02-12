

/* Author:          Brad Botteron
Date Written:       2/11/2020
 */
var loc = window.location.pathname;
var index = 0;
var img = "../img/dir.gif";
var courses = ["JavaScript", "PHP"];
var modules = ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08",
    "M09", "M10", "M11", "M12", "M13", "M14", "M15", "M16"];

function addTableContent()
{
    var table = document.getElementById("tableContent");

    for (var i = 0; i < modules.length; i++)
    {

    }
}

function getPageDir()
{
    var directory = document.getElementById("directory");
    directory.innerHTML = loc.substring(index, loc.lastIndexOf("/"));
}

function init()
{
    getPageDir();
    addTableContent();
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if(window.attachEvent) {
    window.attachEvent("onload", init);
}