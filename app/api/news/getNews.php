<?php
session_start();

include '../credentials.php';

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT * FROM News";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
		$rows = array();
		while($r = mysqli_fetch_assoc($result)) {
		    $rows[] = $r;
		}
		print json_encode($rows);   
    
} else {
    echo "0 results";
}


$conn->close();
?>