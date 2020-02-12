<?php
/*	Author:		Barry J. Sullens
	Date Written:	November 24, 2019
	Description:	Part 2 of Inventory Update
*/

$stylesheet  = "inventory";
$step        = "step2";
$author      = "Barry J. Sullens";
$dateWritten = "November 24, 2019";
$description = "Step 2 of Inventory Update";
$title       = "Step 2: Inventory Update";
$dbName      = "ajacks"; // replace with your username
require ("connecti2db.inc.php");
require ("htmlHead.inc");

echo "<h1>$title</h1>\n";

if (empty($_POST))
{ echo "<p>Please start with the form <a href=inventory1.html>inventory1.html</a>.</p>\n";
  require("htmlFoot.inc");
  die();
}
// EXTRACT THE PART NUMBER FROM THE POSTED FORM DATA
$partNum = $_POST['partNum'];

// LOOK FOR THE REQUESTED RECORD
$query = "SELECT partNum,description,unit,qty,cost,price,onSpecial,
                 warranty,deleted
          FROM product
          WHERE partNum = '$partNum'";

$result = mysqli_query($connection,$query)
  or
die ("<b>Query Failed</b><br />$query<br />" . mysqli_error($connection));

if (mysqli_num_rows($result) > 1)
{
   echo "<p>$partNum did not produce a unique result.\n";
   echo "<a href=\"inventory1.html\">Try again</a>.</p>\n";
   require("htmlFoot.inc");
   die ();
}
elseif (mysqli_num_rows($result) < 1)
{
   echo "<p>$partNum was not found. <a href=\"inventory1.html\">Try again</a>.</p>\n";
   require("htmlFoot.inc");
   die ();
}
// next step is to modify the form below to action update_product.php
// and populate this form with data from the query above.
 $row 		= mysqli_fetch_row($result);
 $partNum    	= $row[0];
 $description 	= stripslashes($row[1]);
 $unit        	= $row[2];
 $qty         	= $row[3];
 $cost        	= $row[4];
 $price       	= $row[5];
 $onSpecial  	= $row[6];
 $warranty   	= $row[7];
 $deleted     	= $row[8];
echo <<<FORMDOC
  <header>
    <h2>Acme Products Division</h2>
  </header>
    <form id="form1" method="post" action="inventory3.php">
    <fieldset>
    <legend>Step 2: Update $partNum</legend>
      <p><label class="oneForty">Part Number</label>
      <input name="partNum" type="text" readonly="readonly" 
             title="This field is READONLY" value="$partNum" /></p>
      <p><label class="oneForty">Description</label>
      <input name="description" type="text" size="25" 
	     maxlength="25" value="$description" /></p>
      <p><label class="oneForty">Unit</label>
FORMDOC;
echo "\n";
// HERE IS WHERE THE LOOP TO BUILD RADIO BUTTONS BEGINS 
// Create a small associative array to help build the
// radio button group with a loop 

$radioAttribute  = array (
			array (	'value' => 'EA', 
                		'id'    => '0', 
				'label' => 'Each'),
                     	array (	'value' => 'BX',
                             	'id'    => '1',
                             	'label' => 'Box'),
                      	array (	'value' => 'CT',
                             	'id'    => '2',
                             	'label' => 'Carton'),
                      	array (	'value' => 'BG',
                             	'id'    => '3',
                             	'label' => 'Bag'));
foreach ($radioAttribute as $radioRow)
{
    if ($radioRow['value'] == $unit)
    {  $radioButtonChecked = "checked=\"checked\""; }
    else
    {  $radioButtonChecked = ""; }

echo <<<HEREDOC
              <input type="radio" name="unit" value="$radioRow[value]"
                     id="unit$radioRow[id]" $radioButtonChecked /> 
            \t\t<label class="eighty" for="unit$radioRow[id]">$radioRow[label]</label>\n
HEREDOC;
} //END FOREACH
echo <<<HEREDOC
	  </p>
          <p><label class="oneForty">Qty on Hand</label>
          <input name="qty" type="text" size="4" maxlength="3" value="$qty" /></p>
          <p><label class="oneForty">Our Cost</label>
          <input name="cost" type="text" size="7" maxlength="7" value="$cost" /></p>
          <p><label class="oneForty">Retail Price (MSRP)</label>
          <input name="price" type="text" size="7" maxlength="7" value="$price" /></p>
          <p><label class="oneForty">On Special</label>\n
HEREDOC;
if ($onSpecial == 0)
 {  $onSpecial0checked = "checked=\"checked\""; 
    $onSpecial1checked = ""; // not needed, so make it blank
 }
else
 {  $onSpecial1checked = "checked=\"checked\""; 
    $onSpecial0checked = ""; // not needed, so make it blank
 }
echo <<<HEREDOC
            <input type="radio" name="onSpecial" id="onSpecial0" value="0" $onSpecial0checked />
          <label class="eighty" for="onSpecial0">No</label>
            <input type="radio" name="onSpecial" id="onSpecial1" value="1" $onSpecial1checked />
          <label class="eighty" for="onSpecial1">Yes</label>
	  </p>
          <p><label class="oneForty">Deleted</label>\n
HEREDOC;
if ($deleted == 0)
 {  $deleted0checked = "checked=\"checked\""; 
    $deleted1checked = ""; // not needed, so make it blank
 }
else
 {  $deleted1checked = "checked=\"checked\""; 
    $deleted0checked = ""; // not needed, so make it blank
 }

echo <<<HEREDOC
            <input type="radio" name="deleted" id="deleted0" value="0" $deleted0checked />
          <label class="eighty" for="deleted0">No</label>
            <input type="radio" name="deleted" id="deleted1" value="1" $deleted1checked />
          <label class="eighty" for="deleted1">Yes</label>
	  </p>
          <p><label class="oneForty">Warranty Info</label>
          <select name="warranty">
            <option value="00" disabled>--Select One--</option>\n
HEREDOC;
$selectAttribute = array (
                      array ('value' => '30',
                             'label' => '30 days'),
                      array ('value' => '1Y',
                             'label' => '1 Year'),
                      array ('value' => '2Y',
                             'label' => '2 Years'),
                      array ('value' => '3Y',
                             'label' => '3 Years'),
                      array ('value' => '4Y',
                             'label' => '4 Years')
			); // end of 2-dim array declaration
foreach ($selectAttribute as $warrantyAttribute)
{
    if ($warranty == $warrantyAttribute['value'])
    {  $checked = "selected=\"selected\""; }
    else
    {  $checked = ""; }

    echo "            <option value=\"$warrantyAttribute[value]\" ";
    echo "$checked >";
    echo "$warrantyAttribute[label]</option>\n";
} // FOREACH
echo <<<ENDDOC
          </select></p>
	</fieldset>
	<fieldset>
          <input name="reset" type="reset" value="Clear" />
          <input type="submit" name="submit" value="Update" />
	</fieldset>
    </form>\n
ENDDOC;
require("htmlFoot.inc");
mysqli_close($connection);
?>
