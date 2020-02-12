/* Chapter06B External JavaScript */

"use strict"; 

// Impossible to test unless you have an old browser that is not HTML5-compliant
// On older browsers, the first name field will have a placeholder added; 
// the last name field will not. This is just a teaching example. In a production
// Web site, you would include code to add placeholders to all relevant fields.

/* remove fallback placeholder text */
function zeroPlaceholder() {
   var messageBox = document.getElementById("fname");
   messageBox.style.color = "black";
   if (messageBox.value === messageBox.placeholder) {
      messageBox.value = "";
   }
} // END FUNCTION zeroPlaceholder

/* restore placeholder text if box contains no user entry */
function checkPlaceholder() {
   var messageBox = document.getElementById("fname");
   if (messageBox.value === "") {
      messageBox.style.color = "rgb(178,184,183)";
      messageBox.value = messageBox.placeholder;
   }
} // END FUNCTION checkPlaceholder

/* add placeholder text for browsers that don't support placeholder attribute */
function generatePlaceholder() {
   if (!Modernizr.input.placeholder) {
      var messageBox = document.getElementById("fname");
      messageBox.value = messageBox.placeholder;
      messageBox.style.color = "rgb(178,184,183)";
      if (messageBox.addEventListener) {
         messageBox.addEventListener("focus", zeroPlaceholder, false); 
         messageBox.addEventListener("blur", checkPlaceholder, false); 
      } else if (messageBox.attachEvent)  {
         messageBox.attachEvent("onfocus", zeroPlaceholder);
         messageBox.attachEvent("onblur", checkPlaceholder); 
      }
   } // END IF NOT MODERNIZR
} // END FUNCTION generatePlaceholder

/* run initial form configuration functions */
function setUpPage() {
   generatePlaceholder();		
}

/* run setup functions when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent) {
   window.attachEvent("onload", setUpPage);
}