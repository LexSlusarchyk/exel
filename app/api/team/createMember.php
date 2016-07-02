<?php
session_start();
include '../credentials.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);



$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


$request->name = addslashes($request->name);
$request->position = addslashes($request->position);


$sql = "INSERT INTO Team (name, position, image) VALUES ('$request->name', '$request->position', '$request->image')";

if ($conn->query($sql) === TRUE) {
 	echo "Новину додано успішно.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>