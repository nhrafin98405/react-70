<?php
include_once("dbconfig.php");

$sql = $db->query("SELECT * FROM user");

$rawData = $sql->fetch_assoc();



// print_r($rawData);

$records =[];

while($raw = $sql->fetch_assoc()){

    $records[] = $raw;
    
}

// print_r($records);

echo json_encode($records);

?>