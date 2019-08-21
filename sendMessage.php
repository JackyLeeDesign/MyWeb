<?php
function clean($data)
{
  return htmlspecialchars(addslashes($data));
}

$name = clean($_POST['name']);
$email = clean($_POST['email']);
$content = clean($_POST['content']);
$myfile = fopen("whoContactMe.txt", "a") or die("Unable to open file!");
$writetxt = "Name：".$name."Email：".$email."Content：".$content."\n";
fwrite($myfile, $writetxt);
fclose($myfile);
?>

