<?php 
/*
      Author:        YOUR NAME
      Date Written:  March 24, 2010
      Date Updated:  TODAY'S DATE
      Description:   Generate report from Henry Books database
*/

// PREVENT SCRIPT FROM EXECUTING IF GET QUERY STRING IS EMPTY
if (empty($_GET))
{ die("<p>AJAX request contains no data.</p>\n"); }

// EXTRACT THE FORM DATA FROM THE QUERY STRING
$paperback = $_GET['paperback'];
// ASSIGN GENRE IF NULL OR EMPTY STRING
$genre     = (!isset($_GET['genre']) || ($_GET['genre'] == "")) 
	   ? null : $_GET['genre'];

if ($genre === null)
{ die("<p>Please select a genre.</p>\n"); }

// Query the DB for the result set prior to generating the report

$dbName = "henrybooks";
require ("connecti2db.inc.php");
$query = "SELECT bookCode,title,publisherCode,type,price
          FROM books
          WHERE paperback=\"$paperback\" AND type=\"$genre\"";

$result = mysqli_query($connection,$query)
  or
die ("<b>Query Failed</b>: $query<br />" . mysqli_error());

echo "<table class=collapse>\n<tr>\n";
echo "  <th>Book Code</th>\n  <th class=left>Title</th>\n  <th>Publisher</th>";
echo "\n  <th class=lpad>Type</th>\n  <th class=rpad>Price</th>\n</tr>\n";
while ($row = mysqli_fetch_row($result))
{
	$bookCode  = $row[0];
	$bookTitle = $row[1];
	$publisher = $row[2];
	$bookType  = $row[3];
	$bookPrice = $row[4];
	echo "<tr>\n  <td class=centered>$bookCode</td>\n  <td>$bookTitle</td>\n  <td class=centered>$publisher</td>\n";
	echo "  <td class=centered>$bookType</td>\n  <td class=rpad>$bookPrice</td>\n</tr>\n";
}
echo "</table>\n";

mysqli_close($connection);
?>
