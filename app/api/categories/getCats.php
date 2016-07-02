<?php
session_start();

include '../credentials.php';

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT * FROM Categories";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
		$rows = array();
		while($r = mysqli_fetch_assoc($result)) {
			$sql = "SELECT * FROM Subcats WHERE c_id=$r[c_id]";
			$result2 = $conn->query($sql);
			$r['subcats'] = array();
			while($r2 = mysqli_fetch_assoc($result2)) {
				array_push($r['subcats'], $r2);
				
			}
		    $rows[] = $r;
		}
		print json_encode($rows);   
    
} else {
    echo "0 results";
}


$conn->close();
?>