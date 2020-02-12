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
</table>

<?php require ("htmlFooter.inc");?>