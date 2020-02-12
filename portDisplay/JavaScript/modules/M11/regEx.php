<?php
$author      = "Barry J. Sullens";
$dateWritten = "October 4, 2018";
$description = "Testing RegEx Examples";
$stylesheet  = "regEx";
$title       = $description;

require("htmlHead.inc");
echo "<h1>$title</h1>\n";

function displayHeading($num,$pattern)
{
   if ($num > 1) echo "</article>\n\n";
   echo "<article>\n";
   echo "<h2>RegEx Test $num: <code>$pattern</code></h2>\n";
} // END FUNCTION DISPLAYNEXTHEADING

function testRegEx($pattern,$description,$string)
{
   echo "\t<p>\"<code>$string</code>\"";
   if (preg_match($pattern,$string))
     {  echo " contains "; }
   else
     {  echo " <span class=red>does not contain</span> "; }
   echo $description . ".</p>\n";
} // END FUNCTION TESTREGEX()

$pattern1 = '/Wil[ck]o[ckx]*s?/';
displayHeading(1,$pattern1);
$description = "a match to the pattern";
$string1 = "Wilcocks";
$string2 = "Wilcox";
$string3 = "Wilkocs";
$string4 = "Wilcoks";
$string5 = "Wilkox";
$string6 = "Wilkoks";
$string7 = "Wilcok";
$string8 = "Wilkok";
$string9 = "Wilcock";
$string10 = "Willcox";


testRegEx($pattern1,$description,$string1);
testRegEx($pattern1,$description,$string2);
testRegEx($pattern1,$description,$string3);
testRegEx($pattern1,$description,$string4);
testRegEx($pattern1,$description,$string5);
testRegEx($pattern1,$description,$string6);
testRegEx($pattern1,$description,$string7);
testRegEx($pattern1,$description,$string8);
testRegEx($pattern1,$description,$string9);
testRegEx($pattern1,$description,$string10);

$pattern1     = '/.*\d\D*\d\D*\d\D*\d\D*\d\D*/';
displayHeading(2,$pattern1);
$description = "at least 5 digits somewhere in the string";

$string1 = "a1bc2cff34d5f6";
$string2 = "1a2b3c4d5e6";
$string3 = "a12345b";
$string4 = "12345";
$string5 = "12abc34";

testRegEx($pattern1,$description,$string1);
testRegEx($pattern1,$description,$string2);
testRegEx($pattern1,$description,$string3);
testRegEx($pattern1,$description,$string4);
testRegEx($pattern1,$description,$string5);

$pattern1 = '/[0-9]{5}/';
displayHeading(3,$pattern1);
$description = "exactly 5 consecutive digits somewhere in the string";

testRegEx($pattern1,$description,$string1);
testRegEx($pattern1,$description,$string2);
testRegEx($pattern1,$description,$string3);
testRegEx($pattern1,$description,$string4);
testRegEx($pattern1,$description,$string5);

$pattern1 = '/[0-9]{3}/';
$pattern2 = '/[0-9]{3}$/';
$pattern3 = '/[0-9]{3,}$/';
$pattern4 = '/[0-9]{3,5}$/';
$pattern5 = '/^[0-9]{3}/';
$pattern6 = '/^\D*\d\D*\d\D*\d\D*$/';

$description1 = "exactly 3 consecutive digits somewhere in the string";
$description2 = "3 consecutive digits at the end of the string";
$description3 = "at least 3 consecutive digits at the end of the string";
$description4 = "between 3 and 5 consecutive digits at the end of the string";
$description5 = "3 consecutive digits at the beginning of the string";
$description6 = "<strong>EXACTLY</strong> three digits in the string";

$string1 = "abcd12345678900";
$string2 = "abcd123456789x00";
$string3 = "abcd12345678x900";
$string4 = "123abcdefg";
$string5 = "123456789abcdefg";
$string6 = "a1b2cde3g";

displayHeading(4,$pattern1);
testRegEx($pattern1,$description1,$string1);
testRegEx($pattern1,$description1,$string2);
testRegEx($pattern1,$description1,$string3);
testRegEx($pattern1,$description1,$string4);
testRegEx($pattern1,$description1,$string5);
testRegEx($pattern1,$description1,$string6);

displayHeading(5,$pattern2);
testRegEx($pattern2,$description2,$string1);
testRegEx($pattern2,$description2,$string2);
testRegEx($pattern2,$description2,$string3);
testRegEx($pattern2,$description2,$string4);
testRegEx($pattern2,$description2,$string5);
testRegEx($pattern2,$description2,$string6);

displayHeading(6,$pattern3);
testRegEx($pattern3,$description3,$string1);
testRegEx($pattern3,$description3,$string2);
testRegEx($pattern3,$description3,$string3);
testRegEx($pattern3,$description3,$string4);
testRegEx($pattern3,$description3,$string5);
testRegEx($pattern3,$description3,$string6);

