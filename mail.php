<?php
$name = $_POST['name'];
$message = "Coo������ �� ������������: $name";

$result = mail('skabaz@yandex.ru', '����� �� �������', $message);



echo $result;