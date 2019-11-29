<?php

$username       = $_POST["username"];
$emailAddress   = $_POST["emailAddress"];
$telephone      = $_POST["telephone"];

$to = "bradbotteron13@gmail.com, conster954@gmail.com";
$headers = "From: Website Form ConsterTube Production Services";
$email_subject = "New Form Submission";
$email_body = "User: ".$username. " with the email: " .$emailAddress. " would like you to contact him at: " .$telephone. ".";
mail($to, $email_subject, $email_body, $headers);

?>
<!doctype html> <!-- Brad Botteron -->
<html lang="en"><!-- ConsterTube Production Services -->
<head>
    <title>Form Submission</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="style.css" />
</head>
<body>
<header>
    <span id="logoAndName">
        <img id="topLogo" src="img/logoFinal.png">
        <h1 id="topHeader">ConsterTube Production Services</h1></span>
    <ul id="nav"></ul>
</header>
<wrapper style="text-align: center">

    <h1>Thank you for submitting your information, <?php echo $username ?>!</h1>
    <h2>We will get back to you within 48 hours.</h2>
    <p>Look out in your inbox and text messages!</p>

        Go back <a href="index.html" style="background-color: #676EFF">home</a> here.<br /><br /><br />
        Add <a href="mailto: conster954@gmail.com" style="background-color: #676EFF">conster954@gmail.com</a> to your email contact list<br /><br /><br />
        Add <a href="mailto: bradbotteron13@gmail.com" style="background-color: #676EFF">bradbotteron13@gmail.com</a> to your email contact list<br /><br /><br />
        Verify all information below is correct<br /><br /><br />
        <?php echo $username ?><br /><br /><br />
        <?php echo $emailAddress ?><br /><br /><br />
        <?php echo $telephone ?><br /><br /><br />

    <p>If any above information is incorrect please <a href="mailto: conster954@gmail.com">email me</a> directly!</p>


    <footer>
        &copy; 2019-<span id="year">year</span> ConsterTube Production Services
    </footer>
</wrapper>
<script src="scripts/script.js"></script>
</body>
</html>