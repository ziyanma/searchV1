<?php
	header('Content-Type:text/html; charset=utf-8');//使用gb2312编码，使中文不会变成乱码
	$param=$_GET['param1'];
	$return = $param;
	if ($param == '杨峥') {
		$return = 'SNS';
	}
	echo $return/*."传送成功"*/;
?>