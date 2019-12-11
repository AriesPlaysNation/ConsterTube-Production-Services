<?php
$firstName      = $_POST["firstName"];
$lastName       = $_POST["lastName"];
$emailAddress   = $_POST["emailAddress"];
$telephone      = $_POST["telephone"];

$to = "bradbotteron13@gmail.com";
$headers = "From: Website Form ConsterTube Production Services";
$email_subject = "New Form Submission";
$email_body = "User: ".$firstName. " " .$lastName. "-------Email: " .$emailAddress. "-------Phone=" .$telephone. ".";
mail($to, $email_subject, $email_body, $headers);

$displayString = "<h1>Thank you for submitting your information, " . $firstName . " " . $lastName . "!</h1><br>";
$displayString .= "<h2>We will get back to you within 48 hours.</h2><br>";
$displayString .= "<p>Look out in your inbox and text messages!</p><br>";
$displayString .= "Go back <a href=\"index.html\" style=\"background-color: #676EFF\">home</a> here.<br><br><br>";
$displayString .= "Add <a href=\"mailto: conster954@gmail.com\" style=\"background-color: #676EFF\">conster954@gmail.com</a> to your email list<br><br><br>";
$displayString .= "Add <a href=\"mailto: bradbotteron13@gmail.com\" style=\"background-color: #676EFF\">bradbotteron13@gmail.com</a> to your email list<br><br><br>";
$displayString .= "Verify all information below is correct<br><br><br>";
$displayString .= "<p style=\"border: solid 1px white\">";
$displayString .= " " .$firstName. " " .$lastName. "<br><br><br>";
$displayString .= " " .$emailAddress. "<br><br><br>";
$displayString .= " " .$telephone. "<br><br><br>";

echo $displayString;

?>