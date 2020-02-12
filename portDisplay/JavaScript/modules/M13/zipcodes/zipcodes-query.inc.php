<?php
/*	Author:		Barry J. Sullens
	Date Written:	November 24, 2019
	Description:	Server-side script for converting zipcode
			into city and state
*/

$dbName = "ajacks";
require ("connecti2db.inc.php");

$zipCode = $_GET['zipcode'];

$query = "SELECT city,state
	  FROM zipCodes
	  WHERE zipCode = $zipCode";

$result = mysqli_query($connection,$query)
  or
die ("<b>Query Failed</b><br />$query<br />" . mysqli_error($connection));

if ($row = mysqli_fetch_row($result))
{
	$city  = $row[0];
	$state = $row[1];

	$responseString = ucwords(strtolower($city))  . ", " . $state;
}
else
{
	$responseString = "INVALID ZIP,";
}
echo $responseString;
?>
