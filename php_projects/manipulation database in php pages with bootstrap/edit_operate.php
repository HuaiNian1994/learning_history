<?php
    $src=mysqli_connect("localhost","root","root","user_info");
    $userID=$_POST["id"];
    if(isset($_POST["name"])){
        $name=$_POST["name"];
        $SQL="update user_info_tb1 set name='$name' where id=$userID";//这个单引号很重要
        mysqli_query($src,$SQL);
    }
    if(isset($_POST["Birthday"])){
        $Birthday=$_POST["Birthday"];
        $SQL="update user_info_tb1 set Birthday='$Birthday' where id=$userID";//这个单引号很重要
        mysqli_query($src,$SQL);
    }
    if($_FILES["pic"]){
        $picname=$_FILES["pic"]["name"];
        //将文件名设为随机哈希文件名更好
        $imgsrc=$_FILES["pic"]["tmp_name"];
        $path="images/".uniqid().strrchr($picname,".");//若文件名使用原有的，与服务器上的图片有重名时，上传后将把这个重名文件覆盖
        //移动临时文件
        move_uploaded_file("$imgsrc","$path");//php.ini中限定文件大小为2M，注意不要传太大
        //改变数据库中存有的文件路径
        $SQL="update user_info_tb1 set pic='$path' where id=$userID";//这个单引号很重要
        mysqli_query($src,$SQL);
    }
        header("location:main.php");
?>