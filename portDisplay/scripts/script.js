/* Author:          Brad Botteron
Date Written:       2/11/2020
 */

function addTableContent()
{
    var i = 2;
    var table = document.getElementById("tableContent");
    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    cell1.class = "tableIcons";
    cell1.innerHTML = "ch";

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