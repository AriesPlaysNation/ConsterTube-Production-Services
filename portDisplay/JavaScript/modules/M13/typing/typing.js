/*  External JavaScript for typing.html example */
/*  Author:		     Brad Botteron        */
/*  Date Written:	 11/28/19       */


theButton = document.getElementById("theButton");
theAge    = document.getElementById("age");
theWPM    = document.getElementById("wpm");
theGender = document.getElementById("gender");

if (theButton.addEventListener) {
   theButton.addEventListener("click", ajaxFunction, false);
   theAge.addEventListener("change", ajaxFunction, false);
   theWPM.addEventListener("change", ajaxFunction, false);
   theGender.addEventListener("change", ajaxFunction, false);
} else if (theButton.attachEvent) {
   theButton.attachEvent("onclick", ajaxFunction);
   theAge.attachEvent("onchange", ajaxFunction);
   theWPM.attachEvent("onchange", ajaxFunction);
   theGender.attachEvent("onchange", ajaxFunction);
}
