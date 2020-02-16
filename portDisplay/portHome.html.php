<?php
/*  Author:             Brad Botteron
    Date Written:       2/11/20
*/
$title = "Portfolio Home Page";

require ("htmlHead.inc");
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

    <tbody id="tableContent"></tbody>

    <tr class="indexBreakRow">
        <th colspan="3">
            <hr>
        </th>
    </tr>
    <tr>
        <th colspan="3">
            <i>Disclaimer: I did not personally create 100% of the pure html and css content. However, all JavaScript and PHP are my own creations.
            Any projects that involve the sql database are currently in the works as in these projects they were used on a private secured database.</i>
        </th>
    </tr>
</table>

<?php require ("htmlFooter.inc");?>