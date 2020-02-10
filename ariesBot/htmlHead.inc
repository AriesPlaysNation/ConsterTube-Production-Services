<?php
/*	Author: 	Barry J. Sullens
	Date Written:	September 16, 2019
	Description:	Include file for demos
			automatically uses the correct chapter stylesheet
*/

echo "<!doctype html>";
echo "<html lang=\"en\">";
echo "<head>";
echo "\t<title>$title</title>\n";
echo "\t<meta charset=\"utf-8\" />\n";
echo "\t<link rel='stylesheet' href='css/botStyle.css'";
echo "</head>\n";
echo "<body>\n";
echo "<div id=\"wrapper\">\n";
echo <<<heredoc
<header>
    <nav id="nav">
        <ul>
            <li class="navA"><h2><a href="home.html.php">Aries Nation Bot</a></h2> </li>
            <li class="navA"><a href="home.html.php">Home</a></li>
            <li class="navA"><a href="commands.html.php">Commands</a> </li>
        </ul>
    </nav>
</header>
heredoc;

?>
