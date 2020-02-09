/* Author: Brad Botteron
Date: 2/9/20
Desc: Scripts for bot/home
 */

function addcopyright()
{
    var current = document.getElementById("year");
    var date = new Date().getFullYear();
    current.innerHTML = date;
}

function init()
{
    addcopyright();
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if(window.attachEvent) {
    window.attachEvent("onload", init);
}