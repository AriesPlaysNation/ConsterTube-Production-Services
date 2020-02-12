/* Author:          Brad Botteron
Date Written:       2/11/2020
 */

function addTableContent()
{
    var table = document.getElementById("tableContent");
    var row = document.createElement("tr");
    var th = document.createElement("th");
    var text = document.createTextNode("text");
    text.class = "tableIcons";
    th.appendChild(text);
    row.appendChild(th);
    table.appendChild(row);
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