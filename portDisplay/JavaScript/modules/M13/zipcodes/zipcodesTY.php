<?php 
/*	Author:		Barry J. Sullens
	Date Written:	November 24, 2019
	Description:	Thank you page for Zipcode demo
*/
$author      = "Barry J. Sullens";
$dateWritten = "November 24, 2019";
$description = "Thank you page for Zipcode demo";
$title       = "Thank you";
$stylesheet  = "zipcodes";

require("htmlHead.inc");

if (empty($_POST))
{  echo "<aside><p>You must enter from the form <a href=zipcodes.html>zipcodes.html</a>.</p></aside>"; 
   require("htmlFoot.inc");
   die();
}

$firstName = $_POST['fname'];
$email     = $_POST['email'];
$city      = $_POST['city'];
$state     = $_POST['state'];
?>
<h1>Thank You, 
<?php echo $firstName ?></h1>
<p>Your information has been recorded in our database. We will begin spamming you at <span class="bold">
<?php echo $email ?></span>
as soon as we sell your data to the highest bidder, the lowest bidder, and every other bidder in between. We'll start with spammers in <span class="bold">
<?php echo $city ?></span>,
then expand to the rest of the state of <span class="bold">
<?php echo $state ?></span>,
and eventually the entire country. I hope you have a healthy spam filter!</p>
<?php require("htmlFoot.inc"); ?>
