<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Oldschool SSR Example with PHP</title>
</head>
<body>
  <?php
    include 'greeting.php'; // get a class from another file
    
    $helloMessage = "Hello PHP!";
    $msg = new Greeting();
    $msg->set_msg($helloMessage);

    $x = 2;
    $y = 5;
  ?>
  <h1>Index.php</h1>
  <h2><?php echo $msg->get_msg() ?></h2>

  <p>The result of <?php echo $x . " + " . $y . " = " . ($x + $y) ?></p>

  <?php 
    echo "<p>It is also possible to write HTML inside strings.</p>";
    echo '<a href="about.php">Click here</a>'
  ?>
</body>
</html>