/* Author:          Brad Botteron
Date Written:       2/11/2020
 */

function addTableContent()
{
    var table = document.getElementById("indexList");
    table.innerHTML = "tableContent";
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