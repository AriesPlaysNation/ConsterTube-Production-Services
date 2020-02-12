/* Author:          Brad Botteron
Date Written:       2/11/2020
 */
var levels = 0;

function addTableContent()
{
    var table = document.getElementById("tableContent");

}

function getPageDir()
{
    var loc = window.location.pathname;
    var dir = loc.substring(0,loc.lastIndexOf("\\"));
    var directory = document.getElementById("directory");
    directory.innerHTML = directory;
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