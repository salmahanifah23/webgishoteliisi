<?php
	$host = "localhost";
	$user = "postgres";
	$pass = "12345";
	$port = "5433";
	$dbname = "bkt_tourism1";
	$conn = pg_connect("host=".$host." port=".$port." dbname=".$dbname." user=".$user." password=".$pass) or die("Gagal");
?>