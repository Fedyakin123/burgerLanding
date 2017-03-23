<?php
//$name = $_POST['name'];
//$message = "Cooбщение от пользователя: $name";
//
//$result = mail('skabaz@yandex.ru', 'Заказ на бургеры', $message);
//
//
//
//echo $result;

require "vendor/PHPMailer-master/PHPMailerAutoload.php";

$name = $_POST['name'];
//$data = $_POST['data'];
//if ($name == "mailit") {
//    mail('asd@asd.ru', 'Hello from loftschool', "Привет из скрипта!".$data);
//}

//if ($name == "phpmailer") {
    $mail = new PHPMailer;

    $mail->SMTPDebug = 3;                               // Enable verbose debug output

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'skabaztest@mail.ru';                 // SMTP username
    $mail->Password = 'qwerty1234!';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to

    $mail->setFrom('skabaztest@mail.ru', 'Строительная компания');
    $mail->addAddress('skabaz@yandex.ru', 'Roman');     // Add a recipient
    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'Заказ на бургеры';
    $mail->Body    = 'Сообщение от пользователя:' . $name;
    $mail->AltBody = 'Привет, это тестовое письмо, как связь, как сам';

    $result = $mail->send();
echo "aaaaaand=>" . $result . 'Result';
//    if(1==1) {
//        echo json_encode(['error' => 1, 'message' => 'Ваше сообщение НЕ было отправлено']);
//        echo 'Mailer Error: ' . $mail->ErrorInfo;
//    } else {
//        echo json_encode(['error' => 0, 'message' => 'Ваше сообщение было отправлено']);
//    }
//}

