/* Author:          Brad Botteron
Date Written:       2/11/2020
 */

function addTableContent()
{
    var table = document.getElementById("tableContent");
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    var text = document.createTextNode("content here!!");

    th.appendChild(text);
    tr.appendChild(th);
    table.appendChild(th);
}

function init()
{
    addTableContent();
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if(window.attachEvent) {
    window.attachEvent("onload", init);
}