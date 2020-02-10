<?php

$year = date('Y');

echo "<footer>|| &copy 2019-$year Aries Nation Bot Services ||";
echo <<<heredoc
\t\t<nav>
        <ul>
            <li class="navA"><a href="home.html.php">Aries Nation Bot</a> </li>
            <li class="navA"><a href="home.html.php">Home</a></li>
            <li class="navA"><a href="commands.html.php">Commands</a> </li>
        </ul>
    </nav>
heredoc;

echo "</div><!--wrapper-->\n<script src=\"scripts/script.js\"></script>\n</body>\n</html>";
?>