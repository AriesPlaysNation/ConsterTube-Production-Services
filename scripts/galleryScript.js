/* Author:          Brad Botteron
   Date Written:    10/22/19
   Description:     Gallery Script JavaScript
 */

var gallery = document.getElementById("gallery");
var index = 1;
var maxImages = 9;
var button = document.getElementById("seeMoreBtn2");

function generatePictures()
{
    for(var i = 0; i < 5; i++)
    {
        var image = document.createElement("img");
        image.src = "img/image" + index + ".png";
        index++;
        image.style.border = "solid 1px white";
        image.style.margin = "10px";
        image.style.height = "200px";
        image.alt = "Placeholder Gallery Image: #" + index;

        gallery.appendChild(image);
    }
}

function genMorePics()
{
    for(var i = 5; i < maxImages; i++)
    {
        var image = document.createElement("img");
        image.src = "img/image" + index + ".png";
        index++;
        image.style.border = "solid 1px white";
        image.style.margin = "10px";
        image.style.height = "200px";
        image.alt = "Placeholder Gallery Image: #" + index;

        gallery.appendChild(image);
    }
}

function init()
{
    generatePictures();
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
    button.addEventListener("click", genMorePics, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", init);
    button.attachEvent("onclick", genMorePics);
}






