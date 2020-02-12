<?php
$username = $_POST["username"]; 
?>
<!doctype html> <!-- Author:       Brad Botteron -->
<html lang="en"><!-- Date Written: 11/24/19   -->
<head>          <!-- Description:  Demonstrating hidden fields to preserve state -->
<title>Chapter09AB: Multi-page Forms 2</title>
<meta charset="utf-8" /><!-- This series of pages will only work on the Web. -->
<link rel="stylesheet" href="lab12.css" />
</head>
<body>
<div id="wrapper">
<header>
  <h1>Chapter09AB: Form Page 2</h1>
</header>
<article>
<h2>This is the Second of Three Pages</h2>
<form name="myform" action="chapter09ac.php" method="post">
<p>Enter email: 
   <input type="email" name="emailAddress" placeholder="email@domain.com" 
          autofocus required />
   <input type="hidden" name="username" value="<?php echo $username ?>" /></p>
<p><input type="submit" name="submit" value="Next ->" />
</form>
<p>View the source of this page to see the <strong>hidden</strong> fields from page 1.</p>
</article>
<footer>
  <p>&copy; <span id="copyright"></span>. Ivy Tech Community College.</p>
</footer>
</div><!-- wrapper -->
<script src="scripts/lab12a.js"></script>
</body>
</html>
