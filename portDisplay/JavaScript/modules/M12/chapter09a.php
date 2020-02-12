<?php
$username     = $_POST["username"]; 
$emailAddress = $_POST["emailAddress"]; 
$telephone    = $_POST["telephone"];
?>
<!doctype html> <!-- Author:       Brad Botteron -->
<html lang="en"><!-- Date Written: 11/24/19   -->
<head>          <!-- Description:  Demonstrating hidden fields to preserve state -->
<title>Chapter09A: Thank you, <?php echo $username ?>!</title>
<meta charset="utf-8" /><!-- This series of Web pages will only work on the Web -->
<link rel="stylesheet" href="lab12.css" />
</head>
<body>
<div id="wrapper">
<header>
  <h1>Chapter09A: Thank you for participating,<br /><?php echo $username ?></h1>
</header>
<article>
<h2>This concludes our 3-part form</h2>
<p>We will process the information you provided us and spam your email box.</p>
<ul>
  <li>You can expect to receive tons of SPAM email at <?php echo $emailAddress ?>.</li>
  <li>You can expect to receive tons of telemarketing calls and SPAM texts at <?php echo $telephone ?>.</li>
  <li>We anticipate you will delete your account, <?php echo $username ?>, within one week from today.</li>
</ul>
<p>Thank you for your business!</p>
</article>
<footer>
  <p>&copy; <span id="copyright"></span>. Ivy Tech Community College.</p>
</footer>
</div><!-- wrapper -->
<script src="scripts/lab12a.js"></script>
</body>
</html>
