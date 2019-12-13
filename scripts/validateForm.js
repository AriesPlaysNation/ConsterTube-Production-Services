/* Author:          Brad Botteron
   Date Written:    11/25/19
   Description:     Form Validation script -> JavaScript <-
 */

"use strict";

var errorMsg = document.getElementById("errorMsg");
var form = document.getElementsByTagName("form")[0];
var formValidity;

function formEventListeners()
{
    var submitBtn = document.getElementById("submitBtn");
    console.log("Entering formEventListeners");
    if(submitBtn.addEventListener)
    {
        submitBtn.addEventListener("click", verifyForm, false);
    } else if(submitBtn.attachEvent)
    {
        submitBtn.attachEvent("onclick", verifyForm);
    }
}

function verifyForm(evt)
{
    console.log("Entering verifyForm");
    if(evt.preventDefault)
    {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }

    formValidity = true;
    console.log(formValidity + ": initial formValidity");
    verifyFirstName();
    verifyLastName();
    verifyEmail();
    verifyTelephone();
    console.log(formValidity + ": formValidity");
    if(formValidity === true)
    {
        console.log("Entering formValidation True block");
        errorMsg.innerHTML = "";
        errorMsg.style.display = "none";
        //form.submit();
        writeCookies();
        ajaxFunction();
        console.log("Form Submitted");
    }
}

function verifyFirstName()
{
    console.log("Entering verifyFirstName()");
    var firstNameInput = document.getElementById("firstNameInput");
    try
    {
        if(/^[a-zA-Z]+$/.test(firstNameInput.value) === false)
        {
            throw "First name cannot contain numbers.";
        }
    } catch(msg)
    {
        formValidity = false;
        errorMsg.style.display = "block";
        errorMsg.style.color = "white";
        errorMsg.style.textAlign = "center";
        errorMsg.innerHTML = msg;
        firstNameInput.backgroundColor = "rgb(255,233,233)";
        firstNameInput.focus();
    }
    console.log(formValidity + ": in verifyFirstName");
}

function verifyLastName()
{
    console.log("Entering verifyLastName()");
    var lastNameInput = document.getElementById("lastNameInput");
    try
    {
        if(/^[a-zA-Z]+$/.test(lastNameInput.value) === false)
        {
            throw "Last name cannot contain numbers.";
        }
    } catch(msg)
    {
        formValidity = false;
        errorMsg.style.display = "block";
        errorMsg.style.color = "white";
        errorMsg.style.textAlign = "center";
        errorMsg.innerHTML = msg;
        lastNameInput.style.backgroundColor = "rgb(255,233,233)";
        lastNameInput.focus();
    }
    console.log(formValidity + ": in verifyLastName");
}

function verifyEmail()
{
    console.log("Entering verifyEmail()");
    var emailInput = document.getElementById("emailInput");
    var emailCheck = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    try
    {
        if(emailCheck.test(emailInput.value) === false)
        {
            throw "Please provide a valid email.";
        }
    } catch(msg)
    {
        formValidity = false;
        errorMsg.style.display = "block";
        errorMsg.style.color = "white";
        errorMsg.style.textAlign = "center";
        errorMsg.innerHTML = msg;
        emailInput.style.backgroundColor = "rgb(255,233,233)";
        emailInput.focus();
    }
    console.log(formValidity + ": in verifyEmail()");
}

function verifyTelephone()
{
    var phoneRegex = /^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/;
    console.log("Entering verifyTelephone()");
    var telephoneInput = document.getElementById("telephoneInput");
    try
    {
        if(phoneRegex.test(telephoneInput.value) === false)
        {
            console.log("phone failed");
            throw "Enter a valid phone number. Example: 555-555-5555";
        }
    } catch(msg)
    {
        formValidity = false;
        errorMsg.style.display = "block";
        errorMsg.style.color = "white";
        errorMsg.style.textAlign = "center";
        errorMsg.innerHTML = msg;
        telephoneInput.style.backgroundColor = "rgb(255,233,233)";
        telephoneInput.focus();
    }
    console.log(formValidity + ": in verifyTelephone");
}

function writeCookies()
{
    var myPath = "/~bbottero";
    var now = new Date();
    var days = 7;
    now.setTime(now.getTime() + (days * 86400000));
    var expiry = now.toUTCString();
    var firstName = encodeURIComponent(document.myForm.firstName.value);
    var lastName = encodeURIComponent(document.myForm.lastName.value);
    var emailAddress = encodeURIComponent(document.myForm.emailAddress.value);
    var telephone = encodeURIComponent(document.myForm.telephone.value);

    document.cookie = "firstName=" + firstName + "; ";
    document.cookie = "lastName=" + lastName + "; ";
    document.cookie = "emailAddress=" + emailAddress + "; ";
    document.cookie = "telephone=" + telephone + "; ";
    document.cookie = "expiry=" + expiry + "; ";
    document.cookie = "path=" + myPath + "; ";

    var logString = "firstName=" + firstName + "\nlastName=" + lastName;
    logString += "\nemailAddress=" + emailAddress + "\ntelephone=" + telephone;
    logString += "\nexpiry=" + expiry + "\npath=" + myPath;
    console.log(logString);
}

function readCookies()
{
    var cookieArray = [];
    var cookieKey = "";
    var cookieValue = "";

    var allCookies = document.cookie;
    console.log(document.cookie);
    console.log(allCookies.split("; "));
    var cookieInfo = "All cookies: " + allCookies + "\n";
    for(var i = 0; i < cookieArray.length; i++)
    {
        cookieKey = cookieArray[i].split("=")[0];
        cookieValue = cookieArray[i].split("=")[1];
        console.log("cookieKey: " + cookieKey);
        console.log("cookieValue: " + cookieValue);
        cookieInfo += "Key is: <b>" + cookieKey + "</b> and Value is: <b>" + cookieValue + "</b>";
        switch (cookieKey)
        {
            case "firstName": var firstName = decodeURIComponent(cookieValue);
            break;
            case "lastName": var lastName = decodeURIComponent(cookieValue);
            break;
            case "emailAddress": var emailAddress = decodeURIComponent(emailAddress);
            break;
            case "telephone": var telephone = decodeURIComponent(telephone);
            break;
        }
    }
    var cookieElement = document.getElementById("firstNameInput");
    cookieElement.innerHTML = firstName;
    var cookieElement = document.getElementById("lastNameInput");
    cookieElement.innerHTML = lastName;
    var cookieElement = document.getElementById("emailInput");
    cookieElement.innerHTML = emailAddress;
    var cookieElement = document.getElementById("telephoneInput");
    cookieElement.innerHTML = telephone;
}

function formInit()
{
    formEventListeners();
    readCookies();
}

if(window.addEventListener)
{
    window.addEventListener("load", formInit, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", formInit);
}