displayHeading(7,$pattern4);
testRegEx($pattern4,$description4,$string1);
testRegEx($pattern4,$description4,$string2);
testRegEx($pattern4,$description4,$string3);
testRegEx($pattern4,$description4,$string4);
testRegEx($pattern4,$description4,$string5);
testRegEx($pattern4,$description4,$string6);

displayHeading(8,$pattern5);
testRegEx($pattern5,$description5,$string1);
testRegEx($pattern5,$description5,$string2);
testRegEx($pattern5,$description5,$string3);
testRegEx($pattern5,$description5,$string4);
testRegEx($pattern5,$description5,$string5);
testRegEx($pattern5,$description5,$string6);

displayHeading(9,$pattern6);
testRegEx($pattern6,$description6,$string1);
testRegEx($pattern6,$description6,$string2);
testRegEx($pattern6,$description6,$string3);
testRegEx($pattern6,$description6,$string4);
testRegEx($pattern6,$description6,$string5);
testRegEx($pattern6,$description6,$string6);

$pattern1 = '/^pic[0-9]*\.png$/';
$pattern2 = '/^pic[0-9]*\.jpg$/';
$pattern3 = '/^pic[0-9]*\.[jp][pn]g$/';

$description = "a match to the pattern";

$string1 = "pic.png";
$string2 = "pic.jpg";
$string3 = "pic1.png";
$string4 = "pic1.jpg";
$string5 = "pic05.png";
$string6 = "pic05.jpg";
$string7 = "pic1029.png";
$string8 = "pic1029.jpg";

displayHeading(10,$pattern1);
testRegEx($pattern1,$description,$string1);
testRegEx($pattern1,$description,$string2);
testRegEx($pattern1,$description,$string3);
testRegEx($pattern1,$description,$string4);
testRegEx($pattern1,$description,$string5);
testRegEx($pattern1,$description,$string6);
testRegEx($pattern1,$description,$string7);
testRegEx($pattern1,$description,$string8);

displayHeading(11,$pattern2);
testRegEx($pattern2,$description,$string1);
testRegEx($pattern2,$description,$string2);
testRegEx($pattern2,$description,$string3);
testRegEx($pattern2,$description,$string4);
testRegEx($pattern2,$description,$string5);
testRegEx($pattern2,$description,$string6);
testRegEx($pattern2,$description,$string7);
testRegEx($pattern2,$description,$string8);

displayHeading(12,$pattern3);
testRegEx($pattern3,$description,$string1);
testRegEx($pattern3,$description,$string2);
testRegEx($pattern3,$description,$string3);
testRegEx($pattern3,$description,$string4);
testRegEx($pattern3,$description,$string5);
testRegEx($pattern3,$description,$string6);
testRegEx($pattern3,$description,$string7);
testRegEx($pattern3,$description,$string8);

$pattern1 = '/dog/';
$pattern2 = '/^dog/';
$pattern3 = '/^Dog/';
$pattern4 = '/dog$/';
$pattern5 = '/Dog$/';

$description = "a match to the pattern";

$string1 = "There is a dog";
$string2 = "Dogs are fun pets";
$string3 = "dogs are fun pets";
$string4 = "Doggone it. I like cats!";
$string5 = "My son enjoys Clifford the Big Red Dog";

displayHeading(13,$pattern1);
testRegEx($pattern1,$description,$string1);
testRegEx($pattern1,$description,$string2);
testRegEx($pattern1,$description,$string3);
testRegEx($pattern1,$description,$string4);
testRegEx($pattern1,$description,$string5);

displayHeading(14,$pattern2);
testRegEx($pattern2,$description,$string1);
testRegEx($pattern2,$description,$string2);
testRegEx($pattern2,$description,$string3);
testRegEx($pattern2,$description,$string4);
testRegEx($pattern2,$description,$string5);

displayHeading(15,$pattern3);
testRegEx($pattern3,$description,$string1);
testRegEx($pattern3,$description,$string2);
testRegEx($pattern3,$description,$string3);
testRegEx($pattern3,$description,$string4);
testRegEx($pattern3,$description,$string5);

displayHeading(16,$pattern4);
testRegEx($pattern4,$description,$string1);
testRegEx($pattern4,$description,$string2);
testRegEx($pattern4,$description,$string3);
testRegEx($pattern4,$description,$string4);
testRegEx($pattern4,$description,$string5);

displayHeading(17,$pattern5);
testRegEx($pattern5,$description,$string1);
testRegEx($pattern5,$description,$string2);
testRegEx($pattern5,$description,$string3);
testRegEx($pattern5,$description,$string4);
testRegEx($pattern5,$description,$string5);

require("regExFoot.inc");
?>
