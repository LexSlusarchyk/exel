<?php

include '../credentials.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$conn = new mysqli($servername, $username, $password, $dbname);

$request->name =  addslashes($request->name);
$request->position =  addslashes($request->position);

$sql = "UPDATE Team SET name='$request->name', position='$request->position', image='$request->image' WHERE id='$request->id'";


if ($conn->query($sql) === TRUE) {
    echo "successfully updated";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>