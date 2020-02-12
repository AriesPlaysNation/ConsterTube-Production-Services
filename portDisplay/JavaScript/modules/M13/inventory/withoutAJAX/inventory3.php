<?php 
/*	Author:		Barry J. Sullens
	Date Written:	November 24, 2019
	Description:	Step 3 of Inventory Update
*/

$stylesheet  = "inventory";
$step        = "step3";
$author      = "Barry J. Sullens";
$dateWritten = "November 24, 2019";
$description = "Step 3 of Inventory Update";
$title       = "Step 3: Update Confirmation";
$dbName      = "ajacks"; // change to your username

require ("connecti2db.inc.php");
require ("htmlHead.inc");
echo "<h1>$title</h1>\n";

if (empty($_POST)) // Stop the script if user tries to execute without the form
{ echo "<p>Please start with the form <a href=chapter30ha.html>chapter30ha.html</a>.</p>\n";
  require("htmlFoot.inc");
  die();
}

$thisPartNum = mysqli_real_escape_string($connection,stripslashes($_POST['partNum']));
$description = mysqli_real_escape_string($connection,stripslashes($_POST['description']));
$unit        = mysqli_real_escape_string($connection,stripslashes($_POST['unit']));
$qty         = mysqli_real_escape_string($connection,stripslashes($_POST['qty']));
$cost        = mysqli_real_escape_string($connection,stripslashes($_POST['cost']));
$price       = mysqli_real_escape_string($connection,stripslashes($_POST['price']));
$onSpecial   = mysqli_real_escape_string($connection,stripslashes($_POST['onSpecial']));
$warranty    = mysqli_real_escape_string($connection,stripslashes($_POST['warranty']));
$deleted     = mysqli_real_escape_string($connection,stripslashes($_POST['deleted'])); 

// update this record in the database table
$query = "UPDATE product
	  SET 	description = '$description',
		unit        = '$unit',
		qty	    = '$qty',
		cost	    = '$cost',
		price	    = '$price',
		onSpecial   = '$onSpecial',
		warranty    = '$warranty',
		deleted	    = '$deleted'
	  WHERE	partNum = '$thisPartNum'";

$result = mysqli_query($connection,$query) or
die("<b>Query Failed.</b></br>" . mysqli_error($connection));

// Query the database table to show the record has been updated
$query = "SELECT partNum,description,unit,qty,cost,price,onSpecial,warranty,deleted
          FROM product
	  ORDER BY partNum"; 
$result = mysqli_query($connection,$query) or
die("<b>Query Failed.</b><br />$query<br />" . mysqli_error($connection));

// Build a table from the SQL query
echo "<p>The record for $thisPartNum has been updated.</p>\n";
echo "<table class=collapse>\n"; // begin table and print header row
echo "<tr>\n\t<th>PartNum</th>\n\t<th>Desc</th>\n";
echo "\t<th>Unit</th>\n\t<th>Qty</th>\n\t<th>Cost</th>\n";
echo "\t<th>Price</th>\n\t<th>OnSpecial</th>\n";
echo "\t<th>Warranty</th>\n\t<th>Deleted</th>\n</tr>\n";

$numRecords = mysqli_num_rows($result); // capture number of records
while ($row = mysqli_fetch_row($result))
{
  $partNum	= stripslashes($row[0]);
  $description	= stripslashes($row[1]);
  $unit		= stripslashes($row[2]);
  $qty		= stripslashes($row[3]);
  $cost		= stripslashes($row[4]);
  $price	= stripslashes($row[5]);
  $onSpecial	= stripslashes($row[6]);
  $warranty	= stripslashes($row[7]);
  $deleted	= stripslashes($row[8]);

  $onSpecial = ($onSpecial == 1) ? "<b>Yes</b>" : "No";
  $deleted   = ($deleted   == 1) ? "<b>Yes</b>" : "No";
  $shading   = ($partNum   == $thisPartNum) ? "class=shaded" : "";

  echo "<tr $shading>\n";
  echo "\t<td>$partNum</td>\n\t<td>$description</td>\n";
  echo "\t<td class=lpad>$unit</td>\n\t<td class=rpad>$qty</td>\n\t<td class=rpad>$cost</td>\n";
  echo "\t<td class=rpad>$price</td>\n\t<td class=centered>$onSpecial</td>\n";
  echo "\t<td class=centered>$warranty</td>\n\t<td class=centered>$deleted</td>\n";
  echo "</tr>\n";
}
echo "</table>\n"; // end the table
echo "<aside>\n\t<p>($numRecords) records retrieved.<p>\n";
echo "\t<p><a href=inventory1.html>Update Another</a></p>\n";
echo "</aside>\n";

require ("htmlFoot.inc");
mysqli_close($connection);
?>
