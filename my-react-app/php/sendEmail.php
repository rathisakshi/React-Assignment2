<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';


if (isset($_POST['fname']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['message'])) {

    $firstname = $_POST['fname'];
    $lastname = $_POST['lname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);
    try {

        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'sakshi.rathi@sigmainfo.net';
        $mail->Password = '';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        $mail->setfrom('sakshi.rathi@sigmainfo.net', 'Admin');
        $mail->addaddress('sakshi.rathi@sigmainfo.net', '@Sakshi ');


        $mail->Subject = 'Mail From ' . $firstname;
        $mail->Body = $message;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo 'Message could not be sent.';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    }
} else {
    echo 'Message could not be sent no data.';
}




?>