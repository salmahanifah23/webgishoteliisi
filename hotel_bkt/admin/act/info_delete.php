<?php
include ('../../../connect.php');
$id_info = $_GET['id_informasi'];
$id_hotel = $_POST['id_hotel'];
echo "$id_info --> id_info, $id_hotel= hotel";

	$sql1   = "delete from information_admin where id_informasi = $id_info";
	$delete1 = pg_query($sql1);
	if ($delete1){
		echo "<script>alert ('Data Successfully Delete');</script>";
	}
	else{
		echo "<script>alert ('Error');</script>";
	}
	
	echo "<script>eval(\"location:../?page=hotel_detail&id=$id_hotel\");</script>";
?>