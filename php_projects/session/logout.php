<?php 
    session_start();
    unset($_SESSION["idOfThisSession"]);
    header("location:login.php");
 ?>