/* Chapter06C External JavaScript */

"use strict"; 

/* automatically check Custom message check box if user makes entry in customText box */
function autocheckCustom() {
   var messageBox = document.getElementById("customText");
   if (messageBox.value !== "" && messageBox.value !== messageBox.placeholder) { 
      // if user entry in textarea, check Custom check box
      document.getElementById("custom").checked = "checked";
   }
} // END FUNCTION autocheckCustom

/* create event listeners */
function createEventListeners() {

   var messageBox = document.getElementById("customText");
   if (messageBox.addEventListener) {
     messageBox.addEventListener("change", autocheckCustom, false); // line 84
   } else if (messageBox.attachEvent)  {
     messageBox.attachEvent("onchange", autocheckCustom); 
   }
} // END FUNCTION createEventListeners

/* run initial form configuration functions */
function setUpPage() {
   createEventListeners();		
} // END FUNCTION setUpPage

/* run setup functions when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent) {
   window.attachEvent("onload", setUpPage);
}