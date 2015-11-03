<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "exel";
// Create connection
// $conn = new mysqli($servername, $username, $password);

// Check connection
// if ($conn->connect_error) {
//     die("Connection failed: " . $conn->connect_error);
// } 
// echo "Connected successfully";

// Create database
// $sql = "CREATE DATABASE exel";
// if ($conn->query($sql) === TRUE) {
//     echo "Database created successfully";
// } else {
//     echo "Error creating database: " . $conn->error;
// }

$conn = mysqli_connect($servername, $username, $password, $dbname);


// sql to create table
// $sql = "CREATE TABLE News (
// id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
// type VARCHAR(142) NOT NULL,
// title VARCHAR(1142) NOT NULL,
// image VARCHAR(142) NOT NULL,
// text TEXT NOT NULL
// )";




if ($conn->query($sql) === TRUE) {
    echo "Table MyGuests created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();

?>