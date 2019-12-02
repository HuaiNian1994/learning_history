<?php 
    //1、连接数据库
    $src=mysqli_connect("localhost","root","root","user_info");

    //2、设定编码
    mysqli_set_charset($src,"utf8");
    //3、调用函数，取得结果
    $SQL="select * from user_info_tb1";
    $resultSet=mysqli_query($src,$SQL);

    while($arr=mysqli_fetch_array($resultSet,MYSQL_ASSOC)){
        $results[]=$arr;
    }
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
        
        .table tbody tr td{
            /* 此处单纯用标签选择器无法覆盖bootstrap的默认样式 */
            vertical-align: middle;
        }
        .table tbody tr td img{
            width: 150px;
    
        }
        td:nth-child(3){
            text-align: center;
        }
        .page-header{
            margin-bottom: 100px;
        }

    </style>
</head>
<body >
    <div class="page-header ">
        <h1>&nbsp;&nbsp;资料管理<small>&nbsp;&nbsp;展示页</small></h1>
    </div>
    

  <div class="container">
        <table class="table  ">
            <thead >
               <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>pic</th>
                    <th>Birthday</th>
                    <th>operation</th>
               </tr>
            </thead>
            <tbody>
                <?php foreach($results as $key=>$value){?>
                    <tr>
                        <td><?php echo $value["id"]?></td>
                        <td><?php echo $value["name"]?></td>
                        <td><img class="img-thumbnail" src="<?php echo $value["pic"]?>" alt=""></td>
                        <td><?php echo $value["Birthday"]?></td>
                        <td class="col-md-3">
                                <a class="btn btn-primary" href="edit.php?id=<?php echo $value["id"]?>">编辑</a>
                                <a class="btn btn-primary" href="delete.php?id=<?php echo $value["id"]?>">删除</a>
                    </tr>
                <?php }?>
                
               
            </tbody>
    </table>
  </div>
  
</div>
</body>
</html>