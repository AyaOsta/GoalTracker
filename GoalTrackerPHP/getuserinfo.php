<?php

include("connection.php");

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header ("Access-Control-Allow-Headers: Content-Type, Authorization, Accept, Accept-Language, X-Authorization");
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: text/plain');

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
$username = $request->username;

$sql = "SELECT firstname, lastname FROM users WHERE username= '$username'";
$result = mysqli_query($connection,$sql);
//$row = mysqli_fetch_array($result,MYSQLI_ASSOC);
//$rows = mysqli_num_rows($result);

$res ='';


if (mysqli_num_rows($result) > 0) {
  // output data of each row
  while($row = mysqli_fetch_assoc($result)) {
    $res .=  $row["firstname"]. " " . $row["lastname"];
  }
} else {
  $res .= "0 results";
}

//if ($rows == 1) {
//
//    $res .=  $row["fname"]. " " . $row["lname"] ;
//
//} else {
//    $res .= "not found";
//}


$json = json_encode($res);
print $json;

?>
