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
    $arr1=array("xixi"=>1,"haha"=>2,"xiha"=>3);
    $arr2=[4,5,6];
    $arr1[]=$arr2;
    $arr1[]=$arr2;
    var_dump($arr1);
    	?>
</body>
</html>