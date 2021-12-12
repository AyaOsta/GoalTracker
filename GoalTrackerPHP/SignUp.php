

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
        $firstname = $request->firstname;
        $lastname = $request->lastname;
        $age = $request->age;
        $email = $request->email;
        $country = $request->country;
        $city = $request->city;
        $username = $request->username;
        $pass = $request->password;

        if (isset($postdata)) {

                if ($firstname != "") {
                    echo "Server returns: " . $firstname;
                }
                else {
                    echo "Empty username parameter!";
                }
            }
            else {
                echo "Not called properly with username parameter!";
            }



        $sql = "INSERT INTO users (firstname, lastname, age, country, city, email, username, password) VALUES ('$firstname', '$lastname', '$age', '$country', '$city', '$email', '$username', '$pass')";

        if ($connection->query($sql) === TRUE) {
            
//        header("Location: ./../MainPageWithProfile.php");
         console.log("New record created successfully");
        } else {
        echo "Error: " . $sql . "<br>" . $connection->error;
          }
//        header("Location:homepage.html");

        ?>
