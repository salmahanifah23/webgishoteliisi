<?php
require '../connect.php';
$culinary=$_GET['kul'];	//kategori tempat ibadah sekitar
$fas=$_GET['fas']; //fasilitas
$tipe=$_GET['tipe'];			//tipe hotel

$querysearch	="SELECT DISTINCT hotel.id as id, hotel.name as name, st_x(st_centroid(hotel.geom)) as lon, st_y(st_centroid(hotel.geom)) as lat from hotel left join detail_room on hotel.id = detail_room.id_hotel left join detail_facility_hotel on detail_facility_hotel.id_hotel = hotel.id left join facility_hotel on detail_facility_hotel.id_facility = facility_hotel.id left join hotel_type on hotel.id_type=hotel_type.id, culinary_place left join detail_culinary on culinary_place.id=detail_culinary.id_culinary_place left join culinary on detail_culinary.id_culinary=culinary.id where culinary.id = $culinary and st_distancesphere(hotel.geom, culinary_place.geom) <= 300 and facility_hotel.id in ($fas) and hotel_type.id = '$tipe'";	

$hasil=pg_query($querysearch);
while($baris = pg_fetch_array($hasil))
	{
		$query="SELECT culinary_place.id as id2, culinary_place.name as name2, st_x(st_centroid(culinary_place.geom)) as lon2, st_y(st_centroid(culinary_place.geom)) as lat2 from hotel, culinary_place where st_distancesphere(hotel.geom, culinary_place.geom) <= 300 and hotel.id='".$baris['id']."'";
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