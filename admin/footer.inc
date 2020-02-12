<?php
/* Author:          Brad Botteron
Date Written:       2/12/2020
Desc:               Footer for admin page
*/

$year = date('Y');
echo <<<heredoc
<footer>|| &copy 2019-$year Brad Botteron Portfolio Display of Web Foundations Using JavaScript and PHP ||</footer>
</div><!--wrapper-->\n<script src="adminScript.js"></script>\n</body>\n</html>
heredoc;
?>