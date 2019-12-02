<?php 
    $src=mysqli_connect("localhost","root","root","user_info");
    
    $userID=$_GET["id"];
    //1、连接数据库
   

    //2、设定编码
    mysqli_set_charset($src,"utf8");
    //3、调用函数，取得结果
    $SQL="select * from user_info_tb1 where id=$userID";
    $resultSet=mysqli_query($src,$SQL);
    $result=mysqli_fetch_array($resultSet,MYSQL_ASSOC);
    
    //4、关闭连接
    mysqli_close($src);
    
    
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="bootstrap-3.3.7-dist/css/bootstrap.min.css">
    <style>
        img{
            width: 50px;
            height: 50px;
        }
        form{
           
            margin-top: 50px;
        }
    </style>
</head>
<body>
    <div class="page-header">
        <h1>&nbsp;&nbsp;资料管理<small>&nbsp;&nbsp;修改页</small></h1>
    </div>
    

  <form class="col-md-6 col-md-offset-3" action="edit_operate.php" enctype="multipart/form-data" method="post">
            <div class="alert alert-danger">输入提示信息</div>
            <input type="text" class="hidden" name="id" value="<?php echo $result["id"]; ?>">
            <div class="form-group ">
                <label for="">Name</label>
                <input	class="form-control" type="text" name="name" value="<?php echo $result["name"]; ?>">
            </div>
            <div class="form-group ">
                <label for="">Birthday</label>
                <input	class="form-control" type="date" name="Birthday" value="<?php echo $result["Birthday"]; ?>">
            </div>
            <div class="form-group ">
                <label for="">Protrait photo</label>
                <input	 type="file" name="pic">
            </div>
            <input type="submit" class="form-group btn btn-success">           
  </form>
  
</div>
</body>
</html>