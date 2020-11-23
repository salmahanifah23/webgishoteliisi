<?php
require '../connect.php';
$product=$_GET['sou'];			//kategori tempat ibadah sekitar
$intyp=$_GET['intyp'];			//tipe industri
$tipe=$_GET['tipe'];			//tipe hotel

$querysearch	="SELECT DISTINCT hotel.id as id, hotel.name as name, st_x(st_centroid(hotel.geom)) as lon, st_y(st_centroid(hotel.geom)) as lat from hotel left join detail_hotel on detail_hotel.id_hotel=hotel.id left join hotel_type on hotel.id_type=hotel_type.id, souvenir left join detail_product_souvenir on souvenir.id=detail_product_souvenir.id_souvenir left join product_souvenir on detail_product_souvenir.id_product=product_souvenir.id, industry_type left join small_industry on small_industry.id_industry_type=industry_type.id where product_souvenir.id = $product and st_distancesphere(hotel.geom, souvenir.geom) <= 300 and industry_type.id = '$intyp' and hotel_type.id = '$tipe' and st_distancesphere(hotel.geom, small_industry.geom) <= 300";	

$hasil=pg_query($querysearch);
while($baris = pg_fetch_array($hasil))
	{
		  $query="SELECT souvenir.id as id2, souvenir.name as name2, st_x(st_centroid(souvenir.geom)) as lon2, st_y(st_centroid(souvenir.geom)) as lat2 from hotel, souvenir where st_distancesphere(hotel.geom, souvenir.geom) <= 300 and hotel.id='".$baris['id']."'";
		  $query2="SELECT small_industry.id as id3, st_x(st_centroid(small_industry.geom)) as lon3, st_y(st_centroid(small_industry.geom)) as lat3 from small_industry, hotel where st_distancesphere(hotel.geom, small_industry.geom) <= 300 and hotel.id='".$baris['id']."'";
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
		$res2=pg_query($query2);
		while($row2=pg_fetch_array($res2)){
		$id3=$row2['id3'];
		$lat3=$row2['lat3'];
		$lng3=$row2['lon3'];
		}
		$dataarray[]=array('id'=>$id,'name'=>$name, 'lng'=>$lng, 'lat'=>$lat, 'id2'=>$id2,'lng2'=>$lng2, 'lat2'=>$lat2, 'id3'=>$id3,'lng3'=>$lng3, 'lat3'=>$lat3);
	}
echo json_encode ($dataarray);
// echo $querysearch;
?>