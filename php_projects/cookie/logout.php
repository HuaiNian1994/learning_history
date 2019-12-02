<?php 
    setcookie("isLogin","",time()+20);
    header("location:login.php");
 ?>