<?php
require '../connect.php';
$tw=$_GET['tw'];		//kategori tempat ibadah sekitar
$tipe=$_GET['tipe'];	//tipe hotel
$min=$_GET['min'];		//harga min
$max=$_GET['max'];		//harga max

$querysearch	="SELECT DISTINCT hotel.id as id, hotel.name as name, st_x(st_centroid(hotel.geom)) as lon, st_y(st_centroid(hotel.geom)) as lat from hotel left join detail_room on hotel.id = detail_room.id_hotel left join room on room.id=detail_room.id_room left join hotel_type on hotel.id_type=hotel_type.id, tourism where ";
if ($tw!="") {
	$querysearch	.="tourism.id = '$tw' and st_distancesphere(hotel.geom, tourism.geom) <= 300 ";
}
if($tw!=""&&$min!=""){
	$querysearch	.="and ";
}
if($min!=""){
	$querysearch	.="room.price >= $min and room.price <= $max "; 
}
if ($tw!=""&&$tipe!="") {
	$querysearch	.="and ";
}else if($min!=""&&$tipe!=""){
	$querysearch	.="and ";
}
if ($tipe!="") {
	$querysearch	.="hotel_type.id = '$tipe'";	
}
$hasil=pg_query($querysearch);
while($baris = pg_fetch_array($hasil))
	{
		$query="SELECT tourism.id as id2, tourism.name as name2, st_x(st_centroid(tourism.geom)) as lon2, st_y(st_centroid(tourism.geom)) as lat2 from hotel, tourism where st_distancesphere(hotel.geom, tourism.geom) <= 300 and hotel.id='".$baris['id']."'";
		$id=$baris['id'];
		$name=$baris['name'];
		$lat=$baris['lat'];
		$lng=$baris['lon'];
		$res=pg_query($query);
		while($row=pg_fetch_array($res)){
			$id2=$row['id2'];
			$lat2=$row['lat2'];
			$lng2=$row['lon2'];
		}
		$dataarray[]=array('id'=>$id,'name'=>$name, 'id2'=>$id2,'name2'=>$name2,'lng'=>$lng, 'lat'=>$lat, 'lng2'=>$lng2, 'lat2'=>$lat2);
	}
echo json_encode ($dataarray);
// echo $querysearch;
?>