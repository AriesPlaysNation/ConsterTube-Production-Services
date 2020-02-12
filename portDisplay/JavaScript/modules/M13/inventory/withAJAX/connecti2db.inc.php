<?php
  #  Author:			Barry J. Sullens
  #  Last Updated:		November 24, 2019
  #  Description:		establish a connection to the SQL server
  #  Dependencies:		calling script must assign $dbName
  #				before requiring this file.

    // Assign variables
    $host     = "127.0.0.1";		// must use 127.0.0.1 with mysqli
    $uname    = "ajacks";	
    $pass     = "BR2wRtMSdh6ESHtY";

    // Connect to SQL Server
    $connection = mysqli_connect($host,$uname,$pass,$dbName) // attempt to connect to MySQL server
      or
    die ("Connection to SQL server could not be established.\n");

    // USE the Database
    $result = mysqli_select_db($connection,$dbName) // attempt to USE chosen database
      or
    die ("<br />$dbName database could not be selected. " . mysqli_error($connection));
?>
