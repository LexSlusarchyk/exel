<?php
include '../credentials.php';

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

echo "Connected successfully";

// $sql = "CREATE TABLE News (
// id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// spec VARCHAR(4000), 
// title VARCHAR(1142) NOT NULL,
// image VARCHAR(142) NOT NULL,
// text TEXT NOT NULL,
// date VARCHAR(1142) NOT NULL
// )";


$sql = "CREATE TABLE news (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(145) NULL,
  `parent` VARCHAR(45) NULL)";


if (mysqli_query($conn, $sql)) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . mysqli_error($conn);
}

$conn->close();


// $sql = "CREATE TABLE Categories (
// c_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// title VARCHAR(542) NOT NULL,
// eng_title VARCHAR(142) NOT NULL
// )";






// $sql = "CREATE TABLE Subcats (
// s_id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// title VARCHAR(542) NOT NULL,
// eng_title VARCHAR(142) NOT NULL,
// images VARCHAR(10000) NOT NULL,
// text TEXT NOT NULL,
// c_id INT(6) UNSIGNED,
// FOREIGN KEY (c_id) REFERENCES Categories(c_id) 
// )";

// if ($conn->query($sql) === TRUE) {
//     echo "Table subCats created successfully";
// } else {
//     echo "Error creating table: " . $conn->error;
// }

// $sql = "CREATE TABLE Portfolio (
// id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// title VARCHAR(542) NOT NULL,
// eng_title VARCHAR(142) NOT NULL,
// images VARCHAR(10000) NOT NULL,
// text TEXT NOT NULL,
// s_id INT(6) UNSIGNED,
// c_id INT(6) UNSIGNED,
// FOREIGN KEY (c_id) REFERENCES Categories(c_id),
// FOREIGN Key (s_id) REFERENCES Subcats(s_id)
// )";


// $sql = "CREATE TABLE Team (
// id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// name VARCHAR(542) NOT NULL,
// position VARCHAR(10000) NOT NULL,
// image VARCHAR(10000) NOT NULL
// )";

// if ($conn->query($sql) === TRUE) {
//     echo "Table subCats created successfully";
// } else {
//     echo "Error creating table: " . $conn->error;
// }




?>