/* Author:          Brad Botteron
   Date Written:    11/25/19
   Description:     Form Validation script -> JavaScript <-
 */

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
    console.log(formValidity + ": intial formValidity");
    verifyName();
    verifyEmail();
    verifyTelephone();
    console.log(formValidity + ": formValidity");
    if(formValidity === true)
    {
        console.log("Entering formValidation True block");
        errorMsg.innerHTML = "";
        errorMsg.style.display = "none";
        form.submit();
        console.log("Form Submitted");
    }
}

function verifyName()
{
    console.log("Entering verifyName()");
    var nameInput = document.getElementById("nameInput");
    try
    {
        if(/^[a-zA-Z]+$/.test(nameInput.value) === false)
        {
            throw "Name cannot contain numbers.";
        } else {
            nameInput.style.backgroundColor = "";
            errorMsg.innerHTML = "";
            errorMsg.display = "none";
        }
    } catch(msg)
    {
        formValidity = false;
        errorMsg.display = "block";
        errorMsg.style.color = "red";
        errorMsg.innerHTML = msg;
        nameInput.style.backgroundColor = "rgb(255,233,233)";
        nameInput.focus();
    }
    console.log(formValidity + ": in verifyName");
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
        } else {
            emailInput.style.backgroundColor = "";
            errorMsg.innerHTML = "";
            errorMsg.display = "none";
        }
    } catch(msg)
    {
        formValidity = false;
        errorMsg.display = "block";
        errorMsg.style.color = "red";
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
        } else {
            telephoneInput.style.backgroundColor = "";
            errorMsg.innerHTML = "";
            errorMsg.display = "none";
        }
    } catch(msg)
    {
        formValidity = false;
        errorMsg.display = "block";
        errorMsg.style.color = "red";
        errorMsg.innerHTML = msg;
        telephoneInput.style.backgroundColor = "rgb(255,233,233)";
        telephoneInput.focus();
    }
    console.log(formValidity + ": in verifyTelephone");
}

function formInit()
{
    formEventListeners();
}

if(window.addEventListener)
{
    window.addEventListener("load", formInit, false);
} else if (window.attachEvent)
{
    window.attachEvent("onload", formInit);
}