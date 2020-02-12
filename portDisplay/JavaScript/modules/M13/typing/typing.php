<?php
/*	Author:			Brad Botteron
	Date Written:	11/28/19
	Description:	Server-side script to produce partial page 
			segment for AJAX typing demo
*/
$dbName = "ajacks";
require("connecti2db.inc.php");

	// Retrieve data from Query String
$age    = $_GET['age'];
$gender = $_GET['gender'];
$wpm    = $_GET['wpm'];
	// Escape User Input to help prevent SQL Injection
$age    = mysqli_real_escape_string($connection,$age);
$gender = mysqli_real_escape_string($connection,$gender);
$wpm    = mysqli_real_escape_string($connection,$wpm);
	//build query
$query = "SELECT * FROM typing WHERE ae_gender = '$gender'";
if(is_numeric($age))
	$query .= " AND ae_age <= $age";
if(is_numeric($wpm))
	$query .= " AND ae_wpm <= $wpm";
	//Execute query
$qry_result = mysqli_query($connection,$query) or die(mysqli_error($connection));
	//Build Result String
$display_string = "<table>\n";
$display_string .= "<tr>\n";
$display_string .= "\t<th>Name</th>\n";
$display_string .= "\t<th>Age</th>\n";
$display_string .= "\t<th>Gender</th>\n";
$display_string .= "\t<th>WPM</th>\n";
$display_string .= "</tr>\n";
	// Insert a new row in the table for each person returned
while($row = mysqli_fetch_array($qry_result)){
	$display_string .= "<tr>\n";
	$display_string .= "\t<td>$row[ae_name]</td>\n";
	$display_string .= "\t<td>$row[ae_age]</td>\n";
	$display_string .= "\t<td>$row[ae_gender]</td>\n";
	$display_string .= "\t<td>$row[ae_wpm]</td>\n";
	$display_string .= "</tr>\n";
}
$display_string .= "</table>\n";
echo $display_string;
$num_rows = mysqli_num_rows($qry_result);
if ($num_rows < 1)
{
	echo "<tr><td>";
	echo "<p>No records match your criteria. Try again.</p>\n";
	echo "</td></tr>\n";
}
# CHANGE LOG
# 04/19/18 BJS Moved database table from test database to ajacks database
# 11/10/18 BJS Converted script from mysql() to mysqli() functions.
?>
