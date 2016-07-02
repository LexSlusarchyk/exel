<?php

$postdata = file_get_contents("php://input");

$replace = explode(",", $postdata);

$replaced = $replace[1];

$data = base64_decode($replaced);

$formImage = imagecreatefromstring($data);

$name = md5(rand(100, 200)) . '.jpg';
$directory = 'uploads/' . $name;

$image = imagejpeg($formImage, $directory);

echo 'api/uploads/' . $name;

?>