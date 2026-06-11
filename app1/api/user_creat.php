<?php


include_once("dbconfig.php");
 $data = json_decode(file_get_contents('php://input'), true);
        
$name = $data['fname'];
$gender = $data['gender'];
$district = $data['district'];
$address = $data['address'];

if(!empty($data)){
    $db->query("INSERT INTO user (id,name,gender,district,address) VALUES (NULL,'$name','$gender','$district','$address')");
}





    if($db->affected_rows>0){
        echo json_encode(["message" => "User created successfully."]);
    }else{
        echo json_encode(["message" => "somthing wrong."]);
    }


?>