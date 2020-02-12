<?php
/*
     Author:          Barry J. Sullens
     Date Written:    November 24, 2019
     Description:     Generates a partial page segment that writes the updates from 
                      inventory.html to the database table.
*/
$dbName = "ajacks";
$title  = "Data Update";

// CONNECT TO THE DATABASE
require ("connecti2db.inc.php");

// CLEAN UP THE DATA BEFORE UPDATE; PREVENT SQL INJECTIONS
$partNum	= mysqli_real_escape_string($connection,stripslashes($_GET['partNum']));
$description	= mysqli_real_escape_string($connection,stripslashes($_GET['description']));
$unit		= mysqli_real_escape_string($connection,stripslashes($_GET['unit']));
$qty		= mysqli_real_escape_string($connection,stripslashes($_GET['qty']));
$cost		= mysqli_real_escape_string($connection,stripslashes($_GET['cost']));
$price		= mysqli_real_escape_string($connection,stripslashes($_GET['price']));
$onSpecial	= mysqli_real_escape_string($connection,stripslashes($_GET['onSpecial']));
$warranty	= mysqli_real_escape_string($connection,stripslashes($_GET['warranty']));
$deleted	= mysqli_real_escape_string($connection,stripslashes($_GET['deleted'])); 

// BUILD THE QUERY FOR THE UPDATE
$query = "UPDATE product
          SET description = '$description',
              unit        = '$unit',
              qty         = '$qty',
              cost        = '$cost',
              price       = '$price',
              onSpecial   = '$onSpecial',
              warranty    = '$warranty',
	      deleted     = '$deleted'
          WHERE partNum   = '$partNum'";

// EXECUTE THE QUERY
$result = mysqli_query($connection,$query)
  or
die ("<b>Query Failed</b><br />$query<br />" . mysqli_error($connection));

// LOOK UP THE RECORD FOR CONFIRMATION OF THE UPDATE
$query = "SELECT description,unit,qty,cost,price,onSpecial,warranty,deleted
          FROM product
          WHERE partNum = '$partNum'";

$result = mysqli_query($connection,$query)
  or
die ("<b>Query Failed</b><br />$query<br />" . mysqli_error($connection));

$row = mysqli_fetch_assoc($result);

// BUILD THE AJAX RESPONSETEXT
// All echo output in this script becomes the AJAX responseText

echo "<h3>Step 3: $partNum has been updated:</h3>\n";
echo "<table>\n";
foreach ($row as $key => $value)
{
  echo "\t<tr><th>$key</th><td>$value</td>\n";
} // end FOREACH ROW
echo "</table>\n";
echo "<p>Now that $partNum has been updated, you may update ";
echo "<a href=\"inventory.html\">another record</a>.</p>\n";

mysqli_close($connection);
?>
