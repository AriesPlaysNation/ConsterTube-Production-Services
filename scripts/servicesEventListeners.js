/* Author:          Brad Botteron
   Date Written:    12/10/2019
   Description:     servicesEventListeners
 */

var photoshopDesc = "Placeholder for paragraph about photoshop services";
var premiereDesc = "Placeholder for paragraph about premiere services";

var photoshopP = document.getElementById("photoshopP");
var premiereP = document.getElementById("premiereP");

var photoshopB = document.getElementById("photoshop");
var premiereB = document.getElementById("premiere");

if(photoshopB.addEventListener)
{
    photoshopB.addEventListener("click", function() {
        photoshopP.innerHTML = photoshopDesc;
        photoshopB.addEventListener("click", function(){photoshopP.innerHTML = "";}, false);
        }, false);
    premiereB.addEventListener("click", function() {
        premiereP.innerHTML = premiereDesc;
        premiereB.addEventListener("click", function(){premiereP.innerHTML = "";}, false);
        }, false);
} else if (premiereB.attachEvent)
{
    photoshopB.addEventListener("onclick", function() { photoshopP.innerHTML = photoshopDesc; });
    premiereB.addEventListener("onclick", function() { premiereP.innerHTML = premiereDesc; });
}