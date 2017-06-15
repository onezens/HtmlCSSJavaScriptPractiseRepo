<?php

$usename = $_POST['username'];
$password = $_POST['password'];
if ($usename == 'admin' && $password == 'admin') {
	
	echo "1";
}else{
	echo "0";
}


?>