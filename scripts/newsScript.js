/* Author:          Brad Botteron
   Date Written:    11/25/19
   Description:     News script -> JavaScript <-
 */


var feed = document.getElementById("facebookFeed");


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
} else if (window.attachEvent)
{
    window.attachEvent("onload", init);
}













