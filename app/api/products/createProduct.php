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
$request->spec = addslashes($request->spec);
$request->spec = addslashes($request->price);
$request->spec = addslashes($request->cat);

$sql = "INSERT INTO Products (title, spec, text, image, price, cat) VALUES ('$request->title', '$request->spec', '$request->text', '$request->image', '$request->price', '$request->cat')";

if ($conn->query($sql) === TRUE) {
 	echo "Товар додано успішно.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
