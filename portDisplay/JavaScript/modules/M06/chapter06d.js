/* Chapter06D External JavaScript */

"use strict"; 

/* copy values for Billing Address fields to Delivery Address fields */
function copyBillingAddress() {
   var billingInputElements = document.querySelectorAll("#billingAddress input");
   var deliveryInputElements = document.querySelectorAll("#deliveryAddress input");
   if (document.getElementById("sameAddr").checked) {
      for (var i = 0; i < billingInputElements.length; i++) {
         deliveryInputElements[i + 1].value = billingInputElements[i].value;
      }
      document.querySelector("#deliveryAddress select").value = document.querySelector("#billingAddress select").value;
   } else {
      for (var i = 0; i < billingInputElements.length; i++) {
         deliveryInputElements[i + 1].value = "";
      }
      document.querySelector("#deliveryAddress select").selectedIndex = -1;
   }
} // END FUNCTION copyBillingAddress

/* create event listeners */
function createEventListeners() {
   var same = document.getElementById("sameAddr");
   if (same.addEventListener) {
     same.addEventListener("click", copyBillingAddress, false); 
   } else if (same.attachEvent)  {
     same.attachEvent("onclick", copyBillingAddress);
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