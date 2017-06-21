<?php
$callback = $_GET['_jsonp'];
$arr = array('zhao', 'qian', 'sun', 'li');
echo $callback."(".json_encode($arr).")";
?>