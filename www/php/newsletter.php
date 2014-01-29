<?php

// CUSTOMIZATION START

$subscribe = "youremail@yourdomain.com";  // insert your subscribe email address here
$unsubscribe = "youremail@yourdomain.com"; //the unsubscribe function is unused in this instance

// CUSTOMIZATION END

if (count($_POST) == 0) die("");


$from = $_POST["email"];


if ($_POST['unsubscribe'] != "on") {
	$to = $subscribe;
	$subject = "subscribed to the newsletter"; //subscribe email subject line & content
	echo "subscribed"; //message appearing in form
} else {
	$to = $unsubscribe;
	$subject = "unsubscribed from newsletter"; //unsubscribe email subject line & content
	echo "unsubscribed"; //message appearing in form
}


$header = "From: $from\n";
mail($to, $subject,$subject, $header,"-f$from");

?>