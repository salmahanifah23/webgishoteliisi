<?php
require '../connect.php';
$ik=$_GET['ik'];	//kategori tempat ibadah sekitar
$fas=$_GET['fas']; //fasilitas
$destinasi=$_GET['destinasi'];			//destinasi hotel

$querysearch	="SELECT DISTINCT hotel.id as id, hotel.name as name, angkot.route_color as color, st_x(st_centroid(hotel.geom)) as lon, st_y(st_centroid(hotel.geom)) as lat from hotel left join detail_hotel on detail_hotel.id_hotel=hotel.id left join angkot on detail_hotel.id_angkot=angkot.id left join detail_facility_hotel on detail_facility_hotel.id_hotel = hotel.id left join facility_hotel on detail_facility_hotel.id_facility = facility_hotel.id, small_industry left join detail_product_small_industry on small_industry.id=detail_product_small_industry.id_small_industry left join product_small_industry on detail_product_small_industry.id_product=product_small_industry.id where product_small_industry.id = $ik and st_distancesphere(hotel.geom, small_industry.geom) <= 300 and facility_hotel.id in ($fas) and angkot.id = '$destinasi'";  

$hasil=pg_query($querysearch);
while($baris = pg_fetch_array($hasil))
	{
		$query="SELECT small_industry.id as id2, small_industry.name as name2, st_x(st_centroid(small_industry.geom)) as lon2, st_y(st_centroid(small_industry.geom)) as lat2 from hotel, small_industry where st_distancesphere(hotel.geom, small_industry.geom) <= 300 and hotel.id='".$baris['id']."'";
		$id=$baris['id'];
		$name=$baris['name'];
		$lat=$baris['lat'];
		$lng=$baris['lon'];
		$color=$baris['color'];
		$res=pg_query($query);
		while($row=pg_fetch_array($res)){
			$id2=$row['id2'];
			$lat2=$row['lat2'];
			$lng2=$row['lon2'];
		}
		$dataarray[]=array('id'=>$id,'name'=>$name, 'id2'=>$id2,'name2'=>$name2,'lng'=>$lng, 'lat'=>$lat, 'lng2'=>$lng2, 'lat2'=>$lat2, 'color'=>$color);
	}
echo json_encode ($dataarray);
// echo $querysearch;
?>