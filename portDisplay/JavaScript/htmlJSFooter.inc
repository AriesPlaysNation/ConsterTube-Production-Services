<?php
/*	Author: 	Brad Botteron
Date Written:	02/11/2019
Description:	htmlFooter for each page in portDisplay
*/

$year = date('Y');

echo <<<heredoc
<footer>

    || &copy 2019-$year Brad Botteron Portfolio Display of Web Foundations Using JavaScript and PHP ||</footer>
heredoc;

echo "</div><!--wrapper-->\n<script src=\"../jsScript.js\"></script>\n</body>\n</html>";
?>