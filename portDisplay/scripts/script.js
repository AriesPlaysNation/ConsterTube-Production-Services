/* Author:          Brad Botteron
Date Written:       2/11/2020
 */
var loc = window.location.pathname;
var index = 0;
var k = 0;
var imagesrc = "img/dir.gif";
var courses = ["JavaScript", "PHP(Still in development)"];

function addTableContent()
{
    var table = document.getElementById("tableContent");


    for (var i = 0; i < courses.length; i++)
    {
        var a = document.createElement("a");
        a.href = loc.substring(index, loc.lastIndexOf("/")) + "/" + courses[k] + "/" + courses[k] + ".html.php";
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        var th2 = document.createElement("th");
        var th3 = document.createElement("th");
        th.class = "tableIcons";
        var img = document.createElement("img");
        img.src = imagesrc;
        th.appendChild(img);
        tr.appendChild(th);
        var text = document.createTextNode(courses[k]);
        a.appendChild(text);
        th2.appendChild(a);
        tr.appendChild(th2);
        th3.innerHTML = "-";
        tr.appendChild(th3);
        k++;
        table.appendChild(tr);
    }
    k = 0;

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