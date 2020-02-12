<?php 
$jsonString = $_POST['jsonObj']; // DO NOT CHANGE THIS PART!
$currYear   = date('Y');
?>
<!doctype html>		<!-- Author:	  Brad Botteron               -->
<html lang="en">	<!-- Date:	  11/17/19            -->
<head>			<!-- Description: Processing a JSON String-->	
<title>Chapter08B - JSON Results</title>
 <meta charset="utf-8" />    
 <meta name="viewport" content="width=device-width,initial-scale=1.0">
 <link rel="stylesheet" href="chapter08.css" />
</head>
<body>
<div id="wrapper">
<article>
    <h1>JSON and the Objectnauts Results</h1>
	<h2>Your object has been received.</h2>
	<p>Below is the object that was transmitted to the
	   server-side script.</p>
	   <!-- Original script did not come with figure so I added in -->
	   <figure id="rolodex">
	   </figure>
	<script> // For simplicity we will embed this JavaScript 
	</script>
</article>
<script> // This JavaScript includes PHP, so it must be embedded
"use strict";
var myString = '<?php echo $jsonString ?>'; // Single quotes around this PHP call
console.log(myString);
var newPerson = JSON.parse(myString);
console.log(newPerson);
newPerson.printCard = function()
{
    var line1 = "Name:\t\t" + this.firstName + " " + this.lastName + "<br />";
    var line2 = "Address:\t\t" + this.address + "<br />";
    var line3 = "Work:\t\t" + this.workPhone + "<br />";
    var line4 = "Home:\t\t" + this.homePhone + "<br />";
    var rolodexElement = document.getElementById("rolodex");
    var newRolodexCard = document.createElement("pre");
    newRolodexCard.innerHTML = line1 + line2 + line3 + line4;
    rolodexElement.appendChild(newRolodexCard);
} // END of printCard method
newPerson.printCard();
</script>
<footer>&copy; <?php echo $currYear ?>. Ivy Tech Community College Northeast</footer>
</div><!-- wrapper -->
</body>
</html>
