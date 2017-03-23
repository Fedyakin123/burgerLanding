<?php
$name = $_POST['name'];
$message = "Cooбщение от пользователя: $name";

$result = mail('skabaz@yandex.ru', 'Заказ на бургеры', $message);



echo $result;