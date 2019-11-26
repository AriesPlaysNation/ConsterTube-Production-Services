/* Author:          Brad Botteron
   Date Written:    10/22/19
   Description:     Gallery Script JavaScript
 */

var gallery = document.getElementById("gallery");
var index = 1;
var maxImages = 30;

function generatePictures()
{
    for(var i = 0; i < maxImages; i++)
    {
        var image = document.createElement("img");


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
} else if (window.attachEvent)
{
    window.attachEvent("onload", init);
}






