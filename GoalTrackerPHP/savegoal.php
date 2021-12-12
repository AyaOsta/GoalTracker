<?php
include("connection.php");

//header('Access-Control-Allow-Origin: *');
//header('Content-Type: application/json');
//header('Access-Control-Allow-Methods: POST');
//header ("Access-Control-Allow-Headers: Content-Type, Authorization, Accept, Accept-Language, X-Authorization");
//header('Access-Control-Allow-Headers: Content-Type');
//header('Content-Type: text/plain');


$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$title = $request->goaltitle;
$description = $request->goaldescription;
$startdate = $request->startdate;
$enddate = $request->enddate;
$starttime = $request->starttime;
$endtime = $request->endtime;
$gaolsteps = $request->gaolsteps;
$progress =$request->progress;

if (isset($postdata)) {

   if ($title != "" ) {
//            echo "Server returns: " . $title;
  }  else {
            echo "Empty title parameter!";
            }
        }
    else {
        echo "Not called properly with username parameter!";
    }



$sql = "INSERT INTO goals (title, description, startdate, enddate, starttime, endtime, goalsteps, progress) VALUES ('$title', '$description', '$startdate', '$enddate', '$starttime', '$endtime', '$gaolsteps', '$progress')";

$msg = '';

if ($connection->query($sql) === TRUE) {
        $msg .= "stored";
//        header("Location: ./dashboard");
   console.log("New record created successfully");
} else {
    echo "Error: " . $sql . "<br>" . $connection->error;
        $msg .= "not stored";

    }

    $json = json_encode($msg);
    print $json;
?>
