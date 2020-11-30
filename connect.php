<?php
	$host = "ec2-54-85-13-135.compute-1.amazonaws.com";
	$user = "uqpturijbbhujs";
	$pass = "3fd57328b21d1b04cdf088d8d62b5f72d6d0821891d4bc419ef5c9f1599dc76e";
	$port = "5432";
	$dbname = "dfg66k3e5bbjdq";
	$conn = pg_connect("host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$pass) or die("Gagal");
?>
