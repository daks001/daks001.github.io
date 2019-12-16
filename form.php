<?php
    $name = $_POST['name'];
    $visitor_email = $_POST['email'];
    $message = $_POST['message'];

    $email_from = 'dakshika001@gmail.com';

    $email_subject = "New Form Submission";

    $email_body = "Username: $name.\n".
                    "User email: $visitor_email.\n". 
                        "User message: $message.\n";
    
    $to = "dakshika001@gmail.com";

    $header = "From: $email_from \r\n";
    
    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to, $email_subject, $email_body, $headers);

    header("Location: index.html");
?>