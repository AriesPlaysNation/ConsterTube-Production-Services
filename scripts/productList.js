/* Author:          Brad Botteron
   Date Written:    11/25/19
   Description:     Product List script -> JavaScript <-
 */

/* Product variables for page creation */
/*var productLeft = document.getElementById("productLeft");
var productRight = document.getElementById("productRight");*/
/*Obsolete since hard coded! ^^^^^^^^^^^^^^^*/

var products = ["T-Shirt", "Hoodies"];
var shirtSizes = ["smShirt", "mShirt", "lShirt", "xlShirt", "xxlShirt", "xxxlShirt"];
var hoodieSizes = ["smHoodie", "mHoodie", "lHoodie", "xlHoodie", "xxlHoodie", "xxxlHoodie"];
var index = 1;
var productImages = document.getElementById("products");

var productLeft = document.getElementById("productLeft");


function productList()
{
    console.log("*6. Entering productList()");
    addTshirt();
    addTshirtSizes();
    addHoodie();
    addHoodieSizes();
}

function addHoodie()
{
    productLeft.innerHTML += "<hr>";
    var pre = document.createElement("pre");
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var text = document.createTextNode(products[1]);
    li.appendChild(text);
    ul.appendChild(li);
    pre.appendChild(ul);
    productLeft.appendChild(pre);
    productLeft.innerHTML += "<hr>";
}

function addHoodieSizes()
{
    var ul = document.createElement("ul");
    for(var i = 0; i < hoodieSizes.length; i++)
    {
        var li = document.createElement("li");
        var text = document.createTextNode(hoodieSizes[i]);
        li.appendChild(text);
        li.className = "smallLi";
        li.id = shirtSizes[i];
        ul.appendChild(li);

    }
    productLeft.appendChild(ul);
}

function addTshirt()
{
    productLeft.innerHTML += "<hr>";
    var pre = document.createElement("pre");
    var ul = document.createElement("ul");
    var li = document.createElement("li");
    var text = document.createTextNode(products[0]);
    li.appendChild(text);
    ul.appendChild(li);
    pre.appendChild(ul);
    productLeft.appendChild(pre);
    productLeft.innerHTML += "<hr>";
}

function addTshirtSizes()
{
    var ul = document.createElement("ul");
    for(var i = 0; i < shirtSizes.length; i++)
    {
        var li = document.createElement("li");
        var text = document.createTextNode(shirtSizes[i]);
        li.appendChild(text);
        li.className = "smallLi";
        li.id = shirtSizes[i];
        ul.appendChild(li);

    }
    productLeft.appendChild(ul);
}

function generateProductsPlaceholder()
{
    /*  This is purely a placeholder
    *   Once the shirt list is up and running with clickable elements
    *   You will be able to click the size and see available products!!
    *   (Ran out of time with rough draft to get this fully funtional :/
     */
    console.log("Entering generateProductsPlaceholder()");

    for (var i = 0; i < 30; i++)
    {
        var product = document.createElement("img");
        product.src = "img/whiteMenTShirt.png";
        product.alt = "Product placeholder: " + index;
        product.style.width = "210px";
        product.style.margin = "3%";
        product.style.border = "solid 1px black";

        productImages.appendChild(product);
        index++;
    }
}

function productInit()
{
    productList();
    generateProductsPlaceholder();
}

if(window.addEventListener)
{
    window.addEventListener("load", productInit, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", productInit);
}