<?php
/*	Author: 	Barry J. Sullens
	Date Written:	November 24, 2019
	Description:	Special include file for inventory demos
			automatically uses the correct stylesheet
*/

echo "<!doctype html> <!-- Author:       $author -->\n";
echo "<html lang=\"en\"><!-- Date Written: $dateWritten -->\n";
echo "<head>          <!-- Description:  $description -->\n";
echo "\t<title>$title</title>\n";
echo "\t<meta charset=\"utf-8\" />\n"; 
echo "\t<link rel=\"stylesheet\" href=\"$stylesheet.css\" />\n";
echo "</head>\n";
echo "<body id=\"$step\">\n";
echo "<div id=\"wrapper\">\n";
?>
