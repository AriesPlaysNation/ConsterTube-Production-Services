<?php
/*  Author:             Brad Botteron
    Date Written:       2/11/20
*/
$title = "Portfolio JavaScript Page";

require("htmlJSHead.inc");
?>

<header>
    <h1>Index of ~<span id="directory"></span></h1>
</header>

<table id="indexList">
    <tr class="tableHeader">
        <th class="tableIcons">&nbsp;</th>
        <th class="tableName">Directory</th>
        <th class="tableModified">Last Modified</th>
    </tr>
    <tr class="indexBreakRow">
        <th colspan="3">
            <hr>
        </th>
    </tr>

    <tr>
        <th class="tableIcons"><img src="../img/back.gif"></th>
        <th class="tableName"><a href="../portHome.html.php">Parent Directory</a></th>
    </tr>

    <tbody id="tableContent"></tbody>

    <tr class="indexBreakRow">
        <th colspan="3">
            <hr>
        </th>
    </tr>
</table>

<?php require("htmlJSFooter.inc");?>