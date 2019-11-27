/* Author:          Brad Botteron
   Date Written:    10/22/19
   Description:     Final Project JavaScript
 */

// Global Variables
var pages = ["Contact", "Products", "Services", "News", "Gallery"];
var linkPages = ["contact.html", "products.html", "services.html", "news.html", "gallery.html"];
var logoHome = document.getElementById("logoAndName");

function createEventListeners()
{
    console.log("*3. entering createEventListeners");
}



function generatePlaceHolders()
{
    console.log("*4. Entering generatePlaceHolders()");

    var nav = document.getElementById("nav");
    for(var i = 0; i < pages.length; i++)
    {
        var li = document.createElement("li");
        var a = document.createElement("a");
        var pageText = document.createTextNode(pages[i]);
        a.href = linkPages[i];
        a.id = pages[i];
        li.id = "navList";
        console.log(a.id + "");
        a.appendChild(pageText);
        li.appendChild(a);
        nav.appendChild(li);
    }

    var dateContainer = document.getElementById("year");
    var currentDate = new Date().getFullYear();
    dateContainer.innerHTML = currentDate;
    console.log("*5. Generate date = " + currentDate);
}

function createFaceBookFeed()
{

}

function init()
{
    console.log("*2. Entering setUpPage -> Create event listeners && generatePlaceHolders");
    createEventListeners();
    generatePlaceHolders();
    createFaceBookFeed();
}

if(window.addEventListener)
{
    console.log("*1. XBCEL enterage to setUpPage");
    window.addEventListener("load", init, false);
    logoHome.addEventListener("click", function(){window.location = "index.html"}, false);
} else if(window.attachEvent) {
    console.log("*1. Exploder enterage to setUpPage");
    window.attachEvent("onload", init);
    window.attachEvent("onclick", function(){window.location = "index.html"});
}