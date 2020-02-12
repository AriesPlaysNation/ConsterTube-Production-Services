/* Author:      Brad Botteron
Date:           11/28/19
Desc:           Event listeners for ZipCode Demo
 */

theZip = document.getElementById("zipcode");

if(window.addEventListener)
{
    window.addEventListener("load", ajaxCreateStateList, false);
    theZip.addEventListener("change", ajaxZipQuery, false);
} if (window.attachEvent)
{
    window.attachEvent("onload", ajaxCreateStateList);
    theZip.attachEvent("onchange", ajaxZipQuery);
}