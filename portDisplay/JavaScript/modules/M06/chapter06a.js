/* Chapter06A External JavaScript */

"use strict"; 

/* global variables */
var twentyNine = document.createDocumentFragment();
var thirty = document.createDocumentFragment();
var thirtyOne = document.createDocumentFragment();

/* set up node building blocks for selection list of days */
function setupDays() {
   var dates = document.getElementById("delivDy").getElementsByTagName("option");
   twentyNine.appendChild(dates[28].cloneNode(true)); 
   // add 29th 
   thirty.appendChild(dates[28].cloneNode(true)); 
   thirty.appendChild(dates[29].cloneNode(true));
   // add 29th & 30th
   thirtyOne.appendChild(dates[28].cloneNode(true)); 
   thirtyOne.appendChild(dates[29].cloneNode(true));
   thirtyOne.appendChild(dates[30].cloneNode(true));
   // add 29th, 30th, & 31st
}

/* update selection list of days based on selected month and year */
function updateDays() {
   var deliveryDay = document.getElementById("delivDy");
   var dates = deliveryDay.getElementsByTagName("option");
   var deliveryMonth = document.getElementById("delivMo");
   var deliveryYear = document.getElementById("delivYr");
   var selectedMonth = deliveryMonth.options[deliveryMonth.selectedIndex].value;
   while (dates[28]) {
      // remove child with index of 28 until this index is empty
      deliveryDay.removeChild(dates[28]);
   }
   if (deliveryYear.selectedIndex === -1) { 
      // if no year is selected, choose the default year so length of Feb can be determined
      deliveryYear.selectedIndex = 0;
   }
   if (selectedMonth === "2" && deliveryYear.options[deliveryYear.selectedIndex].value === "2016") { 
      // if leap year, Feb has 29 days
      deliveryDay.appendChild(twentyNine.cloneNode(true));
   } else if (selectedMonth === "4" || selectedMonth === "6" || selectedMonth === "9" || selectedMonth === "11") { 
      // these months have 30 days
      deliveryDay.appendChild(thirty.cloneNode(true));
   } else if (selectedMonth === "1" || selectedMonth === "3" || selectedMonth === "5" || selectedMonth === "7" || selectedMonth === "8" || selectedMonth === "10" || selectedMonth === "12") { 
      // these months have 31 days
      deliveryDay.appendChild(thirtyOne.cloneNode(true));
   }
}

/* create event listeners */
function createEventListeners() {
   var deliveryMonth = document.getElementById("delivMo");
   if (deliveryMonth.addEventListener) {
     deliveryMonth.addEventListener("change", updateDays, false); 
   } else if (deliveryMonth.attachEvent)  {
     deliveryMonth.attachEvent("onchange", updateDays);
   }

   var deliveryYear = document.getElementById("delivYr");
   if (deliveryYear.addEventListener) {
     deliveryYear.addEventListener("change", updateDays, false); 
   } else if (deliveryYear.attachEvent)  {
     deliveryYear.attachEvent("onchange", updateDays);
   }
}

/* run initial form configuration functions */
function setUpPage() {
   setupDays();					
   createEventListeners();		
}

/* run setup functions when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", setUpPage, false); 
} else if (window.attachEvent) {
   window.attachEvent("onload", setUpPage);
}