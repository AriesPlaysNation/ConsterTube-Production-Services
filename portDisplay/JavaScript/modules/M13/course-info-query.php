<?php
/* 	This PHP script generates an HTML segment for M13 Lab. 
	Authors: Barry J. Sullens
	         Justin Grass
*/

# DO NOT CHANGE ANYTHING IN THIS SCRIPT.

$dbName = "ajacks"; // DO NOT CHANGE THIS DATABASE NAME

require ("connecti2db.inc.php");
	// Retrieve data from Query String
$program   = $_GET['program'];
	// Escape User Input to help prevent SQL Injection
$program   = mysqli_real_escape_string($connection,stripslashes($program));
if(!isset($_GET['courseNum'])) // Only program is passed in the GET string
{
	//build the query
$query  = "SELECT courseNum,courseName 
           FROM ajaxLab 
           WHERE program = '$program'
           ORDER BY courseNum";
	//Execute the query
$result = mysqli_query($connection,$query) 
or 
die("<b>Query Failed.</b><br />$query<br />" . mysqli_error($connection));
	//Build Result String
$displayString  = "<select id=\"course\" name=\"course\">\n";
$displayString .= "\t<option value=\"\" disabled selected>--Choose One--</option>\n";
	// Build a new row/option in the select list for each course returned
	// using an associative array
while($row = mysqli_fetch_assoc($result))
{
	$displayString .= "\t<option value=\"$row[courseNum]\">";
	$displayString .= "$row[courseNum] $row[courseName]</option>\n";
}// WHILE

$displayString .= "</select>\n";
echo $displayString; // This sends the responseText back to JavaScript
$numRows = mysqli_num_rows($result);

if ($numRows < 1)
{
	echo "<p>No records match your criteria. Try again.</p>\n";
}// IF NUMROWS
}// IF NOT ISSET COURSENUM
else // Both program and courseNum are passed in the GET string
{
$courseNum = $_GET['courseNum'];
$query  = "SELECT courseDescription
           FROM ajaxLab
           WHERE program = '$program'
           AND courseNum = '$courseNum'"; 
	// Execute query or display error message
$result = mysqli_query($connection,$query)
or
die("<b>Query Failed.</b><br />$query<br />" . mysqli_error($connection));
	// Put results into an associative array named $row
$row = mysqli_fetch_assoc($result);
	// Build the string to send to AJAX
$displayString = $row['courseDescription'];
	// The echo sends the results to AJAX
echo "$displayString";
} // END IF NUMROWS < 1
?>
