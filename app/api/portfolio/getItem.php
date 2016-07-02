<?php

include '../credentials.php';

$postdata = file_get_contents("php://input");

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT * FROM Portfolio WHERE id=$postdata";

$result = $conn->query($sql)->fetch_object();
$result->title = stripslashes($result->title);
$result->text = stripslashes($result->text);

if ($result->images) {
	$result->images = unserialize($result->images);
}


print json_encode($result);

$conn->close();
?>