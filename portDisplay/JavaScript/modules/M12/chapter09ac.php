<?php
$username     = $_POST["username"]; 
$emailAddress = $_POST["emailAddress"]; 
?>
<!doctype html> <!-- Author:       Brad Botteron -->
<html lang="en"><!-- Date Written: 11/24/19   -->
<head>          <!-- Description:  Demonstrating hidden fields to preserve state -->
<title>Chapter09AC: Multi-page Forms 3</title>
<meta charset="utf-8" /><!-- This series of pages will only work on the Web. -->
<link rel="stylesheet" href="lab12.css" />
</head>
<body>
<div id="wrapper">
<header>
  <h1>Chapter09AC: Form Page 3</h1>
</header>
<article>
<h2>This is the Third of Three Pages</h2>
<form name="myform" action="chapter09a.php" method="post">
<p>Enter phone: 
   <input type="tel" name="telephone" placeholder="000-000-0000" 
          autofocus required />
   <input type="hidden" name="username" value="<?php echo $username ?>" />
   <input type="hidden" name="emailAddress" value="<?php echo $emailAddress?>" />
</p>
<p><input type="submit" name="submit" value="Submit" />
</form>
<p>View the source of this page to see the <strong>hidden</strong> fields from page 2.</p>
</article>
<footer>
  <p>&copy; <span id="copyright"></span>. Ivy Tech Community College.</p>
</footer>
</div><!-- wrapper -->
<script src="scripts/lab12a.js"></script>
</body>
</html>
