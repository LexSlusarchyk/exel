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

$sql = "INSERT INTO News (title, spec, text, image) VALUES ('$request->title', '$request->spec', '$request->text', '$request->image')";

if ($conn->query($sql) === TRUE) {
 	echo "Новину додано успішно.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
