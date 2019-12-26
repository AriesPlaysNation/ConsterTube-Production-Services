/* Author:          Brad Botteron
   Date Written:    10/22/19
   Description:     Gallery Script JavaScript
 */

"use strict";

var gallery = document.getElementById("gallery");
var index = 1;
var maxImages = 9;
var moreButton = document.getElementById("seeMoreBtn2");
var lessButton = document.getElementById("seeLessBtn");

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

    if(lessButton.addEventListener)
    {
        lessButton.addEventListener("click", genLessPics, false);
    } else if (lessButton.attachEvent)
    {
        lessButton.attachEvent("onclick", genLessPics);
    }

    moreButton.style.display = "none";
    lessButton.style.display = "block";
}

function genLessPics()
{
    document.location.reload();
}

function init()
{
    generatePictures();
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
    moreButton.addEventListener("click", genMorePics, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", init);
    moreButton.attachEvent("onclick", genMorePics);
}