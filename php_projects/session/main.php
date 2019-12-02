<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Welcome ❤</title>
    <link rel="stylesheet" href="css/reset.css">
</head>
<body>
    <?php
    session_start(); 
    if(!isset($_SESSION['idOfThisSession'])){
        header("location:login.php");
    } ?>
    <div><?php echo '欢迎你，'.$_SESSION['idOfThisSession']['name'] ?></div>
    <a href="logout.php">登出</a>
</body>
</html>