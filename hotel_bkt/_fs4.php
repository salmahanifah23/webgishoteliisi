<?php
require '../connect.php';
$category=$_GET['category'];//kategori tempat ibadah sekitar
$tw=$_GET['tw'];			//wisata
$tipe=$_GET['tipe'];		//tipe hotel

$querysearch	="SELECT DISTINCT hotel.id as id, hotel.name as name, st_x(st_centroid(hotel.geom)) as lon, st_y(st_centroid(hotel.geom)) as lat from hotel left join hotel_type on hotel.id_type=hotel_type.id, tourism, worship_place left join category_worship_place on worship_place.id_category=category_worship_place.id where tourism.id = '$tw' and st_distancesphere(hotel.geom, tourism.geom) <= 300 and category_worship_place.id = $category and st_distancesphere(hotel.geom, worship_place.geom) <= 300 and hotel_type.id = '$tipe'";

$hasil=pg_query($querysearch);
while($baris = pg_fetch_array($hasil))
	{

		$query1="SELECT tourism.id as id2, st_x(st_centroid(tourism.geom)) as lon2, st_y(st_centroid(tourism.geom)) as lat2 from tourism, hotel where st_distancesphere(hotel.geom, tourism.geom) <= 300 and hotel.id='".$baris['id']."'";

		$query2="SELECT worship_place.id as id3, st_x(st_centroid(worship_place.geom)) as lon3, st_y(st_centroid(worship_place.geom)) as lat3 from worship_place, hotel where st_distancesphere(hotel.geom, worship_place.geom) <= 300 and hotel.id='".$baris['id']."'";
		$res1=pg_query($query1);
		$row1=pg_fetch_array($res1);
		$res2=pg_query($query2);
		$row2=pg_fetch_array($res2);

		$id=$baris['id'];
		$name=$baris['name'];
		$lat=$baris['lat'];
		$lng=$baris['lon'];
		$id2=$row1['id2'];
		$lat2=$row1['lat2'];
		$lng2=$row1['lon2'];
		$id3=$row2['id3'];
		$lat3=$row2['lat3'];
		$lng3=$row2['lon3'];
		$dataarray[]=array('id'=>$id,'name'=>$name, 'lng'=>$lng, 'lat'=>$lat, 'id2'=>$id2,'lng2'=>$lng2, 'lat2'=>$lat2, 'id3'=>$id3,'lng3'=>$lng3, 'lat3'=>$lat3);
	}
echo json_encode ($dataarray);
// echo $querysearch;
?>