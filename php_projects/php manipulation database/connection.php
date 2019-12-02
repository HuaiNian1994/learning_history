<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <?php 
    $data=mysqli_connect("localhost","root","root","db1");
    if($data){
        echo "嘻嘻";
    }else{
        echo "哈哈";
    }
?>
</body>
</html>