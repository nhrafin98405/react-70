<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

$conn = new mysqli("localhost", "root", "", "react_db");

if ($conn->connect_error) {
    die(json_encode(["message" => "Database connection failed"]));
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    echo json_encode(["message" => "No data received"]);
    exit;
}

$fname = $data['fname'];
$address = $data['address'];
$district = $data['district'];
$gender = $data['gender'];

$stmt = $conn->prepare(
    "INSERT INTO users (fname, address, district, gender) VALUES (?, ?, ?, ?)"
);

$stmt->bind_param("ssss", $fname, $address, $district, $gender);

if ($stmt->execute()) {
    echo json_encode(["message" => "Data saved successfully"]);
} else {
    echo json_encode(["message" => "Failed to save data"]);
}

$stmt->close();
$conn->close();

?>