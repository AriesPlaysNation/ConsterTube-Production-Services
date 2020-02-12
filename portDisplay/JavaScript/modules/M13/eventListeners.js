/* Creating event listeners
   Author:         Brad Botteron
   Date Written:   11/30/19
   Description:    DESCRIPTION OF THE SCRIPT
*/

if(window.addEventListener)
{
    window.addEventListener("load", insertCopyright, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", insertCopyright);
}

var programChoice = document.getElementById("program");

if(programChoice.addEventListener)
{
    programChoice.addEventListener("change", function() {ajaxFunction("programChange");}, false);
} else if (programChoice.attachEvent)
{
    programChoice.addEventListener("onchange", function() {ajaxFunction("programChange");});
}