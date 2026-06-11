<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");

$host = "localhost";
$dbname = "react_crud";
$username = "root";
$password = "";

$db = new mysqli($host, $username, $password, $dbname);

if ($db->connect_error) {
    die(json_encode([
        "status" => false,
        "message" => "Database connection failed: " . $db->connect_error
    ]));
}

?>
