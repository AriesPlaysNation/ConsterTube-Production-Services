/* Author:          Brad Botteron
Date Written:       2/11/2020
 */
var loc = window.location.pathname;
var index = 0;

function addTableContent()
{
    var table = document.getElementById("tableContent");

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