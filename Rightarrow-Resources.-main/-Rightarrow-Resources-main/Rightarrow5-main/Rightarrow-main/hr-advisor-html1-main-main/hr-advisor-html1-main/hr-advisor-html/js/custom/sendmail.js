/*import email from './email.js';

function sendmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  const serviceID = "service_mv7ie9f";
  const templateID = "template_lejuzas";

  email.send(serviceID, templateID, params)
  .then((result) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(result);
      alert("Your message sent successfully");
    })
  .catch((err) => {
      console.log(err);
      alert("Error sending email: " + err.message);
    });
}

/*<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'phpmailer\PHPMailer.php';
require 'phpmailer\Exception.php';
require 'phpmailer\SMPT.php';



//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
   // $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp.gmail.com	';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'skjoshi161@gmail.com';                     //SMTP username
    $mail->Password   = 'secret';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('skjoshi161@gmail.com', 'contact form');
    $mail->addAddress('skjoshi0927@gmail.com', 'joshi');     //Add a recipient
   

    //Attachments
   // $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

    //Content
    $mail->isHTML(true);                                  //Set email format to HTML
    $mail->Subject = 'Test contact form';
    $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
   // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>*/ import email from './email.js';
import contact from './'

function sendmail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  const serviceID = "service_suk670of";
  const templateID = "template_lejuzas";

  emailjs.send(service_suk670of,template_lejuzas, params)

  
 .then((result) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(result);
      alert("Your message sent successfully");
    })
 .catch((err) => {
      console.log(err);
      alert("Error sending email: " + err.message);
    });
}