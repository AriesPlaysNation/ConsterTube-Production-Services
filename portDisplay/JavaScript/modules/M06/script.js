/*
      JavaScript 6th Edition
      Chapter 6 Lab06
      Author: Brad Botteron
      Date:   10/6/19
      Filename: index.html    */
"use strict"

var formValidity = true;
console.log("*1. form validity: " + formValidity);

// Validate required fields
function validateRequired()
{
    console.log("*2. Entering validateRequried()");
    var inputElements = document.querySelectorAll("#contactinfo input");
    var errorDiv = document.getElementById("errorText");
    var elementCount = inputElements.length;
    var requiredValidity = true;
    var currentElement;
    try{
        for(var i = 0; i < elementCount; i++)
        {
            // Validate all input elements in fieldset
            currentElement = inputElements[i];
            if(currentElement.value == "")
            {
                currentElement.style.background = "rgb(255, 233, 233)";
                requiredValidity = false;
            } else {
                currentElement.style.background = "white";
            }
        }
        if(formValidity === false)
        {
            throw "Please complete all fields";
        }
        errorDiv.style.display = "none";
        errorDiv.innerHTML = "";
    } catch(msg){
        errorDiv.style.display = "block";
        errorDiv.innerHTML = msg;
        formValidity = false;
    }
    console.log("*3. formValidity = " + formValidity);
}

// Create event listeners
function createEventListeners()
{
    console.log("*4. Entering createEventListeners()");
    var form = document.getElementsByTagName("form")[0];
    if(form.addEventListener)
    {
        form.addEventListener("submit", validateForm, false);
    } else if(form.attachEvent)
    {
        form.attachEvent("onsubmit", validateForm);
    }

    var ssnFields = document.getElementsByClassName("ssn");
    for(var i = 0; i < ssnFields.length; i++)
    {
        if(ssnFields[i].addEventListener)
        {
            ssnFields[i].addEventListener("input", advanceSsn, false);
        } else if(ssnFields[i].attachEvent)
        {
            ssnFields[i].attachEvent("oninput", advanceSsn);
        }
    }
}

function validateForm(evt)
{
    console.log("*5. Entering validateForm(evt)");
    if(evt.preventDefault)
    {
        evt.preventDefault(); // prevent the form from submitting
    } else{
        evt.returnValue = false; // prevent the form from submitting in iexploder
    }
    formValidity = true; // reset the value for revalidation
    validateRequired();
    validateNumbers();
    if(formValidity === true)
    {
        document.getElementsByTagName("form")[0].submit();
    }
    console.log("*6. formValidity" + formValidity);
}

// validate number fields for older browsers
function validateNumbers()
{
    console.log("*7. Entering validateNumbers()");
    var numberInputs = document.querySelectorAll("#contactinfo input[type=number]");
    var elementCount = numberInputs.length;
    var numErrorDiv = document.getElementById("numErrorText");
    var numbersValidity = true;
    var currentElement;
    try
    {
        for(var i = 0; i < elementCount; i++)
        {
            // validate all input elements of type "number" in fieldset
            currentElement = numberInputs[i];
            if(isNaN(currentElement.value) || (currentElement.value === ""))
            {
                currentElement.style.background = "rgb(255,233,233)";
                numbersValidity = false;
            } else{
                currentElement.style.background = "";
            }
        }
        if(numbersValidity === false)
        {
            throw "Zip and Social Security values must be numbers.";
        }
        numErrorDiv.style.display = "none";
        numErrorDiv.innerHTML = "";
    } catch(msg){
        numErrorDiv.style.display = "block";
        numErrorDiv.innerHTML = msg;
        formValidity = false;
    }
}

// remove fallback placeholder text
function zeroPlaceHolder()
{
    console.log("*8. Entering zeroPlaceHolder()");
    var addressBox = document.getElementById("addrinput");
    addressBox.style.color = "black";
    if(addressBox.value === addressBox.placeholder)
    {
        addressBox.value = "";
    }
}

// restore placeholder text if box contains no user entry
function checkPlaceHolder()
{
    console.log("*9. Entering checkPlaceHolder()");
    var addressBox = document.getElementById("addrinput");
    if(addressBox.value === "")
    {
        addressBox.style.color = "rgb(178, 184, 183)";
        addressBox.value = addressBox.placeholder;
    }
    console.log("*10. placeholder: " + addressBox.placeholder);
}

// Add placeholder text for browsers that don't suppport placeholder attribute
function generatePlaceHolder()
{
    console.log("*11. entering generatePlaceHolder()");
    if(!Modernizr.input.placeholder)
    {
        var addressBox = document.getElementById("addrinput");
        addressBox.value = addressBox.placeholder;
        addressBox.style.color = "rgb(178, 184, 183)";
        if(addressBox.addEventListener)
        {
            addressBox.addEventListener("focus", zeroPlaceHolder, false);
            addressBox.addEventListener("blur", checkPlaceHolder, false);
        } else if(addressBox.attachEvent)
        {
            addressBox.attachEvent("onfocus", zeroPlaceHolder);
            addressBox.attachEvent("onblur", checkPlaceHolder);
        }
    }
    console.log("*12. Exiting placeholder");
}

function advanceSsn()
{
    var ssnFields = document.getElementsByClassName("ssn");
    var currentField = document.activeElement;
    if(currentField.value.length === currentField.maxLength)
    {
        if(currentField === ssnFields[0])
        {
            ssnFields[1].focus();
            console.log("*14. Advance to second");
        }
        if(currentField === ssnFields[1])
        {
            ssnFields[2].focus();
            console.log("*15. Advance to third");
        }
        if(currentField === ssnFields[2])
        {
            document.getElementById("submitBtn").focus();
            console.log("*16. Advance to button");
        }
    }
}

function setUpPage()
{
    console.log("*17. Entering setuppage() -> createEventListeners() && generatePlaceHolder()");
    createEventListeners();
    generatePlaceHolder();
}

if(window.addEventListener)
{
    console.log("*18. XBCEL enterage to setUpPage");
    window.addEventListener("load", setUpPage, false);
} else if(window.attachEvent)
{
    console.log("*19. Iexploder enterage to setUpPage");
    window.attachEvent("onload", setUpPage);
}









