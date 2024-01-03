<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$minBudget = $_POST['minBudget'];
$maxBudget = $_POST['maxBudget'];
$message = $_POST['message'];

$to = 'nithinbharathi9325@gmail.com';
$headers = 'From: ' . $email . "\r\n" .
   'Reply-To: ' . $email . "\r\n" .
   'X-Mailer: PHP/' . phpversion();

$body = "Name: $name\n";
$body .= "Email: $email\n";
$body .= "Phone: $phone\n";
$body .= "Subject: $subject\n";
$body .= "Minimum Budget: $minBudget\n";
$body .= "Maximum Budget: $maxBudget\n";
$body .= "Message:\n$message";

if (mail($to, $subject, $body, $headers)) {
   echo 'success';
} else {
   echo 'error';
}
?>
