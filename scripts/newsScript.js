/* Author:          Brad Botteron
   Date Written:    11/25/19
   Description:     News script -> JavaScript <-
 */

"use strict";

var feed = document.getElementById("facebookFeed");
var button = document.getElementById("refresh");


function generateFeed()
{

}

function init()
{
    generateFeed();
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
    button.addEventListener("click", function() {
        window.location.reload();
    }, false);

} else if (window.attachEvent)
{
    window.attachEvent("onload", init);
    button.addEventListener("click", function() {
        window.location.reload();
    });
}






