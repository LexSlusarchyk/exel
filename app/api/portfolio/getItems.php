<?php
session_start();

include '../credentials.php';

$conn = new mysqli($servername, $username, $password, $dbname);

$sql = "SELECT * FROM Portfolio";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
		$rows = array();
		while($r = mysqli_fetch_assoc($result)) {
		    
		    if ($r['images']) {
				$r['images'] = unserialize($r['images']);
			}

			$rows[] = $r;

		}
		print json_encode($rows);   
    
} else {
    echo "0 results";
}


$conn->close();
?>