var currentYear = new Date().getFullYear(); // variable declaration
var jsBirthYear = 1995;
var jsAge = currentYear - jsBirthYear;

function insertContent()
{
  var heading1 = document.getElementsByTagName("h1")[0];
  var heading2 = document.getElementsByTagName("h2")[0];
  var heading3 = document.getElementsByTagName("h2")[1];
  var dateContainer = document.getElementById("year");
  heading1.innerHTML = "View Source Conference";
  heading2.innerHTML = "presented by mozilla";
  heading3.innerHTML = "ECMAScript 2015: Why it took so long?";
  dateContainer.innerHTML = currentYear;
}