

function createEventListenersProducts()
{
    for(var i = 0; i < shirtSizes.length; i++)
    {
        if(shirtSizes[i].addEventListener)
        {
            shirtSizes[i].addEventListener("click", generateProductsPlaceholder, false);
        } else if (shirtSizes[i].attachEvent)
        {
            shirtSizes[i].attachEvent("onclick", generateProductsPlaceholder);
        }
    }

    for(var i = 0; i < hoodieSizes.length; i++)
    {
        if(shirtSizes[i].addEventListeners)
        {
            shirtSizes[i].addEventListener("click", generateProductsPlaceholder, false);
        } else if (hoodieSizes[i].attachEvent)
        {
            hoodieSizes[i].attachEvent("onclick", generateProductsPlaceholder);
        }
    }
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

if(window.addEventListener)
{
    window.addEventListener("load", createEventListenersProducts, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", createEventListenersProducts);
}