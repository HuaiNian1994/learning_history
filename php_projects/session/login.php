<?php	
function getpost($str){//为了避免报“$_POST[]中的键未定义”而使用此函数
    $val=!isset($_POST[$str])?NULL:$_POST[$str];
    return $val;
}
$username=getpost("username");
$userpwd=getpost("userpwd");
// 判定用户是否在本页面提交了请求
    if($_SERVER["REQUEST_METHOD"]=="POST"){//此处的POST必须是大写
        //数据是否合法
            //不合法时
            if($username==NULL||trim($username)==""){
                //显示提示信息
                $GLOBALS["warning"]="请输入用户名";
            }else if($userpwd==NULL||trim($userpwd)==""){
                //显示提示信息
                $GLOBALS["warning"]="请输入密码";
            }
                
            //合法时
            else{
                //验证数据
                $data=file_get_contents("userlist.json");//注意加引号
                $userArr=json_decode($data,true);
               
                for( $i=0;$i<count($userArr);$i++){
                    if($userArr[$i]["name"]==$username){
                        if($userArr[$i]["password"]==$userpwd){
                            // 通过验证时
                            session_start();
                            $_SESSION['idOfThisSession']=array("name"=>$username);
                            header("location:main.php");
                        }else{
                           break;
                        }
                    }
                }
                //未通过验证时
                $GLOBALS["warning"]="用户名或密码错误";
                    
            }
                
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>login</title>
    <link rel="stylesheet" href="css/reset.css">
    <style>
        form{
            border:1px solid rgba(150,150,150,0.5);
            border-radius:20px;
            width:25%;
            height:50%;
            margin:0 auto;
            padding-top:7%;
            margin-top:5%;
        }
        input{
            border:1px solid rgba(150,150,150,0.5);
            border-radius:5px;
            width:85%;
            height:10%;
            margin:0 auto;
            margin-top:5%;
            text-indent:10%;
            display:block;
        }
        input[type="submit"]{
            background-color:rgb(0,80,206);
            margin-top:20%;
            font-weight:700;
            color:white;
            text-indent:0;
            text-align:center;
        }
    </style>
</head>
<body>
    <form action="<?php echo $_SERVER["PHP_SELF"];?>" method="post">
        <?php if (isset($GLOBALS["warning"])) {?>
            <div class="warning"><?php echo $GLOBALS["warning"]?></div>
        <?php }?>
        <input type="text" placeholder="请输入用户名" id="username" name="username">
        <input type="password" placeholder="请输入密码" id="userpwd" name="userpwd">
        <input type="submit" value="Login">
    </form>
</body>
</html>