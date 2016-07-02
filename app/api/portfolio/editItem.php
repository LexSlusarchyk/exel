<?php
include '../credentials.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection

$request->text =  addslashes($request->text);
$request->title =  addslashes($request->title);

if ($request->images) {
	$request->images = serialize($request->images);
}

$sql = "UPDATE Portfolio SET title='$request->title',
 eng_title='$request->eng_title',
  text='$request->text',
   images='$request->images',
    c_id='$request->c_id',
     s_id='$request->s_id'
      WHERE id='$request->id'";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>