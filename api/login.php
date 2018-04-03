<?php
    header('Access-Control-Allow-Origin:*');
    include "DBHelper.php";
    
    $name = isset($_POST['name']) ? $_POST['name'] : "";
    $password = isset($_POST['password']) ? $_POST['password'] : "";
    $sql="select * from superadmin where password='$password' and name='$name'";
    $result = query_oop($sql);
    if (!empty($result)){
        echo 'true';
    }
    else{
        echo 'false';
    }
?>