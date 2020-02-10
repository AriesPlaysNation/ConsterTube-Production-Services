<?php

$year = date('Y');

echo <<<heredoc
<footer>
\t\t<nav id="navFooter">
        <ul>
            <li class="navA"><a href="home.html.php">Home</a></li>
            <li class="navA"><a href="commands.html.php">Commands</a> </li>
        </ul>
    </nav>
    || &copy 2019-$year Aries Nation Bot Services ||</footer>
heredoc;

echo "</div><!--wrapper-->\n<script src=\"scripts/script.js\"></script>\n</body>\n</html>";
?>