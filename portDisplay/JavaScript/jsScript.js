

/* Author:          Brad Botteron
Date Written:       2/11/2020
 */
var loc = window.location.pathname;
var index = 0;
var k = 0;
var imagesrc = "../img/dir.gif";
var courses = ["JavaScript", "PHP"];
var modules = ["M01", "M02", "M03", "M04", "M05", "M06", "M07", "M08",
    "M09", "M10", "M11", "M12", "M13", "M14", "M15", "M16"];

function addTableContent()
{
    var table = document.getElementById("tableContent");

    for (var i = 0; i < modules.length; i++)
    {
        var a = document.createElement("a");
        a.href = "modules/" + modules[k] + "/index.html";
        var tr = document.createElement("tr");
        var th = document.createElement("th");
        var th2 = document.createElement("th");
        var th3 = document.createElement("th");
        th.class = "tableicons";
        var img = document.createElement("img");
        img.src = imagesrc;
        th.appendChild(img);
        tr.appendChild(th);
        var text = document.createTextNode(modules[k]);
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

function getPage()
{
    var directory = document.getElementById("directory");
    directory.innerHTML = loc.substring(index, loc.lastIndexOf("/"));
}

function init()
{
    getPage();
    addTableContent();
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if(window.attachEvent) {
    window.attachEvent("onload", init);
}