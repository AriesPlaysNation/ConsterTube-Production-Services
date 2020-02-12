/* Insertion of copyright
   Author:         Brad Botteron
   Date Written:   11/30/19
   Description:    DESCRIPTION OF THE SCRIPT
*/

"use strict";

function insertCopyright()
{
    var year = new Date().getFullYear();
    var dateContainer = document.getElementById("year");

    dateContainer.innerHTML = year;
}

