/* Author:          Brad Botteron
Date Written:       2/11/2020
 */

function addTableContent()
{
    var table = document.getElementById("tableContent");
    table.innerHTML = "<tr><td>Content Here!!</td></tr>";
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