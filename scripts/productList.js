/* Author:          Brad Botteron
   Date Written:    11/25/19
   Description:     Product List script -> JavaScript <-
 */

/* Product variables for page creation */
var productLeft = document.getElementById("productLeft");
var productRight = document.getElementById("productRight");
var products = ["T-Shirt", "Hoodies"];
var sizes = ["SM", "M", "L", "XL", "XXL", "XXXL"];



function productList()
{
    console.log("*6. Entering productList()");
    var ul = document.createElement("ul");
    var ulSizes = document.createElement("ul");
    for(var i = 0; i < products.length; i++)
    {
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

function productInit()
{
    productList();
}

if(window.addEventListener)
{
    window.addEventListener("load", productInit, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", productInit);
}