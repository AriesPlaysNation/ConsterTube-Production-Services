<!doctype html>
<html lang="en">
<head>
   <meta charset="utf-8" />
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Lab06</title>
   <link rel="stylesheet" href="lab06.css" />
   <script src="modernizr.custom.65897.js"></script>
   <style>
		p				{	clear: both; }
		
       .oneTwenty		{	width: 120px; 
							display: block;
							float: left;
							margin-bottom: 20px;
							margin-right: 10px;
							margin-left: 10px;
							text-align: left;
						}
		fieldset		{	margin-left: auto;
							margin-right: auto;
							width: 50%;
							border: 2px solid rgb(0,0,0);
						} 
	</style>
</head>

<body>
   <header>
      <h1>
         Lab06
      </h1>
   </header>

   <article>
      <h2>Your form has been submitted</h2>
      <section class="results">
         <h3>You entered the following data:</h3>
   
 <?php 
 $address = $_POST['Address'];
 $city    = $_POST['City'];
 $state   = $_POST['State'];
 $zip     = $_POST['Zip'];
 $ssn     = $_POST['SSN1'] . "-" . $_POST['SSN2'] . "-" . $_POST['SSN3'];
 $year    = date('Y');
 ?>
        <fieldset id="contactInfo">
		  <p><span class="oneTwenty">Address:</span>
		     <span class="oneTwenty"><?php echo  $address ?></span></p>
		  <p><span class="oneTwenty">City:</span>
		     <span class="oneTwenty"><?php echo  $city ?></span></p>
		  <p><span class="oneTwenty">State:</span>
		     <span class="oneTwenty"><?php echo  $state ?></span></p>
		  <p><span class="oneTwenty">Zip:</span>
		     <span class="oneTwenty"><?php echo  $zip ?></span></p>
		  <p><span class="oneTwenty">SSN:</span>
		     <span class="oneTwenty"><?php echo  $ssn ?></span></p>			 
		</fieldset>
      </section>
   </article>
   <footer>&copy; <?php echo $year ?>. Ivy Tech Community College Northeast.</footer>
</body>
</html>
