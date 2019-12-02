<?php 
    $userID=$_GET["id"];
    //1、连接数据库
    $src=mysqli_connect("localhost","root","root","user_info");

    //2、设定编码
    mysqli_set_charset($src,"utf8");
    //3、调用函数，取得结果
    $SQL="delete from user_info_tb1 where id=$userID";
    mysqli_query($src,$SQL);
 
    //4、关闭连接
    mysqli_close($src);

    header("location:main.php");
?>