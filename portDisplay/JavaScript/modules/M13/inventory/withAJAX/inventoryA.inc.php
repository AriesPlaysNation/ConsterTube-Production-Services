<?php
/*   
	Author:		Barry J. Sullens
	Date written:	November 24, 2019
	Description:	Demonstrate building a datalist via AJAX database query
*/

// ESTABLISH CONNECTION TO DATABASE SERVER
$dbName = "ajacks";
require ("connecti2db.inc.php");

// BUILD QUERY TO RETRIEVE ALL CURRENT PART NUMBERS
$query = "SELECT partNum
          FROM product
          WHERE 1
	  ORDER BY partNum";

// EXECUTE THE QUERY
$result = mysqli_query($connection,$query)
  or
die ("<b>Query Failed</b><br />$query<br />" . mysqli_error($connection));

$responseText = "\n"; // Initialize responseText as a newline.

while ($row = mysqli_fetch_row($result))
{
   $responseText .= "\t<option value=\"$row[0]\"></option>\n";
   // Concatenate responseText with each new <option> element.
}

echo $responseText; // This variable is the AJAX responseText.

mysqli_close($connection);
?>
