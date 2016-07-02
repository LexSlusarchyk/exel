<?php
session_start();
include '../credentials.php';


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);


$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 


$request->title = addslashes($request->title);
$request->text = addslashes($request->text);

if ($request->images) {
	$request->images = serialize($request->images);
}

$sql = "INSERT INTO Portfolio (title, text, images, c_id, s_id) VALUES ('$request->title', '$request->text', '$request->images', '$request->c_id', '$request->s_id')";

if ($conn->query($sql) === TRUE) {
 	echo "Елемент додано успішно.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
