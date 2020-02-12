/* Author: Brad Botteron
Date: 8/30/2019
Desc: JavaScript for Lab01
 */

var currentYear = new Date().getFullYear(); // variable declaration
var jsBirthMonth = "April";
var jsBirthDay = 17;
var jsBirthYear = 1991;

function insertContent()
{
  var heading1 = document.getElementsByTagName("h1")[0];
  var heading2 = document.getElementsByTagName("h2")[0];
  var heading3 = document.getElementsByTagName("h2")[1];
  var dateContainer = document.getElementById("year");
  heading1.innerHTML = "Brad William Botteron";
  heading2.innerHTML = "presented by myself";
  heading3.innerHTML = "'My life in a nutshell!'";
  dateContainer.innerHTML = currentYear;
}