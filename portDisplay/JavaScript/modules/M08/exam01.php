<?php
/*	Author:		Barry J. Sullens
	Date Written: 	October 8, 2018
	Dependencies:	index.html
	Description:	Processing script for SDEV 250 Exam01

*/
$firstName 		= $_POST['fname'];
$lastName 		= $_POST['lname'];
$emailAddress 		= $_POST['email'];
$age 			= $_POST['age'];
?>
<!doctype html>
<html lang="en">	  <!-- Author: 		Barry J. Sullens -->
<head>			  <!-- Date:		October 8, 2018  -->
 <title>Thank you, <?php echo $firstName ?>!</title><!-- Description:	Thank you page for Exam01 -->
 <meta charset="utf-8" />
 <meta name="description"	content="SDEV 250 Exam 1 Thank you page" />
 <meta name="author"		content="Barry J. Sullens" />
 <link rel="stylesheet"		href="exam01.css" /> 
</head>
<body>
<div id="wrapper">
<main>
 <h1>Thank you, <?php echo $firstName ?>!</h1>
 <p>We appreciate your interest in the School of Information Technology. 
<?php
if ($age < 16)
{
   die("<p>Since you are under 16 years of age, you are ineligible to be admitted, but we appreciate your interest anyway.</p>\n</main>\n</div>\n</body>\n</html>");   
} // END IF $AGE < 16
elseif ($age >= 60)
{
	echo " Since you are 60 years of age or older, you qualify for our senior discount. ";
} // END IF AGE >= 60
if (!empty($_POST['programs']))
{
	$programs = $_POST['programs'];
	echo "Our school secretary will send you information about the following programs:</p>\n";
	echo "<ul>\n";
	foreach($programs as $programElement)
	{
		switch ($programElement)
		{
			case 0: $programName = "Computer Science";
					break;
			case 1: $programName = "Computer Security / Information Assurance";
					break;
			case 2:	$programName = "Database Management and Administration";
					break;
			case 3:	$programName = "Informatics";
					break;
			case 4: $programName = "Information Technology Support";
					break;
			case 5:	$programName = "Network Infrastructure";
					break;
			case 6: $programName = "Software Development";
					break;
			case 7: $programName = "Server Administration";
					break;
		} // END SWITCH 
		echo "\t<li>$programName</li>\n";
	}
	echo "</ul>\n";
} // END IF (!EMPTY($_POST['PROGRAMS']))
else
{
	echo " You did not express interest in any of our programs. Our school secretary will
		   send some general information about the school to you.</p>\n";
}
echo "<p>We will contact you at your email address, <code>$emailAddress</code>. Thank you again!</p> 
</main>\n";
$year = date('Y');
echo "<footer><p>&copy; $year. Ivy Tech Community College. All rights reserved.</p></footer>\n";
echo "</div><!--wrapper-->\n</body>\n</html>";
?>
