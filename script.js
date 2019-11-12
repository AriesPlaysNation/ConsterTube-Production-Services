/* Author:          Brad Botteron
   Date Written:    10/22/19
   Description:     Final Project JavaScript
 */

// Global Variables
var pages = ["About", "Products", "Services", "News", "Gallery"];
var linkPages = ["about.html", "products.html", "services.html", "news.html", "gallery.html"];
var logoHome = document.getElementById("logoAndName");
/* Product variables for page creation */
var productLeft = document.getElementById("productLeft");
var productRight = document.getElementById("productRight");
var products = ["T-Shirt", "Hoodies"];
var sizes = ["SM", "M", "L", "XL", "XXL", "XXXL"];

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
        console.log(a.id + "");
        a.appendChild(pageText);
        li.appendChild(a);
        nav.appendChild(li);
    }

    var play = document.getElementById("scrollBox");
    play.innerHTML = "";
    var index = 0;
    for(var i = 0; i < 1000; i++)
    {
        play.innerHTML += (i + "\n");
    }

    var dateContainer = document.getElementById("year");
    var currentDate = new Date().getFullYear();
    dateContainer.innerHTML = currentDate;
    console.log("*5. Generate date = " + currentDate);
}

function productList()
{
    console.log("*6. Entering productList()");
    var ul = document.createElement("ul");
    for(var i = 0; i < products.length; i++)
    {
        var ulSizes = document.createElement("ul");
        var li = document.createElement("li");
        li.style.fontSize = "1em";
        li.style.color = "white";
        li.id = products[i];
        li.innerHTML = products[i];
        ul.appendChild(li);
        for(var j = 0; j < sizes.length; j++)
        {
            var liSizes = document.createElement("li");
            liSizes.style.fontSize = ".75em";
            liSizes.style.color = "white";
            liSizes.id = sizes[j];
            liSizes.innerHTML = sizes[j];
            ul.appendChild(liSizes);
        }
    }
    ul.id = "productListContent";
    productLeft.appendChild(ul);
}

function init()
{
    console.log("*2. Entering setUpPage -> Create event listeners && generatePlaceHolders");
    createEventListeners();
    generatePlaceHolders();
    productList();
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