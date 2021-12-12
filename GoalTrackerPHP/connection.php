<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header ("Access-Control-Allow-Headers: Content-Type, Authorization, Accept, Accept-Language, X-Authorization");
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: text/plain');


  $server = "localhost";
  $username = "root";
  $password = "root";
  $dbname = "goaltackerdb";

  $connection = new mysqli($server, $username, $password, $dbname);

  if($connection->connect_error){
    die("Failed");
  }

?>
