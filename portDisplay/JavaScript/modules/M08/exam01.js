/* Author:  Brad Botteron
Date:       10/20/2019
Desc:       Exam 01 javaScript file
 */

"use strict";

var formValidity = true;
console.log("*7. formValidity = " + formValidity);
var programs = ["SDEV", "DBMS", "INFM", "CSCI", "SVAD", "NETI", "ITSP", "CSIA"];

function addCheckBoxes()
{
    console.log("*12. Entering addCheckBoxes()");
    programs.sort();
    console.log("*13. Checking for sort: programs = " + programs[0]);
    console.log("*14. programs = " + programs[1]);
    var programList = document.getElementById("progList");
    var programEntry = "";
    for(var i = 0; i < programs.length; i++)
    {
        programEntry = programs[i].toString();
        var lbl = document.createElement("label");
        var input = document.createElement("input");
        input.type = "checkbox";
        input.name = "programs[]";
        input.value = i.toString();
        programEntry = document.createTextNode(programs[i]);
        lbl.appendChild(input);
        lbl.appendChild(programEntry);
        programList.appendChild(lbl);
    }
}

function validateInput()
{
    console.log("*9. Entering validateInput()");
    var inputElements = document.querySelectorAll("#left input");
    var numInputElements = document.querySelectorAll("#left input[type=number]");
    var errorDiv = document.getElementById("errorMsg");
    var elementCount = inputElements.length;
    var numElementCount = numInputElements.length;
    var requiredValidity = true;
    var currentElement;

    try
    {
        for(var i = 0; i < elementCount; i++)
        {
            //V alidate all input elements in fieldset
            currentElement = inputElements[i];
            if(currentElement.value == "")
            {
                currentElement.style.background = "rgb(255,233,233)";
                requiredValidity = false;
                currentElement.focus();
            } else {
                currentElement.style.background = "white";
            }
        }
        for(var i = 0; i < numElementCount; i++)
        {
            currentElement = numInputElements[i];
            if(isNaN(currentElement.value) || (currentElement.value === "") || (currentElement.value < 1) || (currentElement.value > 80))
            {
                currentElement.style.background = "rgb(255,233,233)";
                requiredValidity = false;
                currentElement.focus();
            } else {
                currentElement.style.background = "white";
            }
        }
        if(requiredValidity === false)
        {
            throw "Please complete all fields";
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    } catch(msg)
    {
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
    console.log("*10. formValidity = " + requiredValidity);
}

function createEventListeners()
{
    console.log("*5. Entering createEventListeners");
    var form = document.getElementsByTagName("form")[0];
    if(form.addEventListener)
    {
        form.addEventListener("submit", validateForm, false);
    } else if(window.attachEvent)
    {
        form.attachEvent("onsubmit", validateForm);
    }
}

function validateForm(evt)
{
    console.log("*6. Entering validateForm()");
    if(evt.preventDefault)
    {
        evt.preventDefault(); // prevents the form from submitting
    } else {
        evt.returnValue = false; // prevent the form from submitting in iexploder
    }
    formValidity = true; //reset the value for revalidation
    validateInput();
    if(formValidity === true)
    {
        document.getElementById("errorMsg").innerHTML = "";
        document.getElementById("errorMsg").style.display = "none";
        document.getElementsByTagName("form")[0].submit();
    } else {
        document.getElementById("errorMsg").innerHTML = "Please fix the indicated errors and resubmit (Age must be between 1 and 80";
        document.getElementById("errorMsg").style.display = "block";
    }
    console.log("*8. formvalidity = " + formValidity);
}

function addYear()
{
    console.log("*3. Entering addYear()");
    var dateContainer = document.getElementById("copyright");
    var currentDate = new Date().getFullYear();
    dateContainer.innerHTML = currentDate;
    console.log("*4. current date = " + currentDate);
}

function init()
{
    console.log("*2. Entering init()");
    addYear(); // Enter addYear();
    addCheckBoxes();
    createEventListeners();
}

if(window.addEventListener)
{
    console.log("*1. XBCEL enterage to init()");
    window.addEventListener("load", init, false);
} else if (window.attachEvent)
{
    console.log("*1. Internet Exploder interage to init()");
    window.attachEvent("onload", init);
}