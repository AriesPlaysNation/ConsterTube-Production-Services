/* Author:		Brad Botteron
   Date Written:	11/17/19
   Description:		Lab 11 JavaScript file for index.html
*/

"use strict";

var field1 = document.getElementById("field1");
var field2 = document.getElementById("field2");
var errorContainer = document.getElementById("errorMsg");
var formValidity = true;

function genEventListeners()
{
    console.log("Entering genEventListeners()");
    var form = document.getElementById("form");
    if(form.addEventListener)
    {
        form.addEventListener("submit", validateForm, false);
    } else if (form.attachEvent)
    {
        form.attachEvent("onsubmit", validateForm);
    }
}

function validateForm(evt) {
    console.log("Entering validateForm");
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    checkValidity();

    if(formValidity === true)
    {
        errorContainer.text = "";
        errorContainer.style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    }
}

function checkValidity()
{
    console.log("Entering checkValidity()");
    console.log(formValidity);
    try
    {
        if(/.{5,}/.test(field1.value) === false)
        {
            throw "Field 1 must contain at least 5 characters"
            field1.style.background = "rgb(255, 150, 150)";
            field1.focus();
            formValidity = false;
            console.log("Test 1 failed. " + formValidity);
        } else if (/\d/.test(field1.value) === false)
        {
            throw "Field 1 must contain a number";
            field1.style.background = "rgb(255, 150, 150)";
            field1.focus();
            formValidity = false;
            console.log("Must contain a number. " + formValidity);
        } else if (field1.value.localeCompare(field2.value) !== 0)
        {
            throw "Fields must match";
            field1.style.background = "rgb(255, 150, 150)";
            field1.focus();
            formValidity = false;
            console.log("Fields don't match. " + formValidity);
        } else {
            formValidity = true;
            errorContainer.style.background = "";
            errorContainer.innerHTML = "";
            errorContainer.style.display = "none";
            console.log("Test passed. " + formValidity);
        }
    } catch (msg)
    {
        console.log("Error: " + msg);
        errorContainer.innerHTML = msg;
        errorContainer.style.display = "block";
        errorContainer.style.background = "rgb(255, 233, 233)";
        formValidity = false;
    }
}

function insertCopyright()
{
    var year = new Date().getFullYear();
    var dateContainer = document.getElementById("copyright");
    dateContainer.innerHTML = year;
}

function init()
{
    console.log("Entering init()");
    genEventListeners();
    insertCopyright();
}

if(window.addEventListener)
{
    window.addEventListener("load", init, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", init);
}