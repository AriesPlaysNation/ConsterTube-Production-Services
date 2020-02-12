<?php
/*	Author:		Barry J. Sullens
	Date Written:	November 24, 2019
	Description:	queries requested record
			builds partial page segment containing populated UPDATE form
			returns as responseText to AJAX
*/

$currentYear = date('Y');
$dbName      = "ajacks"; 

require ("connecti2db.inc.php");

// EXTRACT THE PART NUMBER FROM THE AJAX CALL
$partNum = $_GET['partNum'];

// BUILD A QUERY TO LOOKUP THE REQUESTED RECORD
$query = "SELECT partNum,description,unit,qty,cost,price,onSpecial,
                 warranty,deleted
          FROM product
          WHERE partNum = '$partNum'";

// EXECUTE THE QUERY
$result = mysqli_query($connection,$query)
  or
die ("<b>Query Failed</b><br />$query<br />" . mysqli_error($connection));

// HANDLE UNEXPECTED RESULTS
if (mysqli_num_rows($result) > 1)
{
   die ("<p>$partNum did not produce a unique result.</p>\n");
}
elseif (mysqli_num_rows($result) < 1)
{
   die("<p>$partNum was not found. <a href=\"inventory.html\">Try again</a>.</p>\n");
}
// POPULATE A FORM WITH CURRENT DATA FOR THE REQUESTED RECORD
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
<section id="ajaxResponseText">
  <header>
    <h2>Step 2: Make changes to existing data in the $partNum record</h2>
  </header>
    <form id="form1" method="get">
    <div>
      <p><label class="oneTwenty">Part Number</label>
      <input name="partNum" type="text" readonly="readonly" 
             title="This field is READONLY" value="$partNum" size="25" /></p>
      <p><label class="oneTwenty">Description</label>
      <input name="description" type="text" size="25" 
	     maxlength="25" value="$description" /></p>
      <p><label class="oneTwenty">Unit</label>
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
            \t\t<label class="forty" for="unit$radioRow[id]">$radioRow[label]</label>\n
HEREDOC;
} //END FOREACH
echo <<<HEREDOC
	  </p>
          <p><label class="oneTwenty">Qty on Hand</label>
          <input name="qty" type="text" size="4" maxlength="3" value="$qty" /></p>
          <p><label class="oneTwenty">Our Cost</label>
          <input name="cost" type="text" size="7" maxlength="7" value="$cost" /></p>
          <p><label class="oneTwenty">Retail Price</label>
          <input name="price" type="text" size="7" maxlength="7" value="$price" /></p>
          <p><label class="oneTwenty">On Special</label>\n
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
          <label class="forty" for="onSpecial0">No</label>
            <input type="radio" name="onSpecial" id="onSpecial1" value="1" $onSpecial1checked />
          <label class="forty" for="onSpecial1">Yes</label>
	  </p>
          <p><label class="oneTwenty">Deleted</label>\n
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
          <label class="forty" for="deleted0">No</label>
            <input type="radio" name="deleted" id="deleted1" value="1" $deleted1checked />
          <label class="forty" for="deleted1">Yes</label>
	  </p>
          <p><label class="oneTwenty">Warranty Info</label>
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
	</div>
	<div>
          <input type="button" name="submit" value="Update" id="updateBtn" />
	</div>
    </form>\n
    <aside id="feedback">
	<h3>Results for $partNum</h3>
	</aside>
	<hr />
<footer><p>&copy; 2015-$currentYear. Ivy Tech Community College.</p></footer>
</section><!-- ajaxResponseText -->
<script src="ajax-framework.js"></script>
<script src="inventory.js"></script>
ENDDOC;
mysqli_close($connection);
?>
