/* Author:          Brad Botteron
Date:               11/28/19
Desc:               AJAX Framework with two processes for Typing Demo
 */

function ajaxFunction()
{
    var ajaxRequest; // The variable that makes all the magic possible!

    try
    {
        //Real browsers lol
        ajaxRequest = new XMLHttpRequest();
    } catch (msg)
    {
        try
        {
            ajaxRequest = new ActiveXObject("Msxm12.XMLHTTP");
        } catch (msg)
        {
            //something went wrong
            alert("Your browser cannot handle AJAX!");
            return false;
        }
    }
    // Create a function that will receive data sent from the browser
    ajaxRequest.onreadystatechange = function () {
        if(ajaxRequest.readyState == 4)
        {
            var ajaxDisplay = document.getElementById("ajaxDiv");
            ajaxDisplay.innerHTML = ajaxRequest.responseText;
        }
    }

    var age = document.getElementById("age").value;
    var wpm = document.getElementById("wpm").value;
    var gender = document.getElementById("gender").value;
    var queryString = "?age=" + age + "&wpm=" + wpm + "&gender=" + gender;
    console.log("Query String: " + queryString);
    console.log("AJAX call to typing.php");
    ajaxRequest.open("GET", "typing.php" + queryString, true);
    ajaxRequest.send(null);
}
