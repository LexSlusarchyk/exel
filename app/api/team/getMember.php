<?php

include '../credentials.php';

$postdata = file_get_contents("php://input");

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT * FROM Team WHERE id=$postdata";

$result = $conn->query($sql)->fetch_object();
$result->name = stripslashes($result->name);
$result->position = stripslashes($result->position);
print json_encode($result);

$conn->close();
?>