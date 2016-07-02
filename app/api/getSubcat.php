<?php

include 'credentials.php';

$postdata = file_get_contents("php://input");

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT * FROM Subcats WHERE s_id=$postdata";

$result = $conn->query($sql)->fetch_object();

if ($result->images) {
	$result->images = unserialize($result->images);
}



print json_encode($result);

$conn->close();
?>