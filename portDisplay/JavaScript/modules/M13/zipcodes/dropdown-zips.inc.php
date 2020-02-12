<?php
/*
	Author:		Barry J. Sullens
	Date Written:	November 24, 2019
	Description:	Server-side script to generate
			state dropdown list
*/
$dbName = "ajacks";
require ("connecti2db.inc.php");

$query = "SELECT state
	  FROM zipCodes
	  GROUP BY state
	  ORDER BY state";

$result = mysqli_query($connection,$query)
  or
die ("<b>Query Failed</b><br />$query<br />" . mysqli_error($connection));

echo "\n<datalist id=\"stateList\">\n";
while ($row=mysqli_fetch_row($result))
{
	$state = $row[0];
	echo "\t<option value=\"$state\">$state</option>\n";
}
echo "</datalist>\n";
?>
