/* Author:      Brad Botteron
Date:           11/24/19
Description:    External JavaScript for index.html
 */

function insertCopyright()
{
    var year = new Date().getFullYear();
    var dateContainer = document.getElementById("copyright");
    dateContainer.innerHTML = "2015-" + year;
}

function init()
{
    insertCopyright();
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", init);
}